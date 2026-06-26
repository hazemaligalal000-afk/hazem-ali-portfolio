/**
 * Hazem Ali Galal - Portfolio & Lead Management System
 * Main Application Entry Point
 * 
 * Enterprise-grade Node.js/Express backend with:
 * - RESTful API architecture
 * - SQLite database with WAL mode
 * - JWT-based authentication
 * - Rate limiting & security headers
 * - Structured logging
 * - Admin dashboard
 */

require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

const { initializeDatabase } = require('./config/database');
const logger = require('./utils/logger');
const { seedDatabase } = require('./utils/seed');

// Route imports
const apiRoutes = require('./routes/api');
const adminRoutes = require('./routes/admin');
const authRoutes = require('./routes/auth');
const trackingRoutes = require('./routes/tracking');

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

// ============================================
// MIDDLEWARE STACK
// ============================================

// Trust proxy (required for Nginx)
app.set('trust proxy', 1);

// Security headers
app.use(helmet({
    contentSecurityPolicy: {
        useDefaults: true,
        directives: {
            "upgrade-insecure-requests": [], // Enforces HTTPS for all subresources
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://translate.googleapis.com", "https://*.translate.googleapis.com", "https://*.translate.google.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://smtpjs.com", "https://translate.google.com", "https://translate.googleapis.com", "https://*.translate.googleapis.com", "https://*.translate.google.com"],
            scriptSrcAttr: ["'unsafe-inline'"],
            imgSrc: ["'self'", "data:", "blob:", "https://picsum.photos", "https://*.picsum.photos", "https://images.unsplash.com", "https://*.unsplash.com", "https://unsplash.com", "https://source.unsplash.com", "https://translate.googleapis.com", "https://www.gstatic.com", "https://translate.google.com", "https://*.translate.googleapis.com", "https://*.translate.google.com"],
            connectSrc: ["'self'", "https://formspree.io", "https://calendly.com", "https://translate.googleapis.com", "https://*.translate.googleapis.com", "https://*.translate.google.com"],
            frameSrc: ["https://calendly.com"]
        }
    },
    crossOriginEmbedderPolicy: false,
    crossOriginOpenerPolicy: false, // Fixes COOP console warnings
    originAgentCluster: false      // Fixes Origin-Agent-Cluster warnings
}));

// CORS
app.use(cors({
    origin: process.env.NODE_ENV === 'production'
        ? (process.env.DOMAIN ? [process.env.DOMAIN, `http://${process.env.HOST || '0.0.0.0'}:${process.env.PORT || 3000}`] : true)
        : ['http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials: true
}));

// Compression
app.use(compression());

// Body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Cookie parsing
app.use(cookieParser());

// Request logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
} else {
    app.use(morgan('combined', {
        stream: { write: (msg) => logger.info(msg.trim()) }
    }));
}

// Rate limiting
const apiLimiter = rateLimit({
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
    max: parseInt(process.env.RATE_LIMIT_MAX) || 100,
    message: { error: 'Too many requests, please try again later.' },
    standardHeaders: true,
    legacyHeaders: false
});

const formLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 10, // 10 submissions per hour
    message: { error: 'Too many form submissions. Please try again later.' }
});

// ============================================
// STATIC FILES
// ============================================

// Serve frontend static files
app.use(express.static(path.join(__dirname, '..', 'public'), {
    maxAge: process.env.NODE_ENV === 'production' ? '1d' : 0,
    etag: true
}));

// Admin dashboard static files
app.use('/admin', express.static(path.join(__dirname, '..', 'admin'), {
    maxAge: 0 // No cache for admin
}));

// Uploaded files
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads'), {
    maxAge: '7d'
}));

// ============================================
// API ROUTES
// ============================================

// Public API routes
app.use('/api', apiLimiter, apiRoutes);

// Form submissions with stricter rate limiting
app.use('/api/leads', formLimiter);
app.use('/api/contact', formLimiter);

// Auth routes
app.use('/api/auth', authRoutes);

// Admin API routes (protected)
app.use('/api/admin', adminRoutes);

// Tracking API routes
app.use('/api/tracking', apiLimiter, trackingRoutes);

// ============================================
// ANALYTICS MIDDLEWARE (Track page views)
// ============================================
const { trackPageView } = require('./middleware/analytics');
app.use(trackPageView);

// ============================================
// SPA FALLBACK & ERROR HANDLING
// ============================================

// Admin SPA fallback
app.get('/admin/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'admin', 'index.html'));
});

// 404 handler
app.use((req, res, next) => {
    if (req.path.startsWith('/api/')) {
        return res.status(404).json({ error: 'API endpoint not found' });
    }
    next();
});

// Global error handler
app.use((err, req, res, next) => {
    logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

    const statusCode = err.status || 500;
    const message = process.env.NODE_ENV === 'production'
        ? 'Internal server error'
        : err.message;

    res.status(statusCode).json({
        error: message,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
});

// ============================================
// SERVER START
// ============================================
async function startServer() {
    try {
        // Initialize database
        initializeDatabase();

        // Seed initial data
        seedDatabase();

        if (process.env.VERCEL !== '1') {
            app.listen(PORT, HOST, () => {
                logger.info(`🚀 Server running on http://${HOST}:${PORT}`);
                logger.info(`📊 Admin dashboard: http://${HOST}:${PORT}/admin`);
                logger.info(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
                console.log(`\n🚀 Server running on http://localhost:${PORT}`);
                console.log(`📊 Admin dashboard: http://localhost:${PORT}/admin`);
                console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}\n`);
            });
        }
    } catch (error) {
        logger.error('Failed to start server:', error);
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}

// Graceful shutdown
process.on('SIGTERM', () => {
    logger.info('SIGTERM received. Shutting down gracefully...');
    process.exit(0);
});

process.on('SIGINT', () => {
    logger.info('SIGINT received. Shutting down gracefully...');
    process.exit(0);
});

startServer();

module.exports = app;

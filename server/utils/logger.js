/**
 * Winston Logger Configuration
 * Structured logging for production
 */
const winston = require('winston');
const path = require('path');
const fs = require('fs');

const isVercel = process.env.VERCEL === '1';

const transports = [];

if (!isVercel) {
    const logDir = path.join(__dirname, '..', 'logs');
    if (!fs.existsSync(logDir)) {
        try { fs.mkdirSync(logDir, { recursive: true }); } catch (e) {}
    }
    transports.push(
        new winston.transports.File({
            filename: path.join(logDir, 'error.log'),
            level: 'error',
            maxsize: 5242880, // 5MB
            maxFiles: 5
        }),
        new winston.transports.File({
            filename: path.join(logDir, 'combined.log'),
            maxsize: 5242880,
            maxFiles: 5
        })
    );
}

// Always add console for Vercel and dev
if (isVercel || process.env.NODE_ENV !== 'production') {
    transports.push(new winston.transports.Console({
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
        )
    }));
}

const logger = winston.createLogger({
    level: process.env.NODE_ENV === 'production' && !isVercel ? 'info' : 'debug',
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.errors({ stack: true }),
        winston.format.json()
    ),
    defaultMeta: { service: 'hazem-portfolio' },
    transports: transports.length > 0 ? transports : [new winston.transports.Console()]
});

module.exports = logger;

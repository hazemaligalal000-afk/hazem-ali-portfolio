/**
 * Analytics Tracking Middleware
 * Tracks page views and events for the admin dashboard
 */
const { db } = require('../config/database');
const { v4: uuidv4 } = require('uuid');

/**
 * Track page views for HTML pages (not API calls or static assets)
 */
function trackPageView(req, res, next) {
    // Only track actual page requests (HTML)
    if (
        req.method === 'GET' &&
        !req.path.startsWith('/api/') &&
        !req.path.startsWith('/admin/') &&
        !req.path.match(/\.(css|js|png|jpg|jpeg|gif|svg|ico|webp|woff|woff2|ttf|map)$/) &&
        (req.path === '/' || req.path.endsWith('.html'))
    ) {
        try {
            // Get or create session
            let sessionId = req.cookies?.session_id;
            if (!sessionId) {
                sessionId = uuidv4();
                res.cookie('session_id', sessionId, {
                    maxAge: 30 * 60 * 1000, // 30 min session
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'lax'
                });
            }

            const page = req.path === '/' ? '/index.html' : req.path;

            db.prepare(`
                INSERT INTO analytics_events (event_type, page, referrer, ip_address, user_agent, session_id)
                VALUES (?, ?, ?, ?, ?, ?)
            `).run('page_view', page, req.get('Referer') || null, req.ip, req.get('User-Agent') || null, sessionId);
        } catch (err) {
            // Don't let analytics errors break the app
            console.error('Analytics tracking error:', err.message);
        }
    }
    next();
}

module.exports = { trackPageView };

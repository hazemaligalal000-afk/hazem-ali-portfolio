/**
 * Snapchat Conversions API — Dedicated Routes
 * =============================================
 * Endpoints:
 *   GET  /api/snap/config         → Pixel config for client-side init
 *   POST /api/snap/event          → Fire single event
 *   POST /api/snap/lead           → Fire SIGN_UP + store lead (combined)
 *   POST /api/snap/test           → Test event (dev only)
 *   GET  /api/snap/health         → Integration health check
 */

const express = require('express');
const router = express.Router();
const logger = require('../utils/logger');
const snapchatCAPI = require('../services/snapchat-capi');

// ============================================
// CONFIG — return Pixel ID for client init
// ============================================

/**
 * GET /api/snap/config
 * Returns public pixel config for the Snap Pixel SDK
 */
router.get('/config', (req, res) => {
    if (!process.env.SNAPCHAT_PIXEL_ID) {
        return res.status(404).json({ error: 'Snapchat Pixel not configured' });
    }

    res.set('Cache-Control', 'public, max-age=300');
    res.json({
        data: {
            pixelId: process.env.SNAPCHAT_PIXEL_ID,
            // v3 CAPI is server-side — pixel is client-side only
            capiEnabled: !!(process.env.SNAPCHAT_PIXEL_ID && process.env.SNAPCHAT_CAPI_TOKEN),
        }
    });
});

// ============================================
// HEALTH CHECK
// ============================================

/**
 * GET /api/snap/health
 * Verify the integration is configured correctly
 */
router.get('/health', (req, res) => {
    const configured = !!(process.env.SNAPCHAT_PIXEL_ID && process.env.SNAPCHAT_CAPI_TOKEN);

    res.json({
        status: configured ? 'ready' : 'not_configured',
        pixelId: process.env.SNAPCHAT_PIXEL_ID ? '✅ set' : '❌ missing',
        capiToken: process.env.SNAPCHAT_CAPI_TOKEN ? '✅ set' : '❌ missing',
        testEventCode: process.env.SNAPCHAT_TEST_EVENT_CODE ? '✅ set' : '⚠️ not set (optional)',
        endpoint: 'https://tr.snapchat.com/v3/conversion',
        timestamp: new Date().toISOString()
    });
});

// ============================================
// SINGLE EVENT
// ============================================

/**
 * POST /api/snap/event
 * Fire any Snapchat standard or custom event
 *
 * Body:
 *   eventName      {string}  - Internal event name (e.g., "Lead", "PageView")
 *   eventId        {string}  - Unique ID matching Pixel SDK client_dedup_id
 *   eventSourceUrl {string}  - Page URL
 *   userData       {object}  - Optional: email, phone, firstName, lastName, scid
 *   customData     {object}  - Optional: value, currency, orderId, etc.
 */
router.post('/event', async (req, res) => {
    try {
        if (!process.env.SNAPCHAT_PIXEL_ID || !process.env.SNAPCHAT_CAPI_TOKEN) {
            return res.status(503).json({ error: 'Snapchat CAPI not configured' });
        }

        const {
            eventName,
            eventId,
            eventSourceUrl,
            userData = {},
            customData = {}
        } = req.body;

        if (!eventName) {
            return res.status(400).json({ error: 'eventName is required' });
        }

        // Extract server-side signals
        const forwarded = req.headers['x-forwarded-for'];
        const ip = forwarded ? forwarded.split(',')[0].trim() : (req.ip || '');

        const result = await snapchatCAPI.sendSnapchatEvent({
            eventName,
            eventId: eventId || `evt_${Date.now()}_${Math.random().toString(36).slice(2)}`,
            eventTime: Math.floor(Date.now() / 1000),
            eventSourceUrl: eventSourceUrl || req.get('Referer') || '',
            userData: {
                ...userData,
                ipAddress: userData.ipAddress || ip,
                userAgent: userData.userAgent || req.get('User-Agent') || '',
                scid: userData.scid ||
                      req.cookies?._scid ||
                      req.cookies?.sc_click_id ||
                      req.query?.ScCid ||
                      null
            },
            customData
        });

        res.json({ success: true, data: result });

    } catch (err) {
        logger.error('Snap CAPI /event error:', err.message);
        res.status(500).json({ error: 'Failed to send Snapchat event', detail: err.message });
    }
});

// ============================================
// LEAD EVENT (HIGH-VALUE: form submission)
// ============================================

/**
 * POST /api/snap/lead
 * Combined endpoint: fires SIGN_UP to Snap CAPI with enriched lead data.
 * Called automatically when a lead form is submitted.
 *
 * Body: same as /event, but expects at minimum:
 *   userData.email or userData.phone
 *   customData.serviceType, customData.budget
 */
router.post('/lead', async (req, res) => {
    try {
        if (!process.env.SNAPCHAT_PIXEL_ID || !process.env.SNAPCHAT_CAPI_TOKEN) {
            return res.status(503).json({ error: 'Snapchat CAPI not configured' });
        }

        const {
            eventId,
            eventSourceUrl,
            userData = {},
            serviceType,
            budget,
            utmSource,
            utmMedium,
            utmCampaign
        } = req.body;

        const forwarded = req.headers['x-forwarded-for'];
        const ip = forwarded ? forwarded.split(',')[0].trim() : (req.ip || '');
        const userAgent = req.get('User-Agent') || '';

        const event = snapchatCAPI.buildLeadEvent({
            eventId: eventId || `lead_${Date.now()}`,
            url: eventSourceUrl || req.get('Referer') || '',
            userData: {
                ...userData,
                ipAddress: userData.ipAddress || ip,
                userAgent: userData.userAgent || userAgent,
                scid: userData.scid ||
                      req.cookies?._scid ||
                      req.cookies?.sc_click_id ||
                      null
            },
            serviceType,
            budget
        });

        // Add UTM to custom data for internal logging
        event.customData.utmSource = utmSource;
        event.customData.utmMedium = utmMedium;
        event.customData.utmCampaign = utmCampaign;

        const result = await snapchatCAPI.sendSnapchatEvent(event);

        const quality = snapchatCAPI.getSignalQualityScore(userData);
        logger.info(`Snap Lead CAPI fired | signal: ${quality.score}/10 | service: ${serviceType}`);

        res.json({
            success: true,
            snapResult: result,
            signalQuality: quality
        });

    } catch (err) {
        logger.error('Snap CAPI /lead error:', err.message);
        res.status(500).json({ error: 'Failed to fire Snap CAPI lead event', detail: err.message });
    }
});

// ============================================
// TEST EVENT (dev / validation)
// ============================================

/**
 * POST /api/snap/test
 * Fire a test PAGE_VIEW event to validate your setup.
 * Requires SNAPCHAT_TEST_EVENT_CODE in .env
 * View results in Snap Ads Manager > Events Manager > Test Events
 */
router.post('/test', async (req, res) => {
    if (process.env.NODE_ENV === 'production' && !req.body?.force) {
        return res.status(403).json({ error: 'Test endpoint disabled in production. Set force:true to override.' });
    }

    try {
        if (!process.env.SNAPCHAT_PIXEL_ID || !process.env.SNAPCHAT_CAPI_TOKEN) {
            return res.status(503).json({
                error: 'Missing credentials',
                fix: 'Set SNAPCHAT_PIXEL_ID and SNAPCHAT_CAPI_TOKEN in your .env file'
            });
        }

        if (!process.env.SNAPCHAT_TEST_EVENT_CODE) {
            logger.warn('SNAPCHAT_TEST_EVENT_CODE not set — event may not appear in Test Events tab');
        }

        const testEventId = `test_${Date.now()}`;

        const result = await snapchatCAPI.sendSnapchatEvent({
            eventName: 'PageView',
            eventId: testEventId,
            eventTime: Math.floor(Date.now() / 1000),
            eventSourceUrl: `${process.env.DOMAIN || 'http://localhost:3005'}/test`,
            userData: {
                email: 'test@example.com',        // Will be hashed
                phone: '201000000000',             // Will be hashed
                ipAddress: '127.0.0.1',
                userAgent: req.get('User-Agent') || 'test-agent'
            },
            customData: {}
        });

        res.json({
            success: true,
            message: '✅ Test event sent to Snapchat CAPI v3',
            eventId: testEventId,
            pixelId: process.env.SNAPCHAT_PIXEL_ID,
            testEventCode: process.env.SNAPCHAT_TEST_EVENT_CODE || 'not set',
            viewResults: 'Snap Ads Manager → Events Manager → Test Events tab',
            snapResponse: result
        });

    } catch (err) {
        logger.error('Snap CAPI test error:', err.message);
        res.status(500).json({
            success: false,
            error: err.message,
            hint: 'Check your SNAPCHAT_CAPI_TOKEN is valid and not expired'
        });
    }
});

module.exports = router;

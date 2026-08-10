/**
 * Tracking & Conversion API Routes
 * 
 * Server-side tracking implementation for:
 * - Meta Conversion API (CAPI)
 * - TikTok Events API
 * - Snapchat Conversion API
 * - Google Analytics 4 Measurement Protocol
 * - Event deduplication
 * - User data hashing for enhanced matching
 */
const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const logger = require('../utils/logger');
const snapchatCAPI = require('../services/snapchat-capi');

// ============================================
// HELPERS
// ============================================

/**
 * SHA256 hash for user data (required by Meta, TikTok, Snapchat)
 */
function sha256(value) {
    if (!value) return null;
    const normalized = String(value).trim().toLowerCase();
    return crypto.createHash('sha256').update(normalized).digest('hex');
}

/**
 * Generate a unique event ID for deduplication
 */
function generateEventId() {
    return `evt_${Date.now()}_${crypto.randomBytes(8).toString('hex')}`;
}

/**
 * Extract user data from request for server-side tracking
 */
function extractUserData(req) {
    // Resolve real IP behind proxy/load-balancer
    const forwarded = req.headers['x-forwarded-for'];
    const ip = forwarded ? forwarded.split(',')[0].trim() : (req.ip || req.connection?.remoteAddress || '');

    return {
        ip,
        userAgent: req.get('User-Agent') || '',
        fbp: req.cookies?._fbp || null,
        fbc: req.cookies?._fbc || null,
        ttp: req.cookies?._ttp || null,
        // Snap Click ID — set by Snap Pixel SDK via URL param ?ScCid=...
        scid: req.cookies?._scid ||
              req.cookies?.sc_click_id ||
              req.query?.ScCid ||
              req.body?.scid ||
              null,
        referer: req.get('Referer') || '',
        origin: req.get('Origin') || ''
    };
}

// ============================================
// PUBLIC: Tracking Configuration Endpoint
// ============================================

/**
 * GET /api/tracking/config
 * Returns pixel IDs for client-side initialization
 * Only returns IDs that are configured (non-empty)
 */
router.get('/config', (req, res) => {
    const config = {};

    // Only include configured platforms
    if (process.env.META_PIXEL_ID) config.metaPixelId = process.env.META_PIXEL_ID;
    if (process.env.TIKTOK_PIXEL_ID) config.tiktokPixelId = process.env.TIKTOK_PIXEL_ID;
    if (process.env.SNAPCHAT_PIXEL_ID) config.snapchatPixelId = process.env.SNAPCHAT_PIXEL_ID;
    if (process.env.GA4_MEASUREMENT_ID) config.ga4MeasurementId = process.env.GA4_MEASUREMENT_ID;
    if (process.env.GOOGLE_ADS_ID) config.googleAdsId = process.env.GOOGLE_ADS_ID;
    if (process.env.GOOGLE_ADS_CONVERSION_LABEL) config.googleAdsConversionLabel = process.env.GOOGLE_ADS_CONVERSION_LABEL;
    if (process.env.GTM_CONTAINER_ID) config.gtmContainerId = process.env.GTM_CONTAINER_ID;
    if (process.env.GTM_SERVER_URL) config.gtmServerUrl = process.env.GTM_SERVER_URL;
    if (process.env.TWITTER_PIXEL_ID) config.twitterPixelId = process.env.TWITTER_PIXEL_ID;
    if (process.env.REDDIT_PIXEL_ID) config.redditPixelId = process.env.REDDIT_PIXEL_ID;
    if (process.env.MICROSOFT_UET_TAG_ID) config.microsoftUetTagId = process.env.MICROSOFT_UET_TAG_ID;
    if (process.env.CLARITY_PROJECT_ID) config.clarityProjectId = process.env.CLARITY_PROJECT_ID;
    if (process.env.HOTJAR_SITE_ID) config.hotjarSiteId = process.env.HOTJAR_SITE_ID;
    if (process.env.MIXPANEL_PROJECT_TOKEN) config.mixpanelToken = process.env.MIXPANEL_PROJECT_TOKEN;

    // Server-side tracking enabled flags
    config.serverTrackingEnabled = !!(
        process.env.META_CAPI_ACCESS_TOKEN ||
        process.env.TIKTOK_ACCESS_TOKEN ||
        process.env.SNAPCHAT_CAPI_TOKEN ||
        process.env.GA4_API_SECRET
    );

    res.set('Cache-Control', 'public, max-age=300'); // Cache 5 min
    res.json({ data: config });
});

// ============================================
// SERVER-SIDE EVENT TRACKING
// ============================================

/**
 * POST /api/tracking/event
 * Receives events from client for server-side forwarding
 * Implements event deduplication via event_id
 */
router.post('/event', async (req, res) => {
    try {
        const {
            eventName,
            eventId,
            eventTime,
            eventSourceUrl,
            userData = {},
            customData = {},
            actionSource = 'website'
        } = req.body;

        if (!eventName) {
            return res.status(400).json({ error: 'eventName is required' });
        }

        const serverEventId = eventId || generateEventId();
        const serverEventTime = eventTime || Math.floor(Date.now() / 1000);
        const reqData = extractUserData(req);

        // Merge client-provided user data with server-extracted data
        const enrichedUserData = {
            email: userData.email ? sha256(userData.email) : null,
            phone: userData.phone ? sha256(userData.phone) : null,
            firstName: userData.firstName ? sha256(userData.firstName) : null,
            lastName: userData.lastName ? sha256(userData.lastName) : null,
            city: userData.city ? sha256(userData.city) : null,
            state: userData.state ? sha256(userData.state) : null,
            country: userData.country ? sha256(userData.country) : null,
            zipCode: userData.zipCode ? sha256(userData.zipCode) : null,
            externalId: userData.externalId ? sha256(userData.externalId) : null,
            ipAddress: reqData.ip,
            userAgent: reqData.userAgent,
            fbp: userData.fbp || reqData.fbp,
            fbc: userData.fbc || reqData.fbc,
            ttp: userData.ttp || reqData.ttp,
            scid: userData.scid || reqData.scid
        };

        // Fire all server-side events concurrently
        const promises = [];

        // Meta Conversion API
        if (process.env.META_PIXEL_ID && process.env.META_CAPI_ACCESS_TOKEN) {
            promises.push(
                sendMetaCAPI({
                    eventName: mapToMetaEvent(eventName),
                    eventId: serverEventId,
                    eventTime: serverEventTime,
                    eventSourceUrl,
                    userData: enrichedUserData,
                    customData,
                    actionSource
                }).catch(err => logger.error('Meta CAPI error:', err.message))
            );
        }

        // TikTok Events API
        if (process.env.TIKTOK_PIXEL_ID && process.env.TIKTOK_ACCESS_TOKEN) {
            promises.push(
                sendTikTokEvent({
                    eventName: mapToTikTokEvent(eventName),
                    eventId: serverEventId,
                    eventTime: serverEventTime,
                    eventSourceUrl,
                    userData: enrichedUserData,
                    customData
                }).catch(err => logger.error('TikTok Events API error:', err.message))
            );
        }

        // Snapchat Conversion API v3 (via dedicated service)
        if (process.env.SNAPCHAT_PIXEL_ID && process.env.SNAPCHAT_CAPI_TOKEN) {
            promises.push(
                snapchatCAPI.sendSnapchatEvent({
                    eventName,
                    eventId: serverEventId,
                    eventTime: serverEventTime,
                    eventSourceUrl,
                    userData: {
                        // Pass RAW values — service hashes them internally
                        email: userData.email || null,
                        phone: userData.phone || null,
                        firstName: userData.firstName || null,
                        lastName: userData.lastName || null,
                        city: userData.city || null,
                        state: userData.state || null,
                        country: userData.country || null,
                        zipCode: userData.zipCode || null,
                        ipAddress: reqData.ip,
                        userAgent: reqData.userAgent,
                        scid: userData.scid || reqData.scid || null
                    },
                    customData
                }).catch(err => logger.error('Snapchat CAPI error:', err.message))
            );
        }

        // Google Analytics 4 Measurement Protocol
        if (process.env.GA4_MEASUREMENT_ID && process.env.GA4_API_SECRET) {
            promises.push(
                sendGA4Event({
                    eventName: mapToGA4Event(eventName),
                    clientId: userData.clientId || reqData.ip,
                    customData
                }).catch(err => logger.error('GA4 MP error:', err.message))
            );
        }

        // Wait for all to complete (don't block response)
        Promise.allSettled(promises).then(results => {
            const succeeded = results.filter(r => r.status === 'fulfilled').length;
            const failed = results.filter(r => r.status === 'rejected').length;
            if (failed > 0) {
                logger.warn(`Server tracking: ${succeeded} succeeded, ${failed} failed for ${eventName}`);
            }
        });

        // Store in local analytics
        try {
            const { db } = require('../config/database');
            db.prepare(`
                INSERT INTO analytics_events (event_type, page, ip_address, user_agent, session_id, metadata)
                VALUES (?, ?, ?, ?, ?, ?)
            `).run(
                eventName,
                eventSourceUrl || req.get('Referer') || null,
                reqData.ip,
                reqData.userAgent,
                req.cookies?.session_id || null,
                JSON.stringify({ ...customData, eventId: serverEventId, serverSide: true })
            );
        } catch (dbErr) {
            // Don't fail if analytics DB insert fails
            logger.error('Tracking DB log error:', dbErr.message);
        }

        res.json({
            success: true,
            eventId: serverEventId
        });

    } catch (error) {
        logger.error('Tracking event error:', error);
        res.status(500).json({ error: 'Failed to process tracking event' });
    }
});

// ============================================
// META (FACEBOOK) CONVERSION API
// ============================================

async function sendMetaCAPI({ eventName, eventId, eventTime, eventSourceUrl, userData, customData, actionSource }) {
    const payload = {
        data: [{
            event_name: eventName,
            event_time: eventTime,
            event_id: eventId,
            event_source_url: eventSourceUrl,
            action_source: actionSource,
            user_data: {
                em: userData.email ? [userData.email] : undefined,
                ph: userData.phone ? [userData.phone] : undefined,
                fn: userData.firstName ? [userData.firstName] : undefined,
                ln: userData.lastName ? [userData.lastName] : undefined,
                ct: userData.city ? [userData.city] : undefined,
                st: userData.state ? [userData.state] : undefined,
                zp: userData.zipCode ? [userData.zipCode] : undefined,
                country: userData.country ? [userData.country] : undefined,
                external_id: userData.externalId ? [userData.externalId] : undefined,
                client_ip_address: userData.ipAddress,
                client_user_agent: userData.userAgent,
                fbp: userData.fbp || undefined,
                fbc: userData.fbc || undefined
            },
            custom_data: {
                currency: customData.currency || 'USD',
                value: customData.value || 0,
                content_name: customData.contentName || undefined,
                content_category: customData.contentCategory || undefined,
                content_ids: customData.contentIds || undefined,
                content_type: customData.contentType || undefined,
                order_id: customData.orderId || undefined,
                ...customData.custom
            }
        }]
    };

    // Add test event code if in development
    if (process.env.META_TEST_EVENT_CODE) {
        payload.test_event_code = process.env.META_TEST_EVENT_CODE;
    }

    const url = `https://graph.facebook.com/v21.0/${process.env.META_PIXEL_ID}/events?access_token=${process.env.META_CAPI_ACCESS_TOKEN}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        const errData = await response.text();
        throw new Error(`Meta CAPI ${response.status}: ${errData}`);
    }

    const result = await response.json();
    logger.info(`Meta CAPI: ${eventName} sent successfully (events_received: ${result.events_received})`);
    return result;
}

function mapToMetaEvent(eventName) {
    const map = {
        'PageView': 'PageView',
        'ViewContent': 'ViewContent',
        'Lead': 'Lead',
        'CompleteRegistration': 'CompleteRegistration',
        'Contact': 'Contact',
        'SubmitApplication': 'SubmitApplication',
        'Schedule': 'Schedule',
        'AddToCart': 'AddToCart',
        'InitiateCheckout': 'InitiateCheckout',
        'AddPaymentInfo': 'AddPaymentInfo',
        'Purchase': 'Purchase',
        'Search': 'Search',
        'Subscribe': 'Subscribe',
        'WhatsAppClick': 'Contact',
        'CalendlyClick': 'Schedule'
    };
    return map[eventName] || eventName;
}

// ============================================
// TIKTOK EVENTS API
// ============================================

async function sendTikTokEvent({ eventName, eventId, eventTime, eventSourceUrl, userData, customData }) {
    const payload = {
        pixel_code: process.env.TIKTOK_PIXEL_ID,
        batch: [{
            event: eventName,
            event_id: eventId,
            timestamp: new Date(eventTime * 1000).toISOString(),
            context: {
                ad: {},
                page: {
                    url: eventSourceUrl,
                    referrer: userData.referer || ''
                },
                user: {
                    external_id: userData.externalId || undefined,
                    email: userData.email || undefined,
                    phone_number: userData.phone || undefined,
                    ttp: userData.ttp || undefined
                },
                ip: userData.ipAddress,
                user_agent: userData.userAgent
            },
            properties: {
                currency: customData.currency || 'USD',
                value: customData.value || 0,
                content_name: customData.contentName || undefined,
                content_category: customData.contentCategory || undefined,
                content_id: customData.contentId || undefined,
                content_type: customData.contentType || 'product',
                order_id: customData.orderId || undefined,
                query: customData.query || undefined
            }
        }]
    };

    const url = 'https://business-api.tiktok.com/open_api/v1.3/event/track/';

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Token': process.env.TIKTOK_ACCESS_TOKEN
        },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        const errData = await response.text();
        throw new Error(`TikTok Events API ${response.status}: ${errData}`);
    }

    const result = await response.json();
    logger.info(`TikTok Events API: ${eventName} sent successfully`);
    return result;
}

function mapToTikTokEvent(eventName) {
    const map = {
        'PageView': 'Pageview',
        'ViewContent': 'ViewContent',
        'Lead': 'SubmitForm',
        'CompleteRegistration': 'CompleteRegistration',
        'Contact': 'Contact',
        'AddToCart': 'AddToCart',
        'InitiateCheckout': 'InitiateCheckout',
        'AddPaymentInfo': 'AddPaymentInfo',
        'Purchase': 'CompletePayment',
        'Search': 'Search',
        'Subscribe': 'Subscribe',
        'WhatsAppClick': 'Contact',
        'CalendlyClick': 'Schedule'
    };
    return map[eventName] || eventName;
}

// ============================================
// SNAPCHAT CONVERSION API
// ============================================
// NOTE: Snapchat CAPI is now handled by the dedicated service:
//   server/services/snapchat-capi.js
// which uses the v3 API endpoint with proper hashing,
// retry logic, and signal quality scoring.

// ============================================
// GOOGLE ANALYTICS 4 MEASUREMENT PROTOCOL
// ============================================

async function sendGA4Event({ eventName, clientId, customData }) {
    const payload = {
        client_id: clientId || 'server_' + Date.now(),
        events: [{
            name: eventName,
            params: {
                currency: customData.currency || 'USD',
                value: customData.value || 0,
                content_name: customData.contentName || undefined,
                content_category: customData.contentCategory || undefined,
                items: customData.items || undefined,
                transaction_id: customData.orderId || undefined,
                engagement_time_msec: 100,
                session_id: customData.sessionId || undefined
            }
        }]
    };

    const url = `https://www.google-analytics.com/mp/collect?measurement_id=${process.env.GA4_MEASUREMENT_ID}&api_secret=${process.env.GA4_API_SECRET}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        throw new Error(`GA4 MP ${response.status}`);
    }

    logger.info(`GA4 Measurement Protocol: ${eventName} sent`);
    return { success: true };
}

function mapToGA4Event(eventName) {
    const map = {
        'PageView': 'page_view',
        'ViewContent': 'view_item',
        'Lead': 'generate_lead',
        'CompleteRegistration': 'sign_up',
        'Contact': 'contact',
        'AddToCart': 'add_to_cart',
        'InitiateCheckout': 'begin_checkout',
        'AddPaymentInfo': 'add_payment_info',
        'Purchase': 'purchase',
        'Search': 'search',
        'Subscribe': 'subscribe',
        'WhatsAppClick': 'contact',
        'CalendlyClick': 'schedule'
    };
    return map[eventName] || eventName;
}

module.exports = router;

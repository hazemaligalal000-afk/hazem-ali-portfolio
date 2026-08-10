/**
 * Snapchat Conversions API (CAPI) Service
 * =========================================
 * Full server-side integration with:
 * - Conversions API v3 endpoint
 * - SHA-256 hashing & normalization per Snap spec
 * - Event deduplication (client_dedup_id)
 * - Retry with exponential backoff
 * - Signal quality scoring & logging
 * - All standard portfolio events mapped
 *
 * Docs: https://developers.snap.com/api/marketing-api/Conversions-API/
 */

const crypto = require('crypto');
const logger = require('../utils/logger');

// ============================================
// CONSTANTS
// ============================================

// v3 URL: https://tr.snapchat.com/v3/{PIXEL_ID}/events?access_token={TOKEN}
const SNAP_CAPI_V3_BASE = 'https://tr.snapchat.com/v3';
const MAX_RETRIES = 3;
const RETRY_BASE_DELAY_MS = 300;

// Supported Snap standard events
// https://developers.snap.com/api/marketing-api/Conversions-API/Parameters
const SNAP_STANDARD_EVENTS = {
    PAGE_VIEW:        'PAGE_VIEW',
    VIEW_CONTENT:     'VIEW_CONTENT',
    ADD_CART:         'ADD_CART',
    START_CHECKOUT:   'START_CHECKOUT',
    ADD_BILLING:      'ADD_BILLING',
    PURCHASE:         'PURCHASE',
    SIGN_UP:          'SIGN_UP',
    SEARCH:           'SEARCH',
    SUBSCRIBE:        'SUBSCRIBE',
    SAVE:             'SAVE',
    CUSTOM_EVENT_1:   'CUSTOM_EVENT_1', // WhatsApp contact
    CUSTOM_EVENT_2:   'CUSTOM_EVENT_2', // Calendly schedule
    CUSTOM_EVENT_3:   'CUSTOM_EVENT_3', // Case study view
};

// Map our internal event names to Snap's standard events
const EVENT_MAP = {
    'PageView':             'PAGE_VIEW',
    'ViewContent':          'VIEW_CONTENT',
    'Lead':                 'SIGN_UP',
    'CompleteRegistration': 'SIGN_UP',
    'Contact':              'SIGN_UP',
    'FormSubmission':       'SIGN_UP',
    'AddToCart':            'ADD_CART',
    'InitiateCheckout':     'START_CHECKOUT',
    'AddPaymentInfo':       'ADD_BILLING',
    'Purchase':             'PURCHASE',
    'Search':               'SEARCH',
    'Subscribe':            'SUBSCRIBE',
    'WhatsAppClick':        'CUSTOM_EVENT_1',
    'CalendlyClick':        'CUSTOM_EVENT_2',
    'CaseStudyView':        'CUSTOM_EVENT_3',
};

// ============================================
// NORMALIZATION & HASHING
// ============================================

/**
 * Normalize and SHA-256 hash a value.
 * Returns null if value is falsy.
 */
function hashValue(value) {
    if (!value) return null;
    const normalized = String(value).trim().toLowerCase();
    return crypto.createHash('sha256').update(normalized).digest('hex');
}

/**
 * Normalize a phone number:
 * - Remove all non-digit characters
 * - Must include country code (e.g., "201012345678" for Egypt)
 */
function normalizePhone(phone) {
    if (!phone) return null;
    // Remove all non-digits
    let digits = String(phone).replace(/\D/g, '');
    // If starts with 00, replace with nothing (country code follows)
    if (digits.startsWith('00')) digits = digits.slice(2);
    return digits;
}

/**
 * Build the hashed user data object for Snap CAPI v3
 * Returns all available PII fields in hashed form
 */
function buildHashedUserData(userData) {
    const hashed = {};

    // Email (normalize: lowercase + trim, then hash)
    if (userData.email) {
        hashed.hashed_email = hashValue(userData.email);
    }

    // Phone (normalize: digits + country code, then hash)
    if (userData.phone) {
        const normalizedPhone = normalizePhone(userData.phone);
        if (normalizedPhone) {
            hashed.hashed_phone_number = hashValue(normalizedPhone);
        }
    }

    // Name fields
    if (userData.firstName) hashed.hashed_first_name_sha = hashValue(userData.firstName);
    if (userData.lastName)  hashed.hashed_last_name_sha  = hashValue(userData.lastName);

    // Address
    if (userData.city)    hashed.hashed_city_sha  = hashValue(userData.city);
    if (userData.state)   hashed.hashed_state_sha = hashValue(userData.state);
    if (userData.country) hashed.hashed_country   = hashValue(userData.country);
    if (userData.zipCode) hashed.hashed_zip        = hashValue(userData.zipCode);

    // IP & User Agent (NOT hashed — sent raw per Snap spec)
    if (userData.ipAddress) hashed.ip_address  = userData.ipAddress;
    if (userData.userAgent) hashed.user_agent  = userData.userAgent;

    // Snap Click ID — captured from URL param `ScCid` or cookie `_scid`
    if (userData.scid) hashed.sc_click_id = userData.scid;

    // Mobile Advertiser ID (if available)
    if (userData.maid) hashed.hashed_mobile_ad_id = hashValue(userData.maid);

    return hashed;
}

// ============================================
// SIGNAL QUALITY SCORING
// ============================================

/**
 * Calculate signal quality score (0-10) for logging
 * Snap's match quality depends on how many identifiers you send
 */
function getSignalQualityScore(userData) {
    let score = 0;
    const signals = [];

    if (userData.email || userData.hashed_email)         { score += 3; signals.push('email'); }
    if (userData.phone || userData.hashed_phone_number)  { score += 2; signals.push('phone'); }
    if (userData.scid || userData.sc_click_id)           { score += 2; signals.push('sc_click_id'); }
    if (userData.ipAddress || userData.ip_address)       { score += 1; signals.push('ip'); }
    if (userData.userAgent || userData.user_agent)       { score += 1; signals.push('user_agent'); }
    if (userData.firstName || userData.hashed_first_name_sha) { score += 0.5; signals.push('first_name'); }
    if (userData.lastName || userData.hashed_last_name_sha)   { score += 0.5; signals.push('last_name'); }

    return { score: Math.min(score, 10), signals };
}

// ============================================
// RETRY WITH EXPONENTIAL BACKOFF
// ============================================

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWithRetry(url, options, retries = MAX_RETRIES) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const response = await fetch(url, options);

            if (response.ok) return response;

            // 4xx errors are NOT retryable (bad payload)
            if (response.status >= 400 && response.status < 500) {
                const errBody = await response.text();
                throw new Error(`Snapchat CAPI ${response.status} (non-retryable): ${errBody}`);
            }

            // 5xx — retryable
            if (attempt < retries) {
                const delay = RETRY_BASE_DELAY_MS * Math.pow(2, attempt - 1);
                logger.warn(`Snapchat CAPI attempt ${attempt} failed (${response.status}), retrying in ${delay}ms...`);
                await sleep(delay);
            } else {
                const errBody = await response.text();
                throw new Error(`Snapchat CAPI ${response.status} after ${retries} attempts: ${errBody}`);
            }
        } catch (err) {
            if (attempt >= retries) throw err;
            const delay = RETRY_BASE_DELAY_MS * Math.pow(2, attempt - 1);
            logger.warn(`Snapchat CAPI network error on attempt ${attempt}, retrying in ${delay}ms: ${err.message}`);
            await sleep(delay);
        }
    }
}

// ============================================
// MAIN: SEND SNAPCHAT CONVERSION EVENT
// ============================================

/**
 * Send a single event to Snapchat Conversions API v3
 *
 * @param {Object} options
 * @param {string} options.eventName     - Internal event name (will be mapped to Snap event)
 * @param {string} options.eventId       - Unique event ID for deduplication (MUST match Pixel SDK client_dedup_id)
 * @param {number} options.eventTime     - Unix timestamp in seconds
 * @param {string} options.eventSourceUrl - Page URL where the event occurred
 * @param {Object} options.userData      - User PII (raw, will be hashed here)
 * @param {Object} options.customData    - Event-specific data (value, currency, etc.)
 * @returns {Promise<Object>} Snap API response
 */
async function sendSnapchatEvent({
    eventName,
    eventId,
    eventTime,
    eventSourceUrl,
    userData = {},
    customData = {}
}) {
    if (!process.env.SNAPCHAT_PIXEL_ID) throw new Error('SNAPCHAT_PIXEL_ID not configured');
    if (!process.env.SNAPCHAT_CAPI_TOKEN) throw new Error('SNAPCHAT_CAPI_TOKEN not configured');

    // Map to Snap event type
    const snapEventType = EVENT_MAP[eventName] || eventName;

    // Build hashed user data
    const hashedUser = buildHashedUserData(userData);

    // Signal quality report
    const quality = getSignalQualityScore({ ...userData, ...hashedUser });

    // Build the v3 payload
    // Reference: https://developers.snap.com/api/marketing-api/Conversions-API/Parameters
    const event = {
        // Required
        event_type: snapEventType,
        event_conversion_type: 'WEB',
        timestamp: String(eventTime * 1000), // milliseconds as string

        // Deduplication — CRITICAL: must match Pixel SDK's client_dedup_id
        event_tag: eventId,

        // Page info
        ...(eventSourceUrl ? { page_url: eventSourceUrl } : {}),

        // Hashed user data
        ...hashedUser,

        // Custom / commerce data
        ...(customData.value !== undefined ? { price: String(customData.value) } : {}),
        ...(customData.currency ? { currency: customData.currency } : { currency: 'USD' }),
        ...(customData.orderId ? { transaction_id: String(customData.orderId) } : {}),
        ...(customData.contentCategory ? { item_category: customData.contentCategory } : {}),
        ...(customData.contentName ? { description: customData.contentName } : {}),
        ...(customData.quantity ? { number_items: String(customData.quantity) } : {}),
        ...(customData.searchString ? { search_string: customData.searchString } : {}),
    };

    // v3 API payload — events array (NO pixel_id in body for v3)
    const payload = {
        data: [event]
    };

    // v3 URL: pixel_id in path, token in query param
    const url = `${SNAP_CAPI_V3_BASE}/${process.env.SNAPCHAT_PIXEL_ID}/events?access_token=${encodeURIComponent(process.env.SNAPCHAT_CAPI_TOKEN)}`;

    const response = await fetchWithRetry(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.SNAPCHAT_CAPI_TOKEN}`
        },
        body: JSON.stringify(payload)
    });

    const result = await response.json();

    logger.info(
        `✅ Snapchat CAPI [${snapEventType}] sent | ` +
        `event_id: ${eventId} | ` +
        `signal_score: ${quality.score}/10 [${quality.signals.join(', ')}] | ` +
        `snap_status: ${JSON.stringify(result.status || 'ok')}`
    );

    return result;
}

/**
 * Send multiple events in a single batch request (max 1000 per Snap spec)
 */
async function sendSnapchatBatch(events) {
    if (!events || events.length === 0) return;
    if (!process.env.SNAPCHAT_PIXEL_ID) throw new Error('SNAPCHAT_PIXEL_ID not configured');
    if (!process.env.SNAPCHAT_CAPI_TOKEN) throw new Error('SNAPCHAT_CAPI_TOKEN not configured');

    const data = events.map(evt => {
        const hashedUser = buildHashedUserData(evt.userData || {});
        return {
            event_type: EVENT_MAP[evt.eventName] || evt.eventName,
            event_conversion_type: 'WEB',
            timestamp: String((evt.eventTime || Math.floor(Date.now() / 1000)) * 1000),
            event_tag: evt.eventId,
            ...(evt.eventSourceUrl ? { page_url: evt.eventSourceUrl } : {}),
            ...hashedUser,
            ...(evt.customData?.value !== undefined ? { price: String(evt.customData.value) } : {}),
            ...(evt.customData?.currency ? { currency: evt.customData.currency } : { currency: 'USD' }),
        };
    });

    // v3 URL: pixel_id in path, token in query param
    const url = `${SNAP_CAPI_V3_BASE}/${process.env.SNAPCHAT_PIXEL_ID}/events?access_token=${encodeURIComponent(process.env.SNAPCHAT_CAPI_TOKEN)}`;

    // v3 payload: NO pixel_id in body
    const payload = { data };

    const response = await fetchWithRetry(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.SNAPCHAT_CAPI_TOKEN}`
        },
        body: JSON.stringify(payload)
    });

    const result = await response.json();
    logger.info(`✅ Snapchat CAPI batch: ${data.length} events sent`);
    return result;
}

// ============================================
// EVENT FACTORY HELPERS
// ============================================

/**
 * Helper: Fire a PAGE_VIEW event
 */
function buildPageViewEvent({ eventId, url, userData }) {
    return {
        eventName: 'PageView',
        eventId,
        eventTime: Math.floor(Date.now() / 1000),
        eventSourceUrl: url,
        userData,
        customData: {}
    };
}

/**
 * Helper: Fire a LEAD event (form submission)
 */
function buildLeadEvent({ eventId, url, userData, serviceType, budget }) {
    return {
        eventName: 'Lead',
        eventId,
        eventTime: Math.floor(Date.now() / 1000),
        eventSourceUrl: url,
        userData,
        customData: {
            contentName: serviceType || 'Lead Form',
            contentCategory: 'marketing_services',
            currency: 'USD',
            value: budget ? parseBudget(budget) : 0
        }
    };
}

/**
 * Parse budget string to numeric value (e.g., "5000-10000" → 5000)
 */
function parseBudget(budget) {
    if (typeof budget === 'number') return budget;
    const match = String(budget).match(/[\d,]+/);
    if (match) return parseInt(match[0].replace(/,/g, ''), 10);
    return 0;
}

module.exports = {
    sendSnapchatEvent,
    sendSnapchatBatch,
    buildPageViewEvent,
    buildLeadEvent,
    EVENT_MAP,
    hashValue,
    normalizePhone,
    getSignalQualityScore
};

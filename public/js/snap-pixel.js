/**
 * Snapchat Pixel + Conversions API — Client-Side Integration
 * ===========================================================
 * Handles:
 * - Snap Pixel SDK initialization (sc-pixel.js)
 * - Automatic PAGE_VIEW with deduplication event_id
 * - SIGN_UP event on form submit with user PII
 * - CUSTOM_EVENT_1 on WhatsApp click
 * - CUSTOM_EVENT_2 on Calendly click
 * - ScCid (Snap Click ID) capture from URL
 * - Dual-firing: browser pixel + server CAPI (with same event_id)
 *
 * Usage: Include this script on every page AFTER Snap Pixel base code.
 * <script src="/js/snap-pixel.js"></script>
 */

(function (window, document) {
    'use strict';

    // ────────────────────────────────────────────
    // CONFIG (set by /api/snap/config endpoint)
    // ────────────────────────────────────────────
    let SNAP_PIXEL_ID = null;
    let CAPI_ENABLED = false;
    const CAPI_ENDPOINT = '/api/snap/event';

    // ────────────────────────────────────────────
    // UTILITIES
    // ────────────────────────────────────────────

    /** Generate a unique event ID for deduplication */
    function genEventId(prefix) {
        const ts = Date.now().toString(36);
        const rnd = Math.random().toString(36).slice(2, 8);
        return `${prefix || 'evt'}_${ts}_${rnd}`;
    }

    /** Read a URL parameter by name */
    function getUrlParam(name) {
        const url = new URL(window.location.href);
        return url.searchParams.get(name) || null;
    }

    /** Get Snap Click ID from URL (?ScCid=...) or sessionStorage */
    function getSnapClickId() {
        const fromUrl = getUrlParam('ScCid') || getUrlParam('sccid');
        if (fromUrl) {
            sessionStorage.setItem('sc_click_id', fromUrl);
            return fromUrl;
        }
        return sessionStorage.getItem('sc_click_id') || null;
    }

    /** Collect best-effort user data from the page */
    function collectUserData() {
        const data = {};

        // Email — from visible inputs
        const emailEl = document.getElementById('email') ||
                        document.querySelector('input[name="email"]') ||
                        document.querySelector('input[type="email"]');
        if (emailEl && emailEl.value) data.email = emailEl.value.trim().toLowerCase();

        // Phone
        const phoneEl = document.getElementById('phone') ||
                        document.querySelector('input[name="phone"]') ||
                        document.querySelector('input[type="tel"]');
        if (phoneEl && phoneEl.value) data.phone = phoneEl.value.trim();

        // Name
        const nameEl = document.getElementById('fullName') ||
                       document.querySelector('input[name="fullName"]') ||
                       document.querySelector('input[name="full_name"]');
        if (nameEl && nameEl.value) {
            const parts = nameEl.value.trim().split(' ');
            data.firstName = parts[0] || '';
            data.lastName = parts.slice(1).join(' ') || '';
        }

        // Snap Click ID
        const scid = getSnapClickId();
        if (scid) data.scid = scid;

        return data;
    }

    // ────────────────────────────────────────────
    // SNAP PIXEL SDK INIT
    // ────────────────────────────────────────────

    function initSnapPixel(pixelId) {
        if (typeof window.snaptr === 'function') {
            // Already loaded
            window.snaptr('init', pixelId, {
                'user_email': ''  // Will be set per-event
            });
            return;
        }

        // Standard Snap Pixel base code
        (function (e, t, n) {
            if (e.snaptr) return;
            var a = e.snaptr = function () {
                a.handleRequest ? a.handleRequest.apply(a, arguments) : a.queue.push(arguments);
            };
            a.queue = [];
            var s = 'script';
            var r = t.createElement(s);
            r.async = !0;
            r.src = n;
            var u = t.getElementsByTagName(s)[0];
            u.parentNode.insertBefore(r, u);
        })(window, document, 'https://sc-static.net/scevent.min.js');

        window.snaptr('init', pixelId, {
            'user_email': '' // populated on conversion events
        });

        console.log('[Snap Pixel] Initialized:', pixelId);
    }

    // ────────────────────────────────────────────
    // CAPI: DUAL-FIRE SERVER-SIDE EVENT
    // ────────────────────────────────────────────

    /**
     * Fire event to server-side CAPI (non-blocking, fire-and-forget)
     * The event_id MUST match the Pixel SDK's client_dedup_id to prevent double-counting
     */
    async function fireCapiEvent(eventName, eventId, userData, customData) {
        if (!CAPI_ENABLED) return;

        try {
            await fetch(CAPI_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                keepalive: true, // Ensures request completes even if page unloads
                body: JSON.stringify({
                    eventName,
                    eventId,
                    eventSourceUrl: window.location.href,
                    userData: userData || {},
                    customData: customData || {}
                })
            });
        } catch (err) {
            // Silent fail — pixel already fired
            console.warn('[Snap CAPI] Failed to send server-side event:', err.message);
        }
    }

    // ────────────────────────────────────────────
    // PUBLIC EVENTS API
    // ────────────────────────────────────────────

    /**
     * Track PAGE_VIEW — call on every page load
     */
    function trackPageView() {
        const eventId = genEventId('pv');

        // Browser pixel
        if (window.snaptr) {
            window.snaptr('track', 'PAGE_VIEW', {
                client_dedup_id: eventId
            });
        }

        // Server CAPI
        fireCapiEvent('PageView', eventId, collectUserData(), {});

        console.log('[Snap] PAGE_VIEW fired | event_id:', eventId);
    }

    /**
     * Track SIGN_UP (lead / form submission)
     * @param {Object} userData  - { email, phone, firstName, lastName }
     * @param {Object} extraData - { serviceType, budget, currency }
     */
    function trackSignUp(userData, extraData) {
        const eventId = genEventId('su');
        const user = { ...collectUserData(), ...userData };
        const scid = getSnapClickId();
        if (scid) user.scid = scid;

        // Browser pixel
        if (window.snaptr) {
            window.snaptr('track', 'SIGN_UP', {
                client_dedup_id: eventId,
                user_email: user.email || '',
                user_phone_number: user.phone || '',
                description: extraData?.serviceType || 'Lead Form'
            });
        }

        // Server CAPI (with full hashed PII)
        fireCapiEvent('Lead', eventId, user, {
            contentName: extraData?.serviceType || 'Lead Form',
            contentCategory: 'marketing_services',
            currency: extraData?.currency || 'USD',
            value: extraData?.budget || 0
        });

        console.log('[Snap] SIGN_UP (Lead) fired | event_id:', eventId);
        return eventId;
    }

    /**
     * Track CUSTOM_EVENT_1 (WhatsApp click)
     */
    function trackWhatsAppClick() {
        const eventId = genEventId('wa');

        if (window.snaptr) {
            window.snaptr('track', 'CUSTOM_EVENT_1', {
                client_dedup_id: eventId,
                description: 'WhatsApp Contact Click'
            });
        }

        fireCapiEvent('WhatsAppClick', eventId, collectUserData(), {
            contentName: 'WhatsApp Click',
            contentCategory: 'contact'
        });

        console.log('[Snap] CUSTOM_EVENT_1 (WhatsApp) fired | event_id:', eventId);
    }

    /**
     * Track CUSTOM_EVENT_2 (Calendly click)
     */
    function trackCalendlyClick() {
        const eventId = genEventId('cal');

        if (window.snaptr) {
            window.snaptr('track', 'CUSTOM_EVENT_2', {
                client_dedup_id: eventId,
                description: 'Calendly Schedule Click'
            });
        }

        fireCapiEvent('CalendlyClick', eventId, collectUserData(), {
            contentName: 'Calendly Schedule Click',
            contentCategory: 'scheduling'
        });

        console.log('[Snap] CUSTOM_EVENT_2 (Calendly) fired | event_id:', eventId);
    }

    /**
     * Track VIEW_CONTENT (case study / portfolio piece viewed)
     * @param {string} contentName - Title of the content
     */
    function trackViewContent(contentName) {
        const eventId = genEventId('vc');

        if (window.snaptr) {
            window.snaptr('track', 'VIEW_CONTENT', {
                client_dedup_id: eventId,
                description: contentName || 'Portfolio Content'
            });
        }

        fireCapiEvent('ViewContent', eventId, collectUserData(), {
            contentName: contentName || 'Portfolio Content',
            contentCategory: 'portfolio'
        });

        console.log('[Snap] VIEW_CONTENT fired | content:', contentName, '| event_id:', eventId);
    }

    // ────────────────────────────────────────────
    // AUTO-BIND: WhatsApp & Calendly links
    // ────────────────────────────────────────────

    function bindClickEvents() {
        // WhatsApp links
        document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]').forEach(link => {
            if (link.dataset.snapBound) return;
            link.dataset.snapBound = '1';
            link.addEventListener('click', trackWhatsAppClick);
        });

        // Calendly links
        document.querySelectorAll('a[href*="calendly.com"]').forEach(link => {
            if (link.dataset.snapBound) return;
            link.dataset.snapBound = '1';
            link.addEventListener('click', trackCalendlyClick);
        });

        // Case study / portfolio cards
        document.querySelectorAll('.case-card, [data-track="view-content"]').forEach(card => {
            if (card.dataset.snapBound) return;
            card.dataset.snapBound = '1';
            card.addEventListener('click', () => {
                const title = card.querySelector('h3, h2, .case-title')?.textContent || 'Case Study';
                trackViewContent(title.trim());
            });
        });
    }

    // ────────────────────────────────────────────
    // FORM AUTO-TRACKING
    // ────────────────────────────────────────────

    function bindFormTracking() {
        document.querySelectorAll('form').forEach(form => {
            if (form.dataset.snapBound) return;
            form.dataset.snapBound = '1';

            form.addEventListener('submit', () => {
                const emailEl = form.querySelector('input[name="email"], input[type="email"]');
                const phoneEl = form.querySelector('input[name="phone"], input[type="tel"]');
                const nameEl  = form.querySelector('input[name="fullName"], input[name="full_name"]');

                const userData = {};
                if (emailEl?.value) userData.email = emailEl.value.trim().toLowerCase();
                if (phoneEl?.value) userData.phone  = phoneEl.value.trim();
                if (nameEl?.value) {
                    const parts = nameEl.value.trim().split(' ');
                    userData.firstName = parts[0] || '';
                    userData.lastName  = parts.slice(1).join(' ') || '';
                }

                const serviceEl = form.querySelector('select[name="serviceType"], input[name="serviceType"]');
                const budgetEl  = form.querySelector('select[name="budget"], input[name="budget"]');

                trackSignUp(userData, {
                    serviceType: serviceEl?.value || form.dataset.service || '',
                    budget: 0
                });
            });
        });
    }

    // ────────────────────────────────────────────
    // INITIALIZE
    // ────────────────────────────────────────────

    async function init() {
        try {
            // Fetch pixel config from server
            const res = await fetch('/api/snap/config');
            if (!res.ok) return; // Pixel not configured — silent exit

            const { data } = await res.json();
            SNAP_PIXEL_ID = data.pixelId;
            CAPI_ENABLED  = data.capiEnabled;

            if (!SNAP_PIXEL_ID) return;

            // Init Snap Pixel SDK
            initSnapPixel(SNAP_PIXEL_ID);

            // Fire PAGE_VIEW
            trackPageView();

            // Bind click/form tracking after DOM is ready
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                    bindClickEvents();
                    bindFormTracking();
                });
            } else {
                bindClickEvents();
                bindFormTracking();
            }

            // Re-bind after dynamic content loads (e.g., modals, SPA nav)
            const observer = new MutationObserver(() => {
                bindClickEvents();
                bindFormTracking();
            });
            observer.observe(document.body, { childList: true, subtree: true });

        } catch (err) {
            // Silent fail — tracking should never break the site
            console.warn('[Snap Pixel] Init failed:', err.message);
        }
    }

    // ────────────────────────────────────────────
    // EXPOSE GLOBAL API
    // ────────────────────────────────────────────

    window.SnapTrack = {
        trackPageView,
        trackSignUp,
        trackWhatsAppClick,
        trackCalendlyClick,
        trackViewContent,
        fireCapiEvent,
        getSnapClickId
    };

    // Auto-init
    init();

})(window, document);

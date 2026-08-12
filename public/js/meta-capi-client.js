/**
 * Enterprise Dual-Tracking Utility for Meta (Pixel + CAPI)
 * Implements Event Deduplication using eventID
 */

(function () {
    // Prevent duplicate loading
    if (window.metaCapiClientLoaded) return;
    window.metaCapiClientLoaded = true;

    // Helper: Generate a unique ID for deduplication
    function generateEventId() {
        return 'evt_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    // Helper: Get a cookie by name
    function getCookie(name) {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) return match[2];
        return null;
    }

    let metaPixelId = null;
    let isTrackingEnabled = false;

    // 1. Fetch Configuration from Backend
    fetch('/api/tracking/config')
        .then(res => res.json())
        .then(response => {
            const config = response.data || {};
            if (config.metaPixelId) {
                metaPixelId = config.metaPixelId;
                isTrackingEnabled = config.serverTrackingEnabled;
                initMetaPixel(metaPixelId);
            }
        })
        .catch(err => console.error("Tracking config failed:", err));

    // 2. Inject Meta Pixel Base Code Dynamically
    function initMetaPixel(pixelId) {
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        
        fbq('init', pixelId);
        // Fire initial PageView with deduplication
        window.trackDualEvent('PageView');
    }

    // 3. The Core Dual-Tracking Function
    window.trackDualEvent = function (eventName, customData = {}, userData = {}) {
        const eventId = generateEventId();
        
        // --- 1. Client-Side (Meta Pixel) ---
        if (typeof fbq === 'function') {
            fbq('track', eventName, customData, { eventID: eventId });
            console.log(`[Pixel] Fired ${eventName} (ID: ${eventId})`);
        }

        // --- 2. Server-Side (CAPI via Backend) ---
        if (isTrackingEnabled) {
            const payload = {
                eventName: eventName,
                eventId: eventId,
                eventTime: Math.floor(Date.now() / 1000),
                eventSourceUrl: window.location.href,
                actionSource: 'website',
                customData: customData,
                userData: {
                    ...userData,
                    fbp: getCookie('_fbp'),
                    fbc: getCookie('_fbc')
                }
            };

            fetch('/api/tracking/event', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            }).then(res => {
                if (!res.ok) console.warn('[CAPI] Server tracking issue:', res.status);
                else console.log(`[CAPI] Fired ${eventName} (ID: ${eventId})`);
            }).catch(err => {
                console.error('[CAPI] Network error:', err);
            });
        }
    };
})();

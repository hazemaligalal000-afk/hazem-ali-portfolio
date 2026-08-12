/**
 * Tracking System for Hazem Ali Galal Website
 * Handles: UTM capturing, WhatsApp link modification, and form tracking
 */

(function () {
    const UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid', 'ttclid'];

    /**
     * Capture UTM parameters from URL and store in sessionStorage
     */
    function captureUTMs() {
        const urlParams = new URLSearchParams(window.location.search);
        let utmCaptured = false;

        UTM_PARAMS.forEach(param => {
            const value = urlParams.get(param);
            if (value) {
                sessionStorage.setItem(param, value);
                utmCaptured = true;
            }
        });

        // Also track referrer if it's external
        if (document.referrer && !document.referrer.includes(window.location.hostname)) {
            sessionStorage.setItem('referring_domain', new URL(document.referrer).hostname);
        }

        if (utmCaptured) {
            console.log('UTMs captured and stored');
        }
    }

    /**
     * Get stored UTMs as an object
     */
    function getStoredUTMs() {
        const utms = {};
        UTM_PARAMS.forEach(param => {
            const value = sessionStorage.getItem(param);
            if (value) utms[param] = value;
        });
        const referrer = sessionStorage.getItem('referring_domain');
        if (referrer) utms['referrer'] = referrer;
        return utms;
    }

    /**
     * Update all WhatsApp links to include UTM tracking
     */
    function updateWhatsAppLinks() {
        const utms = getStoredUTMs();
        const utmString = Object.keys(utms).length > 0 ? Object.entries(utms).map(([key, val]) => `${key}=${encodeURIComponent(val)}`).join('&') : '';

        // Use event delegation to catch dynamically added widgets (e.g., from whatsapp-widget.js)
        document.body.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (!link) return;

            const href = link.getAttribute('href') || '';
            
            // Check for WhatsApp or Telegram
            if (href.includes('wa.me') || href.includes('whatsapp.com') || href.includes('t.me')) {
                trackEvent('ContactClick', {
                    link: href,
                    ...utms
                });

                // Optionally append UTM to WhatsApp message before navigating
                if (utmString && (href.includes('wa.me') || href.includes('whatsapp.com'))) {
                    // Prevent default to rewrite link, then navigate
                    e.preventDefault();
                    let newHref = href;
                    const separator = href.includes('?') ? '&' : '?';
                    if (href.includes('text=')) {
                        newHref = href + encodeURIComponent('\n\n[Track: ' + utmString + ']');
                    } else {
                        newHref = href + separator + 'text=' + encodeURIComponent('Hello Hazem, I am interested in your services.\n\n[Track: ' + utmString + ']');
                    }
                    window.open(newHref, link.getAttribute('target') || '_self');
                }
            } else if (href.includes('calendly.com')) {
                trackEvent('CalendlyClick', {
                    link: href,
                    ...utms
                });
            }
        });
    }

    /**
     * Inject hidden UTM fields into all forms
     */
    function injectUTMsIntoForms() {
        const utms = getStoredUTMs();

        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            // Avoid duplicate injection
            if (form.querySelector('input[name="utm_source"]')) return;

            if (Object.keys(utms).length > 0) {
                Object.entries(utms).forEach(([key, val]) => {
                    const hiddenInput = document.createElement('input');
                    hiddenInput.type = 'hidden';
                    hiddenInput.name = key;
                    hiddenInput.value = val;
                    form.appendChild(hiddenInput);
                });
            }

            // Also track form submission
            form.addEventListener('submit', () => {
                trackEvent('FormSubmission', {
                    formId: form.id || 'unknown_form',
                    action: form.getAttribute('action'),
                    ...utms
                });
            });
        });
    }

    /**
     * Send event to server-side tracking API
     */
    async function trackEvent(eventName, customData = {}) {
        // Trigger Google Ads (gtag) standard conversion events
        if (typeof window.gtag === 'function') {
            if (eventName === 'FormSubmission') {
                window.gtag('event', 'conversion', {
                    'send_to': 'AW-18374660008/mtG3CI2-3uAcEKif3LlE',
                    'value': 1.0,
                    'currency': 'EGP'
                });
            } else if (eventName === 'CalendlyClick') {
                window.gtag('event', 'book_appointment', { 'send_to': 'AW-18374660008' });
            } else if (eventName === 'ContactClick' || eventName === 'WhatsAppClick') {
                window.gtag('event', 'conversion', {
                    'send_to': 'AW-18374660008/j-9ICJSe3eAcEKif3LlE',
                    'value': 1.0,
                    'currency': 'EGP'
                });
            }
        }

        try {
            const response = await fetch('/api/tracking/event', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    eventName: eventName,
                    eventSourceUrl: window.location.href,
                    customData: customData,
                    userData: {
                        email: document.getElementById('email')?.value || null,
                        firstName: document.getElementById('fullName')?.value || null
                    }
                })
            });
            return await response.json();
        } catch (err) {
            console.error('Tracking error:', err);
        }
    }

    // Initialize
    captureUTMs();

    // Wait for DOM to be ready for link/form manipulation
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            updateWhatsAppLinks();
            injectUTMsIntoForms();
        });
    } else {
        updateWhatsAppLinks();
        injectUTMsIntoForms();
    }

    // Export for manual usage if needed
    window.TrackingSystem = {
        trackEvent,
        getStoredUTMs
    };

})();

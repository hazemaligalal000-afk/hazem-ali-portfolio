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
        if (Object.keys(utms).length === 0) return;

        const utmString = Object.entries(utms)
            .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
            .join('&');

        const whatsappLinks = document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]');
        whatsappLinks.forEach(link => {
            let href = link.getAttribute('href');

            // Check if link already has parameters
            const separator = href.includes('?') ? '&' : '?';

            // We want to add these UTMs to the WhatsApp message or just as URL params if supported
            // Most people use wa.me/number?text=Message
            // To track UTMs, we can append them to the text message or just as extra params for analytics

            // If it's a wa.me link, we can't really pass extra params that WhatsApp will use, 
            // but we can track the CLICK event on our side.

            link.addEventListener('click', () => {
                trackEvent('WhatsAppClick', {
                    link: href,
                    ...utms
                });
            });

            // Optionally append to the text message so the recipient sees it
            if (href.includes('text=')) {
                link.setAttribute('href', href + encodeURIComponent('\n\n[Track: ' + utmString + ']'));
            } else {
                link.setAttribute('href', href + separator + 'text=' + encodeURIComponent('Hello Hazem, I am interested in your services.\n\n[Track: ' + utmString + ']'));
            }
        });

        // Track Calendly links
        document.querySelectorAll('a[href*="calendly.com"]').forEach(link => {
            link.addEventListener('click', () => {
                trackEvent('CalendlyClick', {
                    link: link.getAttribute('href'),
                    ...utms
                });
            });
        });
    }

    /**
     * Inject hidden UTM fields into all forms
     */
    function injectUTMsIntoForms() {
        const utms = getStoredUTMs();
        if (Object.keys(utms).length === 0) return;

        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            // Avoid duplicate injection
            if (form.querySelector('input[name="utm_source"]')) return;

            Object.entries(utms).forEach(([key, val]) => {
                const hiddenInput = document.createElement('input');
                hiddenInput.type = 'hidden';
                hiddenInput.name = key;
                hiddenInput.value = val;
                form.appendChild(hiddenInput);
            });

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

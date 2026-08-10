/**
 * Snapchat Pixel — Complete Event Tracking System
 * ================================================
 * Tracks EVERY meaningful interaction on the website:
 *
 * Standard Events:
 *   PAGE_VIEW        → Every page load
 *   VIEW_CONTENT     → Case studies, blog posts, service pages
 *   SIGN_UP          → Lead form submit, Hire Me modal submit
 *   SUBSCRIBE        → Newsletter / blog subscribe
 *   SEARCH           → Search interactions
 *
 * Custom Events:
 *   CUSTOM_EVENT_1   → WhatsApp click
 *   CUSTOM_EVENT_2   → Calendly / schedule click
 *   CUSTOM_EVENT_3   → Case study / portfolio view
 *   CUSTOM_EVENT_4   → CTA button click (any primary button)
 *   CUSTOM_EVENT_5   → Scroll depth milestone (25/50/75/100%)
 *
 * All events fire BOTH:
 *   → Browser Snap Pixel SDK (client-side)
 *   → Server CAPI v3 (server-side, hashed PII, deduplication)
 */

(function (window, document) {
    'use strict';

    // ─── Config ──────────────────────────────────────
    const PIXEL_ID    = '5839ab52-f90c-4fc9-9967-17bcb35833ea';
    const CAPI_URL    = '/api/snap/event';
    let   CAPI_READY  = false; // set true once server confirms CAPI enabled

    // ─── Deduplication ───────────────────────────────
    const _fired = new Set(); // prevent double-firing same event type per session

    function genId(prefix) {
        return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`;
    }

    // ─── ScCid capture ───────────────────────────────
    function getScCid() {
        const url = new URL(window.location.href);
        const fromUrl = url.searchParams.get('ScCid') || url.searchParams.get('sccid');
        if (fromUrl) sessionStorage.setItem('_sc_click_id', fromUrl);
        return sessionStorage.getItem('_sc_click_id') || null;
    }

    // ─── Collect PII from page ────────────────────────
    function collectUser() {
        const u = {};
        const emailEl = document.getElementById('email')       || document.querySelector('input[type="email"]');
        const phoneEl = document.getElementById('phone')       || document.querySelector('input[type="tel"]');
        const nameEl  = document.getElementById('fullName')    || document.querySelector('input[name="fullName"]');
        const hireEmailEl = document.getElementById('hireEmail');
        const hireWaEl    = document.getElementById('hireWhatsApp');
        const hireNameEl  = document.getElementById('hireName');

        const email = (emailEl?.value || hireEmailEl?.value || '').trim().toLowerCase();
        const phone = (phoneEl?.value || hireWaEl?.value || '').trim();
        const name  = (nameEl?.value  || hireNameEl?.value || '').trim();

        if (email) u.email = email;
        if (phone) u.phone = phone;
        if (name)  {
            const parts = name.split(' ');
            u.firstName = parts[0] || '';
            u.lastName  = parts.slice(1).join(' ') || '';
        }

        const scid = getScCid();
        if (scid) u.scid = scid;
        return u;
    }

    // ─── CAPI dual-fire (server-side) ────────────────
    async function capi(eventName, eventId, customData) {
        if (!CAPI_READY) return;
        try {
            await fetch(CAPI_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                keepalive: true,
                body: JSON.stringify({
                    eventName,
                    eventId,
                    eventSourceUrl: window.location.href,
                    userData: collectUser(),
                    customData: customData || {}
                })
            });
        } catch (_) { /* silent — pixel already fired */ }
    }

    // ─── Core fire function ───────────────────────────
    function fire(snapEvent, eventId, params, capiEventName, capiData) {
        // Browser pixel
        if (window.snaptr) {
            window.snaptr('track', snapEvent, {
                client_dedup_id: eventId,
                ...(params || {})
            });
        }
        // Server CAPI (dual-fire with same event_id for deduplication)
        capi(capiEventName || snapEvent, eventId, capiData || {});
        console.debug(`[Snap] ${snapEvent} | ${eventId}`);
    }

    // ═══════════════════════════════════════════════════
    // 1. PAGE VIEW — fires on every page load
    // ═══════════════════════════════════════════════════
    function trackPageView() {
        const id = genId('pv');
        // Pixel base code already fires PAGE_VIEW on init — we just sync CAPI
        capi('PageView', id, {
            contentName: document.title,
            contentCategory: getPageCategory()
        });
    }

    function getPageCategory() {
        const path = window.location.pathname;
        if (path.includes('service-form')) return 'lead_form';
        if (path.includes('case-studies')) return 'case_studies';
        if (path.includes('blog'))         return 'blog';
        if (path.includes('about'))        return 'about';
        if (path.includes('contact'))      return 'contact';
        if (path.includes('workflow'))     return 'workflow';
        return 'home';
    }

    // ═══════════════════════════════════════════════════
    // 2. SCROLL DEPTH — 25%, 50%, 75%, 100%
    // ═══════════════════════════════════════════════════
    function initScrollTracking() {
        const milestones = [25, 50, 75, 100];
        const reached    = new Set();

        function onScroll() {
            const scrolled = window.scrollY + window.innerHeight;
            const total    = document.documentElement.scrollHeight;
            const pct      = Math.round((scrolled / total) * 100);

            milestones.forEach(m => {
                if (pct >= m && !reached.has(m)) {
                    reached.add(m);
                    const id = genId(`scroll${m}`);
                    fire('CUSTOM_EVENT_5', id,
                        { description: `Scroll ${m}%`, number_items: String(m) },
                        'ScrollDepth',
                        { contentName: `Scroll ${m}%`, contentCategory: getPageCategory(), value: m }
                    );
                }
            });
        }

        window.addEventListener('scroll', onScroll, { passive: true });
    }

    // ═══════════════════════════════════════════════════
    // 3. TIME ON PAGE — 30s, 60s, 3min engagement
    // ═══════════════════════════════════════════════════
    function initTimeTracking() {
        const times = [30, 60, 180]; // seconds
        times.forEach(sec => {
            setTimeout(() => {
                const id = genId(`time${sec}`);
                fire('VIEW_CONTENT', id,
                    { description: `Engaged ${sec}s on ${document.title}` },
                    'TimeEngagement',
                    { contentName: `${sec}s engagement`, contentCategory: getPageCategory(), value: sec }
                );
            }, sec * 1000);
        });
    }

    // ═══════════════════════════════════════════════════
    // 4. WHATSAPP CLICK
    // ═══════════════════════════════════════════════════
    function bindWhatsApp() {
        document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]').forEach(el => {
            if (el.dataset.snapBound) return;
            el.dataset.snapBound = '1';
            el.addEventListener('click', () => {
                const id = genId('wa');
                fire('CUSTOM_EVENT_1', id,
                    { description: 'WhatsApp Contact Click' },
                    'WhatsAppClick',
                    { contentName: 'WhatsApp Click', contentCategory: 'contact' }
                );
            });
        });
    }

    // ═══════════════════════════════════════════════════
    // 5. CALENDLY / SCHEDULE CLICK
    // ═══════════════════════════════════════════════════
    function bindCalendly() {
        document.querySelectorAll('a[href*="calendly.com"]').forEach(el => {
            if (el.dataset.snapBound) return;
            el.dataset.snapBound = '1';
            el.addEventListener('click', () => {
                const id = genId('cal');
                fire('CUSTOM_EVENT_2', id,
                    { description: 'Calendly Schedule Click' },
                    'CalendlyClick',
                    { contentName: 'Calendly Schedule', contentCategory: 'scheduling' }
                );
            });
        });
    }

    // ═══════════════════════════════════════════════════
    // 6. CTA BUTTON CLICKS (all primary buttons)
    // ═══════════════════════════════════════════════════
    function bindCTAButtons() {
        const selectors = [
            '.btn-primary',
            '.nav-cta',
            '.hire-me-trigger',
            '[data-cta]'
        ];
        document.querySelectorAll(selectors.join(',')).forEach(el => {
            // Skip if already bound or it's a WhatsApp/Calendly link (tracked separately)
            if (el.dataset.snapCtaBound) return;
            if (el.href && (el.href.includes('wa.me') || el.href.includes('calendly.com'))) return;
            el.dataset.snapCtaBound = '1';

            el.addEventListener('click', () => {
                const label = el.textContent.trim().slice(0, 50) || el.getAttribute('aria-label') || 'CTA';
                const id = genId('cta');
                fire('CUSTOM_EVENT_4', id,
                    { description: label },
                    'CTAClick',
                    { contentName: label, contentCategory: getPageCategory() }
                );
            });
        });
    }

    // ═══════════════════════════════════════════════════
    // 7. CASE STUDY / PORTFOLIO VIEW
    // ═══════════════════════════════════════════════════
    function bindCaseStudies() {
        document.querySelectorAll('.case-card, [data-track="view-content"]').forEach(el => {
            if (el.dataset.snapBound) return;
            el.dataset.snapBound = '1';
            el.addEventListener('click', () => {
                const title = el.querySelector('h3, h2, h4')?.textContent?.trim()?.slice(0, 60) || 'Case Study';
                const id = genId('vc');
                fire('CUSTOM_EVENT_3', id,
                    { description: title },
                    'CaseStudyView',
                    { contentName: title, contentCategory: 'portfolio' }
                );
            });
        });
    }

    // ═══════════════════════════════════════════════════
    // 8. BLOG POST CLICK
    // ═══════════════════════════════════════════════════
    function bindBlogPosts() {
        document.querySelectorAll('.blog-card, .blog-preview-card, a[href*="blog.html"]').forEach(el => {
            if (el.dataset.snapBound) return;
            el.dataset.snapBound = '1';
            el.addEventListener('click', () => {
                const title = el.querySelector('h3, h2')?.textContent?.trim()?.slice(0, 60) || 'Blog Post';
                const id = genId('blog');
                fire('VIEW_CONTENT', id,
                    { description: title },
                    'BlogView',
                    { contentName: title, contentCategory: 'blog' }
                );
            });
        });
    }

    // ═══════════════════════════════════════════════════
    // 9. SERVICE CATEGORY CLICK (expertise icons)
    // ═══════════════════════════════════════════════════
    function bindServiceItems() {
        document.querySelectorAll('.expertise-icon-item, .service-item, a[href*="service-form"]').forEach(el => {
            if (el.dataset.snapBound) return;
            el.dataset.snapBound = '1';
            el.addEventListener('click', () => {
                const label = el.textContent?.trim()?.slice(0, 50) || 'Service';
                const id = genId('svc');
                fire('VIEW_CONTENT', id,
                    { description: label },
                    'ServiceClick',
                    { contentName: label, contentCategory: 'services' }
                );
            });
        });
    }

    // ═══════════════════════════════════════════════════
    // 10. LEAD FORM SUBMIT (SIGN_UP)
    // ═══════════════════════════════════════════════════
    function bindForms() {
        document.querySelectorAll('form').forEach(form => {
            if (form.dataset.snapBound) return;
            form.dataset.snapBound = '1';

            // Track form START (first input touched)
            let formStarted = false;
            form.querySelectorAll('input, select, textarea').forEach(input => {
                input.addEventListener('focus', () => {
                    if (formStarted) return;
                    formStarted = true;
                    const id = genId('fstart');
                    fire('VIEW_CONTENT', id,
                        { description: 'Form Started' },
                        'FormStart',
                        { contentName: form.id || 'Lead Form', contentCategory: 'lead_form' }
                    );
                }, { once: true });
            });

            // Track form SUBMIT (SIGN_UP)
            form.addEventListener('submit', () => {
                const user = collectUser();
                const id   = genId('su');

                if (window.snaptr) {
                    window.snaptr('track', 'SIGN_UP', {
                        client_dedup_id: id,
                        user_email: user.email || '',
                        description: form.id || 'Lead Form Submit'
                    });
                }

                capi('Lead', id, {
                    contentName: form.id || 'Lead Form',
                    contentCategory: 'lead_form'
                });
            });
        });
    }

    // ═══════════════════════════════════════════════════
    // 11. HIRE ME MODAL OPEN
    // ═══════════════════════════════════════════════════
    function bindHireMeModal() {
        document.querySelectorAll('.hire-me-trigger').forEach(el => {
            if (el.dataset.snapHireBound) return;
            el.dataset.snapHireBound = '1';
            el.addEventListener('click', () => {
                const id = genId('hire');
                fire('VIEW_CONTENT', id,
                    { description: 'Hire Me Modal Opened' },
                    'HireMeOpen',
                    { contentName: 'Hire Me Modal', contentCategory: 'lead_form' }
                );
            });
        });
    }

    // ═══════════════════════════════════════════════════
    // 12. SECTION VIEWS (IntersectionObserver)
    //     Fires when key sections scroll into view
    // ═══════════════════════════════════════════════════
    function initSectionTracking() {
        const sections = {
            'services':  'Services Section Viewed',
            'work':      'Case Studies Section Viewed',
            'about':     'About Section Viewed',
            'contact':   'Contact Section Viewed',
            'expertise': 'Expertise Section Viewed',
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const sectionId = entry.target.id;
                const label = sections[sectionId];
                if (!label || _fired.has(sectionId)) return;
                _fired.add(sectionId);
                observer.unobserve(entry.target);

                const id = genId(`sec_${sectionId}`);
                fire('VIEW_CONTENT', id,
                    { description: label },
                    'SectionView',
                    { contentName: label, contentCategory: getPageCategory() }
                );
            });
        }, { threshold: 0.3 });

        Object.keys(sections).forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
    }

    // ═══════════════════════════════════════════════════
    // 13. SOCIAL MEDIA CLICKS
    // ═══════════════════════════════════════════════════
    function bindSocialClicks() {
        const socialMap = {
            'snapchat.com': 'Snapchat',
            'instagram.com': 'Instagram',
            'facebook.com': 'Facebook',
            'tiktok.com': 'TikTok',
            'twitter.com': 'Twitter/X',
            'linkedin.com': 'LinkedIn',
            'reddit.com': 'Reddit',
            'youtube.com': 'YouTube'
        };

        document.querySelectorAll('a.social-icon, .footer-socials a').forEach(el => {
            if (el.dataset.snapBound) return;
            el.dataset.snapBound = '1';
            el.addEventListener('click', () => {
                const href     = el.href || '';
                const platform = Object.entries(socialMap).find(([k]) => href.includes(k))?.[1] || 'Social';
                const id = genId('social');
                fire('CUSTOM_EVENT_4', id,
                    { description: `${platform} Click` },
                    'SocialClick',
                    { contentName: platform, contentCategory: 'social' }
                );
            });
        });
    }

    // ═══════════════════════════════════════════════════
    // 14. EMAIL / PHONE LINK CLICKS
    // ═══════════════════════════════════════════════════
    function bindContactLinks() {
        document.querySelectorAll('a[href^="mailto:"], a[href^="tel:"]').forEach(el => {
            if (el.dataset.snapBound) return;
            el.dataset.snapBound = '1';
            el.addEventListener('click', () => {
                const type = el.href.startsWith('mailto') ? 'Email Click' : 'Phone Click';
                const id   = genId('contact');
                fire('CUSTOM_EVENT_1', id,
                    { description: type },
                    'ContactClick',
                    { contentName: type, contentCategory: 'contact' }
                );
            });
        });
    }

    // ═══════════════════════════════════════════════════
    // BIND ALL (runs on init + re-runs on DOM changes)
    // ═══════════════════════════════════════════════════
    function bindAll() {
        bindWhatsApp();
        bindCalendly();
        bindCTAButtons();
        bindCaseStudies();
        bindBlogPosts();
        bindServiceItems();
        bindForms();
        bindHireMeModal();
        bindSocialClicks();
        bindContactLinks();
    }

    // ═══════════════════════════════════════════════════
    // INITIALIZE
    // ═══════════════════════════════════════════════════
    async function init() {
        try {
            // Check if CAPI is configured server-side
            const res = await fetch('/api/snap/config').catch(() => null);
            if (res && res.ok) {
                const { data } = await res.json();
                CAPI_READY = data?.capiEnabled || false;
            }
        } catch (_) {}

        // Fire PAGE_VIEW CAPI sync (pixel base code already fired it client-side)
        trackPageView();

        // Start engagement trackers
        initScrollTracking();
        initTimeTracking();

        // Bind all click/interaction events after DOM ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                bindAll();
                initSectionTracking();
            });
        } else {
            bindAll();
            initSectionTracking();
        }

        // Re-bind when dynamic content is injected (modals, SPA nav, etc.)
        new MutationObserver(() => bindAll()).observe(
            document.body || document.documentElement,
            { childList: true, subtree: true }
        );
    }

    // ─── Public API ───────────────────────────────────
    window.SnapTrack = {
        pageView:      () => trackPageView(),
        signUp:        (userData, data) => {
            const id = genId('su');
            if (window.snaptr) window.snaptr('track', 'SIGN_UP', { client_dedup_id: id, user_email: userData?.email || '' });
            capi('Lead', id, data || {});
        },
        viewContent:   (name, cat)  => { const id = genId('vc');  fire('VIEW_CONTENT',   id, { description: name }, 'ViewContent',   { contentName: name, contentCategory: cat }); },
        whatsapp:      ()           => { const id = genId('wa');  fire('CUSTOM_EVENT_1', id, { description: 'WhatsApp' }, 'WhatsAppClick', {}); },
        calendly:      ()           => { const id = genId('cal'); fire('CUSTOM_EVENT_2', id, { description: 'Calendly' }, 'CalendlyClick', {}); },
        cta:           (label)      => { const id = genId('cta'); fire('CUSTOM_EVENT_4', id, { description: label },   'CTAClick', { contentName: label }); },
        fire
    };

    // Auto-start
    init();

})(window, document);

/**
 * Hazem Ali Galal - Website JS
 * Handles: Navbar scroll, mobile menu, scroll reveal,
 *          expertise items, scroll-to-top, smooth scroll
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ───────────────────────────────────────────
     *  NAVBAR SCROLL EFFECT
     * ─────────────────────────────────────────── */
    const topbar = document.getElementById('topbar');
    if (topbar) {
        window.addEventListener('scroll', () => {
            topbar.classList.toggle('scrolled', window.scrollY > 50);
        }, { passive: true });
    }

    /* ───────────────────────────────────────────
     *  MOBILE MENU
     * ─────────────────────────────────────────── */
    const mobileBtn = document.getElementById('mobile-btn');
    const navMenu = document.getElementById('nav-menu');
    const navOverlay = document.getElementById('nav-overlay');

    const HAMBURGER_SVG = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
    </svg>`;
    const CLOSE_SVG = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>`;

    const openMenu = () => {
        navMenu && navMenu.classList.add('open');
        navOverlay && navOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        if (mobileBtn) mobileBtn.innerHTML = CLOSE_SVG;
    };

    const closeMenu = () => {
        navMenu && navMenu.classList.remove('open');
        navOverlay && navOverlay.classList.remove('open');
        document.body.style.overflow = '';
        if (mobileBtn) mobileBtn.innerHTML = HAMBURGER_SVG;
    };

    mobileBtn && mobileBtn.addEventListener('click', () => {
        navMenu && navMenu.classList.contains('open') ? closeMenu() : openMenu();
    });
    navOverlay && navOverlay.addEventListener('click', closeMenu);

    // Close menu on link click
    navMenu && navMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', closeMenu);
    });

    /* ───────────────────────────────────────────
     *  SCROLL REVEAL (IntersectionObserver)
     * ─────────────────────────────────────────── */
    const revealEls = document.querySelectorAll(
        '.reveal, .reveal-left, .reveal-right, .service-item, .expertise-icon-item, .case-card'
    );

    if (revealEls.length) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Stagger siblings
                    const siblings = Array.from(entry.target.parentElement.children);
                    const idx = siblings.indexOf(entry.target);
                    entry.target.style.transitionDelay = `${idx * 0.07}s`;
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        revealEls.forEach(el => revealObserver.observe(el));
    }

    /* ───────────────────────────────────────────
     *  SCROLL TO TOP BUTTON
     * ─────────────────────────────────────────── */
    const scrollTopBtn = document.getElementById('scroll-top');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            scrollTopBtn.classList.toggle('show', window.scrollY > 400);
        }, { passive: true });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ───────────────────────────────────────────
     *  SMOOTH SCROLL FOR ANCHOR LINKS
     * ─────────────────────────────────────────── */
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    /* ───────────────────────────────────────────
     *  ACTIVE NAV LINK highlighting on scroll
     * ─────────────────────────────────────────── */
    const sections = document.querySelectorAll('section[id], div[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (sections.length && navLinks.length) {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.toggle('active',
                            link.getAttribute('href') === `#${id}`);
                    });
                }
            });
        }, { threshold: 0.35 });

        sections.forEach(s => sectionObserver.observe(s));
    }

    /* ───────────────────────────────────────────
     *  HERO PARALLAX (subtle mouse move)
     * ─────────────────────────────────────────── */
    const heroVisual = document.querySelector('.hero-visual img');
    if (heroVisual) {
        document.addEventListener('mousemove', (e) => {
            const xSway = ((e.clientX / window.innerWidth) - 0.5) * 12;
            const ySway = ((e.clientY / window.innerHeight) - 0.5) * 8;
            heroVisual.style.transform = `translate(${xSway}px, ${ySway}px)`;
        }, { passive: true });
    }

    /* ───────────────────────────────────────────
     *  CASE CARDS - light ripple on click
     * ─────────────────────────────────────────── */
    document.querySelectorAll('.case-card').forEach(card => {
        card.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            Object.assign(ripple.style, {
                position: 'absolute',
                width: '10px', height: '10px',
                borderRadius: '50%',
                background: 'rgba(235,23,81,0.25)',
                top: `${e.clientY - rect.top}px`,
                left: `${e.clientX - rect.left}px`,
                transform: 'translate(-50%,-50%) scale(0)',
                transition: 'transform 0.4s, opacity 0.4s',
            });
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            requestAnimationFrame(() => {
                ripple.style.transform = 'translate(-50%,-50%) scale(30)';
                ripple.style.opacity = '0';
            });
            ripple.addEventListener('transitionend', () => ripple.remove());
        });
    });

});

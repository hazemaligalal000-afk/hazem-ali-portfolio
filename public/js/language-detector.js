(async function() {
    let shouldTranslate = false;
    let alreadyHasCookie = false;

    // 1. Check if user already has a translation cookie
    if (document.cookie.includes('googtrans=/en/ar')) {
        shouldTranslate = true;
        alreadyHasCookie = true;
    }

    // 2. Check Device Language
    if (!shouldTranslate) {
        const userLang = navigator.language || navigator.userLanguage;
        if (userLang && userLang.toLowerCase().startsWith('ar')) {
            shouldTranslate = true;
        }
    }

    // 3. Check IP Geolocation (if not already determined)
    if (!shouldTranslate && !sessionStorage.getItem('geoChecked')) {
        sessionStorage.setItem('geoChecked', 'true');
        try {
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();
            
            const arabCountries = ['AE', 'BH', 'DZ', 'EG', 'IQ', 'JO', 'KW', 'LB', 'LY', 'MA', 'OM', 'PS', 'QA', 'SA', 'SD', 'SY', 'TN', 'YE'];
            
            if (data && data.country_code && arabCountries.includes(data.country_code)) {
                shouldTranslate = true;
            }
        } catch (e) {
            console.error('IP Geolocation failed:', e);
        }
    }

    // 4. Apply Translation via Google Translate
    if (shouldTranslate) {
        if (!alreadyHasCookie) {
            // Set session cookie to force Arabic translation
            document.cookie = "googtrans=/en/ar; path=/";
            document.cookie = "googtrans=/en/ar; path=/; domain=" + location.hostname;
        }

        // Apply UI fixes for RTL and hide Google Translate toolbar
        const style = document.createElement('style');
        style.innerHTML = `
            body { top: 0 !important; direction: rtl !important; text-align: right !important; }
            .skiptranslate, .goog-te-banner-frame { display: none !important; }
            .goog-te-spinner-pos { display: none !important; }
            /* Fixes for specific elements in RTL */
            .nav-container, .hero-grid, .c-stat, .stats-grid, .why-grid, .portfolio-grid { direction: rtl !important; }
            .badge, .panel-title, .console-val { direction: ltr !important; }
        `;
        document.head.appendChild(style);

        // Inject Google Translate script
        window.googleTranslateElementInit = function() {
            new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'ar',
                autoDisplay: false
            }, 'google_translate_element');
        };

        const gtScript = document.createElement('script');
        gtScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.head.appendChild(gtScript);

        // Add container
        window.addEventListener('DOMContentLoaded', () => {
            const gtDiv = document.createElement('div');
            gtDiv.id = "google_translate_element";
            gtDiv.style.display = "none";
            document.body.appendChild(gtDiv);
        });
    }
})();

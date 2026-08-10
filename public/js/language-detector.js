(function() {
    // Force Arabic translation for everyone (No IP or Browser checks)
    const shouldTranslate = true;

    if (shouldTranslate) {
        // Set cookies to force Arabic translation
        document.cookie = "googtrans=/en/ar; path=/";
        document.cookie = "googtrans=/en/ar; path=/; domain=" + location.hostname;

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

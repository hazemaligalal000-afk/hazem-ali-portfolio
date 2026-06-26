// Google Translate Config
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'ar',
        includedLanguages: 'ar,en',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');
}

// Inject Google Translate Scripts
(function () {
    const gtScript = document.createElement('script');
    gtScript.type = 'text/javascript';
    gtScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.head.appendChild(gtScript);
})();

document.addEventListener('DOMContentLoaded', () => {
    // Inject the hidden google element dynamically so it does not crowd HTML
    const hiddenDiv = document.createElement('div');
    hiddenDiv.id = 'google_translate_element';
    hiddenDiv.style.opacity = '0';
    hiddenDiv.style.position = 'absolute';
    hiddenDiv.style.zIndex = '-9999';
    hiddenDiv.style.pointerEvents = 'none';
    document.body.appendChild(hiddenDiv);

    // Setup custom switcher buttons if they exist
    const langBtns = document.querySelectorAll('.lang-btn');

    // Check saved language (Default Arabic)
    const currentLang = localStorage.getItem('site_lang') || 'ar';
    updateActiveButton(currentLang);
    setDirection(currentLang);
    switchLanguage(currentLang, true); // Initialize

    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const selectLang = e.target.getAttribute('data-lang');
            if (selectLang === currentLang) return; // Ignore if already active
            switchLanguage(selectLang);
        });
    });

    function switchLanguage(lang, isInit = false) {
        localStorage.setItem('site_lang', lang);
        updateActiveButton(lang);
        setDirection(lang);

        if (lang === 'ar' && !isInit) {
            // Reload page to clear google translation modifications cleanly
            window.location.reload();
            return;
        }

        if (lang === 'en') {
            // Find the google translate dropdown and trigger change
            const checkExist = setInterval(() => {
                const select = document.querySelector('.goog-te-combo');
                if (select) {
                    select.value = 'en';
                    select.dispatchEvent(new Event('change'));
                    clearInterval(checkExist);
                }
            }, 150);

            // Fallback clear
            setTimeout(() => clearInterval(checkExist), 5000);
        }
    }

    function updateActiveButton(lang) {
        langBtns.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    function setDirection(lang) {
        if (lang === 'en') {
            document.documentElement.setAttribute('dir', 'ltr');
            document.documentElement.setAttribute('lang', 'en');
        } else {
            document.documentElement.setAttribute('dir', 'rtl');
            document.documentElement.setAttribute('lang', 'ar');
        }
    }
});

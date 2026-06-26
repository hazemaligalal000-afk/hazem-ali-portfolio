const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.html'));

const switcherHTML = `
                <div class="lang-switcher">
                    <button class="lang-btn active" data-lang="ar">AR</button>
                    <button class="lang-btn" data-lang="en">EN</button>
                </div>
`;

const scriptTag = `\n    <script src="translator.js"></script>\n</body>`;

for (let file of files) {
    const filePath = path.join(publicDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Inject lang switcher after the Calendly CTA or within that block
    // We look for: <div style="display:flex;align-items:center;gap:16px;">
    if (!content.includes('class="lang-switcher"')) {
        const ctaStart = content.indexOf('<div style="display:flex;align-items:center;gap:16px;">');
        if (ctaStart !== -1) {
            content = content.replace(
                '<div style="display:flex;align-items:center;gap:16px;">',
                `<div style="display:flex;align-items:center;gap:16px;">${switcherHTML}`
            );
        }
    }

    // Inject script tag
    if (!content.includes('translator.js')) {
        content = content.replace('</body>', scriptTag);
    }

    fs.writeFileSync(filePath, content, 'utf8');
}
console.log('HTML files modified successfully with language switcher!');

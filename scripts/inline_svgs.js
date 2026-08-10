const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../public/index.html');
let html = fs.readFileSync(indexPath, 'utf8');

const svgs = {
    'meta': fs.readFileSync(path.join(__dirname, '../meta.svg'), 'utf8'),
    'googleads': fs.readFileSync(path.join(__dirname, '../googleads.svg'), 'utf8'),
    'snapchat': fs.readFileSync(path.join(__dirname, '../snapchat.svg'), 'utf8'),
    'tiktok': fs.readFileSync(path.join(__dirname, '../tiktok.svg'), 'utf8'),
    'shopify': fs.readFileSync(path.join(__dirname, '../shopify.svg'), 'utf8')
};

for (const [key, svg] of Object.entries(svgs)) {
    const styledSvg = svg.replace('<svg ', `<svg class="platform-icon" id="icon-${key}" `);
    const imgTagRegex = new RegExp(`<img src="https://cdn.simpleicons.org/${key}"[^>]*>`, 'g');
    html = html.replace(imgTagRegex, styledSvg);
}

fs.writeFileSync(indexPath, html);
console.log('Inlined SVGs successfully.');

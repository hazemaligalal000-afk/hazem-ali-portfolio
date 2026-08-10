const https = require('https');
const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../public/index.html');
let html = fs.readFileSync(indexPath, 'utf8');

const icons = ['meta', 'googleads', 'snapchat', 'tiktok', 'shopify'];

function fetchSvg(icon) {
    return new Promise((resolve, reject) => {
        https.get(`https://cdn.simpleicons.org/${icon}`, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

async function run() {
    for (const icon of icons) {
        try {
            const svgData = await fetchSvg(icon);
            const styledSvg = svgData.replace('<svg ', `<svg class="platform-icon" id="icon-${icon}" `);
            const regex = new RegExp(`<img src="https://cdn\\.simpleicons\\.org/${icon}"[^>]*>`, 'g');
            html = html.replace(regex, styledSvg);
            console.log(`Inlined ${icon}`);
        } catch (e) {
            console.error(`Failed to inline ${icon}:`, e);
        }
    }
    fs.writeFileSync(indexPath, html, 'utf8');
    console.log('Done.');
}

run();

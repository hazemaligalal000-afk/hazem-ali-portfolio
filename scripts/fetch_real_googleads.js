const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://cdn.worldvectorlogo.com/logos/google-ads-2.svg';
const req = https.get(url, {
    headers: { 'User-Agent': 'Mozilla/5.0' }
}, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        if (data.includes('<svg')) {
            fs.writeFileSync(path.join(__dirname, '../googleads_real.svg'), data, 'utf8');
            console.log('Downloaded real SVG.');
        } else {
            console.log('Failed:', data);
        }
    });
});
req.on('error', console.error);

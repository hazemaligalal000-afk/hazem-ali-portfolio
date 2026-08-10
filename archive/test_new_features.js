const axios = require('axios');

const BASE_URL = 'http://127.0.0.1:3000/api';
const credentials = {
    email: 'hazemaligalal999@gmail.com',
    password: 'HazemAdmin@2026!'
};

async function testNewFeatures() {
    try {
        console.log('--- Testing Login ---');
        const loginRes = await axios.post(`${BASE_URL}/auth/login`, credentials);
        const token = loginRes.data.token;
        const config = { headers: { 'Authorization': `Bearer ${token}` } };
        console.log('✅ Login Successful');

        const endpoints = [
            '/admin/health',
            '/admin/media',
            '/admin/activity-logs',
            '/admin/testimonials',
            '/admin/subscribers',
            '/admin/content-blocks'
        ];

        for (const ep of endpoints) {
            console.log(`--- Testing ${ep} ---`);
            const res = await axios.get(`${BASE_URL}${ep}`, config);
            console.log(`✅ ${ep}: ${res.status} - Data count: ${res.data.data?.length ?? 'object'}`);
        }

    } catch (error) {
        console.error('❌ Error:', error.response?.data || error.message);
    }
}

testNewFeatures();

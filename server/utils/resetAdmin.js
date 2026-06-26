#!/usr/bin/env node
/**
 * Reset Admin Password
 * Run: node server/utils/resetAdmin.js
 */
require('dotenv').config();
const bcrypt = require('bcryptjs');
const { db, initializeDatabase } = require('../config/database');

function resetAdmin() {
    try {
        initializeDatabase();

        const email = process.env.ADMIN_EMAIL || 'hazemaligalal999@gmail.com';
        const password = process.env.ADMIN_PASSWORD || 'HazemAdmin@2026!';
        const passwordHash = bcrypt.hashSync(password, 12);

        // Check if user exists
        const user = db.prepare('SELECT id, email FROM users WHERE email = ?').get(email);

        if (user) {
            db.prepare('UPDATE users SET password_hash = ?, updated_at = datetime(\'now\') WHERE email = ?').run(passwordHash, email);
            console.log(`✅ Password reset for: ${email}`);
        } else {
            db.prepare(`
                INSERT INTO users (email, password_hash, full_name, role)
                VALUES (?, ?, ?, ?)
            `).run(email, passwordHash, 'Hazem Ali Galal', 'super_admin');
            console.log(`✅ Admin user created: ${email}`);
        }

        console.log(`   Email: ${email}`);
        console.log(`   Password: ${password}`);
        process.exit(0);
    } catch (error) {
        console.error('❌ Reset error:', error);
        process.exit(1);
    }
}

resetAdmin();

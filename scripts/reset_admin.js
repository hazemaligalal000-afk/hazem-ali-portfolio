const { db } = require('../server/config/database');
const bcrypt = require('bcryptjs');

try {
    const email = 'hazemaligalal999@gmail.com';
    const password = 'HazemAdmin@2026!';
    const passwordHash = bcrypt.hashSync(password, 12);

    // Delete existing if any to be sure
    db.prepare('DELETE FROM users WHERE email = ?').run(email);

    // Insert fresh
    db.prepare(`
        INSERT INTO users (email, password_hash, full_name, role, is_active)
        VALUES (?, ?, ?, ?, 1)
    `).run(email, passwordHash, 'Hazem Ali Galal', 'super_admin');

    console.log('✅ Admin user reset successfully');
    const user = db.prepare('SELECT id, email, role FROM users WHERE email = ?').get(email);
    console.log('User found:', user);
} catch (err) {
    console.error('Error resetting admin:', err);
}

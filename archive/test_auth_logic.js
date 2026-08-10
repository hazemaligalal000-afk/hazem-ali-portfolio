const Database = require('better-sqlite3');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = new Database(':memory:');
db.prepare('CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, password_hash TEXT, full_name TEXT, role TEXT, is_active INTEGER)').run();

const SECRET = 'test_secret';
const email = 'admin@test.com';
const pass = 'password123';
const hash = bcrypt.hashSync(pass, 12);

db.prepare('INSERT INTO users (email, password_hash, full_name, role, is_active) VALUES (?, ?, ?, ?, 1)').run(email, hash, 'Admin', 'super_admin');

const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
console.log('User logged in:', user);

const token = jwt.sign({ userId: user.id }, SECRET, { expiresIn: '1h' });
console.log('Token generated:', token);

// Verify
try {
    const decoded = jwt.verify(token, SECRET);
    console.log('Decoded:', decoded);
    const authedUser = db.prepare('SELECT id, email FROM users WHERE id = ?').get(decoded.userId);
    console.log('Auth worked?', authedUser ? 'YES' : 'NO');
} catch (e) {
    console.error('Auth failed:', e);
}
db.close();

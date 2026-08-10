/**
 * Authentication Routes
 */
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const { db } = require('../config/database');
const { authenticate, generateToken } = require('../middleware/auth');
const logger = require('../utils/logger');

// Login
router.post('/login',
    [
        body('email').isEmail().withMessage('Invalid email').normalizeEmail(),
        body('password').notEmpty().withMessage('Password required'),
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { email, password } = req.body;
            const user = db.prepare('SELECT * FROM users WHERE email = ? AND is_active = 1').get(email);

            if (!user || !bcrypt.compareSync(password, user.password_hash)) {
                logger.warn(`Failed login attempt for: ${email}`);
                return res.status(401).json({ error: 'Invalid email or password' });
            }

            const token = generateToken(user.id);

            // Update last login
            db.prepare('UPDATE users SET last_login_at = datetime(\'now\') WHERE id = ?').run(user.id);

            // Set cookie
            res.cookie('auth_token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
            });

            logger.info(`User logged in: ${email}`);

            res.json({
                success: true,
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    fullName: user.full_name,
                    role: user.role
                }
            });
        } catch (error) {
            logger.error('Login error:', error);
            res.status(500).json({ error: 'Login failed' });
        }
    }
);

// Logout
router.post('/logout', (req, res) => {
    res.clearCookie('auth_token');
    res.json({ success: true, message: 'Logged out successfully' });
});

// Get current user
router.get('/me', authenticate, (req, res) => {
    res.json({
        user: {
            id: req.user.id,
            email: req.user.email,
            fullName: req.user.full_name,
            role: req.user.role
        }
    });
});

// Change password
router.post('/change-password',
    authenticate,
    [
        body('currentPassword').notEmpty(),
        body('newPassword').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { currentPassword, newPassword } = req.body;
            const user = db.prepare('SELECT password_hash FROM users WHERE id = ?').get(req.user.id);

            if (!bcrypt.compareSync(currentPassword, user.password_hash)) {
                return res.status(400).json({ error: 'Current password is incorrect' });
            }

            const newHash = bcrypt.hashSync(newPassword, 12);
            db.prepare('UPDATE users SET password_hash = ?, updated_at = datetime(\'now\') WHERE id = ?')
                .run(newHash, req.user.id);

            logger.info(`Password changed for user: ${req.user.email}`);
            res.json({ success: true, message: 'Password changed successfully' });
        } catch (error) {
            logger.error('Password change error:', error);
            res.status(500).json({ error: 'Failed to change password' });
        }
    }
);

module.exports = router;

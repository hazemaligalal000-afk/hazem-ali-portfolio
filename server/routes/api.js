/**
 * Public API Routes
 * Handles all public-facing API endpoints
 */
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { v4: uuidv4 } = require('uuid');
const { db } = require('../config/database');
const logger = require('../utils/logger');
const snapchatCAPI = require('../services/snapchat-capi');
const nodemailer = require('nodemailer');

// ============================================
// HEALTH CHECK
// ============================================
router.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString(), uptime: process.uptime() });
});

// ============================================
// LEADS (Service Form Submissions)
// ============================================
router.post('/leads',
    [
        body('fullName').trim().notEmpty().withMessage('الاسم مطلوب').escape(),
        body('email').isEmail().withMessage('البريد الإلكتروني غير صحيح').normalizeEmail(),
        body('budget').trim().notEmpty().withMessage('الميزانية مطلوبة').escape(),
        body('serviceType').trim().notEmpty().withMessage('نوع الخدمة مطلوب').escape(),
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const {
                fullName, email, phone, budget, serviceType,
                answers, qualificationStatus,
                utmSource, utmMedium, utmCampaign
            } = req.body;

            const uuid = uuidv4();
            const answersData = answers ? JSON.stringify(answers) : null;

            db.prepare(`
                INSERT INTO leads (uuid, full_name, email, phone, budget, service_type,
                    qualification_status, answers, source, utm_source, utm_medium, utm_campaign,
                    ip_address, user_agent)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).run(
                uuid, fullName, email, phone || null, budget, serviceType,
                qualificationStatus || 'pending', answersData, 'website',
                utmSource || null, utmMedium || null, utmCampaign || null,
                req.ip, req.get('User-Agent')
            );

            // Track conversion event
            db.prepare(`
                INSERT INTO analytics_events (event_type, page, ip_address, user_agent, metadata)
                VALUES (?, ?, ?, ?, ?)
            `).run('lead_submission', '/service-form.html', req.ip, req.get('User-Agent'),
                JSON.stringify({ service: serviceType, qualified: qualificationStatus !== 'unqualified' })
            );

            logger.info(`New lead: ${fullName} (${email}) - ${serviceType} - ${qualificationStatus || 'pending'}`);

            // ─── Snapchat CAPI: fire SIGN_UP server-side (non-blocking) ───
            if (process.env.SNAPCHAT_PIXEL_ID && process.env.SNAPCHAT_CAPI_TOKEN) {
                const forwarded = req.headers['x-forwarded-for'];
                const ip = forwarded ? forwarded.split(',')[0].trim() : (req.ip || '');

                snapchatCAPI.sendSnapchatEvent(snapchatCAPI.buildLeadEvent({
                    eventId: `lead_${uuid}`,
                    url: `${process.env.DOMAIN || ''}/service-form.html`,
                    userData: {
                        email: email || null,
                        phone: phone || null,
                        ipAddress: ip,
                        userAgent: req.get('User-Agent') || '',
                        scid: req.cookies?._scid || req.cookies?.sc_click_id || null
                    },
                    serviceType,
                    budget
                })).catch(err => logger.error('Snap CAPI auto-lead error:', err.message));
            }

            // ─── Webhooks: Dispatch to active endpoints ───
            try {
                const activeWebhooks = db.prepare('SELECT url FROM webhooks WHERE is_active = 1 AND event_type = ?').all('new_lead');
                const leadPayload = {
                    uuid, fullName, email, phone, budget, serviceType,
                    qualificationStatus: qualificationStatus || 'pending',
                    answers, utmSource, utmMedium, utmCampaign
                };
                
                activeWebhooks.forEach(webhook => {
                    fetch(webhook.url, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(leadPayload)
                    }).catch(err => logger.error(`Webhook failed for ${webhook.url}:`, err.message));
                });
            } catch (whErr) {
                logger.error('Error dispatching webhooks:', whErr);
            }

            res.status(201).json({
                success: true,
                message: 'تم استلام طلبك بنجاح!',
                uuid
            });
        } catch (error) {
            logger.error('Lead submission error:', error);
            res.status(500).json({ error: 'حدث خطأ أثناء معالجة طلبك. يرجى المحاولة مرة أخرى.' });
        }
    }
);

// ============================================
// CONTACT MESSAGES
// ============================================
router.post('/contact',
    [
        body('fullName').trim().notEmpty().withMessage('الاسم مطلوب').escape(),
        body('email').isEmail().withMessage('البريد الإلكتروني غير صحيح').normalizeEmail(),
        body('message').trim().notEmpty().withMessage('الرسالة مطلوبة').isLength({ min: 10, max: 5000 }),
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { fullName, email, phone, subject, message } = req.body;
            const uuid = uuidv4();

            db.prepare(`
                INSERT INTO contact_messages (uuid, full_name, email, phone, subject, message, ip_address)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            `).run(uuid, fullName, email, phone || null, subject || null, message, req.ip);

            // Track event
            db.prepare(`
                INSERT INTO analytics_events (event_type, page, ip_address, metadata)
                VALUES (?, ?, ?, ?)
            `).run('contact_submission', '/contact.html', req.ip, JSON.stringify({ subject }));

            logger.info(`New contact message from: ${fullName} (${email})`);

            res.status(201).json({
                success: true,
                message: 'تم استلام رسالتك بنجاح! سنتواصل معك قريباً.',
                uuid
            });
        } catch (error) {
            logger.error('Contact submission error:', error);
            res.status(500).json({ error: 'حدث خطأ. يرجى المحاولة مرة أخرى.' });
        }
    }
);

// ============================================
// GENERIC FORM SUBMISSION (Replaces Formspree)
// ============================================
router.post('/submit-form', async (req, res) => {
    try {
        const payload = req.body;
        
        let htmlBody = `<h2>New Form Submission</h2><table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 600px;">`;
        for (const [key, value] of Object.entries(payload)) {
            htmlBody += `<tr><td style="background-color: #f8f9fa; font-weight: bold; width: 40%;">${key}</td><td>${value}</td></tr>`;
        }
        htmlBody += `</table><br><p>Sent from your portfolio website.</p>`;

        let transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: process.env.SMTP_PORT || 587,
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        const subject = payload['_subject'] || 'New Form Submission from Portfolio';
        const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER;

        await transporter.sendMail({
            from: process.env.EMAIL_FROM || '"Hazem Portfolio" <noreply@example.com>',
            to: adminEmail,
            subject: subject,
            html: htmlBody
        });

        logger.info(`Form submission sent via email successfully to ${adminEmail}`);
        res.status(200).json({ success: true, message: 'Form submitted successfully' });
    } catch (error) {
        logger.error('Generic form submission error (Nodemailer):', error);
        res.status(500).json({ error: 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.' });
    }
});

// ============================================
// PUBLIC CONTENT APIs
// ============================================

// Get case studies
router.get('/case-studies', (req, res) => {
    try {
        const cases = db.prepare(`
            SELECT uuid, title_ar, title_en, description_ar, region, industry,
                stat_1_value, stat_1_label, stat_2_value, stat_2_label,
                stat_3_value, stat_3_label, image_url, svg_illustration,
                cta_url, is_featured
            FROM case_studies
            WHERE is_active = 1
            ORDER BY display_order ASC
        `).all();
        res.json({ data: cases });
    } catch (error) {
        logger.error('Case studies fetch error:', error);
        res.status(500).json({ error: 'Error fetching case studies' });
    }
});

// Get blog posts
router.get('/blog', (req, res) => {
    try {
        const posts = db.prepare(`
            SELECT uuid, slug, title_ar, excerpt_ar, image_url, category, published_at, view_count
            FROM blog_posts
            WHERE is_published = 1
            ORDER BY published_at DESC
        `).all();
        res.json({ data: posts });
    } catch (error) {
        logger.error('Blog fetch error:', error);
        res.status(500).json({ error: 'Error fetching blog posts' });
    }
});

router.get('/blog/:slug', (req, res) => {
    try {
        const post = db.prepare(`
            SELECT uuid, slug, title_ar, content_ar, excerpt_ar, image_url, category, published_at, view_count
            FROM blog_posts
            WHERE slug = ? AND is_published = 1
        `).get(req.params.slug);

        if (!post) return res.status(404).json({ error: 'Post not found' });

        // Increment view count
        db.prepare('UPDATE blog_posts SET view_count = view_count + 1 WHERE uuid = ?').run(post.uuid);

        res.json({ data: post });
    } catch (error) {
        logger.error('Blog post fetch error:', error);
        res.status(500).json({ error: 'Error fetching blog post' });
    }
});

// Get services
router.get('/services', (req, res) => {
    try {
        const services = db.prepare(`
            SELECT uuid, slug, title_ar, title_en, description_ar, description_en,
                icon_svg, form_questions, display_order
            FROM services
            WHERE is_active = 1
            ORDER BY display_order ASC
        `).all();
        res.json({ data: services });
    } catch (error) {
        logger.error('Services fetch error:', error);
        res.status(500).json({ error: 'Error fetching services' });
    }
});

// Get expertise areas
router.get('/expertise', (req, res) => {
    try {
        const areas = db.prepare(`
            SELECT title_en, title_ar, icon_emoji, display_order
            FROM expertise_areas
            WHERE is_active = 1
            ORDER BY display_order ASC
        `).all();
        res.json({ data: areas });
    } catch (error) {
        logger.error('Expertise fetch error:', error);
        res.status(500).json({ error: 'Error fetching expertise areas' });
    }
});

// Get site settings (public subset)
router.get('/settings', (req, res) => {
    try {
        const settings = db.prepare(`
            SELECT setting_key, setting_value
            FROM site_settings
        `).all();

        const settingsObj = {};
        settings.forEach(s => { settingsObj[s.setting_key] = s.setting_value; });
        res.json({ data: settingsObj });
    } catch (error) {
        logger.error('Settings fetch error:', error);
        res.status(500).json({ error: 'Error fetching settings' });
    }
});

// Track custom analytics events
router.post('/analytics/event',
    [
        body('eventType').trim().notEmpty().escape(),
        body('page').optional().trim().escape(),
    ],
    (req, res) => {
        try {
            const { eventType, page, metadata } = req.body;
            db.prepare(`
                INSERT INTO analytics_events (event_type, page, ip_address, user_agent, session_id, metadata)
                VALUES (?, ?, ?, ?, ?, ?)
            `).run(
                eventType, page || null, req.ip,
                req.get('User-Agent'), req.cookies?.session_id || null,
                metadata ? JSON.stringify(metadata) : null
            );
            res.json({ success: true });
        } catch (error) {
            res.status(500).json({ error: 'Error tracking event' });
        }
    }
);

// ============================================
// NEWSLETTER SUBSCRIPTION
// ============================================
router.post('/subscribe',
    [body('email').isEmail().withMessage('Invalid email address').normalizeEmail()],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ error: errors.array()[0].msg });

        try {
            db.prepare('INSERT INTO subscribers (email, source) VALUES (?, ?)')
                .run(req.body.email, 'website_footer');
            res.json({ success: true, message: 'Successfully subscribed' });
        } catch (e) {
            if (e.message.includes('UNIQUE')) {
                res.status(400).json({ error: 'Email is already subscribed' });
            } else {
                logger.error('Subscribe error:', e);
                res.status(500).json({ error: 'Error processing subscription' });
            }
        }
    }
);

module.exports = router;

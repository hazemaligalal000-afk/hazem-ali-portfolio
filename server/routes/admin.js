/**
 * Admin API Routes
 * Protected routes for the admin dashboard
 */
const express = require('express');
const router = express.Router();
const { body, query, validationResult } = require('express-validator');
const { v4: uuidv4 } = require('uuid');
const { db } = require('../config/database');
const { authenticate, authorize } = require('../middleware/auth');
const logger = require('../utils/logger');
const nodemailer = require('nodemailer');

// All admin routes require authentication
router.use(authenticate);

// ============================================
// DASHBOARD ANALYTICS
// ============================================
const os = require('os');

// Helper to log admin activity
const logActivity = (userId, action, entityType = null, entityId = null, details = null, ip = '0.0.0.0') => {
    try {
        db.prepare(`
            INSERT INTO admin_activity_logs (user_id, action, entity_type, entity_id, details, ip_address)
            VALUES (?, ?, ?, ?, ?, ?)
        `).run(userId, action, entityType, entityId, details ? JSON.stringify(details) : null, ip);
    } catch (err) {
        logger.error('Activity logging failed:', err);
    }
};

// ============================================
// DASHBOARD ANALYTICS
// ============================================
router.get('/dashboard', (req, res) => {
    try {
        const totalLeads = db.prepare('SELECT COUNT(*) as count FROM leads').get().count;
        const newLeads = db.prepare("SELECT COUNT(*) as count FROM leads WHERE status = 'new'").get().count;
        const qualifiedLeads = db.prepare("SELECT COUNT(*) as count FROM leads WHERE qualification_status = 'qualified' OR qualification_status = 'hot'").get().count;
        const convertedLeads = db.prepare("SELECT COUNT(*) as count FROM leads WHERE status = 'converted'").get().count;
        const totalContacts = db.prepare('SELECT COUNT(*) as count FROM contact_messages').get().count;
        const unreadContacts = db.prepare("SELECT COUNT(*) as count FROM contact_messages WHERE status = 'unread'").get().count;

        // Page views (last 30 days)
        const pageViews30d = db.prepare(`
            SELECT COUNT(*) as count FROM analytics_events
            WHERE event_type = 'page_view' AND created_at >= datetime('now', '-30 days')
        `).get().count;

        // Unique visitors (last 30 days)
        const uniqueVisitors30d = db.prepare(`
            SELECT COUNT(DISTINCT session_id) as count FROM analytics_events
            WHERE event_type = 'page_view' AND created_at >= datetime('now', '-30 days')
        `).get().count;

        // Leads by service
        const leadsByService = db.prepare(`
            SELECT service_type, COUNT(*) as count
            FROM leads GROUP BY service_type ORDER BY count DESC
        `).all();

        // Recent leads (last 10)
        const recentLeads = db.prepare(`
            SELECT uuid, full_name, email, service_type, qualification_status, status, created_at
            FROM leads ORDER BY created_at DESC LIMIT 10
        `).all();

        // Daily page views (last 14 days)
        const dailyViews = db.prepare(`
            SELECT date(created_at) as date, COUNT(*) as views
            FROM analytics_events
            WHERE event_type = 'page_view' AND created_at >= datetime('now', '-14 days')
            GROUP BY date(created_at)
            ORDER BY date ASC
        `).all();

        // Top pages
        const topPages = db.prepare(`
            SELECT page, COUNT(*) as views
            FROM analytics_events
            WHERE event_type = 'page_view' AND created_at >= datetime('now', '-30 days')
            GROUP BY page ORDER BY views DESC LIMIT 10
        `).all();

        // Conversion rate
        const conversionRate = totalLeads > 0 ? ((convertedLeads / totalLeads) * 100).toFixed(1) : 0;

        res.json({
            data: {
                summary: {
                    totalLeads, newLeads, qualifiedLeads, convertedLeads,
                    totalContacts, unreadContacts, pageViews30d, uniqueVisitors30d,
                    conversionRate
                },
                leadsByService,
                recentLeads,
                dailyViews,
                topPages
            }
        });
    } catch (error) {
        logger.error('Dashboard error:', error);
        res.status(500).json({ error: 'Error loading dashboard data' });
    }
});

// ============================================
// SYSTEM HEALTH (New Feature #6)
// ============================================
router.get('/health', (req, res) => {
    try {
        const stats = {
            uptime: os.uptime(),
            totalMem: os.totalmem(),
            freeMem: os.freemem(),
            loadAvg: os.loadavg(),
            cpus: os.cpus().length,
            platform: os.platform(),
            nodeVersion: process.version,
            dbSize: fs.statSync(path.join(__dirname, '../../data/database.sqlite')).size
        };
        res.json({ data: stats });
    } catch (e) {
        res.status(500).json({ error: 'Error fetching health stats' });
    }
});

router.get('/tracking', (req, res) => {
    try {
        const config = {
            metaPixelId: process.env.META_PIXEL_ID,
            metaCapiEnabled: !!process.env.META_CAPI_ACCESS_TOKEN,
            tiktokPixelId: process.env.TIKTOK_PIXEL_ID,
            tiktokApiEnabled: !!process.env.TIKTOK_ACCESS_TOKEN,
            snapchatPixelId: process.env.SNAPCHAT_PIXEL_ID,
            snapchatCapiEnabled: !!process.env.SNAPCHAT_CAPI_TOKEN,
            ga4MeasurementId: process.env.GA4_MEASUREMENT_ID,
            ga4MpEnabled: !!process.env.GA4_API_SECRET,
            googleAdsId: process.env.GOOGLE_ADS_ID,
            gtmContainerId: process.env.GTM_CONTAINER_ID
        };
        res.json({ data: config });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching tracking config' });
    }
});

// ============================================
// LEADS MANAGEMENT
// ============================================
router.get('/leads', (req, res) => {
    try {
        const { status, service, qualification, search, page = 1, limit = 25, sort = 'created_at', order = 'DESC' } = req.query;
        const offset = (parseInt(page) - 1) * parseInt(limit);

        let where = 'WHERE 1=1';
        const params = [];

        if (status) { where += ' AND l.status = ?'; params.push(status); }
        if (service) { where += ' AND l.service_type = ?'; params.push(service); }
        if (qualification) { where += ' AND l.qualification_status = ?'; params.push(qualification); }
        if (search) {
            where += ' AND (l.full_name LIKE ? OR l.email LIKE ?)';
            params.push(`%${search}%`, `%${search}%`);
        }

        const allowedSorts = ['created_at', 'full_name', 'email', 'status', 'service_type'];
        const sortCol = allowedSorts.includes(sort) ? sort : 'created_at';
        const sortOrder = order === 'ASC' ? 'ASC' : 'DESC';

        const total = db.prepare(`SELECT COUNT(*) as count FROM leads l ${where}`).get(...params).count;

        const leads = db.prepare(`
            SELECT l.*, u.full_name as assigned_to_name
            FROM leads l
            LEFT JOIN users u ON l.assigned_to = u.id
            ${where}
            ORDER BY l.${sortCol} ${sortOrder}
            LIMIT ? OFFSET ?
        `).all(...params, parseInt(limit), parseInt(offset));

        res.json({
            data: leads,
            pagination: {
                total,
                page: parseInt(page),
                limit: parseInt(limit),
                totalPages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        logger.error('Leads fetch error:', error);
        res.status(500).json({ error: 'Error fetching leads' });
    }
});

router.get('/leads/:uuid', (req, res) => {
    try {
        const lead = db.prepare(`
            SELECT l.*, u.full_name as assigned_to_name
            FROM leads l LEFT JOIN users u ON l.assigned_to = u.id
            WHERE l.uuid = ?
        `).get(req.params.uuid);
        if (!lead) return res.status(404).json({ error: 'Lead not found' });
        res.json({ data: lead });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching lead' });
    }
});

router.patch('/leads/:uuid', (req, res) => {
    try {
        const { status, qualification_status, notes, assigned_to } = req.body;
        const existing = db.prepare('SELECT id FROM leads WHERE uuid = ?').get(req.params.uuid);
        if (!existing) return res.status(404).json({ error: 'Lead not found' });

        const updates = [];
        const params = [];

        if (status) { updates.push('status = ?'); params.push(status); }
        if (qualification_status) { updates.push('qualification_status = ?'); params.push(qualification_status); }
        if (notes !== undefined) { updates.push('notes = ?'); params.push(notes); }
        if (assigned_to !== undefined) { updates.push('assigned_to = ?'); params.push(assigned_to); }
        if (status === 'contacted') { updates.push("contacted_at = datetime('now')"); }
        if (status === 'converted') { updates.push("converted_at = datetime('now')"); }
        updates.push("updated_at = datetime('now')");

        params.push(req.params.uuid);
        db.prepare(`UPDATE leads SET ${updates.join(', ')} WHERE uuid = ?`).run(...params);

        logActivity(req.user.id, 'update', 'lead', req.params.uuid, { status, qualification_status }, req.ip);
        res.json({ success: true, message: 'Lead updated' });
    } catch (error) {
        logger.error('Lead update error:', error);
        res.status(500).json({ error: 'Error updating lead' });
    }
});

// ============================================
// ADMIN USERS (New Feature #5)
// ============================================
router.get('/users', authorize('super_admin'), (req, res) => {
    try {
        const users = db.prepare('SELECT id, email, full_name, role, is_active, last_login_at, created_at FROM users').all();
        res.json({ data: users });
    } catch (e) {
        res.status(500).json({ error: 'Error fetching users' });
    }
});

router.post('/users', authorize('super_admin'), (req, res) => {
    try {
        const { email, password, full_name, role } = req.body;
        const bcrypt = require('bcryptjs');
        const hash = bcrypt.hashSync(password, 12);
        db.prepare(`INSERT INTO users (email, password_hash, full_name, role) VALUES (?, ?, ?, ?)`).run(email, hash, full_name, role);
        logActivity(req.user.id, 'create', 'user', email, { role }, req.ip);
        res.status(201).json({ success: true });
    } catch (e) {
        res.status(500).json({ error: 'Error creating user' });
    }
});

// ============================================
// ACTIVITY LOGS (New Feature #7)
// ============================================
router.get('/activity-logs', (req, res) => {
    try {
        const logs = db.prepare(`
            SELECT a.*, u.full_name as user_name 
            FROM admin_activity_logs a
            JOIN users u ON a.user_id = u.id
            ORDER BY a.created_at DESC LIMIT 100
        `).all();
        res.json({ data: logs });
    } catch (e) {
        res.status(500).json({ error: 'Error fetching logs' });
    }
});

// ============================================
// TESTIMONIALS (New Feature #9)
// ============================================
router.get('/testimonials', (req, res) => {
    try {
        const data = db.prepare('SELECT * FROM testimonials ORDER BY display_order ASC').all();
        res.json({ data });
    } catch (e) {
        res.status(500).json({ error: 'Error fetching testimonials' });
    }
});

router.post('/testimonials', (req, res) => {
    try {
        const data = { uuid: uuidv4(), ...req.body };
        db.prepare(`
            INSERT INTO testimonials (uuid, client_name, client_role, client_company, content_ar, rating, image_url)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `).run(data.uuid, data.client_name, data.client_role, data.client_company, data.content_ar, data.rating || 5, data.image_url);
        res.json({ success: true });
    } catch (e) { res.status(500).json({ error: 'Error saving testimonial' }); }
});

// ============================================
// CONTENT BLOCKS (New Feature #1, #3)
// ============================================
router.get('/content-blocks', (req, res) => {
    try {
        const data = db.prepare('SELECT * FROM content_blocks').all();
        res.json({ data });
    } catch (e) { res.status(500).json({ error: 'Error fetching content blocks' }); }
});

router.put('/content-blocks/:key', (req, res) => {
    try {
        const { content_ar, content_en } = req.body;
        db.prepare(`
            INSERT INTO content_blocks (block_key, content_ar, content_en) 
            VALUES (?, ?, ?)
            ON CONFLICT(block_key) DO UPDATE SET 
            content_ar = EXCLUDED.content_ar, content_en = EXCLUDED.content_en, updated_at = CURRENT_TIMESTAMP
        `).run(req.params.key, content_ar, content_en);
        logActivity(req.user.id, 'update', 'content_block', req.params.key, null, req.ip);
        res.json({ success: true });
    } catch (e) { res.status(500).json({ error: 'Error updating content' }); }
});

// ============================================
// MEDIA MANAGEMENT (New Feature #2)
// ============================================
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, '../../public/uploads');
        if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath, { recursive: true });
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage });

router.post('/media/upload', upload.single('file'), (req, res) => {
    try {
        const file = req.file;
        db.prepare(`INSERT INTO media_library (filename, original_name, mime_type, size) VALUES (?, ?, ?, ?)`).run(
            file.filename, file.originalname, file.mimetype, file.size
        );
        res.json({ success: true, url: `/uploads/${file.filename}` });
    } catch (e) { res.status(500).json({ error: 'Upload failed' }); }
});

router.get('/media', (req, res) => {
    try {
        const data = db.prepare('SELECT * FROM media_library ORDER BY created_at DESC').all();
        res.json({ data });
    } catch (e) { res.status(500).json({ error: 'Error fetching media' }); }
});

// ============================================
// SUBSCRIBERS (New Feature #12)
// ============================================
router.get('/subscribers', (req, res) => {
    try {
        const data = db.prepare('SELECT * FROM subscribers ORDER BY created_at DESC').all();
        res.json({ data });
    } catch (e) { res.status(500).json({ error: 'Error fetching subscribers' }); }
});

// ============================================
// THE REST (Existing routes updated)
// ============================================
router.get('/contacts', (req, res) => {
    try {
        const messages = db.prepare(`SELECT * FROM contact_messages ORDER BY created_at DESC`).all();
        res.json({ data: messages });
    } catch (error) { res.status(500).json({ error: 'Error fetching contacts' }); }
});

router.get('/case-studies', (req, res) => {
    try {
        const cases = db.prepare('SELECT * FROM case_studies ORDER BY display_order ASC').all();
        res.json({ data: cases });
    } catch (error) { res.status(500).json({ error: 'Error fetching case studies' }); }
});

router.post('/case-studies', (req, res) => {
    try {
        const data = { uuid: uuidv4(), ...req.body };
        db.prepare(`
            INSERT INTO case_studies (uuid, title_ar, title_en, description_ar, description_en,
                region, industry, stat_1_value, stat_1_label, stat_2_value, stat_2_label,
                stat_3_value, stat_3_label, image_url, svg_illustration, display_order, is_featured, is_active)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).run(
            data.uuid, data.title_ar, data.title_en || null,
            data.description_ar, data.description_en || null,
            data.region || null, data.industry || null,
            data.stat_1_value || null, data.stat_1_label || null,
            data.stat_2_value || null, data.stat_2_label || null,
            data.stat_3_value || null, data.stat_3_label || null,
            data.image_url || null, data.svg_illustration || null,
            data.display_order || 0, data.is_featured || 0, data.is_active ?? 1
        );
        logActivity(req.user.id, 'create', 'case_study', data.uuid, { title: data.title_ar }, req.ip);
        res.status(201).json({ success: true });
    } catch (error) {
        logger.error('Error creating case study:', error);
        res.status(500).json({ error: 'Error creating case study' });
    }
});

router.put('/case-studies/:uuid', (req, res) => {
    try {
        const { title_ar, title_en, description_ar, description_en, region, industry,
            stat_1_value, stat_1_label, stat_2_value, stat_2_label, stat_3_value, stat_3_label,
            image_url, svg_illustration, display_order, is_featured, is_active } = req.body;
            
        db.prepare(`
            UPDATE case_studies SET
                title_ar = ?, title_en = ?, description_ar = ?, description_en = ?,
                region = ?, industry = ?, stat_1_value = ?, stat_1_label = ?,
                stat_2_value = ?, stat_2_label = ?, stat_3_value = ?, stat_3_label = ?,
                image_url = ?, svg_illustration = ?, display_order = ?,
                is_featured = ?, is_active = ?, updated_at = datetime('now')
            WHERE uuid = ?
        `).run(
            title_ar, title_en || null, description_ar, description_en || null,
            region || null, industry || null, stat_1_value || null, stat_1_label || null,
            stat_2_value || null, stat_2_label || null, stat_3_value || null, stat_3_label || null,
            image_url || null, svg_illustration || null, display_order || 0,
            is_featured || 0, is_active ?? 1, req.params.uuid
        );
        logActivity(req.user.id, 'update', 'case_study', req.params.uuid, { title: title_ar }, req.ip);
        res.json({ success: true });
    } catch (error) {
        logger.error('Error updating case study:', error);
        res.status(500).json({ error: 'Error updating case study' });
    }
});

router.delete('/case-studies/:uuid', authorize('super_admin'), (req, res) => {
    try {
        db.prepare('DELETE FROM case_studies WHERE uuid = ?').run(req.params.uuid);
        logActivity(req.user.id, 'delete', 'case_study', req.params.uuid, null, req.ip);
        res.json({ success: true });
    } catch (error) {
        logger.error('Error deleting case study:', error);
        res.status(500).json({ error: 'Error deleting case study' });
    }
});

router.get('/settings', (req, res) => {
    try {
        const settings = db.prepare('SELECT * FROM site_settings ORDER BY id ASC').all();
        res.json({ data: settings });
    } catch (error) { res.status(500).json({ error: 'Error fetching settings' }); }
});

router.put('/settings', (req, res) => {
    try {
        const { settings } = req.body;
        const update = db.prepare(`UPDATE site_settings SET setting_value = ?, updated_at = datetime('now') WHERE setting_key = ?`);
        db.transaction((items) => { for (const item of items) update.run(item.value, item.key); })(settings);
        logActivity(req.user.id, 'update', 'settings', 'global', { count: settings.length }, req.ip);
        res.json({ success: true });
    } catch (error) { res.status(500).json({ error: 'Error updating settings' }); }
});

router.get('/analytics', (req, res) => {
    try {
        const { period = '30' } = req.query;
        const days = parseInt(period) || 30;
        const viewsByDay = db.prepare(`SELECT date(created_at) as date, COUNT(*) as views, COUNT(DISTINCT session_id) as unique_visitors FROM analytics_events WHERE event_type = 'page_view' AND created_at >= datetime('now', '-${days} days') GROUP BY date(created_at) ORDER BY date ASC`).all();
        const topPages = db.prepare(`SELECT page, COUNT(*) as views FROM analytics_events WHERE event_type = 'page_view' AND created_at >= datetime('now', '-30 days') GROUP BY page ORDER BY views DESC LIMIT 15`).all();
        const eventsByType = db.prepare(`SELECT event_type, COUNT(*) as count FROM analytics_events WHERE created_at >= datetime('now', '-${days} days') GROUP BY event_type ORDER BY count DESC`).all();
        res.json({ data: { viewsByDay, eventsByType, topPages } });
    } catch (error) { res.status(500).json({ error: 'Error fetching analytics' }); }
});

router.get('/blog', (req, res) => {
    try {
        const posts = db.prepare('SELECT * FROM blog_posts ORDER BY created_at DESC').all();
        res.json({ data: posts });
    } catch (error) { res.status(500).json({ error: 'Error fetching blog' }); }
});

router.post('/blog', (req, res) => {
    try {
        const uuid = uuidv4();
        const { title_ar, slug, content_ar, category, image_url, is_published } = req.body;
        db.prepare(`INSERT INTO blog_posts (uuid, slug, title_ar, content_ar, category, image_url, is_published, author_id, published_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`).run(
            uuid, slug, title_ar, content_ar, category, image_url, is_published, req.user.id, is_published ? new Date().toISOString() : null
        );
        logActivity(req.user.id, 'create', 'blog', uuid, { title: title_ar }, req.ip);
        res.status(201).json({ success: true });
    } catch (error) { res.status(500).json({ error: 'Error creating blog' }); }
});

router.put('/blog/:uuid', (req, res) => {
    try {
        const { title_ar, title_en, slug, content_ar, content_en, category, image_url, is_published } = req.body;
        const post = db.prepare('SELECT is_published, published_at FROM blog_posts WHERE uuid = ?').get(req.params.uuid);
        if (!post) return res.status(404).json({ error: 'Blog post not found' });
        
        let publishedAt = post.published_at;
        if (is_published && !post.is_published) {
            publishedAt = new Date().toISOString();
        } else if (!is_published) {
            publishedAt = null;
        }

        db.prepare(`
            UPDATE blog_posts SET
                title_ar = ?, title_en = ?, slug = ?, content_ar = ?, content_en = ?,
                category = ?, image_url = ?, is_published = ?, published_at = ?, updated_at = datetime('now')
            WHERE uuid = ?
        `).run(
            title_ar, title_en || null, slug, content_ar, content_en || null,
            category, image_url, is_published, publishedAt, req.params.uuid
        );
        logActivity(req.user.id, 'update', 'blog', req.params.uuid, { title: title_ar }, req.ip);
        res.json({ success: true });
    } catch (error) {
        logger.error('Error updating blog post:', error);
        res.status(500).json({ error: 'Error updating blog post' });
    }
});

router.delete('/blog/:uuid', authorize('super_admin'), (req, res) => {
    try {
        db.prepare('DELETE FROM blog_posts WHERE uuid = ?').run(req.params.uuid);
        logActivity(req.user.id, 'delete', 'blog', req.params.uuid, null, req.ip);
        res.json({ success: true });
    } catch (error) { res.status(500).json({ error: 'Error deleting blog' }); }
});

router.get('/leads/export', (req, res) => {
    try {
        const leads = db.prepare('SELECT * FROM leads ORDER BY created_at DESC').all();
        if (leads.length === 0) return res.status(404).send('No data');
        const headers = Object.keys(leads[0]).join(',');
        const rows = leads.map(l => Object.values(l).map(v => `"${String(v || '').replace(/"/g, '""')}"`).join(',')).join('\n');
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename=leads.csv');
        res.send(headers + '\n' + rows);
        logActivity(req.user.id, 'export', 'leads', 'all', null, req.ip);
    } catch (error) { res.status(500).send('Export failed'); }
});

// ============================================
// FUTURE FEATURES SCAFFOLDING (14 New Features)
// ============================================
const futureFeatures = [
    { path: '/email-campaigns', table: 'email_campaigns' },
    { path: '/faqs', table: 'faqs' },
    { path: '/portfolio', table: 'portfolio_items' },
    { path: '/jobs', table: 'job_postings' },
    { path: '/job-applications', table: 'job_applications' },
    { path: '/partners', table: 'partners' },
    { path: '/pricing', table: 'pricing_plans' },
    { path: '/coupons', table: 'coupons' },
    { path: '/events', table: 'events' },
    { path: '/event-registrations', table: 'event_registrations' },
    { path: '/backups', table: 'system_backups' },
    { path: '/webhooks', table: 'webhooks' },
    { path: '/forms', table: 'custom_forms' },
    { path: '/expenses', table: 'expenses' },
    { path: '/appointments', table: 'appointments' },
    { path: '/support-tickets', table: 'support_tickets' },
    { path: '/ab-tests', table: 'ab_tests' },
    { path: '/affiliates', table: 'affiliates' },
    { path: '/reviews', table: 'reviews' },
    { path: '/subscriptions', table: 'customer_subscriptions' },
    { path: '/courses', table: 'courses' },
    { path: '/course-enrollments', table: 'course_enrollments' },
    { path: '/digital-products', table: 'digital_products' },
    { path: '/orders', table: 'orders' },
    { path: '/notifications', table: 'system_notifications' },
    { path: '/chat-logs', table: 'chat_logs' },
    { path: '/api-keys', table: 'api_keys' },
    { path: '/knowledge-base', table: 'knowledge_base' },
    { path: '/polls', table: 'polls' },
    { path: '/poll-votes', table: 'poll_votes' },
    { path: '/team', table: 'team_members' },
    { path: '/roadmap', table: 'roadmap_items' },
    { path: '/changelog', table: 'changelog' },
    { path: '/widgets', table: 'widgets' },
    { path: '/quotes', table: 'quotes' },
    { path: '/inventory', table: 'inventory' }
];

// ============================================
// INVOICES MANAGEMENT
// ============================================
router.get('/invoices', (req, res) => {
    try {
        const invoices = db.prepare('SELECT * FROM invoices ORDER BY created_at DESC').all();
        res.json({ data: invoices });
    } catch (e) {
        res.status(500).json({ error: 'Error fetching invoices' });
    }
});

router.post('/invoices', (req, res) => {
    try {
        const { client_name, client_email, amount, currency, status, due_date } = req.body;
        const result = db.prepare(`
            INSERT INTO invoices (client_name, client_email, amount, currency, status, due_date)
            VALUES (?, ?, ?, ?, ?, ?)
        `).run(client_name, client_email, amount, currency || 'USD', status || 'pending', due_date);

        logActivity(req.user.id, 'create', 'invoices', result.lastInsertRowid, null, req.ip);
        res.json({ success: true, id: result.lastInsertRowid });
    } catch (e) {
        res.status(500).json({ error: 'Error creating invoice' });
    }
});

router.put('/invoices/:id', (req, res) => {
    try {
        const { client_name, client_email, amount, currency, status, due_date } = req.body;
        db.prepare(`
            UPDATE invoices SET 
                client_name = ?, client_email = ?, amount = ?, 
                currency = ?, status = ?, due_date = ?
            WHERE id = ?
        `).run(client_name, client_email, amount, currency, status, due_date, req.params.id);

        logActivity(req.user.id, 'update', 'invoices', req.params.id, null, req.ip);
        res.json({ success: true });
    } catch (e) {
        res.status(500).json({ error: 'Error updating invoice' });
    }
});

router.delete('/invoices/:id', (req, res) => {
    try {
        db.prepare('DELETE FROM invoices WHERE id = ?').run(req.params.id);
        logActivity(req.user.id, 'delete', 'invoices', req.params.id, null, req.ip);
        res.json({ success: true });
    } catch (e) {
        res.status(500).json({ error: 'Error deleting invoice' });
    }
});


// ============================================
// SEO METADATA MANAGEMENT
// ============================================
router.get('/seo-metadata', (req, res) => {
    try {
        const metadata = db.prepare('SELECT * FROM seo_metadata ORDER BY id DESC').all();
        res.json({ data: metadata });
    } catch (e) {
        res.status(500).json({ error: 'Error fetching SEO metadata' });
    }
});

router.post('/seo-metadata', (req, res) => {
    try {
        const { page_route, title, description, keywords, og_image } = req.body;
        const result = db.prepare(`
            INSERT INTO seo_metadata (page_route, title, description, keywords, og_image)
            VALUES (?, ?, ?, ?, ?)
        `).run(page_route, title, description, keywords, og_image);

        logActivity(req.user.id, 'create', 'seo_metadata', result.lastInsertRowid, null, req.ip);
        res.json({ success: true, id: result.lastInsertRowid });
    } catch (e) {
        res.status(500).json({ error: 'Error creating SEO metadata' });
    }
});

router.put('/seo-metadata/:id', (req, res) => {
    try {
        const { page_route, title, description, keywords, og_image } = req.body;
        db.prepare(`
            UPDATE seo_metadata SET 
                page_route = ?, title = ?, description = ?, 
                keywords = ?, og_image = ?
            WHERE id = ?
        `).run(page_route, title, description, keywords, og_image, req.params.id);

        logActivity(req.user.id, 'update', 'seo_metadata', req.params.id, null, req.ip);
        res.json({ success: true });
    } catch (e) {
        res.status(500).json({ error: 'Error updating SEO metadata' });
    }
});

router.delete('/seo-metadata/:id', (req, res) => {
    try {
        db.prepare('DELETE FROM seo_metadata WHERE id = ?').run(req.params.id);
        logActivity(req.user.id, 'delete', 'seo_metadata', req.params.id, null, req.ip);
        res.json({ success: true });
    } catch (e) {
        res.status(500).json({ error: 'Error deleting SEO metadata' });
    }
});

// ============================================
// REDIRECTS MANAGEMENT
// ============================================
router.get('/redirects', (req, res) => {
    try {
        const redirects = db.prepare('SELECT * FROM redirects ORDER BY id DESC').all();
        res.json({ data: redirects });
    } catch (e) {
        res.status(500).json({ error: 'Error fetching redirects' });
    }
});

router.post('/redirects', (req, res) => {
    try {
        const { source_url, destination_url, status_code } = req.body;
        const result = db.prepare(`
            INSERT INTO redirects (source_url, destination_url, status_code)
            VALUES (?, ?, ?)
        `).run(source_url, destination_url, status_code || 301);
        res.json({ success: true, id: result.lastInsertRowid });
    } catch (e) {
        res.status(500).json({ error: 'Error creating redirect' });
    }
});

router.delete('/redirects/:id', (req, res) => {
    try {
        db.prepare('DELETE FROM redirects WHERE id = ?').run(req.params.id);
        res.json({ success: true });
    } catch (e) {
        res.status(500).json({ error: 'Error deleting redirect' });
    }
});

// ============================================
// ADVANCED SEO TOOLS (Sitemap & Robots)
// ============================================
router.get('/seo/stats', (req, res) => {
    try {
        const pageCount = db.prepare('SELECT COUNT(*) as count FROM seo_metadata').get();
        const blogCount = db.prepare('SELECT COUNT(*) as count FROM blog_posts').get();
        const redirectCount = db.prepare('SELECT COUNT(*) as count FROM redirects').get();
        res.json({ pageCount: pageCount.count, blogCount: blogCount.count, redirectCount: redirectCount.count });
    } catch (e) {
        res.status(500).json({ error: 'Error fetching SEO stats' });
    }
});

router.post('/seo/generate-sitemap', (req, res) => {
    try {
        const domain = process.env.DOMAIN || 'https://mozahiella.com';
        const pages = ['/', '/about', '/contact', '/blog', '/case-studies'];
        const blogs = db.prepare('SELECT slug FROM blog_posts WHERE is_published = 1').all();

        let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
        sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

        // Static pages
        pages.forEach(p => {
            sitemap += `  <url>\n    <loc>${domain}${p}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
        });

        // Blog posts
        blogs.forEach(b => {
            sitemap += `  <url>\n    <loc>${domain}/blog.html?slug=${b.slug}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>\n`;
        });

        sitemap += '</urlset>';

        const fs = require('fs');
        const sitemapPath = path.join(__dirname, '../../public/sitemap.xml');
        fs.writeFileSync(sitemapPath, sitemap);

        res.json({ success: true, message: 'Sitemap.xml generated successfully at /sitemap.xml' });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Error generating sitemap' });
    }
});

futureFeatures.forEach(feature => {
    router.get(feature.path, (req, res) => {
        try {
            const data = db.prepare(`SELECT * FROM ${feature.table} ORDER BY id DESC LIMIT 50`).all();
            res.json({ data });
        } catch (e) {
            res.status(500).json({ error: `Error fetching ${feature.table}` });
        }
    });
});

// ============================================
// WEBHOOKS MANAGEMENT
// ============================================
router.post('/webhooks', (req, res) => {
    try {
        const { url, event_type, is_active } = req.body;
        const result = db.prepare(`
            INSERT INTO webhooks (url, event_type, is_active)
            VALUES (?, ?, ?)
        `).run(url, event_type || 'new_lead', is_active ?? 1);

        logActivity(req.user.id, 'create', 'webhook', result.lastInsertRowid, null, req.ip);
        res.json({ success: true, id: result.lastInsertRowid });
    } catch (e) {
        logger.error('Webhook create error:', e);
        res.status(500).json({ error: 'Error creating webhook' });
    }
});

router.put('/webhooks/:id', (req, res) => {
    try {
        const { url, event_type, is_active } = req.body;
        db.prepare(`
            UPDATE webhooks SET 
                url = ?, event_type = ?, is_active = ?
            WHERE id = ?
        `).run(url, event_type, is_active, req.params.id);

        logActivity(req.user.id, 'update', 'webhook', req.params.id, null, req.ip);
        res.json({ success: true });
    } catch (e) {
        logger.error('Webhook update error:', e);
        res.status(500).json({ error: 'Error updating webhook' });
    }
});

router.delete('/webhooks/:id', (req, res) => {
    try {
        db.prepare('DELETE FROM webhooks WHERE id = ?').run(req.params.id);
        logActivity(req.user.id, 'delete', 'webhook', req.params.id, null, req.ip);
        res.json({ success: true });
    } catch (e) {
        logger.error('Webhook delete error:', e);
        res.status(500).json({ error: 'Error deleting webhook' });
    }
});

// ============================================
// TESTIMONIALS MANAGEMENT
// ============================================
router.post('/testimonials', (req, res) => {
    try {
        const { client_name, client_role, client_company, content_ar, content_en, rating, image_url, is_active, display_order } = req.body;
        const result = db.prepare(`
            INSERT INTO testimonials (uuid, client_name, client_role, client_company, content_ar, content_en, rating, image_url, is_active, display_order)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).run(uuidv4(), client_name, client_role, client_company, content_ar, content_en, rating || 5, image_url, is_active ?? 1, display_order || 0);

        logActivity(req.user.id, 'create', 'testimonial', result.lastInsertRowid, null, req.ip);
        res.json({ success: true, id: result.lastInsertRowid });
    } catch (e) {
        logger.error('Testimonial create error:', e);
        res.status(500).json({ error: 'Error creating testimonial' });
    }
});

router.put('/testimonials/:uuid', (req, res) => {
    try {
        const { client_name, client_role, client_company, content_ar, content_en, rating, image_url, is_active, display_order } = req.body;
        db.prepare(`
            UPDATE testimonials SET 
                client_name = ?, client_role = ?, client_company = ?, content_ar = ?, content_en = ?, 
                rating = ?, image_url = ?, is_active = ?, display_order = ?
            WHERE uuid = ?
        `).run(client_name, client_role, client_company, content_ar, content_en, rating, image_url, is_active, display_order, req.params.uuid);

        logActivity(req.user.id, 'update', 'testimonial', req.params.uuid, null, req.ip);
        res.json({ success: true });
    } catch (e) {
        logger.error('Testimonial update error:', e);
        res.status(500).json({ error: 'Error updating testimonial' });
    }
});

router.delete('/testimonials/:uuid', (req, res) => {
    try {
        db.prepare('DELETE FROM testimonials WHERE uuid = ?').run(req.params.uuid);
        logActivity(req.user.id, 'delete', 'testimonial', req.params.uuid, null, req.ip);
        res.json({ success: true });
    } catch (e) {
        logger.error('Testimonial delete error:', e);
        res.status(500).json({ error: 'Error deleting testimonial' });
    }
});

// ============================================
// SUBSCRIBERS MANAGEMENT
// ============================================
router.post('/subscribers', (req, res) => {
    try {
        const { email, source, is_active } = req.body;
        const result = db.prepare('INSERT INTO subscribers (email, source, is_active) VALUES (?, ?, ?)')
            .run(email, source || 'admin', is_active ?? 1);
        res.json({ success: true, id: result.lastInsertRowid });
    } catch (e) {
        if (e.message.includes('UNIQUE')) return res.status(400).json({ error: 'Email already subscribed' });
        res.status(500).json({ error: 'Error creating subscriber' });
    }
});

router.put('/subscribers/:id', (req, res) => {
    try {
        const { email, is_active } = req.body;
        db.prepare('UPDATE subscribers SET email = ?, is_active = ? WHERE id = ?')
            .run(email, is_active, req.params.id);
        res.json({ success: true });
    } catch (e) {
        res.status(500).json({ error: 'Error updating subscriber' });
    }
});

router.delete('/subscribers/:id', (req, res) => {
    try {
        db.prepare('DELETE FROM subscribers WHERE id = ?').run(req.params.id);
        res.json({ success: true });
    } catch (e) {
        res.status(500).json({ error: 'Error deleting subscriber' });
    }
});

// ============================================
// EMAIL CAMPAIGNS MANAGEMENT
// ============================================
router.post('/email-campaigns', (req, res) => {
    try {
        const { subject, body_html } = req.body;
        const result = db.prepare('INSERT INTO email_campaigns (subject, body_html) VALUES (?, ?)')
            .run(subject, body_html);
        logActivity(req.user.id, 'create', 'email_campaign', result.lastInsertRowid, null, req.ip);
        res.json({ success: true, id: result.lastInsertRowid });
    } catch (e) {
        res.status(500).json({ error: 'Error creating campaign' });
    }
});

router.put('/email-campaigns/:id', (req, res) => {
    try {
        const { subject, body_html } = req.body;
        db.prepare('UPDATE email_campaigns SET subject = ?, body_html = ? WHERE id = ?')
            .run(subject, body_html, req.params.id);
        res.json({ success: true });
    } catch (e) {
        res.status(500).json({ error: 'Error updating campaign' });
    }
});

router.delete('/email-campaigns/:id', (req, res) => {
    try {
        db.prepare('DELETE FROM email_campaigns WHERE id = ?').run(req.params.id);
        res.json({ success: true });
    } catch (e) {
        res.status(500).json({ error: 'Error deleting campaign' });
    }
});

router.post('/email-campaigns/:id/send', async (req, res) => {
    try {
        const campaign = db.prepare('SELECT * FROM email_campaigns WHERE id = ?').get(req.params.id);
        if (!campaign) return res.status(404).json({ error: 'Campaign not found' });
        if (campaign.status === 'sent') return res.status(400).json({ error: 'Campaign already sent' });

        const subscribers = db.prepare('SELECT email FROM subscribers WHERE is_active = 1').all();
        if (subscribers.length === 0) return res.status(400).json({ error: 'No active subscribers found' });

        // Initialize NodeMailer (Mock setup using Ethereal/Local for now, can be swapped to SendGrid)
        let transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.ethereal.email',
            port: process.env.SMTP_PORT || 587,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        // Send to all subscribers (BCC is best for privacy in bulk emails)
        const emails = subscribers.map(s => s.email);
        
        // Asynchronously send to avoid blocking the request completely if too large
        transporter.sendMail({
            from: process.env.SMTP_FROM || '"Hazem Portfolio" <noreply@example.com>',
            bcc: emails,
            subject: campaign.subject,
            html: campaign.body_html
        }).then(() => {
            db.prepare("UPDATE email_campaigns SET status = 'sent', sent_at = CURRENT_TIMESTAMP WHERE id = ?").run(req.params.id);
            logActivity(req.user.id, 'send', 'email_campaign', req.params.id, null, req.ip);
        }).catch(err => {
            logger.error('Failed to send mass email:', err);
        });

        // Return immediately so UI doesn't hang
        res.json({ success: true, message: 'Campaign dispatch started to ' + emails.length + ' subscribers' });
    } catch (e) {
        logger.error('Campaign send error:', e);
        res.status(500).json({ error: 'Error sending campaign' });
    }
});

module.exports = router;

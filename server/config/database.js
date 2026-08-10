/**
 * Database Configuration & Initialization
 * Uses better-sqlite3 for high-performance SQLite operations
 */
const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

// Ensure data directory exists
const isVercel = process.env.VERCEL === '1';
const dataDir = isVercel ? '/tmp/data' : path.resolve(__dirname, '../../data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

const DB_PATH = process.env.DB_PATH || path.join(dataDir, 'database.sqlite');
const db = new Database(DB_PATH);

// Enable WAL mode for better concurrency
db.pragma('journal_mode = WAL');

/**
 * Initialize all database tables
 */
function initializeDatabase() {
    try {
        // USERS (Admin accounts)
        db.prepare(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                email TEXT UNIQUE NOT NULL,
                password_hash TEXT NOT NULL,
                full_name TEXT NOT NULL DEFAULT 'Admin',
                role TEXT CHECK(role IN ('admin', 'super_admin', 'viewer')) DEFAULT 'admin',
                avatar_url TEXT,
                is_active INTEGER DEFAULT 1,
                last_login_at DATETIME,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `).run();

        // LEADS (Service form submissions)
        db.prepare(`
            CREATE TABLE IF NOT EXISTS leads (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                uuid TEXT UNIQUE NOT NULL,
                full_name TEXT NOT NULL,
                email TEXT NOT NULL,
                phone TEXT,
                budget TEXT,
                service_type TEXT NOT NULL,
                qualification_status TEXT DEFAULT 'pending',
                answers TEXT, -- Stored as JSON string
                source TEXT DEFAULT 'website',
                utm_source TEXT,
                utm_medium TEXT,
                utm_campaign TEXT,
                ip_address TEXT,
                user_agent TEXT,
                status TEXT DEFAULT 'new',
                notes TEXT,
                assigned_to INTEGER,
                contacted_at DATETIME,
                converted_at DATETIME,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (assigned_to) REFERENCES users(id)
            )
        `).run();

        // CONTACT MESSAGES (Contact page submissions)
        db.prepare(`
            CREATE TABLE IF NOT EXISTS contact_messages (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                uuid TEXT UNIQUE NOT NULL,
                full_name TEXT NOT NULL,
                email TEXT NOT NULL,
                phone TEXT,
                subject TEXT,
                message TEXT NOT NULL,
                source TEXT DEFAULT 'contact_page',
                ip_address TEXT,
                status TEXT DEFAULT 'unread',
                replied_at DATETIME,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `).run();

        // CASE STUDIES (Dynamic content)
        db.prepare(`
            CREATE TABLE IF NOT EXISTS case_studies (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                uuid TEXT UNIQUE NOT NULL,
                title_ar TEXT NOT NULL,
                title_en TEXT,
                description_ar TEXT NOT NULL,
                description_en TEXT,
                region TEXT,
                industry TEXT,
                stat_1_value TEXT,
                stat_1_label TEXT,
                stat_2_value TEXT,
                stat_2_label TEXT,
                stat_3_value TEXT,
                stat_3_label TEXT,
                image_url TEXT,
                svg_illustration TEXT,
                cta_url TEXT DEFAULT 'https://calendly.com/hazemaligalal999/45min',
                display_order INTEGER DEFAULT 0,
                is_featured INTEGER DEFAULT 0,
                is_active INTEGER DEFAULT 1,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `).run();

        // SERVICES (Dynamic service definitions)
        db.prepare(`
            CREATE TABLE IF NOT EXISTS services (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                uuid TEXT UNIQUE NOT NULL,
                slug TEXT UNIQUE NOT NULL,
                title_ar TEXT NOT NULL,
                title_en TEXT NOT NULL,
                description_ar TEXT NOT NULL,
                description_en TEXT,
                icon_svg TEXT,
                form_questions TEXT, -- JSON string
                display_order INTEGER DEFAULT 0,
                is_active INTEGER DEFAULT 1,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `).run();

        // SITE SETTINGS (Key-value config)
        db.prepare(`
            CREATE TABLE IF NOT EXISTS site_settings (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                setting_key TEXT UNIQUE NOT NULL,
                setting_value TEXT,
                setting_type TEXT DEFAULT 'text',
                description TEXT,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `).run();

        // BLOG POSTS
        db.prepare(`
            CREATE TABLE IF NOT EXISTS blog_posts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                uuid TEXT UNIQUE NOT NULL,
                slug TEXT UNIQUE NOT NULL,
                title_ar TEXT NOT NULL,
                title_en TEXT,
                content_ar TEXT NOT NULL,
                content_en TEXT,
                excerpt_ar TEXT,
                excerpt_en TEXT,
                image_url TEXT,
                category TEXT DEFAULT 'Performance Marketing',
                author_id INTEGER,
                is_published INTEGER DEFAULT 0,
                view_count INTEGER DEFAULT 0,
                published_at DATETIME,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (author_id) REFERENCES users(id)
            )
        `).run();

        // ANALYTICS EVENTS (Page views & interactions)
        db.prepare(`
            CREATE TABLE IF NOT EXISTS analytics_events (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                event_type TEXT NOT NULL,
                page TEXT,
                referrer TEXT,
                ip_address TEXT,
                user_agent TEXT,
                session_id TEXT,
                metadata TEXT, -- JSON string
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `).run();

        // EXPERTISE AREAS
        db.prepare(`
            CREATE TABLE IF NOT EXISTS expertise_areas (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title_en TEXT NOT NULL,
                title_ar TEXT,
                icon_emoji TEXT NOT NULL,
                display_order INTEGER DEFAULT 0,
                is_active INTEGER DEFAULT 1,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `).run();

        // WEBHOOKS
        db.prepare(`
            CREATE TABLE IF NOT EXISTS webhooks (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                url TEXT NOT NULL,
                event_type TEXT DEFAULT 'new_lead',
                is_active INTEGER DEFAULT 1,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `).run();

        // 1. ADMIN ACTIVITY LOGS (New Feature: Audit Trail)
        db.prepare(`
            CREATE TABLE IF NOT EXISTS admin_activity_logs (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER,
                action TEXT NOT NULL,
                entity_type TEXT,
                entity_id TEXT,
                details TEXT, -- JSON string
                ip_address TEXT,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id)
            )
        `).run();

        // 2. TESTIMONIALS (New Feature: Testimonials Manager)
        db.prepare(`
            CREATE TABLE IF NOT EXISTS testimonials (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                uuid TEXT UNIQUE NOT NULL,
                client_name TEXT NOT NULL,
                client_role TEXT,
                client_company TEXT,
                content_ar TEXT NOT NULL,
                content_en TEXT,
                rating INTEGER DEFAULT 5,
                image_url TEXT,
                is_active INTEGER DEFAULT 1,
                display_order INTEGER DEFAULT 0,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `).run();

        // 3. SUBSCRIBERS (New Feature: Newsletter Manager)
        db.prepare(`
            CREATE TABLE IF NOT EXISTS subscribers (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                email TEXT UNIQUE NOT NULL,
                source TEXT DEFAULT 'footer',
                is_active INTEGER DEFAULT 1,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `).run();

        // 4. MEDIA LIBRARY (New Feature: Media Library)
        db.prepare(`
            CREATE TABLE IF NOT EXISTS media_library (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                filename TEXT NOT NULL,
                original_name TEXT,
                mime_type TEXT,
                size INTEGER,
                alt_text TEXT,
                category TEXT DEFAULT 'general',
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `).run();

        // 5. CONTENT BLOCKS (New Feature: Direct Site Editor)
        db.prepare(`
            CREATE TABLE IF NOT EXISTS content_blocks (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                block_key TEXT UNIQUE NOT NULL,
                content_ar TEXT,
                content_en TEXT,
                block_type TEXT DEFAULT 'text',
                description TEXT,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `).run();

        // 6. EMAIL CAMPAIGNS
        db.prepare(`
            CREATE TABLE IF NOT EXISTS email_campaigns (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                subject TEXT NOT NULL,
                body_html TEXT NOT NULL,
                status TEXT DEFAULT 'draft',
                sent_at DATETIME,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `).run();

        // 7. SEO METADATA
        db.prepare(`
            CREATE TABLE IF NOT EXISTS seo_metadata (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                page_route TEXT UNIQUE NOT NULL,
                title TEXT,
                description TEXT,
                keywords TEXT,
                og_image TEXT,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `).run();

        // 8. FAQS
        db.prepare(`
            CREATE TABLE IF NOT EXISTS faqs (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                question_ar TEXT NOT NULL,
                answer_ar TEXT NOT NULL,
                question_en TEXT,
                answer_en TEXT,
                category TEXT DEFAULT 'General',
                display_order INTEGER DEFAULT 0,
                is_active INTEGER DEFAULT 1
            )
        `).run();

        // 9. PORTFOLIO ITEMS
        db.prepare(`
            CREATE TABLE IF NOT EXISTS portfolio_items (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                description TEXT,
                image_url TEXT,
                project_url TEXT,
                display_order INTEGER DEFAULT 0,
                is_active INTEGER DEFAULT 1
            )
        `).run();

        // 10. JOB POSTINGS
        db.prepare(`
            CREATE TABLE IF NOT EXISTS job_postings (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                department TEXT,
                location TEXT,
                type TEXT,
                description TEXT NOT NULL,
                requirements TEXT,
                is_active INTEGER DEFAULT 1,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `).run();

        // 11. JOB APPLICATIONS
        db.prepare(`
            CREATE TABLE IF NOT EXISTS job_applications (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                job_id INTEGER,
                full_name TEXT NOT NULL,
                email TEXT NOT NULL,
                phone TEXT,
                resume_url TEXT,
                cover_letter TEXT,
                status TEXT DEFAULT 'new',
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (job_id) REFERENCES job_postings(id)
            )
        `).run();

        // 12. PARTNERS
        db.prepare(`
            CREATE TABLE IF NOT EXISTS partners (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                logo_url TEXT NOT NULL,
                website_url TEXT,
                display_order INTEGER DEFAULT 0,
                is_active INTEGER DEFAULT 1
            )
        `).run();

        // 13. PRICING PLANS
        db.prepare(`
            CREATE TABLE IF NOT EXISTS pricing_plans (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                price REAL NOT NULL,
                currency TEXT DEFAULT 'USD',
                billing_cycle TEXT DEFAULT 'monthly',
                features TEXT, -- JSON array
                is_active INTEGER DEFAULT 1,
                display_order INTEGER DEFAULT 0
            )
        `).run();

        // 14. COUPONS
        db.prepare(`
            CREATE TABLE IF NOT EXISTS coupons (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                code TEXT UNIQUE NOT NULL,
                discount_type TEXT DEFAULT 'percentage',
                discount_value REAL NOT NULL,
                max_uses INTEGER,
                used_count INTEGER DEFAULT 0,
                valid_until DATETIME,
                is_active INTEGER DEFAULT 1
            )
        `).run();

        // 15. EVENTS
        db.prepare(`
            CREATE TABLE IF NOT EXISTS events (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                description TEXT,
                event_date DATETIME NOT NULL,
                location TEXT,
                is_online INTEGER DEFAULT 0,
                max_attendees INTEGER,
                is_active INTEGER DEFAULT 1
            )
        `).run();

        // 16. EVENT REGISTRATIONS
        db.prepare(`
            CREATE TABLE IF NOT EXISTS event_registrations (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                event_id INTEGER,
                full_name TEXT NOT NULL,
                email TEXT NOT NULL,
                status TEXT DEFAULT 'registered',
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (event_id) REFERENCES events(id)
            )
        `).run();

        // 17. SYSTEM BACKUPS
        db.prepare(`
            CREATE TABLE IF NOT EXISTS system_backups (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                filename TEXT NOT NULL,
                size INTEGER,
                status TEXT DEFAULT 'completed',
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `).run();

        // 18. WEBHOOKS
        db.prepare(`
            CREATE TABLE IF NOT EXISTS webhooks (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                target_url TEXT NOT NULL,
                event_type TEXT NOT NULL,
                secret_key TEXT,
                is_active INTEGER DEFAULT 1,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `).run();

        // 19. CUSTOM FORMS
        db.prepare(`
            CREATE TABLE IF NOT EXISTS custom_forms (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                schema_json TEXT NOT NULL,
                submissions_count INTEGER DEFAULT 0,
                is_active INTEGER DEFAULT 1,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `).run();

        // 20. INVOICES
        db.prepare(`
            CREATE TABLE IF NOT EXISTS invoices (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                client_name TEXT NOT NULL,
                client_email TEXT,
                amount REAL NOT NULL,
                currency TEXT DEFAULT 'USD',
                status TEXT DEFAULT 'pending',
                due_date DATETIME,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `).run();

        // 21. EXPENSES
        db.prepare(`
            CREATE TABLE IF NOT EXISTS expenses (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                category TEXT NOT NULL,
                amount REAL NOT NULL,
                currency TEXT DEFAULT 'USD',
                date_incurred DATETIME NOT NULL,
                description TEXT,
                receipt_url TEXT
            )
        `).run();

        // 22. APPOINTMENTS
        db.prepare(`
            CREATE TABLE IF NOT EXISTS appointments (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                client_name TEXT NOT NULL,
                client_email TEXT NOT NULL,
                start_time DATETIME NOT NULL,
                end_time DATETIME NOT NULL,
                status TEXT DEFAULT 'scheduled',
                notes TEXT
            )
        `).run();

        // 23. TICKETS (Support)
        db.prepare(`
            CREATE TABLE IF NOT EXISTS support_tickets (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                subject TEXT NOT NULL,
                description TEXT NOT NULL,
                user_email TEXT NOT NULL,
                status TEXT DEFAULT 'open',
                priority TEXT DEFAULT 'normal',
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `).run();

        // 24. A/B TESTS
        db.prepare(`
            CREATE TABLE IF NOT EXISTS ab_tests (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                test_name TEXT NOT NULL,
                variants TEXT, -- JSON
                status TEXT DEFAULT 'draft',
                start_date DATETIME,
                end_date DATETIME
            )
        `).run();

        // 25. AFFILIATES
        db.prepare(`
            CREATE TABLE IF NOT EXISTS affiliates (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT UNIQUE NOT NULL,
                referral_code TEXT UNIQUE NOT NULL,
                commission_rate REAL NOT NULL,
                is_active INTEGER DEFAULT 1,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `).run();

        // 26. REVIEWS (Product/Service specific)
        db.prepare(`
            CREATE TABLE IF NOT EXISTS reviews (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                product_id TEXT,
                reviewer_name TEXT NOT NULL,
                rating INTEGER NOT NULL,
                comment TEXT,
                is_approved INTEGER DEFAULT 0,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `).run();

        // 27. SUBSCRIPTIONS (Customer)
        db.prepare(`
            CREATE TABLE IF NOT EXISTS customer_subscriptions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                customer_email TEXT NOT NULL,
                plan_id INTEGER,
                status TEXT DEFAULT 'active',
                next_billing_date DATETIME,
                FOREIGN KEY (plan_id) REFERENCES pricing_plans(id)
            )
        `).run();

        // 28. COURSES
        db.prepare(`
            CREATE TABLE IF NOT EXISTS courses (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                description TEXT,
                price REAL DEFAULT 0,
                is_active INTEGER DEFAULT 1,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `).run();

        // 29. COURSE ENROLLMENTS
        db.prepare(`
            CREATE TABLE IF NOT EXISTS course_enrollments (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                course_id INTEGER,
                user_email TEXT NOT NULL,
                progress INTEGER DEFAULT 0,
                status TEXT DEFAULT 'enrolled',
                FOREIGN KEY (course_id) REFERENCES courses(id)
            )
        `).run();

        // 30. DIGITAL PRODUCTS
        db.prepare(`
            CREATE TABLE IF NOT EXISTS digital_products (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                description TEXT,
                price REAL NOT NULL,
                download_url TEXT NOT NULL,
                is_active INTEGER DEFAULT 1
            )
        `).run();

        // 31. ORDERS (Ecommerce)
        db.prepare(`
            CREATE TABLE IF NOT EXISTS orders (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                customer_email TEXT NOT NULL,
                total_amount REAL NOT NULL,
                status TEXT DEFAULT 'pending',
                shipping_address TEXT,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `).run();

        // 32. NOTIFICATIONS (System)
        db.prepare(`
            CREATE TABLE IF NOT EXISTS system_notifications (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                message TEXT,
                type TEXT DEFAULT 'info',
                is_read INTEGER DEFAULT 0,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `).run();

        // 33. CHAT LOGS
        db.prepare(`
            CREATE TABLE IF NOT EXISTS chat_logs (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                session_id TEXT NOT NULL,
                sender TEXT NOT NULL,
                message TEXT NOT NULL,
                timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `).run();

        // 34. API KEYS (External access)
        db.prepare(`
            CREATE TABLE IF NOT EXISTS api_keys (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                key_name TEXT NOT NULL,
                api_key TEXT UNIQUE NOT NULL,
                permissions TEXT, -- JSON
                is_active INTEGER DEFAULT 1
            )
        `).run();

        // 35. KNOWLEDGE BASE
        db.prepare(`
            CREATE TABLE IF NOT EXISTS knowledge_base (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                content TEXT NOT NULL,
                category TEXT,
                view_count INTEGER DEFAULT 0,
                is_published INTEGER DEFAULT 1
            )
        `).run();

        // 36. POLLS
        db.prepare(`
            CREATE TABLE IF NOT EXISTS polls (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                question TEXT NOT NULL,
                options_json TEXT NOT NULL,
                is_active INTEGER DEFAULT 1,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `).run();

        // 37. POLL VOTES
        db.prepare(`
            CREATE TABLE IF NOT EXISTS poll_votes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                poll_id INTEGER,
                selected_option TEXT NOT NULL,
                ip_address TEXT,
                FOREIGN KEY (poll_id) REFERENCES polls(id)
            )
        `).run();

        // 38. TEAM MEMBERS
        db.prepare(`
            CREATE TABLE IF NOT EXISTS team_members (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                role TEXT NOT NULL,
                bio TEXT,
                image_url TEXT,
                social_links TEXT, -- JSON
                display_order INTEGER DEFAULT 0
            )
        `).run();

        // 39. ROADMAP
        db.prepare(`
            CREATE TABLE IF NOT EXISTS roadmap_items (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                description TEXT,
                status TEXT DEFAULT 'planned',
                quarter TEXT,
                votes INTEGER DEFAULT 0
            )
        `).run();

        // 40. CHANGELOG
        db.prepare(`
            CREATE TABLE IF NOT EXISTS changelog (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                version TEXT NOT NULL,
                release_date DATETIME NOT NULL,
                changes TEXT NOT NULL, -- JSON or Markdown
                is_published INTEGER DEFAULT 1
            )
        `).run();

        // 41. WIDGETS
        db.prepare(`
            CREATE TABLE IF NOT EXISTS widgets (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                config_json TEXT NOT NULL,
                location TEXT,
                is_active INTEGER DEFAULT 1
            )
        `).run();

        // 42. REDIRECTS
        db.prepare(`
            CREATE TABLE IF NOT EXISTS redirects (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                source_url TEXT UNIQUE NOT NULL,
                destination_url TEXT NOT NULL,
                status_code INTEGER DEFAULT 301,
                is_active INTEGER DEFAULT 1
            )
        `).run();

        // 43. QUOTES
        db.prepare(`
            CREATE TABLE IF NOT EXISTS quotes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                client_name TEXT NOT NULL,
                client_email TEXT,
                project_details TEXT NOT NULL,
                estimated_cost REAL,
                status TEXT DEFAULT 'draft',
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `).run();

        // 44. INVENTORY
        db.prepare(`
            CREATE TABLE IF NOT EXISTS inventory (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                product_name TEXT NOT NULL,
                sku TEXT UNIQUE NOT NULL,
                quantity INTEGER DEFAULT 0,
                reorder_level INTEGER DEFAULT 5,
                unit_price REAL
            )
        `).run();

        console.log('✅ SQLite Database initialized successfully');
    } catch (error) {
        console.error('❌ Database initialization error:', error);
        throw error;
    }
}

// Add compatibility helper for the sync->async transition if needed
// But we will revert the files to use preprare().get() etc.
// For now, let's keep it simple.

module.exports = { db, initializeDatabase };

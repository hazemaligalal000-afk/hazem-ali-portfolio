/**
 * Database Seeder
 * Seeds initial data for the application
 */
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const { db } = require('../config/database');

function seedDatabase() {
    // Seed admin user if none exists
    const users = db.prepare('SELECT id FROM users LIMIT 1').all();
    if (users.length === 0) {
        const passwordHash = bcrypt.hashSync(process.env.ADMIN_PASSWORD || 'HazemAdmin@2026!', 12);
        db.prepare(`
            INSERT INTO users (email, password_hash, full_name, role)
            VALUES (?, ?, ?, ?)
        `).run(
            process.env.ADMIN_EMAIL || 'hazemaligalal999@gmail.com',
            passwordHash,
            'Hazem Ali Galal',
            'super_admin'
        );
        console.log('✅ Admin user created');
    }

    // Seed site settings if none exist
    const settingsRows = db.prepare('SELECT id FROM site_settings LIMIT 1').all();
    if (settingsRows.length === 0) {
        const settingsList = [
            ['site_name', 'Hazem Ali Galal', 'text', 'Website name'],
            ['site_title_ar', 'خبير التسويق الرقمي والأداء الإعلاني', 'text', 'Arabic site title'],
            ['site_description_ar', 'أبني محركات إيرادات دقيقة للعلامات التجارية التي تستثمر $5,000+ شهريًا في الحملات الإعلانية.', 'text', 'Arabic meta description'],
            ['calendly_url', 'https://calendly.com/hazemaligalal999/45min', 'url', 'Calendly booking URL'],
            ['whatsapp_number', '201017173228', 'text', 'WhatsApp number'],
            ['email', 'hazemaligalal999@gmail.com', 'email', 'Contact email'],
            ['years_experience', '8', 'number', 'Years of experience'],
            ['happy_clients', '50', 'number', 'Number of happy clients'],
            ['industries_count', '14', 'number', 'Number of industries served'],
            ['ad_spend_managed', '$5M+', 'text', 'Total ad spend managed'],
            ['available_slots', '3', 'number', 'Available brand slots this quarter'],
            ['profit_increase_avg', '300%', 'text', 'Average profit increase'],
        ];

        const insert = db.prepare(`
            INSERT INTO site_settings (setting_key, setting_value, setting_type, description)
            VALUES (?, ?, ?, ?)
        `);
        const insertMany = db.transaction((settingsList) => {
            for (const item of settingsList) insert.run(...item);
        });
        insertMany(settingsList);
        console.log('✅ Site settings seeded');
    }

    // Seed case studies if none exist
    const casesRows = db.prepare('SELECT id FROM case_studies LIMIT 1').all();
    if (casesRows.length === 0) {
        const cases = [
            {
                uuid: uuidv4(),
                title_ar: 'قصة نجاح إحدى شركات الـ Real Estate مع Hazem',
                title_en: 'Real Estate Success Story',
                description_ar: 'قصة نجاح إحدى شركات الـ Real-Estate مع Hazem. ربما يرى البعض أن الحصول على أضعاف عدد العملاء المحتملين للشراء في مجال العقارات أمر صعب، لكنه أمر تحقق فعلاً من خلال استراتيجية مدروسة.',
                region: 'الإمارات & السعودية',
                industry: 'Real Estate',
                stat_1_value: '500+', stat_1_label: 'عميل محتمل',
                stat_2_value: '60%', stat_2_label: 'توفير في الميزانية',
                stat_3_value: '3x', stat_3_label: 'معدل التحويل',
                display_order: 1, is_featured: 1, is_active: 1
            },
            {
                uuid: uuidv4(),
                title_ar: 'قصة نجاح Fashion Brand مع Hazem',
                title_en: 'Fashion Brand Success Story',
                description_ar: 'قصة نجاح Fashion Brand مع Hazem. الهدف كان تحقيق عائد ربحي 800% لكن حققت 1200% في أقل من 3 أشهر من خلال اختبار الإعلانات الإبداعية المتعددة والاستهداف الدقيق.',
                region: 'مصر & الخليج',
                industry: 'Fashion',
                stat_1_value: '1200%', stat_1_label: 'عائد إعلاني',
                stat_2_value: '4.5x', stat_2_label: 'ROAS',
                stat_3_value: '3', stat_3_label: 'أشهر فقط',
                display_order: 2, is_featured: 1, is_active: 1
            },
            {
                uuid: uuidv4(),
                title_ar: 'تخطى نمو الطلبات 1508.03% في متجر إلكتروني سعودي',
                title_en: 'Saudi E-Commerce Growth Story',
                description_ar: 'قصة نجاح الجزء الأول من الكيس الاستادي. تخطى نمو الطلبات 1508.03% في فترة قياسية للمتاجر الإلكترونية لبيع الأجهزة المنزلية للطلبات الشهرية.',
                region: 'السعودية',
                industry: 'E-Commerce',
                stat_1_value: '1508%', stat_1_label: 'نمو الطلبات',
                stat_2_value: '6x', stat_2_label: 'ROAS',
                stat_3_value: '40%', stat_3_label: 'انخفاض CPA',
                display_order: 3, is_featured: 1, is_active: 1
            }
        ];

        const insert = db.prepare(`
            INSERT INTO case_studies (uuid, title_ar, title_en, description_ar, region, industry,
                stat_1_value, stat_1_label, stat_2_value, stat_2_label, stat_3_value, stat_3_label,
                display_order, is_featured, is_active)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);
        const insertMany = db.transaction((casesList) => {
            for (const item of casesList) {
                insert.run(
                    item.uuid, item.title_ar, item.title_en, item.description_ar, item.region, item.industry,
                    item.stat_1_value, item.stat_1_label, item.stat_2_value, item.stat_2_label, item.stat_3_value, item.stat_3_label,
                    item.display_order, item.is_featured, item.is_active
                );
            }
        });
        insertMany(cases);
        console.log('✅ Case studies seeded');
    }

    // Seed expertise areas (Ensuring 14 fields)
    db.prepare('DELETE FROM expertise_areas').run();
    const areas = [
        { title_en: 'E-Commerce', icon_emoji: '🛒', display_order: 1 },
        { title_en: 'Real Estate', icon_emoji: '🏠', display_order: 2 },
        { title_en: 'SaaS', icon_emoji: '💻', display_order: 3 },
        { title_en: 'Fashion', icon_emoji: '👗', display_order: 4 },
        { title_en: 'Health & Beauty', icon_emoji: '💄', display_order: 5 },
        { title_en: 'Food & Bev', icon_emoji: '🍽️', display_order: 6 },
        { title_en: 'Education', icon_emoji: '🎓', display_order: 7 },
        { title_en: 'Medical Clinics', icon_emoji: '🏥', display_order: 8 },
        { title_en: 'Automotive', icon_emoji: '🚗', display_order: 9 },
        { title_en: 'Furniture', icon_emoji: '🛋️', display_order: 10 },
        { title_en: 'Perfumes', icon_emoji: '🧴', display_order: 11 },
        { title_en: 'Medical', icon_emoji: '💊', display_order: 12 },
        { title_en: 'Mobile Apps', icon_emoji: '📱', display_order: 13 },
        { title_en: 'Luxury Brands', icon_emoji: '💎', display_order: 14 },
    ];

    const insertArea = db.prepare(`
        INSERT INTO expertise_areas (title_en, icon_emoji, display_order)
        VALUES (?, ?, ?)
    `);
    const insertManyAreas = db.transaction((areasList) => {
        for (const item of areasList) {
            insertArea.run(item.title_en, item.icon_emoji, item.display_order);
        }
    });
    insertManyAreas(areas);
    console.log('✅ Expertise areas (14) seeded');

    // Seed services if none exist
    const servicesRows = db.prepare('SELECT id FROM services LIMIT 1').all();
    if (servicesRows.length === 0) {
        const services = [
            { uuid: uuidv4(), slug: 'media-buying', title_ar: 'الإعلانات المدفوعة', title_en: 'Media Buying', description_ar: 'أدرس الفئة المستهدفة لأبتكر استراتيجيات الإعلانات المدفوعة وأحسّنها وفق ميزانيتك لتحقيق أعلى عائد ربحي ممكن.', display_order: 1 },
            { uuid: uuidv4(), slug: 'digital-auditing', title_ar: 'تدقيق رقمي', title_en: 'Digital Auditing', description_ar: 'بعين خبيرة أحدد أدق المشاكل الرقمية وأعمل على حلها، مرورًا باستراتيجيات الاستهداف وتتبع العملاء وتحليل البيانات.', display_order: 2 },
            { uuid: uuidv4(), slug: 'consultation', title_ar: 'تقديم المشورة', title_en: 'Consultation', description_ar: 'لا يقتصر دوري على تحقيق أعلى ربح إعلاني بأفضل استغلال لميزانيتك، بل أقدم أيضاً نصائح رقمية شاملة لزيادة نمو علامتك.', display_order: 3 },
            { uuid: uuidv4(), slug: 'landing-pages', title_ar: 'صفحات الهبوط والمواقع', title_en: 'Landing Pages', description_ar: 'بناء صفحات هبوط عالية التحويل ومواقع إلكترونية احترافية تترجم زيارات الإعلانات إلى مبيعات فعلية.', display_order: 4 },
            { uuid: uuidv4(), slug: 'ecommerce', title_ar: 'المتاجر الإلكترونية', title_en: 'E-commerce Platforms', description_ar: 'إنشاء وإدارة المتاجر المتكاملة على منصات Shopify, Salla, Zid وتأسيس أنظمة الـ Multi-Vendor لتعظيم مبيعات التجار.', display_order: 5 },
        ];

        const insert = db.prepare(`
            INSERT INTO services (uuid, slug, title_ar, title_en, description_ar, display_order)
            VALUES (?, ?, ?, ?, ?, ?)
        `);
        const insertMany = db.transaction((servicesList) => {
            for (const item of servicesList) {
                insert.run(item.uuid, item.slug, item.title_ar, item.title_en, item.description_ar, item.display_order);
            }
        });
        insertMany(services);
        console.log('✅ Services seeded');
    }

    // Comprehensive Strategy Articles - 14 Premium Articles for 14 Industries
    const expertPosts = [
        {
            title: 'المجال 1: هندسة النمو في المتاجر الإلكترونية (E-Commerce)',
            slug: 'mastering-ecommerce-performance',
            category: 'E-Commerce',
            image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
            excerpt: 'كيف تضاعف مبيعات متجرك الإلكتروني عبر ربط البيانات الصلبة بسلوك المشغل الحقيقي؟ استراتيجية الـ 5 سنوات لمتاجر الـ 7 figures.',
            content: `<h2>إدارة النمو تتخطى مجرد تشغيل الحملات</h2><p>في عالم التجارة الإلكترونية، النمو الحقيقي يبدأ من تحليل <strong>قيمة دورة حياة العميل (LTV)</strong> مقابل <strong>تكلفة الاستحواذ (CAC)</strong>. خلال خبرتي، اكتشفت أن المتاجر التي تفشل هي التي تركز فقط على الـ ROAS اللحظي.</p><h2>1. التتبع الخادم (Server-Side Tracking)</h2><p>لم يعد الـ Browser Pixel كافياً. نعتمد الأنظمة التي ترسل البيانات مباشرة من السيرفر (CAPI) لضمان دقة استهداف تصل إلى 100% وتجاوز حجب ملفات تعريف الارتباط.</p><h2>2. استراتيجية القنوات المتعددة</h2><p>لا نضع كل البيض في سلة واحدة. نوزع الميزانية بين Meta لزيادة الوعي و Google لصيد الباحثين الجاهزين للشراء.</p>`
        },
        {
            title: 'المجال 2: العقارات (Real Estate) - صناعة الجودة لا الكثرة',
            slug: 'real-estate-performance-ads',
            category: 'Real Estate',
            image: 'https://images.unsplash.com/photo-1582408921715-18e7806365c1?auto=format&fit=crop&q=80&w=800',
            excerpt: 'توليد ليدات عقارية (Leads) مستعدة للشراء تتطلب نظام فلترة إعلاني دقيق. إليك كيف نستهدف المستثمرين الحقيقيين.',
            content: `<h2>العميل العقاري هو مستثمر يبحث عن الثقة</h2><p>في العقارات، الـ Lead الرخيص هو غالباً مضيعة لوقت فريق المبيعات. استراتيجيتي تركز على رفع <strong>جودة العميل المحتمل (Lead Quality)</strong> من خلال نظام التأهيل المسبق.</p><h2>1. نماذج التأهيل المتقدمة</h2><p>نستخدم استبيانات داخل الإعلان تفرز العملاء بناءً على قدرتهم الشرائية وجديتهم قبل أن تصل بياناتهم إليك.</p><h2>2. محتوى بناء السلطة (Authority Content)</h2><p>المستثمر يشتري ممن يثق به. نركز على إعلانات الفيديو التي تشرح تفاصيل العائد الاستثماري (ROI) للمشروع بوضوح وشفافية.</p>`
        },
        {
            title: 'المجال 3: قطاع البرمجيات (SaaS) - الاستبقاء هو الملك',
            slug: 'saas-growth-optimization',
            category: 'SaaS',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
            excerpt: 'تحسين معدلات التحويل من التجربة المجانية إلى الاشتراك المدفوع وتقليل الـ Churn rate باستخدام بيانات السلوك.',
            content: `<h2>SaaS Marketing: لعبة الأرقام الطويلة</h2><p>الهدف في الـ SaaS ليس فقط الحصول على مستخدم، بل الحصول على مستخدم "نشط".</p><h2>1. تتبع الأحداث العميقة (Deep Event Tracking)</h2><p>نقوم بتتبع ما يفعله المستخدم داخل التطبيق ونربطه بالحملة الإعلانية التي أتى منها، لنعرف أي قناة تجلب العملاء الأكثر تفاعلاً.</p><h2>2. تجربة المستخدم والـ Landing Pages</h2><p>صفحة الهبوط في الـ SaaS يجب أن تجيب على سؤال واحد: "كيف سيسهل هذا التطبيق حياتي في 10 ثوان؟".</p>`
        },
        {
            title: 'المجال 4: عالم الأزياء (Fashion) - العاطفة مقابل البيانات',
            slug: 'fashion-performance-growth',
            category: 'Fashion',
            image: 'https://images.unsplash.com/photo-1445205170230-053b830c6050?auto=format&fit=crop&q=80&w=800',
            excerpt: 'كيف تستخدم البراندات العالمية الـ Visual Storytelling لرفع العائد الإعلاني ومعدل تكرار الشراء.',
            content: `<h2>الأزياء تباع بالصورة وتنمو بالبيانات</h2><p>في الأزياء، الإبداع (Creative) هو المحرك الأساسي. لكن الاستهداف الذكي هو ما يضمن الربحية.</p><h2>1. اختبار الـ Creatives المستمر</h2><p>نختبر مئات الصور والفيديوهات أسبوعياً لنصل إلى الـ Winning Creative الذي يحقق أقل تكلفة للنقرة وأعلى معدل تحويل.</p><h2>2. الـ Catalog Sales والقوائم الديناميكية</h2><p>استخدام الـ DABA و DPA لإعادة استهداف العملاء بالمنتجات التي شاهدوها بالضبط، مما يرفع الـ ROAS بشكل جنوني.</p>`
        },
        {
            title: 'المجال 5: الرعاية الصحية والجمال (Health & Beauty) - التحويل الصامت',
            slug: 'health-beauty-marketing-secrets',
            category: 'Health & Beauty',
            image: 'https://images.unsplash.com/photo-1522335758218-075031e13cbb?auto=format&fit=crop&q=80&w=800',
            excerpt: 'استراتيجيات نمو براندات العناية بالبشرة والتجميل في سوق تنافسي للغاية يعتمد على تجارب المستخدمين.',
            content: `<h2>الثقة هي العملة الأولى في التجميل</h2><p>المستهلك لا يشتري منتجاً تجميلياً، بل يشتري "نتيجة".</p><h2>1. قوة الـ UGC (محتوى المستخدمين)</h2><p>إعلانات فيديو تظهر نتائج حقيقية وتجارب مستخدمين فعليين تتفوق بـ 3 أضعاف على إعلانات المشاهير المصطنعة.</p><h2>2. بناء سلة تسوق عالية (AOV Optimization)</h2><p>نستخدم استراتيجيات الـ Bundling و Upselling لرفع قيمة الطلب الواحد، مما يغطي تكلفة الاستحواذ المرتفعة في هذا القطاع.</p>`
        },
        {
            title: 'المجال 6: المطاعم والمقاهي (Food & Bev) - السيطرة المحلية',
            slug: 'food-bev-local-growth',
            category: 'Food & Bev',
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
            excerpt: 'كيف تزيد من زوار مطعمك وطلبات التوصيل المباشرة باستخدام التوجيه الجغرافي الدقيق.',
            content: `<h2>المطعم الناجح هو مطعم موجود في "لحظة الجوع"</h2><p>الاستهداف الجغرافي هو سر النجاح في قطاع الأغذية.</p><h2>1. التوجيه الجغرافي (Hyper-local Targeting)</h2><p>نستهدف الأشخاص في محيط 2-5 كم من المطعم فقط خلال ساعات الذروة، مما يقلل الهدر في الميزانية.</p><h2>2. عروض الاستحواذ الأولى</h2><p>نقدم عرضاً لا يُقاوم للعميل الجديد لتحويله إلى عميل دائم، لأن الربح الحقيقي في المطاعم هو التكرار.</p>`
        },
        {
            title: 'المجال 7: قطاع التعليم (Education) - الاستثمار في المستقبل',
            slug: 'education-lead-generation',
            category: 'Education',
            image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
            excerpt: 'جذب الطلاب للدورات والجامعات يتطلب رحلة عميل تعليمية طويلة المدى لبناء المصداقية.',
            content: `<h2>التعليم يحتاج إلى إثبات قيمة (Authority)</h2><p>لا أحد يسجل في دورة أو جامعة بمجرد رؤية إعلان.</p><h2>1. استراتيجية الـ Lead Magnet</h2><p>نقدم قيمة مجانية (كتيب، ندوة، تجربة) مقابل بيانات العميل، ثم نبدأ رحلة إعادة الاستهداف التعليمي.</p><h2>2. التسويق عبر البريد والأتمتة</h2><p>بناء نظام متابعة آلي يحافظ على تفاعل الطالب حتى يتخذ قرار التسجيل النهائي.</p>`
        },
        {
            title: 'المجال 8: العيادات الطبية (Medical Clinics) - إدارة الحجوزات',
            slug: 'medical-clinics-booking-systems',
            category: 'Medical Clinics',
            image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
            excerpt: 'زيادة حجوزات المواعيد في العيادات التخصصية عبر بناء مسار تحويل يراعي الخصوصية والأمان.',
            content: `<h2>العيادة هي ملاذ آمن للمريض</h2><p>في المجال الطبي، الأخلاقيات والخصوصية تأتي أولاً.</p><h2>1. إعلانات الرسائل المباشرة</h2><p>نفتح خط اتصال مباشر وآمن مع المريض للإجابة على مخاوفه قبل حجز الموعد.</p><h2>2. تتبع التحويلات الفعلية (Offline Conversions)</h2><p>نربط بيانات من حضر فعلاً للعيادة بالحملة الإعلانية لنعرف القيمة الحقيقية لكل ريال يُنفق.</p>`
        },
        {
            title: 'المجال 9: السيارات (Automotive) - قيادة المبيعات',
            slug: 'automotive-performance-marketing',
            category: 'Automotive',
            image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800',
            excerpt: 'كيف تولد عملاء محتملين جادين لطلب تجربة قيادة (Test Drive) وإتمام صفقات شراء السيارات.',
            content: `<h2>بيع السيارة يبدأ بـ "تجربة"</h2><p>السيارات هي شراء عاطفي وعقلاني في نفس الوقت.</p><h2>1. استهداف المهتمين والباحثين</h2><p>نستخدم بيانات البحث على جوجل مع استهداف الاهتمامات على فيسبوك للوصول لمن يخطط لشراء سيارة حالياً.</p><h2>2. نماذج حجز تجربة القيادة</h2><p>تبسيط عملية حجز الموعد داخل الإعلان لزيادة معدل الاستجابة.</p>`
        },
        {
            title: 'المجال 10: الأثاث والمفروشات (Furniture) - تصميم بيت الأحلام',
            slug: 'furniture-marketing-mastery',
            category: 'Furniture',
            image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800',
            excerpt: 'استراتيجيات تسويق الأثاث تعتمد على الإلهام البصري وتقديم حلول للمساحات المنزلية.',
            content: `<h2>الأثاث هو استثمار في الراحة</h2><p>العميل يحتاج لرؤية المنتج في بيئته المنزلية.</p><h2>1. الصور الغامرة والفيديو</h2><p>إظهار التفاصيل والجودة من خلال فيديوهات عالية الدقة وصور في غرف مؤثثة فعلياً.</p><h2>2. استهداف الانتقال للسكن الجديد</h2><p>نصل للأشخاص الذين انتقلوا حديثاً أو يبحثون عن عقارات، فهم الفئة الأكثر احتياجاً للأثاث.</p>`
        },
        {
            title: 'المجال 11: العطور (Perfumes) - لغة الروائح والبيانات',
            slug: 'perfume-brand-scaling',
            category: 'Perfumes',
            image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800',
            excerpt: 'كيف تبني براند عطور ناجح في الخليج يعتمد على الولاء وتكرار الشراء بمعدلات عالية.',
            content: `<h2>العطر هو توقيع شخصي</h2><p>في العطور، التغليف (Packaging) والقصة هما كل شيء.</p><h2>1. سيكولوجية الروائح في الإعلانات</h2><p>نستخدم كلمات وصور تثير الحواس وتصف الشعور الذي يمنحه العطر بدلاً من المكونات فقط.</p><h2>2. اشتراكات العطور وبرامج الولاء</h2><p>تشجيع العميل على إعادة الطلب من خلال عينات مجانية مع كل طلب أو خصومات للعضوية.</p>`
        },
        {
            title: 'المجال 12: المعدات الطبية والـ B2B (Medical) - لغة العلم',
            slug: 'b2b-medical-marketing',
            category: 'Medical',
            image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800',
            excerpt: 'التسويق للمستشفيات والأطباء يتطلب دقة علمية وتواصل مباشر مع متخذي القرار.',
            content: `<h2>B2B Medical: الدقة هي الأهم</h2><p>متخذ القرار في المستشفى يبحث عن الجودة الفنية وخدمة ما بعد البيع.</p><h2>1. لينكد إن والوصول المهني</h2><p>استكشاف صناع القرار في القطاع الصحي عبر لينكد إن وتوجيه رسائل مخصصة لهم.</p><h2>2. الندوات التقنية (Webinars)</h2><p>عرض المعدات وشرح فوائدها التقنية في بيئة تعليمية متخصصة تبني الثقة.</p>`
        },
        {
            title: 'المجال 13: تطبيقات الجوال (Mobile Apps) - اقتصاد المشغلات',
            slug: 'mobile-app-install-optimization',
            category: 'Mobile Apps',
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
            excerpt: 'تحسين حملات تثبيت التطبيقات (App Installs) وزيادة التفاعل داخل التطبيق لرفع الـ ROAS.',
            content: `<h2>التطبيق الناجح هو جزء من روتين المستخدم</h2><p>اللعبة ليست في التحميل، بل في الاستخدام.</p><h2>1. حملات الـ AEO والـ VO</h2><p>نستهدف الأشخاص الذين من المرجح أن يقوموا بعمليات شراء داخل التطبيق، وليس فقط من يحملونه.</p><h2>2. الـ Deep Linking</h2><p>نقل المستخدم من الإعلان إلى صفحة داخل التطبيق مباشرة، مما يسرع عملية الشراء.</p>`
        },
        {
            title: 'المجال 14: العلامات التجارية الفاخرة (Luxury Brands) - فن الندرة',
            slug: 'luxury-brand-performance',
            category: 'Luxury Brands',
            image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800',
            excerpt: 'كيف تسوق للمنتجات الفاخرة دون المساس بهيبة العلامة التجارية واستبعاد الجمهور غير المستهدف.',
            content: `<h2>الفخامة هي "الاستثناء" وليس "الشمول"</h2><p>في الـ Luxury، نحن لا نلاحق الجميع، بل ننتقي بعناية.</p><h2>1. الاستهداف بالثراء والاهتمامات الراقية</h2><p>الوصول لطبقة الـ HNWIs عبر بيانات الاهتمامات الدقيقة والسلوكيات الشرائية الفاخرة.</p><h2>2. التصميم البصري البسيط (Minimalist Design)</h2><p>الإعلان الفاخر يتنفس بالبياض والمساحات، ويبيع "الحالة الاجتماعية" والقيمة التاريخية للبراند.</p>`
        }
    ];

    // Clear and Seed Blog Posts
    db.prepare('DELETE FROM blog_posts').run();
    const insertPost = db.prepare(`
        INSERT INTO blog_posts (uuid, slug, title_ar, content_ar, excerpt_ar, image_url, category, is_published, published_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, 1, datetime('now'))
    `);

    const insertManyPosts = db.transaction((postList) => {
        for (const p of postList) {
            insertPost.run(uuidv4(), p.slug, p.title, p.content, p.excerpt, p.image, p.category);
        }
    });

    insertManyPosts(expertPosts);
    console.log('✅ Expert blog posts (14) seeded uniquely per industry');
}

// Allow running directly
if (require.main === module) {
    (() => {
        try {
            const { initializeDatabase } = require('../config/database');
            initializeDatabase();
            seedDatabase();
            console.log('🌱 Seeding complete!');
            process.exit(0);
        } catch (err) {
            console.error('Seed error:', err);
            process.exit(1);
        }
    })();
}

module.exports = { seedDatabase };

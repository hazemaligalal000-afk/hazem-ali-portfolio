# Hazem Ali Galal — Portfolio & Lead Management System

## 📋 Project Overview

A production-ready, full-stack portfolio website and lead management system for Hazem Ali Galal — Performance Marketing Expert. Built with enterprise-grade architecture.

### Tech Stack
- **Frontend**: HTML5, CSS3 (Vanilla), JavaScript (ES6+)
- **Backend**: Node.js 20 + Express.js 4
- **Database**: SQLite (better-sqlite3) with WAL mode
- **Authentication**: JWT (JSON Web Tokens) with bcrypt
- **Admin Dashboard**: Custom SPA with dark mode
- **Deployment**: Nginx reverse proxy + systemd

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ 
- npm 10+

### Development

```bash
# Clone and install
cd pshift_mirror
npm install

# Start development server
npm run dev
```

The development server will start at **http://localhost:3000**

### Admin Dashboard

Navigate to **http://localhost:3000/admin** and login with:
- **Email**: `hazemaligalal999@gmail.com`
- **Password**: `HazemAdmin@2026!`

> ⚠️ Change the admin password immediately after first login!

---

## 📁 Project Structure

```
pshift_mirror/
├── server/                    # Backend application
│   ├── app.js                 # Express entry point
│   ├── config/
│   │   └── database.js        # SQLite configuration & schema
│   ├── middleware/
│   │   ├── auth.js            # JWT authentication
│   │   └── analytics.js       # Page view tracking
│   ├── routes/
│   │   ├── api.js             # Public API routes
│   │   ├── auth.js            # Authentication routes
│   │   └── admin.js           # Admin panel API routes
│   ├── utils/
│   │   ├── logger.js          # Winston logger
│   │   └── seed.js            # Database seeder
│   └── logs/                  # Application logs
├── public/                    # Frontend (served statically)
│   ├── index.html             # Homepage
│   ├── about.html             # About page
│   ├── case-studies.html      # Case studies page
│   ├── contact.html           # Contact page
│   ├── service-form.html      # Dynamic service form
│   ├── styles.css             # Main stylesheet
│   ├── script.js              # Frontend JavaScript
│   ├── profile.png            # Profile photo
│   └── hero-illustration.png  # Hero illustration
├── admin/                     # Admin dashboard
│   ├── index.html             # Admin SPA shell
│   ├── admin.css              # Admin styles (dark theme)
│   └── admin.js               # Admin application logic
├── data/                      # Database storage
│   └── database.sqlite        # SQLite database file
├── uploads/                   # Uploaded files
├── .env                       # Environment configuration
├── package.json               # Dependencies & scripts
├── deploy.sh                  # Production deployment script
└── README.md                  # This file
```

---

## 🔌 API Reference

### Public Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/leads` | Submit service form |
| POST | `/api/contact` | Submit contact message |
| GET | `/api/case-studies` | Get active case studies |
| GET | `/api/services` | Get active services |
| GET | `/api/expertise` | Get expertise areas |
| GET | `/api/settings` | Get site settings |
| POST | `/api/analytics/event` | Track custom event |

### Auth Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/login` | Admin login |
| POST | `/api/auth/logout` | Admin logout |
| GET | `/api/auth/me` | Get current user |
| POST | `/api/auth/change-password` | Change password |

### Admin Endpoints (Protected)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/admin/dashboard` | Dashboard analytics |
| GET/PATCH/DELETE | `/api/admin/leads` | Lead management |
| GET/PATCH | `/api/admin/contacts` | Contact management |
| GET/POST/PUT/DELETE | `/api/admin/case-studies` | Case studies CRUD |
| GET | `/api/admin/analytics` | Analytics data |
| GET/PUT | `/api/admin/settings` | Site settings |
| GET/PUT | `/api/admin/services` | Services management |
| GET/POST/DELETE | `/api/admin/expertise` | Expertise areas |

---

## 🗄️ Database Schema

### Tables
- **users** — Admin accounts with role-based access
- **leads** — Service form submissions with qualification tracking
- **contact_messages** — Contact form submissions
- **case_studies** — Dynamic case study content
- **services** — Service definitions
- **site_settings** — Key-value site configuration
- **analytics_events** — Page views & interaction tracking
- **expertise_areas** — Industry expertise display

### Performance
- WAL mode enabled for concurrent reads
- Foreign keys enforced
- Comprehensive indexes on query-heavy columns

---

## 🔐 Security Features

- **Helmet.js** — Security headers (CSP, XSS, etc.)
- **CORS** — Controlled cross-origin access
- **Rate Limiting** — 100 req/15min (API), 10 req/hr (forms)
- **bcrypt** — Password hashing (12 rounds)
- **JWT** — Stateless authentication with expiry
- **Input Validation** — express-validator on all inputs
- **SQL Injection** — Parameterized queries only
- **XSS Prevention** — Input escaping throughout

---

## 🚀 Production Deployment

### Automated Deployment

```bash
# Set your server IP
export DEPLOY_IP=91.108.113.135

# Run deployment
bash deploy.sh
```

### Manual Deployment

1. **Upload files** to server
2. **Install Node.js 20+**
3. **Run `npm install --production`**
4. **Configure `.env`** with production values
5. **Setup Nginx** as reverse proxy
6. **Setup systemd** service
7. **Enable SSL** with certbot

### SSL Setup (Let's Encrypt)

```bash
apt install certbot python3-certbot-nginx
certbot --nginx -d your-domain.com
```

### Environment Variables

Copy `.env` and configure:

| Variable | Description |
|----------|-------------|
| `NODE_ENV` | `production` |
| `PORT` | Server port (default: 3000) |
| `JWT_SECRET` | **Strong random string** |
| `ADMIN_EMAIL` | Admin login email |
| `ADMIN_PASSWORD` | Initial admin password |
| `SMTP_USER` | Gmail address for emails |
| `SMTP_PASS` | Gmail App Password |
| `DOMAIN` | Your domain URL |

---

## 📊 Admin Dashboard Features

- **Overview** — Total leads, qualified leads, page views, conversion rate
- **Lead Management** — Filter, search, status updates, notes, qualification tracking
- **Contact Messages** — View, mark as read/replied
- **Case Studies** — Full CRUD management
- **Analytics** — Daily views chart, top pages, event tracking
- **Settings** — Dynamic site configuration
- **Password Management** — Secure password change

---

## 📝 npm Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start production server |
| `npm run dev` | Start development server (auto-reload) |
| `npm run db:seed` | Seed database with initial data |
| `npm run deploy` | Run deployment script |

---

## 🏗️ Architecture Decisions

1. **SQLite over PostgreSQL** — Perfect for single-server portfolio sites. No external DB process needed. WAL mode provides excellent concurrent read performance.

2. **Static HTML over SPA** — The frontend uses HTML files (not a JS framework) to maintain the exact existing design. The admin dashboard is a lightweight SPA.

3. **Dual Form Submission** — Service forms submit to both Formspree (email backup) and the backend API (database). This ensures zero data loss.

4. **Session-based Analytics** — Lightweight, cookie-based page view tracking without external dependencies.

---

© 2026 Hazem Ali Galal. All rights reserved.

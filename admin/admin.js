/**
 * Hazem Ali Galal - Admin Dashboard
 * Single-page application logic for the admin panel
 */

(function () {
    'use strict';

    // ============================================
    // STATE
    // ============================================
    let authToken = localStorage.getItem('auth_token') || null;
    let currentUser = null;
    let currentPage = 'overview';

    // ============================================
    // API HELPER
    // ============================================
    async function api(endpoint, options = {}) {
        const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };
        if (authToken) headers['Authorization'] = `Bearer ${authToken}`;

        const res = await fetch(`/api${endpoint}`, { ...options, headers });
        const data = await res.json();
        if (!res.ok) {
            if (res.status === 401) { logout(); }
            throw new Error(data.error || 'API Error');
        }
        return data;
    }

    // ============================================
    // TOAST NOTIFICATIONS
    // ============================================
    function showToast(message, type = 'success') {
        let container = document.querySelector('.toast-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'toast-container';
            document.body.appendChild(container);
        }
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        container.appendChild(toast);
        setTimeout(() => { toast.remove(); }, 4000);
    }

    // ============================================
    // AUTH
    // ============================================
    const loginScreen = document.getElementById('login-screen');
    const dashboard = document.getElementById('dashboard');
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const btn = document.getElementById('login-btn');

        try {
            btn.innerHTML = '<span>Signing in...</span>';
            btn.disabled = true;
            const data = await api('/auth/login', {
                method: 'POST',
                body: JSON.stringify({ email, password })
            });
            authToken = data.token;
            currentUser = data.user;
            localStorage.setItem('auth_token', authToken);
            showDashboard();
        } catch (err) {
            loginError.textContent = err.message || 'Login failed';
            loginError.style.display = 'block';
        } finally {
            btn.innerHTML = '<span>Sign In</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
            btn.disabled = false;
        }
    });

    function logout() {
        authToken = null;
        currentUser = null;
        localStorage.removeItem('auth_token');
        loginScreen.style.display = 'flex';
        dashboard.style.display = 'none';
    }

    document.getElementById('btn-logout').addEventListener('click', async () => {
        try { await api('/auth/logout', { method: 'POST' }); } catch (e) { }
        logout();
    });

    async function checkAuth() {
        if (!authToken) return false;
        try {
            const data = await api('/auth/me');
            currentUser = data.user;
            return true;
        } catch (e) { return false; }
    }

    async function showDashboard() {
        loginScreen.style.display = 'none';
        dashboard.style.display = 'flex';
        if (currentUser) {
            document.getElementById('user-name').textContent = currentUser.fullName;
            document.getElementById('user-role').textContent = currentUser.role === 'super_admin' ? 'Super Admin' : 'Admin';
            document.getElementById('user-avatar').textContent = currentUser.fullName[0].toUpperCase();
        }
        loadPage('overview');
    }

    // ============================================
    // NAVIGATION
    // ============================================
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = item.dataset.page;
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            loadPage(page);
            // Close mobile sidebar
            document.getElementById('sidebar').classList.remove('open');
        });
    });

    document.getElementById('menu-toggle').addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('open');
    });

    document.getElementById('sidebar-close').addEventListener('click', () => {
        document.getElementById('sidebar').classList.remove('open');
    });

    // ============================================
    // PAGE ROUTER
    // ============================================
    async function loadPage(page) {
        currentPage = page;
        const el = document.getElementById('content-area');
        const title = document.getElementById('page-title');

        // Update nav active state
        document.querySelectorAll('.nav-item').forEach(item => {
            if (item.getAttribute('data-page') === page) item.classList.add('active');
            else item.classList.remove('active');
        });

        el.innerHTML = '<div class="loading"><div class="spinner-admin"></div></div>';

        switch (page) {
            case 'overview': title.innerText = 'Overview'; renderOverview(el); break;
            case 'leads': title.innerText = 'Leads Management'; renderLeads(el); break;
            case 'contacts': title.innerText = 'Inbound Messages'; renderContacts(el); break;
            case 'case-studies': title.innerText = 'Case Studies'; renderCaseStudies(el); break;
            case 'blog': title.innerText = 'Blog Management'; renderBlog(el); break;
            case 'media': title.innerText = 'Media Library'; renderMedia(el); break;
            case 'testimonials': title.innerText = 'Client Testimonials'; renderTestimonials(el); break;
            case 'subscribers': title.innerText = 'Newsletter Subscribers'; renderSubscribers(el); break;
            case 'editor': title.innerText = 'Direct Content Editor'; renderEditor(el); break;
            case 'logs': title.innerText = 'Audit Trails'; renderLogs(el); break;
            case 'users': title.innerText = 'Admin Users'; renderUsers(el); break;
            case 'settings': title.innerText = 'Site Settings'; renderSettings(el); break;
            case 'invoices': title.innerText = 'Invoices Manager'; renderInvoices(el); break;
            case 'seo-metadata': title.innerText = 'SEO Manager'; renderSEO(el); break;
            default:
                const pageName = page.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
                title.innerText = pageName + ' Module';
                try {
                    const { data } = await api(`/admin/${page}`);
                    const headers = data.length > 0 ? Object.keys(data[0]) : ['id', 'status', 'created_at', 'details'];

                    el.innerHTML = `
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">${pageName} (Future Readiness)</h3>
                                <button class="btn-sm btn-sm-primary" onclick="showToast('UI creation interface coming soon')">Add New</button>
                            </div>
                            <div class="table-wrap">
                                <table>
                                    <thead><tr>${headers.map(h => `<th>${h.replace(/_/g, ' ')}</th>`).join('')}</tr></thead>
                                    <tbody>
                                        ${data.length > 0 ? data.map(row => `<tr>${headers.map(h => `<td>${String(row[h]).substring(0, 30)}${String(row[h]).length > 30 ? '...' : ''}</td>`).join('')}</tr>`).join('') : `<tr><td colspan="${headers.length}" class="text-center" style="padding:20px;">No abstract data yet</td></tr>`}
                                    </tbody>
                                </table>
                            </div>
                            <div class="card-body-padded">
                                <p style="font-size: 0.8rem; margin-top: 8px;">The backend database table and API routes are successfully deployed. Dynamic UI view generated directly from <code>/api/admin/${page}</code>.</p>
                            </div>
                        </div>
                    `;
                } catch (e) {
                    el.innerHTML = `
                        <div class="card">
                            <div class="card-header"><h3 class="card-title">${pageName} (Future Readiness)</h3></div>
                            <div class="card-body-padded empty-state">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                                    <line x1="8" y1="21" x2="16" y2="21"/>
                                    <line x1="12" y1="17" x2="12" y2="21"/>
                                </svg>
                                <p><strong>${pageName}</strong> module scaffolding is complete.</p>
                                <p style="font-size: 0.8rem; margin-top: 8px;">Failed to fetch dynamic rows from API. Database table is likely completely empty.</p>
                            </div>
                        </div>
                    `;
                }
        }
    }

    // Notifications logic
    const notifBtn = document.getElementById('notif-btn');
    const notifDropdown = document.getElementById('notif-dropdown');
    if (notifBtn) {
        notifBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            notifDropdown.classList.toggle('show');
        });
        document.addEventListener('click', () => notifDropdown.classList.remove('show'));
    }

    // ============================================
    // OVERVIEW PAGE
    // ============================================
    async function renderOverview(el) {
        const { data } = await api('/admin/dashboard');
        const s = data.summary;

        // Update badges
        if (s.newLeads > 0) document.getElementById('leads-badge').textContent = s.newLeads;
        else document.getElementById('leads-badge').textContent = '';
        if (s.unreadContacts > 0) document.getElementById('contacts-badge').textContent = s.unreadContacts;
        else document.getElementById('contacts-badge').textContent = '';

        el.innerHTML = `
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-card-header">
                        <span class="stat-card-label">Total Leads</span>
                        <div class="stat-card-icon primary">👥</div>
                    </div>
                    <div class="stat-card-value">${s.totalLeads}</div>
                </div>
                <div class="stat-card">
                    <div class="stat-card-header">
                        <span class="stat-card-label">New Leads</span>
                        <div class="stat-card-icon warning">✨</div>
                    </div>
                    <div class="stat-card-value">${s.newLeads}</div>
                </div>
                <div class="stat-card">
                    <div class="stat-card-header">
                        <span class="stat-card-label">Conversion Rate</span>
                        <div class="stat-card-icon success">🎯</div>
                    </div>
                    <div class="stat-card-value">${s.conversionRate}%</div>
                </div>
                <div class="stat-card">
                    <div class="stat-card-header">
                        <span class="stat-card-label">Unread Messages</span>
                        <div class="stat-card-icon info">✉️</div>
                    </div>
                    <div class="stat-card-value">${s.unreadContacts}</div>
                </div>
            </div>

            <div style="display:grid;grid-template-columns: 2fr 1fr; gap:24px; margin-top:24px;">
                <!-- Main Activity -->
                <div class="card">
                    <div class="card-header"><span class="card-title">Recent Activity</span></div>
                    <div class="card-body">
                        <div class="activity-feed">
                            ${data.recentLeads.slice(0, 5).map(l => `
                                <div class="activity-item">
                                    <div class="activity-icon primary">L</div>
                                    <div class="activity-content">
                                        <strong>New Lead: ${esc(l.full_name)}</strong>
                                        <p>Interested in ${esc(l.service_type)}</p>
                                        <small>${formatDate(l.created_at)}</small>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                
                <!-- Quick Actions -->
                <div class="card">
                    <div class="card-header"><span class="card-title">Quick Actions</span></div>
                    <div class="card-body-padded">
                        <button class="btn-sm btn-sm-primary" style="width:100%; margin-bottom:12px;" onclick="window.loadPage('leads')">Process New Leads</button>
                        <button class="btn-sm btn-sm-outline" style="width:100%; margin-bottom:12px;" onclick="window._addBlog()">Write Blog Post</button>
                        <button class="btn-sm btn-sm-success" style="width:100%;" onclick="window._exportLeads()">Export All Leads (CSV)</button>
                    </div>
                </div>
            </div>

            <div class="card" style="margin-top:24px;">
                <div class="card-header"><span class="card-title">Top Landing Pages Performance</span></div>
                <div class="card-body">
                    <div class="table-wrap">
                        <table>
                            <thead><tr><th>Page Path</th><th>Views</th><th>Relative Interest</th></tr></thead>
                            <tbody>
                                ${data.topPages.map(p => {
            const percent = Math.min((p.views / (s.pageViews30d / 10)) * 100, 100);
            return `<tr>
                                        <td><code>${esc(p.page)}</code></td>
                                        <td><strong>${p.views}</strong></td>
                                        <td><div style="width:100px; height:8px; background:#eee; border-radius:4px; overflow:hidden;"><div style="width:${percent}%; height:100%; background:var(--admin-primary);"></div></div></td>
                                    </tr>`;
        }).join('') || '<tr><td colspan="3" style="text-align:center;padding:32px">No data</td></tr>'}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;

        // Render chart
        if (data.dailyViews.length > 0) {
            const maxViews = Math.max(...data.dailyViews.map(d => d.views), 1);
            const chartEl = document.getElementById('chart-views');
            chartEl.innerHTML = data.dailyViews.map(d => {
                const height = Math.max((d.views / maxViews) * 160, 8);
                const dateStr = d.date.substring(5); // MM-DD
                return `<div class="chart-bar" style="height:${height}px" title="${d.views} views on ${d.date}"><span class="chart-bar-label">${dateStr}</span></div>`;
            }).join('');
        }
    }

    // ============================================
    // LEADS PAGE
    // ============================================
    async function renderLeads(el, page = 1, filters = {}) {
        const params = new URLSearchParams({ page, limit: 20, ...filters });
        const { data, pagination } = await api(`/admin/leads?${params}`);

        el.innerHTML = `
            <div class="card">
                <div class="card-header">
                    <span class="card-title">All Leads (${pagination.total})</span>
                    <button class="btn-sm btn-sm-success" onclick="window._exportLeads()">Export CSV</button>
                    <div class="filters-bar">
                        <select class="filter-select" id="filter-status">
                            <option value="">All Status</option>
                            <option value="new" ${filters.status === 'new' ? 'selected' : ''}>New</option>
                            <option value="contacted" ${filters.status === 'contacted' ? 'selected' : ''}>Contacted</option>
                            <option value="in_progress" ${filters.status === 'in_progress' ? 'selected' : ''}>In Progress</option>
                            <option value="converted" ${filters.status === 'converted' ? 'selected' : ''}>Converted</option>
                            <option value="lost" ${filters.status === 'lost' ? 'selected' : ''}>Lost</option>
                        </select>
                        <select class="filter-select" id="filter-qualification">
                            <option value="">All Qualification</option>
                            <option value="qualified" ${filters.qualification === 'qualified' ? 'selected' : ''}>Qualified</option>
                            <option value="unqualified" ${filters.qualification === 'unqualified' ? 'selected' : ''}>Unqualified</option>
                            <option value="hot" ${filters.qualification === 'hot' ? 'selected' : ''}>Hot</option>
                            <option value="pending" ${filters.qualification === 'pending' ? 'selected' : ''}>Pending</option>
                        </select>
                        <input type="text" class="filter-input" id="filter-search" placeholder="Search name or email..." value="${filters.search || ''}">
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-wrap">
                        <table>
                            <thead>
                                <tr><th>Name</th><th>Email</th><th>Service</th><th>Budget</th><th>Qualification</th><th>Status</th><th>Date</th><th>Actions</th></tr>
                            </thead>
                            <tbody>
                                ${data.map(l => `
                                    <tr>
                                        <td><strong>${esc(l.full_name)}</strong></td>
                                        <td>${esc(l.email)}</td>
                                        <td>${esc(l.service_type)}</td>
                                        <td>${esc(l.budget || '-')}</td>
                                        <td><span class="status status-${l.qualification_status}">${l.qualification_status}</span></td>
                                        <td>
                                            <select class="filter-select" style="min-width:110px;padding:4px 8px;font-size:0.78rem" onchange="window._updateLeadStatus('${l.uuid}', this.value)">
                                                ${['new', 'contacted', 'in_progress', 'converted', 'lost', 'archived'].map(s => `<option value="${s}" ${l.status === s ? 'selected' : ''}>${s}</option>`).join('')}
                                            </select>
                                        </td>
                                        <td>${formatDate(l.created_at)}</td>
                                        <td>
                                            <div class="actions-group">
                                                <button class="btn-sm btn-sm-primary" onclick="window._viewLead('${l.uuid}')">View</button>
                                            </div>
                                        </td>
                                    </tr>
                                `).join('') || '<tr><td colspan="8" style="text-align:center;padding:32px;color:var(--admin-text-muted)">No leads found</td></tr>'}
                            </tbody>
                        </table>
                    </div>
                    ${renderPagination(pagination, (p) => renderLeads(el, p, filters))}
                </div>
            </div>
        `;

        // Filter events
        const applyFilters = () => {
            const newFilters = {
                status: document.getElementById('filter-status').value,
                qualification: document.getElementById('filter-qualification').value,
                search: document.getElementById('filter-search').value,
            };
            renderLeads(el, 1, newFilters);
        };

        document.getElementById('filter-status').addEventListener('change', applyFilters);
        document.getElementById('filter-qualification').addEventListener('change', applyFilters);
        let searchTimeout;
        document.getElementById('filter-search').addEventListener('input', () => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(applyFilters, 500);
        });
    }

    window._updateLeadStatus = async (uuid, status) => {
        try {
            await api(`/admin/leads/${uuid}`, { method: 'PATCH', body: JSON.stringify({ status }) });
            showToast('Lead status updated');
        } catch (e) { showToast(e.message, 'error'); }
    };

    window._viewLead = async (uuid) => {
        try {
            const { data } = await api(`/admin/leads/${uuid}`);
            const answers = data.answers ? JSON.parse(data.answers) : {};
            const answersHtml = Object.entries(answers).map(([k, v]) => `<div style="margin-bottom:8px"><strong style="color:var(--admin-text-muted)">${esc(k)}:</strong> ${esc(v)}</div>`).join('');

            showModal('Lead Details', `
                <div class="admin-form-group"><label>Name</label><input value="${esc(data.full_name)}" readonly></div>
                <div class="admin-form-group"><label>Email</label><input value="${esc(data.email)}" readonly></div>
                <div class="admin-form-group"><label>Phone</label><input value="${esc(data.phone || 'N/A')}" readonly></div>
                <div class="admin-form-group"><label>Budget</label><input value="${esc(data.budget || '')}" readonly></div>
                <div class="admin-form-group"><label>Service</label><input value="${esc(data.service_type)}" readonly></div>
                <div class="admin-form-group"><label>Qualification</label><span class="status status-${data.qualification_status}">${data.qualification_status}</span></div>
                <div class="admin-form-group"><label>Source</label><input value="${esc(data.source || 'website')}" readonly></div>
                <div class="admin-form-group"><label>UTM Source</label><input value="${esc(data.utm_source || 'N/A')}" readonly></div>
                <div class="admin-form-group"><label>Date</label><input value="${data.created_at}" readonly></div>
                ${answersHtml ? `<div class="admin-form-group"><label>Form Answers</label><div style="background:var(--admin-surface-2);padding:16px;border-radius:8px;font-size:0.85rem;">${answersHtml}</div></div>` : ''}
                <div class="admin-form-group">
                    <label>Notes</label>
                    <textarea id="lead-notes" placeholder="Add notes...">${esc(data.notes || '')}</textarea>
                </div>
            `, [
                {
                    label: 'Save Notes', class: 'btn-sm btn-sm-primary', onClick: async () => {
                        const notes = document.getElementById('lead-notes').value;
                        await api(`/admin/leads/${uuid}`, { method: 'PATCH', body: JSON.stringify({ notes }) });
                        showToast('Notes saved');
                        closeModal();
                    }
                }
            ]);
        } catch (e) { showToast(e.message, 'error'); }
    };

    // ============================================
    // CONTACTS PAGE
    // ============================================
    async function renderContacts(el) {
        const { data } = await api('/admin/contacts?limit=50');

        el.innerHTML = `
            <div class="card">
                <div class="card-header"><span class="card-title">Contact Messages (${data.length})</span></div>
                <div class="card-body">
                    <div class="table-wrap">
                        <table>
                            <thead><tr><th>Name</th><th>Email</th><th>Subject</th><th>Message</th><th>Status</th><th>Date</th><th>Actions</th></tr></thead>
                            <tbody>
                                ${data.map(m => `
                                    <tr>
                                        <td><strong>${esc(m.full_name)}</strong></td>
                                        <td>${esc(m.email)}</td>
                                        <td>${esc(m.subject || '-')}</td>
                                        <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis">${esc(m.message?.substring(0, 60) || '')}</td>
                                        <td><span class="status status-${m.status}">${m.status}</span></td>
                                        <td>${formatDate(m.created_at)}</td>
                                        <td>
                                            <div class="actions-group">
                                                <button class="btn-sm btn-sm-primary" onclick="window._viewContact('${m.uuid}')">View</button>
                                                ${m.status === 'unread' ? `<button class="btn-sm btn-sm-success" onclick="window._markRead('${m.uuid}')">Mark Read</button>` : ''}
                                            </div>
                                        </td>
                                    </tr>
                                `).join('') || '<tr><td colspan="7" style="text-align:center;padding:32px">No messages</td></tr>'}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }

    window._viewContact = async (uuid) => {
        const { data } = await api('/admin/contacts');
        const m = data.find(c => c.uuid === uuid);
        if (!m) return;
        showModal('Message Details', `
            <div class="admin-form-group"><label>From</label><input value="${esc(m.full_name)} (${esc(m.email)})" readonly></div>
            <div class="admin-form-group"><label>Subject</label><input value="${esc(m.subject || 'No subject')}" readonly></div>
            <div class="admin-form-group"><label>Message</label><textarea readonly style="min-height:150px">${esc(m.message)}</textarea></div>
            <div class="admin-form-group"><label>Date</label><input value="${m.created_at}" readonly></div>
        `);
        if (m.status === 'unread') {
            await api(`/admin/contacts/${uuid}`, { method: 'PATCH', body: JSON.stringify({ status: 'read' }) });
        }
    };

    window._markRead = async (uuid) => {
        try {
            await api(`/admin/contacts/${uuid}`, { method: 'PATCH', body: JSON.stringify({ status: 'read' }) });
            showToast('Marked as read');
            renderContacts(document.getElementById('content-area'));
        } catch (e) { showToast(e.message, 'error'); }
    };

    // ============================================
    // CASE STUDIES PAGE
    // ============================================
    async function renderCaseStudies(el) {
        const { data } = await api('/admin/case-studies');

        el.innerHTML = `
            <div class="card">
                <div class="card-header">
                    <span class="card-title">Case Studies (${data.length})</span>
                    <button class="btn-sm btn-sm-primary" onclick="window._addCaseStudy()">+ Add New</button>
                </div>
                <div class="card-body">
                    <div class="table-wrap">
                        <table>
                            <thead><tr><th>Title</th><th>Region</th><th>Industry</th><th>Featured</th><th>Active</th><th>Actions</th></tr></thead>
                            <tbody>
                                ${data.map(c => `
                                    <tr>
                                        <td><strong>${esc(c.title_ar)}</strong></td>
                                        <td>${esc(c.region || '-')}</td>
                                        <td>${esc(c.industry || '-')}</td>
                                        <td>${c.is_featured ? '⭐' : '—'}</td>
                                        <td>${c.is_active ? '<span class="status status-qualified">Active</span>' : '<span class="status status-archived">Inactive</span>'}</td>
                                        <td>
                                            <div style="display:flex; gap:8px;">
                                                <button class="btn-sm btn-sm-outline" onclick="window._editCaseStudy('${c.uuid}')">Edit</button>
                                                <button class="btn-sm btn-sm-outline" style="color:var(--admin-danger); border-color:var(--admin-danger);" onclick="window._deleteCaseStudy('${c.uuid}')">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                `).join('') || '<tr><td colspan="6" style="text-align:center;padding:32px">No case studies</td></tr>'}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }

    window._deleteCaseStudy = async (uuid) => {
        if (!confirm('Are you sure you want to delete this case study?')) return;
        try {
            await api(`/admin/case-studies/${uuid}`, { method: 'DELETE' });
            showToast('Case study deleted');
            renderCaseStudies(document.getElementById('content-area'));
        } catch (e) { showToast(e.message, 'error'); }
    };

    window._addCaseStudy = () => {
        showModal('Add Case Study', `
            <div class="admin-form-group"><label>Title (Arabic)</label><input id="cs-title-ar" placeholder="عنوان قصة النجاح"></div>
            <div class="admin-form-group"><label>Description (Arabic)</label><textarea id="cs-desc-ar" placeholder="وصف مفصل..."></textarea></div>
            <div class="admin-form-group"><label>Region</label><input id="cs-region" placeholder="مثل: السعودية"></div>
            <div class="admin-form-group"><label>Industry</label><input id="cs-industry" placeholder="مثل: E-Commerce"></div>
            <div class="admin-form-group">
                <label>Image URL</label>
                <div style="display:flex; gap:8px;">
                    <input id="cs-img" placeholder="https://..." style="flex:1;">
                    <button class="btn-sm btn-sm-outline" type="button" onclick="window._openMediaPicker('cs-img')">Choose</button>
                </div>
            </div>
            <div class="admin-form-group"><label>SVG Illustration (Raw HTML SVG)</label><textarea id="cs-svg" placeholder="<svg>...</svg>"></textarea></div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
                <div class="admin-form-group"><label>Stat 1 Value</label><input id="cs-s1v" placeholder="500+"></div>
                <div class="admin-form-group"><label>Stat 1 Label</label><input id="cs-s1l" placeholder="عميل محتمل"></div>
                <div class="admin-form-group"><label>Stat 2 Value</label><input id="cs-s2v"></div>
                <div class="admin-form-group"><label>Stat 2 Label</label><input id="cs-s2l"></div>
                <div class="admin-form-group"><label>Stat 3 Value</label><input id="cs-s3v"></div>
                <div class="admin-form-group"><label>Stat 3 Label</label><input id="cs-s3l"></div>
            </div>
        `, [
            {
                label: 'Create', class: 'btn-sm btn-sm-primary', onClick: async () => {
                    try {
                        await api('/admin/case-studies', {
                            method: 'POST', body: JSON.stringify({
                                title_ar: document.getElementById('cs-title-ar').value,
                                description_ar: document.getElementById('cs-desc-ar').value,
                                region: document.getElementById('cs-region').value,
                                industry: document.getElementById('cs-industry').value,
                                image_url: document.getElementById('cs-img').value,
                                svg_illustration: document.getElementById('cs-svg').value,
                                stat_1_value: document.getElementById('cs-s1v').value,
                                stat_1_label: document.getElementById('cs-s1l').value,
                                stat_2_value: document.getElementById('cs-s2v').value,
                                stat_2_label: document.getElementById('cs-s2l').value,
                                stat_3_value: document.getElementById('cs-s3v').value,
                                stat_3_label: document.getElementById('cs-s3l').value,
                                is_active: 1, is_featured: 0
                            })
                        });
                        showToast('Case study created');
                        closeModal();
                        renderCaseStudies(document.getElementById('content-area'));
                    } catch (e) { showToast(e.message, 'error'); }
                }
            }
        ]);
    };

    window._editCaseStudy = async (uuid) => {
        const { data } = await api('/admin/case-studies');
        const c = data.find(cs => cs.uuid === uuid);
        if (!c) return;

        showModal('Edit Case Study', `
            <div class="admin-form-group"><label>Title (Arabic)</label><input id="cs-title-ar" value="${esc(c.title_ar)}"></div>
            <div class="admin-form-group"><label>Description (Arabic)</label><textarea id="cs-desc-ar">${esc(c.description_ar)}</textarea></div>
            <div class="admin-form-group"><label>Region</label><input id="cs-region" value="${esc(c.region || '')}"></div>
            <div class="admin-form-group"><label>Industry</label><input id="cs-industry" value="${esc(c.industry || '')}"></div>
            <div class="admin-form-group">
                <label>Image URL</label>
                <div style="display:flex; gap:8px;">
                    <input id="cs-img" value="${esc(c.image_url || '')}" style="flex:1;">
                    <button class="btn-sm btn-sm-outline" type="button" onclick="window._openMediaPicker('cs-img')">Choose</button>
                </div>
            </div>
            <div class="admin-form-group"><label>SVG Illustration (Raw HTML SVG)</label><textarea id="cs-svg" placeholder="<svg>...</svg>">${esc(c.svg_illustration || '')}</textarea></div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
                <div class="admin-form-group"><label>Stat 1 Value</label><input id="cs-s1v" value="${esc(c.stat_1_value || '')}"></div>
                <div class="admin-form-group"><label>Stat 1 Label</label><input id="cs-s1l" value="${esc(c.stat_1_label || '')}"></div>
                <div class="admin-form-group"><label>Stat 2 Value</label><input id="cs-s2v" value="${esc(c.stat_2_value || '')}"></div>
                <div class="admin-form-group"><label>Stat 2 Label</label><input id="cs-s2l" value="${esc(c.stat_2_label || '')}"></div>
                <div class="admin-form-group"><label>Stat 3 Value</label><input id="cs-s3v" value="${esc(c.stat_3_value || '')}"></div>
                <div class="admin-form-group"><label>Stat 3 Label</label><input id="cs-s3l" value="${esc(c.stat_3_label || '')}"></div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
                <div class="admin-form-group"><label>Active</label><select id="cs-active"><option value="1" ${c.is_active ? 'selected' : ''}>Yes</option><option value="0" ${!c.is_active ? 'selected' : ''}>No</option></select></div>
                <div class="admin-form-group"><label>Featured</label><select id="cs-featured"><option value="1" ${c.is_featured ? 'selected' : ''}>Yes</option><option value="0" ${!c.is_featured ? 'selected' : ''}>No</option></select></div>
            </div>
        `, [
            {
                label: 'Save', class: 'btn-sm btn-sm-primary', onClick: async () => {
                    try {
                        await api(`/admin/case-studies/${uuid}`, {
                            method: 'PUT', body: JSON.stringify({
                                title_ar: document.getElementById('cs-title-ar').value,
                                description_ar: document.getElementById('cs-desc-ar').value,
                                region: document.getElementById('cs-region').value,
                                industry: document.getElementById('cs-industry').value,
                                image_url: document.getElementById('cs-img').value,
                                svg_illustration: document.getElementById('cs-svg').value,
                                stat_1_value: document.getElementById('cs-s1v').value,
                                stat_1_label: document.getElementById('cs-s1l').value,
                                stat_2_value: document.getElementById('cs-s2v').value,
                                stat_2_label: document.getElementById('cs-s2l').value,
                                stat_3_value: document.getElementById('cs-s3v').value,
                                stat_3_label: document.getElementById('cs-s3l').value,
                                is_active: parseInt(document.getElementById('cs-active').value),
                                is_featured: parseInt(document.getElementById('cs-featured').value),
                                display_order: c.display_order
                            })
                        });
                        showToast('Case study updated');
                        closeModal();
                        renderCaseStudies(document.getElementById('content-area'));
                    } catch (e) { showToast(e.message, 'error'); }
                }
            }
        ]);
    };

    // ============================================
    // ANALYTICS PAGE
    // ============================================
    async function renderAnalytics(el) {
        const { data } = await api('/admin/analytics?period=30');

        const totalViews = data.viewsByDay.reduce((s, d) => s + d.views, 0);
        const totalUnique = data.viewsByDay.reduce((s, d) => s + d.unique_visitors, 0);

        el.innerHTML = `
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-card-header"><span class="stat-card-label">Page Views (30d)</span><div class="stat-card-icon info">📈</div></div>
                    <div class="stat-card-value">${totalViews.toLocaleString()}</div>
                </div>
                <div class="stat-card">
                    <div class="stat-card-header"><span class="stat-card-label">Unique Visitors (30d)</span><div class="stat-card-icon primary">👤</div></div>
                    <div class="stat-card-value">${totalUnique.toLocaleString()}</div>
                </div>
            </div>

            <div class="card">
                <div class="card-header"><span class="card-title">Daily Views</span></div>
                <div class="chart-container" id="analytics-chart"></div>
            </div>

            <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px">
                <div class="card">
                    <div class="card-header"><span class="card-title">Top Pages</span></div>
                    <div class="card-body"><div class="table-wrap">
                        <table>
                            <thead><tr><th>Page</th><th>Views</th></tr></thead>
                            <tbody>${data.topPages.map(p => `<tr><td>${esc(p.page)}</td><td><strong>${p.views}</strong></td></tr>`).join('')}</tbody>
                        </table>
                    </div></div>
                </div>
                <div class="card">
                    <div class="card-header"><span class="card-title">Events by Type</span></div>
                    <div class="card-body"><div class="table-wrap">
                        <table>
                            <thead><tr><th>Event</th><th>Count</th></tr></thead>
                            <tbody>${data.eventsByType.map(e => `<tr><td>${esc(e.event_type)}</td><td><strong>${e.count}</strong></td></tr>`).join('')}</tbody>
                        </table>
                    </div></div>
                </div>
            </div>
        `;

        // Render chart
        if (data.viewsByDay.length > 0) {
            const maxViews = Math.max(...data.viewsByDay.map(d => d.views), 1);
            document.getElementById('analytics-chart').innerHTML = data.viewsByDay.map(d => {
                const height = Math.max((d.views / maxViews) * 160, 8);
                return `<div class="chart-bar" style="height:${height}px" title="${d.views} views"><span class="chart-bar-label">${d.date.substring(5)}</span></div>`;
            }).join('');
        }
    }

    // ============================================
    // BLOG PAGE
    // ============================================
    async function renderBlog(el) {
        const { data } = await api('/admin/blog');

        el.innerHTML = `
            <div class="card">
                <div class="card-header">
                    <span class="card-title">Articles (${data.length})</span>
                    <button class="btn-sm btn-sm-primary" onclick="window._addBlog()">+ Create Post</button>
                </div>
                <div class="card-body">
                    <div class="table-wrap">
                        <table>
                            <thead><tr><th>Image</th><th>Title</th><th>Category</th><th>Views</th><th>Status</th><th>Actions</th></tr></thead>
                            <tbody>
                                ${data.map(p => `
                                    <tr>
                                        <td><img src="${p.image_url}" style="width:80px;height:45px;object-fit:cover;border-radius:4px"></td>
                                        <td><strong>${esc(p.title_ar)}</strong><br><small style="color:var(--admin-text-muted)">/${p.slug}</small></td>
                                        <td>${esc(p.category)}</td>
                                        <td>${p.view_count}</td>
                                        <td>${p.is_published ? '<span class="status status-qualified">Published</span>' : '<span class="status status-archived">Draft</span>'}</td>
                                        <td>
                                            <div class="actions-group">
                                                <button class="btn-sm btn-sm-outline" onclick="window._editBlog('${p.uuid}')">Edit</button>
                                                <button class="btn-sm btn-sm-danger" onclick="window._deleteBlog('${p.uuid}')">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                `).join('') || '<tr><td colspan="6" style="text-align:center;padding:32px">No articles yet</td></tr>'}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }

    window._addBlog = () => {
        showModal('Create Blog Post', `
            <div class="admin-form-group"><label>Title (Arabic)</label><input id="blog-title" placeholder="عنوان المقال"></div>
            <div class="admin-form-group"><label>Slug (URL English)</label><input id="blog-slug" placeholder="how-to-scale-ads"></div>
            <div class="admin-form-group"><label>Category</label><input id="blog-cat" value="Performance Marketing"></div>
            <div class="admin-form-group">
                <label>Thumbnail URL</label>
                <div style="display:flex; gap:8px;">
                    <input id="blog-img" placeholder="https://..." style="flex:1;">
                    <button class="btn-sm btn-sm-outline" type="button" onclick="window._openMediaPicker('blog-img')">Choose</button>
                </div>
            </div>
            <div class="admin-form-group"><label>Excerpt (Arabic)</label><textarea id="blog-excerpt" style="min-height:60px"></textarea></div>
            <div class="admin-form-group"><label>Content (Arabic HTML)</label><div id="blog-editor" style="height:250px; background:#fff; color:#000; border:1px solid #ccc; border-radius:4px;"></div></div>
            <div class="admin-form-group"><label>Published</label><select id="blog-published"><option value="1">Yes</option><option value="0">No (Save as Draft)</option></select></div>
        `, [
            {
                label: 'Publish', class: 'btn-sm btn-sm-primary', onClick: async () => {
                    try {
                        const body = {
                            title_ar: document.getElementById('blog-title').value,
                            slug: document.getElementById('blog-slug').value,
                            category: document.getElementById('blog-cat').value,
                            image_url: document.getElementById('blog-img').value,
                            excerpt_ar: document.getElementById('blog-excerpt').value,
                            content_ar: window._blogQuill.root.innerHTML,
                            is_published: parseInt(document.getElementById('blog-published').value)
                        };
                        await api('/admin/blog', { method: 'POST', body: JSON.stringify(body) });
                        showToast('Article created');
                        closeModal();
                        renderBlog(document.getElementById('content-area'));
                    } catch (e) { showToast(e.message, 'error'); }
                }
            }
        ]);

        window._blogQuill = new Quill('#blog-editor', {
            theme: 'snow',
            modules: {
                toolbar: [
                    [{ header: [1, 2, 3, false] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['link', 'image'],
                    ['clean']
                ]
            }
        });
    };

    window._editBlog = async (uuid) => {
        const { data } = await api('/admin/blog');
        const p = data.find(post => post.uuid === uuid);
        if (!p) return;

        showModal('Edit Blog Post', `
            <div class="admin-form-group"><label>Title (Arabic)</label><input id="blog-title" value="${esc(p.title_ar)}"></div>
            <div class="admin-form-group"><label>Slug (URL English)</label><input id="blog-slug" value="${esc(p.slug)}"></div>
            <div class="admin-form-group"><label>Category</label><input id="blog-cat" value="${esc(p.category)}"></div>
            <div class="admin-form-group">
                <label>Thumbnail URL</label>
                <div style="display:flex; gap:8px;">
                    <input id="blog-img" value="${esc(p.image_url)}" style="flex:1;">
                    <button class="btn-sm btn-sm-outline" type="button" onclick="window._openMediaPicker('blog-img')">Choose</button>
                </div>
            </div>
            <div class="admin-form-group"><label>Excerpt (Arabic)</label><textarea id="blog-excerpt" style="min-height:60px">${esc(p.excerpt_ar)}</textarea></div>
            <div class="admin-form-group"><label>Content (Arabic HTML)</label><div id="blog-editor" style="height:250px; background:#fff; color:#000; border:1px solid #ccc; border-radius:4px;"></div></div>
            <div class="admin-form-group"><label>Published</label><select id="blog-published"><option value="1" ${p.is_published ? 'selected' : ''}>Yes</option><option value="0" ${!p.is_published ? 'selected' : ''}>No (Draft)</option></select></div>
        `, [
            {
                label: 'Update', class: 'btn-sm btn-sm-primary', onClick: async () => {
                    try {
                        const body = {
                            title_ar: document.getElementById('blog-title').value,
                            slug: document.getElementById('blog-slug').value,
                            category: document.getElementById('blog-cat').value,
                            image_url: document.getElementById('blog-img').value,
                            excerpt_ar: document.getElementById('blog-excerpt').value,
                            content_ar: window._blogQuill.root.innerHTML,
                            is_published: parseInt(document.getElementById('blog-published').value)
                        };
                        await api(`/admin/blog/${uuid}`, { method: 'PUT', body: JSON.stringify(body) });
                        showToast('Article updated');
                        closeModal();
                        renderBlog(document.getElementById('content-area'));
                    } catch (e) { showToast(e.message, 'error'); }
                }
            }
        ]);

        window._blogQuill = new Quill('#blog-editor', {
            theme: 'snow',
            modules: {
                toolbar: [
                    [{ header: [1, 2, 3, false] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['link', 'image'],
                    ['clean']
                ]
            }
        });
        window._blogQuill.root.innerHTML = p.content_ar || '';
    };

    window._deleteBlog = async (uuid) => {
        if (!confirm('Are you sure you want to delete this article?')) return;
        try {
            await api(`/admin/blog/${uuid}`, { method: 'DELETE' });
            showToast('Article deleted');
            renderBlog(document.getElementById('content-area'));
        } catch (e) { showToast(e.message, 'error'); }
    };

    window._exportLeads = () => {
        window.open(`/api/admin/leads/export?token=${authToken}`);
    };

    // ============================================
    // SETTINGS PAGE
    // ============================================
    async function renderSettings(el) {
        const { data } = await api('/admin/settings');

        el.innerHTML = `
            <div class="card">
                <div class="card-header">
                    <span class="card-title">Site Settings</span>
                    <button class="btn-sm btn-sm-primary" id="save-settings-btn">Save All Settings</button>
                </div>
                <div class="card-body-padded">
                    ${data.map(s => `
                        <div class="admin-form-group">
                            <label>${esc(s.setting_key)} <small style="color:var(--admin-text-muted)">(${esc(s.description || s.setting_type)})</small></label>
                            <input data-key="${esc(s.setting_key)}" value="${esc(s.setting_value || '')}" class="setting-input">
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="card">
                <div class="card-header"><span class="card-title">Change Password</span></div>
                <div class="card-body-padded">
                    <div class="admin-form-group"><label>Current Password</label><input type="password" id="pw-current"></div>
                    <div class="admin-form-group"><label>New Password</label><input type="password" id="pw-new"></div>
                    <button class="btn-sm btn-sm-primary" id="change-pw-btn">Change Password</button>
                </div>
            </div>
        `;

        document.getElementById('save-settings-btn').addEventListener('click', async () => {
            const inputs = document.querySelectorAll('.setting-input');
            const settings = Array.from(inputs).map(input => ({
                key: input.dataset.key,
                value: input.value
            }));
            try {
                await api('/admin/settings', { method: 'PUT', body: JSON.stringify({ settings }) });
                showToast('Settings saved successfully');
            } catch (e) { showToast(e.message, 'error'); }
        });

        document.getElementById('change-pw-btn').addEventListener('click', async () => {
            try {
                await api('/auth/change-password', {
                    method: 'POST', body: JSON.stringify({
                        currentPassword: document.getElementById('pw-current').value,
                        newPassword: document.getElementById('pw-new').value
                    })
                });
                showToast('Password changed');
                document.getElementById('pw-current').value = '';
                document.getElementById('pw-new').value = '';
            } catch (e) { showToast(e.message, 'error'); }
        });
    }

    // ============================================
    // MODAL
    // ============================================
    function showModal(title, body, buttons = []) {
        const existing = document.querySelector('.modal-overlay');
        if (existing) existing.remove();

        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.innerHTML = `
            <div class="modal">
                <div class="modal-header">
                    <span class="modal-title">${title}</span>
                    <button class="modal-close" onclick="window._closeModal()">×</button>
                </div>
                <div class="modal-body">${body}</div>
                ${buttons.length ? `<div class="modal-footer" id="modal-footer"></div>` : ''}
            </div>
        `;
        document.body.appendChild(overlay);

        if (buttons.length) {
            const footer = document.getElementById('modal-footer');
            buttons.forEach(btn => {
                const b = document.createElement('button');
                b.className = btn.class || 'btn-sm btn-sm-primary';
                b.textContent = btn.label;
                b.addEventListener('click', btn.onClick);
                footer.appendChild(b);
            });
        }

        overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
    }

    function closeModal() {
        const overlay = document.querySelector('.modal-overlay');
        if (overlay) overlay.remove();
    }
    window._closeModal = closeModal;

    window._openMediaPicker = async (inputId) => {
        try {
            const { data } = await api('/admin/media');
            const listHtml = data.map(m => `
                <div class="media-picker-item" onclick="window._selectMedia('${inputId}', '/uploads/${m.filename}')" style="cursor:pointer; border:1px solid var(--admin-border); border-radius:8px; overflow:hidden; position:relative; aspect-ratio:16/9; background:#111; display:flex; align-items:center; justify-content:center;">
                    <img src="/uploads/${m.filename}" style="width:100%; height:100%; object-fit:cover;">
                </div>
            `).join('') || '<p style="grid-column:1/-1;text-align:center;padding:24px;color:var(--admin-text-muted)">No media uploaded yet. Please upload files in the Media Library first.</p>';

            const modalBody = `
                <div class="media-picker-grid" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(110px, 1fr)); gap:12px; max-height:350px; overflow-y:auto; padding:8px;">
                    ${listHtml}
                </div>
            `;

            const pickerOverlay = document.createElement('div');
            pickerOverlay.className = 'modal-overlay media-picker-overlay';
            pickerOverlay.style.zIndex = '10000';
            pickerOverlay.style.background = 'rgba(0,0,0,0.6)';
            pickerOverlay.innerHTML = `
                <div class="modal" style="max-width:500px; border: 1px solid var(--admin-border);">
                    <div class="modal-header" style="padding-bottom:12px; border-bottom:1px solid var(--admin-border);">
                        <span class="modal-title">Select Asset</span>
                        <button class="modal-close" onclick="document.querySelector('.media-picker-overlay').remove()">×</button>
                    </div>
                    <div class="modal-body" style="padding-top:16px;">${modalBody}</div>
                </div>
            `;
            document.body.appendChild(pickerOverlay);

            window._selectMedia = (inpId, url) => {
                const inp = document.getElementById(inpId);
                if (inp) inp.value = url;
                pickerOverlay.remove();
                showToast('Asset selected');
            };

            pickerOverlay.addEventListener('click', (e) => { if (e.target === pickerOverlay) pickerOverlay.remove(); });
        } catch (e) {
            showToast('Failed to load media assets', 'error');
        }
    };

    async function renderTracking(el) {
        const { data } = await api('/admin/tracking');

        const platforms = [
            { name: 'Meta (Facebook)', id: data.metaPixelId, capi: data.metaCapiEnabled, icon: 'f' },
            { name: 'TikTok', id: data.tiktokPixelId, capi: data.tiktokApiEnabled, icon: 't' },
            { name: 'Snapchat', id: data.snapchatPixelId, capi: data.snapchatCapiEnabled, icon: 's' },
            { name: 'Google Analytics 4', id: data.ga4MeasurementId, capi: data.ga4MpEnabled, icon: 'G' },
            { name: 'Google Ads', id: data.googleAdsId, capi: false, icon: 'A' },
            { name: 'Google Tag Manager', id: data.gtmContainerId, capi: false, icon: 'M' }
        ];

        el.innerHTML = `
            <div class="card">
                <div class="card-header"><span class="card-title">Pixel & Conversion API Status</span></div>
                <div class="card-body">
                    <div class="tracking-grid" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:20px; padding:20px;">
                        ${platforms.map(p => `
                            <div class="tracking-card" style="background:var(--admin-surface-2); padding:24px; border-radius:12px; border:1px solid var(--admin-border);">
                                <div style="display:flex; align-items:center; gap:16px; margin-bottom:16px;">
                                    <div style="width:40px; height:40px; background:var(--admin-primary); color:#fff; border-radius:8px; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:1.2rem;">${p.icon}</div>
                                    <div>
                                        <h4 style="margin:0; font-weight:700;">${p.name}</h4>
                                        <span style="font-size:0.8rem; color:${p.id ? 'var(--admin-success)' : 'var(--admin-text-muted)'}">${p.id ? 'ID: ' + p.id : 'Missing ID'}</span>
                                    </div>
                                </div>
                                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:20px; padding-top:16px; border-top:1px solid #eee;">
                                    <span style="font-size:0.85rem;">Client-side Pixel</span>
                                    <span class="status status-${p.id ? 'qualified' : 'archived'}">${p.id ? 'Active' : 'Missing'}</span>
                                </div>
                                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:12px;">
                                    <span style="font-size:0.85rem;">Server-side (CAPI/API)</span>
                                    <span class="status status-${p.capi ? 'qualified' : 'archived'}">${p.capi ? 'Connected' : 'Not Set'}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
            
            <div class="card" style="margin-top:24px;">
                <div class="card-header"><span class="card-title">Tracking Implementation Map</span></div>
                <div class="card-body-padded">
                    <p style="color:var(--admin-text-muted); font-size:0.9rem; margin-bottom:20px;">Your website is currently configured with the following data layer events:</p>
                    <ul style="list-style:none; padding:0; display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:12px;">
                        <li style="padding:10px; background:#fff; border-radius:8px; border:1px solid #eee;">✅ PageView (Auto)</li>
                        <li style="padding:10px; background:#fff; border-radius:8px; border:1px solid #eee;">✅ ViewContent (Blog/Services)</li>
                        <li style="padding:10px; background:#fff; border-radius:8px; border:1px solid #eee;">✅ Lead (Form Submit)</li>
                        <li style="padding:10px; background:#fff; border-radius:8px; border:1px solid #eee;">✅ Contact (Click)</li>
                        <li style="padding:10px; background:#fff; border-radius:8px; border:1px solid #eee;">✅ WhatsAppClick</li>
                        <li style="padding:10px; background:#fff; border-radius:8px; border:1px solid #eee;">✅ CalendlyClick</li>
                    </ul>
                </div>
            </div>
        `;
    }

    // ============================================
    // HELPERS
    // ============================================
    function esc(str) {
        if (!str) return '';
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function formatDate(dateStr) {
        if (!dateStr) return '-';
        const d = new Date(dateStr + 'Z');
        return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    }

    function renderPagination(p, loadFn) {
        if (p.totalPages <= 1) return '';
        let html = '<div class="pagination">';
        html += `<button ${p.page <= 1 ? 'disabled' : ''} onclick="this.closest('.pagination').__loadPage(${p.page - 1})">← Prev</button>`;
        for (let i = 1; i <= Math.min(p.totalPages, 7); i++) {
            html += `<button class="${i === p.page ? 'active' : ''}" onclick="this.closest('.pagination').__loadPage(${i})">${i}</button>`;
        }
        html += `<button ${p.page >= p.totalPages ? 'disabled' : ''} onclick="this.closest('.pagination').__loadPage(${p.page + 1})">Next →</button>`;
        html += '</div>';
        // We need a way to call loadFn - attach it after rendering
        setTimeout(() => {
            const pag = document.querySelector('.pagination');
            if (pag) pag.__loadPage = loadFn;
        }, 0);
        return html;
    }

    // ============================================
    // INIT
    // ============================================
    async function init() {
        const isAuth = await checkAuth();
        if (isAuth) {
            showDashboard();
        } else {
            loginScreen.style.display = 'flex';
            dashboard.style.display = 'none';
        }
    }

    async function renderHealth(el) {
        try {
            const { data } = await api('/admin/health');
            el.innerHTML = `
                <div class="health-grid">
                    <div class="card card-body-padded">
                        <div class="card-title">System Uptime</div>
                        <div class="stat-card-value">${Math.floor(data.uptime / 3600)} Hours</div>
                    </div>
                    <div class="card card-body-padded">
                        <div class="card-title">Memory Usage</div>
                        <div class="usage-bar"><div class="usage-fill" style="width: ${((data.totalMem - data.freeMem) / data.totalMem * 100).toFixed(0)}%"></div></div>
                        <div class="stat-card-label">${((data.totalMem - data.freeMem) / 1024 / 1024 / 1024).toFixed(1)}GB / ${(data.totalMem / 1024 / 1024 / 1024).toFixed(1)}GB</div>
                    </div>
                    <div class="card card-body-padded">
                        <div class="card-title">Database Size</div>
                        <div class="stat-card-value">${(data.dbSize / 1024 / 1024).toFixed(2)} MB</div>
                    </div>
                </div>
            `;
        } catch (e) { el.innerHTML = '<p>Error loading health stats</p>'; }
    }

    async function renderMedia(el) {
        el.innerHTML = `
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Media Assets</h3>
                    <div class="actions-group">
                        <input type="file" id="media-upload-input" style="display:none">
                        <button class="btn-sm btn-sm-primary" onclick="document.getElementById('media-upload-input').click()">Upload New</button>
                    </div>
                </div>
                <div class="media-grid" id="media-list">Loading...</div>
            </div>
        `;
        const list = document.getElementById('media-list');
        const input = document.getElementById('media-upload-input');
        input.onchange = async () => {
            const formData = new FormData();
            formData.append('file', input.files[0]);
            await fetch('/api/admin/media/upload', {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${authToken}` },
                body: formData
            });
            renderMedia(el);
        };
        const { data } = await api('/admin/media');
        list.innerHTML = data.map(m => `
            <div class="media-item">
                <img src="/uploads/${m.filename}" loading="lazy">
                <div class="media-overlay">
                    <button class="btn-sm btn-sm-outline" onclick="navigator.clipboard.writeText('/uploads/${m.filename}'); showToast('Path copied!')">URL</button>
                </div>
            </div>
        `).join('') || '<p class="empty-state">No media yet</p>';
    }

    async function renderTestimonials(el) {
        const { data } = await api('/admin/testimonials');
        el.innerHTML = `
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Testimonials</h3>
                    <button class="btn-sm btn-sm-primary" id="add-testimonial">Add New</button>
                </div>
                <div class="card-body-padded">
                    <div class="stats-grid">
                        ${data.map(t => `
                            <div class="card card-body-padded">
                                <strong>${t.client_name}</strong>
                                <div class="stat-card-label">${t.client_role} @ ${t.client_company}</div>
                                <p style="font-size:0.8rem; margin:10px 0">${t.content_ar}</p>
                                <div class="actions-group">
                                    <button class="btn-sm btn-sm-outline">Edit</button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        document.getElementById('add-testimonial').onclick = () => {
            showModal('Add Testimonial', `
                <div class="admin-form-group"><label>Client Name</label><input type="text" id="t-name"></div>
                <div class="admin-form-group"><label>Comment</label><textarea id="t-content"></textarea></div>
            `, [{
                text: 'Save', type: 'primary', onClick: async () => {
                    await api('/admin/testimonials', {
                        method: 'POST', body: {
                            client_name: document.getElementById('t-name').value,
                            content_ar: document.getElementById('t-content').value
                        }
                    });
                    closeModal(); renderTestimonials(el);
                }
            }]);
        };
    }

    async function renderSubscribers(el) {
        const { data } = await api('/admin/subscribers');
        el.innerHTML = `
            <div class="card">
                <div class="card-header"><h3 class="card-title">Newsletter Subscribers</h3></div>
                <div class="table-wrap">
                    <table>
                        <thead><tr><th>Email</th><th>Subscribed On</th></tr></thead>
                        <tbody>
                            ${data.map(s => `<tr><td>${s.email}</td><td>${new Date(s.created_at).toLocaleDateString()}</td></tr>`).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }

    async function renderEditor(el) {
        const { data } = await api('/admin/content-blocks');
        el.innerHTML = `
            <div class="card">
                <div class="card-header"><h3 class="card-title">Site Content Editor</h3></div>
                <div class="card-body-padded">
                    <div class="editor-layout">
                        <div class="editor-pane">
                            <h4>Homepage Hero</h4>
                            <div class="admin-form-group"><label>Title (Arabic)</label><input id="block-hero-title" value="${data.find(b => b.block_key === 'hero_title')?.content_ar || ''}"></div>
                            <button class="btn-sm btn-sm-primary" onclick="window._saveBlock('hero_title')">Save Change</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        window._saveBlock = async (key) => {
            const val = document.getElementById(`block-${key.replace('_', '-')}`).value;
            await api(`/admin/content-blocks/${key}`, { method: 'PUT', body: { content_ar: val } });
            showToast('Saved successfully');
        };
    }

    async function renderLogs(el) {
        const { data } = await api('/admin/activity-logs');
        el.innerHTML = `
            <div class="card">
                <div class="card-header"><h3 class="card-title">Audit Log</h3></div>
                <div class="table-wrap">
                    <table>
                        <thead><tr><th>Admin</th><th>Action</th><th>Target</th><th>IP</th><th>Date</th></tr></thead>
                        <tbody>
                            ${data.map(l => `
                                <tr>
                                    <td>${l.user_name}</td>
                                    <td><span class="log-action action-${l.action}">${l.action}</span></td>
                                    <td>${l.entity_type} (${l.entity_id})</td>
                                    <td><span class="log-ip">${l.ip_address}</span></td>
                                    <td>${new Date(l.created_at).toLocaleString()}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }

    async function renderUsers(el) {
        if (currentUser.role !== 'super_admin') { el.innerHTML = '<p>Access Denied</p>'; return; }
        const { data } = await api('/admin/users');
        el.innerHTML = `
            <div class="card">
                <div class="card-header"><h3 class="card-title">Administrator Accounts</h3></div>
                <div class="table-wrap">
                    <table>
                        <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Last Login</th></tr></thead>
                        <tbody>
                            ${data.map(u => `<tr><td>${u.full_name}</td><td>${u.email}</td><td>${u.role}</td><td>${u.last_login_at || 'Never'}</td></tr>`).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }

    // ============================================
    // INVOICES MANAGER (NEW)
    // ============================================
    async function renderInvoices(el) {
        el.innerHTML = '<div class="loading"><div class="spinner-admin"></div></div>';
        try {
            const { data } = await api('/admin/invoices');

            el.innerHTML = `
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Billing & Invoices</h3>
                        <button class="btn-sm btn-sm-primary" onclick="window.openInvoiceModal()">+ Create Invoice</button>
                    </div>
                    <div class="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>Client Name</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Due Date</th>
                                    <th>Created At</th>
                                    <th style="min-width: 150px;">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${data.length === 0 ? '<tr><td colspan="6" class="text-center" style="padding:30px;">No invoices created yet</td></tr>' : data.map(inv => `
                                <tr>
                                    <td><strong>${inv.client_name}</strong><br><small style="color:var(--admin-text-muted);">${inv.client_email}</small></td>
                                    <td class="en-text" style="font-weight:700;">${inv.currency} ${inv.amount.toLocaleString()}</td>
                                    <td>
                                        <span class="badge ${inv.status === 'paid' ? 'badge-success' : inv.status === 'overdue' ? 'badge-error' : inv.status === 'cancelled' ? 'badge-danger' : 'badge-warning'}">
                                            ${inv.status.toUpperCase()}
                                        </span>
                                    </td>
                                    <td class="en-text">${inv.due_date ? new Date(inv.due_date).toLocaleDateString() : 'N/A'}</td>
                                    <td class="en-text">${new Date(inv.created_at).toLocaleDateString()}</td>
                                    <td>
                                        <button class="btn-sm btn-sm-outline" style="margin-right:8px;" onclick="window.editInvoiceStatus(${inv.id}, '${inv.status}')">Status</button>
                                        <button class="btn-sm btn-sm-danger" onclick="window.deleteInvoice(${inv.id})">Del</button>
                                    </td>
                                </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Create Invoice Modal -->
                <div class="modal-overlay" id="invoice-modal">
                    <div class="modal-content" style="max-width: 500px;">
                        <div class="modal-header">
                            <h3 id="invoice-modal-title">Create New Invoice</h3>
                            <button class="modal-close" onclick="document.getElementById('invoice-modal').classList.remove('active')">&times;</button>
                        </div>
                        <form id="invoice-form" class="modal-body">
                            <input type="hidden" id="invoice-id">
                            <div class="admin-form-group">
                                <label>Client Name *</label>
                                <input type="text" id="inv-client" required>
                            </div>
                            <div class="admin-form-group">
                                <label>Client Email *</label>
                                <input type="email" id="inv-email" required>
                            </div>
                            <div class="admin-form-group" style="display:flex; gap:16px;">
                                <div style="flex:2">
                                    <label>Amount *</label>
                                    <input type="number" id="inv-amount" step="0.01" required>
                                </div>
                                <div style="flex:1">
                                    <label>Currency</label>
                                    <select id="inv-currency">
                                        <option value="USD">USD</option>
                                        <option value="SAR">SAR</option>
                                        <option value="QAR">QAR</option>
                                        <option value="AED">AED</option>
                                    </select>
                                </div>
                            </div>
                            <div class="admin-form-group" style="display:flex; gap:16px;">
                                <div style="flex:1">
                                    <label>Status</label>
                                    <select id="inv-status">
                                        <option value="pending">Pending</option>
                                        <option value="paid">Paid</option>
                                        <option value="overdue">Overdue</option>
                                        <option value="cancelled">Cancelled</option>
                                    </select>
                                </div>
                                <div style="flex:1">
                                    <label>Due Date</label>
                                    <input type="date" id="inv-due">
                                </div>
                            </div>
                            <div style="margin-top: 24px; display:flex; justify-content:flex-end; gap:12px;">
                                <button type="button" class="btn-sm-outline" onclick="document.getElementById('invoice-modal').classList.remove('active')">Cancel</button>
                                <button type="submit" class="btn-primary">Save Invoice</button>
                            </div>
                        </form>
                    </div>
                </div>
            `;

            // Actions
            window.openInvoiceModal = () => {
                document.getElementById('invoice-form').reset();
                document.getElementById('invoice-id').value = '';
                document.getElementById('invoice-modal-title').innerText = 'Create New Invoice';
                document.getElementById('invoice-modal').classList.add('active');
            };

            window.editInvoiceStatus = async (id, currentStatus) => {
                const newStatus = prompt("Update Status manually (pending, paid, overdue, cancelled):", currentStatus);
                if (newStatus && ['pending', 'paid', 'overdue', 'cancelled'].includes(newStatus.toLowerCase())) {
                    try {
                        const inv = data.find(i => i.id === id);
                        await api(`/admin/invoices/${id}`, {
                            method: 'PUT',
                            body: JSON.stringify({ ...inv, status: newStatus.toLowerCase() })
                        });
                        showToast('Status updated successfully');
                        loadPage('invoices');
                    } catch (e) { showToast('Error updating status', true); }
                } else if (newStatus) {
                    showToast('Invalid status entered.', true);
                }
            };

            window.deleteInvoice = async (id) => {
                if (confirm('Are you heavily sure you want to permanently delete this invoice record?')) {
                    try {
                        await api(`/admin/invoices/${id}`, { method: 'DELETE' });
                        showToast('Invoice deleted permanently');
                        loadPage('invoices');
                    } catch (e) { showToast('Error deleting invoice', true); }
                }
            };

            document.getElementById('invoice-form').onsubmit = async (e) => {
                e.preventDefault();
                const btn = e.target.querySelector('button[type="submit"]');
                const prevHtml = btn.innerHTML;
                btn.innerHTML = 'Saving...';
                btn.disabled = true;

                const invoiceId = document.getElementById('invoice-id').value;
                const payload = {
                    client_name: document.getElementById('inv-client').value,
                    client_email: document.getElementById('inv-email').value,
                    amount: parseFloat(document.getElementById('inv-amount').value),
                    currency: document.getElementById('inv-currency').value,
                    status: document.getElementById('inv-status').value,
                    due_date: document.getElementById('inv-due').value
                };

                try {
                    await api(invoiceId ? `/admin/invoices/${invoiceId}` : '/admin/invoices', {
                        method: invoiceId ? 'PUT' : 'POST',
                        body: JSON.stringify(payload)
                    });
                    showToast(invoiceId ? 'Invoice updated!' : 'Invoice created!');
                    document.getElementById('invoice-modal').classList.remove('active');
                    loadPage('invoices');
                } catch (err) {
                    showToast(err.message, true);
                    btn.innerHTML = prevHtml;
                    btn.disabled = false;
                }
            };

        } catch (e) {
            el.innerHTML = '<div class="empty-state">Failed to aggressively load Invoices module.</div>';
        }
    }

    // ============================================
    // SEO MANAGER (NEW)
    // ============================================
    async function renderSEO(el) {
        el.innerHTML = '<div class="loading"><div class="spinner-admin"></div></div>';
        try {
            const { data: metas } = await api('/admin/seo-metadata');
            const { data: redirects } = await api('/admin/redirects');

            el.innerHTML = `
                <div class="card">
                    <div class="card-header" style="border-bottom:none; padding-bottom:0;">
                        <h3 class="card-title">Expert SEO Infrastructure</h3>
                        <div class="admin-tabs" style="margin-top:15px; margin-bottom:0;">
                            <button class="tab-link active" data-tab="meta-tab">Meta Manager</button>
                            <button class="tab-link" data-tab="redirects-tab">301 Redirects</button>
                            <button class="tab-link" data-tab="tools-tab">Indexing Tools</button>
                            <button class="tab-link" data-tab="audit-tab">Growth Audit</button>
                        </div>
                    </div>
                    
                    <!-- TAB 1: META MANAGER -->
                    <div id="meta-tab" class="tab-content active show">
                        <div class="card-header">
                            <h4 class="card-title" style="font-size:0.9rem; color:var(--text-gray);">Manage Indexing & Search Appearance</h4>
                            <button class="btn-sm btn-sm-primary" onclick="window.openSEOModal()">+ NEW META</button>
                        </div>
                        <div class="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Route</th>
                                        <th>Meta Title</th>
                                        <th>Keywords</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${metas.length === 0 ? '<tr><td colspan="4" class="text-center">No meta tags configured.</td></tr>' : metas.map(m => `
                                    <tr>
                                        <td><code class="en-text">${m.page_route}</code></td>
                                        <td><div style="max-width:250px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;"><strong>${m.title || 'Auto'}</strong></div></td>
                                        <td><small>${m.keywords ? m.keywords.split(',').slice(0, 2).join(', ') : 'None'}</small></td>
                                        <td>
                                            <button class="btn-sm btn-sm-outline" onclick='window.editSEO(${JSON.stringify(m).replace(/'/g, "&apos;")})'>Edit</button>
                                            <button class="btn-sm btn-sm-danger" onclick="window.deleteSEO(${m.id})">Del</button>
                                        </td>
                                    </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- TAB 2: REDIRECTS -->
                    <div id="redirects-tab" class="tab-content">
                        <div class="card-header">
                            <h4 class="card-title" style="font-size:0.9rem; color:var(--text-gray);">Canonical 301/302 Redirection Logic</h4>
                            <button class="btn-sm btn-sm-primary" onclick="window.openRedirectModal()">+ ADD REDIRECT</button>
                        </div>
                        <div class="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Source (Old)</th>
                                        <th>Dest (New)</th>
                                        <th>Type</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${redirects.length === 0 ? '<tr><td colspan="4" class="text-center">No active redirects.</td></tr>' : redirects.map(r => `
                                    <tr>
                                        <td><small class="en-text">${r.source_url}</small></td>
                                        <td><small class="en-text" style="color:var(--primary);">${r.destination_url}</small></td>
                                        <td><span class="badge ${r.status_code === 301 ? 'badge-success' : 'badge-warning'}">${r.status_code}</span></td>
                                        <td><button class="btn-sm btn-sm-danger" onclick="window.deleteRedirect(${r.id})">Remove</button></td>
                                    </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- TAB 3: INDEXING TOOLS -->
                    <div id="tools-tab" class="tab-content">
                        <div class="card-body-padded">
                            <div class="grid-2">
                                <div class="info-card" style="padding:20px; background:#f8f9fa; border-radius:10px; border:1px solid #eee;">
                                    <h4 style="margin-bottom:10px;">XML Sitemap generator</h4>
                                    <p style="font-size:0.85rem; color:var(--text-gray); margin-bottom:15px;">Automatically crawl and generate sitemap.xml for Google Search Console.</p>
                                    <button class="btn-sm btn-sm-primary" onclick="window.generateSitemap()">Rebuild sitemap.xml</button>
                                </div>
                                <div class="info-card" style="padding:20px; background:#f8f9fa; border-radius:10px; border:1px solid #eee;">
                                    <h4 style="margin-bottom:10px;">Robots.txt config</h4>
                                    <p style="font-size:0.85rem; color:var(--text-gray); margin-bottom:15px;">Control bot visibility and directory blocking for crawlers.</p>
                                    <a href="/robots.txt" target="_blank" class="btn-sm btn-sm-outline">View Active robots.txt</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- TAB 4: GROWTH AUDIT -->
                    <div id="audit-tab" class="tab-content">
                        <div class="card-body-padded">
                            <p style="margin-bottom:20px;">Use these professional tools to audit your current performance:</p>
                            <div style="display:flex; flex-wrap:wrap; gap:12px;">
                                <a href="https://pagespeed.web.dev/report?url=https://mozahiella.com" target="_blank" class="btn-sm btn-sm-outline">PageSpeed Insights (Core Web Vitals)</a>
                                <a href="https://search.google.com/search-console" target="_blank" class="btn-sm btn-sm-outline">Google Search Console</a>
                                <a href="https://validator.schema.org/" target="_blank" class="btn-sm btn-sm-outline">Schema Markup Validator</a>
                                <a href="https://ahent.ai?analyze=mozahiella.com" target="_blank" class="btn-sm btn-sm-outline">AI competitor Analysis</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- SEO META MODAL -->
                <div class="modal-overlay" id="seo-modal">
                    <div class="modal-content" style="max-width: 600px;">
                        <div class="modal-header"><h3>Meta Configuration</h3><button class="modal-close" onclick="document.getElementById('seo-modal').classList.remove('active')">&times;</button></div>
                        <form id="seo-form" class="modal-body">
                            <input type="hidden" id="seo-id">
                            <div class="admin-form-group"><label>Page Route *</label><input type="text" id="seo-route" required></div>
                            <div class="admin-form-group"><label>Meta Title</label><input type="text" id="seo-title"></div>
                            <div class="admin-form-group"><label>Meta Description</label><textarea id="seo-desc" rows="3"></textarea></div>
                            <div class="admin-form-group"><label>Keywords</label><input type="text" id="seo-keywords"></div>
                            <div class="admin-form-group"><label>OG Image URL</label><input type="text" id="seo-og"></div>
                            <button type="submit" class="btn-primary" style="width:100%; margin-top:15px;">Save Meta</button>
                        </form>
                    </div>
                </div>

                <!-- REDIRECT MODAL -->
                <div class="modal-overlay" id="redirect-modal">
                    <div class="modal-content" style="max-width: 450px;">
                        <div class="modal-header"><h3>Add 301 Redirect</h3><button class="modal-close" onclick="document.getElementById('redirect-modal').classList.remove('active')">&times;</button></div>
                        <form id="redirect-form" class="modal-body">
                            <div class="admin-form-group"><label>Source URL (e.g. /old-page) *</label><input type="text" id="red-source" required></div>
                            <div class="admin-form-group"><label>Destination URL (e.g. /new-page) *</label><input type="text" id="red-dest" required></div>
                            <div class="admin-form-group"><label>Status</label><select id="red-status"><option value="301">301 (Permanent)</option><option value="302">302 (Temporary)</option></select></div>
                            <button type="submit" class="btn-primary" style="width:100%; margin-top:15px;">Activate Redirect</button>
                        </form>
                    </div>
                </div>
            `;

            // Tab logic
            el.querySelectorAll('.tab-link').forEach(link => {
                link.onclick = (e) => {
                    el.querySelectorAll('.tab-link').forEach(l => l.classList.remove('active'));
                    el.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active', 'show'));
                    link.classList.add('active');
                    document.getElementById(link.dataset.tab).classList.add('active', 'show');
                };
            });

            // Meta Logic
            window.openSEOModal = () => { document.getElementById('seo-form').reset(); document.getElementById('seo-id').value = ''; document.getElementById('seo-modal').classList.add('active'); };
            window.editSEO = (m) => {
                document.getElementById('seo-id').value = m.id;
                document.getElementById('seo-route').value = m.page_route;
                document.getElementById('seo-title').value = m.title || '';
                document.getElementById('seo-desc').value = m.description || '';
                document.getElementById('seo-keywords').value = m.keywords || '';
                document.getElementById('seo-og').value = m.og_image || '';
                document.getElementById('seo-modal').classList.add('active');
            };
            window.deleteSEO = async (id) => { if (confirm('Delete Meta?')) { await api(`/admin/seo-metadata/${id}`, { method: 'DELETE' }); loadPage('seo-metadata'); } };
            document.getElementById('seo-form').onsubmit = async (e) => {
                e.preventDefault();
                const metaId = document.getElementById('seo-id').value;
                const payload = { page_route: document.getElementById('seo-route').value, title: document.getElementById('seo-title').value, description: document.getElementById('seo-desc').value, keywords: document.getElementById('seo-keywords').value, og_image: document.getElementById('seo-og').value };
                await api(metaId ? `/admin/seo-metadata/${metaId}` : '/admin/seo-metadata', { method: metaId ? 'PUT' : 'POST', body: JSON.stringify(payload) });
                document.getElementById('seo-modal').classList.remove('active');
                loadPage('seo-metadata');
            };

            // Redirect Logic
            window.openRedirectModal = () => { document.getElementById('redirect-form').reset(); document.getElementById('redirect-modal').classList.add('active'); };
            window.deleteRedirect = async (id) => { if (confirm('Remove Redirect?')) { await api(`/admin/redirects/${id}`, { method: 'DELETE' }); loadPage('seo-metadata'); } };
            document.getElementById('redirect-form').onsubmit = async (e) => {
                e.preventDefault();
                const payload = { source_url: document.getElementById('red-source').value, destination_url: document.getElementById('red-dest').value, status_code: parseInt(document.getElementById('red-status').value) };
                await api('/admin/redirects', { method: 'POST', body: JSON.stringify(payload) });
                document.getElementById('redirect-modal').classList.remove('active');
                loadPage('seo-metadata');
            };

            // Sitemap Logic
            window.generateSitemap = async () => {
                showToast('Crawling database for Sitemap...');
                try {
                    const res = await api('/admin/seo/generate-sitemap', { method: 'POST' });
                    showToast(res.message);
                } catch (e) { showToast('Generation failed', true); }
            };

        } catch (e) {
            console.error(e);
            el.innerHTML = '<div class="empty-state">Critical Error initializing SEO Dashboard. Check Backend logs.</div>';
        }
    }

    // Initialize
    checkAuth();

})();

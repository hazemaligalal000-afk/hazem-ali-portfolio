#!/bin/bash
# ============================================
# Hazem Ali Galal - Production Deployment Script
# ============================================

set -e

USER="root"
IP="${DEPLOY_IP:-91.108.113.135}"
DOMAIN="${DEPLOY_DOMAIN:-}"
APP_DIR="/opt/pshift-mirror"
PORT=3005
NGINX_PORT=8080
SERVICE_NAME="pshift-mirror"

echo "🚀 Deploying Hazem Ali Galal Portfolio to $IP..."

# 1. Build production bundle
echo "[1/6] Preparing production files..."

# Ensure .env exists so tar doesn't fail
if [ ! -f .env ]; then
    echo "   ⚠️ .env not found. Copying from .env.example..."
    cp .env.example .env
fi

tar --exclude='node_modules' \
    --exclude='data/' \
    --exclude='*.sqlite' \
    --exclude='*.sqlite-wal' \
    --exclude='*.sqlite-shm' \
    --exclude='server/logs/*' \
    --exclude='deploy.tar.gz' \
    --exclude='website.tar.gz' \
    --exclude='.git' \
    -czf deploy.tar.gz \
    package.json package-lock.json \
    server/ public/ admin/ \
    .env

echo "   ✅ Bundle created ($(du -h deploy.tar.gz | cut -f1))"

# 2. Upload
echo "[2/6] Uploading to server..."

# Determine Nginx server_name (use Domain if provided, else IP)
SERVER_NAME=$IP
if [ -n "$DOMAIN" ]; then
    SERVER_NAME="$DOMAIN www.$DOMAIN"
fi

# Generate Nginx config locally to handle IP expansion correctly
cat > pshift-mirror.nginx << NGINX_CONF
server {
    listen $NGINX_PORT;
    server_name $SERVER_NAME;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml image/svg+xml;
    gzip_min_length 256;

    # Max upload size
    client_max_body_size 10M;

    # Static files caching
    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg|webp|woff|woff2)\$ {
        proxy_pass http://127.0.0.1:$PORT;
        expires 7d;
        add_header Cache-Control "public, immutable";
    }

    # Proxy to Node.js
    location / {
        proxy_pass http://127.0.0.1:$PORT;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
NGINX_CONF

scp -o StrictHostKeyChecking=no deploy.tar.gz pshift-mirror.nginx $USER@$IP:/tmp/

# 3. Setup server
echo "[3/6] Setting up server..."
ssh -o StrictHostKeyChecking=no $USER@$IP << 'REMOTE_SCRIPT'
    set -e

    # Create app directory
    mkdir -p /opt/pshift-mirror/data
    mkdir -p /opt/pshift-mirror/uploads
    mkdir -p /opt/pshift-mirror/server/logs

    # Extract files
    cd /opt/pshift-mirror
    tar -xzf /tmp/deploy.tar.gz --overwrite
    rm -f /tmp/deploy.tar.gz

    # Update .env for production
    if [ -f .env ]; then
        sed -i 's/NODE_ENV=development/NODE_ENV=production/' .env
    fi

    # Install Node.js if not present
    if ! command -v node &> /dev/null; then
        echo "📦 Installing Node.js 20.x..."
        curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
        apt-get install -y nodejs
    fi

    echo "   Node.js: $(node --version)"
    echo "   npm: $(npm --version)"

    # Install production dependencies
    cd /opt/pshift-mirror
    npm ci --production 2>/dev/null || npm install --omit=dev

    # Run database seeder
    echo "🌱 Refreshing database with expert content..."
    node server/utils/seed.js

    # Install Nginx if not present
    if ! command -v nginx &> /dev/null; then
        echo "📦 Installing Nginx..."
        apt-get update -qq
        apt-get install -y nginx
    fi

    # Configure Nginx reverse proxy
    mv /tmp/pshift-mirror.nginx /etc/nginx/sites-available/pshift-mirror

    ln -sf /etc/nginx/sites-available/pshift-mirror /etc/nginx/sites-enabled/
    # rm -f /etc/nginx/sites-enabled/default  <-- SAVING ALL PORTS/PROJECTS
    nginx -t && systemctl restart nginx

    # Setup systemd service
    cat > /etc/systemd/system/pshift-mirror.service << 'SERVICE'
[Unit]
Description=Hazem Ali Galal - PShift Mirror
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=/opt/pshift-mirror
ExecStart=/usr/bin/node server/app.js
Restart=on-failure
RestartSec=10
Environment=NODE_ENV=production
Environment=PORT=3005
StandardOutput=journal
StandardError=journal
SyslogIdentifier=pshift-mirror

[Install]
WantedBy=multi-user.target
SERVICE

    systemctl daemon-reload
    systemctl enable pshift-mirror
    systemctl restart pshift-mirror

    # Wait a moment and check if service started
    sleep 3
    if systemctl is-active --quiet pshift-mirror; then
        echo "✅ Service is running!"
    else
        echo "❌ Service failed to start. Checking logs..."
        journalctl -u pshift-mirror --no-pager -n 20
    fi

    echo ""
    echo "✅ Server deployment complete!"
REMOTE_SCRIPT

# 4. Verify the deployment
echo "[4/6] Verifying deployment..."
sleep 2

# Check if HTTP responds
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" --connect-timeout 10 http://localhost:3005/ 2>/dev/null || echo "000")
if [ "$HTTP_STATUS" = "200" ] || [ "$HTTP_STATUS" = "304" ]; then
    echo "   ✅ Website responds with HTTP $HTTP_STATUS"
else
    echo "   ⚠️  Website returned HTTP $HTTP_STATUS (might need a moment to start)"
fi

# Check admin
ADMIN_STATUS=$(curl -s -o /dev/null -w "%{http_code}" --connect-timeout 10 http://localhost:3005/admin/ 2>/dev/null || echo "000")
echo "   📊 Admin dashboard: HTTP $ADMIN_STATUS"

# Check API health
API_STATUS=$(curl -s --connect-timeout 10 http://localhost:3005/api/health 2>/dev/null || echo '{"status":"error"}')
echo "   🔗 API Health: $API_STATUS"

# 5. Cleanup
echo "[5/6] Cleaning up..."
rm -f deploy.tar.gz pshift-mirror.nginx

# 6. Summary
echo ""
echo "[6/6] Deployment Summary"
echo "=================================="
echo "✅ Deployment complete!"
echo "🌐 Website: http://$IP:8080"
echo "📊 Admin: http://$IP:8080/admin"
echo "🔗 API: http://$IP:8080/api/health"
echo ""
echo "📝 Admin Credentials:"
echo "   Email: hazemaligalal999@gmail.com"
echo "   Password: HazemAdmin@2026!"
echo ""
echo "🔧 Server Commands:"
echo "   SSH: ssh root@$IP"
echo "   Logs: ssh root@$IP 'journalctl -u pshift-mirror -f'"
echo "   Restart: ssh root@$IP 'systemctl restart pshift-mirror'"
echo "   Status: ssh root@$IP 'systemctl status pshift-mirror'"
echo ""
echo "🔒 Next steps (optional):"
echo "   1. Setup SSL: ssh root@$IP 'apt install certbot python3-certbot-nginx && certbot --nginx'"
echo "   2. Configure email SMTP in /opt/pshift-mirror/.env"
echo "=================================="

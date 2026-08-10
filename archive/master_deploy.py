import pty
import os
import time
import sys

# PASSWORD = "18934971mhaA@"
# IP = "91.108.113.135"

def run_command_with_password(cmd, password, timeout=60):
    pid, fd = pty.fork()
    if pid == 0:
        os.execvp(cmd[0], cmd)
    else:
        output = ""
        start_time = time.time()
        password_sent = False
        while time.time() - start_time < timeout:
            try:
                chunk = os.read(fd, 4096).decode('utf-8', errors='ignore')
                if not chunk: break
                output += chunk
                sys.stdout.write(chunk)
                sys.stdout.flush()
                
                if "password:" in chunk.lower() and not password_sent:
                    os.write(fd, (password + "\n").encode())
                    password_sent = True
            except OSError:
                break
            time.sleep(0.1)
        return output

# 1. Build local bundle
print("Building local bundle...")
os.system("tar --exclude='node_modules' --exclude='data/' --exclude='*.sqlite' --exclude='*.sqlite-wal' --exclude='*.sqlite-shm' --exclude='server/logs/*' -czf deploy.tar.gz package.json package-lock.json server/ public/ admin/ .env")

# 2. Upload bundle
print("Uploading bundle...")
run_command_with_password(['scp', '-o', 'StrictHostKeyChecking=no', 'deploy.tar.gz', 'root@91.108.113.135:/tmp/'], "18934971mhaA@")

# 3. Setup and restart on server
print("Setting up on server...")
setup_script = """
set -e

# Backup DB and Uploads if exist
if [ -d /opt/pshift-mirror/data ]; then
    cp -r /opt/pshift-mirror/data /tmp/data_bak
fi
if [ -d /opt/pshift-mirror/uploads ]; then
    cp -r /opt/pshift-mirror/uploads /tmp/uploads_bak
fi

# Create app directory
mkdir -p /opt/pshift-mirror/server/logs

cd /opt/pshift-mirror
tar -xzf /tmp/deploy.tar.gz --overwrite
rm -f /tmp/deploy.tar.gz

# Restore backups
if [ -d /tmp/data_bak ]; then
    rm -rf /opt/pshift-mirror/data
    cp -r /tmp/data_bak /opt/pshift-mirror/data
    rm -rf /tmp/data_bak
fi
if [ -d /tmp/uploads_bak ]; then
    rm -rf /opt/pshift-mirror/uploads
    cp -r /tmp/uploads_bak /opt/pshift-mirror/uploads
    rm -rf /tmp/uploads_bak
fi

# Install dependencies
npm install --production

# Update .env
sed -i 's/NODE_ENV=development/NODE_ENV=production/' .env
# Ensure port is 3012 in .env
if grep -q "PORT=" .env; then
    sed -i 's/PORT=.*/PORT=3012/' .env
else
    echo "PORT=3012" >> .env
fi

# Create Systemd Service
cat > /etc/systemd/system/pshift-mirror.service << EOF
[Unit]
Description=Hazem Ali Galal - PShift Mirror
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=/opt/pshift-mirror
ExecStart=/usr/bin/node server/app.js
Restart=on-failure
Environment=NODE_ENV=production
Environment=PORT=3012

[Install]
WantedBy=multi-user.target
EOF

# Update Nginx
cat > /etc/nginx/sites-available/pshift-mirror << EOF
server {
    listen 8080;
    server_name 91.108.113.135;

    location / {
        proxy_pass http://127.0.0.1:3012;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \\$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \\$host;
        proxy_set_header X-Real-IP \\$remote_addr;
        proxy_set_header X-Forwarded-For \\$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \\$scheme;
        proxy_cache_bypass \\$http_upgrade;
    }
}
EOF

ln -sf /etc/nginx/sites-available/pshift-mirror /etc/nginx/sites-enabled/
nginx -t
systemctl daemon-reload
systemctl enable pshift-mirror
systemctl restart pshift-mirror
systemctl reload nginx
"""

run_command_with_password(['ssh', '-o', 'StrictHostKeyChecking=no', 'root@91.108.113.135', setup_script], "18934971mhaA@", timeout=300)

print("\n🚀 Deployment Complete!")

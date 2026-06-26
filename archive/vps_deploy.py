import pty
import os
import time
import sys
import subprocess

PASSWORD = '18934971mhaA@'
IP = '91.108.113.135'
USER = 'root'

def run_interactive(cmd_list, password):
    pid, fd = pty.fork()
    if pid == 0:
        os.execvp(cmd_list[0], cmd_list)
    else:
        output = b""
        timeout = 60
        start_time = time.time()
        password_sent = False
        while time.time() - start_time < timeout:
            try:
                chunk = os.read(fd, 4096)
                if not chunk: break
                output += chunk
                
                # Check for password prompt
                if not password_sent and b"password:" in chunk.lower():
                    os.write(fd, (password + "\n").encode())
                    password_sent = True
            except EOFError:
                break
            except OSError:
                break
        
        try:
            os.waitpid(pid, 0)
        except:
            pass
            
        return output.decode('utf-8', errors='ignore')

def main():
    print("🚀 Starting VPS Deployment for PShift Mirror...")
    
    # 1. Build production bundle
    print("[1/4] Preparing production files...")
    build_cmd = [
        "tar", "--exclude='node_modules'", "--exclude='data/'", "--exclude='*.sqlite'",
        "--exclude='*.sqlite-wal'", "--exclude='*.sqlite-shm'", "--exclude='server/logs/*'",
        "--exclude='deploy.tar.gz'", "--exclude='website.tar.gz'", "--exclude='.git'",
        "-czf", "deploy.tar.gz", "package.json", "package-lock.json", "server/", "public/", "admin/", ".env"
    ]
    subprocess.run(" ".join(build_cmd), shell=True, check=True)
    print("   ✅ Bundle created: deploy.tar.gz")

    # 2. Generate Nginx config
    print("[2/4] Generating Nginx config...")
    nginx_conf = f"""
server {{
    listen 8080;
    server_name {IP};

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
    location ~* \\.(css|js|png|jpg|jpeg|gif|ico|svg|webp|woff|woff2)$ {{
        proxy_pass http://127.0.0.1:3005;
        expires 7d;
        add_header Cache-Control "public, immutable";
    }}

    # Proxy to Node.js
    location / {{
        proxy_pass http://127.0.0.1:3005;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }}
}}
"""
    with open("pshift-mirror.nginx", "w") as f:
        f.write(nginx_conf)
    print("   ✅ Nginx config created: pshift-mirror.nginx")

    # 3. Upload files
    print("[3/4] Uploading to server...")
    scp_cmd = ["scp", "-o", "StrictHostKeyChecking=no", "deploy.tar.gz", "pshift-mirror.nginx", f"{USER}@{IP}:/tmp/"]
    out = run_interactive(scp_cmd, PASSWORD)
    print(out)

    # 4. Setup server
    print("[4/4] Setting up server (running remote script)...")
    remote_script = f"""
    set -e
    mkdir -p /opt/pshift-mirror/data
    mkdir -p /opt/pshift-mirror/uploads
    mkdir -p /opt/pshift-mirror/server/logs

    cd /opt/pshift-mirror
    tar -xzf /tmp/deploy.tar.gz --overwrite
    rm -f /tmp/deploy.tar.gz

    # Update .env for production
    if [ -f .env ]; then
        sed -i 's/NODE_ENV=development/NODE_ENV=production/' .env
        sed -i 's/PORT=3000/PORT=3005/' .env
    fi

    # Install production dependencies
    npm ci --production 2>/dev/null || npm install --omit=dev

    # Setup Nginx
    mv /tmp/pshift-mirror.nginx /etc/nginx/sites-available/pshift-mirror
    ln -sf /etc/nginx/sites-available/pshift-mirror /etc/nginx/sites-enabled/
    nginx -t && systemctl restart nginx

    # Setup Systemd Service
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
    
    echo "DEPLOYSCRIPT_FINISHED_SUCCESSFULLY"
"""
    ssh_cmd = ["ssh", "-o", "StrictHostKeyChecking=no", f"{USER}@{IP}", remote_script]
    out = run_interactive(ssh_cmd, PASSWORD)
    print(out)

    if "DEPLOYSCRIPT_FINISHED_SUCCESSFULLY" in out:
        print("\n✅ DEPLOYMENT SUCCESSFUL!")
        print(f"🌐 Website: http://{IP}:8080")
        print(f"📊 Admin: http://{IP}:8080/admin")
    else:
        print("\n❌ DEPLOYMENT FAILED or timed out.")

if __name__ == "__main__":
    main()

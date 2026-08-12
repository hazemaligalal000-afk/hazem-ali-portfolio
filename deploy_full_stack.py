import os
import subprocess
import zipfile
import sys
import fnmatch

try:
    import paramiko
    from scp import SCPClient
except ImportError:
    print("Installing required libraries...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "paramiko", "scp"])
    import paramiko
    from scp import SCPClient

# ==========================================
# إعدادات السيرفر (تذكر استبدال القيم الحقيقية)
# ==========================================
VPS_IP = "76.13.1.133"
VPS_PASSWORD = "18934971mhaA@"
VPS_USER = "root"

REMOTE_DIR = "/var/www/hazem-portfolio"
ZIP_NAME = "portfolio_full_deploy.zip"

def should_exclude(file_path):
    # المجلدات والملفات التي لا نريد رفعها للسيرفر (لتقليل الحجم وتجنب الأخطاء)
    exclude_patterns = [
        '*/node_modules/*',
        '*/.git/*',
        '*/.gemini/*',
        '*/data/*.sqlite', # لا نريد استبدال قاعدة البيانات إذا كانت موجودة
        '*.zip'
    ]
    for pattern in exclude_patterns:
        if fnmatch.fnmatch(file_path.replace('\\', '/'), pattern):
            return True
    return False

def create_zip():
    print("📦 جاري ضغط ملفات المشروع بالكامل (Frontend + Backend)...")
    base_dir = os.getcwd()
    with zipfile.ZipFile(ZIP_NAME, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(base_dir):
            for file in files:
                file_path = os.path.join(root, file)
                if not should_exclude(file_path):
                    arcname = os.path.relpath(file_path, base_dir)
                    zipf.write(file_path, arcname)
    print("✅ تم ضغط الملفات بنجاح.")

def deploy_to_vps():
    print(f"🌐 جاري الاتصال بالسيرفر {VPS_IP}...")
    
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    try:
        ssh.connect(hostname=VPS_IP, username=VPS_USER, password=VPS_PASSWORD, timeout=10)
        print("✅ تم الاتصال بالسيرفر بنجاح!")
        
        # 1. رفع الملف المضغوط
        print("⬆️ جاري رفع ملفات المشروع (قد يستغرق بعض الوقت بناءً على سرعة الإنترنت)...")
        with SCPClient(ssh.get_transport()) as scp:
            scp.put(ZIP_NAME, f"/root/{ZIP_NAME}")
        print("✅ تم رفع الملفات بنجاح.")
        
        # 2. إعداد السيرفر (Node.js, Nginx, PM2)
        print("⚙️ جاري تثبيت وتشغيل السيرفر الخلفي (Node.js & PM2)...")
        commands = [
            # تثبيت Nginx والأدوات
            "apt update -y && apt install nginx unzip curl -y",
            # تثبيت Node.js (V20) إذا لم يكن موجوداً
            "curl -fsSL https://deb.nodesource.com/setup_20.x | bash -",
            "apt-get install -y nodejs",
            # تثبيت PM2 عالمياً
            "npm install -g pm2",
            # فك ضغط المشروع
            f"mkdir -p {REMOTE_DIR}",
            f"unzip -o /root/{ZIP_NAME} -d {REMOTE_DIR}",
            # إعداد الصلاحيات
            f"chown -R www-data:www-data {REMOTE_DIR}",
            f"chmod -R 755 {REMOTE_DIR}",
            # تثبيت حزم المشروع وبدء تشغيله
            f"cd {REMOTE_DIR} && npm install --production",
            f"cd {REMOTE_DIR} && pm2 restart portfolio-app || pm2 start server/app.js --name portfolio-app",
            "pm2 save",
            "pm2 startup systemd -u root --hp /root || true", # جعل السيرفر يعمل مع إعادة التشغيل
            # إعداد Nginx كـ Reverse Proxy بدلاً من تقديم الملفات الثابتة فقط
            "rm -f /etc/nginx/sites-enabled/default",
            f"""cat << 'EOF' > /etc/nginx/sites-available/hazem-portfolio
server {{
    listen 80;
    server_name _;
    
    location / {{
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }}
}}
EOF""",
            "ln -sf /etc/nginx/sites-available/hazem-portfolio /etc/nginx/sites-enabled/",
            "systemctl restart nginx",
            # تنظيف
            f"rm -f /root/{ZIP_NAME}"
        ]
        
        for cmd in commands:
            stdin, stdout, stderr = ssh.exec_command(cmd)
            exit_status = stdout.channel.recv_exit_status()
            if exit_status != 0:
                print(f"⚠️ تحذير أثناء تنفيذ الأمر: {cmd}")
                print(stderr.read().decode())
                
        print("\n🎉 تم رفع وتشغيل النظام بالكامل بنجاح!")
        print(f"🌐 الموقع وسيرفر التتبع (Meta CAPI) يعملان الآن على الرابط: http://{VPS_IP}")
        
    except Exception as e:
        print(f"❌ حدث خطأ أثناء الاتصال أو التنفيذ: {e}")
    finally:
        ssh.close()
        # حذف الملف المضغوط محلياً بعد الانتهاء
        if os.path.exists(ZIP_NAME):
            os.remove(ZIP_NAME)

if __name__ == "__main__":
    create_zip()
    deploy_to_vps()

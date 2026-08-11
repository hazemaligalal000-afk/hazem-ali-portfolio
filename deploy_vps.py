import os
import subprocess
import zipfile
import sys

try:
    import paramiko
    from scp import SCPClient
except ImportError:
    print("Installing required libraries...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "paramiko", "scp"])
    import paramiko
    from scp import SCPClient

# ==========================================
# إعدادات السيرفر (رجاءً استبدل القيم هنا)
# ==========================================
VPS_IP = "<أدخل_رقم_الـ_IP_هنا>"
VPS_PASSWORD = "<أدخل_كلمة_المرور_هنا>"
VPS_USER = "root"

LOCAL_DIR = "public"
REMOTE_DIR = "/var/www/hazem-portfolio"
ZIP_NAME = "portfolio_deploy.zip"

def create_zip():
    print(f"📦 جاري ضغط ملفات مجلد {LOCAL_DIR}...")
    with zipfile.ZipFile(ZIP_NAME, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(LOCAL_DIR):
            for file in files:
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, LOCAL_DIR)
                zipf.write(file_path, arcname)
    print("✅ تم ضغط الملفات بنجاح.")

def deploy_to_vps():
    print(f"🌐 جاري الاتصال بالسيرفر {VPS_IP}...")
    
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    try:
        ssh.connect(hostname=VPS_IP, username=VPS_USER, password=VPS_PASSWORD, timeout=10)
        print("✅ تم الاتصال بالسيرفر بنجاح!")
        
        # رفع الملف
        print("⬆️ جاري رفع الملفات للسيرفر (قد يستغرق بضع ثواني)...")
        with SCPClient(ssh.get_transport()) as scp:
            scp.put(ZIP_NAME, f"/root/{ZIP_NAME}")
        print("✅ تم رفع الملفات بنجاح.")
        
        # إعداد السيرفر و Nginx
        print("⚙️ جاري إعداد Nginx وتجهيز الموقع...")
        commands = [
            "apt update -y && apt install nginx unzip -y",
            f"mkdir -p {REMOTE_DIR}",
            f"unzip -o /root/{ZIP_NAME} -d {REMOTE_DIR}",
            f"chown -R www-data:www-data {REMOTE_DIR}",
            f"chmod -R 755 {REMOTE_DIR}",
            "rm -f /etc/nginx/sites-enabled/default",
            f"""cat << 'EOF' > /etc/nginx/sites-available/hazem-portfolio
server {{
    listen 80;
    server_name _;
    root {REMOTE_DIR};
    index index.html;
    location / {{
        try_files $uri $uri/ =404;
    }}
}}
EOF""",
            "ln -sf /etc/nginx/sites-available/hazem-portfolio /etc/nginx/sites-enabled/",
            "systemctl restart nginx",
            f"rm -f /root/{ZIP_NAME}"
        ]
        
        for cmd in commands:
            stdin, stdout, stderr = ssh.exec_command(cmd)
            exit_status = stdout.channel.recv_exit_status()
            if exit_status != 0:
                print(f"⚠️ تحذير أثناء تنفيذ الأمر: {cmd}")
                print(stderr.read().decode())
                
        print("\n🎉 تم رفع الموقع بنجاح!")
        print(f"🌐 يمكنك الآن زيارة موقعك على الرابط: http://{VPS_IP}")
        
    except Exception as e:
        print(f"❌ حدث خطأ أثناء الاتصال أو التنفيذ: {e}")
    finally:
        ssh.close()
        # حذف الملف المضغوط محلياً بعد الانتهاء
        if os.path.exists(ZIP_NAME):
            os.remove(ZIP_NAME)

if __name__ == "__main__":
    if VPS_IP == "<أدخل_رقم_الـ_IP_هنا>" or VPS_PASSWORD == "<أدخل_كلمة_المرور_هنا>":
        print("❌ خطأ: يرجى تعديل الملف وإدخال الـ IP وكلمة المرور الحقيقية قبل التشغيل.")
    else:
        create_zip()
        deploy_to_vps()

import os
import re

directory = "public"

for filename in os.listdir(directory):
    if filename.endswith(".html"):
        filepath = os.path.join(directory, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Regex to remove the lang-switcher block
        pattern = r'<div class="lang-switcher">\s*<button class="lang-btn active" data-lang="ar">AR</button>\s*<button class="lang-btn" data-lang="en">EN</button>\s*</div>'
        new_content = re.sub(pattern, '', content)
        
        # Alternative in case it's slightly different
        pattern2 = r'<div class="lang-switcher">[\s\S]*?</div>'
        # Wait, pattern2 might delete other divs if not careful. Let's be safer.
        pattern2_safe = r'<div class="lang-switcher">[^<]*<button[^>]*>AR</button>[^<]*<button[^>]*>EN</button>[^<]*</div>'
        new_content = re.sub(pattern2_safe, '', new_content)
        
        # Remove <script src="translator.js"></script>
        new_content = re.sub(r'<script src="translator\.js"></script>\n?', '', new_content)
        
        if content != new_content:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"Removed lang switcher from {filename}")

print("Done")

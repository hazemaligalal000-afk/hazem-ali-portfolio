import re

css_path = "public/Hazem Ai Portfolio/style.css"

with open(css_path, "r", encoding="utf-8") as f:
    css = f.read()

# Update CSS variables for a dark sleek theme
css = css.replace("--bg-main: #f2f5f7;", "--bg-main: #030712;")
css = css.replace("--bg-darker: #ffffff;", "--bg-darker: #0b1121;")
css = css.replace("--text-primary: #231f20;", "--text-primary: #f8fafc;")
css = css.replace("--text-secondary: #4b4f58;", "--text-secondary: #94a3b8;")
css = css.replace("--text-muted: #888888;", "--text-muted: #64748b;")

# Glassmorphism adjustments for dark mode
css = css.replace("--glass-bg: rgba(255, 255, 255, 0.75);", "--glass-bg: rgba(15, 23, 42, 0.75);")
css = css.replace("--glass-bg-hover: rgba(255, 255, 255, 0.9);", "--glass-bg-hover: rgba(30, 41, 59, 0.9);")

# Find background: #fff or background: white and make it dark card background
css = css.replace("background: #fff;", "background: #0f172a;")
css = css.replace("background: white;", "background: #0f172a;")

# Also update the mobile fixed menu background
css = css.replace("background: rgba(255, 255, 255, 0.98);", "background: rgba(15, 23, 42, 0.98);")

# Update glass nav
css = css.replace("background: rgba(255, 255, 255, 0.85);", "background: rgba(3, 7, 18, 0.85);")

with open(css_path, "w", encoding="utf-8") as f:
    f.write(css)

print("Dark theme typography and glassmorphism applied!")

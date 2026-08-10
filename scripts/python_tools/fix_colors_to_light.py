import re

css_path = "public/Hazem Ai Portfolio/style.css"

with open(css_path, "r", encoding="utf-8") as f:
    css = f.read()

# 1. Reset Root variables
css = css.replace("--bg-main: #030712;", "--bg-main: #f2f5f7;")
css = css.replace("--bg-darker: #0b1121;", "--bg-darker: #ffffff;")
css = css.replace("--text-primary: #f8fafc;", "--text-primary: #231f20;")
css = css.replace("--text-secondary: #94a3b8;", "--text-secondary: #4b4f58;")
css = css.replace("--text-muted: #64748b;", "--text-muted: #888888;")

# 2. Glassmorphism adjustments for light mode
css = css.replace("--glass-bg: rgba(15, 23, 42, 0.75);", "--glass-bg: rgba(255, 255, 255, 0.75);")
css = css.replace("--glass-bg-hover: rgba(30, 41, 59, 0.9);", "--glass-bg-hover: rgba(255, 255, 255, 0.9);")

# 3. Card backgrounds
css = css.replace("background: #0f172a;", "background: #fff;")
# Fix specific case for portfolio item added previously
css = css.replace("background: #0f172a !important; /* Dark theme card */", "background: #fff !important;")

# 4. Mobile fixed menu & Glass nav
css = css.replace("background: rgba(15, 23, 42, 0.98);", "background: rgba(255, 255, 255, 0.98);")
css = css.replace("background: rgba(3, 7, 18, 0.85);", "background: rgba(255, 255, 255, 0.85);")

# 5. Reset body background to solid or light mesh
css = css.replace("background-color: #030712 !important;", "background-color: var(--bg-main) !important;")
css = css.replace("background-image: radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px) !important;", "background-image: none !important;")

# 6. Fix Portfolio Meta texts for light mode
css = css.replace("color: #fff !important;", "color: var(--text-primary) !important;")
# However, the motion-overlay icon needs to stay white probably. Let's fix that later if needed.
# .motion-icon has `color: white;` not `!important`. So it's fine.

# 7. Filter tabs reset
css = css.replace("background: rgba(15, 23, 42, 0.5);", "background: rgba(255, 255, 255, 0.02);")
css = css.replace("color: #fff;", "color: var(--text-primary);")
css = css.replace("background: linear-gradient(135deg, #10b981, #059669);", "background: var(--gradient-primary);")
css = css.replace("box-shadow: 0 4px 20px rgba(16, 185, 129, 0.4);", "box-shadow: 0 4px 12px rgba(235, 23, 81, 0.2);")

with open(css_path, "w", encoding="utf-8") as f:
    f.write(css)

print("Light theme restored to match main site!")

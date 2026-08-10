import re

filepath = "public/Hazem Ai Portfolio/style.css"
with open(filepath, "r", encoding="utf-8") as f:
    css = f.read()

# Make body have Miro background
css = re.sub(r'body\s*{[^}]*}', r'''body {
    background-color: #f4f5f9 !important;
    background-image: radial-gradient(#cbd5e1 2px, transparent 2px) !important;
    background-size: 40px 40px !important;
    color: var(--text-primary);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    line-height: 1.6;
    position: relative;
    min-height: 100vh;
}''', css)

# Make sections transparent
css = re.sub(r'\.why-section\s*{[^}]*}', '.why-section { background: transparent !important; }', css)
css = re.sub(r'\.stats-section\s*{[^}]*}', '.stats-section { background: transparent !important; border:none; }', css)
css = re.sub(r'\.brand-bar-section\s*{[^}]*}', '.brand-bar-section { background: transparent !important; border:none; }', css)

# Make cards solid white with shadows and border-top
card_style = """ {
    background: #ffffff !important;
    border: 1px solid #e2e8f0 !important;
    border-top: 5px solid var(--clr-purple) !important;
    border-radius: 12px !important;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05) !important;
    backdrop-filter: none !important;
    transition: all 0.3s ease !important;
}"""

card_hover = """ {
    transform: translateY(-10px) !important;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
    z-index: 10;
}"""

css = re.sub(r'\.glass-card\s*{[^}]*}', '.glass-card' + card_style, css)
css = re.sub(r'\.why-card\s*{[^}]*}', '.why-card' + card_style, css)
css = re.sub(r'\.why-card:hover\s*{[^}]*}', '.why-card:hover' + card_hover, css)

css = re.sub(r'\.method-card\s*{[^}]*}', '.method-card' + card_style, css)
css = re.sub(r'\.method-card:hover\s*{[^}]*}', '.method-card:hover' + card_hover, css)

css = re.sub(r'\.how-card\s*{[^}]*}', '.how-card' + card_style, css)
css = re.sub(r'\.how-card:hover\s*{[^}]*}', '.how-card:hover' + card_hover, css)

css = re.sub(r'\.portfolio-card\s*{[^}]*}', '.portfolio-card' + card_style, css)
css = re.sub(r'\.portfolio-card:hover\s*{[^}]*}', '.portfolio-card:hover' + card_hover, css)

css = re.sub(r'\.contact-card-form\s*{[^}]*}', '.contact-card-form' + card_style, css)

# Navbar solid white
css = re.sub(r'\.glass-nav\s*{[^}]*}', r'''.glass-nav {
    position: fixed; top: 0; left: 0; width: 100%; z-index: 100;
    background: rgba(255, 255, 255, 0.95) !important;
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #e2e8f0;
    transition: var(--transition-smooth);
}''', css)

# Hide ambient glows since it's a miro board
css = css + "\n.ambient-glow { display: none !important; }\n"

# Add Miro specific elements CSS
miro_css = """
/* ---- MIRO STICKY NOTES ---- */
.miro-sticky {
    position: absolute;
    width: 180px; padding: 15px;
    box-shadow: 2px 6px 15px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,255,255,0.5);
    font-family: 'Outfit', 'Almarai', sans-serif; font-size: 0.85rem; font-weight: 700; color: #1e293b;
    z-index: 20; animation: floatNote 6s infinite ease-in-out;
    border-bottom-right-radius: 20px 4px; text-align: left; line-height: 1.5;
    background-image: linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px); background-size: 100% 20px;
}
.miro-sticky::before {
    content: ''; position: absolute; top: -10px; left: 50%; transform: translateX(-50%) rotate(-2deg);
    width: 50px; height: 16px; background: rgba(255,255,255,0.6); box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}
.sticky-y { background-color: #fef08a; }
.sticky-b { background-color: #bae6fd; }
.sticky-p { background-color: #fbcfe8; }
.sticky-g { background-color: #bbf7d0; }

@keyframes floatNote {
    0% { transform: translateY(0px) rotate(calc(var(--r) * 1deg)); }
    50% { transform: translateY(-8px) rotate(calc(var(--r) * 1deg)); }
    100% { transform: translateY(0px) rotate(calc(var(--r) * 1deg)); }
}

/* ---- MIRO CURSORS ---- */
.miro-cursor {
    position: absolute; z-index: 100; pointer-events: none;
    display: flex; align-items: flex-start; gap: 5px;
    filter: drop-shadow(3px 5px 8px rgba(0,0,0,0.2));
}
.miro-cursor svg { width: 24px; height: 24px; }
.miro-cursor-tag {
    font-size: 0.75rem; font-weight: bold; padding: 4px 10px; border-radius: 100px; color: white; white-space: nowrap;
}
.miro-cursor-1 { animation: fly1 20s infinite ease-in-out; }
.miro-cursor-1 svg { fill: #eb1751; }
.miro-cursor-1 .miro-cursor-tag { background: #eb1751; }

.miro-cursor-2 { animation: fly2 25s infinite ease-in-out; }
.miro-cursor-2 svg { fill: #3b82f6; }
.miro-cursor-2 .miro-cursor-tag { background: #3b82f6; }

@keyframes fly1 {
    0% { top: 10%; left: 80%; }
    25% { top: 60%; left: 30%; }
    50% { top: 20%; left: 10%; }
    75% { top: 80%; left: 70%; }
    100% { top: 10%; left: 80%; }
}
@keyframes fly2 {
    0% { top: 70%; left: 10%; }
    30% { top: 20%; left: 60%; }
    60% { top: 60%; left: 40%; }
    100% { top: 70%; left: 10%; }
}

@media (max-width: 768px) {
    .miro-sticky { display: none !important; }
}
"""
css = css + "\n" + miro_css

with open(filepath, "w", encoding="utf-8") as f:
    f.write(css)

print("Miro CSS applied to portfolio style.css")

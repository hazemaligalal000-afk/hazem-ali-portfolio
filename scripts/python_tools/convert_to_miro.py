import re
import os

html_path = "public/Hazem Ai Portfolio/index.html"
css_path = "public/Hazem Ai Portfolio/style.css"

with open(html_path, "r", encoding="utf-8") as f:
    html = f.read()

with open(css_path, "r", encoding="utf-8") as f:
    css = f.read()

# 1. Fix CSS for mobile Miro Stickies
css = css.replace(".miro-sticky { display: none !important; }", """
    .miro-sticky { 
        position: relative !important;
        display: block !important;
        margin: 10px auto !important;
        width: 90% !important;
        top: 0 !important; left: 0 !important; right: 0 !important; bottom: 0 !important;
        transform: none !important;
        animation: none !important;
        font-size: 0.85rem !important;
        box-sizing: border-box;
    }
    .miro-cursor { display: none !important; }
""")

# Also add the miro-board-card CSS
if ".miro-board-card" not in css:
    css += """
/* Miro Full Layout Enhancements */
.miro-board-card {
    background: #fff;
    border-radius: 16px;
    padding: 40px;
    box-shadow: 0 15px 40px rgba(0,0,0,0.06), inset 0 0 0 1px #e2e8f0;
    position: relative;
    z-index: 5;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    margin-bottom: 50px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}
.miro-board-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 50px rgba(0,0,0,0.1);
}
.miro-board-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; height: 6px;
    background: var(--gradient-primary);
    border-radius: 16px 16px 0 0;
}
.miro-board-wrapper {
    padding: 20px;
}
@media (max-width: 768px) {
    .miro-board-card {
        padding: 25px 15px;
        border-radius: 12px;
        margin-bottom: 30px;
    }
    .miro-board-card::before { border-radius: 12px 12px 0 0; }
    .miro-board-wrapper { padding: 10px; }
}
"""

with open(css_path, "w", encoding="utf-8") as f:
    f.write(css)

# 2. Modify HTML to wrap sections in miro-board-card if they aren't already
# We'll target <section id="stats">, <section id="why-hazem">, <section id="growth-method">, <section id="portfolio">
sections = [
    ("why-hazem", "sticky-b", "⚙️ Systems win, not luck.", "-20px", "-20px"),
    ("stats", "sticky-g", "📈 Data doesn't lie.", "auto", "-20px", "-30px", "auto"),
    ("growth-method", "sticky-y", "🧠 The exact blueprint used for $50M+", "-20px", "auto", "auto", "-20px"),
    ("how-it-works", "sticky-p", "⚡ Speed of execution is key.", "auto", "-30px", "-20px", "auto"),
    ("portfolio", "sticky-b", "🚀 Results that speak for themselves.", "-30px", "-20px", "auto", "auto")
]

for sec_id, color, note, top, left, *rest in sections:
    bottom = rest[0] if len(rest) > 0 else "auto"
    right = rest[1] if len(rest) > 1 else "auto"
    
    # We want to find <section id="sec_id" class="..."> and its closing </section>
    # and wrap its inner contents (usually <div class="container">) in a .miro-board-card
    # Actually, wrapping the <div class="container"> inside the section is safest.
    
    pattern = rf'(<section id="{sec_id}"[^>]*>\s*)(<div class="container">)'
    if re.search(pattern, html):
        sticky = f'<div class="miro-sticky {color}" style="top: {top}; left: {left}; bottom: {bottom}; right: {right}; --r: 3; z-index: 20;">{note}</div>'
        html = re.sub(pattern, rf'\1<div class="miro-board-wrapper"><div class="miro-board-card">\n{sticky}\n\2', html)
        
        # Now close the two divs before </section>
        # Find the next </section> after the <section id="{sec_id}"
        # We can just replace the closing tag of this section.
        # But regex for nested HTML is hard. Since the structure is flat per section:
        html = re.sub(rf'(<section id="{sec_id}"[^>]*>.*?</section>)', lambda m: m.group(1).replace('</section>', '</div></div></section>'), html, flags=re.DOTALL)

with open(html_path, "w", encoding="utf-8") as f:
    f.write(html)

print("Miro board styles applied successfully!")

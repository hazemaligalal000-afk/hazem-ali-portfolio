import re

filepath = "public/Hazem Ai Portfolio/index.html"
with open(filepath, "r", encoding="utf-8") as f:
    html = f.read()

# Add flying cursors right after <main>
cursors = """
        <!-- Flying Cursors -->
        <div class="miro-cursor miro-cursor-1">
            <svg viewBox="0 0 320 512"><path d="M302.189 329.126H196.105l55.831 135.993c3.889 9.428-.555 19.999-9.444 23.999l-49.165 21.427c-9.165 4-19.443-.571-23.332-9.714l-53.053-129.136-86.664 89.138C22.279 468.552 0 463.125 0 452.268V35.702C0 24.27 23.333 18.27 31.666 27.127l275.523 280.569c7.778 7.714 2.5 21.43-5 21.43z"/></svg>
            <div class="miro-cursor-tag">Hazem Ali</div>
        </div>
        <div class="miro-cursor miro-cursor-2">
            <svg viewBox="0 0 320 512"><path d="M302.189 329.126H196.105l55.831 135.993c3.889 9.428-.555 19.999-9.444 23.999l-49.165 21.427c-9.165 4-19.443-.571-23.332-9.714l-53.053-129.136-86.664 89.138C22.279 468.552 0 463.125 0 452.268V35.702C0 24.27 23.333 18.27 31.666 27.127l275.523 280.569c7.778 7.714 2.5 21.43-5 21.43z"/></svg>
            <div class="miro-cursor-tag">Client CEO</div>
        </div>
"""

html = html.replace('<main>', '<main>' + cursors)

# Add some sticky notes around the hero section
sticky1 = '<div class="miro-sticky sticky-y" style="top: -20px; left: -20px; --r: -3;">💡 "Scale your brand with zero BS."</div>'
html = html.replace('<div class="hero-content">', f'<div class="hero-content" style="position:relative;">\n{sticky1}\n')

sticky2 = '<div class="miro-sticky sticky-p" style="bottom: -30px; right: -20px; --r: 4;">🔥 "Live dashboards. Total transparency."</div>'
html = html.replace('<div class="hero-stats-panel glass-card">', f'<div class="hero-stats-panel glass-card" style="position:relative;">\n{sticky2}\n')

# Add sticky notes to Why Hazem cards
html = re.sub(
    r'(<div class="why-card">.*?<h4[^>]*>Focus on Profit.*?</h4>)',
    r'\1\n<div class="miro-sticky sticky-g" style="top: -30px; right: -20px; --r: 2;">"Net profit > vanity ROAS"</div>',
    html, flags=re.DOTALL
)

html = re.sub(
    r'(<div class="why-card">.*?<h4[^>]*>Senior Execution.*?</h4>)',
    r'\1\n<div class="miro-sticky sticky-b" style="bottom: -20px; right: -10px; --r: -4;">"No junior account managers"</div>',
    html, flags=re.DOTALL
)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(html)

print("Miro HTML applied.")

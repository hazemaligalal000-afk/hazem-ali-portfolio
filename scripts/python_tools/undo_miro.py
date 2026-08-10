import re
import os

html_path = "public/Hazem Ai Portfolio/index.html"
css_path = "public/Hazem Ai Portfolio/style.css"

with open(html_path, "r", encoding="utf-8") as f:
    html = f.read()

# 1. Remove miro cursors
html = re.sub(r'<div class="miro-cursor.*?</div>\s*</div>', '', html, flags=re.DOTALL)

# 2. Remove miro stickies
html = re.sub(r'<div class="miro-sticky.*?</div>', '', html, flags=re.DOTALL)

# 3. Unwrap miro-board-wrapper and miro-board-card
# The structure was: <div class="miro-board-wrapper"><div class="miro-board-card"> \n <div class="container">
# We can just replace '<div class="miro-board-wrapper"><div class="miro-board-card">' with ''
html = html.replace('<div class="miro-board-wrapper"><div class="miro-board-card">', '')
# And replace '</div></div></section>' with '</section>'
html = html.replace('</div></div></section>', '</section>')

with open(html_path, "w", encoding="utf-8") as f:
    f.write(html)

with open(css_path, "r", encoding="utf-8") as f:
    css = f.read()

# Replace Miro background with a high-tech sleek motion graphic dark/premium background
css = css.replace("background-color: #f4f5f9 !important;", "background-color: #030712 !important;")
css = css.replace("background-image: radial-gradient(#cbd5e1 2px, transparent 2px) !important;", "background-image: radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px) !important;")

with open(css_path, "w", encoding="utf-8") as f:
    f.write(css)

print("Miro board removed, and sleek dark motion-graphic background applied!")

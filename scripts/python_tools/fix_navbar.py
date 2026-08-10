import os
import re

directory = "public"

html_files = [f for f in os.listdir(directory) if f.endswith('.html')]

for filename in html_files:
    filepath = os.path.join(directory, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # We need to find the <ul class="nav-menu" id="nav-menu">...</ul> and the <div style="display:flex;align-items:center;gap:16px;">...</div>
    
    # 1. First, replace the CTA div with a class "nav-actions"
    # This might vary slightly. Let's find the closing </ul> and everything up to <button class="mobile-btn"
    
    # A safer way: Add mobile CTAs inside the </ul>
    mobile_ctas = """
				<li class="mobile-only-cta" style="display:none; margin-top:20px;"><a href="#" class="nav-cta hire-me-trigger" style="background:#0f172a; width:100%; text-align:center; padding:15px; font-size:1.1rem; display:block;">اطلب العمل معي</a></li>
				<li class="mobile-only-cta" style="display:none;"><a href="https://calendly.com/hazemaligalal999/45min" target="_blank" class="nav-cta" style="width:100%; text-align:center; padding:15px; font-size:1.1rem; display:block;">احجز موعد للتواصل</a></li>
			</ul>"""
            
    content = re.sub(r'</ul>', mobile_ctas, content, count=1)
    
    # 2. Add class "desktop-ctas" to the div wrapping the nav-ctas
    # Usually it's <div style="display:flex;align-items:center;gap:16px;">
    # In index.html: <a href="#" class="nav-cta" id="hireMeBtn" ...>
    # Let's replace class="nav-cta" id="hireMeBtn" with class="nav-cta hire-me-trigger"
    content = content.replace('id="hireMeBtn"', 'class="nav-cta hire-me-trigger"')
    # Fix the duplicate class if it happens
    content = content.replace('class="nav-cta" class="nav-cta hire-me-trigger"', 'class="nav-cta hire-me-trigger"')
    
    # Wrap the a tags in a span or div
    content = re.sub(r'(<a[^>]*class="nav-cta[^>]*>.*?</a>)', r'<span class="desktop-cta-item">\1</span>', content, flags=re.DOTALL)
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

print("Navbar updated in all HTML files.")

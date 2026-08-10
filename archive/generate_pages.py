import os

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Shared Nav replacement
nav_old = """			<div class="nav-links" id="nav-links">
				<a href="#home" class="nav-item">الرئيسية</a>
				<a href="#intro" class="nav-item">هدفنا</a>
				<a href="#services" class="nav-item">الخدمات</a>
				<a href="#expertise" class="nav-item">مجالات خبرتي</a>
				<a href="#work" class="nav-item">قصص النجاح</a>
				<a href="#about" class="nav-item">من أنا</a>
			</div>"""

nav_new = """			<div class="nav-links" id="nav-links">
				<a href="index.html" class="nav-item">الرئيسية</a>
				<a href="about.html" class="nav-item">من أنا</a>
				<a href="case-studies.html" class="nav-item">قصص النجاح</a>
				<a href="contact.html" class="nav-item">اتصل بنا</a>
			</div>"""

html = html.replace(nav_old, nav_new)

# Save updated Index
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

# Create About page
about_html = html.replace('<title>Hazem | حازم - خبير التسويق الرقمي</title>', '<title>Hazem | من أنا</title>')
# Remove hero section in About? Wait, lets just keep all sections in Home, but About focuses on intro, expertise, and about
# To keep it simple, we just leave them all but give them a high converting path. Actually, on Pshift, About us has its own header.
# Let's replace the hero section for About:
hero_start = '<!-- Hero Section -->'
hero_end = '</section>'
about_html = about_html.split(hero_start)[0] + """
    <!-- Header Section -->
    <section class="hero" id="home" style="min-height: 40vh; padding: 12rem 0 4rem;">
        <div class="hero-bg-glow"></div>
        <div class="container hero-content">
            <h1 class="fade-up hero-title">طريقك <span class="text-gradient">للنمو</span></h1>
            <p class="hero-subtitle fade-up delay-1">نجاح حقيقي مبني على أسس قوية وأرقام شفافة</p>
        </div>
    </section>
""" + about_html.split(hero_end)[1]
with open('about.html', 'w', encoding='utf-8') as f:
    f.write(about_html)

# Create Case Studies page
case_html = html.replace('<title>Hazem | حازم - خبير التسويق الرقمي</title>', '<title>Hazem | قصص النجاح</title>')
case_html = case_html.split(hero_start)[0] + """
    <!-- Header Section -->
    <section class="hero" id="home" style="min-height: 40vh; padding: 12rem 0 4rem;">
        <div class="hero-bg-glow"></div>
        <div class="container hero-content">
            <h1 class="fade-up hero-title">دراسات <span class="text-gradient">الحالة</span></h1>
            <p class="hero-subtitle fade-up delay-1">أرقام حقيقية أدت إلى نتائج غير مسبوقة لعملائي</p>
        </div>
    </section>
""" + case_html.split(hero_end)[1]
with open('case-studies.html', 'w', encoding='utf-8') as f:
    f.write(case_html)

# Create Contact page
contact_html = html.replace('<title>Hazem | حازم - خبير التسويق الرقمي</title>', '<title>Hazem | تواصل معي</title>')
contact_html = contact_html.split(hero_start)[0] + """
    <!-- Header Section -->
    <section class="hero" id="home" style="min-height: 40vh; padding: 12rem 0 4rem;">
        <div class="hero-bg-glow"></div>
        <div class="container hero-content">
            <h1 class="fade-up hero-title">اتصل <span class="text-gradient">بنا</span></h1>
            <p class="hero-subtitle fade-up delay-1">لنتحدث حول كيفية مضاعفة أرباح علامتك التجارية</p>
        </div>
    </section>
""" + contact_html.split(hero_end)[1]
with open('contact.html', 'w', encoding='utf-8') as f:
    f.write(contact_html)

print("Pages created")

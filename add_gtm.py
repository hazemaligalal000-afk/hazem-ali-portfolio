import glob
import os

gtm_script = """
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-NQ4S5RW8');</script>
    <!-- End Google Tag Manager -->
"""

files = glob.glob('public/**/*.html', recursive=True)

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if "GTM-NQ4S5RW8" not in content and "</head>" in content:
        # Insert just before </head>
        content = content.replace("</head>", f"{gtm_script}</head>")
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Added GTM to {filepath}")
    else:
        print(f"Skipped {filepath} (already contains GTM or no </head>)")

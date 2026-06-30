import glob
import os

gtm_script = """    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18137984256"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'AW-18137984256');
    </script>"""

files = glob.glob('public/**/*.html', recursive=True)

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if "AW-18137984256" not in content and "</head>" in content:
        # Insert just before </head>
        content = content.replace("</head>", f"{gtm_script}\n</head>")
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Added Google tag to {filepath}")
    else:
        print(f"Skipped {filepath} (already contains Google tag or no </head>)")


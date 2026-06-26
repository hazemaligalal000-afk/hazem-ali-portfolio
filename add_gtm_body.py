import glob
import os
import re

gtm_noscript = """
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NQ4S5RW8"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
"""

files = glob.glob('public/**/*.html', recursive=True)

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if "GTM-NQ4S5RW8" in content and "<noscript><iframe" not in content:
        # Find the <body> tag (it might have attributes like <body class="..." >)
        # Using regex to find <body ...> or <body>
        pattern = re.compile(r'(<body[^>]*>)', re.IGNORECASE)
        match = pattern.search(content)
        
        if match:
            # Replace the <body> tag with <body> + the noscript tag
            new_body = f"{match.group(1)}\n{gtm_noscript}"
            content = content[:match.start()] + new_body + content[match.end():]
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Added GTM (noscript) to {filepath}")
        else:
            print(f"Skipped {filepath} (no <body> tag found)")
    else:
        print(f"Skipped {filepath} (already contains noscript or no GTM)")

import os
import glob

files = [
    'public/about.html',
    'public/contact.html',
    'public/blog.html',
    'public/workflow.html',
    'public/case-studies.html',
    'public/Hazem Ai Portfolio/gallery_viewer.html',
    'public/Hazem Ai Portfolio/index.html',
    'public/service-form.html'
]

for f in files:
    with open(f, 'r') as file:
        content = file.read()
    
    if 'whatsapp-widget.js' in content:
        continue
        
    script_path = '../whatsapp-widget.js' if 'Hazem Ai Portfolio' in f else 'whatsapp-widget.js'
    script_tag = f'\n    <script src="{script_path}"></script>\n'
    
    content = content.replace('</body>', f'{script_tag}</body>')
    
    with open(f, 'w') as file:
        file.write(content)
        
print("Injected into all files.")

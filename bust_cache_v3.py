import os
import glob

files = glob.glob('public/**/*.html', recursive=True)

for f in files:
    with open(f, 'r') as file:
        content = file.read()
    
    content = content.replace('whatsapp-widget.js?v=2"', 'whatsapp-widget.js?v=3"')
    content = content.replace('telegram-widget.js?v=2"', 'telegram-widget.js?v=3"')
    content = content.replace('styles.css?v=2"', 'styles.css?v=3"')
    content = content.replace('style.css?v=2"', 'style.css?v=3"')
    
    with open(f, 'w') as file:
        file.write(content)

print("Cache busted to v3")

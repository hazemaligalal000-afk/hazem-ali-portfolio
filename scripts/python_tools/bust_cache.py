import os
import glob
import re

files = glob.glob('public/**/*.html', recursive=True)

for f in files:
    with open(f, 'r') as file:
        content = file.read()
    
    content = content.replace('whatsapp-widget.js"', 'whatsapp-widget.js?v=2"')
    content = content.replace('telegram-widget.js"', 'telegram-widget.js?v=2"')
    content = content.replace('styles.css"', 'styles.css?v=2"')
    content = content.replace('style.css"', 'style.css?v=2"')
    
    with open(f, 'w') as file:
        file.write(content)

print("Cache busted")

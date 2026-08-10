import glob

files = glob.glob('public/**/*.html', recursive=True)

for f in files:
    with open(f, 'r') as file:
        content = file.read()
    
    content = content.replace('whatsapp-widget.js?v=3"', 'whatsapp-widget.js?v=4"')
    content = content.replace('telegram-widget.js?v=3"', 'telegram-widget.js?v=4"')
    
    with open(f, 'w') as file:
        file.write(content)

print("Cache busted to v4")

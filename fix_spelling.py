import glob
import os

files = glob.glob('public/**/*.html', recursive=True)

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if "معرض اعمالي" in content:
        content = content.replace("معرض اعمالي", "معرض أعمالي")
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

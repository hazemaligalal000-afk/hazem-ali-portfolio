import traceback

def replace_between(content, start_str, end_str, replace_with=""):
    start_idx = content.find(start_str)
    end_idx = content.find(end_str)
    if start_idx != -1 and end_idx != -1 and end_idx > start_idx:
        return content[:start_idx] + replace_with + content[end_idx:]
    else:
        print(f"Failed to find {start_str} or {end_str}")
        return content

# 1. Sculpt Contact Page
try:
    with open('contact.html', 'r', encoding='utf-8') as f:
        html = f.read()
    
    html = replace_between(html, '<!-- Intro Section', '<!-- Footer CTA', "")
    with open('contact.html', 'w', encoding='utf-8') as f:
        f.write(html)
except Exception as e:
    traceback.print_exc()

# 2. Sculpt Case Studies Page
try:
    with open('case-studies.html', 'r', encoding='utf-8') as f:
        html = f.read()

    html = replace_between(html, '<!-- Intro Section', '<!-- Case Studies -->', "")
    html = replace_between(html, '<!-- Experts of Pshift', '<!-- Footer CTA', "")
    
    with open('case-studies.html', 'w', encoding='utf-8') as f:
        f.write(html)
except Exception as e:
    traceback.print_exc()

# 3. Sculpt About Page
try:
    with open('about.html', 'r', encoding='utf-8') as f:
        html = f.read()

    html = replace_between(html, '<!-- Intro Section', '<!-- Expertise Areas -->', "")
    html = replace_between(html, '<!-- Case Studies -->', '<!-- Experts of Pshift', "")
    
    # We also have the specific Pshift Note which has the "list li hagmti keema madiya" which might be part of Case studies but let's see. 
    # That note is actually inside 'work' section (Case studies). So deleting Case Studies deletes the note.

    with open('about.html', 'w', encoding='utf-8') as f:
        f.write(html)
except Exception as e:
    traceback.print_exc()

# Let's also make sure index.html doesn't contain active navbar state bugs. 
print("Sculpting done")

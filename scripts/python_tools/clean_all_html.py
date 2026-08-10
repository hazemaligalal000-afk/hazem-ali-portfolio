import os

directory = "public"

def clean_text(text):
    text = text.replace("ـ", "")
    text = text.replace("የ", "ال")
    text = text.replace("თ", "ت")
    text = text.replace("ს", "س")
    text = text.replace("الذا", "هذا")
    text = text.replace("الناك", "هناك")
    text = text.replace("الهذه", "هذه")
    text = text.replace("أيأ", "هي")
    text = text.replace("هيأ", "هي")
    text = text.replace("هوأ", "هو")
    text = text.replace("الحدشة", "الجديدة")
    text = text.replace("همراجعين", "المراجعين")
    text = text.replace("اللاء", "الولاء")
    text = text.replace("زه ", "هذا ")
    text = text.replace("ال Leads", "الـ Leads")
    text = text.replace("ال Conversion", "الـ Conversion")
    text = text.replace("ال ROAS", "الـ ROAS")
    text = text.replace("ال PMax", "الـ PMax")
    text = text.replace("ال B2B", "الـ B2B")
    text = text.replace("ال B2C", "الـ B2C")
    text = text.replace("ال LTV", "الـ LTV")
    text = text.replace("ال CAC", "الـ CAC")
    text = text.replace("ال CEO", "الـ CEO")
    text = text.replace("ال Search", "الـ Search")
    text = text.replace("ال Traffic", "الـ Traffic")
    text = text.replace("ال CPL", "الـ CPL")
    text = text.replace("ال ROI", "الـ ROI")
    text = text.replace("ال AOV", "الـ AOV")
    text = text.replace("ال CRM", "الـ CRM")
    
    # Fix any potential Hebrew chars left behind.
    # Hebrew unicode range: \u0590-\u05FF
    import re
    text = re.sub(r'[\u0590-\u05FF]', '', text)

    return text

for filename in os.listdir(directory):
    if filename.endswith(".html") or filename.endswith(".js"):
        filepath = os.path.join(directory, filename)
        try:
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
            cleaned_content = clean_text(content)
            if content != cleaned_content:
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(cleaned_content)
                print(f"Cleaned {filename}")
        except Exception as e:
            print(f"Error processing {filename}: {e}")

print("Done cleaning all files.")

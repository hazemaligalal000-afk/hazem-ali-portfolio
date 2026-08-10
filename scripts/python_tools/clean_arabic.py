import re

file_path = "public/js/logic-forms-data.js"
with open(file_path, "r", encoding="utf-8") as f:
    text = f.read()

# Remove tatweel (kashida)
text = text.replace("ـ", "")

# Fix bad mapped words
text = text.replace("الذا", "هذا")
text = text.replace("الناك", "هناك")
text = text.replace("الهم", "هم")
text = text.replace("الهي", "هي")
text = text.replace("الهو", "هو")
text = text.replace("الهل", "هل")
text = text.replace("الهدف", "هدف") # Or keep it if it's "الهدف"
text = text.replace("الهذه", "هذه")

# Fix weird characters that showed up
text = text.replace("የ", "ال")
text = text.replace("თ", "ت")
text = text.replace("ს", "س")
text = text.replace("أيأ", "هي")
text = text.replace("هيأ", "هي")
text = text.replace("هوأ", "هو")
text = text.replace("الحدشة", "الجديدة")
text = text.replace("همراجعين", "المراجعين")
text = text.replace("اللاء", "الولاء")
text = text.replace("زه ", "هذا ")

# Fix some spacing issues created by "الـ Leads" when the dash is removed
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

# Fix words starting with 'ال' that shouldn't
text = text.replace("التسويقية", "التسويقية") # wait this is correct
text = text.replace("اليأ", "هي")
text = text.replace("المهم", "المهم")
text = text.replace("هال", "ال")

# Strip out any remaining non-arabic, non-english, non-punctuation characters.
# Arabic: \u0600-\u06FF. Punctuation includes basic ASCII punctuation and arabic comma/question mark.
# Let's not strip aggressively to avoid removing valid symbols, just focus on cleaning known bad things.

with open(file_path, "w", encoding="utf-8") as f:
    f.write(text)

print("Cleaned up remaining artifacts")

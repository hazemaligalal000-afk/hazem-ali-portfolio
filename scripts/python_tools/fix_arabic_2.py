import re

file_path = "public/js/logic-forms-data.js"
with open(file_path, "r", encoding="utf-8") as f:
    text = f.read()

# Valid Arabic words starting with ه
valid_h_words = {
    "هذا", "هذه", "هنا", "هناك", "هو", "هي", "هم", "هن", "هل", 
    "هبوط", "هندسة", "هوية", "هدف", "هوامش", "هاتف", "هدايا", 
    "هائلة", "هجومية", "هيكل", "هيكلة", "هامش", "هاتفية", "هاتفه", 
    "هام", "هاستعداد", "هبة" # wait, هاستعداد is الاستعداد
}
valid_h_words.add("هبة")

def replacer(match):
    word = match.group(1)
    if word in valid_h_words:
        return word
    if word == "هاستعداد":
        return "الاستعداد"
    if word == "هحدشة":
        return "الجديدة"
    if word == "همشكلة":
        return "المشكلة"
    
    # If the word starts with ه and is followed by English letters e.g. هLeads -> الـ Leads
    if re.match(r'^ه[A-Za-z]', word):
        return "الـ " + word[1:]
    
    # Otherwise replace leading ه with ال
    if word.startswith("ه"):
        return "ال" + word[1:]
    
    return word

# Replace words starting with ه
text = re.sub(r'\b(ه\w+)\b', replacer, text)

# Let's fix specific weird ones explicitly
text = text.replace("الحدشة", "الجديدة")
text = text.replace("الاهم", "الأهم")
text = text.replace("الاساس", "الأساس")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(text)

print("Fixed words starting with ه")

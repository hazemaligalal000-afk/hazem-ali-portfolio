import re

file_path = "public/js/logic-forms-data.js"
with open(file_path, "r", encoding="utf-8") as f:
    text = f.read()

# Words
text = text.replace("בתוך", "في")
text = text.replace("אבל", "لكن")
text = text.replace("איך", "كيف")
text = text.replace("רק", "فقط")
text = text.replace("כאן", "هنا")
text = text.replace("לפני", "قبل")
text = text.replace("מעל", "أكثر من")
text = text.replace("יותר", "أكثر")
text = text.replace("חדש", "جديد")

# Prefixes specifically using הـ or בـ etc.
text = text.replace("הـ", "الـ")
text = text.replace("בـ", "بـ")
text = text.replace("לـ", "لـ")
text = text.replace("מـ", "مـ")
text = text.replace("סـ", "سـ")

hebrew_to_arabic = {
    'א': 'أ',
    'ב': 'ب',
    'ג': 'ج',
    'ד': 'د',
    'ה': 'ه', # Default to 'ه' (like في كـلـهـا, هـي). We'll fix common 'ال' errors below.
    'ו': 'و',
    'ז': 'ز',
    'ח': 'ح',
    'ט': 'ط',
    'י': 'ي',
    'כ': 'ك',
    'ל': 'ل',
    'מ': 'م',
    'נ': 'ن',
    'ס': 'س',
    'ע': 'ع',
    'פ': 'ف',
    'צ': 'ص',
    'ק': 'ق',
    'ר': 'ر',
    'ש': 'ش',
    'ת': 'ت',
    'ף': 'ف',
    'ץ': 'ص',
    'ם': 'م',
    'ן': 'ن',
    'ך': 'ك',
}

# Translate characters
new_text = ""
for char in text:
    if char in hebrew_to_arabic:
        new_text += hebrew_to_arabic[char]
    else:
        new_text += char

# Fix 'ه' that should be 'ال'
# Usually 'ה' meaning 'ال' will be followed by an Arabic word, leading to things like 'هموقع', 'همستخدم'.
words_to_fix = [
    ("هموقع", "الموقع"),
    ("هأهم", "الأهم"),
    ("همستخدم", "المستخدم"),
    ("هقاتل", "القاتل"),
    ("هأساس", "الأساس"),
    ("هزوار", "الزوار"),
    ("همبيعات", "المبيعات"),
    ("هبحث", "البحث"),
    ("هشاشة", "الشاشة"),
    ("هصغيرة", "الصغيرة"),
    ("هدفع", "الدفع"),
    ("هيمنة", "الهيمنة"),
    ("هاستثمار", "الاستثمار")
]

for bad, good in words_to_fix:
    new_text = new_text.replace(bad, good)

# Also fix standalone 'ه' which might just be part of 'ال'. e.g. "ה Scaling" -> "ه Scaling" -> "الـ Scaling"
new_text = re.sub(r'\bه ([a-zA-Z])', r'الـ \1', new_text)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_text)

print("Done fixing Hebrew characters in logic-forms-data.js")

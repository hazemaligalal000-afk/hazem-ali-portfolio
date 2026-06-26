import os

css = """
/* Hard Responsive Reset */
html, body {
    overflow-x: hidden !important;
    width: 100%;
    max-width: 100vw;
}

img, video, iframe, canvas, svg {
    max-width: 100%;
    height: auto;
}

* {
    box-sizing: border-box !important;
}

@media (max-width: 768px) {
    p, h1, h2, h3, h4, h5, h6, span, div, a {
        word-wrap: break-word;
        overflow-wrap: break-word;
    }
}
"""

files = ['public/styles.css', 'public/Hazem Ai Portfolio/css/style.css']

for f in files:
    if os.path.exists(f):
        with open(f, 'r') as file:
            content = file.read()
        if "Hard Responsive Reset" not in content:
            with open(f, 'a') as file:
                file.write("\n" + css)
            print(f"Appended responsive fix to {f}")


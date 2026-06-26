import re

with open('styles.css', 'r') as f:
    css = f.read()

# Update colors to exact PShift colors
css = css.replace('--primary: #e91e63;', '--primary: #eb1751;')
css = css.replace('--primary-dark: #c2185b;', '--primary-dark: #b8123e;')
css = css.replace('--text-dark: #222222;', '--text-dark: #231f20;')
css = css.replace('--text-gray: #555555;', '--text-gray: #4b4f58;')
css = css.replace('--bg: #f5f5f5;', '--bg: #f2f5f7;')

# Adjust Hero to be two-column
old_hero_visual = """.hero-visual {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}"""
new_hero_visual = """.hero-visual {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}"""
css = css.replace(old_hero_visual, new_hero_visual)

with open('styles.css', 'w') as f:
    f.write(css)

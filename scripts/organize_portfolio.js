const fs = require('fs');
const path = require('path');

const portfolioDir = path.join(__dirname, '../public/Hazem Ai Portfolio');
const imagesDir = path.join(portfolioDir, 'assets', 'images');
const docsDir = path.join(portfolioDir, 'assets', 'docs');

if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });
if (!fs.existsSync(docsDir)) fs.mkdirSync(docsDir, { recursive: true });

const files = fs.readdirSync(portfolioDir);

const filesToMove = [];
for (const file of files) {
    const stat = fs.statSync(path.join(portfolioDir, file));
    if (stat.isFile()) {
        const ext = path.extname(file).toLowerCase();
        if (['.jpg', '.jpeg', '.png'].includes(ext)) {
            filesToMove.push({ file, destFolder: 'assets/images' });
        } else if (['.pdf'].includes(ext)) {
            filesToMove.push({ file, destFolder: 'assets/docs' });
        }
    }
}

const filesToUpdate = ['index.html', 'gallery_viewer.html', 'portfolio_data.js', 'app.js', 'style.css'];

for (const target of filesToUpdate) {
    const targetPath = path.join(portfolioDir, target);
    if (fs.existsSync(targetPath)) {
        let content = fs.readFileSync(targetPath, 'utf8');
        let modified = false;

        for (const item of filesToMove) {
            const escapedName = item.file.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            // Replace only if not already prefixed with assets/images or assets/docs
            const regex = new RegExp(`(?<!assets\\/(?:images|docs)\\/)${escapedName}`, 'g');
            if (regex.test(content)) {
                content = content.replace(regex, `${item.destFolder}/${item.file}`);
                modified = true;
            }
        }

        if (modified) {
            fs.writeFileSync(targetPath, content);
            console.log(`Updated paths in ${target}`);
        }
    }
}

for (const item of filesToMove) {
    fs.renameSync(
        path.join(portfolioDir, item.file),
        path.join(portfolioDir, item.destFolder, item.file)
    );
    console.log(`Moved ${item.file} to ${item.destFolder}`);
}

console.log('Successfully organized all images and updated code references!');

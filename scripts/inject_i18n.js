const fs = require('fs');
const path = require('path');

const directories = [
    path.join(__dirname, '../public'),
    path.join(__dirname, '../public/Hazem Ai Portfolio')
];

const scriptTag = `<script src="/js/language-detector.js"></script>`;
// In 'Hazem Ai Portfolio' the path to public/js is '../js/language-detector.js'
const scriptTagSub = `<script src="../js/language-detector.js"></script>`;

directories.forEach((dir, index) => {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        if (file.endsWith('.html')) {
            const filePath = path.join(dir, file);
            let content = fs.readFileSync(filePath, 'utf8');
            
            // Check if already injected
            if (!content.includes('language-detector.js')) {
                const tagToInject = index === 0 ? scriptTag : scriptTagSub;
                
                // Inject right before </head>
                if (content.includes('</head>')) {
                    content = content.replace('</head>', `    ${tagToInject}\n</head>`);
                    fs.writeFileSync(filePath, content);
                    console.log(`Injected into ${filePath}`);
                }
            } else {
                console.log(`Already injected in ${filePath}`);
            }
        }
    });
});

console.log('Finished injecting i18n scripts.');

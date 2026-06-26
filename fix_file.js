const fs = require('fs');
let content = fs.readFileSync('public/service-form.html', 'utf-8');

// Find the broken wa.me link
const waIndex = content.indexOf('<a href="https://wa.me/201017173228" target="_blank"');
if (waIndex !== -1) {
    const nextLineStart = content.indexOf('const servicesData = {', waIndex);
    if (nextLineStart !== -1) {
        // Find the end of servicesData
        const fallbackIndex = content.indexOf('const fallbackService = {');
        if (fallbackIndex !== -1) {
            
            const newHTML = `                        <a href="https://wa.me/201017173228" target="_blank"
                            style="color:var(--primary);font-weight:700;">تواصل عبر WhatsApp</a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Hazem Ali Galal. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <!-- Load our advanced logic forms data -->
    <script src="js/logic-forms-data.js"></script>
    <script>
        `;
            
            content = content.substring(0, waIndex) + newHTML + content.substring(fallbackIndex);
            fs.writeFileSync('public/service-form.html', content);
            console.log("File fixed successfully!");
        } else {
            console.log("Could not find fallbackService");
        }
    } else {
        console.log("Could not find servicesData after wa.me");
    }
} else {
    console.log("Could not find wa.me link");
}

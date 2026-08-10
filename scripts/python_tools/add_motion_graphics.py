import re

html_path = "public/Hazem Ai Portfolio/index.html"
css_path = "public/Hazem Ai Portfolio/style.css"

with open(html_path, "r", encoding="utf-8") as f:
    html = f.read()

# Animated SVG 1: Chart for Meta ROAS
svg_chart = """
                        <!-- Animated Motion Graphic: Growth Chart -->
                        <div class="motion-graphic-container">
                            <svg class="motion-chart" viewBox="0 0 400 200">
                                <defs>
                                    <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stop-color="#eb1751" stop-opacity="0.8"/>
                                        <stop offset="100%" stop-color="#eb1751" stop-opacity="0"/>
                                    </linearGradient>
                                </defs>
                                <path class="chart-area" d="M0 200 L0 150 Q50 100 100 130 T200 90 T300 50 T400 20 L400 200 Z" fill="url(#chartGrad)"/>
                                <path class="chart-line" d="M0 150 Q50 100 100 130 T200 90 T300 50 T400 20" fill="none" stroke="#eb1751" stroke-width="4" stroke-linecap="round"/>
                                <circle class="chart-dot dot-1" cx="100" cy="130" r="6" fill="#fff" stroke="#eb1751" stroke-width="3"/>
                                <circle class="chart-dot dot-2" cx="200" cy="90" r="6" fill="#fff" stroke="#eb1751" stroke-width="3"/>
                                <circle class="chart-dot dot-3" cx="300" cy="50" r="6" fill="#fff" stroke="#eb1751" stroke-width="3"/>
                                <circle class="chart-dot dot-4" cx="400" cy="20" r="8" fill="#eb1751" stroke="#fff" stroke-width="3"/>
                                <text class="chart-text" x="380" y="50" font-family="Outfit" font-weight="bold" font-size="18" fill="#c2184d">+350%</text>
                            </svg>
                        </div>
"""

# Animated SVG 2: Funnel for Shopify
svg_funnel = """
                        <!-- Animated Motion Graphic: Conversion Funnel -->
                        <div class="motion-graphic-container">
                            <svg class="motion-funnel" viewBox="0 0 400 200">
                                <g class="funnel-layer layer-1">
                                    <path d="M50 20 L350 20 L300 70 L100 70 Z" fill="#eb1751" opacity="0.3"/>
                                    <text x="200" y="50" text-anchor="middle" font-family="Outfit" font-size="14" font-weight="bold" fill="#231f20">TRAFFIC (100k)</text>
                                </g>
                                <g class="funnel-layer layer-2">
                                    <path d="M100 80 L300 80 L250 130 L150 130 Z" fill="#eb1751" opacity="0.6"/>
                                    <text x="200" y="110" text-anchor="middle" font-family="Outfit" font-size="14" font-weight="bold" fill="#fff">ADD TO CART (8k)</text>
                                </g>
                                <g class="funnel-layer layer-3">
                                    <path d="M150 140 L250 140 L220 190 L180 190 Z" fill="#eb1751" opacity="1"/>
                                    <text x="200" y="170" text-anchor="middle" font-family="Outfit" font-size="14" font-weight="bold" fill="#fff">SALES</text>
                                </g>
                                <circle class="funnel-coin coin-1" cx="200" cy="0" r="5" fill="#f59e0b"/>
                                <circle class="funnel-coin coin-2" cx="190" cy="-20" r="5" fill="#f59e0b"/>
                                <circle class="funnel-coin coin-3" cx="210" cy="-40" r="5" fill="#f59e0b"/>
                            </svg>
                        </div>
"""

html = html.replace('<div class="how-badge-title">Grow your Meta Ad ROAS</div>', '<div class="how-badge-title">Grow your Meta Ad ROAS</div>\n' + svg_chart)
html = html.replace('<div class="how-badge-title">Grow Shopify Sales</div>', '<div class="how-badge-title">Grow Shopify Sales</div>\n' + svg_funnel)

with open(html_path, "w", encoding="utf-8") as f:
    f.write(html)

with open(css_path, "r", encoding="utf-8") as f:
    css = f.read()

# Add CSS for motion graphics
css += """
/* --- INJECTED MOTION GRAPHICS CSS --- */
.motion-graphic-container {
    margin: 25px 0;
    padding: 20px;
    background: #ffffff;
    border-radius: 12px;
    border: 1px solid rgba(235, 23, 81, 0.1);
    box-shadow: inset 0 0 20px rgba(0,0,0,0.02), 0 10px 30px rgba(235, 23, 81, 0.05);
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

/* Chart Animations */
.chart-line {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: drawLine 3s ease-out forwards infinite alternate;
}
.chart-area {
    opacity: 0;
    animation: fadeArea 3s ease-out forwards infinite alternate;
}
.chart-dot {
    opacity: 0;
    transform: scale(0);
    transform-origin: center;
}
.dot-1 { animation: popDot 3s ease-out forwards infinite alternate 0.5s; transform-origin: 100px 130px; }
.dot-2 { animation: popDot 3s ease-out forwards infinite alternate 1.0s; transform-origin: 200px 90px; }
.dot-3 { animation: popDot 3s ease-out forwards infinite alternate 1.5s; transform-origin: 300px 50px; }
.dot-4 { animation: popDot 3s ease-out forwards infinite alternate 2.0s; transform-origin: 400px 20px; }
.chart-text {
    opacity: 0;
    animation: fadeArea 3s ease-out forwards infinite alternate 2.5s;
}

@keyframes drawLine {
    0% { stroke-dashoffset: 1000; }
    50%, 100% { stroke-dashoffset: 0; }
}
@keyframes fadeArea {
    0%, 30% { opacity: 0; }
    50%, 100% { opacity: 1; }
}
@keyframes popDot {
    0%, 30% { opacity: 0; transform: scale(0); }
    40%, 100% { opacity: 1; transform: scale(1); }
}

/* Funnel Animations */
.funnel-layer {
    opacity: 0;
    transform: translateY(-20px);
}
.layer-1 { animation: dropFunnel 4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite; }
.layer-2 { animation: dropFunnel 4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite 0.5s; }
.layer-3 { animation: dropFunnel 4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite 1s; }

.funnel-coin {
    opacity: 0;
}
.coin-1 { animation: dropCoin 4s ease-in forwards infinite 1.5s; }
.coin-2 { animation: dropCoin 4s ease-in forwards infinite 1.7s; }
.coin-3 { animation: dropCoin 4s ease-in forwards infinite 1.9s; }

@keyframes dropFunnel {
    0% { opacity: 0; transform: translateY(-20px); }
    15%, 80% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(20px); }
}
@keyframes dropCoin {
    0% { opacity: 0; transform: translateY(0); }
    10% { opacity: 1; transform: translateY(50px); }
    30%, 80% { opacity: 1; transform: translateY(200px); }
    100% { opacity: 0; transform: translateY(220px); }
}

.motion-chart, .motion-funnel {
    width: 100%;
    max-width: 400px;
    height: auto;
}
"""

with open(css_path, "w", encoding="utf-8") as f:
    f.write(css)

print("Animated infographics added successfully!")

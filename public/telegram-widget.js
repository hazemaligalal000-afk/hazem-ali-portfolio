// telegram-widget.js
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        .tg-widget-container {
            position: fixed;
            bottom: 110px;
            right: 30px; /* Positioned on the right! */
            z-index: 9998;
            font-family: 'Almarai', sans-serif;
            direction: rtl;
        }

        .tg-trigger-btn {
            width: 60px;
            height: 60px;
            background: #2AABEE;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(42, 171, 238, 0.4);
            transition: all 0.3s ease;
            position: relative;
            animation: tgPulse 2.5s infinite;
        }

        .tg-trigger-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 20px rgba(42, 171, 238, 0.6);
        }

        @keyframes tgPulse {
            0% { box-shadow: 0 0 0 0 rgba(42, 171, 238, 0.5); }
            70% { box-shadow: 0 0 0 15px rgba(42, 171, 238, 0); }
            100% { box-shadow: 0 0 0 0 rgba(42, 171, 238, 0); }
        }

        .tg-chat-window {
            position: absolute;
            bottom: 80px;
            right: 0;
            width: 320px;
            background: #ffffff;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
            overflow: hidden;
            display: none;
            transform-origin: bottom right;
            transform: scale(0.9);
            opacity: 0;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .tg-chat-window.active {
            display: flex;
            flex-direction: column;
            transform: scale(1);
            opacity: 1;
        }

        .tg-chat-header {
            background: #2AABEE;
            color: white;
            padding: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .tg-profile-section {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .tg-profile-pic {
            width: 45px;
            height: 45px;
        }

        .tg-profile-pic img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid rgba(255,255,255,0.2);
        }

        .tg-header-info h4 {
            margin: 0;
            font-size: 15px;
            font-weight: 700;
        }

        .tg-header-info p {
            margin: 2px 0 0 0;
            font-size: 12px;
            color: #e0f2f1;
            opacity: 0.9;
        }

        .tg-close-btn {
            background: none;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
            opacity: 0.8;
            transition: 0.2s;
            padding: 0;
        }

        .tg-close-btn:hover {
            opacity: 1;
        }

        .tg-chat-body {
            padding: 20px 15px;
            height: 120px;
            overflow-y: auto;
            background: #f4f4f5;
        }

        .tg-message {
            margin-bottom: 10px;
            display: flex;
        }

        .tg-msg-received .tg-msg-content {
            background: white;
            color: #111b21;
            padding: 10px 14px;
            border-radius: 12px 12px 0 12px;
            font-size: 14px;
            max-width: 90%;
            box-shadow: 0 1px 2px rgba(0,0,0,0.05);
            line-height: 1.5;
        }

        .tg-chat-footer {
            background: white;
            padding: 15px;
            border-top: 1px solid #f0f2f5;
            display: flex;
            justify-content: center;
        }

        .tg-start-chat-btn {
            background: #2AABEE;
            color: white;
            text-decoration: none;
            padding: 12px 20px;
            border-radius: 24px;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 8px;
            width: 100%;
            justify-content: center;
            box-shadow: 0 4px 10px rgba(42, 171, 238, 0.2);
            transition: 0.2s;
            font-size: 14px;
        }

        .tg-start-chat-btn:hover {
            background: #1e9bd8;
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(42, 171, 238, 0.3);
        }

        /* Mobile adjustment */
        @media (max-width: 768px) {
            .tg-widget-container {
                bottom: 100px;
                right: 20px;
            }
            .tg-chat-window {
                right: 0;
                width: min(320px, calc(100vw - 40px));
            }
        }
    `;
    document.head.appendChild(style);

    const isSubdir = window.location.pathname.includes('/Hazem Ai Portfolio/');
    const profilePicPath = isSubdir ? '../profile.png' : 'profile.png';

    const widgetHtml = `
        <div class="tg-chat-window" id="tgChatWindow">
            <div class="tg-chat-header">
                <div class="tg-profile-section">
                    <div class="tg-profile-pic">
                        <img src="${profilePicPath}" alt="Hazem Ali Galal" onerror="this.src='/profile.png'">
                    </div>
                    <div class="tg-header-info">
                        <h4>حازم علي</h4>
                        <p>تواصل معي عبر تليجرام</p>
                    </div>
                </div>
                <button class="tg-close-btn" id="tgCloseBtn">&times;</button>
            </div>
            
            <div class="tg-chat-body">
                <div class="tg-message tg-msg-received">
                    <div class="tg-msg-content">هل تفضل التحدث عبر تليجرام؟ تواصل معي هنا وسأقوم بالرد عليك في أسرع وقت ممكن! ⚡</div>
                </div>
            </div>

            <div class="tg-chat-footer">
                <a href="https://t.me/+201017173228" target="_blank" class="tg-start-chat-btn">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.888-.662 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    بدء محادثة تليجرام
                </a>
            </div>
        </div>

        <div class="tg-trigger-btn" id="tgTriggerBtn">
            <svg viewBox="0 0 24 24" width="34" height="34" fill="white">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.888-.662 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
        </div>
    `;

    const widgetContainer = document.createElement('div');
    widgetContainer.className = 'tg-widget-container';
    widgetContainer.innerHTML = widgetHtml;
    document.body.appendChild(widgetContainer);

    const tgTriggerBtn = document.getElementById('tgTriggerBtn');
    const tgChatWindow = document.getElementById('tgChatWindow');
    const tgCloseBtn = document.getElementById('tgCloseBtn');

    tgTriggerBtn.addEventListener('click', () => {
        if (tgChatWindow.classList.contains('active')) {
            tgChatWindow.classList.remove('active');
            setTimeout(() => {
                tgChatWindow.style.display = 'none';
            }, 300);
        } else {
            tgChatWindow.style.display = 'flex';
            void tgChatWindow.offsetWidth;
            tgChatWindow.classList.add('active');
        }
    });

    tgCloseBtn.addEventListener('click', () => {
        tgChatWindow.classList.remove('active');
        setTimeout(() => {
            tgChatWindow.style.display = 'none';
        }, 300);
    });
});

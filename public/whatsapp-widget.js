// whatsapp-widget.js
document.addEventListener('DOMContentLoaded', () => {
    // Inject CSS
    const style = document.createElement('style');
    style.textContent = `
        /* WhatsApp Widget Styles */
        .wa-widget-container {
            position: fixed;
            bottom: 110px;
            right: 30px;
            z-index: 9999;
            font-family: 'Almarai', sans-serif;
            direction: rtl;
        }

        /* The Trigger Button */
        .wa-trigger-btn {
            width: 60px;
            height: 60px;
            background: #25D366;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
            transition: all 0.3s ease;
            position: relative;
            animation: waPulse 2s infinite;
        }

        .wa-trigger-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
        }

        .wa-badge {
            position: absolute;
            top: -5px;
            right: -5px;
            background: #eb1751;
            color: white;
            font-size: 12px;
            font-weight: bold;
            border-radius: 50%;
            width: 22px;
            height: 22px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid white;
        }

        @keyframes waPulse {
            0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
            70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
            100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }

        /* Chat Window */
        .wa-chat-window {
            position: absolute;
            bottom: 80px;
            right: 0;
            width: 320px;
            background: #efeae2;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
            overflow: hidden;
            display: none;
            transform-origin: bottom right;
            transform: scale(0.9);
            opacity: 0;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .wa-chat-window.active {
            display: flex;
            flex-direction: column;
            transform: scale(1);
            opacity: 1;
        }

        /* Header */
        .wa-chat-header {
            background: #008069;
            color: white;
            padding: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .wa-profile-section {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .wa-profile-pic {
            position: relative;
            width: 45px;
            height: 45px;
        }

        .wa-profile-pic img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid rgba(255,255,255,0.2);
        }

        .wa-online-dot {
            position: absolute;
            bottom: 2px;
            right: 2px;
            width: 10px;
            height: 10px;
            background: #25D366;
            border-radius: 50%;
            border: 2px solid #008069;
        }

        .wa-header-info h4 {
            margin: 0;
            font-size: 15px;
            font-weight: 700;
        }

        .wa-header-info p {
            margin: 2px 0 0 0;
            font-size: 12px;
            color: #e0f2f1;
        }

        .wa-typing {
            font-style: italic;
            color: #4ade80 !important;
        }

        .wa-close-btn {
            background: none;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
            opacity: 0.8;
            transition: 0.2s;
            padding: 0;
        }

        .wa-close-btn:hover {
            opacity: 1;
        }

        /* Body */
        .wa-chat-body {
            padding: 20px 15px;
            height: 200px;
            overflow-y: auto;
            background-image: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png');
            background-size: cover;
        }

        .wa-msg-date {
            text-align: center;
            background: rgba(255,255,255,0.8);
            border-radius: 10px;
            padding: 4px 10px;
            font-size: 11px;
            color: #54656f;
            width: fit-content;
            margin: 0 auto 15px auto;
            box-shadow: 0 1px 1px rgba(0,0,0,0.05);
        }

        .wa-message {
            margin-bottom: 10px;
            display: flex;
        }

        .wa-msg-received .wa-msg-content {
            background: white;
            color: #111b21;
            padding: 8px 12px;
            border-radius: 0 8px 8px 8px;
            font-size: 14px;
            max-width: 85%;
            box-shadow: 0 1px 1px rgba(0,0,0,0.1);
            position: relative;
            line-height: 1.5;
            animation: msgFadeIn 0.3s ease-out forwards;
        }

        .wa-msg-received .wa-msg-content::before {
            content: '';
            position: absolute;
            top: 0;
            right: -8px;
            width: 0;
            height: 0;
            border-top: 0px solid transparent;
            border-left: 8px solid white;
            border-bottom: 8px solid transparent;
        }

        @keyframes msgFadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Footer */
        .wa-chat-footer {
            background: white;
            padding: 15px;
            border-top: 1px solid #f0f2f5;
            display: flex;
            justify-content: center;
        }

        .wa-start-chat-btn {
            background: #25D366;
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
            box-shadow: 0 4px 10px rgba(37, 211, 102, 0.2);
            transition: 0.2s;
            font-size: 14px;
        }

        .wa-start-chat-btn:hover {
            background: #1ebc5a;
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(37, 211, 102, 0.3);
        }

        /* Mobile adjustment */
        @media (max-width: 768px) {
            .wa-widget-container {
                bottom: 100px;
                right: 20px;
            }
            .wa-chat-window {
                right: 0;
                width: min(320px, calc(100vw - 40px));
            }
        }
    `;
    document.head.appendChild(style);

    // Determine correct relative path for profile picture
    const isSubdir = window.location.pathname.includes('/Hazem Ai Portfolio/');
    const profilePicPath = isSubdir ? '../profile.png' : 'profile.png';

    // Inject HTML
    const widgetHtml = `
        <!-- Chat Window -->
        <div class="wa-chat-window" id="waChatWindow">
            <div class="wa-chat-header">
                <div class="wa-profile-section">
                    <div class="wa-profile-pic">
                        <img src="${profilePicPath}" alt="Hazem Ali Galal" onerror="this.src='/profile.png'">
                        <span class="wa-online-dot"></span>
                    </div>
                    <div class="wa-header-info">
                        <h4>حازم علي</h4>
                        <p>شريك نمو رقمي <span id="waTyping" class="wa-typing" style="display:none;">يتم الكتابة...</span></p>
                    </div>
                </div>
                <button class="wa-close-btn" id="waCloseBtn">&times;</button>
            </div>
            
            <div class="wa-chat-body" id="waChatBody">
                <div class="wa-msg-date">اليوم</div>
                <!-- Message 1 -->
                <div class="wa-message wa-msg-received" id="waMsg1" style="display:none;">
                    <div class="wa-msg-content">أهلاً بك 👋</div>
                </div>
                <!-- Message 2 -->
                <div class="wa-message wa-msg-received" id="waMsg2" style="display:none;">
                    <div class="wa-msg-content">أنا حازم، هل لديك أي استفسار حول كيفية مضاعفة أرباح مشروعك من خلال الإعلانات؟ 🚀</div>
                </div>
            </div>

            <div class="wa-chat-footer">
                <a href="https://wa.me/201017173228?text=مرحباً أستاذ حازم، أريد مناقشة استراتيجية نمو لمشروعي..." target="_blank" class="wa-start-chat-btn">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    بدء محادثة واتساب
                </a>
            </div>
        </div>

        <!-- Trigger Button -->
        <div class="wa-trigger-btn" id="waTriggerBtn">
            <span class="wa-badge" id="waBadge">1</span>
            <svg viewBox="0 0 24 24" width="32" height="32" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
        </div>
    `;

    const widgetContainer = document.createElement('div');
    widgetContainer.className = 'wa-widget-container';
    widgetContainer.id = 'waWidget';
    widgetContainer.innerHTML = widgetHtml;
    document.body.appendChild(widgetContainer);

    // Logic
    const waTriggerBtn = document.getElementById('waTriggerBtn');
    const waChatWindow = document.getElementById('waChatWindow');
    const waCloseBtn = document.getElementById('waCloseBtn');
    const waBadge = document.getElementById('waBadge');
    const waTyping = document.getElementById('waTyping');
    const waMsg1 = document.getElementById('waMsg1');
    const waMsg2 = document.getElementById('waMsg2');
    const waChatBody = document.getElementById('waChatBody');
    
    let chatOpened = false;

    function openChat() {
        waChatWindow.style.display = 'flex';
        // trigger reflow
        void waChatWindow.offsetWidth;
        waChatWindow.classList.add('active');
        waBadge.style.display = 'none';

        if (!chatOpened) {
            chatOpened = true;
            
            setTimeout(() => {
                waTyping.style.display = 'inline';
            }, 500);

            setTimeout(() => {
                waTyping.style.display = 'none';
                waMsg1.style.display = 'flex';
                waChatBody.scrollTop = waChatBody.scrollHeight;
                
                setTimeout(() => {
                    waTyping.style.display = 'inline';
                }, 300);

            }, 1500);

            setTimeout(() => {
                waTyping.style.display = 'none';
                waMsg2.style.display = 'flex';
                waChatBody.scrollTop = waChatBody.scrollHeight;
            }, 3500);
        }
    }

    function closeChat() {
        waChatWindow.classList.remove('active');
        setTimeout(() => {
            waChatWindow.style.display = 'none';
        }, 300);
    }

    waTriggerBtn.addEventListener('click', () => {
        if (waChatWindow.classList.contains('active')) {
            closeChat();
        } else {
            openChat();
        }
    });

    waCloseBtn.addEventListener('click', closeChat);
});

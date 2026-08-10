
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'GT-TBV3M4R5');
    

        const fallbackService = {
            title: "خدمة أخرى",
            questions: [
                { id: "q1", label: "1. يرجى توضيح نوع الخدمة التي تبحث عنها:", type: "text" },
                { id: "q2", condition: (ans) => ans.q1, label: "2. ما هي ميزانيتك المقدرة؟", type: "text" },
                { id: "q3", condition: (ans) => ans.q2, label: "3. متى ترغب بالبدء؟", type: "radio", options: ["الآن", "لاحقاً"] }
            ]
        };

        document.addEventListener("DOMContentLoaded", () => {
            const urlParams = new URLSearchParams(window.location.search);
            let currentService = urlParams.get('service');

            const serviceInfo = servicesData[currentService] || fallbackService;
            document.getElementById('serviceBadge').innerText = serviceInfo.title;

            const container = document.getElementById('dynamicQuestionsContainer');
            let answers = {};
            let globalDelay = 0.4;
            let currentQuestionIndex = -1;

            // Form Submit Logic
            const form = document.getElementById('dynamicServiceForm');
            const submitBtn = document.querySelector('.submit-btn');

            form.addEventListener('submit', async (e) => {
                e.preventDefault();

                // Advanced filtering logic:
                const isUnqualified = checkUnqualified(answers);

                // Start loading state
                const originalBtnText = submitBtn.innerHTML;
                submitBtn.innerHTML = 'جاري المعالجة...';
                submitBtn.style.opacity = '0.7';
                submitBtn.style.pointerEvents = 'none';
                submitBtn.disabled = true;

                // Prepare Data
                const formData = new FormData();
                formData.append("_subject", `طلب خدمة جديد: ${serviceInfo.title} من ${document.getElementById('fullName').value}`);
                formData.append("Service Selected", serviceInfo.title);

                const inputs = form.querySelectorAll('input, select, textarea');
                inputs.forEach(el => {
                    if (el.name && el.name !== "_subject" && el.name !== "Service Selected" && el.value) {
                        formData.append(el.name, el.value);
                    }
                });

                for (const [key, value] of Object.entries(answers)) {
                    let qText = key;
                    serviceInfo.questions.forEach(q => {
                        if (q.id === key) qText = q.label;
                    });
                    formData.append(qText, value);
                }

                formData.append("Qualified", isUnqualified ? "No" : "Yes");

                try {
                    // Send to Formspree for email notification
                    fetch('https://formspree.io/f/mdalpolb', {
                        method: 'POST',
                        body: formData,
                        headers: { 'Accept': 'application/json' }
                    }).catch(err => console.error('Formspree Error:', err));

                    // Save to backend database (primary)
                    const urlParams = new URLSearchParams(window.location.search);
                    const response = await fetch('/api/leads', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            fullName: document.getElementById('fullName').value,
                            email: document.getElementById('email').value,
                            budget: document.getElementById('budget').value,
                            serviceType: serviceInfo.title,
                            qualificationStatus: isUnqualified ? 'unqualified' : 'qualified',
                            answers: answers,
                            utmSource: urlParams.get('utm_source'),
                            utmMedium: urlParams.get('utm_medium'),
                            utmCampaign: urlParams.get('utm_campaign')
                        })
                    });

                    if (response.ok) {
                        // Success Logic
                        form.style.display = 'none';
                        const successMsg = document.getElementById('successMessage');

                        let successHtml = '';

                        if (isUnqualified) {
                            successHtml = `
                                <h2>شكراً لاهتمامك</h2>
                                <p style="margin-top:15px; color:var(--text-light); line-height:1.7;">
                                    بناءً على إجاباتك السابقة واحتياجاتك الحالية، يبدو أنك في مرحلة مهمة من بناء الأساسيات لعلامتك التجارية.
                                    حالياً أقبل عدداً محدوداً جداً من الشركاء الجاهزين للتوسع السريع (Scaling) بميزانيات محددة.
                                    <br><br>أنصح بالتواصل لاحقاً عندما يكون الأساس أوجه لمرحلة التوسع !
                                </p>
                                <a href="index.html" class="btn btn-primary" style="margin-top: 25px;">العودة للرئيسية</a>
                                <div id="portfolio-after-submit" style="margin-top:50px; text-align:right;">
                                    <h3 style="margin-bottom:20px; font-size:1.6rem; color:var(--text-dark);">نماذج أعمال وقصص نجاح قد تهمك:</h3>
                                    <div id="portfolio-loader" style="color:var(--text-light); font-size:0.9rem;">جاري تحميل نماذج الأعمال...</div>
                                    <div id="portfolio-grid" class="cases-grid" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:20px; text-align:right;"></div>
                                </div>
                            `;
                        } else {
                            successHtml = `
                                <h2>تم استلام طلبك بنجاح!</h2>
                                <p style="margin-top:15px; color:var(--text-light); line-height:1.7;">
                                    أنت مؤهل! جاري تحويلك الآن لجدولة مكالمة الاستشارة...
                                </p>
                                <div style="margin: 20px auto; width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid var(--primary); border-radius: 50%; animation: spin 1s linear infinite;"></div>
                                <style>@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }</style>
                            `;
                        }

                        successMsg.innerHTML = successHtml;
                        successMsg.style.display = 'block';
                        window.scrollTo({ top: 0, behavior: 'smooth' });

                        if (!isUnqualified) {
                            setTimeout(() => {
                                window.location.href = "https://calendly.com/hazemaligalal999/45min";
                            }, 1500);
                        } else {
                            // Asynchronously load the case studies
                            try {
                                const csRes = await fetch('/api/case-studies');
                                if (csRes.ok) {
                                    const csData = await csRes.json();
                                    const cases = csData.data || [];
                                    const relevantCases = cases.slice(0, 3);
                                    const grid = document.getElementById('portfolio-grid');
                                    document.getElementById('portfolio-loader').style.display = 'none';

                                    if (relevantCases.length > 0) {
                                        grid.innerHTML = relevantCases.map((c, i) => `
                                            <div class="case-card" style="opacity:1; transform:translateY(0); text-align:right; border:1px solid #eee; border-radius:12px; overflow:hidden; background:#fff; box-shadow:0 4px 15px rgba(0,0,0,0.05);">
                                                <div class="case-thumb case-bg-${(i % 3) + 1}" style="height:150px; padding:16px; background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);">
                                                    <span class="case-tag" style="background:rgba(255,255,255,0.2); color:#fff; padding:4px 10px; border-radius:20px; font-size:0.8rem;">${c.industry || 'Business'}</span>
                                                </div>
                                                <div class="case-body" style="padding:20px;">
                                                    <h4 style="font-size:1.1rem; font-weight:800; margin-bottom:10px; color:var(--text-dark);">${c.title_ar}</h4>
                                                    <p style="font-size:0.85rem; color:var(--text-gray); margin-bottom:15px; line-height:1.6;">${c.description_ar}</p>
                                                </div>
                                            </div>
                                        `).join('');
                                    } else {
                                        grid.innerHTML = '<p style="color:var(--text-light);">لا توجد نماذج أعمال متوفرة حالياً.</p>';
                                    }
                                }
                            } catch (e) { console.error('Error loading portfolio:', e); }
                        }

                    } else {
                        // Fallback in case of backend error
                        const errorRes = await response.json().catch(() => ({}));
                        const errMsg = errorRes.error || "عذراً، حدث خطأ أثناء إرسال البيانات. يرجى المحاولة مرة أخرى لاحقاً.";
                        
                        const errorDiv = document.createElement('div');
                        errorDiv.style.cssText = "background: #fee2e2; color: #b91c1c; padding: 15px; border-radius: 8px; margin-bottom: 20px; font-weight: bold; border: 1px solid #f87171;";
                        errorDiv.innerText = errMsg;
                        
                        const oldErr = form.querySelector('.error-banner');
                        if (oldErr) oldErr.remove();
                        errorDiv.className = 'error-banner';
                        form.prepend(errorDiv);
                        
                        window.scrollTo({ top: form.offsetTop - 100, behavior: 'smooth' });
                    }
                } catch (error) {
                    console.error("Submission Error", error);
                    const errorDiv = document.createElement('div');
                    errorDiv.style.cssText = "background: #fee2e2; color: #b91c1c; padding: 15px; border-radius: 8px; margin-bottom: 20px; font-weight: bold; border: 1px solid #f87171;";
                    errorDiv.innerText = "عذراً، حدث خطأ أثناء الاتصال بالخادم. يرجى التحقق من اتصالك بالإنترنت والمحاولة مجدداً.";
                    
                    const oldErr = form.querySelector('.error-banner');
                    if (oldErr) oldErr.remove();
                    errorDiv.className = 'error-banner';
                    form.prepend(errorDiv);
                    
                    window.scrollTo({ top: form.offsetTop - 100, behavior: 'smooth' });
                } finally {
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.style.opacity = '1';
                    submitBtn.style.pointerEvents = 'auto';
                    submitBtn.disabled = false;
                }
            });

            function checkUnqualified(ans) {
                // If the user answers explicitly that they are just looking, no budget, etc.
                const unqualifiedKeywords = ['لا أملك بيانات', 'ميزانيتي محدودة جداً', 'أبحث عن نتائج سريعة خلال أيام فقط', 'أنا فقط أستكشف', 'أنا فقط أجمع أسعاراً ومعلومات للمستقبل', 'أقل من $500', 'أقل من $1,000'];
                for (let key in ans) {
                    if (typeof ans[key] === 'string' && unqualifiedKeywords.some(kw => ans[key].includes(kw))) {
                        return true;
                    }
                }
                return false;
            }

            function renderNextQuestion() {
                // Determine next relevant question
                let nextQ = null;
                for (let i = 0; i < serviceInfo.questions.length; i++) {
                    const qElem = document.getElementById(`wrap_${serviceInfo.questions[i].id}`);
                    if (!qElem) {
                        // Check condition
                        const q = serviceInfo.questions[i];
                        if (!q.condition || q.condition(answers)) {
                            nextQ = q;
                            break;
                        }
                    }
                }

                if (nextQ) {
                    createQuestionElement(nextQ);
                    submitBtn.style.display = 'none'; // Ensure hide if more questions
                } else {
                    // Check if all answered / no more conditional questions
                    submitBtn.style.display = 'flex';
                    submitBtn.style.animation = 'formFadeIn 0.5s ease forwards';
                }
            }

            function handleAnswer(qId, val) {
                answers[qId] = val;

                // Remove all subsequent questions beyond the current one to allow re-evaluation 
                Array.from(container.children).forEach(child => {
                    const childQId = child.id.replace('wrap_', '');
                    const currentIndex = serviceInfo.questions.findIndex(q => q.id === qId);
                    const childIndex = serviceInfo.questions.findIndex(q => q.id === childQId);

                    if (childIndex > currentIndex) {
                        child.remove();
                        delete answers[childQId];
                    }
                });

                // Display expert insight if available
                const qObj = serviceInfo.questions.find(q => q.id === qId);
                const currentWrap = document.getElementById(`wrap_${qId}`);
                if (qObj && qObj.insights && qObj.insights[val] && currentWrap) {
                    // Remove existing insight box if any
                    const existingInsight = currentWrap.querySelector('.insight-box');
                    if (existingInsight) existingInsight.remove();

                    // Create new insight box
                    const insightDiv = document.createElement('div');
                    insightDiv.className = 'insight-box';
                    insightDiv.innerHTML = `<strong><span class="native-emoji">💡</span> رؤية وخبرة حازم في هذا الجانب:</strong>${qObj.insights[val]}`;
                    currentWrap.appendChild(insightDiv);
                }

                renderNextQuestion();
            }

            // Close custom dropdowns when clicking outside
            document.addEventListener('click', () => {
                document.querySelectorAll('.custom-dropdown-list.open').forEach(l => l.classList.remove('open'));
                document.querySelectorAll('.custom-dropdown-btn.open').forEach(b => b.classList.remove('open'));
                document.querySelectorAll('.form-group').forEach(g => g.style.zIndex = '1');
            });

            function createQuestionElement(q) {
                const groupWrap = document.createElement('div');
                groupWrap.className = 'form-group';
                groupWrap.id = `wrap_${q.id}`;
                // small delay for smooth entry
                groupWrap.style.animationDelay = `0.1s`;

                const label = document.createElement('label');
                label.innerText = q.label;
                groupWrap.appendChild(label);

                if (q.type === 'text') {
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.className = 'form-control';
                    input.name = q.label; // use label so formspree emails are readable
                    input.required = true;
                    if (q.placeholder) input.placeholder = q.placeholder;

                    input.addEventListener('input', (e) => {
                        if (e.target.value.trim().length >= 3) {
                            // Instant progression without debounce
                            handleAnswer(q.id, e.target.value);
                            e.target.style.borderColor = "var(--primary)";
                        }
                    });
                    groupWrap.appendChild(input);
                }
                else if (q.type === 'select') {
                    // Custom dropdown to avoid native select overflowing off-screen on RTL mobile
                    const hiddenInput = document.createElement('input');
                    hiddenInput.type = 'hidden';
                    hiddenInput.name = q.label;
                    hiddenInput.required = true;

                    const dropWrap = document.createElement('div');
                    dropWrap.className = 'custom-dropdown';

                    const btn = document.createElement('button');
                    btn.type = 'button';
                    btn.className = 'custom-dropdown-btn placeholder';
                    btn.innerHTML = `<span class="dd-text">اختر الإجابة المناسبة...</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>`;

                    const list = document.createElement('div');
                    list.className = 'custom-dropdown-list';

                    q.options.forEach(opt => {
                        const item = document.createElement('div');
                        item.className = 'custom-dropdown-item';
                        item.textContent = opt;
                        item.addEventListener('click', () => {
                            // Update button
                            btn.querySelector('.dd-text').textContent = opt;
                            btn.classList.remove('placeholder');
                            btn.classList.remove('open');
                            list.classList.remove('open');
                            // Reset z-indexes
                            document.querySelectorAll('.form-group').forEach(g => g.style.zIndex = '1');
                            // Mark selected
                            list.querySelectorAll('.custom-dropdown-item').forEach(i => i.classList.remove('selected'));
                            item.classList.add('selected');
                            // Set hidden value & trigger
                            hiddenInput.value = opt;
                            handleAnswer(q.id, opt);
                            btn.style.borderColor = 'var(--primary)';
                        });
                        list.appendChild(item);
                    });

                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const isOpen = list.classList.contains('open');
                        // Close all other open dropdowns
                        document.querySelectorAll('.custom-dropdown-list.open').forEach(l => l.classList.remove('open'));
                        document.querySelectorAll('.custom-dropdown-btn.open').forEach(b => b.classList.remove('open'));
                        // Reset all form groups z-index to base
                        document.querySelectorAll('.form-group').forEach(g => g.style.zIndex = '1');

                        if (!isOpen) {
                            list.classList.add('open');
                            btn.classList.add('open');
                            // Elevate this specific question's z-index so the dropdown goes over subsequent questions
                            groupWrap.style.zIndex = '9999';
                        }
                    });

                    dropWrap.appendChild(btn);
                    dropWrap.appendChild(list);
                    groupWrap.appendChild(dropWrap);
                    groupWrap.appendChild(hiddenInput);
                }
                else if (q.type === 'radio') {
                    const radioGroup = document.createElement('div');
                    radioGroup.className = 'radio-group';
                    // Responsive layout handled entirely by CSS .radio-group class (no inline overrides)

                    q.options.forEach((opt, idx) => {
                        const labelElem = document.createElement('label');
                        labelElem.className = 'radio-option';
                        // Styles handled by CSS .radio-option class

                        const radio = document.createElement('input');
                        radio.type = 'radio';
                        radio.name = q.label;
                        radio.value = opt;
                        radio.required = true;

                        radio.addEventListener('change', (e) => {
                            if (e.target.checked) {
                                // Add subtle style to selected parent
                                Array.from(radioGroup.children).forEach(l => l.style.borderColor = "var(--border-color)");
                                labelElem.style.borderColor = "var(--primary)";
                                handleAnswer(q.id, e.target.value);
                            }
                        });

                        labelElem.appendChild(radio);
                        labelElem.append(" " + opt);
                        radioGroup.appendChild(labelElem);
                    });
                    groupWrap.appendChild(radioGroup);
                }
                else if (q.type === 'checkbox') {
                    const checkGroup = document.createElement('div');
                    checkGroup.className = 'checkbox-group';

                    q.options.forEach((opt, idx) => {
                        const labelElem = document.createElement('label');
                        labelElem.className = 'checkbox-option';

                        const check = document.createElement('input');
                        check.type = 'checkbox';
                        check.name = q.id;
                        check.value = opt;

                        check.addEventListener('change', () => {
                            const checkedVals = Array.from(checkGroup.querySelectorAll('input:checked')).map(cb => cb.value);
                            labelElem.style.borderColor = check.checked ? "var(--primary)" : "var(--border-color)";

                            if (checkedVals.length > 0) {
                                // clear previous debounce
                                clearTimeout(checkGroup.timeout);
                                checkGroup.timeout = setTimeout(() => {
                                    handleAnswer(q.id, checkedVals.join(', '));
                                }, 800); // 800ms wait after last check
                            } else {
                                // If none checked, maybe remove next?
                                handleAnswer(q.id, "");
                            }
                        });

                        labelElem.appendChild(check);
                        labelElem.append(" " + opt);
                        checkGroup.appendChild(labelElem);
                    });

                    // Add a hint for checkboxes
                    const hintElem = document.createElement('small');
                    hintElem.innerText = "(يمكنك اختيار أكثر من إجابة، وسيظهر السؤال التالي بمجرد التحديد)";
                    hintElem.style.display = "block";
                    hintElem.style.marginTop = "10px";
                    hintElem.style.color = "var(--text-light)";
                    hintElem.style.opacity = "0.7";
                    groupWrap.appendChild(checkGroup);
                    groupWrap.appendChild(hintElem);
                }

                container.appendChild(groupWrap);

                // Focus newly added text input smoothly
                if (q.type === 'text') {
                    setTimeout(() => groupWrap.querySelector('input').focus(), 300);
                }
            }

            // Basic form logic vars (cleaned up)

            // Show first logic question immediately alongside basic info
            setTimeout(() => {
                renderNextQuestion();
            }, 600);

        });
    
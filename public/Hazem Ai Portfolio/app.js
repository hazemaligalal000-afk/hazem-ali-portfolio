// ==========================================================================
// PORTFOLIO WEBSITE CLIENT-SIDE ENGINE
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    // State management
    let activeCategory = "all";
    let filteredGridItems = [];
    let currentLightboxIndex = 0;
    let currentPdfSlideIndex = 0;

    // Filter out pdf slides from main grid
    const mainGridData = portfolioData.filter(item => item.category !== 'pdf');
    const pdfSlidesData = portfolioData.filter(item => item.category === 'pdf');

    // DOM Elements
    const portfolioGrid = document.getElementById("portfolioGrid");
    const filterTabs = document.getElementById("filterTabs");
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    
    // Lightbox DOM Elements
    const lightboxModal = document.getElementById("lightboxModal");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxZoomBtn = document.getElementById("lightboxZoomBtn");
    const lightboxClose = document.getElementById("lightboxClose");
    const lightboxPrev = document.getElementById("lightboxPrev");
    const lightboxNext = document.getElementById("lightboxNext");
    const lightboxCategory = document.getElementById("lightboxCategory");
    const lightboxTitle = document.getElementById("lightboxTitle");
    const lightboxMetrics = document.getElementById("lightboxMetrics");
    const lightboxDesc = document.getElementById("lightboxDesc");
    const lightboxTakeaway = document.getElementById("lightboxTakeaway");

    // PDF Slides DOM Elements
    const pdfSlideImg = document.getElementById("pdfSlideImg");
    const pdfSlideTitle = document.getElementById("pdfSlideTitle");
    const pdfSlideBadge = document.getElementById("pdfSlideBadge");
    const pdfSlideDesc = document.getElementById("pdfSlideDesc");
    const pdfSlideTakeaway = document.getElementById("pdfSlideTakeaway");
    const pdfCurrentPage = document.getElementById("pdfCurrentPage");
    const pdfPrev = document.getElementById("pdfPrev");
    const pdfNext = document.getElementById("pdfNext");
    const pdfThumbnails = document.getElementById("pdfThumbnails");

    // Case Studies DOM Elements
    const csContentBox = document.getElementById("csContentBox");
    const csNavButtons = document.querySelectorAll(".cs-nav-btn");

    // ==========================================================================
    // MOBILE MENU
    // ==========================================================================
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        menuToggle.classList.toggle("active");
        
        // Hamburger animation
        const bars = menuToggle.querySelectorAll(".bar");
        if (navMenu.classList.contains("active")) {
            bars[0].style.transform = "rotate(-45deg) translate(-5px, 6px)";
            bars[1].style.opacity = "0";
            bars[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
        } else {
            bars[0].style.transform = "none";
            bars[1].style.opacity = "1";
            bars[2].style.transform = "none";
        }
    });

    // Close menu on nav link click
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            const bars = menuToggle.querySelectorAll(".bar");
            bars[0].style.transform = "none";
            bars[1].style.opacity = "1";
            bars[2].style.transform = "none";
        });
    });

    // ==========================================================================
    // PORTFOLIO GRID RENDERING & FILTERING
    // ==========================================================================
    function renderGrid(filter) {
        portfolioGrid.innerHTML = "";
        
        // Filter items
        filteredGridItems = filter === "all" 
            ? mainGridData 
            : mainGridData.filter(item => item.category === filter);

        if (filteredGridItems.length === 0) {
            portfolioGrid.innerHTML = `<div class="no-results text-center" style="grid-column: 1/-1; padding: 3rem;">No campaigns found in this category.</div>`;
            return;
        }

        // Render card elements
        filteredGridItems.forEach((item, index) => {
            const card = document.createElement("div");
            card.className = "portfolio-item glass-card";
            card.setAttribute("data-cat", item.category);
            card.style.animation = `fadeUp 0.6s ease-out forwards ${index * 0.1}s`;
            card.innerHTML = `
                <div class="portfolio-thumbnail motion-thumb">
                    <img src="${item.src}" alt="${item.title}" loading="lazy">
                    <div class="motion-overlay">
                        <span class="motion-icon">🔍</span>
                    </div>
                </div>
                <div class="portfolio-meta">
                    <div>
                        <span class="item-badge motion-badge">${getCategoryName(item.category)}</span>
                        <h3 class="item-title">${item.title}</h3>
                    </div>
                    <div class="item-metrics motion-metrics">${item.metrics}</div>
                </div>
            `;
            
            card.addEventListener("click", () => openLightbox(index));
            portfolioGrid.appendChild(card);
        });
    }

    function getCategoryName(cat) {
        const mapping = {
            "google": "Google Ads",
            "meta": "Meta Ads",
            "snapchat-tiktok": "Snapchat & TikTok",
            "stores": "Salla & Zid Storefront",
            "organic-analytics": "SEO & GA4 Analytics",
            "overall-stats": "Aggregated Scale"
        };
        return mapping[cat] || cat;
    }

    // Filter Tabs click handler
    filterTabs.addEventListener("click", (e) => {
        if (!e.target.classList.contains("filter-tab")) return;
        
        // Remove active class from all tabs
        filterTabs.querySelectorAll(".filter-tab").forEach(tab => tab.classList.remove("active"));
        
        // Add active class to clicked tab
        e.target.classList.add("active");
        
        activeCategory = e.target.getAttribute("data-filter");
        renderGrid(activeCategory);
    });

    // ==========================================================================
    // LIGHTBOX MODAL FUNCTIONALITY
    // ==========================================================================
    function openLightbox(index) {
        currentLightboxIndex = index;
        updateLightboxContent();
        lightboxModal.classList.add("active");
        document.body.style.overflow = "hidden"; // Disable body scroll
    }

    function closeLightbox() {
        lightboxModal.classList.remove("active");
        document.body.style.overflow = ""; // Re-enable body scroll
    }

    function updateLightboxContent() {
        const item = filteredGridItems[currentLightboxIndex];
        if (!item) return;

        lightboxImg.src = item.src;
        lightboxImg.alt = item.title;
        if (lightboxZoomBtn) {
            lightboxZoomBtn.href = item.src;
        }
        lightboxCategory.textContent = getCategoryName(item.category);
        
        // Color mapping for category badge
        let badgeColor = "var(--clr-purple)";
        if(item.category === "google") badgeColor = "var(--clr-blue)";
        if(item.category === "snapchat-tiktok") badgeColor = "var(--clr-cyan)";
        if(item.category === "stores") badgeColor = "var(--clr-orange)";
        if(item.category === "organic-analytics") badgeColor = "var(--clr-green)";
        lightboxCategory.style.color = badgeColor;

        lightboxTitle.textContent = item.title;
        lightboxMetrics.textContent = item.metrics;
        lightboxDesc.textContent = item.description;
        lightboxTakeaway.textContent = item.takeaway;
    }

    function nextLightboxItem() {
        currentLightboxIndex = (currentLightboxIndex + 1) % filteredGridItems.length;
        updateLightboxContent();
    }

    function prevLightboxItem() {
        currentLightboxIndex = (currentLightboxIndex - 1 + filteredGridItems.length) % filteredGridItems.length;
        updateLightboxContent();
    }

    // Lightbox Event Listeners
    lightboxClose.addEventListener("click", closeLightbox);
    lightboxNext.addEventListener("click", nextLightboxItem);
    lightboxPrev.addEventListener("click", prevLightboxItem);
    
    // Close lightbox on click outside content
    lightboxModal.addEventListener("click", (e) => {
        if (e.target === lightboxModal) {
            closeLightbox();
        }
    });

    // Keyboard navigation in lightbox
    document.addEventListener("keydown", (e) => {
        if (!lightboxModal.classList.contains("active")) return;
        
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowRight") nextLightboxItem();
        if (e.key === "ArrowLeft") prevLightboxItem();
    });

    // ==========================================================================
    // INTERACTIVE PDF SLIDES SHOWCASE
    // ==========================================================================
    function initPdfViewer() {
        renderPdfThumbnails();
        updatePdfSlide();
    }

    function renderPdfThumbnails() {
        pdfThumbnails.innerHTML = "";
        pdfSlidesData.forEach((slide, index) => {
            const thumb = document.createElement("div");
            thumb.className = `pdf-thumb ${index === currentPdfSlideIndex ? 'active' : ''}`;
            thumb.innerHTML = `<img src="${slide.src}" alt="Slide thumbnail ${index + 1}">`;
            
            thumb.addEventListener("click", () => {
                currentPdfSlideIndex = index;
                updatePdfSlide();
            });
            pdfThumbnails.appendChild(thumb);
        });
    }

    function updatePdfSlide() {
        const slide = pdfSlidesData[currentPdfSlideIndex];
        if (!slide) return;

        pdfSlideImg.src = slide.src;
        pdfSlideImg.alt = slide.title;
        pdfSlideTitle.textContent = slide.title;
        pdfSlideBadge.textContent = slide.metrics;
        pdfSlideDesc.textContent = slide.description;
        pdfSlideTakeaway.textContent = slide.takeaway;
        pdfCurrentPage.textContent = currentPdfSlideIndex + 1;

        // Highlight active thumbnail
        const thumbs = pdfThumbnails.querySelectorAll(".pdf-thumb");
        thumbs.forEach((t, i) => {
            if (i === currentPdfSlideIndex) {
                t.classList.add("active");
                // Scroll thumbnail into view smoothly
                t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            } else {
                t.classList.remove("active");
            }
        });
    }

    pdfPrev.addEventListener("click", () => {
        currentPdfSlideIndex = (currentPdfSlideIndex - 1 + pdfSlidesData.length) % pdfSlidesData.length;
        updatePdfSlide();
    });

    pdfNext.addEventListener("click", () => {
        currentPdfSlideIndex = (currentPdfSlideIndex + 1) % pdfSlidesData.length;
        updatePdfSlide();
    });

    // ==========================================================================
    // CLIENT DEEP-DIVES CASE STUDIES
    // ==========================================================================
    const caseStudies = {
        "kesraa": {
            title: "Kesraa Oud Brand: Scaling Performance in the Saudi Luxury Sector",
            challenge: "Positioning a luxury fragrance brand in a highly saturated GCC retail sector while maintaining high profitability thresholds (ROAS > 4.5x) and brand equity.",
            execution: "Created a granular testing matrix utilizing Snapchat Story Ads and vertical, packaging-focused UGC video hooks. Unified storefront pathways on Zid with direct checkouts using one-click Apple Pay, resolving checkout dropoffs.",
            results: "Generated 510,517 SAR monthly sales from 1,770 completed orders, yielding a verified 5.99x ROAS on Snapchat Ads campaigns.",
            metrics: [
                { val: "510,517 SAR", lbl: "Monthly Net Sales" },
                { val: "5.99x", lbl: "Snapchat Ads ROAS" },
                { val: "1,770", lbl: "Completed Orders" }
            ]
        },
        "shopify": {
            title: "Shopify Global Storefront Scaling Sprint (US, UK, Canada)",
            challenge: "Safely driving high-velocity traffic spikes through advertising campaigns without suffering storefront bottlenecks, checkout errors, or payment failures.",
            execution: "Configured multi-tier bidding structures on Meta Ads (CBO) and Google Ads PMax, optimized mobile conversion pathways, and integrated dynamic global payment processing networks.",
            results: "Successfully scaled storefront operations to process £3.02M GBP in sales in a 7-day marketing push, maintaining a solid 1.86% overall conversion rate.",
            metrics: [
                { val: "£3.02M GBP", lbl: "7-Day Sales Volume" },
                { val: "1.86%", lbl: "E-comm Conversion Rate" },
                { val: "24,000+", lbl: "Global Orders Dispatched" }
            ]
        },
        "google-pmax": {
            title: "Google Ads Performance Max & Search Optimization",
            challenge: "Scaling high-intent search acquisition volume during the competitive Q4 retail window while preventing bidding inflation.",
            execution: "Segmented Google PMax campaigns with custom feed labels. Implemented strict negative keyword silos to safeguard brand search terms. Tuned Smart Bidding algorithm strategies to hit target conversion values.",
            results: "Secured 124,198 SAR in sales from 12,126 SAR ad spend, representing a 10.24x ROAS on winter-season campaigns.",
            metrics: [
                { val: "10.24x", lbl: "Google Search/Shopping ROAS" },
                { val: "124,198 SAR", lbl: "Realized Sales Value" },
                { val: "12,126 SAR", lbl: "Managed Spend" }
            ]
        }
    };

    function renderCaseStudy(key) {
        const cs = caseStudies[key];
        if (!cs) return;

        // Render widgets sidebar
        let widgetsHtml = "";
        cs.metrics.forEach(m => {
            widgetsHtml += `
                <div class="cs-metric-widget glass-card">
                    <div class="cs-metric-num">${m.val}</div>
                    <div class="cs-metric-lbl">${m.lbl}</div>
                </div>
            `;
        });

        csContentBox.innerHTML = `
            <div class="cs-grid">
                <div class="cs-main">
                    <h3>${cs.title}</h3>
                    
                    <div class="cs-section">
                        <h4>The Growth Challenge</h4>
                        <p>${cs.challenge}</p>
                    </div>
                    
                    <div class="cs-section">
                        <h4>Strategy & Execution</h4>
                        <p>${cs.execution}</p>
                    </div>
                    
                    <div class="cs-section">
                        <h4>Results & Net Returns</h4>
                        <p>${cs.results}</p>
                    </div>
                </div>
                <div class="cs-sidebar">
                    ${widgetsHtml}
                </div>
            </div>
        `;
    }

    // Case study navigation clicks
    csNavButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            csNavButtons.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            
            const key = e.target.getAttribute("data-cs");
            renderCaseStudy(key);
        });
    });

    // ==========================================================================
    // STATS COUNT-UP ANIMATION
    // ==========================================================================
    function initStatsCounter() {
        const statsSection = document.getElementById("stats");
        const counters = document.querySelectorAll(".count-up");
        let animated = false;

        const countUp = (counter) => {
            const target = +counter.getAttribute("data-target");
            const speed = 100; // lower is faster
            let count = 0;

            const updateCount = () => {
                const inc = target / speed;
                count += inc;
                
                if (count < target) {
                    counter.innerText = Math.floor(count);
                    setTimeout(updateCount, 15);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    counters.forEach(counter => countUp(counter));
                    animated = true;
                }
            });
        }, { threshold: 0.15 });

        if (statsSection) observer.observe(statsSection);
    }

    // ==========================================================================
    // ACTIVE NAVIGATION LINKS HIGHLIGHTS ON SCROLL
    // ==========================================================================
    function initActiveNavHighlight() {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".nav-link");

        window.addEventListener("scroll", () => {
            let current = "";
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - 120) {
                    current = section.getAttribute("id");
                }
            });

            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${current}`) {
                    link.classList.add("active");
                }
            });
        });
    }

    // ==========================================================================
    // INITIALIZATION CALLS
    // ==========================================================================
    renderGrid("all");
    initPdfViewer();
    renderCaseStudy("kesraa");
    initStatsCounter();
    initActiveNavHighlight();

    // ==========================================================================
    // MULTI-STEP DISCOVERY FORM (ONBOARDING WIZARD)
    // ==========================================================================
    const discoveryForm = document.getElementById("discoveryForm");
    const formSteps = document.querySelectorAll(".form-step");
    const stepDots = document.querySelectorAll(".step-dot");
    const progressBar = document.getElementById("progressBar");
    const prevStepBtn = document.getElementById("prevStepBtn");
    const nextStepBtn = document.getElementById("nextStepBtn");
    const formSuccessMessage = document.getElementById("formSuccessMessage");
    
    let currentStep = 1;
    const totalSteps = 3;

    function updateFormSteps() {
        // Hide/Show steps
        formSteps.forEach(step => {
            step.classList.remove("active");
            if (parseInt(step.getAttribute("data-step")) === currentStep) {
                step.classList.add("active");
            }
        });

        // Update step dots
        stepDots.forEach(dot => {
            const stepNum = parseInt(dot.getAttribute("data-step"));
            dot.classList.remove("active", "completed");
            if (stepNum === currentStep) {
                dot.classList.add("active");
            } else if (stepNum < currentStep) {
                dot.classList.add("completed");
            }
        });

        // Update progress bar
        const progressPct = ((currentStep) / totalSteps) * 100;
        progressBar.style.width = `${progressPct}%`;

        // Update navigation buttons
        if (currentStep === 1) {
            prevStepBtn.style.display = "none";
            nextStepBtn.textContent = "NEXT STEP";
        } else if (currentStep === totalSteps) {
            prevStepBtn.style.display = "block";
            nextStepBtn.textContent = "SUBMIT DISCOVERY CALL REQUEST";
        } else {
            prevStepBtn.style.display = "block";
            nextStepBtn.textContent = "NEXT STEP";
        }
    }

    function validateStep(step) {
        let valid = true;
        const currentStepEl = document.querySelector(`.form-step[data-step="${step}"]`);
        if (!currentStepEl) return true;

        const inputs = currentStepEl.querySelectorAll("input[required], select[required], textarea[required]");
        inputs.forEach(input => {
            input.classList.remove("error");
            
            if (!input.value.trim()) {
                input.classList.add("error");
                valid = false;
            }
            
            if (input.type === "email" && input.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value)) {
                    input.classList.add("error");
                    valid = false;
                }
            }
            
            if (input.type === "url" && input.value) {
                try {
                    new URL(input.value);
                } catch (_) {
                    // Try adding http:// for common URL inputs
                    if(!input.value.startsWith('http://') && !input.value.startsWith('https://')) {
                        input.value = 'https://' + input.value;
                    } else {
                        input.classList.add("error");
                        valid = false;
                    }
                }
            }
        });

        return valid;
    }

    nextStepBtn.addEventListener("click", () => {
        if (!validateStep(currentStep)) return;

        if (currentStep < totalSteps) {
            currentStep++;
            updateFormSteps();
        } else {
            // Form Submission logic
            nextStepBtn.textContent = "Sending...";
            nextStepBtn.disabled = true;

            const formData = new FormData();
            formData.append("_subject", "New Discovery Form Submission (Portfolio)");
            formData.append("Brand Name", document.getElementById('brandName').value);
            formData.append("Website", document.getElementById('brandUrl').value);
            formData.append("Monthly Revenue", document.getElementById('brandRev').value);
            formData.append("Ad Spend", document.getElementById('brandSpend').value);
            formData.append("Email", document.getElementById('brandEmail').value);
            formData.append("WhatsApp", document.getElementById('brandWhatsApp').value);
            formData.append("Bottleneck", document.getElementById('brandBottleneck').value);

            fetch('/api/submit-form', {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            }).then(() => {
                discoveryForm.style.display = "none";
                document.querySelector(".form-progress").style.display = "none";
                formSuccessMessage.style.display = "block";
            }).catch(err => {
                console.error(err);
                alert("حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.");
            }).finally(() => {
                nextStepBtn.textContent = "SUBMIT DISCOVERY CALL REQUEST";
                nextStepBtn.disabled = false;
            });
        }
    });

    prevStepBtn.addEventListener("click", () => {
        if (currentStep > 1) {
            currentStep--;
            updateFormSteps();
        }
    });

    // ==========================================================================
    // HIRE ME DIRECT ADVISORY MODAL
    // ==========================================================================
    const hireMeModal = document.getElementById("hireMeModal");
    const hireMeTriggers = [
        document.getElementById("hireMeTrigger"),
        document.getElementById("heroHireMeTrigger")
    ];
    const closeHireModal = document.getElementById("closeHireModal");
    const hireMeForm = document.getElementById("hireMeForm");
    const modalSuccessMessage = document.getElementById("modalSuccessMessage");

    function openModal() {
        hireMeModal.classList.add("active");
        document.body.style.overflow = "hidden";
        // Reset form and messaging
        hireMeForm.reset();
        hireMeForm.style.display = "block";
        modalSuccessMessage.style.display = "none";
        // Clear errors
        hireMeForm.querySelectorAll(".error").forEach(el => el.classList.remove("error"));
    }

    function closeModal() {
        hireMeModal.classList.remove("active");
        document.body.style.overflow = "";
    }

    hireMeTriggers.forEach(trigger => {
        if (trigger) {
            trigger.addEventListener("click", (e) => {
                e.preventDefault();
                openModal();
            });
        }
    });

    if (closeHireModal) {
        closeHireModal.addEventListener("click", closeModal);
    }

    hireMeModal.addEventListener("click", (e) => {
        if (e.target === hireMeModal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && hireMeModal.classList.contains("active")) {
            closeModal();
        }
    });

    hireMeForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Validate modal form
        let valid = true;
        const inputs = hireMeForm.querySelectorAll("input[required], select[required]");
        inputs.forEach(input => {
            input.classList.remove("error");
            if (!input.value.trim()) {
                input.classList.add("error");
                valid = false;
            }
            if (input.type === "email" && input.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value)) {
                    input.classList.add("error");
                    valid = false;
                }
            }
        });

        if (!valid) return;

        const btn = hireMeForm.querySelector("button[type='submit']");
        const originalText = btn.textContent;
        btn.textContent = "Sending...";
        btn.disabled = true;

        const formData = new FormData();
        formData.append("_subject", "New Hire Me Application (Portfolio)");
        formData.append("Name", document.getElementById('hireName').value);
        formData.append("Website", document.getElementById('hireWebsite').value);
        formData.append("Monthly Budget", document.getElementById('hireBudget').value);
        formData.append("Service", document.getElementById('hireService').value);
        formData.append("Email", document.getElementById('hireEmail').value);
        formData.append("WhatsApp", document.getElementById('hireWhatsApp').value);

        fetch('/api/submit-form', {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        }).then(() => {
            hireMeForm.style.display = "none";
            modalSuccessMessage.style.display = "block";
        }).catch(err => {
            console.error(err);
            alert("حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.");
        }).finally(() => {
            btn.textContent = originalText;
            btn.disabled = false;
        });
    });
});

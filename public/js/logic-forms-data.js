// Bilingual Services Form Data (English & Arabic)
// Automatically generated via translation script.

const servicesData = {
    "ecommerce": {
        "title": {
            "ar": "E-Commerce (التجارة الإلكترونية)",
            "en": "E-Commerce"
        },
        "questions": [
            {
                "id": "q1",
                "label": {
                    "ar": "1. ما هو تصنيف متجرك الإلكتروني وما نوع المنتجات التي تقدمها في السوق الخليجي؟",
                    "en": "1. What is the classification of your online store and what type of products do you offer in the Gulf market?"
                },
                "type": "select",
                "options": [
                    {
                        "ar": "منتجات ملموسة (Physical Products) - أزياء، عطور، إلكترونيات",
                        "en": "Physical Products - fashion, perfumes, electronics"
                    },
                    {
                        "ar": "منتجات رقمية (Digital Products) - دورات، كتب، اشتراكات",
                        "en": "Digital Products - courses, books, subscriptions"
                    },
                    {
                        "ar": "دروبشيبينغ (Dropshipping) - الاعتماد على موردين خارجيين",
                        "en": "Dropshipping - relying on third-party suppliers"
                    },
                    {
                        "ar": "خدمات أو استشارات عبر المتجر",
                        "en": "Services or consultations through the store"
                    }
                ],
                "insights": {
                    "منتجات ملموسة (Physical Products) - أزياء، عطور، إلكترونيات": {
                        "ar": "للمنتجات الملموسة، تجربة الدفع وإدارة المرتجعات هي أساس النجاح. تفعيل خدمات التقسيط مثل 'تابي' و'تمارا' يضاعف سلة الشراء بنسبة 40% في السعودية.",
                        "en": "For tangible products, the checkout and returns management experience is the foundation of success. Activating installment services such as “Tabby” and “Tamara” doubles the shopping basket by 40% in Saudi Arabia."
                    },
                    "منتجات رقمية (Digital Products) - دورات، كتب، اشتراكات": {
                        "ar": "المنتجات الرقمية تتميز بهامش ربح عالي، لذا نركز هنا على صفحة الهبوط (Landing Page) وبناء قمع مبيعات (Funnel) يضمن التفعيل الفوري للمشتري.",
                        "en": "Digital products have a high profit margin, so we focus here on the landing page and building a sales funnel that ensures immediate buyer activation."
                    },
                    "دروبشيبينغ (Dropshipping) - الاعتماد على موردين خارجيين": {
                        "ar": "أكبر تحدي في الدروبشيبينغ بالخليج هو وقت الشحن. نحتاج لتوظيف زوايا إعلانية تركز على الندرة وتفعيل تتبع ذكي يطمئن العميل حتى وصول المنتج.",
                        "en": "The biggest challenge in dropshipping in the Gulf is shipping time. We need to employ advertising angles that focus on scarcity and activate intelligent tracking that reassures the customer until the product arrives."
                    },
                    "خدمات أو استشارات عبر المتجر": {
                        "ar": "بيع الخدمات عبر المتجر يتطلب بناء موثوقية قوية. التركيز على ال Social Proof ومراجعات العملاء في صفحة المنتج هو الحل الأمثل.",
                        "en": "Selling services through a store requires building strong reliability. Focusing on social proof and customer reviews on the product page is the ideal solution."
                    }
                }
            },
            {
                "id": "q2",
                "label": {
                    "ar": "2. ما هي المنصة التي بنيت عليها متجرك؟",
                    "en": "2. What platform did you build your store on?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "سلة (Salla) أو زد (Zid) - للمتاجر المحلية بالسعودية",
                        "en": "Salla or Zid basket - for local stores in Saudi Arabia"
                    },
                    {
                        "ar": "شوبيفاي (Shopify) - للتوسع السريع والمرونة العالية",
                        "en": "Shopify - for rapid expansion and high flexibility"
                    },
                    {
                        "ar": "ووكوميرس أو برمجة خاصة",
                        "en": "WooCommerce or proprietary programming"
                    }
                ],
                "insights": {
                    "سلة (Salla) أو زد (Zid) - للمتاجر المحلية بالسعودية": {
                        "ar": "هذه المنصات سريعة الانطلاق. سر النجاح هنا يكمن في الربط الصحيح لل Pixel لتجنب ازدواجية البيانات وتفعيل حملات الإعادة (Retargeting) بدقة.",
                        "en": "These platforms are quick to launch. The secret to success here lies in correctly connecting the Pixel to avoid data duplication and activating retargeting campaigns accurately."
                    },
                    "شوبيفاي (Shopify) - للتوسع السريع والمرونة العالية": {
                        "ar": "شوبيفاي ممتاز. سنركز على تحسين سرعة القالب، وإزالة الإضافات (Apps) الثقيلة التي قد تبطئ تصفح الجوال.",
                        "en": "Shopify is excellent. We will focus on improving the speed of the template, and removing heavy add-ons (Apps) that may slow down mobile browsing."
                    },
                    "ووكوميرس أو برمجة خاصة": {
                        "ar": "هنا نمتلك حرية كاملة في تخصيص عملية ال Checkout (الدفع) لتكون صفحة واحدة سريعة لزيادة نسبة التحويل.",
                        "en": "Here we have complete freedom to customize the Checkout (payment) process to be one quick page to increase the conversion rate."
                    }
                },
                "condition": (ans) => ans.q1
            },
            {
                "id": "q3",
                "label": {
                    "ar": "3. كيف تتعامل مع تحدي الدفع عند الاستلام (COD) والمعدل المرتفع للطلبات غير المستلمة في الخليج؟",
                    "en": "3. How do you deal with the challenge of cash on delivery (COD) and the high rate of undelivered orders in the Gulf?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "ألغينا ال COD ونعتمد كلياً على الدفع الإلكتروني المسبق",
                        "en": "We have canceled the COD and rely entirely on pre-payment"
                    },
                    {
                        "ar": "لدينا فريق يؤكد الطلبات يدوياً قبل الشحن",
                        "en": "Our team manually confirms orders before shipping"
                    },
                    {
                        "ar": "نستخدم نظام تأكيد آلي عبر الواتساب (WhatsApp Automation)",
                        "en": "We use an automated confirmation system via WhatsApp (WhatsApp Automation)."
                    }
                ],
                "insights": {
                    "ألغينا ال COD ونعتمد كلياً على الدفع الإلكتروني المسبق": {
                        "ar": "هذا قرار ممتاز لتقليل المخاطر، لكنه يتطلب محتوى إعلاني يبني الثقة (Trust-building UGC) لتجاوز مخاوف العملاء الجدد.",
                        "en": "This is an excellent decision to reduce risk, but it requires trust-building UGC to overcome new customers' concerns."
                    },
                    "لدينا فريق يؤكد الطلبات يدوياً قبل الشحن": {
                        "ar": "التأكيد اليدوي جيد لكنه لا يدعم التوسع السريع. نحتاج لإعداد نظام تتبع يقيم جودة الطلبات بناءً على سلوك العميل.",
                        "en": "Manual confirmation is good but it does not support rapid expansion. We need to set up a tracking system that evaluates the quality of orders based on customer behavior."
                    },
                    "نستخدم نظام تأكيد آلي عبر الواتساب (WhatsApp Automation)": {
                        "ar": "هذا هو أفضل حل. ربط سلة أو شوبيفاي بأدوات أتمتة الواتساب يرفع نسبة الاستلام الفعلية إلى أكثر من 85%.",
                        "en": "This is the best solution. Connecting Cart or Shopify to WhatsApp automation tools increases the actual receipt rate to more than 85%."
                    }
                },
                "condition": (ans) => ans.q2
            },
            {
                "id": "q4",
                "label": {
                    "ar": "4. كيف تدير حملات Google Ads لتصيد العملاء ذوي النية الشرائية العالية؟",
                    "en": "4. How do you run Google Ads campaigns to target customers with high purchasing intent?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نستخدم حملات Performance Max و Search التقليدية",
                        "en": "We use traditional Performance Max and Search campaigns"
                    },
                    {
                        "ar": "نعتمد كلياً على Standard Shopping للتحكم بالكلمات الدلالية",
                        "en": "We rely entirely on Standard Shopping to control keywords"
                    },
                    {
                        "ar": "لا نستخدم جوجل حالياً، نركز على سناب وتيك توك",
                        "en": "We don't use Google currently, we focus on Snap and Tik Tok"
                    }
                ],
                "insights": {
                    "نستخدم حملات Performance Max و Search التقليدية": {
                        "ar": "حملات PMax في الخليج تتطلب تغذية قوية ب (Audience Signals) ومحتوى فيديو عالي الجودة لتقليل الاعتماد على شبكة العرض الضعيفة.",
                        "en": "PMax campaigns in the Gulf require strong feeds (Audience Signals) and high-quality video content to reduce reliance on a weak display network."
                    },
                    "نعتمد كلياً على Standard Shopping للتحكم بالكلمات الدلالية": {
                        "ar": "هذا يعطيك تحكم ممتاز ب ROAS. يمكننا رفع الأداء عبر دمج الكلمات الدلالية السلبية (Negative Keywords) بشكل دوري لتقليل الدر الميزانية.",
                        "en": "This gives you excellent control of ROAS. We can increase performance by incorporating negative keywords periodically to reduce budget losses."
                    },
                    "لا نستخدم جوجل حالياً، نركز على سناب وتيك توك": {
                        "ar": "أنت تضيع كنزاً من العملاء الجاهزين للشراء! جوجل هو المنصة الوحيدة التي تصل للعميل وهو يبحث عنك بنية الشراء، وسنقوم بتأسيسها لك باحترافية.",
                        "en": "You are wasting a treasure trove of customers ready to buy! Google is the only platform that reaches the customer while he searches for you with the intention of purchasing, and we will establish it for you professionally."
                    }
                },
                "condition": (ans) => ans.q3
            },
            {
                "id": "q5",
                "label": {
                    "ar": "5. هل قمت بربط Google Merchant Center بشكل صحيح وتغذية المنتجات ديناميكياً؟",
                    "en": "5. Have you properly linked Google Merchant Center and the product feed dynamically?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعم، الربط متوافق ولا توجد منتجات مرفوضة",
                        "en": "Yes, binding is compatible and there are no rejected products"
                    },
                    {
                        "ar": "لدينا بعض المنتجات المرفوضة بسبب سياسات التسعير أو الصور",
                        "en": "We have some disapproved products due to pricing policies or images"
                    },
                    {
                        "ar": "لم نقم بربطه بعد أو لا نعرف الطريقة الصحيحة",
                        "en": "We haven't connected it yet or we don't know the right way"
                    }
                ],
                "insights": {
                    "نعم، الربط متوافق ولا توجد منتجات مرفوضة": {
                        "ar": "ممتاز. الخطوة القادمة هي استخدام استراتيجية (Feed Optimization) وتضمين الكلمات الدلالية في عناوين المنتجات لزيادة الظهور العضوي والمدفوع.",
                        "en": "excellent. The next step is to use the Feed Optimization strategy and include keywords in product titles to increase organic and paid visibility."
                    },
                    "لدينا بعض المنتجات المرفوضة بسبب سياسات التسعير أو الصور": {
                        "ar": "هذه المشكلة الشائعة تسبب البوطاً حاداً في مبيعات جوجل. سنقوم بتنظيف ال Feed والتأكد من تطابق بيانات GTIN و MPN لضمان الموافقة.",
                        "en": "This common problem causes a sharp decline in Google sales. We will clean the feed and ensure that the GTIN and MPN data match to ensure approval."
                    },
                    "لم نقم بربطه بعد أو لا نعرف الطريقة الصحيحة": {
                        "ar": "Google Merchant هو المحرك الأساسي لحملات Shopping و PMax. سأقوم ببناء هذا الربط بدقة متناهية لمتجرك لضمان ظهور منتجاتك في أعلى محرك البحث.",
                        "en": "Google Merchant is the primary driver for Shopping and PMax campaigns. I will carefully build this link to your store to ensure that your products appear at the top of the search engine."
                    }
                },
                "condition": (ans) => ans.q4
            },
            {
                "id": "q6",
                "label": {
                    "ar": "6. ما هو التحدي الأكبر لك حالياً في حملات Google Ads؟",
                    "en": "6. What is your biggest challenge currently in Google Ads campaigns?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "ارتفاع تكلفة النقرة (CPC) دون تحويلات فعلية (Conversions)",
                        "en": "High CPC without actual conversions"
                    },
                    {
                        "ar": "حملات الـ PMax تستهلك الميزانية على منتجات غير رابحة",
                        "en": "PMax campaigns consume budget on unprofitable products"
                    },
                    {
                        "ar": "عدم دقة تتبع المبيعات والفروقات مع منصة المتجر",
                        "en": "Inaccurate tracking of sales and variances with the store platform"
                    }
                ],
                "insights": {
                    "ارتفاع تكلفة النقرة (CPC) دون تحويلات فعلية (Conversions)": {
                        "ar": "ال CPC المرتفع يعني أن هناك خللاً إما في استهداف الكلمات أو جودة صفحة المنتج (Landing Page Experience). سنحسن ال Quality Score لخفض التكلفة.",
                        "en": "A high CPC means that there is a defect either in targeting words or the quality of the product page (Landing Page Experience). We will improve the Quality Score to reduce the cost."
                    },
                    "حملات الـ PMax تستهلك الميزانية على منتجات غير رابحة": {
                        "ar": "خوارزمية PMax تميل للإنفاق على المنتجات السهلة. سأقوم بتطبيق استراتيجية (Zombie SKUs Segmentation) لفصل المنتجات الرابحة وإجبار الخوارزمية على التركيز عليها.",
                        "en": "The PMax algorithm tends to spend on easy products. I will implement the Zombie SKUs Segmentation strategy to separate out the winning products and force the algorithm to focus on them."
                    },
                    "عدم دقة تتبع المبيعات والفروقات مع منصة المتجر": {
                        "ar": "هذه مشكلة قيود ال Cookies. الحل الاحترافي الذي أطبقه هو إعداد Google Enhanced Conversions (Server-Side) لاسترجاع 30% من البيانات المفقودة.",
                        "en": "This is a problem with cookies restrictions. The professional solution I use is to set up Google Enhanced Conversions (Server-Side) to recover 30% of the missing data."
                    }
                },
                "condition": (ans) => ans.q5
            },
            {
                "id": "q7",
                "label": {
                    "ar": "7. بالنسبة لمنصات السوشيال ميديا (سناب، تيك توك، ميتا)، ما هي استراتيجيتك لصناعة المحتوى الإعلاني؟",
                    "en": "7. Regarding social media platforms (Snap, TikTok, Meta), what is your strategy for creating advertising content?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "لدينا فريق داخلي يصور فيديوهات بشكل أسبوعي",
                        "en": "We have an internal team that films videos on a weekly basis"
                    },
                    {
                        "ar": "نعتمد على صناع المحتوى المحليين (UGC) والمؤثرين",
                        "en": "We rely on local content creators (UGC) and influencers"
                    },
                    {
                        "ar": "نستخدم صور ثابتة وفيديوهات من الموردين",
                        "en": "We use still images and videos from suppliers"
                    }
                ],
                "insights": {
                    "لدينا فريق داخلي يصور فيديوهات بشكل أسبوعي": {
                        "ar": "هذا يضمن لك الاستمرارية. سنقوم بإضافة منهجية (Direct Response Copywriting) للنصوص وال Hooks لرفع نسبة النقر (CTR) إلى فوق 2%.",
                        "en": "This ensures continuity. We will add the Direct Response Copywriting methodology to texts and hooks to raise the click-through rate (CTR) to above 2%."
                    },
                    "نعتمد على صناع المحتوى المحليين (UGC) والمؤثرين": {
                        "ar": "استراتيجية UGC هي الأقوى حالياً بالخليج. سنساعدك في كتابة Scripts بيعية تضمن تحويل فيديوهاتهم إلى ماكينة مبيعات على تيك توك وسناب شات.",
                        "en": "The UGC strategy is currently the strongest in the Gulf. We'll help you write sales scripts that will ensure your videos turn into a sales machine on TikTok and Snapchat."
                    },
                    "نستخدم صور ثابتة وفيديوهات من الموردين": {
                        "ar": "الإعلانات التقليدية لم تعد فعالة، وتسبب ارتفاع تكلفة الاستحواذ. يجب فوراً الانتقال لفيديوهات تظهر المنتج في سياق الاستخدام الحقيقي لكسر حاجز الملل لدى المستهلك.",
                        "en": "Traditional advertising is no longer effective and causes high cost of acquisition. You must immediately move to videos showing the product in the context of real use to break the barrier of consumer boredom."
                    }
                },
                "condition": (ans) => ans.q6
            },
            {
                "id": "q8",
                "label": {
                    "ar": "8. كيف تتعامل مع استراتيجية إعادة الاستهداف (Retargeting) للزوار الذين تخلوا عن سلة الشراء؟",
                    "en": "8. How do you deal with the retargeting strategy for visitors who abandoned the shopping cart?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "إعلانات ديناميكية (DPA) تظهر نفس المنتج المتروك",
                        "en": "Dynamic Ads (DPA) showing the same abandoned product"
                    },
                    {
                        "ar": "تقديم كوبونات خصم للمترددين عبر البريد والواتساب",
                        "en": "Providing discount coupons to frequent visitors via mail and WhatsApp"
                    },
                    {
                        "ar": "إعادة الاستهداف ضعيفة ونركز فقط على جلب زوار جدد",
                        "en": "Retargeting is weak and we only focus on bringing in new visitors"
                    }
                ],
                "insights": {
                    "إعلانات ديناميكية (DPA) تظهر نفس المنتج المتروك": {
                        "ar": "إعلانات الكتالوج الديناميكية فعالة جداً. لزيادة فاعليتها، يجب تفعيل (Custom Overlays) لإظهار السعر والتقسيط والشحن المجاني فوق صورة المنتج.",
                        "en": "Dynamic catalog ads are very effective. To increase its effectiveness, you must activate (Custom Overlays) to show the price, installments, and free shipping above the product image."
                    },
                    "تقديم كوبونات خصم للمترددين عبر البريد والواتساب": {
                        "ar": "تكتيك رائع. سأساعدك في بناء Drip Campaign آلي (Automated Sequence) يتدرج في تقديم الحوافز دون أن يعود العميل على انتظار الخصومات دائماً.",
                        "en": "Great tactic. I will help you build an automated Drip Campaign (Automated Sequence) that gradually provides incentives without the customer getting used to always waiting for discounts."
                    },
                    "إعادة الاستهداف ضعيفة ونركز فقط على جلب زوار جدد": {
                        "ar": "أنت تترك أموالاً طائلة على الطاولة! العميل الذي أضاف للسلة يحتاج فقط لدفعة ثقة بسيطة (مراجعات فيديو) لإنهاء الشراء بتكلفة أقل ب 70% من العميل الجديد.",
                        "en": "You're leaving a lot of money on the table! A customer who has added to the cart only needs a simple trust boost (video reviews) to complete the purchase at a cost that is 70% less than a new customer."
                    }
                },
                "condition": (ans) => ans.q7
            },
            {
                "id": "q9",
                "label": {
                    "ar": "9. ما هو متوسط قيمة الطلب الحالي (AOV) في متجرك، وهل تسعى لرفعه؟",
                    "en": "9. What is the current average order value (AOV) in your store, and are you looking to increase it?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "منخفض (أقل من 150 ريال/درهم) - نعتمد على الكثافة",
                        "en": "Low (less than 150 SAR/AED) - We depend on density"
                    },
                    {
                        "ar": "متوسط (150-300 ريال/درهم) - ربحية مقبولة",
                        "en": "Average (150-300 riyals/dirham) - acceptable profitability"
                    },
                    {
                        "ar": "مرتفع (فوق 300 ريال/درهم) - مبيعات نخبويّة",
                        "en": "High (above 300 SAR/AED) - elite sales"
                    }
                ],
                "insights": {
                    "منخفض (أقل من 150 ريال/درهم) - نعتمد على الكثافة": {
                        "ar": "المتوسط المنخفض يجعل من الصعب تغطية تكلفة الإعلانات بالخليج. يجب فوراً ابتكار باقات مجمعة (Bundles) وتقديم شحن مجاني للطلبات فوق 200 ريال لرفع الـ AOV.",
                        "en": "The low average makes it difficult to cover the cost of advertising in the Gulf. You must immediately create bundles and offer free shipping for orders above 200 riyals to raise the AOV."
                    },
                    "متوسط (150-300 ريال/درهم) - ربحية مقبولة": {
                        "ar": "لدينا مساحة ممتازة للعب هنا! يمكننا تفعيل ميزات ال (Upsell & Cross-sell) الذكية في صفحة الدفع وتفعيل تابي/تمارا لرفع السلة بنسبة 30% إضافية.",
                        "en": "We have an excellent space to play here! We can activate smart Upsell & Cross-sell features on the checkout page and activate Tabby/Tamara to raise the basket by an additional 30%."
                    },
                    "مرتفع (فوق 300 ريال/درهم) - مبيعات نخبويّة": {
                        "ar": "هذا يعطيك ميزة تنافسية لتحمل تكلفة استحواذ أعلى. سنركز على حملات القيمة (Value-based Bidding) في جوجل وفيسبوك لاستهداف الشريحة الأغنى.",
                        "en": "This gives you a competitive advantage to incur a higher acquisition cost. We will focus on Value-based Bidding campaigns in Google and Facebook to target the wealthiest segment."
                    }
                },
                "condition": (ans) => ans.q8
            },
            {
                "id": "q10",
                "label": {
                    "ar": "10. ما هي ميزانيتك الإعلانية الشهرية المتوقعة للبدء بهذه الاستراتيجية المتكاملة؟",
                    "en": "10. What is your expected monthly advertising budget to start with this integrated strategy?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "أقل من 5,000$ (مرحلة التأسيس والاختبار)",
                        "en": "Less than $5,000 (inception and testing phase)"
                    },
                    {
                        "ar": "5,000$ إلى 15,000$ (مرحلة النمو والاستقرار)",
                        "en": "$5,000 to $15,000 (growth and stabilization phase)"
                    },
                    {
                        "ar": "أكثر من 15,000$ (مرحلة التوسع وال Scaling السريع)",
                        "en": "More than $15,000 (rapid scaling phase)"
                    }
                ],
                "insights": {
                    "أقل من 5,000$ (مرحلة التأسيس والاختبار)": {
                        "ar": "سأوجه هذه الميزانية لاختبار أهم منتج (Hero Product) وبناء حملة Search دقيقة في جوجل لتأمين العائد الأولي السريع لتمويل المراحل اللاحقة.",
                        "en": "I will direct this budget to test the most important product (Hero Product) and build an accurate Google Search campaign to secure a quick initial return to fund later stages."
                    },
                    "5,000$ إلى 15,000$ (مرحلة النمو والاستقرار)": {
                        "ar": "ميزانية مثالية لدمج القنوات (Google PMax + TikTok + Snapchat). سنركز على خفض الـ CAC وبناء تتبع متطور.",
                        "en": "Ideal budget for channel combination (Google PMax + TikTok + Snapchat). We will focus on reducing CAC and building advanced tracking."
                    },
                    "أكثر من 15,000$ (مرحلة التوسع وال Scaling السريع)": {
                        "ar": "في مرحلة ال Scaling، سأقوم بهيكلة الحسابات الإعلانية باستخدام CBO و Value Bidding والتحكم بتشبع الجماهير لضمان عدم انهيار العائد ROAS.",
                        "en": "In the scaling phase, I will structure advertising accounts using CBO and Value Bidding and control audience saturation to ensure that ROAS does not collapse."
                    }
                },
                "condition": (ans) => ans.q9
            }
        ]
    },
    "real-estate": {
        "title": {
            "ar": "Real Estate (التسويق العقاري)",
            "en": "Real Estate (real estate marketing)"
        },
        "questions": [
            {
                "id": "q1",
                "label": {
                    "ar": "1. ما هو نوع العقارات الأساسي الذي تركز على تسويقه في السوق السعودي أو الإماراتي؟",
                    "en": "1. What is the primary type of real estate that you focus on marketing in the Saudi or UAE market?"
                },
                "type": "select",
                "options": [
                    {
                        "ar": "عقارات فاخرة وفلل سكنية جاهزة (للسكن المباشر)",
                        "en": "Luxury real estate and ready residential villas (for direct housing)"
                    },
                    {
                        "ar": "مشاريع قيد الإنشاء (Off-plan) للاستثمار والعوائد",
                        "en": "Off-plan projects for investment and returns"
                    },
                    {
                        "ar": "عقارات تجارية ومكاتب (B2B Commercial)",
                        "en": "Commercial real estate and offices (B2B Commercial)"
                    },
                    {
                        "ar": "شقق تمليك متوسطة أو مدعومة من سكني",
                        "en": "Medium-sized or residential-subsidized apartments"
                    }
                ],
                "insights": {
                    "عقارات فاخرة وفلل سكنية جاهزة (للسكن المباشر)": {
                        "ar": "العقارات الفاخرة لا تباع بالإعلانات المباشرة، بل بجودة العميل المحتمل (Lead Quality). يجب تفعيل فلاتر دقيقة في استمارات Lead Gen لضمان ملاءة العميل المالية.",
                        "en": "Luxury real estate is not sold with direct advertising, but with lead quality. Precise filters must be activated in Lead Gen forms to ensure the client's financial solvency."
                    },
                    "مشاريع قيد الإنشاء (Off-plan) للاستثمار والعوائد": {
                        "ar": "في دبي والرياض، ال Off-plan يحتاج إلى زوايا إعلانية تركز على العائد الاستثماري (ROI) والنمو المتوقع للمنطقة، مع فيديوهات توضيحية لسرعة الإنجاز.",
                        "en": "In Dubai and Riyadh, Off-Plan needs advertising angles that focus on return on investment (ROI) and expected growth for the region, with explanatory videos for speed of completion."
                    },
                    "عقارات تجارية ومكاتب (B2B Commercial)": {
                        "ar": "استهداف أصحاب الأعمال والشركات يتم الأفضل عبر LinkedIn Ads وحملات Google Search بكلمات دلالية عالية النية ومحددة جداً.",
                        "en": "Targeting business owners and companies is best done through LinkedIn Ads and Google Search campaigns with very specific, high-intent keywords."
                    },
                    "شقق تمليك متوسطة أو مدعومة من سكني": {
                        "ar": "التركيز هنا يكون على تسهيلات الدفع وتوافقها مع الدعم الحكومي. سناب شات وتيك توك هي المنصات الأقوى لهذا الشريحة الواسعة في السعودية.",
                        "en": "The focus here is on payment facilities and their compatibility with government support. Snapchat and TikTok are the most powerful platforms for this broad segment in Saudi Arabia."
                    }
                }
            },
            {
                "id": "q2",
                "label": {
                    "ar": "2. كيف تدير حملات Google Ads لاصطياد أصحاب النوايا الشرائية العالية في العقارات؟",
                    "en": "2. How do you run Google Ads campaigns to target high-intention real estate purchasers?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعتمد على كلمات دلالية عامة مثل (شقق للبيع)",
                        "en": "We rely on general semantic words such as (apartments for sale)"
                    },
                    {
                        "ar": "نستهدف كلمات دلالية طويلة (Long-tail) دقيقة للمشاريع",
                        "en": "We target precise long-tail keywords for projects"
                    },
                    {
                        "ar": "لم ننجح في إعلانات جوجل وتكلفتها عالية جداً",
                        "en": "We were not successful with Google ads and their cost is very high"
                    }
                ],
                "insights": {
                    "نعتمد على كلمات دلالية عامة مثل (شقق للبيع)": {
                        "ar": "الكلمات العامة تحرق الميزانية في العقارات! يجب تحويل الاستراتيجية لاستهداف نيات مخصصة (Custom Intent) مع دمج كلمات الاستبعاد (Negative Keywords).",
                        "en": "General words burn the budget in real estate! The strategy must be transformed to target custom intents while incorporating negative keywords."
                    },
                    "نستهدف كلمات دلالية طويلة (Long-tail) دقيقة للمشاريع": {
                        "ar": "ممتاز. السر الاحترافي هنا هو تفعيل حملات (RLSA) لزيادة المزايدة على من زار موقعك مسبقاً ويبحث مجدداً، لضمان الهيمنة على نتائج البحث للمهتمين فعلياً.",
                        "en": "excellent. The professional secret here is to activate RLSA campaigns to increase bidding on those who have previously visited your site and are searching again, to ensure dominance in the search results for those who are actually interested."
                    },
                    "لم ننجح في إعلانات جوجل وتكلفتها عالية جداً": {
                        "ar": "في العقارات، النقرة غالية لكن العائد مهول. سأعيد هيكلة حملات البحث لتعتمد على (Exact Match) وصفحات هبوط سريعة جداً لتحسين جودة الإعلان وخفض التكلفة.",
                        "en": "In real estate, a click is expensive, but the return is huge. I will restructure search campaigns to rely on Exact Match and very fast landing pages to improve ad quality and reduce costs."
                    }
                },
                "condition": (ans) => ans.q1
            },
            {
                "id": "q3",
                "label": {
                    "ar": "3. هل تستخدم استراتيجية التتبع العكسي (Offline Conversion Tracking) في جوجل لربط المبيعات الفعلية بالإعلانات؟",
                    "en": "3. Do you use Offline Conversion Tracking at Google to link actual sales to ads?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعم، نرفع بيانات العقود والصفقات الرابحة لجوجل",
                        "en": "Yes, we upload data about contracts and profitable deals to Google"
                    },
                    {
                        "ar": "نعتمد فقط على تتبع تسجيل الفورم (Leads)",
                        "en": "We rely only on tracking form registration (Leads)"
                    },
                    {
                        "ar": "لا أعرف ما هو التتبع العكسي للاوفلاين",
                        "en": "I don't know what offline reverse tracking is"
                    }
                ],
                "insights": {
                    "نعم، نرفع بيانات العقود والصفقات الرابحة لجوجل": {
                        "ar": "هذه مرحلة متقدمة جداً! هذا يجعل خوارزمية جوجل تعثر لك على مشترين حقيقيين وليس فقط مسجلين. سأعمل على أتمتة هذه العملية عبر الـ CRM مباشرة.",
                        "en": "This is a very advanced stage! This makes Google's algorithm find real buyers for you, not just registered ones. I will automate this process directly through CRM."
                    },
                    "نعتمد فقط على تتبع تسجيل الفورم (Leads)": {
                        "ar": "جوجل سيجلب لك (Leads) رخيصة ولكن غير جادة. يجب تدريب الخوارزمية عبر ال Offline Conversions لتبحث عن جودة ال Lead بناءً على من قام بالرد والاهتمام الفعلي.",
                        "en": "Google will bring you cheap but not serious leads. The algorithm must be trained via Offline Conversions to look for lead quality based on who responded and actual interest."
                    },
                    "لا أعرف ما هو التتبع العكسي للاوفلاين": {
                        "ar": "هو السلاح السري لوكالات العقارات الكبرى. نقوم بربط الـ CRM بجوجل لنخبر الخوارزمية أي العملاء المحتملين قام بتوقيع العقد الفعلي، فتتعلم الخوارزمية اصطياد أمثاله بدقة.",
                        "en": "It is the secret weapon of major real estate agencies. We connect the CRM to Google to tell the algorithm which potential customers signed the actual contract, so the algorithm learns to accurately hunt people like them."
                    }
                },
                "condition": (ans) => ans.q2
            },
            {
                "id": "q4",
                "label": {
                    "ar": "4. ما هي المشكلة الأكبر التي يعاني منها فريق المبيعات لديك حالياً مع العملاء المحتملين (Leads)؟",
                    "en": "4. What is the biggest problem your sales team currently has with leads?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "حجم الـ Leads كبير جداً لكنهم غير جادين أو لا يردون",
                        "en": "The number of leads is very large, but they are not serious or do not respond"
                    },
                    {
                        "ar": "العملاء جادون لكن تكلفتهم (CPL) عالية جداً وتستنزف الميزانية",
                        "en": "The clients are serious but their cost (CPL) is very high and drains the budget"
                    },
                    {
                        "ar": "عدد الـ Leads قليل جداً ولا يكفي لتشغيل الفريق",
                        "en": "The number of leads is very small and not enough to run the team"
                    }
                ],
                "insights": {
                    "حجم الـ Leads كبير جداً لكنهم غير جادين أو لا يردون": {
                        "ar": "هذه المشكلة شائعة. الحل هو إضافة حواجز منطقية (Friction) مثل إدخال الدخل الشهري أو موعد الشراء المتوقع لفلترة غير الجادين.",
                        "en": "This problem is common. The solution is to add logical barriers, such as entering monthly income or expected purchase date, to filter out those who are not serious."
                    },
                    "العملاء جادون لكن تكلفتهم (CPL) عالية جداً وتستنزف الميزانية": {
                        "ar": "هذا يتطلب تحسين معدل التحويل لصفحة الهبوط (Landing Page CRO) واختبار زوايا إعلانية جديدة لكسر المنافسة العالية في مزاد الإعلانات.",
                        "en": "This requires optimizing your landing page conversion rate (Landing Page CRO) and testing new ad angles to break through the high competition in the ad auction."
                    },
                    "عدد الـ Leads قليل جداً ولا يكفي لتشغيل الفريق": {
                        "ar": "الخلل هنا غالباً في ضيق الاستهداف المبالغ فيه. نحتاج لتوسيع الجمهور والاعتماد على خوارزميات المنصات لتوسيع النطاق.",
                        "en": "The flaw here is mostly the exaggerated narrowness of targeting. We need to expand the audience and rely on platform algorithms to scale."
                    }
                },
                "condition": (ans) => ans.q3
            },
            {
                "id": "q5",
                "label": {
                    "ar": "5. كيف تقوم بتأهيل الـ Leads قبل وصولهم لفريق المبيعات (Pre-qualification)؟",
                    "en": "5. How do you qualify leads before they arrive to the sales team (Pre-qualification)?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نستخدم شات بوت واتساب يسألهم عدة أسئلة",
                        "en": "We use a WhatsApp chatbot that asks them several questions"
                    },
                    {
                        "ar": "نطرح أسئلة تصفية داخل استمارة الفيسبوك/جوجل",
                        "en": "We ask filtering questions inside the Facebook/Google form"
                    },
                    {
                        "ar": "لا يوجد تأهيل، فريق المبيعات يتصل بالجميع فوراً",
                        "en": "There is no qualification, the sales team contacts everyone immediately"
                    }
                ],
                "insights": {
                    "نستخدم شات بوت واتساب يسألهم عدة أسئلة": {
                        "ar": "خطوة ممتازة لتقليل العبء على الفريق. سأقوم بتطوير الردود الآلية لربط العميل بمعلومات العقار قبل تدخل الموظف البشري.",
                        "en": "An excellent step to reduce the burden on the team. I will develop automated responses to connect the customer to the property information before a human employee intervenes."
                    },
                    "نطرح أسئلة تصفية داخل استمارة الفيسبوك/جوجل": {
                        "ar": "أسئلة الاستمارة القوية (Conditional Logic) ممتازة في رفع جودة العميل. سأصمم لك استمارات تجعل العميل يقنع نفسه بالاستثمار قبل أن يتصل به الفريق.",
                        "en": "Strong form questions (Conditional Logic) are excellent at raising customer quality. I will design forms for you that will make the client convince himself of the investment before the team contacts him."
                    },
                    "لا يوجد تأهيل، فريق المبيعات يتصل بالجميع فوراً": {
                        "ar": "هذا يسبب إرهاقاً لفريق المبيعات ويقلل حماسهم. يجب بناء قمع تصفية أولي (Pre-funnel) يضمن وصول العميل المؤهل والمستعد مادياً فقط.",
                        "en": "This causes fatigue for the sales team and reduces their enthusiasm. A pre-filtering funnel must be built to ensure that only qualified and financially prepared clients can access it."
                    }
                },
                "condition": (ans) => ans.q4
            },
            {
                "id": "q6",
                "label": {
                    "ar": "6. هل تملك صفحة هبوط (Landing Page) مخصصة لكل مشروع عقاري على حدة؟",
                    "en": "6. Do you have a landing page dedicated to each real estate project separately?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعم، كل مشروع له صفحة تفاعلية مخصصة سريعة",
                        "en": "Yes, each project has a dedicated quick interactive page"
                    },
                    {
                        "ar": "نحول الزوار للموقع الرئيسي للشركة فقط",
                        "en": "We refer visitors to the company's main website only"
                    },
                    {
                        "ar": "نعتمد فقط على ال Lead Forms الداخلية للمنصات (بدون موقع)",
                        "en": "We rely only on the platforms’ internal Lead Forms (without a website)"
                    }
                ],
                "insights": {
                    "نعم، كل مشروع له صفحة تفاعلية مخصصة سريعة": {
                        "ar": "عظيم. التركيز الآن سيكون على ال (CRO): إضافة خرائط حية، حاسبة تمويل عقاري، وجولة افتراضية 360 لرفع نسبة تحويل الصفحة لمستويات مضاعفة.",
                        "en": "great. The focus now will be on (CRO): adding live maps, a real estate financing calculator, and a 360 virtual tour to increase the page conversion rate to double levels."
                    },
                    "نحول الزوار للموقع الرئيسي للشركة فقط": {
                        "ar": "العميل في العقارات يتشتت بسرعة. تحويله لصفحة رئيسية يفقده التركيز. يجب بناء صفحات هبوط أحادية هدف لكل مشروع لضمان تحوله لعميل.",
                        "en": "The client in real estate gets distracted quickly. Turning it into a home page makes it lose focus. Single-purpose landing pages should be built for each project to ensure it converts to a customer."
                    },
                    "نعتمد فقط على ال Lead Forms الداخلية للمنصات (بدون موقع)": {
                        "ar": "ال Lead Forms سريعة ولكنها تأتي بعملاء أقل جودة. يجب الانتقال لصفحات هبوط خارجية، خاصة مع حملات جوجل، لبناء الثقة وإبراز التراخيص العقارية (وافي، فال).",
                        "en": "Lead forms are fast but produce lower quality leads. You should move to external landing pages, especially with Google campaigns, to build trust and highlight real estate licenses (Wafi, Val)."
                    }
                },
                "condition": (ans) => ans.q5
            },
            {
                "id": "q7",
                "label": {
                    "ar": "7. في حملات المشاريع (Off-plan)، ما هي الزاوية التسويقية الأقوى التي تعتمد عليها؟",
                    "en": "7. In off-plan campaigns, what is the strongest marketing angle you rely on?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "العائد الاستثماري المرتفع وإعادة البيع (ROI)",
                        "en": "High return on investment and resale (ROI)"
                    },
                    {
                        "ar": "الموقع المميز وقربه من المعالم الرئيسية",
                        "en": "The distinguished location and its proximity to the main landmarks"
                    },
                    {
                        "ar": "تسهيلات الدفع وخطط التقسيط الطويلة",
                        "en": "Payment facilities and long installment plans"
                    }
                ],
                "insights": {
                    "العائد الاستثماري المرتفع وإعادة البيع (ROI)": {
                        "ar": "المستثمر يبحث عن الأرقام. سنصمم حملات Search دقيقة لاستهداف الباحثين عن 'أفضل استثمار عقاري في الرياض/دبي' مع جداول عائد واضحة في الإعلان.",
                        "en": "The investor is looking for numbers. We will design precise Search campaigns to target those searching for 'Best Real Estate Investment in Riyadh/Dubai' with clear return tables in the ad."
                    },
                    "الموقع المميز وقربه من المعالم الرئيسية": {
                        "ar": "الزاوية الجغرافية قوية للسكن. سنستخدم إعلانات الخرائط (Google Local Campaigns) وال Geo-fencing لاستهداف الزوار القريبين من المشروع.",
                        "en": "The geographical angle is strong for housing. We will use map ads (Google Local Campaigns) and Geo-fencing to target visitors close to the project."
                    },
                    "تسهيلات الدفع وخطط التقسيط الطويلة": {
                        "ar": "هذه هي الضربة القاضية للمشاريع الكبيرة. الإعلانات في تيك توك وسناب شات التي تركز على 'قسط شهري يعادل إيجارك' ستحصد آلاف العملاء الجادين.",
                        "en": "This is the death knell for large projects. Ads on TikTok and Snapchat that focus on a 'monthly payment equivalent to your rent' will garner thousands of serious customers."
                    }
                },
                "condition": (ans) => ans.q6
            },
            {
                "id": "q8",
                "label": {
                    "ar": "8. كيف يتم تنظيم وتتبع البيانات داخل فريق مبيعات العقارات لديك؟",
                    "en": "8. How is data organized and tracked within your real estate sales team?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "لدينا نظام CRM متطور (HubSpot/Zoho/Salesforce)",
                        "en": "We have an advanced CRM system (HubSpot/Zoho/Salesforce)"
                    },
                    {
                        "ar": "نستخدم إكسيل شيت ومجموعات واتساب",
                        "en": "We use Excel sheets and WhatsApp groups"
                    },
                    {
                        "ar": "لدينا نظام محلي ولكن يصعب ربطه بالإعلانات",
                        "en": "We have a local system but it is difficult to link to ads"
                    }
                ],
                "insights": {
                    "لدينا نظام CRM متطور (HubSpot/Zoho/Salesforce)": {
                        "ar": "رائع. هذا سيسهل تفعيل استراتيجية (Offline Conversions) مع جوجل وميتا لتغذية الخوارزميات بالبيانات الفعلية ومضاعفة جودة العملاء القادمين.",
                        "en": "amazing. This will facilitate the activation of the Offline Conversions strategy with Google and Meta to feed the algorithms with actual data and double the quality of incoming customers."
                    },
                    "نستخدم إكسيل شيت ومجموعات واتساب": {
                        "ar": "هذه كارثة تشغيلية في العقارات! يجب فوراً بناء وتجهيز نظام CRM يربط الحملات بفريق المبيعات لتتبع كل ريال تم إنفاقه من أين أتى بالضبط.",
                        "en": "This is an operational disaster in real estate! You must immediately build and equip a CRM system that connects campaigns to the sales team to track every dollar spent exactly where it came from."
                    },
                    "لدينا نظام محلي ولكن يصعب ربطه بالإعلانات": {
                        "ar": "لا تقلق، سأقوم ببناء جسر (API / Webhooks) لربط نظامك المحلي بالمنصات الإعلانية لضمان سلاسة البيانات ودقة التقارير.",
                        "en": "Don't worry, I will build a bridge (API/Webhooks) to connect your on-premises system to the advertising platforms to ensure seamless data and accurate reporting."
                    }
                },
                "condition": (ans) => ans.q7
            },
            {
                "id": "q9",
                "label": {
                    "ar": "9. ما هي المدة الزمنية المعتادة (Sales Cycle) لإغلاق صفقة عقارية في شركتك؟",
                    "en": "9. What is the typical sales cycle for closing a real estate deal in your company?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "أقل من أسبوعين (عقارات جاهزة/متوسطة)",
                        "en": "Less than 2 weeks (ready/medium properties)"
                    },
                    {
                        "ar": "من شهر إلى 3 أشهر (مشاريع استثمارية/Off-plan)",
                        "en": "From 1 to 3 months (investment projects/Off-plan)"
                    },
                    {
                        "ar": "أكثر من 3 أشهر (عقارات فاخرة جداً/تجارية)",
                        "en": "More than 3 months (ultra luxury/commercial properties)"
                    }
                ],
                "insights": {
                    "أقل من أسبوعين (عقارات جاهزة/متوسطة)": {
                        "ar": "هذا يتطلب حملات إعادة استهداف (Retargeting) مكثفة وهجومية جداً لضمان بقاء العميل متصلاً بالشركة خلال فترة اتخاذه للقرار القصير.",
                        "en": "This requires very intensive and aggressive retargeting campaigns to ensure that the customer stays connected to the company during his short decision-making period."
                    },
                    "من شهر إلى 3 أشهر (مشاريع استثمارية/Off-plan)": {
                        "ar": "دورة المبيعات المتوسطة تتطلب حملات (Nurturing) عبر البريد الإلكتروني ورسائل الواتساب الأسبوعية لتثقيف العميل حول تطور المشروع وأهمية اتخاذ القرار.",
                        "en": "The average sales cycle requires nurturing campaigns via email and weekly WhatsApp messages to educate the client about the development of the project and the importance of decision making."
                    },
                    "أكثر من 3 أشهر (عقارات فاخرة جداً/تجارية)": {
                        "ar": "هنا يبدأ التسويق الحقيقي. سأبني حملات 'قادة الفكر' لمدراء الشركة والمستشارين لإبراز قوة العلامة التجارية وبناء ثقة قوية ومستدامة مع كبار المستثمرين.",
                        "en": "This is where the real marketing begins. I will build 'thought leader' campaigns for company managers and advisors to highlight the power of the brand and build strong, sustainable trust with major investors."
                    }
                },
                "condition": (ans) => ans.q8
            },
            {
                "id": "q10",
                "label": {
                    "ar": "10. ما هي ميزانيتك الإعلانية الشهرية المتوقعة لتشغيل هذه الاستراتيجية العقارية المتطورة؟",
                    "en": "10. What is your expected monthly advertising budget to run this advanced real estate strategy?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "أقل من 5,000$ (مرحلة التركيز على مشروع واحد)",
                        "en": "Less than $5,000 (focus phase on one project)"
                    },
                    {
                        "ar": "5,000$ إلى 20,000$ (استهداف شرائح متعددة ومشاريع متنوعة)",
                        "en": "$5,000 to $20,000 (targeting multiple segments and diverse projects)"
                    },
                    {
                        "ar": "أكثر من 20,000$ (هيمنة شاملة على السوق وإعلانات متعددة القنوات)",
                        "en": "Over $20,000 (comprehensive market dominance and multi-channel advertising)"
                    }
                ],
                "insights": {
                    "أقل من 5,000$ (مرحلة التركيز على مشروع واحد)": {
                        "ar": "ميزانية تركيز ممتازة. سأقوم بتوجيه 80% منها لحملات جوجل (Search Intent) لاقتناص العملاء الجاهزين فوراً، و20% لإعادة الاستهداف عبر ميتا.",
                        "en": "Excellent focus budget. I will direct 80% of it to Google Search Intent campaigns to capture ready customers immediately, and 20% to retargeting via meta."
                    },
                    "5,000$ إلى 20,000$ (استهداف شرائح متعددة ومشاريع متنوعة)": {
                        "ar": "ميزانية التوسع القوية. ستتيح لنا إطلاق حملات توعية مرئية (Video Ads) بالتوازي مع حملات ال Performance، ودمج أدوات التتبع العكسي بالكامل.",
                        "en": "Strong expansion budget. It will allow us to launch Video Ads campaigns in parallel with Performance campaigns, and fully integrate backtracking tools."
                    },
                    "أكثر من 20,000$ (هيمنة شاملة على السوق وإعلانات متعددة القنوات)": {
                        "ar": "استراتيجية الهيمنة الشاملة. سأقوم بتفعيل (Omnichannel Marketing) للوصول للمستثمرين في كل منصة (LinkedIn, Google, Snapchat, Meta, TikTok) وبناء نظام CRM استباقي متكامل.",
                        "en": "Comprehensive dominance strategy. I will enable Omnichannel Marketing to reach investors on every platform (LinkedIn, Google, Snapchat, Meta, TikTok) and build a proactive, integrated CRM system."
                    }
                },
                "condition": (ans) => ans.q9
            }
        ]
    },
    "saas": {
        "title": {
            "ar": "SaaS (البرمجيات والتطبيقات كخدمة)",
            "en": "SaaS (Software and Applications as a Service)"
        },
        "questions": [
            {
                "id": "q1",
                "label": {
                    "ar": "1. ما هي طبيعة اشتراكات ال SaaS الخاص بك والجمهور المستهدف؟",
                    "en": "1. What is the nature of your SaaS subscriptions and target audience?"
                },
                "type": "select",
                "options": [
                    {
                        "ar": "B2B (شركات ومؤسسات) - قيمة اشتراك عالية وتتطلب قرار من إدارة",
                        "en": "B2B (businesses and enterprises) - high subscription value and requires management decision"
                    },
                    {
                        "ar": "B2C (أفراد ومستهلكين) - اشتراكات شهرية منخفضة وكميات كبيرة",
                        "en": "B2C (Individuals and Consumers) – Low monthly subscriptions and high volumes"
                    },
                    {
                        "ar": "B2B2C (منصات وسيطة) تخدم الطرفين",
                        "en": "B2B2C (intermediary platforms) serve both parties"
                    }
                ],
                "insights": {
                    "B2B (شركات ومؤسسات) - قيمة اشتراك عالية وتتطلب قرار من إدارة": {
                        "ar": "في ال SaaS B2B، دورة المبيعات طويلة. الاعتماد يجب أن يكون على حملات توليد قادة الفكر (Whitepapers, Webinars) وإعادة الاستهداف عبر LinkedIn و Google.",
                        "en": "In SaaS B2B, the sales cycle is long. Reliance should be on thought leader generation campaigns (whitepapers, webinars) and retargeting via LinkedIn and Google."
                    },
                    "B2C (أفراد ومستهلكين) - اشتراكات شهرية منخفضة وكميات كبيرة": {
                        "ar": "هنا اللعبة هي حجم الاستحواذ وسرعته. التيك توك وسناب شات وتجربة النسخة المجانية (Freemium) هي المفاتيح لخفض تكلفة الاستحواذ.",
                        "en": "Here the game is the size and speed of possession. TikTok, Snapchat, and trying the freemium version are the keys to lowering the cost of acquisition."
                    },
                    "B2B2C (منصات وسيطة) تخدم الطرفين": {
                        "ar": "يتطلب هذا هيكلة إعلانية مزدوجة: واحدة لجذب الموردين، والأخرى لضخ المستخدمين. يجب تفعيل استراتيجية 'تأثير الشبكة' في التسويق.",
                        "en": "This requires a dual advertising structure: one to attract suppliers, the other to pump users. The 'network effect' strategy must be activated in marketing."
                    }
                }
            },
            {
                "id": "q2",
                "label": {
                    "ar": "2. كيف تعتمد على Google Ads لجذب مستخدمين جدد للبرنامج؟",
                    "en": "2. How do you rely on Google Ads to attract new users to the program?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نركز على حملات شبكة البحث بكلمات مقارنة (Competitor Keywords)",
                        "en": "We focus on search campaigns with competitive keywords."
                    },
                    {
                        "ar": "نستخدم حملات Performance Max لجلب كل أنواع الاشتراكات",
                        "en": "We use Performance Max campaigns to drive all types of signups"
                    },
                    {
                        "ar": "نواجه مشكلة مع المزايدة العالية جداً للكلمات التقنية (B2B SaaS)",
                        "en": "We are having a problem with very high bidding for technical words (B2B SaaS)"
                    }
                ],
                "insights": {
                    "نركز على حملات شبكة البحث بكلمات مقارنة (Competitor Keywords)": {
                        "ar": "استراتيجية (Brand Vs Competitor) قوية جداً بال SaaS. سنقوم بإنشاء صفحات هبوط خاصة تقارن مميزاتك بنقاط ضعف المنافس لاقتناص عملائهم فوراً.",
                        "en": "The Brand Vs Competitor strategy is very strong in SaaS. We will create special landing pages that compare your advantages with the competitor's weaknesses to grab their customers immediately."
                    },
                    "نستخدم حملات Performance Max لجلب كل أنواع الاشتراكات": {
                        "ar": "الـ PMax بال SaaS يحتاج لتحديد أهداف دقيقة (Value-based tracking). إذا لم تخبر جوجل بقيمة كل باقة اشتراك، سيهدر الميزانية على المسجلين المجانيين فقط.",
                        "en": "PMax in SaaS requires setting precise goals (Value-based tracking). If you don't tell Google how much each subscription package costs, your budget will be wasted on only free enrollees."
                    },
                    "نواجه مشكلة مع المزايدة العالية جداً للكلمات التقنية (B2B SaaS)": {
                        "ar": "الكلمات في ال SaaS غالية جداً. الحل هو بناء حملات (Top of Funnel) تستهدف الباحثين عن حلول للمشكلة بدلاً من الباحثين عن الأداة نفسها، وتقديم كتاب إلكتروني أو Webinar مجاني كفخ ترويجي.",
                        "en": "Words in SaaS are very expensive. The solution is to build Top of Funnel campaigns targeting those looking for solutions to the problem rather than those looking for the tool itself, and offering a free eBook or Webinar as a promotional decoy."
                    }
                },
                "condition": (ans) => ans.q1
            },
            {
                "id": "q3",
                "label": {
                    "ar": "3. ما هو النموذج التسويقي لتجربة المنتج الذي تستخدمه؟",
                    "en": "3. What product experience marketing model do you use?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نسخة تجريبية مجانية (Free Trial) محددة بوقت",
                        "en": "Free trial with limited time"
                    },
                    {
                        "ar": "خطة مجانية بالكامل مع قيود (Freemium)",
                        "en": "Completely free plan with limitations (Freemium)"
                    },
                    {
                        "ar": "لا يوجد تجربة، حجز ديمو مباشر مع المبيعات (Book a Demo)",
                        "en": "There is no trial, book a direct demo with sales (Book a Demo)"
                    }
                ],
                "insights": {
                    "نسخة تجريبية مجانية (Free Trial) محددة بوقت": {
                        "ar": "يجب تفعيل حملات إعادة استهداف (Retargeting) مكثفة تظهر مميزات محددة خلال أيام التجربة لتسريع التحول للنسخة المدفوعة.",
                        "en": "Intensive retargeting campaigns that showcase specific features must be activated during the trial days to accelerate the transition to the paid version."
                    },
                    "خطة مجانية بالكامل مع قيود (Freemium)": {
                        "ar": "التحدي هنا هو التحويل. التسويق يجب أن يركز على إبراز الألم الذي تحله المميزات المدفوعة (Pain-point targeting) وعدم الاكتفاء بالتوعية.",
                        "en": "The challenge here is conversion. Marketing must focus on highlighting the pain that paid features solve (Pain-point targeting) and not be limited to awareness."
                    },
                    "لا يوجد تجربة، حجز ديمو مباشر مع المبيعات (Book a Demo)": {
                        "ar": "حجز الديمو يتطلب ثقة عالية. سنستخدم دراسات الحالة (Case Studies) القوية لشركات في الخليج كأداة إعلانية رئيسية لإقناع صانع القرار بجدوى الميتنج.",
                        "en": "Booking a demo requires a lot of confidence. We will use powerful case studies of companies in the Gulf as a key advertising tool to convince the decision maker of the feasibility of metring."
                    }
                },
                "condition": (ans) => ans.q2
            },
            {
                "id": "q4",
                "label": {
                    "ar": "4. ما هو مؤشر الأداء الأكثر إلحاحاً الذي ترغب في تحسينه الآن؟",
                    "en": "4. What is the most urgent performance indicator you want to improve right now?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "زيادة عدد المسجلين (Signups / Demos) وتقليل تكلفتهم",
                        "en": "Increase the number of registrants (Signups / Demos) and reduce their cost"
                    },
                    {
                        "ar": "تحويل المسجلين مجاناً إلى مشتركين مدفوعين (Trial-to-Paid Conversion)",
                        "en": "Convert free subscribers to paid subscribers (Trial-to-Paid Conversion)"
                    },
                    {
                        "ar": "تقليل نسبة الإلغاء الشهري وزيادة قيمة العميل (Churn Rate & LTV)",
                        "en": "Reduce monthly cancellation rate and increase customer value (Churn Rate & LTV)"
                    }
                ],
                "insights": {
                    "زيادة عدد المسجلين (Signups / Demos) وتقليل تكلفتهم": {
                        "ar": "هذا يتطلب تحسين الصفحة المقصودة وتوضيح القيمة فوراً عبر فيديو قصير يعرض ال 'Aha Moment' لبرنامجك.",
                        "en": "This requires optimizing the landing page and immediately demonstrating the value via a short video showcasing the 'Aha Moment' of your program."
                    },
                    "تحويل المسجلين مجاناً إلى مشتركين مدفوعين (Trial-to-Paid Conversion)": {
                        "ar": "هذا يحتاج إلى سلسلة إيميلات آلية قوية (Drip Campaigns) داخل النظام ترشد المستخدم لكيفية تحقيق أقصى استفادة وتدفعه للترقية.",
                        "en": "This requires a series of strong automated emails (Drip Campaigns) within the system that guide the user on how to get the most benefit and push him to upgrade."
                    },
                    "تقليل نسبة الإلغاء الشهري وزيادة قيمة العميل (Churn Rate & LTV)": {
                        "ar": "ارتفاع الإلغاء يعني أن القيمة لا تتحقق أو تجربة الاستخدام معقدة. التسويق يجب أن يركز على تثقيف العملاء الحاليين.",
                        "en": "High cancellation means value is not achieved or the user experience is complicated. Marketing should focus on educating existing customers."
                    }
                },
                "condition": (ans) => ans.q3
            },
            {
                "id": "q5",
                "label": {
                    "ar": "5. هل قمت بربط الأحداث الداخلية (In-App Events) بمنصات الإعلانات لتتبع جودة العميل؟",
                    "en": "5. Have you linked In-App Events to advertising platforms to track lead quality?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعم، نتتبع كل نقرة وحدث مهم داخل البرنامج (Active Users)",
                        "en": "Yes, we track every click and important event within the program (Active Users)"
                    },
                    {
                        "ar": "نتتبع فقط عملية التسجيل الأولي (Signups)",
                        "en": "We only track the initial registration process (Signups)."
                    },
                    {
                        "ar": "الربط التقني لدينا ضعيف ولا نثق بالبيانات",
                        "en": "Our technical connectivity is weak and we don't trust the data"
                    }
                ],
                "insights": {
                    "نعم، نتتبع كل نقرة وحدث مهم داخل البرنامج (Active Users)": {
                        "ar": "ممتاز. سأقوم بتوظيف هذه الأحداث المتقدمة لبناء Custom Audiences للمستخدمين الأكثر نشاطاً وإنشاء Lookalike قوي لجلب عملاء ذوي ولاء عالي.",
                        "en": "excellent. I will leverage these advanced events to build Custom Audiences for the most active users and create a powerful Lookalike to bring in highly loyal customers."
                    },
                    "نتتبع فقط عملية التسجيل الأولي (Signups)": {
                        "ar": "هذا يعني أن جوجل وفيسبوك يتعلمون جلب مسجلين فقط بغض النظر عن استخدامهم الفعلي. سأقوم بإعداد تتبع ال Value Events لتوجيه الخوارزميات لجلب عملاء يدفعون.",
                        "en": "This means that Google and Facebook learn to only bring in registrants regardless of their actual usage. I will set up Value Events tracking to guide algorithms to bring in paying customers."
                    },
                    "الربط التقني لدينا ضعيف ولا نثق بالبيانات": {
                        "ar": "البيانات الخاطئة تعني قرارات خاطئة. سأقوم بتنفيذ إعدادات تتبع GTM Server-Side بالكامل لضمان صحة بيانات الاشتراك والتجديد من النظام.",
                        "en": "Bad data means wrong decisions. I will fully implement GTM Server-Side tracking settings to ensure the authenticity of subscription and renewal data from the system."
                    }
                },
                "condition": (ans) => ans.q4
            },
            {
                "id": "q6",
                "label": {
                    "ar": "6. كيف تدير حملات ال (Retargeting) لمن لم يسجل في موقعك بعد؟",
                    "en": "6. How do you manage retargeting campaigns for those who have not registered on your site yet?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نظهر لهم نفس الإعلان حتى يسجلوا",
                        "en": "We show them the same ad until they register"
                    },
                    {
                        "ar": "نعرض لهم أدلة اجتماعية (شهادات عملاء) ومقارنات",
                        "en": "We show them social proof (customer testimonials) and comparisons"
                    },
                    {
                        "ar": "لا نمتلك خطة إعادة استهداف قوية",
                        "en": "We don't have a solid retargeting plan"
                    }
                ],
                "insights": {
                    "نظهر لهم نفس الإعلان حتى يسجلوا": {
                        "ar": "التكرار العقيم يسبب ال Ad Fatigue. بال SaaS يجب أن نعالج الاعتراضات. إذا لم يسجل من الإعلان الأول، يجب أن يكون الثاني فيديو يحل مشكلة محددة يواجهها.",
                        "en": "Futile repetition causes Ad Fatigue. With SaaS we must handle objections. If he doesn't register from the first ad, the second should be a video that solves a specific problem he has."
                    },
                    "نعرض لهم أدلة اجتماعية (شهادات عملاء) ومقارنات": {
                        "ar": "تكتيك ممتاز. سنقوم بصياغة زوايا إعلانية متعددة (Angle Testing) تركز كل منها على ميزة منفردة (مثال: توفير الوقت، توفير التكلفة، تقليل الأخطاء).",
                        "en": "Excellent tactic. We will formulate multiple advertising angles (Angle Testing), each focusing on a single benefit (eg: saving time, saving cost, reducing errors)."
                    },
                    "لا نمتلك خطة إعادة استهداف قوية": {
                        "ar": "إعادة الاستهداف هي ما يحول الزائر المتردد إلى مشترك. سنبني قمعاً إعلانياً يتتبع العميل لمدة 30 يوماً يقدم محتوى تعليمياً ومقنعاً في كل مرحلة.",
                        "en": "Retargeting is what turns a reluctant visitor into a subscriber. We will build an advertising funnel that tracks the customer for 30 days delivering educational and compelling content at every stage."
                    }
                },
                "condition": (ans) => ans.q5
            },
            {
                "id": "q7",
                "label": {
                    "ar": "7. في الـ B2B SaaS، كيف تستهدف صانعي القرار (C-Level & Managers) في الخليج؟",
                    "en": "7. In B2B SaaS, how do you target decision makers (C-Level & Managers) in the Gulf?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "حملات LinkedIn Ads باستهداف المسميات الوظيفية",
                        "en": "LinkedIn Ads campaigns targeting job titles"
                    },
                    {
                        "ar": "استهداف واسع في منصات ميتا وتويتر (X)",
                        "en": "Broad targeting on Meta and Twitter platforms (X)"
                    },
                    {
                        "ar": "البحث العضوي و SEO و Google Search المدفوع",
                        "en": "Organic Search, SEO, and Paid Google Search"
                    }
                ],
                "insights": {
                    "حملات LinkedIn Ads باستهداف المسميات الوظيفية": {
                        "ar": "لينكد إن هو الأقوى، لكنه الأغلى. سأقوم بتطوير استراتيجية Lead Magnet (كتاب أبيض/أداة حاسبة) لجلب الـ Leads بتكلفة منطقية ثم بيعهم لاحقاً.",
                        "en": "LinkedIn is the most powerful, but the most expensive. I will develop a Lead Magnet strategy (white paper/calculator) to bring in leads at a reasonable cost and then sell them later."
                    },
                    "استهداف واسع في منصات ميتا وتويتر (X)": {
                        "ar": "تويتر بالخليج ممتاز ل B2B إذا كان الاستهداف عبر كلمات المحادثات. ميتا تحتاج فيديوهات قصيرة تخاطب طموح صانع القرار في ترقية عمله.",
                        "en": "Twitter in the Gulf is excellent for B2B if the targeting is through the words of conversations. Meta needs short videos that address the decision maker's ambition to promote his work."
                    },
                    "البحث العضوي و SEO و Google Search المدفوع": {
                        "ar": "البحث يمثل 'النية الجاهزة'. سأهيكل حملات جوجل بحملات SKAG (Single Keyword Ad Groups) لضمان ظهور إعلانك لكل استفسار فني يكتبه صانع القرار.",
                        "en": "Search represents 'ready intention'. I will structure your Google campaigns with SKAG (Single Keyword Ad Groups) campaigns to ensure your ad appears for every technical inquiry a decision maker writes."
                    }
                },
                "condition": (ans) => ans.q6
            },
            {
                "id": "q8",
                "label": {
                    "ar": "8. كيف تتعامل مع التسعير والتحويل للعملات المحلية في الخليج كمنتج SaaS؟",
                    "en": "8. How do you handle pricing and conversion for local currencies in the Gulf as a SaaS product?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "تسعير موحد بالدولار للجميع",
                        "en": "Uniform pricing in dollars for everyone"
                    },
                    {
                        "ar": "تسعير مخصص بالريال/الدرهم ومترجم بالكامل",
                        "en": "Customized pricing in SAR/Dirham and fully translated"
                    },
                    {
                        "ar": "لدينا أسعار مختلفة لكل باقة بناء على حجم الشركة (Enterprise)",
                        "en": "We have different prices for each package based on the size of the company."
                    }
                ],
                "insights": {
                    "تسعير موحد بالدولار للجميع": {
                        "ar": "تسعير الدولار قد يخلق حاجزاً نفسياً لدى الشركات السعودية المعتمدة على الفوترة بالريال. دعم العملات المحلية يرفع نسبة التحويل ب 15%.",
                        "en": "Dollar pricing may create a psychological barrier for Saudi companies that rely on invoicing in riyals. Supporting local currencies increases the conversion rate by 15%."
                    },
                    "تسعير مخصص بالريال/الدرهم ومترجم بالكامل": {
                        "ar": "هذا يعكس احترافية وجدية تامة للبرنامج في السوق المحلي. سنستخدم هذه النقطة ك USP (ميزة تنافسية) في الإعلانات.",
                        "en": "This reflects the professionalism and complete seriousness of the program in the local market. We will use this point as a USP (competitive advantage) in advertising."
                    },
                    "لدينا أسعار مختلفة لكل باقة بناء على حجم الشركة (Enterprise)": {
                        "ar": "باقات ال Enterprise لا تباع أونلاين. سنقوم بتوجيه إعلانات الباقات الكبرى لطلب حجز استشارة تقنية لضمان مبيعات مستدامة وعقود سنوية (ARR).",
                        "en": "Enterprise packages are not sold online. We will direct advertisements for major packages to request a technical consultation to ensure sustainable sales and annual contracts (ARR)."
                    }
                },
                "condition": (ans) => ans.q7
            },
            {
                "id": "q9",
                "label": {
                    "ar": "9. ما هي الاستراتيجية المتبعة لتقليل التسرب الشهري (Churn Rate)؟",
                    "en": "9. What is the strategy used to reduce monthly leakage (Churn rate)?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "تحسين المنتج وإضافة مميزات جديدة باستمرار",
                        "en": "Improving the product and adding new features constantly"
                    },
                    {
                        "ar": "خدمة عملاء قوية والتواصل الفعال بعد الشراء (Onboarding)",
                        "en": "Strong customer service and effective post-purchase communication (Onboarding)"
                    },
                    {
                        "ar": "إعادة استهداف المشتركين الحاليين لترقيتهم (Upselling)",
                        "en": "Retargeting existing subscribers to upgrade them (Upselling)"
                    }
                ],
                "insights": {
                    "تحسين المنتج وإضافة مميزات جديدة باستمرار": {
                        "ar": "المميزات الجديدة ممتازة، ولكن الإعلان عنها للمستخدمين الحاليين عبر إعلانات ال Push والبريد الإلكتروني هو ما يضمن بقائهم وفهمهم لقيمة البرنامج المتزايدة.",
                        "en": "New features are great, but announcing them to existing users via push ads and email is what ensures they stay and understand the increased value of the software."
                    },
                    "خدمة عملاء قوية والتواصل الفعال بعد الشراء (Onboarding)": {
                        "ar": "ال Onboarding هو السلاح الأول ضد التسرب. إذا لم يحصل المستخدم على قيمة خلال أول 7 أيام، سيغادر. سأرسم رحلة المستخدم لتسريع ال Aha Moment.",
                        "en": "Onboarding is the number one weapon against leakage. If a user doesn't get value within the first 7 days, they will leave. I will map out the user journey to speed up the Aha Moment."
                    },
                    "إعادة استهداف المشتركين الحاليين لترقيتهم (Upselling)": {
                        "ar": "هذه هي الطريقة الصحيحة لرفع القيمة الحياتية (LTV). سأقوم ببناء حملات مخصصة لترقية المشتركين الشهريين إلى باقات سنوية بخصومات ذكية.",
                        "en": "This is the right way to raise your Lifetime Value (LTV). I will build custom campaigns to upgrade monthly subscribers to annual plans with smart discounts."
                    }
                },
                "condition": (ans) => ans.q8
            },
            {
                "id": "q10",
                "label": {
                    "ar": "10. ما هي ميزانيتك الإعلانية الشهرية المتوقعة للبدء بهذه الاستراتيجية المتقدمة؟",
                    "en": "10. What is your expected monthly advertising budget to start with this advanced strategy?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "أقل من 3,000$ (مرحلة الإطلاق والاختبار الأولي)",
                        "en": "Less than $3,000 (launch and initial testing)"
                    },
                    {
                        "ar": "3,000$ إلى 10,000$ (مرحلة النمو واكتساب مستخدمين جدد بشكل دوري)",
                        "en": "$3,000 to $10,000 (growth stage and acquiring new users periodically)"
                    },
                    {
                        "ar": "أكثر من 10,000$ (مرحلة الهيمنة وبناء حصة سوقية قوية)",
                        "en": "More than $10,000 (the stage of dominance and building a strong market share)"
                    }
                ],
                "insights": {
                    "أقل من 3,000$ (مرحلة الإطلاق والاختبار الأولي)": {
                        "ar": "في هذه الميزانية، سأركز كلياً على (Bottom of Funnel) وحملات Google Search و Retargeting في ميتا لضمان جلب تدفق مالي مبدئي يدعم التطوير.",
                        "en": "In this budget, I will focus entirely on Bottom of Funnel, Google Search and Retargeting campaigns in Meta to ensure we bring in an initial cash flow that supports development."
                    },
                    "3,000$ إلى 10,000$ (مرحلة النمو واكتساب مستخدمين جدد بشكل دوري)": {
                        "ar": "ميزانية نمو ممتازة. ستتيح لنا دمج حملات LinkedIn لتوليد Leads للشركات الكبرى وحملات تيك توك لجذب الشركات الناشئة بشكل مكثف.",
                        "en": "Excellent growth budget. It will allow us to combine LinkedIn campaigns to generate leads for large companies and TikTok campaigns to attract startups intensively."
                    },
                    "أكثر من 10,000$ (مرحلة الهيمنة وبناء حصة سوقية قوية)": {
                        "ar": "بهذه الميزانية، سأقوم بتبني استراتيجية Omnichannel متكاملة تشمل كل نقاط التواصل (Touchpoints) وبناء Brand Awareness يقصي المنافسين الصغار من السوق.",
                        "en": "With this budget, I will adopt an integrated Omnichannel strategy that includes all touchpoints and build Brand Awareness that excludes smaller competitors from the market."
                    }
                },
                "condition": (ans) => ans.q9
            }
        ]
    },
    "media-buying": {
        "title": {
            "ar": "Media Buying (الإعلانات المدفوعة والبيكسلات)",
            "en": "Media Buying (paid ads and pixels)"
        },
        "questions": [
            {
                "id": "q1",
                "label": {
                    "ar": "1. ما هي المنصة الإعلانية الرئيسية التي تعتمد عليها حالياً لجلب المبيعات في السوق الخليجي؟",
                    "en": "1. What is the main advertising platform that you currently rely on to bring in sales in the Gulf market?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "سناب شات (Snapchat Ads) - للأرقام المليونية في السعودية",
                        "en": "Snapchat Ads - for million numbers in Saudi Arabia"
                    },
                    {
                        "ar": "تيك توك (TikTok Ads) - التفاعل الأسرع لجيل الشباب في الخليج",
                        "en": "TikTok Ads - The fastest interaction for the younger generation in the Gulf"
                    },
                    {
                        "ar": "إعلانات جوجل (Google Performance Max) - للبحث ذو النية العالية",
                        "en": "Google Ads (Google Performance Max) – for high-intent search"
                    },
                    {
                        "ar": "إعلانات ميتا (Instagram & Facebook) - للبراندات البصرية المميزة",
                        "en": "Meta Ads (Instagram & Facebook) - for distinctive visual brands"
                    },
                    {
                        "ar": "لا نعلن حالياً / متجر جديد بالكامل",
                        "en": "We are not currently advertising a completely new store"
                    }
                ],
                "insights": {
                    "سناب شات (Snapchat Ads) - للأرقام المليونية في السعودية": {
                        "ar": "سناب شات هو المنجم الذهبي للمبيعات في السعودية بشرط إعداد تتبع Conversions API (CAPI) دقيق من جانب السيرفر لتجاوز حظر iOS 14+.",
                        "en": "Snapchat is the gold mine for sales in Saudi Arabia, provided that accurate Conversions API (CAPI) tracking is set up on the server side to bypass the iOS 14+ ban."
                    },
                    "تيك توك (TikTok Ads) - التفاعل الأسرع لجيل الشباب في الخليج": {
                        "ar": "تيك توك يحقق انتشاراً واستحواذاً ممتازاً بالخليج، ولكن مفتاح النجاح هنا هو سرعة تحديث الفيديو الإعلاني (Creatives) كل 7 أيام لتفادي إرهاق الإعلان (Ad Fatigue).",
                        "en": "Tik Tok is achieving excellent spread and acquisition in the Gulf, but the key to success here is the speed of updating the advertising video (Creatives) every 7 days to avoid ad fatigue (Ad Fatigue)."
                    },
                    "إعلانات جوجل (Google Performance Max) - للبحث ذو النية العالية": {
                        "ar": "إعلانات جوجل هي الأقوى للعملاء ذوي النية العالية للشراء. في الخليج، الاستهداف باستخدام المصطلحات الدارجة بالعامية يحقق عائداً أعلى ب 3 أضعاف من الفصحى.",
                        "en": "Google Ads are the most powerful for customers with high purchase intent. In the Gulf, targeting using colloquial terms achieves a return 3 times higher than standard Arabic."
                    },
                    "إعلانات ميتا (Instagram & Facebook) - للبراندات البصرية المميزة": {
                        "ar": "انستجرام هو القوة الضاربة في الإمارات والكويت والمنطقة الشرقية بالسعودية للبراندات الفاخرة التي تعتمد على القيمة البصرية وهوية القوية (Visual Positioning).",
                        "en": "Instagram is the powerful force in the UAE, Kuwait, and the Eastern Province of Saudi Arabia for luxury brands that rely on visual value and strong identity."
                    },
                    "لا نعلن حالياً / متجر جديد بالكامل": {
                        "ar": "البداية الصحيحة توفر آلاف الريالات. ننصح بالتركيز أولاً على إثبات ملائمة المنتج للسوق الخليجي بميزانية محدودة قبل إطلاق حملات Scaling واسعة.",
                        "en": "The right start saves thousands of riyals. We recommend focusing first on proving the suitability of the product for the Gulf market with a limited budget before launching extensive scaling campaigns."
                    }
                }
            },
            {
                "id": "q2",
                "label": {
                    "ar": "2. في إعلانات جوجل (Google Ads)، كيف تتعامل مع حسابك لرفع نسبة التحويل؟",
                    "en": "2. In Google Ads, how do you deal with your account to increase the conversion rate?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعتمد على توصيات الذكاء الاصطناعي من جوجل تلقائياً",
                        "en": "We rely on Google's artificial intelligence recommendations automatically"
                    },
                    {
                        "ar": "نطبق استراتيجيات مزايدة متقدمة (Value-Based Bidding)",
                        "en": "We apply advanced value-based bidding strategies."
                    },
                    {
                        "ar": "نستخدم جوجل للبحث عن اسم علامتنا التجارية فقط (Brand Awareness)",
                        "en": "We use Google to search for our brand name only (Brand Awareness)"
                    }
                ],
                "insights": {
                    "نعتمد على توصيات الذكاء الاصطناعي من جوجل تلقائياً": {
                        "ar": "الاعتماد الأعمى على توصيات جوجل يستنزف الميزانية لصالحهم! سأقوم بفلترة التوصيات يدوياً وضبط المزايدة لخدمة أرباحك الصافية (Profit Margins) وليس فقط حجم الزيارات.",
                        "en": "Blind reliance on Google recommendations drains the budget for their benefit! I will manually filter the recommendations and adjust the bidding to serve your net profits (Profit Margins) and not just the volume of visits."
                    },
                    "نطبق استراتيجيات مزايدة متقدمة (Value-Based Bidding)": {
                        "ar": "ممتاز جداً! هذا التوجه سيزيد من قيمة متوسط الطلب (AOV). خطوتي التالية معك ستكون دمج بيانات العائد الإجمالي (LTV) مع إعدادات PMax لتحقيق نتائج أسطورية.",
                        "en": "Very excellent! This trend will increase the average order value (AOV). My next step with you will be to combine your total return (LTV) data with your PMax settings to achieve epic results."
                    },
                    "نستخدم جوجل للبحث عن اسم علامتنا التجارية فقط (Brand Awareness)": {
                        "ar": "هذا يعني أنك تترك 90% من عملائك المحتملين للمنافسين. جوجل هو السلاح الأقوى ل (Non-Brand Search). سأبني لك حملات لاصطياد كل من يبحث عن مجالك العام.",
                        "en": "This means you are leaving 90% of your potential customers to competitors. Google is the most powerful weapon for (Non-Brand Search). I will build campaigns for you to catch everyone searching for your general domain."
                    }
                },
                "condition": (ans) => ans.q1
            },
            {
                "id": "q3",
                "label": {
                    "ar": "3. كيف تتعامل مع حظر ال Cookies في أجهزة أبل (iOS 14+) وفقدان البيانات؟",
                    "en": "3. How to deal with cookies being blocked on Apple devices (iOS 14+) and data loss?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "قمنا بإعداد ال Server-Side Tracking بشكل متكامل",
                        "en": "We have prepared Server-Side Tracking in an integrated manner"
                    },
                    {
                        "ar": "نعتمد على البيكسل العادي عبر المتصفح (Browser Pixel)",
                        "en": "We rely on the regular pixel via the browser (Browser Pixel)."
                    },
                    {
                        "ar": "نواجه مشكلة في مطابقة الأرقام (Discrepancy) بين المتجر والمنصات",
                        "en": "We are experiencing a problem with matching numbers (Discrepancy) between the store and the platforms"
                    }
                ],
                "insights": {
                    "قمنا بإعداد ال Server-Side Tracking بشكل متكامل": {
                        "ar": "هذا يعطيك تفوقاً تقنياً كبيراً! سأعمل على رفع مؤشر جودة المطابقة (Event Match Quality) لضمان أن الخوارزميات تتلقى معلومات مفصلة عن عملائك لتحسين الاستهداف.",
                        "en": "This gives you a huge technical advantage! I will raise the Event Match Quality index to ensure that the algorithms receive detailed information about your customers to improve targeting."
                    },
                    "نعتمد على البيكسل العادي عبر المتصفح (Browser Pixel)": {
                        "ar": "البيكسل العادي يعمي الخوارزميات عن أكثر من 30-40% من مبيعات الخليج (بسبب نسبة مستخدمي الآيفون). سأقوم بتنصيب ال Server-Side لك فوراً لاستعادة دقة الحملات.",
                        "en": "The regular pixel blinds algorithms to more than 30-40% of Gulf sales (due to the percentage of iPhone users). I will install Server-Side for you immediately to restore the accuracy of your campaigns."
                    },
                    "نواجه مشكلة في مطابقة الأرقام (Discrepancy) بين المتجر والمنصات": {
                        "ar": "هذه مشكلة قياسية للمتاجر المعتمدة على البيكسل القديم. سأبني بنية تتبع سحابية (GTM Server-Side) تقلص الفجوة إلى أقل من 5% وتضاعف من ذكاء حملاتنا.",
                        "en": "This is a standard issue for legacy Pixel based stores. I will build a cloud-based tracking architecture (GTM Server-Side) that reduces the gap to less than 5% and doubles the intelligence of our campaigns."
                    }
                },
                "condition": (ans) => ans.q2
            },
            {
                "id": "q4",
                "label": {
                    "ar": "4. ما هي نسبة الميزانية المخصصة لحملات إعادة الاستهداف (Retargeting) من إجمالي ميزانيتك؟",
                    "en": "4. What percentage of your total budget is allocated to retargeting campaigns?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "أكثر من 20%، ونمتلك قمع مبيعات محكم (Funnel)",
                        "en": "More than 20%, and we have a tight sales funnel (funnel)."
                    },
                    {
                        "ar": "أقل من 10%، ونعتمد غالباً على إعلانات عامة للجميع",
                        "en": "Less than 10%, and we often rely on general advertisements for everyone"
                    },
                    {
                        "ar": "لا نستخدم إعادة الاستهداف إطلاقاً",
                        "en": "We don't use retargeting at all"
                    }
                ],
                "insights": {
                    "أكثر من 20%، ونمتلك قمع مبيعات محكم (Funnel)": {
                        "ar": "توزيع احترافي! سأقوم بتطوير زوايا محتوى مخصصة للمترددين (Objection Handling) مثل ضمانات الجودة وشروحات الفيديو لرفع نسبة الإغلاق النهائي.",
                        "en": "Professional distribution! I will develop custom content angles for the hesitant (Objection Handling) such as quality assurance and video explainers to increase the final closing rate."
                    },
                    "أقل من 10%، ونعتمد غالباً على إعلانات عامة للجميع": {
                        "ar": "جلب عميل جديد أغلى ب 5 أضعاف من إغلاق عميل زار موقعك. سأزيد نسبة إعادة الاستهداف وأستخدم (Dynamic Product Ads) لمضاعفة الأرباح بتكلفة منخفضة.",
                        "en": "Bringing a new customer is 5 times more expensive than closing a customer who visited your site. I will increase retargeting and use Dynamic Product Ads to double profits at a low cost."
                    },
                    "لا نستخدم إعادة الاستهداف إطلاقاً": {
                        "ar": "أنت تحرق ميزانيتك الإعلانية بالكامل! معظم العملاء لا يشترون من الزيارة الأولى. سأبني لك حملات إعادة استهداف تلاحق العميل في كل منصة حتى يقرر الشراء.",
                        "en": "You're burning up your entire advertising budget! Most customers don't buy on the first visit. I will build you retargeting campaigns that follow the customer on each platform until they decide to buy."
                    }
                },
                "condition": (ans) => ans.q3
            },
            {
                "id": "q5",
                "label": {
                    "ar": "5. عندما تفشل حملة إعلانية في تحقيق العائد المطلوب (ROAS)، ما هو أول إجراء تتخذه؟",
                    "en": "5. When an ad campaign fails to achieve ROAS, what is your first action?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "إيقاف الحملة فوراً وتقليل الميزانية",
                        "en": "Stop the campaign immediately and reduce the budget"
                    },
                    {
                        "ar": "تغيير المحتوى الإعلاني (Creatives) واختبار زوايا جديدة",
                        "en": "Changing advertising content (Creatives) and testing new angles"
                    },
                    {
                        "ar": "توسيع الاستهداف أو تغيير ال Bidding Strategy",
                        "en": "Expand targeting or change bidding strategy"
                    }
                ],
                "insights": {
                    "إيقاف الحملة فوراً وتقليل الميزانية": {
                        "ar": "الإيقاف المفاجئ يكسر مرحلة تعلم الخوارزمية (Learning Phase). سأعلمك متى تصبر على الحملة ومتى تتدخل لتصحيح مسارها دون إرباك الذكاء الاصطناعي.",
                        "en": "A sudden stop breaks the learning phase of the algorithm. I will teach you when to be patient with the campaign and when to intervene to correct its course without overwhelming the AI."
                    },
                    "تغيير المحتوى الإعلاني (Creatives) واختبار زوايا جديدة": {
                        "ar": "هذا هو التفكير الاستراتيجي الصحيح! في 2026، ال Creative هو الاستهداف الحقيقي. سأقوم بإدارة اختبارات A/B مستمرة (Creative Testing Framework) للعثور على الفيديو الرابح.",
                        "en": "This is correct strategic thinking! In 2026, creative is the real target. I will run ongoing A/B tests (Creative Testing Framework) to find the winning video."
                    },
                    "توسيع الاستهداف أو تغيير ال Bidding Strategy": {
                        "ar": "تغيير المزايدة هو حل تقني ممتاز. سنختبر استخدام (Cost Cap / Target ROAS) في سناب وتيك توك لحماية هامش ربحك من تقلبات المزاد.",
                        "en": "Changing the bid is an excellent technical solution. We will test the use of (Cost Cap / Target ROAS) in Snap and TikTok to protect your profit margin from auction fluctuations."
                    }
                },
                "condition": (ans) => ans.q4
            },
            {
                "id": "q6",
                "label": {
                    "ar": "6. هل تستخدم ميزات (Broad Targeting) الحديثة أم تعتمد على الاستهداف التفصيلي القديم (Detailed Interests)؟",
                    "en": "6. Do you use modern Broad Targeting features or rely on old Detailed Interests targeting?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعتمد على الخوارزمية المفتوحة (Broad / Advantage+)",
                        "en": "We rely on the open algorithm (Broad / Advantage+)"
                    },
                    {
                        "ar": "نستهدف اهتمامات محددة بدقة شديدة (Interests)",
                        "en": "We target very specific interests."
                    },
                    {
                        "ar": "نستخدم Lookalike Audiences كعنصر أساسي",
                        "en": "We use Lookalike Audiences as a core component"
                    }
                ],
                "insights": {
                    "نعتمد على الخوارزمية المفتوحة (Broad / Advantage+)": {
                        "ar": "الاستهداف المفتوح مع محتوى فيديو قوي هو سر النجاح (Scaling) للمتاجر الضخمة في الخليج. سأركز على تقوية محتواك (Hooks) ليعمل كفلتر للاستهداف.",
                        "en": "Open targeting with strong video content is the secret to success for mega stores in the Gulf. I will focus on strengthening your content (Hooks) to act as a targeting filter."
                    },
                    "نستهدف اهتمامات محددة بدقة شديدة (Interests)": {
                        "ar": "الاهتمامات التفصيلية أصبحت محدودة ومكلفة. سأنقلك تدريجياً لتبني استراتيجيات الاستهداف الأوسع مع ترك الذكاء الاصطناعي يبحث عن المشترين الأرخص.",
                        "en": "Detailed concerns have become limited and expensive. I will gradually move you to adopt broader targeting strategies while letting the AI ​​look for the cheapest buyers."
                    },
                    "نستخدم Lookalike Audiences كعنصر أساسي": {
                        "ar": "الجماهير المشابهة قوية جداً. سأطور جودتها عبر عمل (Lookalike) لأعلى 10% من عملائك قيمة (High-LTV Customers) للحصول على أفضل مشترين في السوق.",
                        "en": "Lookalike audiences are very powerful. I will improve your quality by Lookalike to your highest value customers (High-LTV Customers) to get the best buyers in the market."
                    }
                },
                "condition": (ans) => ans.q5
            },
            {
                "id": "q7",
                "label": {
                    "ar": "7. ما هو التحدي الأكبر الذي يمنعك من مضاعفة الميزانية (Scaling) لمستويات أعلى؟",
                    "en": "7. What is the biggest challenge that prevents you from scaling to higher levels?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "انهيار العائد (ROAS) كلما قمنا برفع الميزانية",
                        "en": "ROAS decreases as we raise the budget"
                    },
                    {
                        "ar": "سرعة إرهاق الإعلانات (Ad Fatigue) والحاجة لتحديث مستمر",
                        "en": "Ad Fatigue and the need for constant updating"
                    },
                    {
                        "ar": "عدم وجود سيولة أو قيود في العمليات والتخزين والشحن",
                        "en": "Lack of liquidity or restrictions in operations, storage and shipping"
                    }
                ],
                "insights": {
                    "انهيار العائد (ROAS) كلما قمنا برفع الميزانية": {
                        "ar": "الرفع السريع يربك الخوارزمية. سأستخدم تقنيات ال (Vertical Scaling بزيادة 20%) أو ال (Horizontal Scaling بتكرار الحملات الناجحة بحذر) لضمان استقرار الأرباح.",
                        "en": "Fast uploading confuses the algorithm. I will use Vertical Scaling techniques with an increase of 20% or Horizontal Scaling by carefully repeating successful campaigns to ensure stable profits."
                    },
                    "سرعة إرهاق الإعلانات (Ad Fatigue) والحاجة لتحديث مستمر": {
                        "ar": "هذه طبيعة منصات مثل تيك توك وسناب. سأقوم بهندسة عملية إنتاج محتوى (Creative Workflow) تضمن لك ضخ 3 فيديوهات جديدة أسبوعياً لاختبارها تلقائياً.",
                        "en": "This is the nature of platforms like TikTok and Snap. I will engineer a content production process (Creative Workflow) that ensures you pump out 3 new videos per week to test automatically."
                    },
                    "عدم وجود سيولة أو قيود في العمليات والتخزين والشحن": {
                        "ar": "تحديات اللوجستيات هي القاتل الصامت للحملات. سأقوم بتنظيم وتيرة تدفق الطلبات لتتناسب مع قدرات التخزين والشحن لديك لتفادي المرتجعات الغاضبة.",
                        "en": "Logistics challenges are the silent killer of campaigns. I will pace your order flow to match your warehousing and shipping capabilities to avoid angry returns."
                    }
                },
                "condition": (ans) => ans.q6
            },
            {
                "id": "q8",
                "label": {
                    "ar": "8. كيف توزع الميزانية في حملات الوعي بالعلامة التجارية (Brand Awareness) مقابل المبيعات (Performance)؟",
                    "en": "8. How do you distribute budget in Brand Awareness versus Performance campaigns?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نركز 100% على حملات المبيعات (Conversions) ولا نضيع أموالنا في الوعي",
                        "en": "We focus 100% on sales campaigns (Conversions) and do not waste our money on awareness"
                    },
                    {
                        "ar": "نوزع الميزانية بذكاء: 80% مبيعات و 20% لتوعية شرائح جديدة",
                        "en": "We distribute the budget intelligently: 80% for sales and 20% for awareness of new segments"
                    },
                    {
                        "ar": "نركز بكثافة على الوعي والمشاهدات ونأمل أن تأتي المبيعات لاحقاً",
                        "en": "We focus heavily on awareness and views and hopefully sales will come later"
                    }
                ],
                "insights": {
                    "نركز 100% على حملات المبيعات (Conversions) ولا نضيع أموالنا في الوعي": {
                        "ar": "في بداية المتجر، هذا ممتاز. لكن لضمان استدامة النمو، سأبدأ تدريجياً في توظيف بعض ميزانية ال (Top of Funnel) لجلب زوار جدد بتكلفة منخفضة وإعادة استهدافهم.",
                        "en": "At the beginning of the store, this is excellent. But to ensure sustainable growth, I will gradually start using some of my Top of Funnel budget to bring in new visitors at a low cost and retarget them."
                    },
                    "نوزع الميزانية بذكاء: 80% مبيعات و 20% لتوعية شرائح جديدة": {
                        "ar": "هذا هو التوزيع الذهبي للمتاجر الناجحة بالخليج. سنقيس نجاح ال 20% عبر تتبع ارتفاع عمليات البحث عن علامتك التجارية (Brand Lift) في محرك جوجل.",
                        "en": "This is the golden distribution of successful stores in the Gulf. We will measure the success of the 20% by tracking the increase in searches for your brand (Brand Lift) in Google."
                    },
                    "نركز بكثافة على الوعي والمشاهدات ونأمل أن تأتي المبيعات لاحقاً": {
                        "ar": "الأمل ليس استراتيجية! الوعي بدون خطة إغلاق سيهدر ميزانيتك. سأعيد هيكلة الحملات لتكون (Direct Response) لتحقيق عائد ملموس من كل دولار يُنفق.",
                        "en": "Hope is not a strategy! Awareness without a closing plan will waste your budget. I will restructure campaigns to be Direct Response to generate a tangible return on every dollar spent."
                    }
                },
                "condition": (ans) => ans.q7
            },
            {
                "id": "q9",
                "label": {
                    "ar": "9. في تحليلاتك (Analytics)، هل تقوم بقراءة مؤشرات الجودة الأساسية مثل (Thumb-stop ratio) و (Hook Rate)؟",
                    "en": "9. In your analytics, do you read basic quality indicators such as (Thumb-stop ratio) and (Hook rate)?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعم، نحلل هذه الأرقام يومياً لمعرفة أداء الثواني الأولى للإعلان",
                        "en": "Yes, we analyze these numbers daily to know the performance of the first seconds of the ad"
                    },
                    {
                        "ar": "نكتفي بمتابعة تكلفة الشراء (CPA) ونسبة النقر (CTR)",
                        "en": "We only track the cost per purchase (CPA) and the click-through rate (CTR)."
                    },
                    {
                        "ar": "التحليلات معقدة، نركز فقط على إجمالي المبيعات نهاية الشهر",
                        "en": "Analytics are complex, we only focus on total sales at the end of the month"
                    }
                ],
                "insights": {
                    "نعم، نحلل هذه الأرقام يومياً لمعرفة أداء الثواني الأولى للإعلان": {
                        "ar": "احترافية عالية. سأتعمق في تحليل أين يسقط انتباه المشاهد (Drop-off Rate) لتحسين إنتاج المحتوى القادم وضمان مشاهدته للنهاية واتخاذ إجراء.",
                        "en": "High professionalism. I'll delve into analyzing where the viewer's attention falls (Drop-off Rate) to optimize upcoming content production and ensure they watch the end and take action."
                    },
                    "نكتفي بمتابعة تكلفة الشراء (CPA) ونسبة النقر (CTR)": {
                        "ar": "هذه الأرقام مهمة لكنها لا تخبرك 'لماذا' فشل الإعلان. سأبدأ في تطبيق تقارير ال (Creative Analytics) لمعرفة هل المشكلة في الإعلان أم في العرض نفسه.",
                        "en": "These numbers are important but they don't tell you 'why' advertising fails. I will start applying Creative Analytics reports to find out if the problem is in the ad or the offer itself."
                    },
                    "التحليلات معقدة، نركز فقط على إجمالي المبيعات نهاية الشهر": {
                        "ar": "المبيعات الإجمالية لا تتيح لك معالجة الخلل فور وقوعه. سأبني لك لوحة تحكم حية (Live Dashboard) تبسط لك الأرقام التسويقية لتأخذ قرارات سريعة وتوفر الخسائر.",
                        "en": "Gross sales do not allow you to address a defect as soon as it occurs. I will build you a live dashboard that simplifies marketing numbers for you to make quick decisions and save losses."
                    }
                },
                "condition": (ans) => ans.q8
            },
            {
                "id": "q10",
                "label": {
                    "ar": "10. ما هو حجم ميزانية الميديا باينج (Media Buying) المستهدفة شهرياً التي تريد إدارتها باحترافية؟",
                    "en": "10. What is the targeted monthly media buying budget that you want to manage professionally?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "مرحلة البدء: 3,000$ إلى 8,000$",
                        "en": "Start-up stage: $3,000 to $8,000"
                    },
                    {
                        "ar": "مرحلة النمو: 8,000$ إلى 20,000$",
                        "en": "Growth stage: $8,000 to $20,000"
                    },
                    {
                        "ar": "مرحلة التوسع الشرس: أكثر من 20,000$ شهرياً",
                        "en": "Aggressive expansion stage: more than $20,000 per month"
                    }
                ],
                "insights": {
                    "مرحلة البدء: 3,000$ إلى 8,000$": {
                        "ar": "سأوجه هذه الميزانية لاختبار منصة واحدة بشكل عميق (مثلاً: تيك توك أو جوجل) للوصول لل (Proof of Concept) وضمان ربحية النموذج قبل ضخ المزيد.",
                        "en": "I will direct this budget to deeply test one platform (for example: TikTok or Google) to reach (Proof of Concept) and ensure the profitability of the model before pumping more."
                    },
                    "مرحلة النمو: 8,000$ إلى 20,000$": {
                        "ar": "بهذه الميزانية، سأبدأ بنشر الحملات عبر (Cross-channel Strategy) لدمج قوة الـ Search من جوجل مع الانتشار الفيروسي من السوشيال ميديا.",
                        "en": "With this budget, I will start deploying Cross-channel Strategy campaigns to combine the power of Google Search with social media virality."
                    },
                    "مرحلة التوسع الشرس: أكثر من 20,000$ شهرياً": {
                        "ar": "الآن اللعبة تعتمد على هندسة البيانات، وتقنيات المزايدة المعقدة، والتحليل التنبؤي، وإغراق السوق باختبارات ال Creatives للهيمنة التامة على حصة منافسيك.",
                        "en": "Now the game depends on data engineering, complex bidding techniques, predictive analysis, and flooding the market with creatives tests to completely dominate your competitors' share."
                    }
                },
                "condition": (ans) => ans.q9
            }
        ]
    },
    "medical-clinics": {
        "title": {
            "ar": "Medical Clinics (العيادات والمجمعات الطبية)",
            "en": "Medical Clinics (clinics and medical complexes)"
        },
        "questions": [
            {
                "id": "q1",
                "label": {
                    "ar": "1. ما هو التخصص الطبي الذي تركز على تسويقه لجلب حجوزات؟",
                    "en": "1. What medical specialty are you focusing on marketing to attract bookings?"
                },
                "type": "select",
                "options": [
                    {
                        "ar": "جلدية وتجميل وليزر (أكثر التخصصات تنافسية)",
                        "en": "Dermatology, cosmetology and laser (the most competitive specialties)"
                    },
                    {
                        "ar": "طب وتقويم وتجميل الأسنان",
                        "en": "Dentistry, orthodontics and cosmetic dentistry"
                    },
                    {
                        "ar": "جراحات السمنة والتجميل المتخصصة",
                        "en": "Specialized obesity and cosmetic surgeries"
                    },
                    {
                        "ar": "مجمع طبي عام وتخصصات متعددة",
                        "en": "General medical complex with multiple specialties"
                    }
                ],
                "insights": {
                    "جلدية وتجميل وليزر (أكثر التخصصات تنافسية)": {
                        "ar": "قطاع التجميل يعتمد 90% على العروض والسعر. للهروب من حرب الأسعار، يجب تسليط الضوء على خبرة الأطباء وجودة الأجهزة وبناء علامة تجارية موثوقة.",
                        "en": "The beauty sector depends 90% on offers and price. To escape the price war, doctors' experience and quality of devices must be highlighted and a reliable brand must be built."
                    },
                    "طب وتقويم وتجميل الأسنان": {
                        "ar": "حملات الأسنان تنجح جداً عند استخدام فيديوهات توضيحية لابتسامات العملاء السعداء، وتقديم استشارات أو أشعة مجانية لجلب العميل للعيادة أولاً.",
                        "en": "Dental campaigns are very successful when they use explainer videos of happy customers' smiles, and offer free consultations or x-rays to bring the customer to the clinic first."
                    },
                    "جراحات السمنة والتجميل المتخصصة": {
                        "ar": "هذه قرارات مصيرية للعميل. التكتيك الأفضل هو عرض قصص نجاح حقيقية (حسب اللوائح الطبية) وتسهيل أنظمة التقسيط لكسر حاجز التكلفة المرتفعة.",
                        "en": "These are crucial decisions for the client. The best tactic is to offer real success stories (according to medical regulations) and facilitate installment systems to break the high cost barrier."
                    },
                    "مجمع طبي عام وتخصصات متعددة": {
                        "ar": "التسويق المحلي (Local SEO) وإعلانات جوجل المرتبطة بالخرائط هي الأهم هنا. المريض يبحث عن 'أقرب عيادة أطفال' ويجب أن تتصدر النتائج.",
                        "en": "Local SEO and Google Maps related ads are the most important here. The patient searches for 'nearest pediatric clinic' and it should be at the top of the results."
                    }
                }
            },
            {
                "id": "q2",
                "label": {
                    "ar": "2. كيف تعتمد على إعلانات جوجل لعيادتك (Local Campaigns / Search)؟",
                    "en": "2. How do you rely on Google ads for your clinic (Local Campaigns / Search)?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نستخدم إعلانات الخرائط والبحث للكلمات الجغرافية (دكتور أسنان في الرياض)",
                        "en": "We use map ads and searches for geographic keywords (dentist in Riyadh)"
                    },
                    {
                        "ar": "نستهدف الكلمات الطبية العامة فقط دون تحديد المواقع",
                        "en": "We target general medical words only without specification"
                    },
                    {
                        "ar": "لا نستخدم جوجل لأننا نعتمد على شهرة العيادة والسوشيال ميديا",
                        "en": "We do not use Google because we rely on the clinic’s popularity and social media"
                    }
                ],
                "insights": {
                    "نستخدم إعلانات الخرائط والبحث للكلمات الجغرافية (دكتور أسنان في الرياض)": {
                        "ar": "أحسنت! هذا أقوى مصدر للمراجعين الفوريين. سأقوم بتطوير ال Google My Business ودمجه مع حملات ال Local لجلب زيارات للعيادة في نفس اليوم.",
                        "en": "I did well! This is the most powerful source of instant reviewers. I will develop Google My Business and integrate it with Local campaigns to drive same-day clinic visits."
                    },
                    "نستهدف الكلمات الطبية العامة فقط دون تحديد المواقع": {
                        "ar": "الكلمات العامة تهدر الميزانية لمن هم خارج نطاقك الجغرافي. سأقوم بتضييق الاستهداف ليصبح (Hyper-Local) بقطر 10 كيلو من عيادتك لضمان حضور حقيقي للعيادة.",
                        "en": "Generic words waste budget for those outside your geographic scope. I will narrow the targeting to (Hyper-Local) within a 10 km radius of your clinic to ensure real clinic attendance."
                    },
                    "لا نستخدم جوجل لأننا نعتمد على شهرة العيادة والسوشيال ميديا": {
                        "ar": "في اللحظة التي يشعر فيها المريض بالألم أو يحتاج استشارة فورية، لن يفتح انستجرام، بل سيبحث في جوجل. إهمالك لجوجل هو ترك الساحة لمنافسيك.",
                        "en": "The moment a patient feels pain or needs immediate consultation, he will not open Instagram, but will search on Google. Neglecting Google is leaving the playing field to your competitors."
                    }
                },
                "condition": (ans) => ans.q1
            },
            {
                "id": "q3",
                "label": {
                    "ar": "3. كيف تلتزم باللوائح الطبية الصارمة في السعودية (منع صور قبل وبعد، الخ) في إعلاناتك؟",
                    "en": "3. How do you adhere to the strict medical regulations in Saudi Arabia (no before and after photos, etc.) in your ads?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نواجه رفضاً مستمراً للإعلانات وإغلاق الحسابات الطبية",
                        "en": "We face constant ad rejections and medical account closures"
                    },
                    {
                        "ar": "نعتمد على الرسوم التوضيحية وتثقيف المراجع بدل إظهار النتائج المباشرة",
                        "en": "We rely on illustrations and educating the reviewer rather than showing direct results"
                    },
                    {
                        "ar": "لدينا تراخيص موثقة من وزارة الصحة تم إضافتها للمنصات",
                        "en": "We have certified licenses from the Ministry of Health that have been added to the platforms"
                    }
                ],
                "insights": {
                    "نواجه رفضاً مستمراً للإعلانات وإغلاق الحسابات الطبية": {
                        "ar": "حسابات العيادات حساسة جداً. سأقوم ببناء استراتيجية (Compliance) لل Copywriting للالتفاف حول القيود دون المخاطرة بالحظر وتقديم محتوى احترافي ومقبول.",
                        "en": "Clinic accounts are very sensitive. I will build a copywriting strategy to get around restrictions without risking getting banned and deliver professional, acceptable content."
                    },
                    "نعتمد على الرسوم التوضيحية وتثقيف المراجع بدل إظهار النتائج المباشرة": {
                        "ar": "هذا التوجه الاستراتيجي ممتاز ويقلل الحظر. سأعزز هذا التوجه بدمج المحتوى التثقيفي ب (Call to Action) قوي يربط الثقافة بالحجز المباشر.",
                        "en": "This strategic approach is excellent and reduces bans. I will reinforce this trend by integrating educational content with a strong call to action that links culture to direct booking."
                    },
                    "لدينا تراخيص موثقة من وزارة الصحة تم إضافتها للمنصات": {
                        "ar": "توثيق التراخيص يوفر حماية كبيرة. التركيز الآن سيكون على الاستهداف المتقدم وتحجيم تكلفة اكتساب المراجع (CAC) للعيادة لمستويات أقل.",
                        "en": "Documentation of licenses provides great protection. The focus now will be on advanced targeting and driving the clinic's Reference Acquisition Cost (CAC) to lower levels."
                    }
                },
                "condition": (ans) => ans.q2
            },
            {
                "id": "q4",
                "label": {
                    "ar": "4. ما هي الآلية المتبعة للتعامل مع المراجعين القادمين من الإعلانات؟",
                    "en": "4. What is the mechanism used to deal with reviewers coming from advertisements?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نجمع أرقامهم ويتصل بهم قسم الكول سنتر للحجز",
                        "en": "We collect their numbers and the call center department contacts them for reservations"
                    },
                    {
                        "ar": "نستقبل المحادثات مباشرة على الواتساب للرد الفوري",
                        "en": "We receive conversations directly on WhatsApp for immediate response"
                    },
                    {
                        "ar": "لدينا صفحة حجز مواعيد ودفع عربون أونلاين",
                        "en": "We have a page for booking appointments and paying a deposit online"
                    }
                ],
                "insights": {
                    "نجمع أرقامهم ويتصل بهم قسم الكول سنتر للحجز": {
                        "ar": "الكول سنتر الطبي يجب أن يكون سريعاً جداً. تأخير الاتصال لساعة واحدة يفقدك المريض لصالح أقرب منافس.",
                        "en": "The medical call center must be very fast. Delaying the call by one hour loses you the patient to the nearest competitor."
                    },
                    "نستقبل المحادثات مباشرة على الواتساب للرد الفوري": {
                        "ar": "حملات تحويل رسائل الواتساب ممتازة، ولكن يجب تجهيز نظام رد آلي سريع لاستقبال الاستفسار الأول لتفادي تسرب المرضى.",
                        "en": "WhatsApp message conversion campaigns are excellent, but a quick automated response system must be prepared to receive the first inquiry to avoid patient dropout."
                    },
                    "لدينا صفحة حجز مواعيد ودفع عربون أونلاين": {
                        "ar": "هذا هو النظام الأكثر كفاءة وتقليلاً لنسبة عدم الحضور (No-shows). سنقوم بتحسين تجربة صفحة الحجز وتفعيل بكسلات التتبع بدقة.",
                        "en": "This is the most efficient system and reduces the percentage of no-shows. We will improve the booking page experience and enable precise tracking pixels."
                    }
                },
                "condition": (ans) => ans.q3
            },
            {
                "id": "q5",
                "label": {
                    "ar": "5. هل تعاني من مشكلة (عدم حضور المراجعين) No-shows للعيادة بعد تأكيد الموعد؟",
                    "en": "5. Do you suffer from the problem of “no-shows” at the clinic after confirming the appointment?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعم، نسبة عدم الحضور تتخطى 40%، وهو إهدار لجهود المبيعات",
                        "en": "Yes, the no-show rate exceeds 40%, which is a waste of sales efforts"
                    },
                    {
                        "ar": "نسبة عدم الحضور بين 15% إلى 30%",
                        "en": "The non-attendance rate ranges from 15% to 30%."
                    },
                    {
                        "ar": "النسبة ممتازة وأقل من 15% لأننا نؤكد المواعيد مسبقاً",
                        "en": "The percentage is excellent and less than 15% because we confirm appointments in advance"
                    }
                ],
                "insights": {
                    "نعم، نسبة عدم الحضور تتخطى 40%، وهو إهدار لجهود المبيعات": {
                        "ar": "هذا يعني أن العميل غير ملتزم نفسياً ومادياً. سأضيف استراتيجية حجز 'عربون أولي' عبر الموقع (حتى لو كان رمزياً 50 ريال) لضمان التزام المراجع التام.",
                        "en": "This means that the client is not committed psychologically and financially. I will add a strategy for booking an 'initial deposit' through the website (even if it is a symbolic 50 riyals) to ensure the reviewer's full commitment."
                    },
                    "نسبة عدم الحضور بين 15% إلى 30%": {
                        "ar": "طبيعية للعيادات. يمكن تحسينها بوضع نظام تذكير آلي عبر ال SMS وال WhatsApp قبل الموعد ب 24 ساعة و 4 ساعات لضمان أعلى نسبة حضور.",
                        "en": "Natural for clinics. It can be improved by setting up an automatic reminder system via SMS and WhatsApp 24 hours and 4 hours before the appointment to ensure the highest attendance rate."
                    },
                    "النسبة ممتازة وأقل من 15% لأننا نؤكد المواعيد مسبقاً": {
                        "ar": "فريق ممتاز. سأوجه الجهد الآن لمضاعفة تدفق الـ Leads الجدد ورفع متوسط إنفاق المراجع (Upselling) للخدمات التجميلية داخل العيادة.",
                        "en": "Excellent team. I will now direct the effort to double the flow of new leads and increase the average referral spend (Upselling) for cosmetic services within the clinic."
                    }
                },
                "condition": (ans) => ans.q4
            },
            {
                "id": "q6",
                "label": {
                    "ar": "6. كيف تبني السمعة الطبية (Social Proof) لتشجيع الحجوزات المستمرة؟",
                    "en": "6. How do you build social proof to encourage ongoing bookings?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نشجع المراجعين على تقييمنا في Google Maps بعد الموعد",
                        "en": "We encourage reviewers to rate us on Google Maps after the appointment"
                    },
                    {
                        "ar": "نستخدم المؤثرين المحليين لزيارة العيادة وعمل تغطية",
                        "en": "We use local influencers to visit the clinic and create coverage"
                    },
                    {
                        "ar": "لا نملك استراتيجية واضحة للسمعة المؤسسية (Reviews)",
                        "en": "We do not have a clear corporate reputation strategy (Reviews)"
                    }
                ],
                "insights": {
                    "نشجع المراجعين على تقييمنا في Google Maps بعد الموعد": {
                        "ar": "أهم خطوة في التميز المحلي! سأقوم بربط نظام يقدم كود خصم بسيط مقابل تقييم 5 نجوم (إن أمكن برمجياً) للسيطرة الكاملة على نتائج بحث الخرائط.",
                        "en": "The most important step in local excellence! I will link a system that offers a simple discount code in exchange for a 5-star rating (if possible programmatically) to have full control over map search results."
                    },
                    "نستخدم المؤثرين المحليين لزيارة العيادة وعمل تغطية": {
                        "ar": "المؤثرون يجلبون هبة سريعة (Hype). سأقوم بتحويل فيديوهات المؤثرين إلى إعلانات ممولة مستدامة لاصطياد أصدقائهم ومتابعيهم حتى بعد انتهاء الزيارة.",
                        "en": "Influencers bring a quick giveaway (Hype). I will turn influencers' videos into sustainable sponsored ads to hook their friends and followers even after the visit ends."
                    },
                    "لا نملك استراتيجية واضحة للسمعة المؤسسية (Reviews)": {
                        "ar": "العيادة التي تمتلك تقييمات أقل من منافسيها ستخسر في جوجل. يجب تفعيل نظام خدمة عملاء يتابع المراجع الراضي ويطلب تقييمه بشكل دوري وممنهج.",
                        "en": "A clinic that has lower ratings than its competitors will lose out on Google. A customer service system must be activated that follows up the satisfied auditor and requests his evaluation on a regular and systematic basis."
                    }
                },
                "condition": (ans) => ans.q5
            },
            {
                "id": "q7",
                "label": {
                    "ar": "7. في إعلانات سناب شات وإنستجرام، هل تعتمد على التسويق للأطباء باسمهم أم للعيادة ككيان؟",
                    "en": "7. In Snapchat and Instagram ads, do you rely on marketing to doctors by name or to the clinic as an entity?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نسوق للأطباء المميزين وأسمائهم لخلق الثقة (Personal Branding)",
                        "en": "We market distinguished doctors and their names to create trust (Personal Branding)"
                    },
                    {
                        "ar": "نسوق لاسم العيادة والعروض الموسمية فقط (Clinic Brand)",
                        "en": "We market the name of the clinic and seasonal offers only (Clinic Brand)"
                    },
                    {
                        "ar": "نجمع بين الاثنين لضمان استقرار العيادة لو رحل الطبيب",
                        "en": "We combine the two to ensure the stability of the clinic if the doctor leaves"
                    }
                ],
                "insights": {
                    "نسوق للأطباء المميزين وأسمائهم لخلق الثقة (Personal Branding)": {
                        "ar": "تسويق الأطباء جذاب جداً ويبني ثقة عميقة، ولكنه يحمل مخاطرة خروج الطبيب وانتقال عملائه. سنبني التوازن بحيث ترتبط جودة الطبيب ببيئة العيادة الممتازة.",
                        "en": "Physician marketing is very attractive and builds deep trust, but it carries the risk of the doctor leaving and his clients moving on. We will build balance so that the quality of the doctor is linked to the excellent clinic environment."
                    },
                    "نسوق لاسم العيادة والعروض الموسمية فقط (Clinic Brand)": {
                        "ar": "هذا يعزز أصول العيادة، لكن العروض الدائمة تحول المراجع ل 'صائد عروض'. يجب إبراز تقنية الأجهزة ورفاهية الاستقبال كعامل جذب لزيادة ولاء المراجعين الأغنياء.",
                        "en": "This enhances the clinic's assets, but permanent offers turn the reviewer into an 'offer hunter'. Hardware technology and reception luxury should be highlighted as an attraction to increase the loyalty of rich reviewers."
                    },
                    "نجمع بين الاثنين لضمان استقرار العيادة لو رحل الطبيب": {
                        "ar": "استراتيجية ناضجة وقوية! سأصمم لك مسارات إعلانية منفصلة لتسويق خبرة الأطباء من جهة، وتسويق الباقات الطويلة وخدمات العيادة المتطورة من جهة أخرى.",
                        "en": "Mature and powerful strategy! I will design separate advertising paths for you to market doctors’ expertise on the one hand, and to market long-term packages and advanced clinic services on the other hand."
                    }
                },
                "condition": (ans) => ans.q6
            },
            {
                "id": "q8",
                "label": {
                    "ar": "8. كيف تتعامل مع مواسم الركود أو الأوقات الصباحية الهادئة في المجمع الطبي؟",
                    "en": "8. How do you deal with the off-season or quiet mornings at the medical complex?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نقدم عروض خصم كبرى (Happy Hours) لجذب المراجعين في هذه الأوقات",
                        "en": "We offer major discount offers (Happy Hours) to attract visitors during these times"
                    },
                    {
                        "ar": "نطلق حملات استهداف للأمهات والمتقاعدين وأصحاب الدوامات المرنة",
                        "en": "We launch campaigns targeting mothers, retirees, and those with flexible employment"
                    },
                    {
                        "ar": "لا نتعامل معها بفعالية ونعتمد على قوة فترات المساء",
                        "en": "We do not deal with it effectively and rely on the strength of the evening periods"
                    }
                ],
                "insights": {
                    "نقدم عروض خصم كبرى (Happy Hours) لجذب المراجعين في هذه الأوقات": {
                        "ar": "عروض الساعات السعيدة رائعة، وسأقوم ببناء إعلانات 'Day-parting' تعمل فقط في الساعات الميتة وتستهدف شرائح جغرافية شديدة القرب للعيادة.",
                        "en": "Happy hour deals are great, and I will build 'Day-parting' ads that only run in the dead hours and target geographic segments very close to the clinic."
                    },
                    "نطلق حملات استهداف للأمهات والمتقاعدين وأصحاب الدوامات المرنة": {
                        "ar": "تحليل ديموغرافي ممتاز! سأقوم بتطوير المحتوى ليخاطب هذه الشريحة بلغتهم وتوضيح 'سرعة الخدمة وعدم وجود زحام' كميزة تنافسية صباحية.",
                        "en": "Excellent demographic analysis! I will develop content to address this segment in their language and explain 'fast service and no crowds' as a morning competitive advantage."
                    },
                    "لا نتعامل معها بفعالية ونعتمد على قوة فترات المساء": {
                        "ar": "الساعات الصباحية الميتة تمثل خسارة يومية في المصاريف التشغيلية. سأطلق لك حملات باقات العناية الطويلة والأشعة والتحاليل الصباحية بخصومات لملء هذه الأوقات.",
                        "en": "Dead morning hours represent a daily loss in operational expenses. I will launch campaigns for long-term care, radiology and morning tests packages with discounts to fill these times."
                    }
                },
                "condition": (ans) => ans.q7
            },
            {
                "id": "q9",
                "label": {
                    "ar": "9. هل تستخدم ميزات التمويل الطبي (التقسيط عبر البنوك، تابي، تمارا) في إعلاناتك؟",
                    "en": "9. Do you use medical financing features (installment via banks, Tabby, Tamara) in your ads?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعم، وهي المحفز الأول لدينا لإغلاق عمليات التجميل والأسنان الكبرى",
                        "en": "Yes, and it is our number one catalyst for closing major cosmetic and dental surgeries"
                    },
                    {
                        "ar": "نقبل التقسيط ولكننا لا نبرهذا بقوة في الحملات الإعلانية",
                        "en": "We accept installments, but we do not promote this strongly in advertising campaigns"
                    },
                    {
                        "ar": "لا نتعامل بنظام التقسيط للخدمات الطبية",
                        "en": "We do not deal with the installment system for medical services"
                    }
                ],
                "insights": {
                    "نعم، وهي المحفز الأول لدينا لإغلاق عمليات التجميل والأسنان الكبرى": {
                        "ar": "رائع! سأقوم بتغيير استراتيجية ال Copywriting من 'سعر العملية 5000' إلى 'ابتسامتك الجديدة ب 400 ريال شهرياً' لمضاعفة معدلات النقر والاتصالات.",
                        "en": "amazing! I will change the copywriting strategy from “the price of the operation is 5000” to “your new smile is 400 riyals per month” to double the rates of click-throughs and communications."
                    },
                    "نقبل التقسيط ولكننا لا نبرهذا بقوة في الحملات الإعلانية": {
                        "ar": "التقسيط يجب أن يكون في أول 3 ثوانٍ من إعلانات ال High-ticket الطبية! هو كاسر الاعتراض الأكبر للطبقة المتوسطة وسنبرهذا بقوة.",
                        "en": "Installments must be in the first 3 seconds of high-ticket medical ads! It is the biggest objection of the middle class, and we will examine this forcefully."
                    },
                    "لا نتعامل بنظام التقسيط للخدمات الطبية": {
                        "ar": "أنت تخسر شريحة هائلة من الطبقة المتوسطة الطموحة. يجب المسارعة بربط خدمات التقسيط، وسأتولى أنا بناء حملات تستثمر هذه الميزة لجلب عملاء فوراً.",
                        "en": "You are losing a huge segment of the aspiring middle class. Installment services must be linked quickly, and I will build campaigns that exploit this advantage to attract customers immediately."
                    }
                },
                "condition": (ans) => ans.q8
            },
            {
                "id": "q10",
                "label": {
                    "ar": "10. ما هو حجم الميزانية الشهرية المخصصة للتسويق لاكتساح منافسي منطقتك الجغرافية؟",
                    "en": "10. What is the size of the monthly marketing budget allocated to sweep away competitors in your geographical area?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "أقل من 3,000$ (مرحلة التركيز على طبيب أو خدمة واحدة)",
                        "en": "Less than $3,000 (focus on one doctor or service)"
                    },
                    {
                        "ar": "3,000$ إلى 10,000$ (مرحلة المنافسة المحلية الشرسة للعيادة)",
                        "en": "$3,000 to $10,000 (the clinic’s fierce local competition stage)"
                    },
                    {
                        "ar": "أكثر من 10,000$ (الهيمنة وبناء اسم للمجمع بالكامل)",
                        "en": "Over $10,000 (dominate and build a name for the entire complex)"
                    }
                ],
                "insights": {
                    "أقل من 3,000$ (مرحلة التركيز على طبيب أو خدمة واحدة)": {
                        "ar": "سأركز هذه الميزانية على Google Local و Search وبعض حملات الواتساب المحلية لضمان تحقيق حجوزات فورية تغطي التكلفة.",
                        "en": "I will focus this budget on Google Local, Search, and some local WhatsApp campaigns to ensure instant bookings that cover the cost."
                    },
                    "3,000$ إلى 10,000$ (مرحلة المنافسة المحلية الشرسة للعيادة)": {
                        "ar": "ميزانية نمو قوية! سنطلق حملات توعوية للمجمع ونلاحق المراجعين عبر Retargeting ونبني منصات حجز مواعيد متقدمة لتسريع الإغلاق.",
                        "en": "Strong growth budget! We will launch complex awareness campaigns, track visitors via Retargeting, and build advanced appointment booking platforms to speed up closing."
                    },
                    "أكثر من 10,000$ (الهيمنة وبناء اسم للمجمع بالكامل)": {
                        "ar": "بميزانية الهيمنة، سأبني معركت تسويقية آلية بالكامل. سنجذب المراجعين، ونحتفظ بهم، ونستخدم ولاءهم عبر (Lookalike Audiences) لاصطياد العائلات المماثلة وتحويل المجمع للعلامة الأولى في المدينة.",
                        "en": "With a dominance budget, I would build a fully automated marketing battle. We will attract reviewers, retain them, and use their loyalty via Lookalike Audiences to hunt down similar families and turn the complex into the number one brand in town."
                    }
                },
                "condition": (ans) => ans.q9
            }
        ]
    },
    "fashion": {
        "title": {
            "ar": "Fashion & Apparel (الأزياء والملابس)",
            "en": "Fashion & Apparel"
        },
        "questions": [
            {
                "id": "q1",
                "label": {
                    "ar": "1. ما هو الطابع العام لعلامتك التجارية في قطاع الأزياء الخليجي؟",
                    "en": "1. What is the general character of your brand in the Gulf fashion sector?"
                },
                "type": "select",
                "options": [
                    {
                        "ar": "عبايات وأزياء نسائية تقليدية بلمسة عصرية",
                        "en": "Abayas and traditional women's fashion with a modern touch"
                    },
                    {
                        "ar": "ملابس كاجوال وشبابية (Streetwear)",
                        "en": "Streetwear"
                    },
                    {
                        "ar": "ملابس رياضية وتخصصية (Activewear)",
                        "en": "Sports and specialized clothing (Activewear)"
                    },
                    {
                        "ar": "أزياء فاخرة وتصاميم مخصصة (Luxury Fashion)",
                        "en": "Luxury fashion and custom designs"
                    }
                ],
                "insights": {
                    "عبايات وأزياء نسائية تقليدية بلمسة عصرية": {
                        "ar": "قطاع العبايات في الخليج تنافسي جداً. التركيز يجب أن يكون على جودة التصوير (الفيديو) وتوضيح تفاصيل القماش وحركته. انستجرام وتيك توك الما المنصات الأساسية.",
                        "en": "The abaya sector in the Gulf is very competitive. The focus should be on the quality of photography (video) and clarifying the details of the fabric and its movement. Instagram and TikTok are the main platforms."
                    },
                    "ملابس كاجوال وشبابية (Streetwear)": {
                        "ar": "هذا القطاع تقوده الموضة السريعة. يجب الاعتماد على صناع المحتوى (Influencers / UGC) لخلق ضجة سريعة (Hype) وتفعيل إعلانات الكتالوج (DPA).",
                        "en": "This sector is led by fast fashion. Content creators (Influencers / UGC) should be relied upon to quickly create buzz (Hype) and activate catalog ads (DPA)."
                    },
                    "ملابس رياضية وتخصصية (Activewear)": {
                        "ar": "الالتركيز هنا يكون على الراحة والملاءمة العملية. إظهار الملابس قيد الاستخدام في بيئة رياضية حقيقية يرفع نسبة التحويل بشكل كبير.",
                        "en": "The focus here is on comfort and practicality. Showing the apparel in use in a real sports environment increases conversion rates dramatically."
                    },
                    "أزياء فاخرة وتصاميم مخصصة (Luxury Fashion)": {
                        "ar": "التسعير المرتفع يتطلب بناء هوية بصرية قوية جداً. الاستهداف عبر انستجرام مع التركيز على خدمة عملاء كونسيرج (VIP) يضمن ولاء العملاء.",
                        "en": "High pricing requires building a very strong visual identity. Targeting via Instagram with a focus on concierge (VIP) customer service ensures customer loyalty."
                    }
                }
            },
            {
                "id": "q2",
                "label": {
                    "ar": "2. كيف تعتمد على إعلانات جوجل (Google Shopping & PMax) في قطاع الأزياء؟",
                    "en": "2. How do you rely on Google Ads (Google Shopping & PMax) in the fashion sector?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "لا أستخدم جوجل، نعتمد على الانستجرام وتيك توك فقط",
                        "en": "I don't use Google, we rely on Instagram and TikTok only"
                    },
                    {
                        "ar": "نستخدم Google Shopping بشكل تقليدي",
                        "en": "We traditionally use Google Shopping"
                    },
                    {
                        "ar": "نستخدم PMax مع تغذية Feed محسنة جداً للصور الجذابة",
                        "en": "We use PMax with a highly optimized feed for eye-catching images"
                    }
                ],
                "insights": {
                    "لا أستخدم جوجل، نعتمد على الانستجرام وتيك توك فقط": {
                        "ar": "أكبر خطأ في قطاع الأزياء! الباحثات في جوجل عن 'فساتين سهرة' أو 'عبايات سوداء' هن مشتركات فوريات (High Intent). سأبني لك حملة جوجل تأخذ هذه الشريحة من منافسيك.",
                        "en": "The biggest mistake in the fashion sector! Female searchers on Google for “evening dresses” or “black abayas” are instant subscribers (High Intent). I will build you a Google campaign that takes this segment away from your competitors."
                    },
                    "نستخدم Google Shopping بشكل تقليدي": {
                        "ar": "إعلانات الشوبينج جيدة، لكن PMax مع إعدادات ال (Visual Assets) يغطي شبكة يوتيوب والعرض ليصطاد المهتمين بالموضة بتكلفة استحواذ أقل.",
                        "en": "Shopping ads are good, but PMax with Visual Assets settings overlays the YouTube network and display to catch fashionistas at a lower acquisition cost."
                    },
                    "نستخدم PMax مع تغذية Feed محسنة جداً للصور الجذابة": {
                        "ar": "رائع! سأقوم بتطبيق ال (Labeling) لفصل المنتجات الصيفية/الشتوية، ودفع ميزانية PMax نحو القطع ذات هامش الربح الأعلى.",
                        "en": "amazing! I will implement labeling to separate summer/winter products, and push the PMax budget toward higher-margin pieces."
                    }
                },
                "condition": (ans) => ans.q1
            },
            {
                "id": "q3",
                "label": {
                    "ar": "3. ما هي المشكلة الأكبر في متجر الأزياء الخاص بك حالياً؟",
                    "en": "3. What is the biggest problem with your fashion store currently?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "تكلفة الاستحواذ (CAC) أعلى من هامش ربح القطعة الواحدة",
                        "en": "Cost per acquisition (CAC) is higher than the profit margin per piece"
                    },
                    {
                        "ar": "نسبة المرتجعات والاستبدال عالية جداً بسبب المقاسات",
                        "en": "The rate of returns and exchanges is very high due to the sizes"
                    },
                    {
                        "ar": "المبيعات متذبذبة وتعتمد كلياً على فترات العروض والخصومات",
                        "en": "Sales are fluctuating and depend entirely on the periods of offers and discounts"
                    }
                ],
                "insights": {
                    "تكلفة الاستحواذ (CAC) أعلى من هامش ربح القطعة الواحدة": {
                        "ar": "الحل الوحيد في الأزياء هو زيادة متوسط قيمة الطلب (AOV) عن طريق عروض شراء أطقم كاملة أو 'اشتر قطعتين واحصل على الثالثة'.",
                        "en": "The only solution in fashion is to increase the average order value (AOV) through full sets or 'buy two get a third' offers."
                    },
                    "نسبة المرتجعات والاستبدال عالية جداً بسبب المقاسات": {
                        "ar": "يجب وضع 'دليل مقاسات' تفاعلي واضح جداً في صفحة كل منتج، وتشجيع العملاء على قراءة التقييمات لتحديد المقاس المناسب بدقة.",
                        "en": "A very clear interactive 'size guide' should be placed on each product page, and customers encouraged to read reviews to determine the exact size."
                    },
                    "المبيعات متذبذبة وتعتمد كلياً على فترات العروض والخصومات": {
                        "ar": "هذه مشكلة بناء هوية. العلامة التجارية القوية تبيع بالقيمة وليس فقط بالسعر. يجب التركيز على إطلاق 'تشكيلات ومواسم' (Drops) لخلق طلب مستمر.",
                        "en": "This is an identity construction problem. A strong brand sells on value, not just price. Focus should be placed on launching 'drops' to create continuous demand."
                    }
                },
                "condition": (ans) => ans.q2
            },
            {
                "id": "q4",
                "label": {
                    "ar": "4. كيف تتعامل مع إدارة المخزون (Inventory Management) والمقاسات الناقصة في الإعلانات؟",
                    "en": "4. How do you deal with inventory management and missing sizes in advertisements?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نوقف الإعلانات يدوياً عند نفاذ المخزون",
                        "en": "We manually stop ads when we run out of stock"
                    },
                    {
                        "ar": "نعلن عن قطع والمقاسات الشائعة غير متوفرة!",
                        "en": "We advertise common pieces and sizes out of stock!"
                    },
                    {
                        "ar": "لدينا نظام يوقف الإعلانات تلقائياً (Automated Rules)",
                        "en": "We have a system that stops ads automatically (Automated Rules)"
                    }
                ],
                "insights": {
                    "نوقف الإعلانات يدوياً عند نفاذ المخزون": {
                        "ar": "هذا يعرضك لهدر الميزانية لو غفل الفريق. سأربط ال Product Feed ليقوم بإيقاف إعلانات القطع الناقصة تلقائياً في لحظتها.",
                        "en": "This exposes you to wasting budget if the team is negligent. I will link the Product Feed to automatically stop missing item ads at that moment."
                    },
                    "نعلن عن قطع والمقاسات الشائعة غير متوفرة!": {
                        "ar": "هذا يقتل نسبة التحويل (Conversion Rate). إذا كان المقاس M أو L غير متوفر، الزائر يخرج ولا يشتري وتدفع أنت ثمن النقرة! يجب حل هذا برمجياً.",
                        "en": "This kills the conversion rate. If size M or L is not available, the visitor exits and does not buy, and you pay the price for the click! This must be resolved programmatically."
                    },
                    "لدينا نظام يوقف الإعلانات تلقائياً (Automated Rules)": {
                        "ar": "ممتاز. هذا يتيح لنا التركيز على توسيع ال Scaling للقطع ال Best Sellers بثقة دون القلق من المرتجعات أو الغضب الجماهيري.",
                        "en": "excellent. This allows us to focus on scaling Best Sellers with confidence without worrying about returns or public outcry."
                    }
                },
                "condition": (ans) => ans.q3
            },
            {
                "id": "q5",
                "label": {
                    "ar": "5. هل تستخدم إعلانات الكتالوج الديناميكية (DPA) لإعادة الاستهداف (Retargeting)؟",
                    "en": "5. Do you use Dynamic Catalog Ads (DPA) for retargeting?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعم، لإعادة استهداف من أضاف للسلة",
                        "en": "Yes, to retarget those who added to the cart"
                    },
                    {
                        "ar": "نعم، لإعادة استهداف من أضاف للسلة ولجلب عملاء جدد أيضاً (Broad DPA)",
                        "en": "Yes, to retarget those who added to the cart and to attract new customers as well (Broad DPA)"
                    },
                    {
                        "ar": "لا نستخدم ال DPA ونفضل الفيديوهات العادية",
                        "en": "We do not use DPA and prefer regular videos"
                    }
                ],
                "insights": {
                    "نعم، لإعادة استهداف من أضاف للسلة": {
                        "ar": "جيد جداً، هذه منجم الأرباح. سأضيف ميزة عرض (منتجات تكميلية - Cross-sell) للعميل في الإعلان ليرفع قيمة سلة مشترياته.",
                        "en": "Very well, this is a mine of profits. I will add the feature of displaying (complementary products - cross-sell) to the customer in the ad to increase the value of his shopping cart."
                    },
                    "نعم، لإعادة استهداف من أضاف للسلة ولجلب عملاء جدد أيضاً (Broad DPA)": {
                        "ar": "تطبيق متقدم جداً. سأطور جودة الصور في الكتالوج (Catalog Overlays) لتتضمن شعارات التقسيط (تابي/تمارا) والتي ترفع النقر ب 35%.",
                        "en": "Very advanced application. I will improve the quality of the images in the catalog (Catalog Overlays) to include installment logos (Tabby/Tamara), which will increase click-throughs by 35%."
                    },
                    "لا نستخدم ال DPA ونفضل الفيديوهات العادية": {
                        "ar": "يجب المزاوجة بينهما! الفيديو يجذب (Hook)، وال DPA يلاحق (Close). سأبني لك إعدادات ال DPA لتظهر لكل عميل القطعة التي تصفحها بالتحديد.",
                        "en": "Must be paired! The video attracts Hook, and the DPA pursues Close. I will build the DPA settings for you to show each customer the exact widget they browsed."
                    }
                },
                "condition": (ans) => ans.q4
            },
            {
                "id": "q6",
                "label": {
                    "ar": "6. ما هي استراتيجيتك لصناعة المحتوى المرئي للأزياء؟",
                    "en": "6. What is your strategy for creating fashion visual content?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "صور احترافية للعارضات في استديو (Studio Shoots)",
                        "en": "Professional photos of models in studio shoots"
                    },
                    {
                        "ar": "فيديوهات عفوية على تيك توك لتجربة اللبس (UGC / Try-on Haul)",
                        "en": "Spontaneous videos on TikTok of trying on clothes (UGC / Try-on Haul)"
                    },
                    {
                        "ar": "تصميمات جرافيك ثابتة مع نصوص العرض",
                        "en": "Static graphic designs with display texts"
                    }
                ],
                "insights": {
                    "صور احترافية للعارضات في استديو (Studio Shoots)": {
                        "ar": "الصور الاستديو ممتازة للموقع والكتالوج، لكنها فاشلة في إعلانات التيك توك. نحتاج لتوجه ال 'Raw Content' للإعلانات.",
                        "en": "Studio photos are great for the website and catalog, but they fail in TikTok ads. We need 'Raw Content' orientation for ads."
                    },
                    "فيديوهات عفوية على تيك توك لتجربة اللبس (UGC / Try-on Haul)": {
                        "ar": "أنت تمسك بمفتاح المبيعات في 2026! فيديوهات ال Haul هي الأكثر تحويلاً. سأقوم بكتابة سكريبتات للمؤثرين تركز على (جودة القماش، المقاس، وسرعة الشحن).",
                        "en": "You hold the key to sales in 2026! Haul videos are the most converting. I will write scripts for influencers that focus on (fabric quality, size, and shipping speed)."
                    },
                    "تصميمات جرافيك ثابتة مع نصوص العرض": {
                        "ar": "هذا النوع من الإعلانات يسمى (Banner Blindness). المستهلك يتجاهلها فوراً. يجب الانتقال كلياً للفيديوهات الديناميكية.",
                        "en": "This type of advertisement is called (Banner Blindness). The consumer ignores it immediately. You should move completely to dynamic videos."
                    }
                },
                "condition": (ans) => ans.q5
            },
            {
                "id": "q7",
                "label": {
                    "ar": "7. كيف تستفيد من مواسم الأعياد ورمضان في الخليج؟",
                    "en": "7. How do you benefit from the holiday and Ramadan seasons in the Gulf?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نطلق عروضاً وخصومات قبل الموسم بأسبوع",
                        "en": "We launch offers and discounts a week before the season"
                    },
                    {
                        "ar": "نبدأ حملات الوعي المبكر قبل شهر ونحصد المبيعات في الموسم",
                        "en": "We start early awareness campaigns a month in advance and harvest sales in season"
                    },
                    {
                        "ar": "لا نستعد بشكل خاص، نزيد الميزانية في الموسم فقط",
                        "en": "We don't prepare particularly, we only increase the budget in season"
                    }
                ],
                "insights": {
                    "نطلق عروضاً وخصومات قبل الموسم بأسبوع": {
                        "ar": "أسبوع لا يكفي لتعليم الخوارزمية في زحمة مزاد المواسم. التكلفة ستكون خيالية. يجب إطلاق حملات التجميع مبكراً.",
                        "en": "A week is not enough to teach the algorithm in the busy season auction. The cost will be astronomical. Collection campaigns should be launched early."
                    },
                    "نبدأ حملات الوعي المبكر قبل شهر ونحصد المبيعات في الموسم": {
                        "ar": "استراتيجية الفائزين! سأقوم بتنفيذ حملات (Lead Gen / Early Access) لجمع بيانات العملاء مبكراً، ثم استهدافهم ب PMax و Email Marketing لضمان تحقيق هدف قبل المنافسين.",
                        "en": "Winners' strategy! I will implement Lead Gen/Early Access campaigns to collect customer data early, then target them with PMax and Email Marketing to ensure a target is achieved before competitors."
                    },
                    "لا نستعد بشكل خاص، نزيد الميزانية في الموسم فقط": {
                        "ar": "زيادة الميزانية دون خطة في ال Q4 أو رمضان يعني حرق الأموال لصالح المنصات. سأضع لك (Seasonality Calendar) محكم لضبط الإنفاق والمخزون.",
                        "en": "Increasing the budget without a plan in Q4 or Ramadan means burning money for the benefit of the platforms. I will create a robust Seasonality Calendar for you to control spending and inventory."
                    }
                },
                "condition": (ans) => ans.q6
            },
            {
                "id": "q8",
                "label": {
                    "ar": "8. هل تعتمد على المؤثرين (Influencers) وكيف تتبع مبيعاتهم؟",
                    "en": "8. Do you rely on influencers and how do you track their sales?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعم، عبر كود خصم فقط",
                        "en": "Yes, via discount code only"
                    },
                    {
                        "ar": "نعم، عبر كود خصم وروابط تتبع (UTM/Affiliate links)",
                        "en": "Yes, via a discount code and tracking links (UTM/Affiliate links)"
                    },
                    {
                        "ar": "المؤثرون لم يحققوا لنا عائداً جيداً",
                        "en": "Influencers did not give us a good return"
                    }
                ],
                "insights": {
                    "نعم، عبر كود خصم فقط": {
                        "ar": "كود الخصم جيد ولكنه يعمي ال Pixel! الخوارزمية لا تفهم من أين أتى العميل. يجب دمج الروابط لتغذية منصات الإعلانات بمعلومات المشتري.",
                        "en": "The discount code is good, but it blinds the Pixel! The algorithm doesn't understand where the customer is coming from. Links should be integrated to feed ad platforms with buyer information."
                    },
                    "نعم، عبر كود خصم وروابط تتبع (UTM/Affiliate links)": {
                        "ar": "ممتاز. الخطوة الأكثر تقدماً التي سأنفذها لك هي استخدام (Spark Ads/Partnership Ads) للترويج لمنشور المؤثر من حسابك لضمان تحقيق انتشار مضاعف (Scaling).",
                        "en": "excellent. The more advanced step I will do for you is to use Spark Ads/Partnership Ads to promote the influencer's post from your account to ensure double scaling."
                    },
                    "المؤثرون لم يحققوا لنا عائداً جيداً": {
                        "ar": "غالباً تم اختيار المؤثر بناء على المتابعين وليس بناء على تفاعلهم الحقيقي (Engagement). سأقوم بتغيير المعايير لاختيار مؤثرين يحققون تحويلاً فعلياً.",
                        "en": "The influencer was often chosen based on the followers and not on their real interaction (Engagement). I will change the criteria to choose influencers who actually convert."
                    }
                },
                "condition": (ans) => ans.q7
            },
            {
                "id": "q9",
                "label": {
                    "ar": "9. ما هو العائد الإعلاني (ROAS) الذي تحققه حالياً وتطمح للوصول إليه؟",
                    "en": "9. What is the return on advertising (ROAS) that you currently achieve and that you aspire to reach?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "حالياً أقل من 2x ونطمح للوصول ل 4x",
                        "en": "Currently less than 2x and we aspire to reach 4x"
                    },
                    {
                        "ar": "نحقق بين 3x إلى 5x ونبحث عن التوسع (Scaling)",
                        "en": "We achieve between 3x and 5x and look for scaling."
                    },
                    {
                        "ar": "نحقق عائداً ممتازاً لكن التوسع يكسر العائد",
                        "en": "We achieve an excellent return, but expansion breaks the return"
                    }
                ],
                "insights": {
                    "حالياً أقل من 2x ونطمح للوصول ل 4x": {
                        "ar": "للوصول ل 4x في الأزياء، الحل ليس الإعلانات فقط، بل رفع (AOV) و (LTV). سأقوم بتصميم عروض شراء أطقم (Shop the Look) لتنفيذ هذا.",
                        "en": "To reach 4x in fashion, the solution is not just ads, but raising AOV and LTV. I will design Shop the Look packages to do this."
                    },
                    "نحقق بين 3x إلى 5x ونبحث عن التوسع (Scaling)": {
                        "ar": "هذا أداء ممتاز. مرحلة التوسع هنا تتطلب حملات (Broad) مفتوحة في سناب وميتا، مع ضخ 5-10 فيديوهات (Creatives) أسبوعياً.",
                        "en": "This is an excellent performance. The expansion phase here requires open “Broad” campaigns on Snap and Meta, with 5-10 Creatives videos released weekly."
                    },
                    "نحقق عائداً ممتازاً لكن التوسع يكسر العائد": {
                        "ar": "سنعالج كسر العائد بتوسيع القنوات (Omnichannel) واستخدام (Google PMax + TikTok + Snapchat) بالتوازي لتوزيع حمل المبيعات وتفادي إرهاق جمهور منصة واحدة.",
                        "en": "We will address revenue breakage by expanding channels (Omnichannel) and using (Google PMax + TikTok + Snapchat) in parallel to distribute the sales load and avoid single platform audience fatigue."
                    }
                },
                "condition": (ans) => ans.q8
            },
            {
                "id": "q10",
                "label": {
                    "ar": "10. ما هو حجم الميزانية الشهرية التي تخطط لاستثمارها لتطبيق هذا النظام المتقدم؟",
                    "en": "10. How much monthly budget do you plan to invest to implement this advanced system?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "أقل من 5,000$ (بناء الأساسيات والاختبار المبدئي)",
                        "en": "Under $5,000 (basic build and initial testing)"
                    },
                    {
                        "ar": "5,000$ إلى 15,000$ (نمو متسارع واستحواذ على حصة سوقية)",
                        "en": "$5,000 to $15,000 (accelerated growth and market share capture)"
                    },
                    {
                        "ar": "أكثر من 15,000$ (هيمنة شاملة وإدارة ميزانيات ضخمة)",
                        "en": "Over $15,000 (comprehensive dominance and management of huge budgets)"
                    }
                ],
                "insights": {
                    "أقل من 5,000$ (بناء الأساسيات والاختبار المبدئي)": {
                        "ar": "سأوجه هذه الميزانية كلياً نحو جوجل (Search & PMax) والمحتوى الفيروسي (UGC) لضمان تحقيق مبيعات سريعة تدعم استمرارية المتجر.",
                        "en": "I will direct this budget entirely towards Google (Search & PMax) and viral content (UGC) to ensure quick sales that support the store's continuity."
                    },
                    "5,000$ إلى 15,000$ (نمو متسارع واستحواذ على حصة سوقية)": {
                        "ar": "هذه الميزانية تتطلب هندسة إعلانية احترافية، سأقوم ببناء Structure معقد (CBO/ABO) مع استراتيجية تسعير (Value Based) للوصول للعملاء الأثرياء.",
                        "en": "This budget requires professional advertising engineering. I will build a complex structure (CBO/ABO) with a pricing strategy (Value Based) to reach wealthy clients."
                    },
                    "أكثر من 15,000$ (هيمنة شاملة وإدارة ميزانيات ضخمة)": {
                        "ar": "مرحلة ال Scaling الشرس. سأقوم بتوظيف (Data Warehouse) مصغر وإدارة ال Attribution لضمان تتبع كل دولار بدقة عبر جميع المنصات وتحقيق سيطرة كاملة على السوق.",
                        "en": "Aggressive scaling stage. I will employ a mini Data Warehouse and manage Attribution to ensure every dollar is accurately tracked across all platforms and achieve complete market control."
                    }
                },
                "condition": (ans) => ans.q9
            }
        ]
    },
    "health-beauty": {
        "title": {
            "ar": "Health & Beauty (الصحة والتجميل)",
            "en": "Health & Beauty"
        },
        "questions": [
            {
                "id": "q1",
                "label": {
                    "ar": "1. ما هو نوع منتجات التجميل أو العناية التي تروج لها؟",
                    "en": "1. What kind of beauty or care products are you promoting?"
                },
                "type": "select",
                "options": [
                    {
                        "ar": "منتجات عناية بالبشرة والشعر (Skincare & Haircare)",
                        "en": "Skincare & Haircare products"
                    },
                    {
                        "ar": "ميك أب ومستحضرات تجميل ألوان (Cosmetics)",
                        "en": "Make-up and color cosmetics (Cosmetics)"
                    },
                    {
                        "ar": "أجهزة ليزر أو أدوات عناية منزلية (Beauty Devices)",
                        "en": "Laser devices or home care tools (Beauty Devices)"
                    },
                    {
                        "ar": "مكملات غذائية أو منتجات صحية وتخسيس",
                        "en": "Nutritional supplements or health and weight loss products"
                    }
                ],
                "insights": {
                    "منتجات عناية بالبشرة والشعر (Skincare & Haircare)": {
                        "ar": "التحدي هنا هو 'النتائج المتوقعة'. يجب استخدام فيديوهات 'قبل وبعد' (ضمن سياسات المنصات) والاعتماد المكثف على تقييمات العملاء لكسر حاجز الشك.",
                        "en": "The challenge here is 'expected results'. Use of 'before and after' videos (as part of platform policies) and heavy reliance on customer reviews should be used to break the barrier of doubt."
                    },
                    "ميك أب ومستحضرات تجميل ألوان (Cosmetics)": {
                        "ar": "البصرية هي كل شيء. الفيديوهات التعليمية القصيرة (Tutorials) على تيك توك وسناب شات التي توضح كيفية الاستخدام هي الأكثر مبيعاً.",
                        "en": "Visual is everything. Short tutorials on TikTok and Snapchat that explain how to use are best-sellers."
                    },
                    "أجهزة ليزر أو أدوات عناية منزلية (Beauty Devices)": {
                        "ar": "هذه المنتجات مرتفعة السعر وتتطلب فترة تفكير. استراتيجيتنا ستكون بناء قمع مبيعات (Funnel) يجيب عن الأسئلة الشائعة ويقارن تكلفة الجهاز بتكلفة العيادات.",
                        "en": "These products are expensive and require a period of thought. Our strategy will be to build a sales funnel that answers common questions and compares the cost of the device with the cost of clinics."
                    },
                    "مكملات غذائية أو منتجات صحية وتخسيس": {
                        "ar": "هذا المجال يواجه حظراً متكرراً في الإعلانات. السر هو كتابة محتوى إعلاني (Copywriting) ذكي يركز على 'نمط الحياة الصحي' وتجنب الادعاءات الطبية المباشرة.",
                        "en": "This domain faces frequent advertising bans. The secret is smart copywriting that focuses on the 'healthy lifestyle' and avoids direct medical claims."
                    }
                }
            },
            {
                "id": "q2",
                "label": {
                    "ar": "2. كيف تدير استراتيجية إقناع العميل في قطاع التجميل الحساس؟",
                    "en": "2. How do you manage a customer persuasion strategy in the sensitive beauty sector?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعتمد كلياً على تصوير المنتجات وشرح مكوناتها الفعالة",
                        "en": "We rely entirely on photographing products and explaining their active ingredients"
                    },
                    {
                        "ar": "نستعين بمؤثرين (Influencers) وصناع محتوى محليين لمراجعة المنتج",
                        "en": "We use local influencers and content creators to review the product"
                    },
                    {
                        "ar": "نقدم ضمانات ذهبية لاسترداد الأموال في حال عدم الرضا",
                        "en": "We offer a golden money back guarantee in case of dissatisfaction"
                    }
                ],
                "insights": {
                    "نعتمد كلياً على تصوير المنتجات وشرح مكوناتها الفعالة": {
                        "ar": "شرح المكونات يجذب شريحة صغيرة، بينما الشريحة الكبرى تبحث عن 'النتيجة'. يجب تحويل الرسالة من 'هذا المنتج يحتوي على كذا' إلى 'هذا المنتج سيعالج المشكلة الفلانية'.",
                        "en": "Explaining the ingredients attracts a small segment, while the larger segment is looking for the 'result'. The message should be transformed from 'This product contains such and such' to 'This product will address such and such problem'."
                    },
                    "نستعين بمؤثرين (Influencers) وصناع محتوى محليين لمراجعة المنتج": {
                        "ar": "استراتيجية ممتازة للسوق الخليجي! سنقوم باستخدام هذه الفيديوهات في إعلانات ممولة (Spark Ads) لضمان انتشار واسع بمصداقية عالية.",
                        "en": "Excellent strategy for the Gulf market! We will use these videos in sponsored ads (Spark Ads) to ensure wide spread with high credibility."
                    },
                    "نقدم ضمانات ذهبية لاسترداد الأموال في حال عدم الرضا": {
                        "ar": "الضمان الذهبي هو أقوى كاسر للاعتراضات في قطاع التجميل. سنقوم بإبراهذا في أول 3 ثوانٍ من الإعلان لرفع نسبة النقر والثقة.",
                        "en": "The Golden Guarantee is the strongest objection breaker in the beauty sector. We will highlight this in the first 3 seconds of the ad to increase click through rate and trust."
                    }
                },
                "condition": (ans) => ans.q1
            },
            {
                "id": "q3",
                "label": {
                    "ar": "3. كيف توظف Google Ads للبحث عن الباحثين عن حلول لمشاكل (كحب الشباب أو تساقط الشعر)؟",
                    "en": "3. How do you use Google Ads to search for those looking for solutions to problems (such as acne or hair loss)?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "لا نستخدم جوجل، نعتمد على السناب شات فقط",
                        "en": "We don't use Google, we rely on Snapchat only"
                    },
                    {
                        "ar": "نستهدف كلمات المنتجات فقط (شامبو، كريم)",
                        "en": "We target product words only (shampoo, cream)"
                    },
                    {
                        "ar": "نستهدف الكلمات المشكلة (علاج تساقط الشعر) وندفعهم لمقالة تعليمية متصلة بالمنتج",
                        "en": "We target the problem words (hair loss treatment) and drive them to an educational article related to the product"
                    }
                ],
                "insights": {
                    "لا نستخدم جوجل، نعتمد على السناب شات فقط": {
                        "ar": "هذا يعني أنك تضيع مبيعات مضمونة بنسبة 100%! من يبحث عن حل لمشكلة جمالية في جوجل يمتلك نية شراء قوية. سأبني لك حملة جوجل بحثية لاصطيادهم.",
                        "en": "This means you are missing out on 100% guaranteed sales! Anyone searching for a solution to an aesthetic problem on Google has a strong purchase intent. I will build you a Google search campaign to catch them."
                    },
                    "نستهدف كلمات المنتجات فقط (شامبو، كريم)": {
                        "ar": "هذه كلمات ذات منافسة شرسة (Red Ocean). سأطور استراتيجيتك لاستهداف كلمات (Long-tail) تحتوي على 'للبشرة الدهنية الحساسة' لزيادة معدل التحويل.",
                        "en": "These are words with fierce competition (Red Ocean). I will develop your strategy to target keywords containing 'oily, sensitive skin' to increase your conversion rate."
                    },
                    "نستهدف الكلمات المشكلة (علاج تساقط الشعر) وندفعهم لمقالة تعليمية متصلة بالمنتج": {
                        "ar": "قمع تسويقي متقدم جداً! (Advertorial Funnel). هذا يبني ثقة عمياء قبل الشراء. سأقوم بتحسين هذا المسار وربطه ب PMax.",
                        "en": "A very advanced marketing funnel! (Advertising Funnel). This builds blind confidence before purchasing. I will improve this path and link it to PMax."
                    }
                },
                "condition": (ans) => ans.q2
            },
            {
                "id": "q4",
                "label": {
                    "ar": "4. ما هو معدل الشراء المتكرر (Customer Retention) لمنتجات التجميل في متجرك؟",
                    "en": "4. What is the repeat purchase rate (Customer Retention) for beauty products in your store?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "ضعيف جداً، العميل يشتري مرة واحدة ولا يعود",
                        "en": "Very weak, the customer buys once and does not return"
                    },
                    {
                        "ar": "متوسط، يعود العميل كل 3-4 أشهر للطلب",
                        "en": "On average, a customer comes back every 3-4 months to order"
                    },
                    {
                        "ar": "لدينا نظام اشتراك وتذكير شهري للحفاظ على العملاء",
                        "en": "We have a monthly subscription and reminder system to retain customers"
                    }
                ],
                "insights": {
                    "ضعيف جداً، العميل يشتري مرة واحدة ولا يعود": {
                        "ar": "في التجميل، الأرباح تأتي من عمليات الشراء المتكررة (LTV). سأبني لك حملات إعادة استهداف برمجية تظهر للعميل إعلاناً بعد 25 يوماً من شرائه تذكره بتجديد العبوة.",
                        "en": "In beauty, profits come from repeat purchases (LTV). I will build you programmatic retargeting campaigns that show the customer an ad 25 days after their purchase reminding them to renew the package."
                    },
                    "متوسط، يعود العميل كل 3-4 أشهر للطلب": {
                        "ar": "أداء جيد، ولكن يمكن مضاعفته! سأقوم بتطوير باقات (Bundles) تغطي احتياج 3 أشهر لتجنب خسارة العميل خلال هذه الفترة.",
                        "en": "Good performance, but could be doubled! I will develop bundles that cover 3 months to avoid losing a customer during this period."
                    },
                    "لدينا نظام اشتراك وتذكير شهري للحفاظ على العملاء": {
                        "ar": "مستوى عالٍ من النضج التسويقي! سأركز إذن على استهداف (Lookalike Audiences) المستمد من الؤلاء العملاء المخلصين عبر جوجل PMax لجلب المزيد منهم.",
                        "en": "High level of marketing maturity! So I will focus on targeting (Lookalike Audiences) derived from loyal customers via Google PMax to attract more of them."
                    }
                },
                "condition": (ans) => ans.q3
            },
            {
                "id": "q5",
                "label": {
                    "ar": "5. كيف تتعامل مع مشكلة حظر الإعلانات (Ad Bans) الشائعة في قطاع الصحة والتجميل؟",
                    "en": "5. How do you deal with the problem of ad blocking, which is common in the health and beauty sector?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "حساباتنا تُغلق باستمرار ونخسر الداتا",
                        "en": "Our accounts are constantly closed and we lose data"
                    },
                    {
                        "ar": "نتجنب الكلمات المحظورة ونستخدم تلميحات",
                        "en": "We avoid taboo words and use hints"
                    },
                    {
                        "ar": "لم نواجه هذه المشكلة بعد",
                        "en": "We haven't encountered this problem yet"
                    }
                ],
                "insights": {
                    "حساباتنا تُغلق باستمرار ونخسر الداتا": {
                        "ar": "خسارة البيكسل والداتا كارثة. سأقوم بتفعيل GTM Server-side وربط الـ Conversions API لضمان الاحتفاظ بالداتا في سيرفرك الخاص بعيداً عن سيطرة المنصات.",
                        "en": "Losing pixels and data is a disaster. I will activate the GTM Server-side and connect the Conversions API to ensure that the data is kept on your own server, away from the control of the platforms."
                    },
                    "نتجنب الكلمات المحظورة ونستخدم تلميحات": {
                        "ar": "استراتيجية جيدة. سأقوم بتحسين ال Copywriting للتركيز على 'الرفاهية والثقة بالنفس' بدلاً من 'الشفاء والعلاج' للالتفاف على سياسات فيسبوك وجوجل.",
                        "en": "Good strategy. I will be improving my copywriting to focus on 'well-being and self-confidence' rather than 'healing and treatment' to get around Facebook and Google policies."
                    },
                    "لم نواجه هذه المشكلة بعد": {
                        "ar": "الأمر مجرد مسألة وقت في هذا القطاع. يجب تأمين الداتا وبناء Business Manager احتياطي (Backup) لضمان استمرارية الحملات.",
                        "en": "It is just a matter of time in this sector. Data must be secured and a backup Business Manager must be built to ensure the continuity of campaigns."
                    }
                },
                "condition": (ans) => ans.q4
            },
            {
                "id": "q6",
                "label": {
                    "ar": "6. هل تستخدم ميزات Shopping و Merchant Center مع منتجات التجميل الخاصة بك؟",
                    "en": "6. Do you use Shopping and Merchant Center features with your beauty products?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعم، المنتجات ظاهرة في Shopping",
                        "en": "Yes, products appear in Shopping"
                    },
                    {
                        "ar": "رفضت جوجل المنتجات لأسباب طبية أو متعلقة بالصور",
                        "en": "Google has rejected products for medical or image-related reasons"
                    },
                    {
                        "ar": "لا نعرف كيف نربطها",
                        "en": "We don't know how to connect it"
                    }
                ],
                "insights": {
                    "نعم، المنتجات ظاهرة في Shopping": {
                        "ar": "ممتاز. سأقوم بتطبيق تقنية (Custom Labels) لفصل المنتجات ذات ه(Bestsellers) وال (High Margin) لمنحها الميزانية الأكبر في حملات PMax.",
                        "en": "excellent. I will apply the Custom Labels technique to separate products with Bestsellers and High Margin to give them the largest budget in PMax campaigns."
                    },
                    "رفضت جوجل المنتجات لأسباب طبية أو متعلقة بالصور": {
                        "ar": "الرفض شائع بسبب الادعاءات أو العلامات المائية في الصور. سأقوم بتنظيف ال Feed والتأكد من مطابقة ال GTIN والمواصفات للقبول الفوري.",
                        "en": "Rejections are common due to claims or watermarks in images. I will clean the feed and ensure that the GTIN and specifications match for immediate acceptance."
                    },
                    "لا نعرف كيف نربطها": {
                        "ar": "وجودك في Google Shopping مجاني ومدفوع ويعتبر واجهة ثقة هائلة. سأتولى هذا الربط لضمان تصدر منتجاتك لنتائج البحث المرئية.",
                        "en": "Your presence on Google Shopping is both free and paid and is a facade of tremendous trust. I'll do this linking to ensure your products are at the top of the visible search results."
                    }
                },
                "condition": (ans) => ans.q5
            },
            {
                "id": "q7",
                "label": {
                    "ar": "7. بالنسبة للمنتجات باهظة الثمن (كأجهزة الليزر)، كيف تحل مشكلة تردد العميل الطويلة؟",
                    "en": "7. For expensive products (such as lasers), how do you solve the problem of long customer hesitation?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نستمر بعرض الإعلان نفسه حتى يشتري",
                        "en": "We keep showing the same ad until he buys"
                    },
                    {
                        "ar": "نرسلهم لصفحة هبوط تحتوي على مقارنة شاملة وتقسيط تابي/تمارا",
                        "en": "We send them to a landing page with a comprehensive Tabby/Tamara comparison and breakdown"
                    },
                    {
                        "ar": "نحولهم للواتساب للرد على استفساراتهم يدوياً",
                        "en": "We transfer them to WhatsApp to answer their inquiries manually"
                    }
                ],
                "insights": {
                    "نستمر بعرض الإعلان نفسه حتى يشتري": {
                        "ar": "هذا يهدر المال ويسبب الإزعاج للعميل. سأقوم بتغيير الرسالة الإعلانية في مرحلة (MOFU) لتركز على (الضمان، التقسيط، سهولة الاستخدام) بدلاً من مميزات الجهاز.",
                        "en": "This wastes money and causes inconvenience to the customer. I will change the advertising message in the MOFU stage to focus on (warranty, installments, ease of use) instead of the device’s features."
                    },
                    "نرسلهم لصفحة هبوط تحتوي على مقارنة شاملة وتقسيط تابي/تمارا": {
                        "ar": "هذا هو المسار الصحيح لل High-ticket. سأطور الصفحة باستخدام خرائط التصفح (Heatmaps) لتحسين ال CRO وضمان قراءة العميل للمقارنة بوضوح.",
                        "en": "This is the correct path for High-ticket. I will develop the page using heatmaps to improve CRO and ensure the client reads the comparison clearly."
                    },
                    "نحولهم للواتساب للرد على استفساراتهم يدوياً": {
                        "ar": "الردود البشرية قوية لكنها غير قابلة للتوسع السريع (Not Scalable). سأقوم بتطوير Chatbot متقدم يسبق الموظف ويعرض فيديوهات توضيحية للجهاز.",
                        "en": "Human responses are powerful but not scalable. I will develop an advanced Chatbot that precedes the employee and displays demonstration videos of the device."
                    }
                },
                "condition": (ans) => ans.q6
            },
            {
                "id": "q8",
                "label": {
                    "ar": "8. هل قمت بتفعيل تتبع الأرباح الفعلي (Profit Bidding) بدلاً من تتبع حجم المبيعات (Revenue Bidding) في المنصات؟",
                    "en": "8. Have you activated Profit Bidding instead of Revenue Bidding in the platforms?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعم، نخبر جوجل بالهامش الربحي الحقيقي لكل منتج",
                        "en": "Yes, we tell Google the real profit margin for each product"
                    },
                    {
                        "ar": "نتتبع إجمالي قيمة المبيعات (ROAS) فقط",
                        "en": "We only track gross sales value (ROAS)."
                    },
                    {
                        "ar": "نتتبع المشتريات كتكلفة ثابتة (CPA)",
                        "en": "We track purchases as a fixed cost (CPA)"
                    }
                ],
                "insights": {
                    "نعم، نخبر جوجل بالهامش الربحي الحقيقي لكل منتج": {
                        "ar": "أنت في أعلى مستويات ال Media Buying! هذا ال (POAS - Profit On Ad Spend) يضمن لك عدم تسجيل خسائر أبداً. سأعزهذا عبر دمج بيانات الشحن والمرتجعات.",
                        "en": "You are at the highest levels of Media Buying! This POAS - Profit On Ad Spend guarantees you that you will never record losses. I will enhance this by merging my shipping and returns data."
                    },
                    "نتتبع إجمالي قيمة المبيعات (ROAS) فقط": {
                        "ar": "هذا يعطي صورة خادعة؛ قد تبيع منتجات رخيصة بكثافة وتخسر في النهاية! سأقوم بهيكلة حساب جوجل لتبني مبيعات (Value-Based) تعطي وزناً أكبر للمنتجات عالية الربح.",
                        "en": "This gives a deceptive picture; You may sell cheap products heavily and lose in the end! I will structure my Google account to value-based sales that give more weight to high-profit products."
                    },
                    "نتتبع المشتريات كتكلفة ثابتة (CPA)": {
                        "ar": "هذا التوجه صالح للمنتجات ذات السعر الموحد. في التجميل (عربات التسوق مختلفة الأحجام)، التتبع عبر ال CPA غير دقيق ويمنع التوسع السليم.",
                        "en": "This trend is valid for products with a single price. In cosmetics (shopping carts of different sizes), CPA tracking is inaccurate and prevents proper scaling."
                    }
                },
                "condition": (ans) => ans.q7
            },
            {
                "id": "q9",
                "label": {
                    "ar": "9. ما هو المحفز الذي يقنع عميل التجميل باتخاذ القرار الفوري بالشراء؟",
                    "en": "9. What motivator convinces a beauty customer to make an immediate purchase decision?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "خصم قوي ومؤقت (Flash Sale)",
                        "en": "Strong and temporary discount (Flash Sale)"
                    },
                    {
                        "ar": "الدية مجانية مع الطلب (GWP - Gift With Purchase)",
                        "en": "Free blood money with the order (GWP - Gift With Purchase)"
                    },
                    {
                        "ar": "شهادة أو اعتماد طبي رسمي للمنتج",
                        "en": "Official medical certificate or approval for the product"
                    }
                ],
                "insights": {
                    "خصم قوي ومؤقت (Flash Sale)": {
                        "ar": "الخصومات تحرق البراند على المدى الطويل في قطاع التجميل. سأعلمك استراتيجيات لزيادة الطلب دون تخفيض السعر الأساسي.",
                        "en": "Discounts burn the brand in the long run in the beauty sector. I will teach you strategies to increase demand without lowering the base price."
                    },
                    "الدية مجانية مع الطلب (GWP - Gift With Purchase)": {
                        "ar": "هذا هو سر كبرى البراندات! إضافة (عينة صغيرة مجانية) ترفع المبيعات وتحافظ على قيمة البراند وتدفع العميل لتجربة منتج آخر مستقبلاً.",
                        "en": "This is the secret of major brands! Adding a small free sample increases sales, maintains the value of the brand, and prompts the customer to try another product in the future."
                    },
                    "شهادة أو اعتماد طبي رسمي للمنتج": {
                        "ar": "الاعتمادات الطبية (مثل FDA أو اليئة الغذاء والدواء) تبني ثقة صخرية. سأجعل هذه الشهادة جزءاً لا يتجزأ من كل صورة إعلانية وصفحة هبوط.",
                        "en": "Medical accreditations (such as the FDA) build rock-solid trust. I will make this testimonial an integral part of every ad image and landing page."
                    }
                },
                "condition": (ans) => ans.q8
            },
            {
                "id": "q10",
                "label": {
                    "ar": "10. ما هو حجم الاستثمار الإعلاني الشهري لدعم مسيرة هذه العلامة الجمالية؟",
                    "en": "10. What is the size of the monthly advertising investment to support the journey of this aesthetic brand?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "أقل من 5,000$ (البداية وبناء الثقة الأولية)",
                        "en": "Less than $5,000 (getting started and building initial confidence)"
                    },
                    {
                        "ar": "5,000$ إلى 15,000$ (التوسع السريع ومواجهة المنافسين)",
                        "en": "$5,000 to $15,000 (rapid expansion and confrontation of competitors)"
                    },
                    {
                        "ar": "أكثر من 15,000$ (الاستحواذ الكلي على الشريحة الخليجية)",
                        "en": "More than $15,000 (total acquisition of the Gulf segment)"
                    }
                ],
                "insights": {
                    "أقل من 5,000$ (البداية وبناء الثقة الأولية)": {
                        "ar": "سأركز 80% من الميزانية على منتج واحد بطل (Hero Product) لضمان تحقيق سيولة نقدية (Cash flow) ممتازة، بدلاً من تشتيت الميزانية على كتالوج المنتجات.",
                        "en": "I will focus 80% of the budget on one hero product to ensure excellent cash flow, rather than spreading the budget over the product catalog."
                    },
                    "5,000$ إلى 15,000$ (التوسع السريع ومواجهة المنافسين)": {
                        "ar": "مرحلة ممتازة لاستخدام استراتيجية PMax + TikTok Sparks. سأقوم ببناء قمع إعلاني يثقف، يقنع، ثم يعيد الاستهداف لضمان نسبة تحويل عالية جداً.",
                        "en": "An excellent stage to use the PMax + TikTok Sparks strategy. I will build an advertising funnel that educates, persuades, and then retargets to ensure a very high conversion rate."
                    },
                    "أكثر من 15,000$ (الاستحواذ الكلي على الشريحة الخليجية)": {
                        "ar": "بهذه الميزانية الضخمة، سننتقل من مجرد بيع منتجات إلى 'بيع أسلوب حياة'. سنوظف ال Data Modeling لاستهداف الشرائح الأكثر إنفاقاً والمسيطرة على اتجاهات الموضة بالخليج.",
                        "en": "With this huge budget, we will move from just selling products to 'selling a lifestyle'. We will employ data modeling to target the segments that spend the most and control fashion trends in the Gulf."
                    }
                },
                "condition": (ans) => ans.q9
            }
        ]
    },
    "food-bev": {
        "title": {
            "ar": "Food & Beverage (المطاعم والأغذية والمقاهي)",
            "en": "Food & Beverage (Restaurants, Food and Cafes)"
        },
        "questions": [
            {
                "id": "q1",
                "label": {
                    "ar": "1. ما هو النموذج التشغيلي لمشروعك في قطاع الأغذية؟",
                    "en": "1. What is the operating model for your business in the food sector?"
                },
                "type": "select",
                "options": [
                    {
                        "ar": "مطعم أو كافيه محلي يبحث عن زيارات للفروع (Foot-fall)",
                        "en": "A local restaurant or café looking for branch visits (Foot-fall)"
                    },
                    {
                        "ar": "متجر إلكتروني يبيع القهوة، التمور، أو منتجات قابلة للشحن",
                        "en": "An online store that sells coffee, dates, or dropshipping products"
                    },
                    {
                        "ar": "تطبيق توصيل أو اشتراكات وجبات صحية شهرية (Diet Meals)",
                        "en": "Delivery app or monthly healthy meal subscriptions (Diet Meals)"
                    },
                    {
                        "ar": "امتياز تجاري (Franchise) يبحث عن مستثمرين",
                        "en": "Franchise looking for investors"
                    }
                ],
                "insights": {
                    "مطعم أو كافيه محلي يبحث عن زيارات للفروع (Foot-fall)": {
                        "ar": "للمطاعم المحلية، إعلانات السناب شات الجغرافية (Geo-targeting) مع استخدام فيديوهات قريبة للطعام (Food Porn) هي الطريقة الأمثل لجذب الزوار.",
                        "en": "For local restaurants, Geo-targeting Snapchat ads using nearby Food Porn videos is the perfect way to attract visitors."
                    },
                    "متجر إلكتروني يبيع القهوة، التمور، أو منتجات قابلة للشحن": {
                        "ar": "في السعودية، قطاع التمور والقهوة ضخم. التميز يتطلب تغليفاً استثنائياً وعروض شراء بكميات (Bundles) مع شحن مجاني لرفع قيمة السلة.",
                        "en": "In Saudi Arabia, the dates and coffee sector is huge. Excellence requires exceptional packaging and offers to buy in bulk (bundles) with free shipping to increase the value of the basket."
                    },
                    "تطبيق توصيل أو اشتراكات وجبات صحية شهرية (Diet Meals)": {
                        "ar": "الاشتراكات الشهرية تتطلب بناء الثقة. يجب استخدام قصص نجاح لعملاء تغيرت حياتهم، وتقديم عروض تجربة لأيام معدودة لتحويلهم لمشتركين دائمين.",
                        "en": "Monthly subscriptions require building trust. You should use success stories of customers whose lives have changed, and offer trial offers for a few days to convert them into permanent subscribers."
                    },
                    "امتياز تجاري (Franchise) يبحث عن مستثمرين": {
                        "ar": "هذا تسويق B2B بحت. نعتمد على استمارات Lead Generation عبر LinkedIn وإعلانات جوجل للبحث عن كلمات مثل 'استثمار مطعم'.",
                        "en": "This is purely B2B marketing. We rely on Lead Generation forms via LinkedIn and Google Ads to search for words like 'restaurant investment'."
                    }
                }
            },
            {
                "id": "q2",
                "label": {
                    "ar": "2. كيف تعتمد على Google My Business (Local SEO) لجذب زوار المطعم أو الكافيه؟",
                    "en": "2. How do you rely on Google My Business (Local SEO) to attract visitors to a restaurant or café?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "الملف محدث والتقييمات ممتازة ونرد عليها جميعاً",
                        "en": "The file is up to date, the reviews are excellent, and we respond to all of them"
                    },
                    {
                        "ar": "موجود لكن لا نتابعه ولا نضع صوراً احترافية فيه",
                        "en": "It exists, but we do not follow it or put professional photos in it"
                    },
                    {
                        "ar": "نعتمد على خرائط جوجل فقط في الإعلانات المدفوعة (Local Ads)",
                        "en": "We rely on Google Maps only for paid ads (Local Ads)"
                    }
                ],
                "insights": {
                    "الملف محدث والتقييمات ممتازة ونرد عليها جميعاً": {
                        "ar": "أنت تمتلك أقوى أصل مجاني للمطعم! سأقوم بتعزيز ذلك بربط حملات Google Local Campaign لتتصدر نتائج البحث بشكل دائم ل (مطعم قريب مني).",
                        "en": "You own the most powerful free restaurant asset! I will enhance this by linking Google Local Campaigns to permanently top search results for (restaurant near me)."
                    },
                    "موجود لكن لا نتابعه ولا نضع صوراً احترافية فيه": {
                        "ar": "تجاهل Google My Business في 2026 يعني فقدان 40% من زوارك المحتملين! سأقوم بتحسين ملفك (SEO) لرفع ظهورك مجاناً وبشكل مدفوع.",
                        "en": "Ignoring Google My Business in 2026 means losing 40% of your potential visitors! I will optimize your profile (SEO) to increase your visibility for free and paid."
                    },
                    "نعتمد على خرائط جوجل فقط في الإعلانات المدفوعة (Local Ads)": {
                        "ar": "الإعلانات المدفوعة في الخرائط جيدة، ولكن التقييمات الضعيفة ستمنع الزوار. التوازن بين التقييمات الإيجابية والظهور المدفوع هو سر النجاح المحلي.",
                        "en": "Paid ads in maps are good, but poor ratings will deter visitors. A balance between positive reviews and paid exposure is the secret to local success."
                    }
                },
                "condition": (ans) => ans.q1
            },
            {
                "id": "q3",
                "label": {
                    "ar": "3. كيف تستخدم إعلانات PMax لزيارة الفروع المباشرة (Store Visits)؟",
                    "en": "3. How to use PMax ads for Store Visits?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نستخدمها بشكل دائم ونتتبع مسارات العملاء للمحل",
                        "en": "We use it constantly and track customers' routes to the store"
                    },
                    {
                        "ar": "لم نجربها ونعتمد فقط على سناب شات لترويج الفروع",
                        "en": "We have not tried it and rely only on Snapchat to promote the branches"
                    },
                    {
                        "ar": "لا نعلم كيف يمكن تتبع الزيارة الفعلية للمطعم عن طريق جوجل",
                        "en": "We do not know how the actual visit to the restaurant can be tracked via Google"
                    }
                ],
                "insights": {
                    "نستخدمها بشكل دائم ونتتبع مسارات العملاء للمحل": {
                        "ar": "عمل احترافي متقدم. سأقوم بتحسين ال Assets لتشمل فيديوهات قصيرة ومشهية جداً، لرفع معدل التحويل (Visit Rate) من الإعلان.",
                        "en": "Advanced professional work. I will improve the assets to include short and very interesting videos, to increase the conversion rate (visit rate) of the ad."
                    },
                    "لم نجربها ونعتمد فقط على سناب شات لترويج الفروع": {
                        "ar": "سناب ممتاز للوعي الجماهيري، لكن جوجل PMax for Store Goals يستهدف الشخص المتواجد قريباً ويبحث عن طعام فوراً. سأفعل لك هذا المسار المربح.",
                        "en": "Snap is great for mass awareness, but Google PMax for Store Goals targets someone who is nearby and looking for food immediately. I will do this profitable path for you."
                    },
                    "لا نعلم كيف يمكن تتبع الزيارة الفعلية للمطعم عن طريق جوجل": {
                        "ar": "جوجل يمتلك تقنية (Store Visit Conversions) التي تتتبع الزائر عبر ال GPS في هاتفه للتأكد أنه زار مطعمك بعد رؤية الإعلان. سأقوم بتفعيلها لضبط الميزانية.",
                        "en": "Google has Store Visit Conversions technology that tracks the visitor via the GPS on his phone to ensure that he visited your restaurant after seeing the ad. I will activate it to adjust the budget."
                    }
                },
                "condition": (ans) => ans.q2
            },
            {
                "id": "q4",
                "label": {
                    "ar": "4. في حملات ال (Diet Meals - الوجبات الصحية)، ما هي أكثر زاوية إعلانية ناجحة لديك؟",
                    "en": "4. In Diet Meals campaigns, what is your most successful advertising angle?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "زاوية فقدان الوزن وتغيير شكل الجسم (Transformation)",
                        "en": "Weight loss angle and body shape change (Transformation)"
                    },
                    {
                        "ar": "زاوية الراحة وتوفير وقت الطبخ للموظفين (Convenience)",
                        "en": "Comfort corner and saving cooking time for employees (Convenience)"
                    },
                    {
                        "ar": "التركيز على طعم الأكل وتنوع القائمة",
                        "en": "Focus on the taste of food and the diversity of the menu"
                    }
                ],
                "insights": {
                    "زاوية فقدان الوزن وتغيير شكل الجسم (Transformation)": {
                        "ar": "ال Transformation قوية جداً لكنها تواجه سياسات صارمة. سأصيغ الإعلانات بطريقة احترافية لضمان قبولها في جوجل وفيسبوك مع الالتزام باللوائح.",
                        "en": "Transformation is very powerful, but it faces strict policies. I will craft ads in a professional manner to ensure they are accepted on Google and Facebook while adhering to regulations."
                    },
                    "زاوية الراحة وتوفير وقت الطبخ للموظفين (Convenience)": {
                        "ar": "زاوية ممتازة للشرائح ذات الدخل العالي. سأستهدف الموظفين في المناطق التجارية عبر (Google Search) للبحث عن 'وجبات صحية للموظفين'.",
                        "en": "An excellent angle for high-income segments. I will target employees in commercial areas via Google Search to search for 'healthy employee meals'."
                    },
                    "التركيز على طعم الأكل وتنوع القائمة": {
                        "ar": "هذه رسالة مساعدة جيدة، لكن 'الألم' الحقيقي للعميل هو الوزن أو الوقت. يجب تعديل ال Hook لاستهداف الألم ثم تقديم الطعم كحل.",
                        "en": "This is a good help message, but the real 'pain' for the customer is the weight or time. The hook should be modified to target the pain and then the bait should be offered as a solution."
                    }
                },
                "condition": (ans) => ans.q3
            },
            {
                "id": "q5",
                "label": {
                    "ar": "5. كيف تقوم بتصوير منتجاتك (الأطباق/القهوة/التمور) للإعلانات المدفوعة؟",
                    "en": "5. How do you photograph your products (dishes/coffee/dates) for paid ads?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعتمد على مصورين محترفين (Food Photography) بلقطات ثابتة",
                        "en": "We rely on professional photographers (Food Photography) with still shots"
                    },
                    {
                        "ar": "نركز على فيديوهات قصيرة (Reels/TikToks) تظهر الطبخ أو التقديم بطريقة مشهية",
                        "en": "We focus on short videos (Reels/TikToks) that show cooking or serving in an appetizing way"
                    },
                    {
                        "ar": "صور عادية بجوال من فريق العمل",
                        "en": "Ordinary mobile photos of the work team"
                    }
                ],
                "insights": {
                    "نعتمد على مصورين محترفين (Food Photography) بلقطات ثابتة": {
                        "ar": "الصور الثابتة ممتازة لل Menu، ولكن في الإعلانات المخصصة (PMax أو السوشيال) يجب أن ينتقل التركيز كلياً للفيديوهات الحركية.",
                        "en": "Still images are excellent for Menu, but in personalized ads (PMax or social), the focus should shift entirely to action videos."
                    },
                    "نركز على فيديوهات قصيرة (Reels/TikToks) تظهر الطبخ أو التقديم بطريقة مشهية": {
                        "ar": "هذا هو التوجه الفائز. لقطة 'الجبنة هذائبة' أو 'صب القهوة البطيء' (Sensory Hook) ترفع معدلات ال CTR بشكل جنوني.",
                        "en": "This is a winning approach. The 'melting cheese' shot or the 'slow pouring of coffee' (Sensory Hook) raises CTR rates like crazy."
                    },
                    "صور عادية بجوال من فريق العمل": {
                        "ar": "هذا يقتل شهية العميل ويضيع الميزانية الإعلانية! في الأكل، (العين تأكل قبل الفم). يجب تحسين جودة المحتوى المرئي فوراً لتحقيق أي عائد من الإعلانات.",
                        "en": "This kills the customer's appetite and wastes the advertising budget! In eating, (the eye eats before the mouth). The quality of your visual content must be improved immediately to achieve any ad revenue."
                    }
                },
                "condition": (ans) => ans.q4
            },
            {
                "id": "q6",
                "label": {
                    "ar": "6. هل تقوم باستخدام حملات الولاء (Loyalty Programs) لضمان تكرار الزيارة أو الشراء؟",
                    "en": "6. Do you use loyalty campaigns to ensure repeat visits or purchases?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعم، لدينا نظام نقاط أو بطاقات ختم لكل شراء",
                        "en": "Yes, we have a points system or stamp cards for every purchase"
                    },
                    {
                        "ar": "نرسل عروض SMS و WhatsApp للعملاء القدامى",
                        "en": "We send SMS and WhatsApp offers to old customers"
                    },
                    {
                        "ar": "لا نفعل ذلك ونعتمد على جودة المنتج فقط",
                        "en": "We do not do this and rely on the quality of the product only"
                    }
                ],
                "insights": {
                    "نعم، لدينا نظام نقاط أو بطاقات ختم لكل شراء": {
                        "ar": "نظام ممتاز. سأقوم بربط داتا ال Loyalty بحملات (Customer Match) في جوجل لاستهدافهم بعروض حصرية وجلبهم مجدداً بتكلفة شبه معدومة.",
                        "en": "Excellent system. I will link Loyalty data to Customer Match campaigns on Google to target them with exclusive offers and bring them back at almost no cost."
                    },
                    "نرسل عروض SMS و WhatsApp للعملاء القدامى": {
                        "ar": "رسائل الواتساب هي الأقوى في السعودية. سأقوم بهندسة رسائل (Automated) تعتمد على سلوك العميل (مثل: رسالة وقت الغداء للوجبات السريعة).",
                        "en": "WhatsApp messages are the most powerful in Saudi Arabia. I will engineer automated messages based on customer behavior (eg: lunchtime message for fast food)."
                    },
                    "لا نفعل ذلك ونعتمد على جودة المنتج فقط": {
                        "ar": "الجودة وحدها لا تكفي في سوق مطاعم متشبع. 60% من أرباح المطاعم تأتي من ال (Returning Customers). سأبني لك نظام ولاء لضمان استدامة الأرباح.",
                        "en": "Quality alone is not enough in a saturated restaurant market. 60% of restaurants’ profits come from returning customers. I will build you a loyalty system to ensure sustainable profits."
                    }
                },
                "condition": (ans) => ans.q5
            },
            {
                "id": "q7",
                "label": {
                    "ar": "7. في اشتراكات القهوة أو الوجبات المتكررة (Subscription Model)، ما هي مشكلتك الأكبر؟",
                    "en": "7. With coffee or recurring meal subscriptions (Subscription Model), what is your biggest problem?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "تكلفة اكتساب مشترك جديد (CAC) عالية جداً",
                        "en": "The cost of acquiring a new subscriber (CAC) is very high"
                    },
                    {
                        "ar": "إلغاء الاشتراكات بعد الشهر الأول (High Churn Rate)",
                        "en": "Cancel subscriptions after the first month (High Churn Rate)"
                    },
                    {
                        "ar": "صعوبة في توصيل الفكرة أو تعقيد عملية الاشتراك",
                        "en": "Difficulty in communicating the idea or complexity of the subscription process"
                    }
                ],
                "insights": {
                    "تكلفة اكتساب مشترك جديد (CAC) عالية جداً": {
                        "ar": "في الاشتراكات، الـ CAC يجب أن يغطيه الـ LTV. سأقدم استراتيجية 'اليوم الأول مجاناً' أو 'بوكس تجريبي' لخفض حاجز الشراء (Friction) الأولي بشدة.",
                        "en": "In subscriptions, the CAC must be covered by the LTV. I will offer a 'first day free' or 'demo box' strategy to severely lower your initial purchase barrier."
                    },
                    "إلغاء الاشتراكات بعد الشهر الأول (High Churn Rate)": {
                        "ar": "ال Churn يحدث بسبب الملل. سأصمم حملات Nurturing بالبريد والواتساب تبقي العميل متحمساً لوجبات الأسبوع القادم.",
                        "en": "Churn occurs due to boredom. I will design Nurturing mail and WhatsApp campaigns that keep the customer excited about next week's meals."
                    },
                    "صعوبة في توصيل الفكرة أو تعقيد عملية الاشتراك": {
                        "ar": "صفحة الهبوط (Landing Page) الخاصة بك هي المشكلة. سأعيد تصميم ال UI/UX ليكون الاشتراك في 3 خطوات بسيطة ومباشرة جداً.",
                        "en": "Your landing page is the problem. I will redesign the UI/UX so that signing up takes 3 simple and very direct steps."
                    }
                },
                "condition": (ans) => ans.q6
            },
            {
                "id": "q8",
                "label": {
                    "ar": "8. كيف تدير التواجد على تطبيقات التوصيل (جاهز، النقرستيشن، طلبات)؟",
                    "en": "8. How do you manage your presence on delivery applications (Jahez, Clickstation, Talabat)?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعتمد عليها كلياً وهي مصدر الدخل الأساسي رغم العمولات العالية",
                        "en": "We depend entirely on it and it is our primary source of income despite the high commissions"
                    },
                    {
                        "ar": "نستخدمها، لكن نركز إعلاناتنا على تطبيقنا الخاص أو متجرنا لتقليل العمولة",
                        "en": "We use them, but focus our ads on our own app or store to reduce commission"
                    },
                    {
                        "ar": "لا نستخدم تطبيقات التوصيل، نعتمد على استلام الفروع (Pickup)",
                        "en": "We do not use delivery applications, we rely on branch pickup (Pickup)."
                    }
                ],
                "insights": {
                    "نعتمد عليها كلياً وهي مصدر الدخل الأساسي رغم العمولات العالية": {
                        "ar": "العمولات (30%) تقتل أرباحك. سأبني لك حملات تسويقية تحول عملاء هذه التطبيقات بالتدريج إلى تطبيقك/موقعك الخاص باستخدام إعلانات جوجل المباشرة وحوافز مغرية.",
                        "en": "Commissions (30%) kill your profits. I will build you marketing campaigns that gradually convert these app customers to your app/site using direct Google ads and attractive incentives."
                    },
                    "نستخدمها، لكن نركز إعلاناتنا على تطبيقنا الخاص أو متجرنا لتقليل العمولة": {
                        "ar": "خطوة ذكية. سأقوم بإنشاء حملات (App Install) مخصصة على جوجل وتيك توك لتثبيت تطبيقك، مع دمج (Deep Links) للطلب الفوري.",
                        "en": "Smart move. I will create custom App Install campaigns on Google and TikTok to get your app installed, incorporating Deep Links for instant ordering."
                    },
                    "لا نستخدم تطبيقات التوصيل، نعتمد على استلام الفروع (Pickup)": {
                        "ar": "هذا يعزز أرباحك، لكن يجب أن تجعل ال Pickup سهلاً جداً (Drive-thru أو Curbside). ال Local Campaigns هنا ستكون العمود الفقري للمبيعات.",
                        "en": "This boosts your profits, but you should make pickup very easy (Drive-thru or Curbside). Local Campaigns here will be the backbone of sales."
                    }
                },
                "condition": (ans) => ans.q7
            },
            {
                "id": "q9",
                "label": {
                    "ar": "9. في مواسم الركود (خارج أوقات الرواتب)، كيف تتصرف إعلانياً؟",
                    "en": "9. During off-seasons (off-salary times), how do you conduct advertising?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نوقف الإعلانات لتقليل الخسائر",
                        "en": "We stop ads to reduce losses"
                    },
                    {
                        "ar": "نستمر بنفس الميزانية ونعتبره أمراً طبيعياً",
                        "en": "We continue with the same budget and consider it normal"
                    },
                    {
                        "ar": "نطلق منتجات أرخص (Value Meals) أو باقات توفير",
                        "en": "We launch cheaper products (Value Meals) or savings packages"
                    }
                ],
                "insights": {
                    "نوقف الإعلانات لتقليل الخسائر": {
                        "ar": "الإيقاف يخرجك من المزاد ويكلفك ضعف الثمن لإعادة الحملات لاحقاً! सأعلمك كيف تدير الميزانية بمرونة دون إيقافها لضمان استمرار الحضور الذهني.",
                        "en": "Suspension takes you out of the auction and costs you double the price to restart campaigns later! I teach you how to manage the budget flexibly without stopping it to ensure continued presence of mind."
                    },
                    "نستمر بنفس الميزانية ونعتبره أمراً طبيعياً": {
                        "ar": "الدر للميزانية! في أوقات الركود يجب تغيير ال Messaging (الرسائل) لتركز على (التوفير أو اللمة العائلية) ليتناسب مع النفسية الشرائية.",
                        "en": "Great for the budget! In times of recession, messaging must be changed to focus on (savings or family gathering) to suit the purchasing psychology."
                    },
                    "نطلق منتجات أرخص (Value Meals) أو باقات توفير": {
                        "ar": "تكتيك المحترفين! الـ PMax و Shopping سأقوم بضبطهما للتركيز الكامل على ه(Value Meals) في نهاية الشهر للوصول للميزانيات المنخفضة بفعالية.",
                        "en": "Professional tactic! I will adjust PMax and Shopping to focus fully on Value Meals at the end of the month to reach low budgets effectively."
                    }
                },
                "condition": (ans) => ans.q8
            },
            {
                "id": "q10",
                "label": {
                    "ar": "10. ما هو حجم استثمارك التسويقي الشهري لتطوير هذا البيزنس الغذائي؟",
                    "en": "10. What is the size of your monthly marketing investment to develop this food business?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "أقل من 3,000$ (التركيز على فرع واحد أو متجر ناشئ)",
                        "en": "Less than $3,000 (focus on a single branch or startup store)"
                    },
                    {
                        "ar": "3,000$ إلى 10,000$ (مرحلة التوسع لعدة فروع أو مناطق تغطية)",
                        "en": "$3,000 to $10,000 (expansion stage to several branches or coverage areas)"
                    },
                    {
                        "ar": "أكثر من 10,000$ (بناء سلسلة مطاعم ضخمة أو علامة أغذية وطنية)",
                        "en": "More than $10,000 (building a huge restaurant chain or national food brand)"
                    }
                ],
                "insights": {
                    "أقل من 3,000$ (التركيز على فرع واحد أو متجر ناشئ)": {
                        "ar": "سأوجه 100% من الميزانية نحو الاستهداف ال Hyper-Local وحملات PMax للفروع لتعبئة الكراسي يومياً.",
                        "en": "I will direct 100% of the budget towards hyper-local targeting and PMax campaigns for branches to fill chairs daily."
                    },
                    "3,000$ إلى 10,000$ (مرحلة التوسع لعدة فروع أو مناطق تغطية)": {
                        "ar": "هنا يبدأ الدمج المتوازي بين الوعي (TikTok/Snap) والمبيعات (Google/Meta). سأبني لك إطار تتبع يحدد أي الفروع يستجيب أسرع للإعلانات.",
                        "en": "This is where the parallel merging of awareness (TikTok/Snap) and sales (Google/Meta) begins. I will build you a tracking framework that determines which branches respond fastest to ads."
                    },
                    "أكثر من 10,000$ (بناء سلسلة مطاعم ضخمة أو علامة أغذية وطنية)": {
                        "ar": "سنعمل ك Agency مصغرة لعلامتك. سأتبنى استراتيجية Omni-channel کاملة لترسيخ هوية في كل منزل بالخليج وربط المبيعات بسلاسل الإمداد مباشرة.",
                        "en": "We will act as a mini agency for your brand. I will adopt a full Omni-channel strategy to establish an identity in every home in the Gulf and link sales directly to supply chains."
                    }
                },
                "condition": (ans) => ans.q9
            }
        ]
    },
    "automotive": {
        "title": {
            "ar": "Automotive (قطاع السيارات وخدماتها)",
            "en": "Automotive (automotive sector and services)"
        },
        "questions": [
            {
                "id": "q1",
                "label": {
                    "ar": "1. ما هو مجالك الدقيق في قطاع السيارات؟",
                    "en": "1. What is your exact field in the automotive sector?"
                },
                "type": "select",
                "options": [
                    {
                        "ar": "معرض بيع سيارات (جديد أو مستعمل)",
                        "en": "Car sales showroom (new or used)"
                    },
                    {
                        "ar": "تاجير سيارات (يومي أو منتهي بالتمليك)",
                        "en": "Car rental (daily or with ownership)"
                    },
                    {
                        "ar": "مراكز صيانة، تلميع، أو قطع غيار",
                        "en": "Maintenance, polishing, or spare parts centers"
                    },
                    {
                        "ar": "تطبيق لخدمات السيارات (غسيل متنقل، سطحة، الخ)",
                        "en": "Application for car services (mobile car wash, rooftop, etc.)"
                    }
                ],
                "insights": {
                    "معرض بيع سيارات (جديد أو مستعمل)": {
                        "ar": "بيع السيارات يتطلب استمارات لجمع بيانات المهتمين (Lead Gen). التركيز يجب أن يكون على تسهيلات التمويل والأقساط الشهرية لأنها المحفز الأول للشراء.",
                        "en": "Selling cars requires forms to collect data from those interested (Lead Gen). The focus should be on financing facilities and monthly installments because they are the first incentive to purchase."
                    },
                    "تاجير سيارات (يومي أو منتهي بالتمليك)": {
                        "ar": "هنا نستهدف البحث ذو النية العالية. إعلانات جوجل هي الأساس، مع استخدام سناب شات لعروض المواسم والأعياد للمواطنين.",
                        "en": "Here we target high-intent research. Google Ads are the norm, with Snapchat being used for seasonal and holiday offers to citizens."
                    },
                    "مراكز صيانة، تلميع، أو قطع غيار": {
                        "ar": "العروض والباقات (مثل باقة العناية الشاملة) هي ما يجذب العملاء. إبراز جودة العمل قبل وبعد عبر فيديوهات تيك توك يحقق انتشاراً عضوياً كبيراً.",
                        "en": "Offers and packages (such as a comprehensive care package) are what attract customers. Highlighting the quality of work before and after through TikTok videos achieves great organic spread."
                    },
                    "تطبيق لخدمات السيارات (غسيل متنقل، سطحة، الخ)": {
                        "ar": "الاستهداف الجغرافي الدقيق وتسهيل عملية الطلب بنقرتين الما أساس النجاح. إعلانات تحميل التطبيقات هي الأداة الأقوى هنا.",
                        "en": "Precise geographical targeting and facilitating the ordering process with two clicks are the basis for success. App download ads are the most powerful tool here."
                    }
                }
            },
            {
                "id": "q2",
                "label": {
                    "ar": "2. في معارض السيارات (الجديد والمستعمل)، كيف تلتقط العملاء الجاهزين عبر Google Ads؟",
                    "en": "2. At car showrooms (new and used), how do you capture ready customers via Google Ads?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نستخدم حملات البحث لاستهداف أسماء السيارات (مثل كامري 2026)",
                        "en": "We use search campaigns to target car names (eg 2026 Camry)"
                    },
                    {
                        "ar": "نستهدف الكلمات التمويلية (تقسيط سيارات، سيارة بدون دفعة)",
                        "en": "We target financing words (car installments, car without payment)"
                    },
                    {
                        "ar": "لا نستخدم جوجل حالياً في المعرض",
                        "en": "We do not currently use Google in the exhibition"
                    }
                ],
                "insights": {
                    "نستخدم حملات البحث لاستهداف أسماء السيارات (مثل كامري 2026)": {
                        "ar": "جيد، ولكن يجب أن نقوم بتفعيل إضافات ال (Lead Form Extensions) في إعلانات جوجل لاصطياد بيانات المشتري من صفحة البحث مباشرة وبسرعة فائقة.",
                        "en": "Good, but we must activate the Lead Form Extensions in Google Ads to capture buyer data directly from the search page and very quickly."
                    },
                    "نستهدف الكلمات التمويلية (تقسيط سيارات، سيارة بدون دفعة)": {
                        "ar": "أنت تضرب في العصب الحساس! هذه هي الكلمات الأعلى تحويلاً. سأقوم بتوجيه الؤلاء الباحثين لصفحة هبوط تحتوي على (حاسبة تمويل) تفاعلية تضاعف الـ Leads.",
                        "en": "You're hitting a nerve! These are the highest converting words. I will direct searchers to a landing page that contains an interactive (funding calculator) that doubles leads."
                    },
                    "لا نستخدم جوجل حالياً في المعرض": {
                        "ar": "قطاع السيارات مبني بشكل كامل على بحث جوجل! المستهلك يقضي أسابيع في البحث قبل زيارة المعرض. سأقوم بتأمين موقعك في الصفحة الأولى لاقتناصهم.",
                        "en": "The automotive sector is completely built on Google search! The consumer spends weeks researching before visiting a showroom. I will secure your site to the first page to catch them."
                    }
                },
                "condition": (ans) => ans.q1
            },
            {
                "id": "q3",
                "label": {
                    "ar": "3. كيف تتعامل مع تأهيل الـ Leads قبل أن يتصل بهم مندوب مبيعات السيارات؟",
                    "en": "3. How do you deal with qualifying leads before a car sales representative contacts them?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "جميع الـ Leads تذهب للمندوب مباشرة للاتصال",
                        "en": "All leads go directly to the representative for contact"
                    },
                    {
                        "ar": "لدينا أسئلة تصفية قصيرة (الراتب، البنك، الالتزامات)",
                        "en": "We have short filter questions (Salary, Bank, Liabilities)"
                    },
                    {
                        "ar": "نعتمد على زيارة العميل للمعرض حصراً",
                        "en": "We rely exclusively on the customer visiting the showroom"
                    }
                ],
                "insights": {
                    "جميع الـ Leads تذهب للمندوب مباشرة للاتصال": {
                        "ar": "هذا يهدر طاقة المندوبين مع عملاء مرفوضين تمويلياً. سأبني لك Flow أتمتة عبر الواتساب يسأل العميل عن التفاصيل الائتمانية الأساسية قبل تحويله لمندوب.",
                        "en": "This wastes the energy of reps with denied financing clients. I will build you a Flow automation via WhatsApp that asks a customer for basic credit details before transferring them to a representative."
                    },
                    "لدينا أسئلة تصفية قصيرة (الراتب، البنك، الالتزامات)": {
                        "ar": "رائع! لتخفيض التكلفة سأقوم بتدريب الخوارزميات (Offline Conversions) في ميتا وجوجل عل الـ Leads 'المقبولة بنكياً' فقط لجلب المزيد من المشترين الحقيقيين.",
                        "en": "amazing! To reduce the cost, I will train the algorithms (Offline Conversions) in Meta and Google on only 'bank accepted' leads to bring in more real buyers."
                    },
                    "نعتمد على زيارة العميل للمعرض حصراً": {
                        "ar": "الزيارة المباشرة قوية، لكننا سنعززها بحملات (Store Visit / PMax Local) مع تطوير عرض (هدايا تظليل أو عازل) للملتزمين بالحضور.",
                        "en": "The direct visit is strong, but we will enhance it with campaigns (Store Visit / PMax Local) while developing an offer (shade or insulation gifts) for committed attendees."
                    }
                },
                "condition": (ans) => ans.q2
            },
            {
                "id": "q4",
                "label": {
                    "ar": "4. كيف تتعامل مع مبيعات قطع الغيار والإكسسوارات؟",
                    "en": "4. How do you handle sales of spare parts and accessories?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "لدينا متجر إلكتروني مربوط ب Google Shopping",
                        "en": "We have an online store linked to Google Shopping"
                    },
                    {
                        "ar": "نعتمد على الطلبات المباشرة في مراكز الصيانة",
                        "en": "We rely on direct requests at maintenance centers"
                    },
                    {
                        "ar": "القطاع معقد ولم نقم بالبيع الرقمي له بعد",
                        "en": "The sector is complex and we haven't done digital selling for it yet"
                    }
                ],
                "insights": {
                    "لدينا متجر إلكتروني مربوط ب Google Shopping": {
                        "ar": "ممتاز. التحدي هنا هو توافق القطعة عم سيارة العميل (Fitment). سأضع إضافات بحث بداخل الموقع (اختر موديل سيارتك) لتخفيض المرتجعات.",
                        "en": "excellent. The challenge here is the compatibility of the part with the customer's car (Fitment). I will put search plugins inside the site (choose your car model) to reduce returns."
                    },
                    "نعتمد على الطلبات المباشرة في مراكز الصيانة": {
                        "ar": "هذه فرصة لل Upselling. الإعلانات التي تستهدف الباحثين عن قطع محددة (فحمات سيراميك كامري) في جوجل تضمن لك هامش ربح عالي.",
                        "en": "This is an opportunity for Upselling. Ads targeting those searching for specific parts (Camry ceramic brake pads) on Google guarantee you a high profit margin."
                    },
                    "القطاع معقد ولم نقم بالبيع الرقمي له بعد": {
                        "ar": "سأقوم بإعداد Feed Product مخصص ومربوط ب PMax لتصريف المخزون البطيء (Slow-moving inventory) باستهداف ذكي عبر الخليج.",
                        "en": "I will set up a custom Product Feed linked to PMax for slow-moving inventory with intelligent targeting across the Gulf."
                    }
                },
                "condition": (ans) => ans.q3
            },
            {
                "id": "q5",
                "label": {
                    "ar": "5. لخدمات التأجير أو الصيانة السريعة، هل تعتمد على الاستهداف اللحظي للباحثين عن الخدمة؟",
                    "en": "5. For quick rental or maintenance services, do you rely on real-time targeting of service seekers?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعم، نستخدم Call Campaigns في جوجل لسرعة الاتصال",
                        "en": "Yes, we use Call Campaigns at Google for faster communication"
                    },
                    {
                        "ar": "نستهدف بكلمات (في موقعي، قريب مني)",
                        "en": "We target with the words (in my location, near me)"
                    },
                    {
                        "ar": "نعتمد فقط على السوشيال ميديا وعروض الانستجرام",
                        "en": "We rely only on social media and Instagram offers"
                    }
                ],
                "insights": {
                    "نعم، نستخدم Call Campaigns في جوجل لسرعة الاتصال": {
                        "ar": "تكتيك مدهيم للطوارئ (سطحة، بنشر متنقل). سأقوم بتحسين ال Ad Copy لتحتوي على 'نصلك خلال 15 دقيقة' مع تتبع دقيق للمكالمات (Call Tracking).",
                        "en": "Advanced emergency tactic (surface, mobile deployment). I will improve the Ad Copy to include 'We will reach you within 15 minutes' with accurate call tracking."
                    },
                    "نستهدف بكلمات (في موقعي، قريب مني)": {
                        "ar": "ممتاز. سأقوم بإدارة حملات PMax Store Goals للسيطرة عل خريطة جوجل محلياً أمام منافسيك.",
                        "en": "excellent. I will manage PMax Store Goals campaigns to dominate the Google map locally in front of your competitors."
                    },
                    "نعتمد فقط على السوشيال ميديا وعروض الانستجرام": {
                        "ar": "خدمات السيارات (الطوارئ والصيانة) لا تُباع بالسوشيال ميديا لأنها مبنية على الاحتياج اللحظي. يجب نقل 80% من الالميزانية لجوجل الـ Search والخرائط.",
                        "en": "Car services (emergency and maintenance) are not sold on social media because they are based on momentary needs. 80% of the budget must be transferred to Google Search and Maps."
                    }
                },
                "condition": (ans) => ans.q4
            },
            {
                "id": "q6",
                "label": {
                    "ar": "6. هل تقوم باستخدام حملات الولاء والاحتفاظ للعملاء (Customer Retention)؟",
                    "en": "6. Do you use customer retention campaigns?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نرسل رسائل تذكير بموعد تغيير الزيت أو الصيانة الدورية",
                        "en": "We send reminders when it's time for an oil change or regular maintenance"
                    },
                    {
                        "ar": "نرسل عروضاً في المناسبات فقط",
                        "en": "We only send offers on special occasions"
                    },
                    {
                        "ar": "لا نتابع العميل بعد إتمام الخدمة",
                        "en": "We do not follow up with the customer after the service is completed"
                    }
                ],
                "insights": {
                    "نرسل رسائل تذكير بموعد تغيير الزيت أو الصيانة الدورية": {
                        "ar": "أفضل استراتيجية لمراكز الصيانة. سأقوم بربط الـ CRM ليعمل تلقائياً (Automated SMS) بناءً على قراءة العداد السابقة للعميل.",
                        "en": "The best strategy for maintenance centers. I will connect the CRM to operate automatically (Automated SMS) based on the customer’s previous meter reading."
                    },
                    "نرسل عروضاً في المناسبات فقط": {
                        "ar": "العروض ممتازة لكن التذكير المبني على 'الاحتياج' هو ما يحول العميل لزبون دائم. سنستخدم ال Data الخاصة بك لإنشاء Customer Match في جوجل لاستهدافهم.",
                        "en": "The offers are excellent, but the 'need' based reminder is what turns a customer into a permanent customer. We will use your data to create a Customer Match in Google to target them."
                    },
                    "لا نتابع العميل بعد إتمام الخدمة": {
                        "ar": "أنت تخسر أرباحاً هائلة. تكلفة إعادة العميل لتغيير الزيت تكاد تكون صفراً مقارنة باصطياد عميل جديد. سنعالج هذا بتفعيل قمع إعادة الاستهداف.",
                        "en": "You are losing huge profits. The cost of bringing a customer back for an oil change is almost zero compared to catching a new customer. We will address this by enabling retargeting suppression."
                    }
                },
                "condition": (ans) => ans.q5
            },
            {
                "id": "q7",
                "label": {
                    "ar": "7. ما هو أسلوب المحتوى الذي يحقق لك أعلى التفاعلات في منصات السوشيال ميديا؟",
                    "en": "7. What content style gets you the highest interactions on social media platforms?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "فيديوهات 'قبل وبعد' أو عمليات غسيل وتلميع السيارات (ASMR)",
                        "en": "'Before and after' videos or car wash and polishing processes (ASMR)"
                    },
                    {
                        "ar": "فيديوهات شرح مميزات السيارات الجديدة من قبل المندوب",
                        "en": "Videos explaining the features of new cars by the representative"
                    },
                    {
                        "ar": "صور ثابتة لعروض التمويل",
                        "en": "Still images of financing offers"
                    }
                ],
                "insights": {
                    "فيديوهات 'قبل وبعد' أو عمليات غسيل وتلميع السيارات (ASMR)": {
                        "ar": "محتوى ال ASMR للسيارات يمتلك معدلات مشاهدة کاملة (Retention) مخيفة على تيك توك. سنحوله لإعلانات Spark Ads للسيطرة على الوعي الجماهيري.",
                        "en": "ASMR car content has alarming retention rates on TikTok. We will turn it into Spark Ads to control public awareness."
                    },
                    "فيديوهات شرح مميزات السيارات الجديدة من قبل المندوب": {
                        "ar": "ممتاز لبناء الثقة. سنركز على الشرح العفوي بدون تكلف (UGC-Style) لضمان عدم تخطي المشاهدين للإعلان.",
                        "en": "Excellent for building trust. We'll focus on UGC-style to ensure viewers don't skip the ad."
                    },
                    "صور ثابتة لعروض التمويل": {
                        "ar": "الصور الثابتة جيدة ل Google Display أو ال DPA، ولكن الفيديو حركي وأقوى بجلب الـ Leads.",
                        "en": "Still images are good for Google Display or DPA, but video is dynamic and stronger by bringing leads."
                    }
                },
                "condition": (ans) => ans.q6
            },
            {
                "id": "q8",
                "label": {
                    "ar": "8. في بيع السيارات، كيف تدير مسألة ال Inventory الشحيح أو نفاذ المخزون للسيارات المطلوبة؟",
                    "en": "8. In car sales, how do you manage the issue of scarce inventory or out of stock for requested cars?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نوقف الحملات فوراً",
                        "en": "We stop the campaigns immediately"
                    },
                    {
                        "ar": "نستخدم الـ Leads كطابور انتظار (Waiting List)",
                        "en": "We use leads as a waiting list."
                    },
                    {
                        "ar": "نوجه العميل لموديلات بديلة (Cross-selling)",
                        "en": "We direct the customer to alternative models (Cross-selling)"
                    }
                ],
                "insights": {
                    "نوقف الحملات فوراً": {
                        "ar": "إيقاف ال Campaign يضر ب ال Pixel. سنستخدم الخيارين الآخرين لاستمرار زخم الحملة واستغلال الـ Traffic.",
                        "en": "Stopping the Campaign harms the Pixel. We will use the other two options to continue the campaign momentum and exploit traffic."
                    },
                    "نستخدم الـ Leads كطابور انتظار (Waiting List)": {
                        "ar": "رائع، هذا يخلق ندرة (Scarcity) ويجعل العميل يتمسك بالسيارة أكثر عند توفرها. سنخصص حملة Lead Gen بعنوان 'سجل لتحصل عليها أولاً'.",
                        "en": "Great, this creates scarcity and makes the customer hold on to the car more when it becomes available. We will have a Lead Gen campaign called 'Sign up to get it first'."
                    },
                    "نوجه العميل لموديلات بديلة (Cross-selling)": {
                        "ar": "تفكير بيعي احترافي. سنجعل فريق المبيعات يعرض سيارات ببدائل قريبة جداً في المواصفات وهسعر من خلال التواصل المباشر.",
                        "en": "Professional sales thinking. We will have the sales team offer cars with alternatives that are very close in specifications and price through direct communication."
                    }
                },
                "condition": (ans) => ans.q7
            },
            {
                "id": "q9",
                "label": {
                    "ar": "9. كيف تضمن جودة صفحة الهبوط الخاصة بعروض السيارات؟",
                    "en": "9. How do you ensure the quality of your car offers landing page?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "تصميم بسيط يحتوي صورة السيارة واستمارة الطلب فقط",
                        "en": "A simple design that contains only a photo of the car and the application form"
                    },
                    {
                        "ar": "صفحة معقدة تحتوي تفاصيل الماكينة وهمواصفات بالكامل",
                        "en": "A complex page containing the machine's details and full specifications"
                    },
                    {
                        "ar": "صفحة تركز 100% على ال 'عرض التمويلي' والأقساط",
                        "en": "A page that focuses 100% on the 'financing offer' and installments"
                    }
                ],
                "insights": {
                    "تصميم بسيط يحتوي صورة السيارة واستمارة الطلب فقط": {
                        "ar": "بسيط جداً لا يكفي. يجب أن نضيف Social Proof أو شهادات عملاء استلموا سياراتهم لبناء الثقة.",
                        "en": "Too simple is not enough. We should add Social Proof or testimonials from customers who have received their cars to build trust."
                    },
                    "صفحة معقدة تحتوي تفاصيل الماكينة وهمواصفات بالكامل": {
                        "ar": "العميل اليوم يشتري ه'قسط' وليس 'الماكينة'. التفاصيل التقنية الزائدة تشتت الانتباه عن ال Call To Action. سنقوم بتبسيطها.",
                        "en": "Today's customer buys a 'premium' and not a 'machine'. Excessive technical details distract from Call To Action. We'll simplify it."
                    },
                    "صفحة تركز 100% على ال 'عرض التمويلي' والأقساط": {
                        "ar": "هذه هي الصفحة ال 'Hero' للسيارات. سنبرز شعارات البنوك وهأقساط بخط عريض مع استمارة سريعة لضمان تحويل يصل ل 15%.",
                        "en": "This is the 'Hero' car page. We will highlight the banks' logos and installments in bold font, along with a quick form to guarantee a transfer of up to 15%."
                    }
                },
                "condition": (ans) => ans.q8
            },
            {
                "id": "q10",
                "label": {
                    "ar": "10. ما هي มيزانيتك الاعلانية الشهرية المتوقعة لاقتناص الباحثين عن سيارات وخدماتها؟",
                    "en": "10. What is your expected monthly advertising budget to attract those searching for cars and their services?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "أقل من 3,000$ (لمركز صيانة أو غسيل)",
                        "en": "Less than $3,000 (for a maintenance or laundry center)"
                    },
                    {
                        "ar": "3,000$ إلى 10,000$ (معرض أو تاجير متوسط)",
                        "en": "$3,000 to $10,000 (exhibition or medium rental)"
                    },
                    {
                        "ar": "أكثر من 10,000$ (سلسلة معارض أو وكالة)",
                        "en": "More than $10,000 (exhibition chain or agency)"
                    }
                ],
                "insights": {
                    "أقل من 3,000$ (لمركز صيانة أو غسيل)": {
                        "ar": "سنركز بشكل كامل على Google Local Campaigns لاحتكار الباحثين في النطاق الجغرافي القريب فقط.",
                        "en": "We will focus entirely on Google Local Campaigns to monopolize searchers in close proximity only."
                    },
                    "3,000$ إلى 10,000$ (معرض أو تاجير متوسط)": {
                        "ar": "ميزانية مخصصة لأصطياد الـ Leads. سنطلق حملات Google Search للنيات المباشرة + حملات Meta للوعي بالعروض التمويلية.",
                        "en": "A budget allocated to catching leads. We will launch Google Search campaigns for direct intent + Meta campaigns for financing offer awareness."
                    },
                    "أكثر من 10,000$ (سلسلة معارض أو وكالة)": {
                        "ar": "مرحلة الاستحواذ الکامل. سنقوم ببناء Architecture إعلاني يغطي كل سيارة بكلماتها الدلالية الخاصة مع PMax للكتالوج و Offline Tracking دقيق لجميع الفروع.",
                        "en": "Complete acquisition stage. We will build an Advertising Architecture covering each car with its own keywords with PMax for the catalog and accurate Offline Tracking for all branches."
                    }
                },
                "condition": (ans) => ans.q9
            }
        ]
    },
    "furniture": {
        "title": {
            "ar": "Furniture (الأثاث والديكور)",
            "en": "Furniture (furniture and decoration)"
        },
        "questions": [
            {
                "id": "q1",
                "label": {
                    "ar": "1. هل يملك معرضك/متجرك منتجات جاهزة للتسليم أم تفصيل حسب الطلب؟",
                    "en": "1. Does your showroom/store have ready-to-deliver or custom-made products?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "أثاث جاهز للتسليم والتركيب الفوري",
                        "en": "Furniture ready for immediate delivery and installation"
                    },
                    {
                        "ar": "تفصيل وتصميم مخصص حسب طلب العميل",
                        "en": "Customized detailing and design according to client's request"
                    },
                    {
                        "ar": "نقدم كلا الخدمتين معاً",
                        "en": "We offer both services together"
                    }
                ],
                "insights": {
                    "أثاث جاهز للتسليم والتركيب الفوري": {
                        "ar": "العميل في الخليج يبحث عن السرعة والجودة. الإعلانات يجب أن تبرز 'جاهزية التوصيل والتركيب المجاني' مع عرض الأثاث في مساحات حقيقية.",
                        "en": "The customer in the Gulf is looking for speed and quality. Ads should highlight 'free delivery and assembly' with furniture displayed in real spaces."
                    },
                    "تفصيل وتصميم مخصص حسب طلب العميل": {
                        "ar": "هنا نبيع 'الرفاهية والتفرد'. التسويق يعتمد على استعراض جودة الخشب والتشطيبات وطلب زيارة ميدانية لرفع المقاسات كخطوة أولى.",
                        "en": "Here we sell 'luxury and exclusivity'. Marketing depends on reviewing the quality of the wood and finishes and requesting a field visit to raise the measurements as a first step."
                    },
                    "نقدم كلا الخدمتين معاً": {
                        "ar": "يجب تقسيم الحملات: حملات مبيعات مباشرة للأثاث الجاهز (Conversions)، وحملات جمع بيانات (Lead Gen) لمشاريع التفصيل والتأثيث الشامل.",
                        "en": "Campaigns should be divided: direct sales campaigns for ready-made furniture (Conversions), and data collection campaigns (Lead Gen) for comprehensive detailing and furnishing projects."
                    }
                }
            },
            {
                "id": "q2",
                "label": {
                    "ar": "2. كيف تعتمد على إعلانات جوجل لقطاع الأثاث (Google Shopping / PMax)؟",
                    "en": "2. How do you rely on Google Ads for the furniture sector (Google Shopping / PMax)?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نستخدم Shopping لإظهار صور الأثاث في نتائج البحث",
                        "en": "We use Shopping to show images of furniture in search results"
                    },
                    {
                        "ar": "لا نستخدم جوجل حالياً، نعتمد على انستجرام فقط",
                        "en": "We do not currently use Google, we rely on Instagram only"
                    },
                    {
                        "ar": "نستخدم PMax، لكننا نواجه صعوبة مع المنتجات كبيرة الحجم وتكاليف الشحن",
                        "en": "We use PMax, but have difficulty with large items and shipping costs"
                    }
                ],
                "insights": {
                    "نستخدم Shopping لإظهار صور الأثاث في نتائج البحث": {
                        "ar": "ممتاز. سأعمل على تحسين عناوين ال Feed (مثل إضافة الأبعاد واللون) لتقليل النقرات الخاطئة ورفع دقة البحث المباشر.",
                        "en": "excellent. I will work on improving the feed titles (such as adding dimensions and color) to reduce false clicks and increase the accuracy of direct search."
                    },
                    "لا نستخدم جوجل حالياً، نعتمد على انستجرام فقط": {
                        "ar": "الأثاث منتج يحتاج ل 'نية شراء' مسبقة. من يبحث عن 'كنبة زاوية رمادي' في جوجل يمتلك نية حقيقية! سأبني لك حملة لاقتناصهم فوراً.",
                        "en": "Furniture is a product that requires a prior 'purchase intention'. Whoever searches for 'gray corner sofa' on Google has a real intention! I will build a campaign for you to grab them immediately."
                    },
                    "نستخدم PMax، لكننا نواجه صعوبة مع المنتجات كبيرة الحجم وتكاليف الشحن": {
                        "ar": "الشحن للأثاث يكسر الـ ROAS. سأقوم بإعداد استراتيجية (Target ROAS) منفصلة للمنتجات الثقيلة، ودمج تكلفة الشحن ضمن التسعيرة الأصلية.",
                        "en": "Shipping furniture breaks the ROAS. I will set up a separate Target ROAS strategy for heavy items, and combine the shipping cost into the original quote."
                    }
                },
                "condition": (ans) => ans.q1
            },
            {
                "id": "q3",
                "label": {
                    "ar": "3. كيف توفر ال Social Proof لمنتجات الأثاث المكلفة؟",
                    "en": "3. How do you provide Social Proof for expensive furniture products?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نستخدم صور عملاء حقيقية من منازلهم بعد التركيب",
                        "en": "We use real customer photos of their homes after installation"
                    },
                    {
                        "ar": "نعتمد على صور الاستديو و ال 3D Renders",
                        "en": "We rely on studio images and 3D Renders"
                    },
                    {
                        "ar": "نستخدم مؤثرين لعرض القطع في بيوتهم",
                        "en": "We use influencers to showcase the pieces in their homes"
                    }
                ],
                "insights": {
                    "نستخدم صور عملاء حقيقية من منازلهم بعد التركيب": {
                        "ar": "أقوى نوع محتوى على الإطلاق في الأثاث! سنقوم ببناء حملات إعادة استهداف (Retargeting) مخصصة فقط لعرض صور غرف العملاء السعداء لكسر حاجز الثقة.",
                        "en": "The most powerful content type ever in furniture! We will build custom retargeting campaigns only to show photos of happy customers' rooms to break the trust barrier."
                    },
                    "نعتمد على صور الاستديو و ال 3D Renders": {
                        "ar": "ال 3D جميل، لكنه لا ينقل ال (Texture) والجودة الحقيقية. سننتقل لاستخدام فيديوهات حية تركز على قوام القماش وجودة الخشب.",
                        "en": "The 3D is beautiful, but it does not convey the true texture and quality. We will move to using live videos that focus on the texture of the fabric and the quality of the wood."
                    },
                    "نستخدم مؤثرين لعرض القطع في بيوتهم": {
                        "ar": "استراتيجية رائعة وتخلق Hype عالي. سنعززها باستخدام إعلانات Spark Ads للترويج لمنشور المؤثر لاستهداف العرائس وهباحثين عن التجديد.",
                        "en": "Great strategy and creates high hype. We'll enhance it with Spark Ads to promote the influencer's post to target brides and groomsmen."
                    }
                },
                "condition": (ans) => ans.q2
            },
            {
                "id": "q4",
                "label": {
                    "ar": "4. ما هو العائق النفسي الأكبر لعملائك قبل الشراء؟",
                    "en": "4. What is the biggest psychological barrier for your customers before purchasing?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "الخوف من جودة القماش والتشطيبات",
                        "en": "Fear of the quality of fabric and finishes"
                    },
                    {
                        "ar": "التخوف من عدم ملائمة المقاسات لمساحاتهم",
                        "en": "Fear that the sizes do not fit their spaces"
                    },
                    {
                        "ar": "ارتفاع السعر وعدم وجود خيارات تمويلية",
                        "en": "High price and lack of financing options"
                    }
                ],
                "insights": {
                    "الخوف من جودة القماش والتشطيبات": {
                        "ar": "سأضيف لمسات في ال Copywriting تضمن (ضمان 5 سنوات على الإسفنج والخشب) كجزء رئيسي في التصميم لرفع الثقة الفورية.",
                        "en": "I will add touches in the copywriting that include (5-year warranty on sponge and wood) as a major part of the design to raise immediate confidence."
                    },
                    "التخوف من عدم ملائمة المقاسات لمساحاتهم": {
                        "ar": "سأصمم ال Landing Page لتشمل صوراً تفصيلية بالأبعاد (Dimensions) وميزة AR (الواقع المعزز) إن أمكن لإلغاء أي شكوق حول المقاس.",
                        "en": "I will design the landing page to include detailed images with dimensions and an AR feature if possible to eliminate any doubts about the size."
                    },
                    "ارتفاع السعر وعدم وجود خيارات تمويلية": {
                        "ar": "الأثاث يتطلب حلول تابي/تمارا أو تقسيط بنكي. سنبرز عبارة 'جدد صالتك ب 300 ريال شهرياً' لجعل القرار المالي سهلاً جداً.",
                        "en": "Furniture requires Tabby/Tamara solutions or bank installments. We will highlight the phrase 'Renew your lounge for 300 riyals per month' to make the financial decision very easy."
                    }
                },
                "condition": (ans) => ans.q3
            },
            {
                "id": "q5",
                "label": {
                    "ar": "5. هل تبيع عبر المعرض (Offline) أم كلياً عبر الموقع (Online)؟",
                    "en": "5. Do you sell through the showroom (offline) or entirely through the website (online)?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "متجر أونلاين بالكامل (E-commerce)",
                        "en": "Completely online store (E-commerce)"
                    },
                    {
                        "ar": "البيع يتم 90% بالمعرض، الموقع لل Showcase فقط",
                        "en": "90% of the sale is at the showroom, the website is for Showcase only"
                    },
                    {
                        "ar": "متجر إلكتروني متكامل + معارض (Omnichannel)",
                        "en": "Integrated online store + showrooms (Omnichannel)"
                    }
                ],
                "insights": {
                    "متجر أونلاين بالكامل (E-commerce)": {
                        "ar": "هنا ال CRO الوأ الملك. يجب توفير إرجاع مجاني أو خدمة توصيل مع خيار (الدفع والرفض عند الباب) لطمأنة العميل الخليجي.",
                        "en": "Here the CRO is the king. A free return or delivery service must be provided with the option of (payment and rejection at the door) to reassure the Gulf customer."
                    },
                    "البيع يتم 90% بالمعرض، الموقع لل Showcase فقط": {
                        "ar": "سأقوم بهندسة حملات Local Campaigns في جوجل لجر العملاء من المحيط الجغرافي للمعرض + Lead Forms لهرشمه لحجز موعد الاستشارة.",
                        "en": "I will engineer Local Campaigns in Google to attract customers from the geographical area of ​​​​the exhibition + Lead Forms for Hirshamah to book a consultation appointment."
                    },
                    "متجر إلكتروني متكامل + معارض (Omnichannel)": {
                        "ar": "سأقوم بتفعيل ال Store Visits Tracking في جوجل، لقياس مسفر الزوار الفعليين للمعرض من الحملات الرقمية لضمان دقة الـ ROAS الكلي.",
                        "en": "I will activate Store Visits Tracking in Google, to measure the travel of actual visitors to the exhibition from digital campaigns to ensure the accuracy of the overall ROAS."
                    }
                },
                "condition": (ans) => ans.q4
            },
            {
                "id": "q6",
                "label": {
                    "ar": "6. كيف تدير حملات ال Cross-selling بعد بيع القطع الكبيرة (مثل السرير)؟",
                    "en": "6. How do you run cross-selling campaigns after selling large items (such as a bed)?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نستخدم إعلانات DPA لاقتراح الكمدينات أو المراتب",
                        "en": "We use DPA ads to suggest pillows or mattresses"
                    },
                    {
                        "ar": "نرسل إيميلات تسويقية بعد الشراء",
                        "en": "We send marketing emails after purchase"
                    },
                    {
                        "ar": "لا نفعل ذلك، العميل يشتري ما يحتاجه ويغادر",
                        "en": "We don't do that, the customer buys what he needs and leaves"
                    }
                ],
                "insights": {
                    "نستخدم إعلانات DPA لاقتراح الكمدينات أو المراتب": {
                        "ar": "تكتيك متقدم جداً لرفع الـ LTV. سنعدل ال Feed لربط القطع المكملة وإظهارها في إعلانات السناب شات وجوجل بخصم خاص لمشترين.",
                        "en": "A very advanced tactic to raise LTV. We will modify the Feed to link complementary pieces and show them in Snapchat and Google ads with a special discount for buyers."
                    },
                    "نرسل إيميلات تسويقية بعد الشراء": {
                        "ar": "جيد، لكن ال Email فتحه ضعيف بالخليج. سأقوم بتطوير نظام Automated WhatsApp لاقتراح قطع الديكور وهسجاد المناسبة للكنبة المباعة.",
                        "en": "Good, but email opening is weak in the Gulf. I will develop an Automated WhatsApp system to suggest suitable decor pieces and rugs for the sold sofa."
                    },
                    "لا نفعل ذلك، العميل يشتري ما يحتاجه ويغادر": {
                        "ar": "أنت تترك ملايين الريالات على الطاولة. العميل الذي اشترى طاولة طعام هو بحاجة حتمية لكراسي أو إضاءة. سنبني Funnel تلقائي لاصطياده.",
                        "en": "You are leaving millions of riyals on the table. The customer who bought a dining table inevitably needs chairs or lighting. We will build an automatic Funnel to catch it."
                    }
                },
                "condition": (ans) => ans.q5
            },
            {
                "id": "q7",
                "label": {
                    "ar": "7. في قطاع التأثيث المكتبي أو الـ B2B، كيف تستهدف الشركات؟",
                    "en": "7. In the office furnishing or B2B sector, how do you target companies?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "إعلانات لينكد إن (LinkedIn Ads) لمدراء المشتريات",
                        "en": "LinkedIn Ads for purchasing managers"
                    },
                    {
                        "ar": "نعتمد على Google Search بكلمات (تأثيث مكاتب)",
                        "en": "We rely on Google Search with the words (office furnishing)"
                    },
                    {
                        "ar": "نحن قطاع B2C فقط ولا نستهدف 기업ات",
                        "en": "We are a B2C sector only and do not target 기업s"
                    }
                ],
                "insights": {
                    "إعلانات لينكد إن (LinkedIn Ads) لمدراء المشتريات": {
                        "ar": "LinkedIn متميز لصيد 기업ات العقود الضخمة. سنركز المحتوى على (تحسين بيئة العمل لزيادة الإنتاجية) وليس فقط السعر.",
                        "en": "LinkedIn is great for hunting for huge contracts. We will focus the content on (improving the work environment to increase productivity) and not just price."
                    },
                    "نعتمد على Google Search بكلمات (تأثيث مكاتب)": {
                        "ar": "الـ Search هو الأقوى ل B2B بالأثاث. سنقوم ببناء Landing Page قوية توضح خبرتكم في تنفيذ المشاريع الضخمة ومدة التسليم السريعة.",
                        "en": "Search is the most powerful for B2B furniture. We will build a powerful Landing Page that demonstrates your experience in implementing large projects and quick delivery times."
                    },
                    "نحن قطاع B2C فقط ولا نستهدف 기업ات": {
                        "ar": "التركيز على المستهلك يتطلب التجديد المستمر في الموديلات (Seasonal Drops) لضمان تكرار الشراء. سنستثمر في إعلانات Pinterest و Instagram Visuals.",
                        "en": "Focusing on the consumer requires continuous renewal of models (Seasonal Drops) to ensure repeat purchases. We will invest in Pinterest Ads and Instagram Visuals."
                    }
                },
                "condition": (ans) => ans.q6
            },
            {
                "id": "q8",
                "label": {
                    "ar": "8. ما هي نسبة السلات المتروكة (Abandoned Carts) في موقعك؟",
                    "en": "8. What is the percentage of abandoned carts on your site?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "مرتفعة جداً (فوق 70%) بسبب تكلفة الشحن",
                        "en": "Very high (above 70%) due to shipping cost"
                    },
                    {
                        "ar": "متوسطة، ونستعيد حلقاً منها",
                        "en": "Medium, and we recover a ring from it"
                    },
                    {
                        "ar": "لا نتتبع النسبة بدقة",
                        "en": "We do not track the ratio precisely"
                    }
                ],
                "insights": {
                    "مرتفعة جداً (فوق 70%) بسبب تكلفة الشحن": {
                        "ar": "الشحن المفاجئ يقتل المبيعة! سنقوم بتضمين الشحن بسعر المنتج ووضع (شحن مجاني) بخط عريض في الإعلان لهجبرت نسبة ال Add to cart.",
                        "en": "Surprise shipping kills sales! We will include shipping in the price of the product and put (Free Shipping) in bold in the ad to determine the Add to cart percentage."
                    },
                    "متوسطة، ونستعيد حلقاً منها": {
                        "ar": "سنقوم بتطوير نظام Retargeting شرس ب Google Display و Meta يلاحق العميل بخصم متدرج لضمان الإغلاق خلال 7 أيام.",
                        "en": "We will develop an aggressive retargeting system with Google Display and Meta that pursues the customer with a tiered discount to ensure a close within 7 days."
                    },
                    "لا نتتبع النسبة بدقة": {
                        "ar": "عدم التتبع يعني عدم العلاج. سأقوم بتركيب أدوات Heatmaps لتحديد أين يتوقف العميل بالضبط بصفحة ال Checkout.",
                        "en": "No tracking means no treatment. I will install Heatmaps tools to determine exactly where a customer stops on the Checkout page."
                    }
                },
                "condition": (ans) => ans.q7
            },
            {
                "id": "q9",
                "label": {
                    "ar": "9. في التخفيضات (White Friday)، كيف تدير حملات الأثاث؟",
                    "en": "9. During sales (White Friday), how do you manage furniture campaigns?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "خصومات حقيقية وهاستعداد بمخزون ضخم",
                        "en": "Real discounts and huge stock"
                    },
                    {
                        "ar": "تخفيضات وهمية أو بسيطة لمجاراة السوق",
                        "en": "Fake or simple discounts to keep up with the market"
                    },
                    {
                        "ar": "لا ندخل العروض لمحافظة على هوية البراند",
                        "en": "We do not include offers to maintain the identity of the brand"
                    }
                ],
                "insights": {
                    "خصومات حقيقية وهاستعداد بمخزون ضخم": {
                        "ar": "في موسم ال Q4 الأثاث يضرب أرقاماً فلكية. سنبني حملات Teaser قبل الموسم ب 3 أسابيع لجمع (Leads) وإرسال العروض لهم قبل الزحام.",
                        "en": "In the Q4 season, furniture hits astronomical numbers. We will build Teaser campaigns 3 weeks before the season to collect Leads and send them offers before the rush."
                    },
                    "تخفيضات وهمية أو بسيطة لمجاراة السوق": {
                        "ar": "العميل الخليجي ذكي. العرض الوهمي يضر بسمعة المعرض. سنعتمد استراتيجية (Bundling) الهدايا بدلاً من التخفيض المباشر لحماية الأرباح.",
                        "en": "The Gulf customer is smart. A fake show harms the reputation of the show. We will adopt a gift bundling strategy instead of a direct reduction to protect profits."
                    },
                    "لا ندخل العروض لمحافظة على هوية البراند": {
                        "ar": "للبراندات الراقية (Luxury)، العروض المباشرة تضرها. سنستخدم حصرية المبيعات (Private Sale) للعملاء ال VIP فقط لتعزيز الولاء.",
                        "en": "For luxury brands, direct offers hurt them. We will use Private Sale for VIP customers only to enhance loyalty."
                    }
                },
                "condition": (ans) => ans.q8
            },
            {
                "id": "q10",
                "label": {
                    "ar": "10. ما هي الميزانية الشهرية المتاحة لتسويق الأثاث المستدام؟",
                    "en": "10. What is the monthly budget available for marketing sustainable furniture?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "أقل من 5,000$ (لمعرض جديد أو منتجات محددة)",
                        "en": "Less than $5,000 (for a new gallery or specific products)"
                    },
                    {
                        "ar": "5,000$ إلى 20,000$ (نمو قوي وتغطية المملكة/الإمارات)",
                        "en": "$5,000 to $20,000 (strong growth and coverage of the Kingdom/UAE)"
                    },
                    {
                        "ar": "أكثر من 20,000$ (هيمنة شاملة وإدارة Omni-channel)",
                        "en": "$20,000+ (Comprehensive Dominance and Omni-channel Management)"
                    }
                ],
                "insights": {
                    "أقل من 5,000$ (لمعرض جديد أو منتجات محددة)": {
                        "ar": "سنركز 100% عل Google Search (النيات الشرائية) و Google Shopping لأقتناص المبيعات السريعة لتمويل خطة النمو.",
                        "en": "We will focus 100% on Google Search (purchasing intent) and Google Shopping to capture flash sales to fund our growth plan."
                    },
                    "5,000$ إلى 20,000$ (نمو قوي وتغطية المملكة/الإمارات)": {
                        "ar": "مرحلة متقدمة! سندمج PMax مع إعلانات Video Campaigns بيوتيوب وتيك توك لخلق رغبة (Demand Generation) وتلبيتها ب Search.",
                        "en": "Advanced stage! We will combine PMax with Video Campaigns, YouTube and TikTok ads to create Demand Generation and satisfy it with Search."
                    },
                    "أكثر من 20,000$ (هيمنة شاملة وإدارة Omni-channel)": {
                        "ar": "سأبني معركت تسويقية آلية تتضمن Offline Tracking للمعارض، و Server-side للموقع، وبناء قمع مبيعات High-ticket لا مثيل له.",
                        "en": "I will build an automated marketing campaign that includes Offline Tracking of Exhibitions, Server-Side of the Website, and Building an Unparalleled High-ticket Sales Funnel."
                    }
                },
                "condition": (ans) => ans.q9
            }
        ]
    },
    "law-firms": {
        "title": {
            "ar": "Law Firms (شركات المحاماة والاستشارات القانونية)",
            "en": "Law Firms (law firms and legal consultations)"
        },
        "questions": [
            {
                "id": "q1",
                "label": {
                    "ar": "1. ما هو التخصص القانوني الرئيسي الذي ترغب في جلب عملاء (موكلين) له؟",
                    "en": "1. What is the main legal specialty that you would like to bring clients to?"
                },
                "type": "select",
                "options": [
                    {
                        "ar": "القضايا التجارية وتأسيس الشركات (B2B)",
                        "en": "Business issues and company formation (B2B)"
                    },
                    {
                        "ar": "الأحوال الشخصية والتركات (B2C)",
                        "en": "Personal Status and Estates (B2C)"
                    },
                    {
                        "ar": "القضايا العمالية والنزاعات",
                        "en": "Labor issues and disputes"
                    },
                    {
                        "ar": "التحكيم التجاري والعقود الدولية",
                        "en": "Commercial arbitration and international contracts"
                    }
                ],
                "insights": {
                    "القضايا التجارية وتأسيس الشركات (B2B)": {
                        "ar": "في القضايا التجارية، صانع القرار هو مدير الشركة. منصة LinkedIn وحملات Google Search بكلمات مثل 'محامي تأسيس شركات' هي الأقوى، حيث تبني السلطة المعرفية (Authority).",
                        "en": "In business cases, the decision maker is the company director. LinkedIn and Google Search campaigns with words like 'incorporation attorney' are the most powerful, as they build authority."
                    },
                    "الأحوال الشخصية والتركات (B2C)": {
                        "ar": "هذا التخصص يعتمد على الحساسية والسرية. الكلمات الدلالية طويلة الذيل (Long-tail) في جوجل مثل 'محامي تركات في الرياض ممتاز' تجلب عملاء ذوي نية جاهزة للتوكيل.",
                        "en": "This specialty depends on sensitivity and confidentiality. Long-tail keywords on Google such as 'excellent estate lawyer in Riyadh' bring in clients with a ready intent to hire."
                    },
                    "القضايا العمالية والنزاعات": {
                        "ar": "شريحة واسعة جداً وتكلفة النقرة فيها معقولة. سنستهدف كلمات البحث المتعلقة ب 'مكافأة نهاية الخدمة' أو 'فصل تعسفي' لاقتناص الموكلين في لحظة الأزمة.",
                        "en": "A very wide segment and the cost per click is reasonable. We will target search terms related to 'end of service bonus' or 'unfair dismissal' to seize clients in a moment of crisis."
                    },
                    "التحكيم التجاري والعقود الدولية": {
                        "ar": "التخصص الأعلى قيمة (High-ticket). سنبتعد عن التسويق المباشر ونتجه لإنشاء (Whitepapers) 법ية ونشرها لاصطياد الشركات الكبرى عبر قمع تسويقي طويل الأمد.",
                        "en": "High-ticket specialty. We will move away from direct marketing and move toward creating and publishing “Whitepapers” to catch big companies through a long-term marketing funnel."
                    }
                }
            },
            {
                "id": "q2",
                "label": {
                    "ar": "2. كيف تستخدم Google Ads لاصطياد الموكلين في لحظة الاحتياج (Moment of Truth)؟",
                    "en": "2. How do you use Google Ads to catch clients in their moment of need (Moment of Truth)?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نستهدف كلمات عامة مثل (محامي، مكتب محاماة)",
                        "en": "We target general words such as (lawyer, law firm)"
                    },
                    {
                        "ar": "نستهدف نيات دقيقة جداً (محامي قضايا تجارية الرياض)",
                        "en": "We target very precise intentions (commercial cases lawyer, Riyadh)"
                    },
                    {
                        "ar": "نعتمد على منصات التواصل الاجتماعي فقط ونبتعد عن جوجل",
                        "en": "We rely on social media platforms only and stay away from Google"
                    }
                ],
                "insights": {
                    "نستهدف كلمات عامة مثل (محامي، مكتب محاماة)": {
                        "ar": "الكلمات العامة تستنزف الميزانية عم طلاب 법 أو باحثين عن استشارات مجانية. سأقوم بتركيب فلاتر (Negative Keywords) لحماية ميزانيتك.",
                        "en": "General words drain the budget of 법 students or those looking for free consultations. I will install Negative Keywords filters to protect your budget."
                    },
                    "نستهدف نيات دقيقة جداً (محامي قضايا تجارية الرياض)": {
                        "ar": "هذه هي الاحترافية! سأقوم بدمج حملات الـ Search مع (Call Extensions) لتسهيل اتصال الموكل بالمكتب بنقرة واحدة من صفحة البحث.",
                        "en": "This is professionalism! I will integrate Search campaigns with Call Extensions to make it easier for the client to contact the office with one click from the search page."
                    },
                    "نعتمد على منصات التواصل الاجتماعي فقط ونبتعد عن جوجل": {
                        "ar": "المحاماة ليست سلعة تُشترى بالتصفح العشوائي، بل 'حاجة ماسة'. تجاهل جوجل يعني ترك الموكلين الجاهزين للدفع لمنافسيك.",
                        "en": "Law is not a commodity that can be bought by random browsing, but rather an 'urgent need'. Ignoring Google means leaving ready-to-pay clients to your competitors."
                    }
                },
                "condition": (ans) => ans.q1
            },
            {
                "id": "q3",
                "label": {
                    "ar": "3. كيف تتعامل مع الاستشارات المجانية التي ترهق وقت المحامين في مكتبك؟",
                    "en": "3. How do you deal with free consultations that exhaust the time of lawyers in your office?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نقدمها لجذب العميل ونأمل أن يوكلنا لاحقاً",
                        "en": "We offer them to attract the customer and hope that he will appoint us later"
                    },
                    {
                        "ar": "نستخدم نظاماً لفلترة العملاء عبر الواتساب قبل إيصهم للمحامي",
                        "en": "We use a system to filter clients via WhatsApp before referring them to a lawyer"
                    },
                    {
                        "ar": "نطلب رسوماً مسبقة لكل استشارة لضمان جدية الموكل",
                        "en": "We require advance fees for each consultation to ensure the seriousness of the client"
                    }
                ],
                "insights": {
                    "نقدمها لجذب العميل ونأمل أن يوكلنا لاحقاً": {
                        "ar": "هذا الأمل يحرق ميزانيتك التشغيلية. التسويق يجب أن يجلب عملاء يدفعون. سأصمم صفحة هبوط توضح 'قيمة الاستشارة' لتصفية غیر الجادين.",
                        "en": "This hope burns your operating budget. Marketing must bring in paying customers. I will design a landing page explaining the 'value of consulting' to filter out those who are not serious."
                    },
                    "نستخدم نظاماً لفلترة العملاء عبر الواتساب قبل إيصهم للمحامي": {
                        "ar": "تصرف ذكي. سأقوم بأتمتة هذه العملية بروبوت يرد بالأسئلة التمهيدية (نوع القضية، قيمتها، المحكمة) لتحديد ما إذا كانت القضية تستحق وقت المستشار.",
                        "en": "Smart move. I will automate this process with a bot that answers introductory questions (type of case, value, court) to determine if the case is worth the advisor's time."
                    },
                    "نطلب رسوماً مسبقة لكل استشارة لضمان جدية الموكل": {
                        "ar": "هذا يخفض الـ Leads لكنه يرفع الجودة للحد الأقصى (100% Quality). التسويق هنا سيركز على 'قوة السيرة هذاتية للمحامي' لتبرير الرسوم.",
                        "en": "This reduces leads but increases quality to the maximum (100% Quality). Marketing here will focus on the 'power of the lawyer's resume' to justify the fee."
                    }
                },
                "condition": (ans) => ans.q2
            },
            {
                "id": "q4",
                "label": {
                    "ar": "4. ما هو نوع المحتوى الذي تنشره لبناء 'الثقة' (Trust) وهي أهم عنصر في المحاماة؟",
                    "en": "4. What type of content do you publish to build 'trust', which is the most important element in lawyering?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نصوص المواد القانونية والأحكام العامة",
                        "en": "Texts of legal articles and general provisions"
                    },
                    {
                        "ar": "فيديوهات قصيرة تشرح قصص نجاح وتفسر ثغرات قانونية للعامة",
                        "en": "Short videos explaining success stories and explaining legal loopholes to the public"
                    },
                    {
                        "ar": "لا ننشر محتوى باستمرار",
                        "en": "We don't publish content constantly"
                    }
                ],
                "insights": {
                    "نصوص المواد القانونية والأحكام العامة": {
                        "ar": "الموكل لا يقرأ النصوص الجافة لأنه لا يفهمها. يجب ترجمة القانون ل 'لغة الأعمال والمنافع'.",
                        "en": "The client does not read dry texts because he does not understand them. The law must be translated into 'the language of business and benefits'."
                    },
                    "فيديوهات قصيرة تشرح قصص نجاح وتفسر ثغرات قانونية للعامة": {
                        "ar": "هذا ال (Thought Leadership) يجعلك المحامي الأول في عقل الموكل. سأقوم بتحويل هذه الفيديوهات لحملات Youtube Ads لاستهداف رجال الأعمال.",
                        "en": "This (Thought Leadership) makes you the first lawyer in the client’s mind. I will convert these videos for Youtube Ads campaigns targeting business people."
                    },
                    "لا ننشر محتوى باستمرار": {
                        "ar": "ال Trust Authority معدومة. سأضع لك استراتيجية محتوى تبدأ بتصوير 4 فيديوهات (تثقيفية) شهرياً لنشرها ب LinkedIn وجوجل لبناء اسم المكتب.",
                        "en": "The Trust Authority is non-existent. I will develop a content strategy for you that begins with filming 4 (educational) videos per month to publish on LinkedIn and Google to build the office’s name."
                    }
                },
                "condition": (ans) => ans.q3
            },
            {
                "id": "q5",
                "label": {
                    "ar": "5. هل قمت بربط المكالمات الواردة من إعلانات جوجل لتتبع جودة العميل (Call Tracking)؟",
                    "en": "5. Have you linked calls from Google Ads to track customer quality (Call Tracking)?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعم، نعرف بالضبط أي كلمة دلالية جلبت لنا المكالمة",
                        "en": "Yes, we know exactly which keyword brought us the call"
                    },
                    {
                        "ar": "نتتبع فقط النقرات على الإعلان وليس المكالمات",
                        "en": "We only track ad clicks, not calls"
                    },
                    {
                        "ar": "نعتمد على الواتساب فقط",
                        "en": "We rely on WhatsApp only"
                    }
                ],
                "insights": {
                    "نعم، نعرف بالضبط أي كلمة دلالية جلبت لنا المكالمة": {
                        "ar": "أنت في مرحلة متقدمة! سأقوم بتفعيل ال Offline Conversion Tracking لربط (قيمة القضية) بالكلمة الدلالية لتوجيه ميزانية جوجل للقلمات المليونية.",
                        "en": "You are at an advanced stage! I will activate Offline Conversion Tracking to link (the value of the issue) to the keyword to direct Google’s budget for the million posts."
                    },
                    "نتتبع فقط النقرات على الإعلان وليس المكالمات": {
                        "ar": "النقرة لا تدفع الإيجار، المكالمة تفعل! سأقوم بربط Google Call Tracking لضمان أننا ندفع فقط مقابل المكالمات الفعلية من الموكلين.",
                        "en": "A click doesn't pay the rent, a call does! I will link to Google Call Tracking to ensure we only pay for actual calls from clients."
                    },
                    "نعتمد على الواتساب فقط": {
                        "ar": "الواتساب ممتاز، لكن بعض الموكلين يفضلون المكالمة الفورية ل'الاطمئنان'. يجب توفير قناة اتصال طهاتفية صريحة بال Landing Page.",
                        "en": "WhatsApp is excellent, but some clients prefer an instant call for 'reassurance'. An explicit telephone communication channel must be provided on the Landing Page."
                    }
                },
                "condition": (ans) => ans.q4
            },
            {
                "id": "q6",
                "label": {
                    "ar": "6. كيف تبرز التراخيص والاعتمادات (Local SEO & Google Maps) لمكتبك؟",
                    "en": "6. How do your office's licenses and accreditations (Local SEO & Google Maps) stand out?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "ملف ال Google My Business الخاص بنا يتصدر مدينتنا بالتقييمات 5 نجوم",
                        "en": "Our Google My Business profile tops our city with 5-star reviews"
                    },
                    {
                        "ar": "لدينا ملف لكن لا نهتم بجمع تقييمات الموكلين",
                        "en": "We have a file, but we are not interested in collecting client reviews"
                    },
                    {
                        "ar": "نعتمد على إعلانات تويتر/X ولا نهتم بالخرائط",
                        "en": "We rely on Twitter/X ads and don't care about maps"
                    }
                ],
                "insights": {
                    "ملف ال Google My Business الخاص بنا يتصدر مدينتنا بالتقييمات 5 نجوم": {
                        "ar": "هذا أقوى أصل مجاني. سنضاعف تأثيره من خلال حملات Google Local لاصطياد أي شخص يفتح الخريطة بحثاً عن (محامي قريب).",
                        "en": "This is the most powerful free asset. We will double its impact through Google Local campaigns to catch anyone who opens the map in search of a “lawyer nearby.”"
                    },
                    "لدينا ملف لكن لا نهتم بجمع تقييمات الموكلين": {
                        "ar": "الموكل يقرأ التقييمات قبل الاتصال! سنربط الـ CRM برسالة SMS تلقائية للموكل بعد الحكم لطلب تقييمه لرفع تصنيف المكتب.",
                        "en": "The client reads the reviews before calling! We will link the CRM to an automatic SMS message to the client after the ruling to request his evaluation to raise the office’s rating."
                    },
                    "نعتمد على إعلانات تويتر/X ولا نهتم بالخرائط": {
                        "ar": "تويتر ممتاز لبناء العلاقات، لكنه فاشل في لحظة الاحتياج المباشر. سنوازن الميزانية لنقل الثقل الأكبر لجوجل.",
                        "en": "Twitter is great for building relationships, but it fails in the immediate moment of need. We will balance the budget to shift the greater weight to Google."
                    }
                },
                "condition": (ans) => ans.q5
            },
            {
                "id": "q7",
                "label": {
                    "ar": "7. في القضايا التجارية الكبرى (B2B)، ما هي دورة المبيعات (Sales Cycle)؟",
                    "en": "7. In B2B cases, what is the sales cycle?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "سريعة، يوقع العميل العقد في أول اجتماع",
                        "en": "Fast, client signs the contract at the first meeting"
                    },
                    {
                        "ar": "تستغرق أسابيع، تتطلب اجتماعات ومقترحات مالية (Proposals)",
                        "en": "It takes weeks, requires meetings and financial proposals (proposals)."
                    },
                    {
                        "ar": "نواجه صعوبة في الوصول لمدراء الشركات الكبرى",
                        "en": "We have difficulty reaching managers of major companies"
                    }
                ],
                "insights": {
                    "سريعة، يوقع العميل العقد في أول اجتماع": {
                        "ar": "هذا يعكس مهارة ال Closing لديكم. سنقوم بScaling لحملات جوجل لايصال أكبر عدد من المستثمرين لغرفة الاجتماعات.",
                        "en": "This reflects your closing skill. We will scale Google campaigns to get the largest number of investors into the meeting room."
                    },
                    "تستغرق أسابيع، تتطلب اجتماعات ومقترحات مالية (Proposals)": {
                        "ar": "هنا يأتي دور (Lead Nurturing). سنقوم بإعداد سلسلة إيميلات (Email Drip) تُرسل للCEO بعد الاجتماع الأول لتبقيه مرتبطاً بالمكتب.",
                        "en": "Here comes the role of (Lead Nurturing). We will set up an email drip series that will be sent to the CEO after the first meeting to keep him connected to the office."
                    },
                    "نواجه صعوبة في الوصول لمدراء الشركات الكبرى": {
                        "ar": "سأطلق حملات LinkedIn Account-Based Marketing (ABM) لأستهداف المدراء التنفيذيين بالاسم والشركة.",
                        "en": "I will launch LinkedIn Account-Based Marketing (ABM) campaigns to target executives by name and company."
                    }
                },
                "condition": (ans) => ans.q6
            },
            {
                "id": "q8",
                "label": {
                    "ar": "8. هل تستخدم Landing Pages مخصصة لكل تخصص قانوني أم ترسلهم للموقع الرئيسي؟",
                    "en": "8. Do you use dedicated Landing Pages for each legal specialty or do you send them to the main site?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "كل قضية (تجارية، عمالية) لها صفحة هبوط منفصلة ومحكمة",
                        "en": "Each case (commercial, labor) has a separate and relevant landing page"
                    },
                    {
                        "ar": "نرسلهم للصفحة الرئيسية وهم يبحثون عن تخصصهم",
                        "en": "We send them to the home page and they search for their specialty"
                    },
                    {
                        "ar": "لدينا رابط واتساب مباشر فقط بدون موقع",
                        "en": "We only have a direct WhatsApp link without a website"
                    }
                ],
                "insights": {
                    "كل قضية (تجارية، عمالية) لها صفحة هبوط منفصلة ومحكمة": {
                        "ar": "هذا هو ال CRO المتقدم! الموكل الباحث عن (طلاق) لا يهمه ال(تحكيم التجاري). سأحسن هذه الصفحات لرفع معدل الـ Conversion ل 20%.",
                        "en": "This is advanced CRO! The client looking for (divorce) is not interested in (commercial arbitration). I will improve these pages to increase the conversion rate to 20%."
                    },
                    "نرسلهم للصفحة الرئيسية وهم يبحثون عن تخصصهم": {
                        "ar": "الموكل 'مستعجل ومشتت'. إرساله للصفحة الرئيسية يفقدك 60% من الزوار. سأبني صفحات هبوط متخصصة وسريعة.",
                        "en": "The client is 'in a hurry and distracted'. Sending it to the home page will cause you to lose 60% of visitors. I will build specialized and fast landing pages."
                    },
                    "لدينا رابط واتساب مباشر فقط بدون موقع": {
                        "ar": "الواتساب المباشر يقلل من اليبة المكتب ويجلب استشارات 'مجانية' كثيرة. ال Landing Page تعمل ك 'فلتر احترامي' يرفع جودة الموكل.",
                        "en": "Direct WhatsApp reduces office pressure and brings many 'free' consultations. The landing page acts as a 'respect filter' that raises the quality of the client."
                    }
                },
                "condition": (ans) => ans.q7
            },
            {
                "id": "q9",
                "label": {
                    "ar": "9. كيف تعيد استهداف (Retarget) الزوار الذين دخلوا موقعك ولم يتصلوا؟",
                    "en": "9. How do you retarget visitors who entered your site but did not call?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "لا نعيد استهدافهم، من يريدنا سيتصل",
                        "en": "We do not re-target them, whoever wants us will call"
                    },
                    {
                        "ar": "نلاحقهم بإعلانات تعرض خدماتنا مرة أخرى",
                        "en": "We chase them with ads offering our services again"
                    },
                    {
                        "ar": "نلاحقهم بفيديو لمحامي يشرح حلاً لمشكلتهم (Value-based Retargeting)",
                        "en": "We follow them with a video of a lawyer explaining a solution to their problem (Value-based Retargeting)"
                    }
                ],
                "insights": {
                    "لا نعيد استهدافهم، من يريدنا سيتصل": {
                        "ar": "قرار خاطئ مالياً. العميل المتردد يبحث في 4 مكاتب قبل الاتصال. سأجعلك المكتب الوحيد الذي يلاحقه حتى يتخذ القرار.",
                        "en": "Financially wrong decision. A hesitant customer searches 4 offices before calling. I will make you the only office that follows him until he makes a decision."
                    },
                    "نلاحقهم بإعلانات تعرض خدماتنا مرة أخرى": {
                        "ar": "ملاحقة طيبة، لكنها مزعجة إذا كانت 'Call us now' فقط. سنجعل الإعلان الثاني 'دليل قانوني مجاني' لسحب بياناته (Lead Magnet).",
                        "en": "Nice pursuit, but annoying if it's just 'Call us now'. We will make the second ad a 'Lead Magnet'."
                    },
                    "نلاحقهم بفيديو لمحامي يشرح حلاً لمشكلتهم (Value-based Retargeting)": {
                        "ar": "أنت تمتلك عقلية تسويقية فذة. هذا ال Retargeting يبني Trust مرعب ويجعل الموكل يشعر أنك تفهمه أكثر من أي مكتب آخر.",
                        "en": "You have a great marketing mind. This retargeting builds trust and makes the client feel that you understand them more than any other office."
                    }
                },
                "condition": (ans) => ans.q8
            },
            {
                "id": "q10",
                "label": {
                    "ar": "10. ما هي ميزانيتك الشهرية المخصصة للتسويق لاحتكار الكلمات القانونية الأعلى قيمة؟",
                    "en": "10. What is your monthly budget allocated to marketing to monopolize the most valuable legal words?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "أقل من 3,000$ (التركيز على القضايا الفردية والعمالية)",
                        "en": "Less than $3,000 (focus on individual and labor issues)"
                    },
                    {
                        "ar": "3,000$ إلى 10,000$ (بناء اسم المكتب والمنافسة على التجاري)",
                        "en": "$3,000 to $10,000 (building the office’s name and competing for the commercial)"
                    },
                    {
                        "ar": "أكثر من 10,000$ (عقود الشركات، التحكيم، واكتساح الـ B2B)",
                        "en": "$10,000+ (corporate contracts, arbitration, and B2B sweeps)"
                    }
                ],
                "insights": {
                    "أقل من 3,000$ (التركيز على القضايا الفردية والعمالية)": {
                        "ar": "سنركز 100% على Google Search (Exact Match) للكلمات الجاهزة للتحويل فقط لتجنب أي الدر.",
                        "en": "We will focus 100% on Google Search (Exact Match) for words that are ready to convert only to avoid any pitfalls."
                    },
                    "3,000$ إلى 10,000$ (بناء اسم المكتب والمنافسة على التجاري)": {
                        "ar": "هنا سندخل في ال Display Ads بمواقع الأخبار المالية و Search متقدم لاقتناص أصحاب المؤسسات، مع فلترة صارمة ل Leads.",
                        "en": "Here we will include Display Ads on financial news sites and Advanced Search to capture institutional owners, with strict filtering for Leads."
                    },
                    "أكثر من 10,000$ (عقود الشركات، التحكيم، واكتساح الـ B2B)": {
                        "ar": "سنبني أيكوسيستم كامل (SEO + ABM LinkedIn + Google Ads) ليصبح مكتبك الخيار البديهي للشركات الكبرى في الخليج.",
                        "en": "We will build a complete ecosystem (SEO + ABM LinkedIn + Google Ads) so that your office becomes the obvious choice for major companies in the Gulf."
                    }
                },
                "condition": (ans) => ans.q9
            }
        ]
    },
    "translation": {
        "title": {
            "ar": "Translation & Localization (شركات الترجمة المعتمدة)",
            "en": "Translation & Localization (certified translation companies)"
        },
        "questions": [
            {
                "id": "q1",
                "label": {
                    "ar": "1. ما هو القطاع الأهم الذي يدر الدخل الأكبر لشركة الترجمة الخاصة بك؟",
                    "en": "1. What is the most important sector that generates the most income for your translation company?"
                },
                "type": "select",
                "options": [
                    {
                        "ar": "الترجمة المعتمدة للأفراد (سفارات، عقود، الجرة)",
                        "en": "Certified translation for individuals (embassies, contracts, jar)"
                    },
                    {
                        "ar": "الترجمة الطبية والقانونية المتخصصة",
                        "en": "Specialized medical and legal translation"
                    },
                    {
                        "ar": "توطين المواقع والتطبيقات (Localization - B2B)",
                        "en": "Localization of websites and applications (Localization - B2B)"
                    },
                    {
                        "ar": "الترجمة الفورية للمؤتمرات والفعاليات",
                        "en": "Simultaneous translation for conferences and events"
                    }
                ],
                "insights": {
                    "الترجمة المعتمدة للأفراد (سفارات، عقود، الجرة)": {
                        "ar": "هذا القطاع يعتمد على ال (Urgency) - السرعة. حملات Google Search مع عبارة 'ترجمة معتمدة في نفس اليوم' هي المفتاح للمبيعات.",
                        "en": "This sector depends on (Urgency) - speed. Google Search campaigns with the phrase 'certified same day translation' are key to sales."
                    },
                    "الترجمة الطبية والقانونية المتخصصة": {
                        "ar": "هنا الثقة والدقة الما الأساس. الكلمات الدلالية يجب أن تركز على 'ترجمة تقارير طبية دقيقة' و 'ترجمة عقود تجارية'.",
                        "en": "Here confidence and accuracy are the basis. Keywords should focus on 'translation of accurate medical reports' and 'translation of commercial contracts'."
                    },
                    "توطين المواقع والتطبيقات (Localization - B2B)": {
                        "ar": "قطاع الـ B2B المربح. التسويق كأن يعتمد عل LinkedIn و Email Outreach لاستهداف مدراء التسويق وال Product Managers في الشركات التقنية.",
                        "en": "Profitable B2B sector. Marketing relies on LinkedIn and Email Outreach to target marketing managers and product managers in technology companies."
                    },
                    "الترجمة الفورية للمؤتمرات والفعاليات": {
                        "ar": "قطاع موسمي وعالي ال Ticket. إعلانات Google المستهدفة ل (منظمي الفعاليات PR Agencies) هي ما يجلب العقود الضخمة.",
                        "en": "Seasonal and high-ticket sector. Targeted Google Ads (PR Agencies) are what bring in huge contracts."
                    }
                }
            },
            {
                "id": "q2",
                "label": {
                    "ar": "2. كيف تدير حملات Google Ads لتكون الخيار الأول للترجمة المعتمدة؟",
                    "en": "2. How do you manage Google Ads campaigns to be the first choice for certified translation?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نستهدف كلمات (مكتب ترجمة) بشكل عام",
                        "en": "We target the words (translation office) in general"
                    },
                    {
                        "ar": "نستهدف بكلمات ال Long-tail مثل (مكتب ترجمة معتمد من السفارة الأمريكية)",
                        "en": "We target with long-tail words such as (a translation office approved by the American Embassy)"
                    },
                    {
                        "ar": "نواجه مشكلة في النقرات الكثيرة بدون طلبات فعلية",
                        "en": "We are having a problem with a lot of clicks without actual orders"
                    }
                ],
                "insights": {
                    "نستهدف كلمات (مكتب ترجمة) بشكل عام": {
                        "ar": "الكلمات العامة تجلب الطلاب والباحثين عن ترجمة مجانية. سأقوم بتنظيف الـ Search Terms لإبعاد الزيارات الغير مفيدة.",
                        "en": "General Words brings students and seekers of free translation. I will clean the Search Terms to remove unwanted traffic."
                    },
                    "نستهدف بكلمات ال Long-tail مثل (مكتب ترجمة معتمد من السفارة الأمريكية)": {
                        "ar": "هذه هي الاستراتيجية الذهبية. ال CVR (معدل التحويل) هنا يتجاوز 30%. سنعززها ب Site-link Extensions لكل لغة وسفارة.",
                        "en": "This is the golden strategy. The CVR (conversion rate) here exceeds 30%. We will enhance it with Site-link Extensions for each language and embassy."
                    },
                    "نواجه مشكلة في النقرات الكثيرة بدون طلبات فعلية": {
                        "ar": "المشكلة ب ال Landing Page أو ال Pricing المخفي. سأقوم بتركيب Chatbot يقوم بتسعير الورقة فعلياً ب 3 ثوانٍ لسحب ال Lead فوراً.",
                        "en": "The problem is with the hidden landing page or pricing. I will install a chatbot that actually prices the paper in 3 seconds to pull the lead immediately."
                    }
                },
                "condition": (ans) => ans.q1
            },
            {
                "id": "q3",
                "label": {
                    "ar": "3. كيف تتعامل مع متطلبات الـ B2B (شركات ومؤسسات) لتوطين المحتوى؟",
                    "en": "3. How do you deal with the requirements of B2B (companies and institutions) to localize content?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نرسل لهم Company Profile وننتظر الرد",
                        "en": "We send them Company Profile and wait for a response"
                    },
                    {
                        "ar": "نقدم لهم 'عينة مجانية' لترجمة صفحة من موقعهم",
                        "en": "We offer them a 'free sample' to translate a page from their site"
                    },
                    {
                        "ar": "نركز فقط على الأفراد لأنهم الأسرع في الدفع",
                        "en": "We only focus on individuals because they are the quickest to pay"
                    }
                ],
                "insights": {
                    "نرسل لهم Company Profile وننتظر الرد": {
                        "ar": "ال Profile المكتوب لا يُقرأ. سنقوم بتصميم (Audit Report) لموقع الشركة المستهدفة يوضح الأخطاء اللغوية ونرسله لل CEO لاختراقه.",
                        "en": "The written profile is not read. We will design an Audit Report for the target company's website that explains linguistic errors and send it to the CEO to hack it."
                    },
                    "نقدم لهم 'عينة مجانية' لترجمة صفحة من موقعهم": {
                        "ar": "هذا هو ال Lead Magnet الأقوى في ال Localization. سأبني حملة LinkedIn تدعو الشركات لتجربة الجودة بشكل مجاني ومحدود.",
                        "en": "This is the most powerful lead magnet in localization. I will build a LinkedIn campaign inviting companies to try Quality for free and on a limited basis."
                    },
                    "نركز فقط على الأفراد لأنهم الأسرع في الدفع": {
                        "ar": "الأفراد يوفرون ال Cash Flow اليومي، لكن الـ B2B يرفع ال Valuation للشركة. سنوازن الميزانية لخدمة الطرفين بكفاءة.",
                        "en": "Individuals provide daily cash flow, but B2B increases the company's valuation. We will balance the budget to serve both parties efficiently."
                    }
                },
                "condition": (ans) => ans.q2
            },
            {
                "id": "q4",
                "label": {
                    "ar": "4. ما هو ال Hook (الجاذب) الأقوى في إعلاناتك للترجمة المعتمدة؟",
                    "en": "4. What is the strongest hook in your advertisements for certified translation?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "السعر الأرخص بالسوق",
                        "en": "The cheapest price in the market"
                    },
                    {
                        "ar": "سرعة الإنجاز (خلال 24 ساعة أو أقل)",
                        "en": "Speed ​​of completion (within 24 hours or less)"
                    },
                    {
                        "ar": "الاعتماد من جميع السفارات والجهات الحكومية",
                        "en": "Accreditation from all embassies and government agencies"
                    }
                ],
                "insights": {
                    "السعر الأرخص بالسوق": {
                        "ar": "المنافسة بالسعر تدمر هوامش الربحية. العميل المستعجل لسفارة لا يهمه السعر بقدر ما تهمه المقبولية. سنغير الرسالة.",
                        "en": "Price competition destroys profit margins. A client in a hurry to an embassy does not care about the price as much as he does about acceptability. We will change the message."
                    },
                    "سرعة الإنجاز (خلال 24 ساعة أو أقل)": {
                        "ar": "السرعة هي ال King! سأضع (عداد تنازلي) في صفحة الهبوط وأضيف ميزة (الترجمة الفورية - VIP) بضعف السعر لزيادة الـ AOV.",
                        "en": "Speed ​​is king! سأضع (عداد تنازلي) في صفحة الهبوط وأضيف ميزة (الترجمة الفورية - VIP) بضعف السعر لزيادة الـ AOV."
                    },
                    "الاعتماد من جميع السفارات والجهات الحكومية": {
                        "ar": "الثقة! سنضع شعارات السفارات والوزارات التي تعتمدكم في أول Banner يراه الزائر في الموقع لرفع الـ Conversion Rate.",
                        "en": "trust! We will place the logos of the embassies and ministries that accredit you in the first banner that the visitor sees on the site to raise the conversion rate."
                    }
                },
                "condition": (ans) => ans.q3
            },
            {
                "id": "q5",
                "label": {
                    "ar": "5. هل تستخدم ميزة ال Local SEO لاستقبال العملاء في المكتب الفعلي؟",
                    "en": "5. Do you use the Local SEO feature to receive clients in the physical office?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعم، الخريطة (Google My Business) هي مصدرنا الأساسي",
                        "en": "Yes, the map (Google My Business) is our primary resource"
                    },
                    {
                        "ar": "لدينا خريطة لكنها ليست المصدر الرئيسي",
                        "en": "We have a map but it is not the main source"
                    },
                    {
                        "ar": "نحن مكتب أونلاين بالكامل ولا نستقبل عملاء",
                        "en": "We are a completely online office and do not receive clients"
                    }
                ],
                "insights": {
                    "نعم، الخريطة (Google My Business) هي مصدرنا الأساسي": {
                        "ar": "سأقوم بتعزيز ال Local Map Pack ب PMax for Store Goals لاحتكار ال 3 نتائج الأولى بمدينتك.",
                        "en": "I will enhance the Local Map Pack with PMax for Store Goals to monopolize the top 3 results in your city."
                    },
                    "لدينا خريطة لكنها ليست المصدر الرئيسي": {
                        "ar": "مكاتب الترجمة المحلية تعيش عل الخرائط. سأبني حملة لل Reviews الإيجابية لرفعك معوق المنافسين.",
                        "en": "Local translation offices live on maps. I will build a campaign for positive reviews to raise you above competitors."
                    },
                    "نحن مكتب أونلاين بالكامل ولا نستقبل عملاء": {
                        "ar": "ممتاز لتقليل ال Overhead. التسويق يجب أن يُبرز 'السهولة والراحة': (ارفع ملفك -> ادفع أونلاين -> استلم المترجم ب PDF مختوم).",
                        "en": "Excellent for reducing overhead. Marketing should highlight 'ease and convenience': (Upload your file -> Pay online -> Receive the translation in a stamped PDF)."
                    }
                },
                "condition": (ans) => ans.q4
            },
            {
                "id": "q6",
                "label": {
                    "ar": "6. كيف تُسعّر خدماتك داخل ال Landing Page؟",
                    "en": "6. How do you price your services within the landing page?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "الأسعار مخفية ويجب على العميل الاتصال لمعرفتها",
                        "en": "Prices are hidden and customer must call to find out"
                    },
                    {
                        "ar": "لدينا حاسبة تسعير آلية (بالكلمة أو بالصفحة) داخل الموقع",
                        "en": "We have an automated pricing calculator (per word or per page) within the site"
                    },
                    {
                        "ar": "نعرض متوسط الأسعار لبعض المستندات الشائعة",
                        "en": "We show average prices for some popular documents"
                    }
                ],
                "insights": {
                    "الأسعار مخفية ويجب على العميل الاتصال لمعرفتها": {
                        "ar": "العميل المستعجل سيخرج من موقعك ويذهب لمن يوفر له تسعيراً فورياً. ال Friction عالٍ جداً ويهدر ال Ads Budget.",
                        "en": "A customer in a hurry will leave your site and go to someone who provides him with an immediate quote. The friction is very high and it wastes the Ads Budget."
                    },
                    "لدينا حاسبة تسعير آلية (بالكلمة أو بالصفحة) داخل الموقع": {
                        "ar": "هذا مستوى عالمي! ال Interactive Calculator ترفع ال CVR بنسبة 40%. سنربطها ب Pixel لتتبع ال Events بدقة.",
                        "en": "This is world class! The Interactive Calculator increases the CVR by 40%. We will link it to Pixel to accurately track events."
                    },
                    "نعرض متوسط الأسعار لبعض المستندات الشائعة": {
                        "ar": "حل وسط جيد. سنضيف (Chatbot) يطلب من العميل رفع الملف ليقوم فريق المبيعات بالرد عليه ب الواتساب خلال 5 دقائق.",
                        "en": "A good compromise. We will add a Chatbot that asks the customer to upload the file so that the sales team can respond to him via WhatsApp within 5 minutes."
                    }
                },
                "condition": (ans) => ans.q5
            },
            {
                "id": "q7",
                "label": {
                    "ar": "7. ما هي نسبة العملاء العائدين (Returning Customers) في قطاع الـ B2B لديكم؟",
                    "en": "7. What is the percentage of returning customers in your B2B sector?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "عالية، الشركات التي تترجم معنا تعود دائماً",
                        "en": "High, the companies that translate with us always come back"
                    },
                    {
                        "ar": "متوسطة، السوق مليء بالمنافسين الأرخص",
                        "en": "Medium, the market is full of cheaper competitors"
                    },
                    {
                        "ar": "ضعيفة، نعتمد دائماً على جلب عملاء جدد",
                        "en": "Weak, we always depend on bringing in new clients"
                    }
                ],
                "insights": {
                    "عالية، الشركات التي تترجم معنا تعود دائماً": {
                        "ar": "الـ LTV لديكم قوي. سنستثمر هذه الداتا لإنشاء (Lookalike Audiences) في Google و LinkedIn لاصطياد شركات مماثلة.",
                        "en": "Your LTV is strong. We will invest this data to create Lookalike Audiences on Google and LinkedIn to hunt similar companies."
                    },
                    "متوسطة، السوق مليء بالمنافسين الأرخص": {
                        "ar": "الولاء يُبنى بالجودة وال (Account Management) وليس السعر. سنرسل التقارير الدورية (Glossaries) للشركات لتشعر بالاحترافية.",
                        "en": "Loyalty is built on quality and account management, not price. We will send periodic reports (Glossaries) to companies to make them feel professional."
                    },
                    "ضعيفة، نعتمد دائماً على جلب عملاء جدد": {
                        "ar": "التكلفة الدائمة لجلب عميل جديد ستقتل الأرباح. سنبني برنامج (Retainer) للشركات يضمن لهم ترجمة عدد معين من الكلمات شهرياً باشتراك.",
                        "en": "The constant cost of bringing in a new customer will kill profits. We will build a Retainer program for companies that guarantees them the translation of a certain number of words per month with a subscription."
                    }
                },
                "condition": (ans) => ans.q6
            },
            {
                "id": "q8",
                "label": {
                    "ar": "8. في الـ B2C، هل تقوم بتفعيل حملات ال Retargeting لمن لم يكمل عملية الدفع؟",
                    "en": "8. In B2C, do you activate retargeting campaigns for those who have not completed the payment process?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعم، نلاحقه بإعلان يعرض خصم 10% لإتمام الطلب",
                        "en": "Yes, we follow it with an ad offering a 10% discount on order completion"
                    },
                    {
                        "ar": "نلاحقه فقط بتذكير للعودة",
                        "en": "We only go after him with a reminder to come back"
                    },
                    {
                        "ar": "لا نعيد الاستهداف، المستندات المستعجلة لأ تنتظر",
                        "en": "We do not retarget, urgent documents do not wait"
                    }
                ],
                "insights": {
                    "نعم، نلاحقه بإعلان يعرض خصم 10% لإتمام الطلب": {
                        "ar": "الخصم فعال، لكن الأفضل هو إظهار (شهادات اعتماد - Social Proof) في ال Retargeting لتبديد شكه في المقبولية.",
                        "en": "The discount is effective, but it is better to show (Social Proof Credentials) in the retargeting to dispel his doubt about admissibility."
                    },
                    "نلاحقه فقط بتذكير للعودة": {
                        "ar": "طوب، سأقوم بتسريع ال Retargeting ليعمل خلال 3 ساعات من تركه للموقع نظراً لطبيعة الUrgency للترجمة.",
                        "en": "Blessed, I will speed up the retargeting so that it works within 3 hours of leaving the site due to the urgent nature of translation."
                    },
                    "لا نعيد الاستهداف، المستندات المستعجلة لأ تنتظر": {
                        "ar": "صحيح ال Urgency عالٍ، لكن قد يكون يتردد بسبب السعر. ال Retargeting السريع (نفس اليوم) ينقذ 20% من المبيعات الضائعة.",
                        "en": "True, the urgency is high, but he may be hesitant because of the price. Rapid (same day) retargeting saves 20% of lost sales."
                    }
                },
                "condition": (ans) => ans.q7
            },
            {
                "id": "q9",
                "label": {
                    "ar": "9. كيف تضمن أن إعلانات Google لا تظهر للباحثين عن (Google Translate) أو الترجمة الآلية؟",
                    "en": "9. How do you ensure that Google ads do not appear to those searching for (Google Translate) or machine translation?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نستخدم Negative Keywords بشكل مكثف جداً",
                        "en": "We use Negative Keywords very extensively"
                    },
                    {
                        "ar": "نعاني من هذه المشكلة وتستنزف ميزانيتنا",
                        "en": "We suffer from this problem and it drains our budget"
                    },
                    {
                        "ar": "نستهدف ال Broad Match ونترك الخوارزمية تتعلم",
                        "en": "We target the Broad Match and let the algorithm learn"
                    }
                ],
                "insights": {
                    "نستخدم Negative Keywords بشكل مكثف جداً": {
                        "ar": "عمل احترافي. سنضيف كلمات مثل (مجاني، فوري، تطبيق، جوجل، برنامج) لل Negative List لضمان ال Quality.",
                        "en": "Professional work. We will add words such as (free, instant, application, Google, program) to the Negative List to ensure quality."
                    },
                    "نعاني من هذه المشكلة وتستنزف ميزانيتنا": {
                        "ar": "سأقوم بإصلاح الـ Search Terms Report فوراً، وتغيير ال Match Types إلى (Exact & Phrase) لقطع النزيف المالي.",
                        "en": "I will fix the Search Terms Report immediately, and change the Match Types to (Exact & Phrase) to cut the financial drain."
                    },
                    "نستهدف ال Broad Match ونترك الخوارزمية تتعلم": {
                        "ar": "ال Broad بالترجمة هو (انتحار مالي) بسبب تداخل الترجمة الآلية. سنقوم بتضييق الاستهداف لألتقاط المشتري الفعلي فقط.",
                        "en": "Broad in translation is (financial suicide) due to machine translation interference. We will narrow your targeting to capture only the actual buyer."
                    }
                },
                "condition": (ans) => ans.q8
            },
            {
                "id": "q10",
                "label": {
                    "ar": "10. ما هو حجم استثمارك الشهري للسيطرة على سوق الترجمة في الخليج؟",
                    "en": "10. What is the size of your monthly investment to control the translation market in the Gulf?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "أقل من 3,000$ (لمكتب محلي أو تخصص أحد)",
                        "en": "Less than $3,000 (for a local or specialty office)"
                    },
                    {
                        "ar": "3,000$ إلى 10,000$ (للشركات المتوسطة والتوطين)",
                        "en": "$3,000 to $10,000 (for medium-sized companies and localization)"
                    },
                    {
                        "ar": "أكثر من 10,000$ (لوكالات الترجمة الدولية وال Localization)",
                        "en": "More than $10,000 (for international translation agencies and localization)"
                    }
                ],
                "insights": {
                    "أقل من 3,000$ (لمكتب محلي أو تخصص أحد)": {
                        "ar": "سنركز 100% عل Google Search (Exact Intent) و Google Maps لاصطياد الأفراد الجاهزين للدفع.",
                        "en": "We will focus 100% on Google Search (Exact Intent) and Google Maps to catch individuals who are ready to pay."
                    },
                    "3,000$ إلى 10,000$ (للشركات المتوسطة والتوطين)": {
                        "ar": "مرحلة متقدمة. سندمج PMax مع إعلانات LinkedIn لأصطياد الـ B2B والشركات التي تفتح فروعاً في السعودية.",
                        "en": "Advanced stage. We will integrate PMax with LinkedIn Ads to catch B2B companies and companies opening branches in Saudi Arabia."
                    },
                    "أكثر من 10,000$ (لوكالات الترجمة الدولية وال Localization)": {
                        "ar": "سنبني أيكوسيستم شامل: SEO للمحتوى الطويل، LinkedIn ABM للمدراء، و PMax لابتلاع حصة المنافسين بالكامل.",
                        "en": "We will build a comprehensive ecosystem: SEO for long-form content, LinkedIn ABM for managers, and PMax to swallow competitors' share entirely."
                    }
                },
                "condition": (ans) => ans.q9
            }
        ]
    },
    "recruitment-cleaning": {
        "title": {
            "ar": "Recruitment & Cleaning (شركات التنظيف وجلب العمالة)",
            "en": "Recruitment & Cleaning (cleaning companies and labor recruitment)"
        },
        "questions": [
            {
                "id": "q1",
                "label": {
                    "ar": "1. ما هو النشاط الرئيسي لشركتك في هذا القطاع الخدمي؟",
                    "en": "1. What is the main activity of your company in this service sector?"
                },
                "type": "select",
                "options": [
                    {
                        "ar": "استقدام وتأجير العمالة المنزلية (خادمات، سائقين)",
                        "en": "Recruiting and renting domestic workers (maids, drivers)"
                    },
                    {
                        "ar": "خدمات التنظيف والصيانة للمنازل (B2C)",
                        "en": "Home cleaning and maintenance services (B2C)"
                    },
                    {
                        "ar": "خدمات التنظيف وإدارة المرافق للشركات (B2B Facility Management)",
                        "en": "Cleaning and facilities management services for companies (B2B Facility Management)"
                    },
                    {
                        "ar": "مكافحة الحشرات والتعقيم العاجل",
                        "en": "Insect control and urgent sterilization"
                    }
                ],
                "insights": {
                    "استقدام وتأجير العمالة المنزلية (خادمات، سائقين)": {
                        "ar": "القطاع الأكبر في الخليج. ال Trust هو المفتاح لأنك تدخل بيوت الناس. إعلانات Google Search بكلمات مثل (خادمة بالشهر، استقدام سريع) تحقق أعلى عوائد.",
                        "en": "The largest sector in the Gulf. Trust is key because you are entering people's homes. Google Search ads with words such as (maid per month, quick recruitment) generate the highest returns."
                    },
                    "خدمات التنظيف والصيانة للمنازل (B2C)": {
                        "ar": "السرعة والجدولة المريحة. التطبيقات ممتازة هنا، وإعلانات سناب شات لربات البيوت بال Weekend تضاعف الحجوزات.",
                        "en": "Speed ​​and convenient scheduling. The apps are great here, and Snapchat ads for housewives on Weekend double bookings."
                    },
                    "خدمات التنظيف وإدارة المرافق للشركات (B2B Facility Management)": {
                        "ar": "قطاع ال العقود الطويلة. إعلانات LinkedIn و Search للمدراء الماليين ومدراء المرافق هي المسار الوحيد الصحيح كأن.",
                        "en": "Long contracts sector. LinkedIn and Search Ads for CFOs and Facilities Managers are the only right path to take."
                    },
                    "مكافحة الحشرات والتعقيم العاجل": {
                        "ar": "هذا المجال مبني على ال (Urgency - الطوارئ). Google Search (Local / Click-to-Call) الوأ شريان الحياة لهذا البزنس.",
                        "en": "This field is based on (Emergency). Google Search (Local / Click-to-Call) is the lifeblood of this business."
                    }
                }
            },
            {
                "id": "q2",
                "label": {
                    "ar": "2. كيف تعتمد على Google Ads لجلب عملاء التنظيف والعمالة؟",
                    "en": "2. How do you rely on Google Ads to bring in cleaning clients and labor?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نستخدم إعلانات الخرائط وال Local Search حصراً",
                        "en": "We use Maps and Local Search ads exclusively"
                    },
                    {
                        "ar": "نستخدم حملات Performance Max (PMax)",
                        "en": "We use Performance Max (PMax) campaigns"
                    },
                    {
                        "ar": "نعتمد على منصات التواصل (انستجرام، سناب) ونواجه انقطاعاً في الطلبات",
                        "en": "We rely on social media platforms (Instagram, Snapchat) and face interruptions in orders"
                    }
                ],
                "insights": {
                    "نستخدم إعلانات الخرائط وال Local Search حصراً": {
                        "ar": "استراتيجية ال Winner! سأقوم بتطوير ال Local Service Ads (إن توفرت) أو Call Campaigns لضمان بقاء الواتفك ترن يومياً.",
                        "en": "Winner strategy! I will develop Local Service Ads (if available) or Call Campaigns to ensure that your phone stays ringing daily."
                    },
                    "نستخدم حملات Performance Max (PMax)": {
                        "ar": "الـ PMax رائع، لكن يجب تزويده ب (Offline Conversions) ليفرق بين 'طالب الاستفسار' و 'من دفع العربون/الاشتراك'.",
                        "en": "PMax is great, but it must be equipped with (Offline Conversions) to differentiate between the 'requester of inquiry' and 'the one who paid the deposit/subscription'."
                    },
                    "نعتمد على منصات التواصل (انستجرام، سناب) ونواجه انقطاعاً في الطلبات": {
                        "ar": "السوشيال ميديا تخلق الرغبة، لكن جوجل يلبي الاحتياج الفوري. سأعيد توجيه الميزانية لأقتناص الباحثين عن 'شركة تنظيف في مدينتي'.",
                        "en": "Social media creates desire, but Google meets the immediate need. I will redirect the budget to capture those searching for a 'cleaning company in my city'."
                    }
                },
                "condition": (ans) => ans.q1
            },
            {
                "id": "q3",
                "label": {
                    "ar": "3. كيف توفر ال Social Proof لخدماتك (خاصة العمالة المنزلية) لطمأنة العميل؟",
                    "en": "3. How do you provide social proof for your services (especially domestic workers) to reassure the customer?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعتمد على تقييمات Google Maps والتصريحات الرسمية (مُساند، الخ)",
                        "en": "We rely on Google Maps reviews and official statements (Musanad, etc.)"
                    },
                    {
                        "ar": "نعرض فيديوهات للعمالة أثناء العمل في المنازل (مع مراعاة الخصوصية)",
                        "en": "We show videos of workers working in homes (with privacy in mind)"
                    },
                    {
                        "ar": "لا نملك استراتيجية واضحة للثقة، نعتمد على عروض السعر",
                        "en": "We do not have a clear strategy for trust, we rely on price offers"
                    }
                ],
                "insights": {
                    "نعتمد على تقييمات Google Maps والتصريحات الرسمية (مُساند، الخ)": {
                        "ar": "الاعتمادات الحكومية (مساند) تكسر حاجز الشك فوراً. سأضع هذه الشعارات في Header كل ال Landing Pages.",
                        "en": "Government credits (Musaned) break the barrier of doubt immediately. I will place these logos in the Header of all Landing Pages."
                    },
                    "نعرض فيديوهات للعمالة أثناء العمل في المنازل (مع مراعاة الخصوصية)": {
                        "ar": "ال User-Generated Content النظيف يعطي انطباعاً بالاحترافية العالية. سنستخدمه في حملات ال Retargeting.",
                        "en": "Clean User-Generated Content gives the impression of high professionalism. We will use it in retargeting campaigns."
                    },
                    "لا نملك استراتيجية واضحة للثقة، نعتمد على عروض السعر": {
                        "ar": "المنافسة بالسعر في العمالة المنزلية تضر بالBrand. العميل سيدفع أكثر مقابل الأمان والنظافة. سنبني ال Trust أولاً.",
                        "en": "Price competition in domestic labor harms the brand. The customer will pay more for security and cleanliness. We will build the Trust first."
                    }
                },
                "condition": (ans) => ans.q2
            },
            {
                "id": "q4",
                "label": {
                    "ar": "4. ما هو النظام المتبع لحجز مواعيد التنظيف أو العمالة؟",
                    "en": "4. What is the system used for booking cleaning or labor appointments?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نظام حجز آلي عبر التطبيق أو الموقع (Online Booking)",
                        "en": "Automated reservation system via the application or website (Online Booking)"
                    },
                    {
                        "ar": "استقبال الطلبات عبر WhatsApp وجدولتها يدوياً",
                        "en": "Receiving orders via WhatsApp and scheduling them manually"
                    },
                    {
                        "ar": "استقبال مكالمات هاتفية فقط",
                        "en": "Receiving phone calls only"
                    }
                ],
                "insights": {
                    "نظام حجز آلي عبر التطبيق أو الموقع (Online Booking)": {
                        "ar": "هذا ال Scalable Model! سأقوم بتركيب Pixel Tracking دقيق (Add to Cart -> Schedule -> Purchase) لتدريب الخوارزمية على جلب المشترين.",
                        "en": "This is the Scalable Model! I will install precise Pixel Tracking (Add to Cart -> Schedule -> Purchase) to train the algorithm to bring in buyers."
                    },
                    "استقبال الطلبات عبر WhatsApp وجدولتها يدوياً": {
                        "ar": "الواتساب ممتاز لل Conversion، لكن الجدولة اليدوية تعيق النمو السريع. سأصمم لك مساراً يحول المحادثة إلى دفع مسبق بسرعة.",
                        "en": "WhatsApp is great for Conversion, but manual scheduling hinders rapid growth. I'll design a funnel for you that turns the conversation into a prepayment quickly."
                    },
                    "استقبال مكالمات هاتفية فقط": {
                        "ar": "المكالمات مجهدة للكول سنتر. سنستخدم إعلانات ال Call-Only، وسنقوم بتفعيل ال IVR لتصفية المكالمات الجادة.",
                        "en": "Calls are stressful to the call center. We will use Call-Only advertising, and we will activate the IVR to filter out serious calls."
                    }
                },
                "condition": (ans) => ans.q3
            },
            {
                "id": "q5",
                "label": {
                    "ar": "5. كيف تتعامل مع مشكلة ال No-shows (إلغاء الموعد عند وصول العمالة)؟",
                    "en": "5. How do you deal with the problem of no-shows (cancelling the appointment upon the arrival of workers)?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نطلب دفع عربون مسبق أو الدفع كاملاً أونلاين",
                        "en": "We require an advance deposit or full payment online"
                    },
                    {
                        "ar": "الدفع بعد إتمام الخدمة، ونعاني من الإلغاءات",
                        "en": "Payment is made after the service is completed, and we suffer from cancellations"
                    },
                    {
                        "ar": "نظام اشتراكات شهرية مدفوعة مسبقاً",
                        "en": "Prepaid monthly subscription system"
                    }
                ],
                "insights": {
                    "نطلب دفع عربون مسبق أو الدفع كاملاً أونلاين": {
                        "ar": "العربون المسبق يضمن الالتزام (Commitment). التسويق كأن سيركز على 'الضمان الذهبي' لطمأنة العميل الذي يدفع أونلاين.",
                        "en": "An advance deposit guarantees commitment. Marketing would focus on the 'golden guarantee' to reassure the customer who pays online."
                    },
                    "الدفع بعد إتمام الخدمة، ونعاني من الإلغاءات": {
                        "ar": "هذا النموذج يخسر الوقت والوقود. سأضيف ميزة 'تأكيد الموعد ببطاقة ائتمانية' ب ال Landing Page لتقليل الإلغاءات بنسبة 80%.",
                        "en": "This model loses time and fuel. I will add a 'Confirm Appointment with Credit Card' feature to the Landing Page to reduce cancellations by 80%."
                    },
                    "نظام اشتراكات شهرية مدفوعة مسبقاً": {
                        "ar": "هذا الوأ ال Holy Grail لقطاع الخدمات! (Recurring Revenue). سنسوق لباقات 'الراحة الشهرية' بخصم التزام لضمان التدفق النقدي.",
                        "en": "This is the Holy Grail for the service sector! (Recurring Revenue). We will market 'Monthly Convenience' packages with a commitment discount to ensure cash flow."
                    }
                },
                "condition": (ans) => ans.q4
            },
            {
                "id": "q6",
                "label": {
                    "ar": "6. في خدمات الشركات (B2B Cleaning)، كيف تبني قمع المبيعات (Sales Funnel)؟",
                    "en": "6. In B2B Cleaning, how do you build a sales funnel?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "إعلانات لينكد إن لتقديم (Free Site Survey) للمقرات",
                        "en": "LinkedIn ads to provide (Free Site Survey) for headquarters"
                    },
                    {
                        "ar": "إعلانات جوجل للباحثين عن (شركة نظافة للشركات)",
                        "en": "Google Ads for those searching for (Corporate Cleaning Company)"
                    },
                    {
                        "ar": "نعتمد على مندوبي مبيعات يزورون الشركات (Offline)",
                        "en": "We rely on sales representatives who visit companies (Offline)"
                    }
                ],
                "insights": {
                    "إعلانات لينكد إن لتقديم (Free Site Survey) للمقرات": {
                        "ar": "ال Survey المجاني هو Lead Magnet حيوي ل B2B. سأبني حملة LinkedIn ABM تستهدف مدراء المرافق في الشركات البرى بمدينتك.",
                        "en": "The Free Survey is a vital B2B Lead Magnet. I will build a LinkedIn ABM campaign targeting facilities managers at onshore companies in your city."
                    },
                    "إعلانات جوجل للباحثين عن (شركة نظافة للشركات)": {
                        "ar": "الـ Search Intent كأن يعني 'عقد متاح'. سنقوم بإنشاء Landing Page مؤسسية (Corporate) تُبرز ال ISO ومعايير السلامة.",
                        "en": "The Search Intent means 'available contract'. We will create a Corporate Landing Page that highlights ISO and safety standards."
                    },
                    "نعتمد على مندوبي مبيعات يزورون الشركات (Offline)": {
                        "ar": "المندوب الرقمي (Google/LinkedIn) يعمل 24/7 وبتكلفة أقل من سيارة المندوب. سندمج الجهدين: الرقمي يجلب الـ Leads والبشري يغلق الصفقة.",
                        "en": "A digital representative (Google/LinkedIn) works 24/7 and costs less than a representative's car. We will combine the two efforts: digital brings the leads and human closes the deal."
                    }
                },
                "condition": (ans) => ans.q6
            },
            {
                "id": "q7",
                "label": {
                    "ar": "7. ما هي الزاوية التسويقية (Angle) الأكثر نجاحاً في إعلانات العمالة المنزلية؟",
                    "en": "7. What is the most successful marketing angle in advertisements for domestic workers?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "زاوية ال 'راحة البال وتوفير الوقت للأم'",
                        "en": "“Peace of mind and time saving for the mother” corner"
                    },
                    {
                        "ar": "زاوية ال 'نظافة لا المساومة عليها (Deep Clean)'",
                        "en": "The 'Deep Clean' angle"
                    },
                    {
                        "ar": "زاوية ال 'العمالة المضمونة وهمدربة'",
                        "en": "The angle of 'guaranteed and trained workers'"
                    }
                ],
                "insights": {
                    "زاوية ال 'راحة البال وتوفير الوقت للأم'": {
                        "ar": "ال Hook العاطفي هو الأقوى في السناب شات وتيك توك. الأم تشتري 'الوقت' وليس 'التنظيف'. سنركز ال Copywriting على هذه النقطة.",
                        "en": "The emotional hook is the strongest in Snapchat and TikTok. The mother is buying 'time', not 'cleaning'. We will focus copywriting on this point."
                    },
                    "زاوية ال 'نظافة لا المساومة عليها (Deep Clean)'": {
                        "ar": "ممتازة لمواسم الأعياد ورمضان. سنستخدم فيديوهات ال Before/After المرضية (Satisfying) لجذب التفاعل.",
                        "en": "Excellent for the festive and Ramadan seasons. We will use Satisfying Before/After videos to drive engagement."
                    },
                    "زاوية ال 'العمالة المضمونة وهمدربة'": {
                        "ar": "الضمان القانوني والتدريب يكسر حاجز الخوف. سنجعل شهادات التدريب والفحوصات الطبية جزءاً أساسياً من الإعلان.",
                        "en": "Legal guarantee and training break the barrier of fear. We will make training certificates and medical examinations an essential part of the advertisement."
                    }
                },
                "condition": (ans) => ans.q6
            },
            {
                "id": "q8",
                "label": {
                    "ar": "8. كيف تتعامل مع مواسم الذروة (رمضان، الأعياد) حيث الطلب يفوق العمالة المتوفرة؟",
                    "en": "8. How do you deal with peak seasons (Ramadan, holidays) when demand exceeds available labor?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نوقف الإعلانات لعدم قدرتنا عل التلبية",
                        "en": "We stop advertising because we are unable to meet the requirements"
                    },
                    {
                        "ar": "نرفع الأسعار ونستمر بالإعلان",
                        "en": "We raise prices and continue advertising"
                    },
                    {
                        "ar": "نجمع (Waiting List) ونبيع لهم باقات ما بعد الموسم",
                        "en": "We compile a Waiting List and sell them post-season packages"
                    }
                ],
                "insights": {
                    "نوقف الإعلانات لعدم قدرتنا عل التلبية": {
                        "ar": "الإيقاف يضر الخوارزمية. سنحول الميزانية إلى (Brand Awareness) أو جمع داتا لمواسم الركود القادمة.",
                        "en": "Stopping hurts the algorithm. We will shift the budget to Brand Awareness for the coming recessionary seasons."
                    },
                    "نرفع الأسعار ونستمر بالإعلان": {
                        "ar": "ال Dynamic Pricing سليم اقتصادياً، لكن يجب الحذر من التقييمات السلبية. سنركز الإعلانات على الشريحة ال High-end التي لا تبالي بالسعر.",
                        "en": "Dynamic Pricing is economically sound, but one must be careful of negative evaluations. We will focus ads on the high-end segment that does not care about price."
                    },
                    "نجمع (Waiting List) ونبيع لهم باقات ما بعد الموسم": {
                        "ar": "تكتيك ال Growth Hackers! ال Waitlist يبني داتا ضخمة بسعر رخيص. سنسوق لهم باقات التنظيف الدوري بعد الموسم بخصم بسيط.",
                        "en": "Growth Hackers Tactic! Waitlist builds huge data at a cheap price. We will market regular cleaning packages for them after the season at a small discount."
                    }
                },
                "condition": (ans) => ans.q7
            },
            {
                "id": "q9",
                "label": {
                    "ar": "9. هل تستخدم ميزة ال Cross-sell (البيع المتقاطع) لزيادة متوسط الطلب (AOV)؟",
                    "en": "9. Do you use cross-selling to increase your average order (AOV)?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعم، نعرض 'غسيل السجاد' كإضافة ب 50 ريال النگام حجز التنظيف العادي",
                        "en": "Yes, we offer 'carpet washing' as an add-on for 50 riyals to book regular cleaning"
                    },
                    {
                        "ar": "نعم، نعرض باقة الشهر بدلاً من الزيارة الواحدة",
                        "en": "Yes, we offer a month's package instead of a single visit"
                    },
                    {
                        "ar": "لا، العميل يطلب خدمة محددة فقط",
                        "en": "No, the customer only requests a specific service"
                    }
                ],
                "insights": {
                    "نعم، نعرض 'غسيل السجاد' كإضافة ب 50 ريال النگام حجز التنظيف العادي": {
                        "ar": "هذه هي أرباح ال Upsell الصافية. سنقوم بأتمتة ظهور هذه ال Add-ons في ال Checkout لرفع الـ AOV ب 20%.",
                        "en": "These are Upsell's net profits. We will automate the appearance of these add-ons in Checkout to increase the AOV by 20%."
                    },
                    "نعم، نعرض باقة الشهر بدلاً من الزيارة الواحدة": {
                        "ar": "تحويل الزائر المؤقت إلى مشترِك دائم. سنستخدم ال Email/WhatsApp Retargeting لمن اشترى مرة واحدة لعرض باقة الشهر عليه.",
                        "en": "Converting a temporary visitor into a permanent subscriber. We will use Email/WhatsApp Retargeting to those who purchased once to offer them the month's package."
                    },
                    "لا، العميل يطلب خدمة محددة فقط": {
                        "ar": "ال Friction في إضافة خدمة بسيطة منخفض. من طلب تنظيف المكيف سيوافق على 'تعقيم فلتر' ب 30 ريال. سنفعل ال Upsell فوراً.",
                        "en": "The Friction in adding a simple service is low. Whoever requests to clean the air conditioner will agree to 'sterilize the filter' for 30 riyals. We will activate the Upsell immediately."
                    }
                },
                "condition": (ans) => ans.q8
            },
            {
                "id": "q10",
                "label": {
                    "ar": "10. ما هو حجم ميزانيتك التسويقية لتغطية المنطقة المستهدفة والتغلب على التطبيقات الكبرى؟",
                    "en": "10. How big is your marketing budget to cover the target area and beat major applications?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "أقل من 3,000$ (التركيز عل مدينة واحدة)",
                        "en": "Less than $3,000 (focus on one city)"
                    },
                    {
                        "ar": "3,000$ إلى 10,000$ (التوسع في خدمات متنوعة ومناطق واسعة)",
                        "en": "$3,000 to $10,000 (expansion into various services and large areas)"
                    },
                    {
                        "ar": "أكثر من 10,000$ (بناء تطبيق وطني أو علامة Recruitment كبرى)",
                        "en": "$10,000+ (build a national application or major recruiting brand)"
                    }
                ],
                "insights": {
                    "أقل من 3,000$ (التركيز عل مدينة واحدة)": {
                        "ar": "سنركز 100% عل Google Search (Exact Match) لضمان عوائد مباشرة ومضمونة لدفع رواتب العمالة اليومية.",
                        "en": "We will focus 100% on Google Search (Exact Match) to ensure direct and guaranteed returns to pay our daily workers."
                    },
                    "3,000$ إلى 10,000$ (التوسع في خدمات متنوعة ومناطق واسعة)": {
                        "ar": "سنبني أيكوسيستم يدمج الوعي ب Snapchat للB2C مع PMax لاحتكار النتائج. و LinkedIn لل B2B Contracts.",
                        "en": "We will build an ecosystem that integrates Snapchat awareness for B2C with PMax to monopolize results. And LinkedIn for B2B Contracts."
                    },
                    "أكثر من 10,000$ (بناء تطبيق وطني أو علامة Recruitment كبرى)": {
                        "ar": "مرحلة ال Scaling. سنقوم بإطلاق حملات UAC لتنزيل التطبيق، و Server-side tracking لضمان أدق البيانات التسويقية بالخليج.",
                        "en": "Scaling stage. We will launch UAC campaigns for app downloads and server-side tracking to ensure the most accurate marketing data in the Gulf."
                    }
                },
                "condition": (ans) => ans.q9
            }
        ]
    },
    "perfumes": {
        "title": {
            "ar": "Perfumes (العطور ومستحضراتها)",
            "en": "Perfumes (perfumes and preparations)"
        },
        "questions": [
            {
                "id": "q1",
                "label": {
                    "ar": "1. ما هو التمركز (Positioning) لعلامتك التجارية في سوق العطور الخليجي الشرس؟",
                    "en": "1. What is the positioning of your brand in the fierce Gulf perfume market?"
                },
                "type": "select",
                "options": [
                    {
                        "ar": "عطور Niche (مستوحاة من تراث، مكونات نادرة، غالية الثمن)",
                        "en": "Niche perfumes (inspired by heritage, rare ingredients, expensive)"
                    },
                    {
                        "ar": "عطور بديلة (Dupe) لبراندات عالمية بأسعار اقتصادية",
                        "en": "Alternative perfumes (Dupe) for international brands at economical prices"
                    },
                    {
                        "ar": "عطور فرنسية/يومية (Lifestyle) للفئة المتوسطة",
                        "en": "French/daily (lifestyle) perfumes for the middle class"
                    },
                    {
                        "ar": "عطور مناسبات (باقات، مسك، عود، هدايا)",
                        "en": "Occasion perfumes (bouquets, musk, oud, gifts)"
                    }
                ],
                "insights": {
                    "عطور Niche (مستوحاة من تراث، مكونات نادرة، غالية الثمن)": {
                        "ar": "عطور النيش لا تباع بالمكونات، بل بالقصة (Storytelling). التيك توك وانستجرام ريلز هي الأداة الأقوى لخلق ال (Aura) حول البراند.",
                        "en": "Niche perfumes are not sold by ingredients, but by storytelling. TikTok and Instagram Reels are the most powerful tool for creating Aura around the brand."
                    },
                    "عطور بديلة (Dupe) لبراندات عالمية بأسعار اقتصادية": {
                        "ar": "اللعبة هنا هي إعلانات ال (Comparison) في جوجل PMax و Search. البحث عن اسم العطر العالمي يجب أن يظهر إعلانك كبديل ذكي وموفر.",
                        "en": "The game here is Comparison ads in Google PMax and Search. Searching for the name of the international perfume, your ad should appear as a smart and economical alternative."
                    },
                    "عطور فرنسية/يومية (Lifestyle) للفئة المتوسطة": {
                        "ar": "هنا التحدي في (ولاء العميل). التغليف الفاخر والتسويق بالمؤثرين (UGC) لبناء ضجة اجتماعية هو الحل لكسر المنافسة.",
                        "en": "Here is the challenge in (customer loyalty). Luxury packaging and influencer marketing (UGC) to build social buzz is the solution to break through the competition."
                    },
                    "عطور مناسبات (باقات، مسك، عود، هدايا)": {
                        "ar": "هذه المنتجات مبيعاتها موسمية. تجهيز باقات هدايا (Bundles) بحملات موجهة في السناب شات تحقق أعلى معدلات الـ ROAS في الخليج.",
                        "en": "These products are seasonal sales. Preparing gift packages (Bundles) with targeted Snapchat campaigns that achieve the highest ROAS rates in the Gulf."
                    }
                }
            },
            {
                "id": "q2",
                "label": {
                    "ar": "2. بما أن العطر لا يُشم عبر الإنترنت، كيف تكسر حاجز الخوف من الشراء الأعمى (Blind Buy)؟",
                    "en": "2. Since perfume cannot be smelled online, how do you break the fear of blind buying?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعتمد على الوصف الدقيق (الهرم العطري) والصور الاحترافية",
                        "en": "We rely on accurate descriptions (fragrance pyramid) and professional photos"
                    },
                    {
                        "ar": "نوفر عينة مجانية مع الطلب الكبير، يمكن للعميل إرجاع الأصل إذا لم تعجبه العينة",
                        "en": "We provide free sample with big order, customer can return the original if they don't like the sample"
                    },
                    {
                        "ar": "نبيع بوكس عينات (Discovery Set) بسعر رمزي كخطوة أولى",
                        "en": "We sell Discovery Set samples at a nominal price as a first step"
                    }
                ],
                "insights": {
                    "نعتمد على الوصف الدقيق (الهرم العطري) والصور الاحترافية": {
                        "ar": "الهرم العطري لا يبيع للكثيرين! الناس تتخيل العطر عبر ربطه ب 'مشاعر' (عطر الجرأة، عطر الانتعاش). سأغير ال Copywriting ليخاطب المشاعر.",
                        "en": "The aromatic pyramid does not sell to many! People imagine perfume by associating it with 'feelings' (the perfume of boldness, the perfume of freshness). I will change copywriting to address feelings."
                    },
                    "نوفر عينة مجانية مع الطلب الكبير، يمكن للعميل إرجاع الأصل إذا لم تعجبه العينة": {
                        "ar": "هذا هو الضمان الذهبي (Risk Reversal) الأقوى في العطور! سأجعله ال Hook الأول في فيديوهات تيك توك لرفع معدل التحويل ب 40%.",
                        "en": "This is the strongest Risk Reversal Golden Guarantee in perfumes! I will make it the first hook in TikTok videos to increase the conversion rate by 40%."
                    },
                    "نبيع بوكس عينات (Discovery Set) بسعر رمزي كخطوة أولى": {
                        "ar": "استراتيجية (Tripwire) عبقرية. نجلب العميل بوكس ب 49 ريال، ثم نبني قمع إعادة استهداف (Email/Ads) لبيعه العطر الكبير لاحقاً ب 300 ريال.",
                        "en": "Tripwire's strategy is genius. We bring the customer a box for 49 riyals, then we build a retargeting funnel (Email/Ads) to sell him the large perfume later for 300 riyals."
                    }
                },
                "condition": (ans) => ans.q1
            },
            {
                "id": "q3",
                "label": {
                    "ar": "3. كيف توظف إعلانات جوجل (Google PMax) في مجال العطور المتشبع؟",
                    "en": "3. How do you employ Google Ads (Google PMax) in the saturated perfume field?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "لا نستخدم جوجل، نعتمد على سناب شات فقط",
                        "en": "We don't use Google, we rely on Snapchat only"
                    },
                    {
                        "ar": "نستخدم PMax لكن نعاني من ارتفاع تكلفة الاستحواذ (CAC)",
                        "en": "We use PMax but suffer from high cost per acquisition (CAC)."
                    },
                    {
                        "ar": "نستخدم جوجل للبحث عن (عطر رجالي، عطر نسائي)",
                        "en": "We use Google to search for (men's perfume, women's perfume)"
                    }
                ],
                "insights": {
                    "لا نستخدم جوجل، نعتمد على سناب شات فقط": {
                        "ar": "سناب ممتاز للوعي، لكن الباحث في جوجل عن 'أفضل عطر شتوي رجالي' هو مشتري جاهز. سأبني لك حملة Google Search تقتنص النيات الدقيقة.",
                        "en": "Snap is excellent for awareness, but a Google search for 'best men's winter perfume' is a ready buyer. I'll build you a Google Search campaign that captures micro-intents."
                    },
                    "نستخدم PMax لكن نعاني من ارتفاع تكلفة الاستحواذ (CAC)": {
                        "ar": "الـ PMax يحتاج لتغذية Assets بصرية (UGC) قوية. سأقوم بتطبيق ال Asset Groups بناءً على ال (Bestsellers) لخفض التكلفة الزائدة.",
                        "en": "The PMax needs a powerful Optical Assets (UGC) feed. I will implement Asset Groups based on Bestsellers to reduce excess cost."
                    },
                    "نستخدم جوجل للبحث عن (عطر رجالي، عطر نسائي)": {
                        "ar": "كلمات عامة ومكلفة. سأطورها ب Long-tail Keywords مثل (عطر ثبات عالي للمناسبات، عطر بديل ديور سوفاج) لجلب المشترين الأذكياء.",
                        "en": "Generic and expensive words. I will develop it with Long-tail Keywords like (High longevity fragrance for special occasions, Alternative perfume to Dior Sauvage) to attract smart buyers."
                    }
                },
                "condition": (ans) => ans.q2
            },
            {
                "id": "q4",
                "label": {
                    "ar": "4. في فيديوهات ال UGC والمؤثرين، ما هي الزاوية (Angle) التي تركز عليها؟",
                    "en": "4. In UGC and influencer videos, what angle do you focus on?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "الثبات والفوحان المرعب للعطر (Beast Mode)",
                        "en": "The persistence and terrifying scent of the perfume (Beast Mode)"
                    },
                    {
                        "ar": "الإطراءات والمديح الذي سيحصل عليه المتعطر (Compliment Factor)",
                        "en": "Compliments and compliments that the perfumer will receive (Compliment Factor)"
                    },
                    {
                        "ar": "جمال الزجاجة وملاءمتها للهدايا (Gifting)",
                        "en": "The beauty of the bottle and its suitability for gifts (gifting)"
                    }
                ],
                "insights": {
                    "الثبات والفوحان المرعب للعطر (Beast Mode)": {
                        "ar": "الزاوية الكلاسيكية والناجحة دائماً في الخليج. سنعززها ب Reviews واقعية من عملاء حقيقيين في إعلانات ال Retargeting.",
                        "en": "The classic and always successful corner in the Gulf. We will reinforce it with real reviews from real customers in Retargeting ads."
                    },
                    "الإطراءات والمديح الذي سيحصل عليه المتعطر (Compliment Factor)": {
                        "ar": "ال Hook الأقوى نفسياً! 'الناس ستوقفك وتسألك عن عطرك'. سنصنع فيديوهات UGC تتمحور حول هذا الشعور الذي يبحث عنه العميل.",
                        "en": "Hook is the strongest psychologically! 'People will stop you and ask you about your perfume.' We will create UGC videos around that feeling that the customer is looking for."
                    },
                    "جمال الزجاجة وملاءمتها للهدايا (Gifting)": {
                        "ar": "زاوية ممتازة في المواسم. سنطلق حملات ال (Gifting) قبل ال Q4 والأعياد مع إمكانية إضافة كرت إهداء لرفع الـ AOV.",
                        "en": "Excellent angle in seasons. We will launch gifting campaigns before Q4 and the holidays, with the possibility of adding a gift card to raise the AOV."
                    }
                },
                "condition": (ans) => ans.q3
            },
            {
                "id": "q5",
                "label": {
                    "ar": "5. هل تواجه مشكلة ال Ad Fatigue (إرهاق الإعلان وتراجع مبيعاته) بسرعة؟",
                    "en": "5. Do you face the problem of Ad Fatigue (ad fatigue and declining sales) quickly?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعم، الفيديو ينجح لأسبوع ثم ينهار الـ ROAS",
                        "en": "Yes, the video works for a week and then the ROAS collapses"
                    },
                    {
                        "ar": "نصنع فيديوهات كثيرة لتبديلها باستمرار",
                        "en": "We make a lot of videos to keep changing them"
                    },
                    {
                        "ar": "نمتلك فيديو 'بطل' (Hero) مستمر في النجاح منذ أشهر",
                        "en": "We have a 'Hero' video that has been a hit for months"
                    }
                ],
                "insights": {
                    "نعم، الفيديو ينجح لأسبوع ثم ينهار الـ ROAS": {
                        "ar": "طبيعة تيك توك وسناب. الحل هو ال (Creative Testing Framework). سأعلمك كيف تصنع 5 أشكال مختلفة لنفس الفيديو (Mashups) لإطالة عمره.",
                        "en": "The nature of Tik Tok and Snap. The solution is the Creative Testing Framework. I will teach you how to create 5 different variations of the same video (Mashups) to extend its life."
                    },
                    "نصنع فيديوهات كثيرة لتبديلها باستمرار": {
                        "ar": "استراتيجية سليمة، لكنها مُكلفة. سنقوم بتوظيف ال DPA (الكتالوج الديناميكي) بميتا ليتولى إعادة الاستهداف بصور المنتجات لتقليل الضغط عل الفيديوهات.",
                        "en": "Sound strategy, but expensive. We will employ Meta's DPA (Dynamic Catalog) to handle retargeting with product images to reduce pressure on videos."
                    },
                    "نمتلك فيديو 'بطل' (Hero) مستمر في النجاح منذ أشهر": {
                        "ar": "ال Hero Asset نادر. سنقوم بعمل Scaling أفقي ورأسي له بحذر، وتجربته بمنصات حديدة مثل YouTube Shorts.",
                        "en": "The Hero Asset is rare. We will carefully scale it horizontally and vertically, and test it with solid platforms like YouTube Shorts."
                    }
                },
                "condition": (ans) => ans.q4
            },
            {
                "id": "q6",
                "label": {
                    "ar": "6. ما هي نسبة ال Retention (العملاء العائدين لشراء العطر مرة أخرى)؟",
                    "en": "6. What is the retention rate (customers returning to buy the perfume again)?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "منخفضة، السوق مليء بالخيارات ويحب العميل التغيير",
                        "en": "Low, the market is full of options and the customer loves change"
                    },
                    {
                        "ar": "متوسطة، يعودون في المواسم لشراء الهدايا",
                        "en": "Average, they come back every season to buy gifts"
                    },
                    {
                        "ar": "لدينا برامج ولاء (Loyalty) تعيدهم بانتظام",
                        "en": "We have loyalty programs that bring them back regularly"
                    }
                ],
                "insights": {
                    "منخفضة، السوق مليء بالخيارات ويحب العميل التغيير": {
                        "ar": "في العطور، العميل الذي اشترى (عطر صيفي) يجب أن تستهدفه في الشتاء ب(عطر شتوي). سأبني لك Flow أيميلات وSMS آلية ل Cross-sell.",
                        "en": "In perfumes, the customer who bought (a summer fragrance) should target him in the winter with a (winter fragrance). I will build you a Flow email and SMS cross-sell automation."
                    },
                    "متوسطة، يعودون في المواسم لشراء الهدايا": {
                        "ar": "جيد، سأقوم ببناء Custom Audiences للمشترين القدامى واستهدافهم ب (Early Access) للعروض الموسمية لضمان ولائهم الدائم.",
                        "en": "Good, I will build Custom Audiences for past buyers and target them with Early Access for seasonal offers to ensure their lifetime loyalty."
                    },
                    "لدينا برامج ولاء (Loyalty) تعيدهم بانتظام": {
                        "ar": "نضج تسويقي! سنستثمر الؤلاء العملاء (ال VIP) في إنشاء Lookalike Audiences ب Google & Meta لجلب عملاء جدد مشابهين بتكلفة أقل.",
                        "en": "Marketing maturity! We will invest our VIP customers in creating Lookalike Audiences with Google & Meta to bring in new, similar customers at a lower cost."
                    }
                },
                "condition": (ans) => ans.q5
            },
            {
                "id": "q7",
                "label": {
                    "ar": "7. كيف ترفع متوسط سلة الشراء (AOV) لتعويض تكاليف الشحن والإعلانات؟",
                    "en": "7. How do you increase your average shopping cart (AOV) to offset shipping and advertising costs?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نقدم شحن مجاني فوق مبلغ معين (مثلاً 200 ريال)",
                        "en": "We offer free shipping above a certain amount (for example 200 riyals)"
                    },
                    {
                        "ar": "نبيع باقات (Bundles) 3 عطور بسعر 2",
                        "en": "We sell bundles of 3 perfumes for the price of 2"
                    },
                    {
                        "ar": "لا نفعل شيئاً العميل يشتري زجاجة واحدة غالباً",
                        "en": "We do nothing. The customer often buys one bottle"
                    }
                ],
                "insights": {
                    "نقدم شحن مجاني فوق مبلغ معين (مثلاً 200 ريال)": {
                        "ar": "تكتيك أساسي. سنرفقه بشريط علوي (Announcement Bar) بالموقع يعمل كعداد (تبقّى لك 50 ريال للشحن المجاني) لتحفيهذا على إضافة منتج.",
                        "en": "Basic tactic. We will attach it to an announcement bar on the site that acts as a counter (you have 50 riyals left for free shipping) to encourage you to add a product."
                    },
                    "نبيع باقات (Bundles) 3 عطور بسعر 2": {
                        "ar": "هذا هو سر الربح الحقيقي في العطور. ال Bundles تغطي الـ CAC بسهولة. سنركز كل ال Push الإعلاني على الباقات بدلاً من القطعة المفردة.",
                        "en": "This is the secret of real profit in perfumes. Bundles cover the CAC easily. We will focus all advertising pushes on packages instead of single items."
                    },
                    "لا نفعل شيئاً العميل يشتري زجاجة واحدة غالباً": {
                        "ar": "هذا يهدر أرباحك بسبب تكلفة الشحن والـ CAC المرتفعة. سأقوم بتفعيل Upsell بعد ال Add to Cart يعرض (معطر شعر/جسم) بخصم ليوافق فوراً.",
                        "en": "This wastes your profits due to the high shipping cost and CAC. I will activate Upsell after the Add to Cart offers (hair/body mist) at a discount for immediate approval."
                    }
                },
                "condition": (ans) => ans.q6
            },
            {
                "id": "q8",
                "label": {
                    "ar": "8. هل قمت بتفعيل ال Server-Side Tracking لتجاوز حظر iOS في السناب وتيك توك؟",
                    "en": "8. Have you activated Server-Side Tracking to bypass iOS blocking on Snapchat and TikTok?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعم، الـ Conversions API يعمل بدقة",
                        "en": "Yes, the Conversions API works accurately"
                    },
                    {
                        "ar": "نعتمد على بيكسل المنصات العادي",
                        "en": "We rely on regular platform pixels"
                    },
                    {
                        "ar": "لا أعرف ما هو ال Server-Side Tracking",
                        "en": "I don't know what Server-Side Tracking is"
                    }
                ],
                "insights": {
                    "نعم، الـ Conversions API يعمل بدقة": {
                        "ar": "هذا يعطيك أفضلية ضخمة على منافسيك بتغذية الخوارزمية. سأراجع جودة ال Event Match Quality لتعظيم الأداء.",
                        "en": "This gives you a huge advantage over your competitors by feeding the algorithm. I will review the Event Match Quality to maximize performance."
                    },
                    "نعتمد على بيكسل المنصات العادي": {
                        "ar": "بيكسل المتصفح في الخليج يفقد 40% من مبيعات الآيفون! خوارزميات سناب لا تعرف من اشترى. سأقوم بتركيب ال CAPI فوراً لتصحيح مسار الحملات.",
                        "en": "Pixel browser in the Gulf loses 40% of iPhone sales! Snap's algorithms don't know who bought. I will install CAPI immediately to correct the course of the campaigns."
                    },
                    "لا أعرف ما هو ال Server-Side Tracking": {
                        "ar": "هو التقنية المهمة لمنع ابل من حجب مبيعاتك عن منصات الإعلانات. بدونها الخوارزمية عمياء. سأتولى إعدادها لك كأولوية قصوى.",
                        "en": "It is the important technology to prevent Apple from withholding your sales from advertising platforms. Without it the algorithm is blind. I will prepare it for you as a top priority."
                    }
                },
                "condition": (ans) => ans.q7
            },
            {
                "id": "q9",
                "label": {
                    "ar": "9. في التخفيضات الكبرى، ما هي استراتيجيتك؟",
                    "en": "9. In major sales, what is your strategy?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "خصومات عد 70% لمجاراة السوق",
                        "en": "Discounts of up to 70% to keep up with the market"
                    },
                    {
                        "ar": "خصومات بسيطة 20% للحفاظ على اليبة البراند",
                        "en": "Small discounts of 20% to maintain the brand's freshness"
                    },
                    {
                        "ar": "نطرح هدايا (Gift with Purchase) بدلاً من خصم السعر",
                        "en": "We offer gifts (Gift with Purchase) instead of discounting the price"
                    }
                ],
                "insights": {
                    "خصومات عد 70% لمجاراة السوق": {
                        "ar": "هذا يجعلك بائع (خصومات) وليس بائع (عطور). سأعلمك استراتيجيات لرفع المبيعات بدون حرق قيمة ال Brand بهذا الشكل.",
                        "en": "This makes you a seller (discounts) and not a seller (perfumes). I will teach you strategies to increase sales without burning the value of the brand in this way."
                    },
                    "خصومات بسيطة 20% للحفاظ على اليبة البراند": {
                        "ar": "خيار يحافظ على هوية. سنقوم بتعزيهذا باستخدام (Scarcity - الندرة) مثل 'الكمية المتبقية 50 عبوة فقط' لتحفيز الشراء.",
                        "en": "An option that preserves identity. We will reinforce this with Scarcity such as 'Only 50 packs left' to motivate purchase."
                    },
                    "نطرح هدايا (Gift with Purchase) بدلاً من خصم السعر": {
                        "ar": "استراتيجية ال Luxury Brands! إضافة مسك أو عطر ميني كهدية يرفع الـ Conversion Rate بشكل جنوني ويحافظ على هامش ربحك.",
                        "en": "Luxury Brands Strategy! Adding musk or mini perfume as a gift raises the conversion rate insanely and preserves your profit margin."
                    }
                },
                "condition": (ans) => ans.q8
            },
            {
                "id": "q10",
                "label": {
                    "ar": "10. ما هو حجم استثمارك الشهري للسيطرة على سوق العطور؟",
                    "en": "10. What is the size of your monthly investment to control the perfume market?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "أقل من 5,000$ (لبراند جديد أو منتج بطل أحد)",
                        "en": "Less than $5,000 (for a new brand or a champion product)"
                    },
                    {
                        "ar": "5,000$ إلى 20,000$ (نمو قوي وإطلاق تشكيلات)",
                        "en": "$5,000 to $20,000 (strong growth and launch collections)"
                    },
                    {
                        "ar": "أكثر من 20,000$ (هيمنة شاملة وإدارة Omni-channel)",
                        "en": "$20,000+ (Comprehensive Dominance and Omni-channel Management)"
                    }
                ],
                "insights": {
                    "أقل من 5,000$ (لبراند جديد أو منتج بطل أحد)": {
                        "ar": "سنركز الميزانية عل فيديوهات ال UGC بتيك توك وسناب، مع PMax بسيط لصيد ال Retargeting لضمان الـ ROAS.",
                        "en": "We will focus the budget on UGC videos on TikTok and Snap, with a simple PMax for retargeting to ensure ROAS."
                    },
                    "5,000$ إلى 20,000$ (نمو قوي وإطلاق تشكيلات)": {
                        "ar": "مرحلة ال Scaling! سنبني Structure معقد ب Meta (CBO/ABO) وندمج Google Search لأقتناص المنافسين (Competitor Campaigns).",
                        "en": "Scaling stage! We will build a complex Meta Structure (CBO/ABO) and integrate Google Search to capture competitors (Competitor Campaigns)."
                    },
                    "أكثر من 20,000$ (هيمنة شاملة وإدارة Omni-channel)": {
                        "ar": "سأدير الحملات ك Agency متكاملة، من Data Modeling إلى تتبع دقيق (Attribution) لكل دولار لضمان أنك تبتلع حصة المنافسين بالكامل.",
                        "en": "I'll manage campaigns like a full-fledged agency, from Data Modeling to precise tracking of each dollar to ensure you're swallowing competitors' share entirely."
                    }
                },
                "condition": (ans) => ans.q9
            }
        ]
    },
    "education": {
        "title": {
            "ar": "Education & Training (التعليم والتدريب)",
            "en": "Education & Training"
        },
        "questions": [
            {
                "id": "q1",
                "label": {
                    "ar": "1. ما هو نوع المنتج التعليمي الذي تقدمه؟",
                    "en": "1. What kind of educational product do you provide?"
                },
                "type": "select",
                "options": [
                    {
                        "ar": "دورات مسجلة أونلاين (Self-paced Courses) منخفضة التكلفة",
                        "en": "Low-cost self-paced courses"
                    },
                    {
                        "ar": "معسكرات وتدريب حي (Bootcamps / Live Training) عالية التكلفة",
                        "en": "Bootcamps / Live Training are expensive"
                    },
                    {
                        "ar": "دورات لغة أو تحضير لاختبارات (IELTS, قدرات) للفئة العمرية الصغيرة",
                        "en": "Language courses or preparation for tests (IELTS, aptitude) for young age groups"
                    },
                    {
                        "ar": "تدريب مؤسسي للشركات وتطوير الموظفين (B2B)",
                        "en": "Corporate Training and Employee Development (B2B)"
                    }
                ],
                "insights": {
                    "دورات مسجلة أونلاين (Self-paced Courses) منخفضة التكلفة": {
                        "ar": "ال Courses المسجلة تعتمد على ال Volume. التسويق يجب أن يكون ب (Webinar Funnels) أو فيديوهات قصيرة جذابة على تيك توك لحل مشكلة بسيطة.",
                        "en": "The registered courses depend on the volume. Marketing should be through (Webinar Funnels) or short, attractive videos on TikTok to solve a simple problem."
                    },
                    "معسكرات وتدريب حي (Bootcamps / Live Training) عالية التكلفة": {
                        "ar": "ال Bootcamps تباع ب 'الوعد بالوظيفة أو تغيير الحياة'. التسويق يجب أن يركز على ال (Outcomes) وقصص النجاح الضخمة لتبرير السعر.",
                        "en": "Bootcamps are sold with the 'promise of a career or life change'. Marketing should focus on outcomes and huge success stories to justify the price."
                    },
                    "دورات لغة أو تحضير لاختبارات (IELTS, قدرات) للفئة العمرية الصغيرة": {
                        "ar": "الجمهور المستهدف هو 'الآباء' وليس الطلاب فقط. الإعلانات ب Google Search لاصطياد الباحثين عن (مدرس قدرات، دورة أيلتس) هي الأهم.",
                        "en": "The target audience is 'parents' and not just students. Ads on Google Search to catch those searching for (aptitude teacher, IELTS course) are the most important."
                    },
                    "تدريب مؤسسي للشركات وتطوير الموظفين (B2B)": {
                        "ar": "B2B يدار ب LinkedIn Ads و ABM. التركيز على الـ ROI للشركة (زيادة إنتاجية الموظفين) بدلاً من مميزات الدورة.",
                        "en": "B2B managed with LinkedIn Ads and ABM. Focus on the company's ROI (increasing employee productivity) rather than the benefits of the course."
                    }
                }
            },
            {
                "id": "q2",
                "label": {
                    "ar": "2. كيف تعتمد على Google Ads لاصطياد الطلاب؟",
                    "en": "2. How do you rely on Google Ads to attract students?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نستهدف بكلمات عامة (تعلم الإنجليزية، دورة برمجة)",
                        "en": "We target with general words (learning English, programming course)"
                    },
                    {
                        "ar": "نستخدم Performance Max لجلب كل أنواع الـ Leads",
                        "en": "We use Performance Max to fetch all types of leads"
                    },
                    {
                        "ar": "نستهدف كلمات محددة بنية حقيقية (سعر دورة PMP، حجز اختبار IELTS)",
                        "en": "We target specific words with real intent (PMP course price, IELTS test booking)"
                    }
                ],
                "insights": {
                    "نستهدف بكلمات عامة (تعلم الإنجليزية، دورة برمجة)": {
                        "ar": "الكلمات العامة تستنزف الميزانية. سأقوم بتطبيق Negative Keywords لإزالة كل من يبحث عن (مجاني، PDF، يوتيوب).",
                        "en": "Generic words drain the budget. I will implement Negative Keywords to remove everyone searching for (Free, PDF, YouTube)."
                    },
                    "نستخدم Performance Max لجلب كل أنواع الـ Leads": {
                        "ar": "الـ PMax بالتعليم يحتاج إعداد Offline Conversions. إِذا لم تخبره من اشترى، سيجلب لك 'Leads وهمية' لأ تريد أن تدفع.",
                        "en": "PMax in education requires setting up Offline Conversions. If you don't tell him who bought, he will bring you 'fake leads' because you don't want to pay."
                    },
                    "نستهدف كلمات محددة بنية حقيقية (سعر دورة PMP، حجز اختبار IELTS)": {
                        "ar": "هذه هي الاحترافية. سأقوم ببناء Landing Pages مخصصة لكل كلمة دلالية (SKAG) لرفع ال Quality Score وتقليل تكلفة النقرة بنسبة 30%.",
                        "en": "This is professionalism. I will build custom landing pages for each keyword (SKAG) to raise your Quality Score and reduce your CPC by 30%."
                    }
                },
                "condition": (ans) => ans.q1
            },
            {
                "id": "q3",
                "label": {
                    "ar": "3. كيف توفر ال (Social Proof - الدليل الاجتماعي) لكسر الشكوك في جودة الدورة؟",
                    "en": "3. How do you provide (Social Proof) to remove doubts about the quality of the course?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعتمد على فيديوهات الطلاب الخريجين وهم يشرحون كيف استفادوا",
                        "en": "We rely on videos of graduate students explaining how they benefited"
                    },
                    {
                        "ar": "نعرض شاشات للمحتوى الداخلي للدورة",
                        "en": "We display screens of the internal content of the course"
                    },
                    {
                        "ar": "نعرض شهادات الاعتماد والشركاء الرسميين",
                        "en": "We display certifications and official partners"
                    }
                ],
                "insights": {
                    "نعتمد على فيديوهات الطلاب الخريجين وهم يشرحون كيف استفادوا": {
                        "ar": "ال Testimonials هي ال Salesman الأقوى. سنأخذ هذه الفيديوهات ونصنع منها حملات Retargeting شرسة.",
                        "en": "Testimonials are the most powerful Salesman. We'll take these videos and create aggressive retargeting campaigns out of them."
                    },
                    "نعرض شاشات للمحتوى الداخلي للدورة": {
                        "ar": "ال Sneak Peek جيد، لكن الناس تشتري 'النتيجة' وليس المحتوى. سنربط المحتوى ب 'كيف سيفيدك هذا في سوق العمل'.",
                        "en": "Sneak Peek is good, but people buy the 'result', not the content. We will link the content to 'How this will benefit you in the job market'."
                    },
                    "نعرض شهادات الاعتماد والشركاء الرسميين": {
                        "ar": "ال Authority ممتازة. سنضع الاعتمادات بأول Section في صفحة الهبوط لزيادة ال Trust Rate فوراً.",
                        "en": "The Authority is excellent. We will place the credits in the first section on the landing page to increase the Trust Rate immediately."
                    }
                },
                "condition": (ans) => ans.q2
            },
            {
                "id": "q4",
                "label": {
                    "ar": "4. في الدورات ال High-ticket، كيف تبيع البرنامج للمتدربين؟",
                    "en": "4. In high-ticket courses, how do you sell the program to trainees?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "يتم الشراء مباشرة من الموقع أونلاين",
                        "en": "Purchase is made directly from the website online"
                    },
                    {
                        "ar": "يتم حجز مكالمة استشارية (Book a Call) مع فريق المبيعات",
                        "en": "A consultation call (Book a Call) is booked with the sales team"
                    },
                    {
                        "ar": "يحضرون Webinar أو Event مجاني ثم يتم البيع في النهاية",
                        "en": "They attend a free Webinar or Event and then eventually make a sale"
                    }
                ],
                "insights": {
                    "يتم الشراء مباشرة من الموقع أونلاين": {
                        "ar": "في ال High-ticket الـ Conversion سيكون منخفضاً جداً. ال Friction عالٍ. سأقترح تحويله إلى مسار Webinar لبناء الثقة قبل الدفع.",
                        "en": "In the High-ticket the conversion will be very low. The Friction is high. I would suggest turning it into a Webinar funnel to build trust before paying."
                    },
                    "يتم حجز مكالمة استشارية (Book a Call) مع فريق المبيعات": {
                        "ar": "هذا الوأ مسار ال High-Ticket الصحيح. سأحسن صفحة ال Booking لتعمل كفلتر، تستبعد غير الجادين لتوفير وقت المبيعات.",
                        "en": "This is the correct High-Ticket path. I will improve the Booking page to act as a filter, excluding those who are not serious to save sales time."
                    },
                    "يحضرون Webinar أو Event مجاني ثم يتم البيع في النهاية": {
                        "ar": "قمع Webinar الاحترافي. سأبني لك حملات Email/WhatsApp Reminders لرفع نسبة الحضور (Show-up Rate) التي تعتبر العائق الأكبر.",
                        "en": "Professional Webinar Funnel. I will build Email/WhatsApp Reminders campaigns for you to increase your Show-up Rate, which is the biggest obstacle."
                    }
                },
                "condition": (ans) => ans.q3
            },
            {
                "id": "q5",
                "label": {
                    "ar": "5. كيف تدير ال Retargeting لمن زار صفحة الدورة ولم يسجل؟",
                    "en": "5. How do you manage Retargeting for those who visited the course page and did not register?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعيد استهدافه بنفس الإعلان",
                        "en": "We retarget it with the same ad"
                    },
                    {
                        "ar": "نلاحقه بخصم مؤقت أو Bonus مجاني (كتاب، أداة)",
                        "en": "We chase it with a temporary discount or free Bonus (book, gadget)"
                    },
                    {
                        "ar": "لا نعيد الاستهدافه لتوفير الميزانية",
                        "en": "We do not retarget to save budget"
                    }
                ],
                "insights": {
                    "نعيد استهدافه بنفس الإعلان": {
                        "ar": "التكرار يخلق ال Ad Fatigue. سأغير ال Messaging ليعالج (الاعتراضات) مثل 'هل الدورة تناسب المبتدئين؟'.",
                        "en": "Repetition creates Ad Fatigue. I will change the Messaging to address (objections) such as 'Is the course suitable for beginners?'."
                    },
                    "نلاحقه بخصم مؤقت أو Bonus مجاني (كتاب، أداة)": {
                        "ar": "ال Bonuses الحصرية فعالة جداً بالتعليم. سأضيف Scarcity (ينتهي العرض غداً) بال Retargeting لتسريع اتخاذ القرار.",
                        "en": "The exclusive bonuses are very effective in education. I will add Scarcity (offer ends tomorrow) with Retargeting to speed up decision making."
                    },
                    "لا نعيد الاستهدافه لتوفير الميزانية": {
                        "ar": "في ال Education دورة المبيعات طويلة وتحتاج ل 7 نقاط تواصل (Touchpoints). ال Retargeting هو ما يحصد الأرباح النهائية.",
                        "en": "In education, the sales cycle is long and requires 7 touchpoints. Retargeting is what reaps the final profits."
                    }
                },
                "condition": (ans) => ans.q4
            },
            {
                "id": "q6",
                "label": {
                    "ar": "6. هل تستخدم ميزة ال Lead Generation في المنصات (Lead Forms) أم صفحة هبوط (Landing Page)؟",
                    "en": "6. Do you use the lead generation feature on platforms (Lead Forms) or a landing page?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نستخدم Lead Forms بفيسبوك/سناب لسرعتها وسهولتها",
                        "en": "We use Facebook/Snap Lead Forms for their speed and ease"
                    },
                    {
                        "ar": "نرسلم إلى Landing Page طويلة ومقنعة",
                        "en": "Our delivery to the Landing Page is long and convincing"
                    },
                    {
                        "ar": "نجمع الـ Leads بالرسائل المباشرة (WhatsApp/DM)",
                        "en": "We collect leads via direct messages (WhatsApp/DM)"
                    }
                ],
                "insights": {
                    "نستخدم Lead Forms بفيسبوك/سناب لسرعتها وسهولتها": {
                        "ar": "ال Lead Forms تجلب كماً الائلاً لكن بجودة منخفضة (Junk Leads). سأضيف Conditional Questions بداخلها لرفع ال Quality.",
                        "en": "Lead forms bring high volume but low quality (Junk Leads). I will add Conditional Questions inside it to raise the quality."
                    },
                    "نرسلم إلى Landing Page طويلة ومقنعة": {
                        "ar": "ال Landing Page الطويلة (Long-form) تفلتر الزوار وتجلب Leads بجودة 100%. سنركز على تحسين سرعة الصفحة وال Mobile Experience.",
                        "en": "The long-form landing page filters visitors and brings leads with 100% quality. We will focus on improving page speed and mobile experience."
                    },
                    "نجمع الـ Leads بالرسائل المباشرة (WhatsApp/DM)": {
                        "ar": "الواتساب جيد لل Conversational Commerce. سأربط Chatbot تعليمي يجيب على الأسئلة الشائعة قبل التحويل لل Sales Agent.",
                        "en": "WhatsApp is good for Conversational Commerce. I will link a Chatbot tutorial that answers common questions before converting to a Sales Agent."
                    }
                },
                "condition": (ans) => ans.q5
            },
            {
                "id": "q7",
                "label": {
                    "ar": "7. ما هي نسبة ال Drop-off (المتسربين) من مسار التسجيل المجاني (Webinar/Lead Magnet)؟",
                    "en": "7. What is the drop-off percentage of the free registration track (Webinar/Lead Magnet)?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "عالية، الكثير يسجل لكن لا يحضر الWebinar",
                        "en": "High, many register but do not attend the webinar"
                    },
                    {
                        "ar": "متوسطة، ونرسل لهم التسجيل المسجل (Replay)",
                        "en": "Medium, we send them the recorded recording (Replay)"
                    },
                    {
                        "ar": "جيدة، نحقق نسبة حضور أكثر من 30%",
                        "en": "Good, we achieve an attendance rate of more than 30%"
                    }
                ],
                "insights": {
                    "عالية، الكثير يسجل لكن لا يحضر الWebinar": {
                        "ar": "ال Show-up Rate هو القاتل الصامت. سأقوم بتجهيز 5 رسائل Nurturing ب WhatsApp + Email قبل الموعد لرفع الحماس.",
                        "en": "The Show-up Rate is the silent killer. I will prepare 5 Nurturing messages via WhatsApp + Email before the appointment to increase the enthusiasm."
                    },
                    "متوسطة، ونرسل لهم التسجيل المسجل (Replay)": {
                        "ar": "ال Replay المفتوح يقتل ال Urgency. سأجعل ال Replay متاحاً ل 48 ساعة فقط مع (Timer) لزيادة المبيعات بعد البث.",
                        "en": "Open Replay kills Urgency. I will make the replay available for only 48 hours with a timer to increase sales after the broadcast."
                    },
                    "جيدة، نحقق نسبة حضور أكثر من 30%": {
                        "ar": "ممتاز! سنركز الجهد عل تحسين ال Pitch البيعي بنهاية ال Webinar وتتبع ال Watch Time للحضور.",
                        "en": "excellent! We will focus our effort on improving the sales pitch at the end of the webinar and tracking the watch time of attendees."
                    }
                },
                "condition": (ans) => ans.q6
            },
            {
                "id": "q8",
                "label": {
                    "ar": "8. هل قمت بتفعيل تتبع ال Server-Side Tracking للحفاظ على الداتا؟",
                    "en": "8. Have you activated Server-Side Tracking to preserve data?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعم، ال Pixel وال CAPI يعملان بدقة الشراء",
                        "en": "Yes, the Pixel and CAPI work with purchase accuracy"
                    },
                    {
                        "ar": "نعتمد عل بيكسل المتصفح",
                        "en": "We rely on browser pixels"
                    },
                    {
                        "ar": "المنصات لا تسجل كل المبيعات بدقة",
                        "en": "Platforms do not accurately record all sales"
                    }
                ],
                "insights": {
                    "نعم، ال Pixel وال CAPI يعملان بدقة الشراء": {
                        "ar": "هذا هو الأساس لحملات PMax و Value-based Bidding الناجحة. سأستمر في التحسين المستمر ل Event Match Quality.",
                        "en": "This is the foundation for successful PMax and Value-based Bidding campaigns. I will continue to continuously improve Event Match Quality."
                    },
                    "نعتمد عل بيكسل المتصفح": {
                        "ar": "بيقسل المتصفح يضيع مبيعات الآيفون. سأقوم بتركيب ال Server-Side Tracking لمنع إهدار الميزانية ب Meta و Snap.",
                        "en": "The browser washes away iPhone sales. I will install Server-Side Tracking to prevent wasting budget on Meta and Snap."
                    },
                    "المنصات لا تسجل كل المبيعات بدقة": {
                        "ar": "ال Discrepancy قاتل لاتخاذ القرار. سأبني Dashboard ب Looker Studio تجمع داتا ال Backend مع ال Ads لتوضيح الـ ROAS الحقيقي.",
                        "en": "Discrepancy is a killer of decision making. I will build a dashboard with Looker Studio that combines backend data with ads to show the real ROAS."
                    }
                },
                "condition": (ans) => ans.q7
            },
            {
                "id": "q9",
                "label": {
                    "ar": "9. في التخفيضات الكبرى والمواسم (كالعودة للمدارس)، ما هي استراتيجيتك؟",
                    "en": "9. During major sales and seasons (such as back to school), what is your strategy?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "خصومات عد 50% أو أكثر",
                        "en": "Discounts of 50% or more"
                    },
                    {
                        "ar": "باقات Bundles (دورتين بسعر أحت)",
                        "en": "Bundles (two courses for one price)"
                    },
                    {
                        "ar": "نقدم الدورة بسعرها العادي مع Bonus حصري للموسم",
                        "en": "We offer the course at its regular price with an exclusive Bonus for the season"
                    }
                ],
                "insights": {
                    "خصومات عد 50% أو أكثر": {
                        "ar": "الخصم يقلل من قيمة المحتوى التعليمي النفسية. سأعلمك كيف تبيع بقيمة مرتفعة دون الاعتماد على حرق الأسعار.",
                        "en": "The discount reduces the value of the psychological educational content. I will teach you how to sell at a high value without relying on price burning."
                    },
                    "باقات Bundles (دورتين بسعر أحت)": {
                        "ar": "ال Bundling ممتاز لزيادة الـ AOV ويحافظ عل القيمة الظاهرية للدورات. سنركز عليه كعرض رئيسي ب Black Friday.",
                        "en": "Bundling is excellent for increasing the AOV and maintaining the apparent value of the courses. We will focus on it as a main offer on Black Friday."
                    },
                    "نقدم الدورة بسعرها العادي مع Bonus حصري للموسم": {
                        "ar": "هذا الوأ ال Value Stacking! إِضافة (1-on-1 Coaching Session) أو قروب حصري ك Bonus يرفع الـ Conversion بشكل أسطوري.",
                        "en": "This is the first Value Stacking! Adding a 1-on-1 Coaching Session or an exclusive group like Bonus raises the conversion level legendary."
                    }
                },
                "condition": (ans) => ans.q8
            },
            {
                "id": "q10",
                "label": {
                    "ar": "10. ما هو حجم استثمارك الشهري المتوقع للسيطرة على سوق التدريب؟",
                    "en": "10. What is the size of your expected monthly investment to control the training market?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "أقل من 3,000$ (لدورة واحدة أو مدرب حدش)",
                        "en": "Less than $3,000 (for one course or Haddish trainer)"
                    },
                    {
                        "ar": "3,000$ إلى 10,000$ (نمو معسكرات وبناء Email List القوية)",
                        "en": "$3,000 to $10,000 (Grow Camps and Build a Powerful Email List)"
                    },
                    {
                        "ar": "أكثر من 10,000$ (هيمنة إقليمية وإدارة أكاديمية ضخمة)",
                        "en": "More than $10,000 (regional dominance and huge academic administration)"
                    }
                ],
                "insights": {
                    "أقل من 3,000$ (لدورة واحدة أو مدرب حدش)": {
                        "ar": "سنركز على قمع مبيعات بسيط (TikTok -> Lead Magnet -> Email Flow) لضمان الـ ROAS من اليوم الأول.",
                        "en": "We will focus on a simple sales funnel (TikTok -> Lead Magnet -> Email Flow) to ensure ROAS from day one."
                    },
                    "3,000$ إلى 10,000$ (نمو معسكرات وبناء Email List القوية)": {
                        "ar": "مرحلة ال Scale! سنطلق حملات YouTube Ads (لأن التعليم بالڤيديو أفضل) مع Google Search للنيات الدقيقة.",
                        "en": "Scale stage! We'll launch YouTube Ads campaigns (because video learning is better) with Google Search for fine intent."
                    },
                    "أكثر من 10,000$ (هيمنة إقليمية وإدارة أكاديمية ضخمة)": {
                        "ar": "سأدير الحملات ك Data-Driven Agency. سنبني Lookalike Audiences للطلاب المتفوقين، وندير ABM ب LinkedIn لعقود الشركات المليونية.",
                        "en": "I will manage campaigns as a Data-Driven Agency. We'll build Lookalike Audiences for high-achieving students, and manage LinkedIn's ABM for billion-dollar companies."
                    }
                },
                "condition": (ans) => ans.q9
            }
        ]
    },
    "mobile-apps": {
        "title": {
            "ar": "Mobile Apps (تطبيقات الجوال)",
            "en": "Mobile Apps"
        },
        "questions": [
            {
                "id": "q1",
                "label": {
                    "ar": "1. ما هو نموذج الربح الأساسي (Monetization) لتطبيقك؟",
                    "en": "1. What is the basic monetization model for your application?"
                },
                "type": "select",
                "options": [
                    {
                        "ar": "اشتراكات مدفوعة (In-app Subscriptions)",
                        "en": "Paid subscriptions (In-app Subscriptions)"
                    },
                    {
                        "ar": "عمليات شراء داخل التطبيق (In-app Purchases - e.g., Games)",
                        "en": "In-app Purchases - e.g., Games"
                    },
                    {
                        "ar": "مجاني يعتمد على الإعلانات (Ad-supported)",
                        "en": "Free Ad-supported"
                    },
                    {
                        "ar": "تطبيق خدمي/توصيل يعتمد على عمولة الطلب",
                        "en": "Service/delivery application based on the order commission"
                    }
                ],
                "insights": {
                    "اشتراكات مدفوعة (In-app Subscriptions)": {
                        "ar": "في تطبيقات الاشتراكات، ال Trial to Paid Conversion هو المقياس الأهم. سنركز ال Events في Google UAC على (Start Trial) وليس فقط (Install).",
                        "en": "In subscription applications, Trial to Paid Conversion is the most important metric. We will focus Events in Google UAC on (Start Trial) and not just (Install)."
                    },
                    "عمليات شراء داخل التطبيق (In-app Purchases - e.g., Games)": {
                        "ar": "ال Whales (اللاعبون الذين يدفعون مبالغ ضخمة) هم هدف. سنستخدم Value-based Bidding ب Apple Search Ads لجلب المستخدميم الأعلى قيمة.",
                        "en": "Whales (players who pay huge amounts) are a target. We will use Value-based Bidding with Apple Search Ads to bring in the highest value users."
                    },
                    "مجاني يعتمد على الإعلانات (Ad-supported)": {
                        "ar": "ال Volume هو الملك هنا. التكلفة المنخفضة لل Install (CPI) هي هدف. سنعتمد عل تيك توك بفيديوهات فيروسية لجلب آلاف التحميلات بتكلفة زهيدة.",
                        "en": "Volume is king here. Low cost per install (CPI) is a goal. We will rely on TikTok with viral videos to bring thousands of downloads at a low cost."
                    },
                    "تطبيق خدمي/توصيل يعتمد على عمولة الطلب": {
                        "ar": "ال Cost Per First Order (CPFO) الوأ المؤشر الحقيقي. لا فائدة من مليون تحميل بدون طلبات. سنربط ال SDK لتحسين الحملات بناءً على 'أول طلب'.",
                        "en": "The Cost Per First Order (CPFO) is the first real indicator. There is no point in a million downloads without requests. We will connect the SDK to optimize campaigns based on 'first request'."
                    }
                }
            },
            {
                "id": "q2",
                "label": {
                    "ar": "2. كيف تواجه تحدي ال App Tracking Transparency (ATT) في نظام iOS 14+؟",
                    "en": "2. How to solve the challenge of App Tracking Transparency (ATT) in iOS 14+?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعتمد على SKAdNetwork لكن البيانات تتأخر",
                        "en": "We rely on SKAdNetwork but data is delayed"
                    },
                    {
                        "ar": "لم نقم بإعداد تتبع مخصص ل iOS ونعاني من ضعف الأداء",
                        "en": "We haven't set up custom tracking for iOS and are experiencing poor performance"
                    },
                    {
                        "ar": "لدينا Server-side Tracking و MMP (مثل AppsFlyer/Adjust) يعمل بدقة",
                        "en": "Our Server-side Tracking and MMP (eg AppsFlyer/Adjust) works fine"
                    }
                ],
                "insights": {
                    "نعتمد على SKAdNetwork لكن البيانات تتأخر": {
                        "ar": "ال SKAN بطيء (24-48 ساعة تأخير). سأقوم بتحسين إعدادات الـ Conversion Values لتقليل الفجوة الزمنية في تحليل البيانات.",
                        "en": "The SKAN is slow (24-48 hours delay). I will improve the Conversion Values ​​settings to reduce the time gap in data analysis."
                    },
                    "لم نقم بإعداد تتبع مخصص ل iOS ونعاني من ضعف الأداء": {
                        "ar": "هذا يعمي الخوارزميات تماماً! سنقوم بتركيب MMP (Mobile Measurement Partner) فوراً لعودة الرؤية لحملات ال iOS.",
                        "en": "This completely blinds the algorithms! We will install an MMP (Mobile Measurement Partner) immediately to restore visibility to your iOS campaigns."
                    },
                    "لدينا Server-side Tracking و MMP (مثل AppsFlyer/Adjust) يعمل بدقة": {
                        "ar": "هذا إعداد احترافي! سنستفيد من هذه الداتا ببناء Lookalike Audiences للمستخدمين الذين حققوا أعلى LTV.",
                        "en": "This is a professional setup! We will leverage this data by building Lookalike Audiences for users with the highest LTV."
                    }
                },
                "condition": (ans) => ans.q1
            },
            {
                "id": "q3",
                "label": {
                    "ar": "3. ما هي قناتك الرئيسية لاكتساب المستخدمين (User Acquisition)؟",
                    "en": "3. What is your main user acquisition channel?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "إعلانات Google UAC و Apple Search Ads",
                        "en": "Google UAC Ads and Apple Search Ads"
                    },
                    {
                        "ar": "إعلانات سناب شات وتيك توك",
                        "en": "Snapchat and TikTok ads"
                    },
                    {
                        "ar": "ال ASO (تحسين متجر التطبيقات) للزيارات المجانية",
                        "en": "The ASO (App Store Optimization) for organic traffic"
                    }
                ],
                "insights": {
                    "إعلانات Google UAC و Apple Search Ads": {
                        "ar": "الـ Search Intent في المتاجر هو الأعلى تحويلاً. سأقوم ب Keyword Expansion في ASA لسرقة حصة منافسيك المباشرين.",
                        "en": "The search intent in stores is the highest converting. I will Keyword Expansion in ASA to steal share from your direct competitors."
                    },
                    "إعلانات سناب شات وتيك توك": {
                        "ar": "ممتازة ل Demand Generation، لكن ال Uninstall Rate اليكون الأعلى. سنركز على UGC يوضح 'كيف يحل التطبيق المشكلة' لتحسين ال Retention.",
                        "en": "Excellent for Demand Generation, but the Uninstall rate is not the highest. We will focus on UGC explaining 'how the app solves the problem' to improve retention."
                    },
                    "ال ASO (تحسين متجر التطبيقات) للزيارات المجانية": {
                        "ar": "ال Organic Traffic كنز. سنقوم ب A/B Testing لل Screenshots وال Icon لزيادة الـ Conversion Rate من المتجر مباشرة.",
                        "en": "The Organic Traffic is a treasure. We will A/B Test the screenshots and icons to increase the conversion rate directly from the store."
                    }
                },
                "condition": (ans) => ans.q2
            },
            {
                "id": "q4",
                "label": {
                    "ar": "4. كيف تدير حملات Google UAC (Universal App Campaigns)؟",
                    "en": "4. How to manage Google UAC (Universal App Campaigns) campaigns?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "حملة واحدة تستهدف ال Installs (التحميلات)",
                        "en": "One campaign targeting Installs (Downloads)"
                    },
                    {
                        "ar": "حملات منفصلة لل Installs ول In-App Actions (الأحداث الداخلية)",
                        "en": "Separate campaigns for Installs and In-App Actions"
                    },
                    {
                        "ar": "لا نستخدم جوجل بسبب التكلفة",
                        "en": "We don't use Google because of the cost"
                    }
                ],
                "insights": {
                    "حملة واحدة تستهدف ال Installs (التحميلات)": {
                        "ar": "ال Installs ብቻ تجلب مستخدمين لا يفتحون التطبيق. سنقسم الميزانية ونتجه نحو UAC for Actions لنجلب من يقوم ب (التسجيل/الدفع).",
                        "en": "Installs ብቻ bring users who do not open the application. We'll split the budget and move towards UAC for Actions to get someone to do the (registration/payment)."
                    },
                    "حملات منفصلة لل Installs ول In-App Actions (الأحداث الداخلية)": {
                        "ar": "بنية صحيحة! سنقوم بتعزيزها ب Asset Groups مخصصة (فيديوهات طويلة، صور متحركة، نصوص قصيرة) لمساعدة الخوارزمية.",
                        "en": "Correct structure! We'll augment it with custom Asset Groups (long videos, gifs, short texts) to help the algorithm."
                    },
                    "لا نستخدم جوجل بسبب التكلفة": {
                        "ar": "التكلفة العالية في جوجل مبررة ب LTV العالي لمستخدميها. التجاهل يعني خسارة شريحة (الـ Search) الجاهزة. سنجرب ال UAC بميزانية محدودة لقياس الـ ROAS.",
                        "en": "The high cost in Google is justified by the high LTV of its users. Ignoring means losing the ready search segment. We will try UAC on a limited budget to measure ROAS."
                    }
                },
                "condition": (ans) => ans.q3
            },
            {
                "id": "q5",
                "label": {
                    "ar": "5. ما هو معدل الاحتفاظ (Retention Rate) للمستخدمين بعد 7 أيام (Day 7 Retention)؟",
                    "en": "5. What is the retention rate of users after 7 days?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "أقل من 10% (يتم حذف التطبيق سريعاً)",
                        "en": "Less than 10% (the application is quickly deleted)"
                    },
                    {
                        "ar": "بين 10% و 25% (معدل متوسط)",
                        "en": "Between 10% and 25% (average rate)"
                    },
                    {
                        "ar": "أكثر من 25% (تفاعل عالي ومستمر)",
                        "en": "More than 25% (high and continuous reaction)"
                    }
                ],
                "insights": {
                    "أقل من 10% (يتم حذف التطبيق سريعاً)": {
                        "ar": "هناك مشكلة في ال Onboarding أو أن الإعلان مضلل (Clickbait). سنراجع رحلة المستخدم الأولى (First Time User Experience).",
                        "en": "There is a problem with onboarding or the advertisement is misleading (clickbait). We will review the First Time User Experience."
                    },
                    "بين 10% و 25% (معدل متوسط)": {
                        "ar": "سنرفع هذه النسبة بتفعيل Push Notifications آلية ورسائل In-App Messaging لإعادة إشراك المستخدم في اليوم الثالث والسابع.",
                        "en": "We will increase this percentage by enabling automated Push Notifications and In-App Messaging to re-engage the user on the third and seventh day."
                    },
                    "أكثر من 25% (تفاعل عالي ومستمر)": {
                        "ar": "التطبيق بطل! سنستثمر ال Retention العالي بتفعيل برنامج (Referral) ليجلب المستخدمون أصدقاءهم بتكلفة صفرية.",
                        "en": "Champion app! We will capitalize on high retention by activating the Referral program so that users can bring their friends at zero cost."
                    }
                },
                "condition": (ans) => ans.q4
            },
            {
                "id": "q6",
                "label": {
                    "ar": "6. كيف تعيد استهداف المستخدمين الذين حمّلوا التطبيق ولم يكملوا التسجيل؟",
                    "en": "6. How do you retarget users who downloaded the app but did not complete registration?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "عبر رسائل SMS أو البريد الإلكتروني",
                        "en": "Via SMS or email"
                    },
                    {
                        "ar": "نطلق حملات App Retargeting في Meta و Google",
                        "en": "We launch App Retargeting campaigns in Meta and Google"
                    },
                    {
                        "ar": "لا نعيد استهدافهم حالياً",
                        "en": "We are not retargeting them now"
                    }
                ],
                "insights": {
                    "عبر رسائل SMS أو البريد الإلكتروني": {
                        "ar": "ممتاز ومجاني تقريباً (Owned Media). سنقوم ب Segmenting للداتا وتقديم مكافأة تسجيل (10$ في ال Wallet) ك Hook.",
                        "en": "Excellent and almost free (Owned Media). We will segmenting the data and offer a sign-up bonus ($10 in Wallet) as a hook."
                    },
                    "نطلق حملات App Retargeting في Meta و Google": {
                        "ar": "استثمار بمكانه! ال Deep Linking هو المفتاح هنا؛ الإعلان يجب أن يفتح التطبيق مباشرة على الصفحة المتروكة ولأ متجر التطبيقات.",
                        "en": "An investment in its place! Deep Linking is the key here; Advertisement The app must open directly on the abandoned page or the App Store."
                    },
                    "لا نعيد استهدافهم حالياً": {
                        "ar": "أنت تضيع 60% من ميزانية ال Acquisition. المستخدم الذي حوّل التطبيق تجاوز العقبة الأكبر. ال Retargeting سيكلفك أقل بكثير لتحويله.",
                        "en": "You waste 60% of your acquisition budget. The user who converted the app crossed the biggest hurdle. Retargeting will cost you much less to convert."
                    }
                },
                "condition": (ans) => ans.q5
            },
            {
                "id": "q7",
                "label": {
                    "ar": "7. هل تستخدم فيديوهات UGC (User Generated Content) في إعلاناتك؟",
                    "en": "7. Do you use UGC (User Generated Content) videos in your ads?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعم، هي المصدر الأساسي لتحميلاتنا في TikTok/Snap",
                        "en": "Yes, it is the primary source of our TikTok/Snap uploads"
                    },
                    {
                        "ar": "نستخدم فيديوهات Motion Graphics وتصاميم ثابتة",
                        "en": "We use Motion Graphics videos and static designs"
                    },
                    {
                        "ar": "نصنع إعلانات بممثلين محترفين",
                        "en": "We create advertisements with professional actors"
                    }
                ],
                "insights": {
                    "نعم، هي المصدر الأساسي لتحميلاتنا في TikTok/Snap": {
                        "ar": "ال UGC يخفض ال CPI بشكل مرعب. سنقوم بتطوير (Creator Network) لإنتاج 10 فيديوهات أسبوعياً لمحاربة ال Ad Fatigue.",
                        "en": "UGC lowers CPI horribly. We will develop a Creator Network to produce 10 videos per week to combat Ad Fatigue."
                    },
                    "نستخدم فيديوهات Motion Graphics وتصاميم ثابتة": {
                        "ar": "ال Motion Graphic جيد ل Google UAC، لكنه لا يحول جيداً في السوشيال ميديا لأنه يبدو 'إعلاناً'. سننتقل لل UGC فوراً.",
                        "en": "Motion Graphic is good for Google UAC, but it doesn't convert well on social media because it looks 'ad'. We will move to UGC immediately."
                    },
                    "نصنع إعلانات بممثلين محترفين": {
                        "ar": "الاحترافية الزائدة في تيك توك مملة وتُعمل لها Skip. الفيديو ال (Raw) العفوي الذي يشرح التطبيق بشكل حقيقي الوأ ما يجلب ال Installs.",
                        "en": "Too much professionalism on TikTok is boring and Skip works for it. The spontaneous Raw video that explains the application in real life is what brings the installs."
                    }
                },
                "condition": (ans) => ans.q6
            },
            {
                "id": "q8",
                "label": {
                    "ar": "8. كيف تقيم أداء ال Ad Creatives الخاصة بك؟",
                    "en": "8. How do you evaluate the performance of your Ad Creatives?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعتمد على ال CPI (تكلفة التحميل) كمعيار وحيد",
                        "en": "We rely on CPI (cost per load) as the only criterion"
                    },
                    {
                        "ar": "نحلل ال Hook Rate (أول 3 ثوانٍ) و Hold Rate بالفيديو",
                        "en": "We analyze the Hook Rate (first 3 seconds) and Hold Rate in the video"
                    },
                    {
                        "ar": "نترك الخوارزمية تقرر الأفضل دون تحليل",
                        "en": "We let the algorithm decide what is best without analysis"
                    }
                ],
                "insights": {
                    "نعتمد على ال CPI (تكلفة التحميل) كمعيار وحيد": {
                        "ar": "ال CPI المنخفض قد يجلب Fraud (تحميلات وهمية) أو مستخدمين لا يدفعون. الـ ROI أو الـ ROAS الوأ المعيار الحقيقي.",
                        "en": "A low CPI may bring in fraud or non-paying users. The ROI or ROAS is the true standard."
                    },
                    "نحلل ال Hook Rate (أول 3 ثوانٍ) و Hold Rate بالفيديو": {
                        "ar": "أنت تعمل بعقلية Growth Hacker! سنقوم ب A/B Testing مستمر لل Hooks (بصري، صوتي، نصي) لكسر حاجز ال 3 ثوانٍ باستمرار.",
                        "en": "You operate with a Growth Hacker mindset! We will conduct continuous A/B testing of Hooks (visual, audio, text) to continually break the 3-second barrier."
                    },
                    "نترك الخوارزمية تقرر الأفضل دون تحليل": {
                        "ar": "الخوارزمية تصرف الميزانية بأسهل طريق. يجب توجيهها بتحليل ال Creative Fatigue وإيقاف الإعلان الخاسر قبل الدر الميزانية.",
                        "en": "The algorithm spends the budget in the easiest way. It must be directed to analyzing the Creative Fatigue and stopping the losing advertisement before the budget is generated."
                    }
                },
                "condition": (ans) => ans.q7
            },
            {
                "id": "q9",
                "label": {
                    "ar": "9. في حملات Apple Search Ads، كيف تستهدف كلمات ال Brand للمنافسين؟",
                    "en": "9. In Apple Search Ads campaigns, how do you target competitors' brand words?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نستهدف أسماء تطبيقات المنافسين (Competitor Campaigns)",
                        "en": "We target competitors' app names (Competitor Campaigns)"
                    },
                    {
                        "ar": "نستهدف كلمات مجال التطبيق العامة فقط",
                        "en": "We target general application domain words only"
                    },
                    {
                        "ar": "لا نستخدم Apple Search Ads",
                        "en": "We do not use Apple Search Ads"
                    }
                ],
                "insights": {
                    "نستهدف أسماء تطبيقات المنافسين (Competitor Campaigns)": {
                        "ar": "تكتيك الجومي ممتاز. سنكتب Custom Product Pages (CPP) تُظهر ميزة بتطبيقك (مثل: أسرع من [تطبيق المنافس]) لسرقة ال Install بقوة.",
                        "en": "Excellent gommy tactic. We'll write Custom Product Pages (CPPs) that showcase a feature of your app (eg: faster than [competitor's app]) to aggressively steal the install."
                    },
                    "نستهدف كلمات مجال التطبيق العامة فقط": {
                        "ar": "ال Discovery Campaigns ممتازة. سنفعل ال Broad Match لصيد كلمات بحث جديدة لم نفكر بها لبناء Custom Intent Audiences.",
                        "en": "Discovery Campaigns are excellent. We will activate Broad Match to catch new search terms that we have not thought of to build Custom Intent Audiences."
                    },
                    "لا نستخدم Apple Search Ads": {
                        "ar": "أنت تترك ال High-intent Users الذين يبحثون فعلياً في متجر أبل للمنافسين. ASA هي القناة ذات الـ ROAS الأعلى لتطبيقات ال iOS.",
                        "en": "You're leaving the high-intent users who are actually searching the Apple Store to competitors. ASA is the channel with the highest ROAS for iOS apps."
                    }
                },
                "condition": (ans) => ans.q8
            },
            {
                "id": "q10",
                "label": {
                    "ar": "10. ما هي استراتيجيتك للوصول لل 100 ألف تحميل (أو المليون) القادمة؟",
                    "en": "10. What is your strategy to reach the next 100,000 (or million) downloads?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "ميزانية أقل من 10,000$ (نمو بطيء باستهداف دقيق)",
                        "en": "Budget less than $10,000 (slow growth with precise targeting)"
                    },
                    {
                        "ar": "10,000$ إلى 50,000$ (Scaling رأسي وأفقي بمنصات متعددة)",
                        "en": "$10,000 to $50,000 (vertical and horizontal scaling on multiple platforms)"
                    },
                    {
                        "ar": "أكثر من 50,000$ (الجوم كاسح على السوق الخليجي)",
                        "en": "More than $50,000 (the price is overwhelming in the Gulf market)"
                    }
                ],
                "insights": {
                    "ميزانية أقل من 10,000$ (نمو بطيء باستهداف دقيق)": {
                        "ar": "سنركز 100% عل ال Bottom-of-Funnel (Apple Search Ads و Google UAC for Actions) لضمان عوائد مباشرة.",
                        "en": "We will focus 100% on Bottom-of-Funnel (Apple Search Ads and Google UAC for Actions) to ensure direct returns."
                    },
                    "10,000$ إلى 50,000$ (Scaling رأسي وأفقي بمنصات متعددة)": {
                        "ar": "سنقوم بتوزيع المخاطر بناء مصفوفة من UGC (TikTok/Snap) ل Demand Gen، و ASA/Google ل Demand Capture.",
                        "en": "We will allocate the risk based on a matrix of UGC (TikTok/Snap) for Demand Gen, and ASA/Google for Demand Capture."
                    },
                    "أكثر من 50,000$ (الجوم كاسح على السوق الخليجي)": {
                        "ar": "سأبني لك إيكوسيستم متكامل لل Mobile Growth، يتضمن تتبع دقيق من ال Click لل LTV، وتطوير ال Creatives أسبوعياً لابتلاع السوق.",
                        "en": "I will build you an integrated ecosystem for Mobile Growth, including precise tracking of Click to LTV, and developing weekly creatives to capture the market."
                    }
                },
                "condition": (ans) => ans.q9
            }
        ]
    },
    "luxury-brands": {
        "title": {
            "ar": "Luxury Brands (العلامات الفاخرة)",
            "en": "Luxury Brands"
        },
        "questions": [
            {
                "id": "q1",
                "label": {
                    "ar": "1. ما هو القطاع الذي تنتمي إليه علامتك الفاخرة؟",
                    "en": "1. What sector does your luxury brand belong to?"
                },
                "type": "select",
                "options": [
                    {
                        "ar": "مجوهرات وساعات فاخرة",
                        "en": "Luxury jewelry and watches"
                    },
                    {
                        "ar": "أزياء وحقائب مصممين (Designer Fashion)",
                        "en": "Designer Fashion and Bags"
                    },
                    {
                        "ar": "سيارات فارهة ويخوت",
                        "en": "Luxury cars and yachts"
                    },
                    {
                        "ar": "عقارات فاخرة (Luxury Real Estate)",
                        "en": "Luxury Real Estate"
                    }
                ],
                "insights": {
                    "مجوهرات وساعات فاخرة": {
                        "ar": "ال Trust وال Heritage الما الأساس. ال Pinterest Ads و Google Search بكلمات 'High Intent' (مثل: Rolex Daytona price الرياض) هي الأفضل.",
                        "en": "The Trust and Heritage are the foundation. Pinterest Ads and Google Search with the words 'High Intent' (eg: Rolex Daytona price Riyadh) are the best."
                    },
                    "أزياء وحقائب مصممين (Designer Fashion)": {
                        "ar": "ال Exclusivity والتفرد (FOMO). الإنستجرام (Dynamic Ads) مع تركيز ضخم على ال Lifestyle وال Aesthetic هو ما يحرك المبيعات.",
                        "en": "Exclusivity and uniqueness (FOMO). Instagram (Dynamic Ads) with a huge focus on Lifestyle and Aesthetic is what drives sales."
                    },
                    "سيارات فارهة ويخوت": {
                        "ar": "هنا ال High-Ticket بأعلى مستوياته. إعلانات LinkedIn و YouTube للمدراء التنفيذيين ورجال الأعمال هي المسار الصحيح.",
                        "en": "Here is the High-Ticket at its highest levels. LinkedIn and YouTube ads for executives and entrepreneurs are the way to go."
                    },
                    "عقارات فاخرة (Luxury Real Estate)": {
                        "ar": "ال Private viewings هي الـ Conversion النهائي. التسويق كأن يعتمد على ال PR و Google Search بميزانيات مفتوحة لل Exact Match.",
                        "en": "Private viewings are the final conversion. Marketing relies on PR and Google Search with open budgets for Exact Match."
                    }
                }
            },
            {
                "id": "q2",
                "label": {
                    "ar": "2. كيف تواجه تحدي الـ Conversion Rate المنخفض بسبب السعر المرتفع للقطعة؟",
                    "en": "2. How do you face the challenge of low conversion rate due to the high price of the piece?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعتمد على جلب Lead (معلومات اتصال) بدلاً من الشراء المباشر الأونلاين",
                        "en": "We rely on bringing leads (contact information) instead of direct online purchases"
                    },
                    {
                        "ar": "نوفر طرق دفع مقسمة (تابي، تمارا)",
                        "en": "We provide divided payment methods (Tabby, Tamara)"
                    },
                    {
                        "ar": "نرسلم لصفحة الدفع المباشر ونعاني من Drop-off عالي",
                        "en": "We send to the direct payment page and suffer from a high drop-off"
                    }
                ],
                "insights": {
                    "نعتمد على جلب Lead (معلومات اتصال) بدلاً من الشراء المباشر الأونلاين": {
                        "ar": "ال Concierge Commerce (البيع عبر مستشار شخصي) هو أسلوب ال Luxury الصحيح. سنحسن ال Lead Forms لتبدو ك (Private Consultation).",
                        "en": "Concierge Commerce (selling through a personal consultant) is the right luxury method. We will improve Lead Forms to look like Private Consultation."
                    },
                    "نوفر طرق دفع مقسمة (تابي، تمارا)": {
                        "ar": "ال BNPL ممتاز للمشتريات الفاخرة (Entry-level) مثل الحقائب. يكسر حاجز السعر بشكل ممتاز.",
                        "en": "The BNPL is excellent for luxury (entry-level) purchases such as luggage. It breaks the price barrier perfectly."
                    },
                    "نرسلم لصفحة الدفع المباشر ونعاني من Drop-off عالي": {
                        "ar": "العميل ال High-Net-Worth لا يدفع 50 ألف دولار بنقرة دون 'تجربة ملكية'. سنغير المسار ل (Book a Boutique Appointment).",
                        "en": "A High-Net-Worth customer doesn't pay $50,000 with a click without an 'ownership experience'. We will change the path to (Book a Boutique Appointment)."
                    }
                },
                "condition": (ans) => ans.q1
            },
            {
                "id": "q3",
                "label": {
                    "ar": "3. كيف توظف Google Ads للمنتجات الفاخرة؟",
                    "en": "3. How to employ Google Ads for luxury products?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نستهدف الماركات المنافسة مباشرة (Competitor Keywords)",
                        "en": "We target competing brands directly (Competitor Keywords)"
                    },
                    {
                        "ar": "نستهدف ال Broad Match لكلمات (مجوهرات، ساعات)",
                        "en": "We target the Broad Match for the words (jewelry, watches)"
                    },
                    {
                        "ar": "لا نستخدم جوجل، نعتمد على ال PR والمجلات",
                        "en": "We don't use Google, we rely on PR and magazines"
                    }
                ],
                "insights": {
                    "نستهدف الماركات المنافسة مباشرة (Competitor Keywords)": {
                        "ar": "حرب ال Brands! استراتيجية فعالة جداً. سنكتب ال Ad Copy بحيث يبرز 'التفرد' الذي المنافس لأ يملكه لسرقة العميل.",
                        "en": "Brands War! Very effective strategy. We will write the Ad Copy so that it highlights the 'uniqueness' that the competitor does not have in order to steal the customer."
                    },
                    "نستهدف ال Broad Match لكلمات (مجوهرات، ساعات)": {
                        "ar": "هذا يهدر ميزانيتك عل الباحثين عن 'مجوهرات رخيصة' أو 'تقليد'. سنقوم بتضييق الاستهداف ل Exact Match مع إضافة (Negative Keywords) مكثفة.",
                        "en": "This wastes your budget on those looking for 'cheap' or 'imitation' jewellery. We'll narrow the targeting for Exact Match while adding extensive Negative Keywords."
                    },
                    "لا نستخدم جوجل، نعتمد على ال PR والمجلات": {
                        "ar": "ال PR يبني الالة (Aura)، وجوجل يحصدها (Capture Demand). الباحث عن 'خاتم ألماس سوليتير 2 قيراط' يجب أن يجدك في القمة.",
                        "en": "PR builds the machine (Aura), and Google captures it (Capture Demand). A searcher for '2 carat solitaire diamond ring' should find you at the top."
                    }
                },
                "condition": (ans) => ans.q2
            },
            {
                "id": "q4",
                "label": {
                    "ar": "4. في الإعلانات البصرية (Meta/Snap)، ما هو ال Vibe أو الزاوية التسويقية؟",
                    "en": "4. In visual advertising (Meta/Snap), what is the Vibe or marketing angle?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "تصوير سينمائي لل Lifestyle المترتب على امتلاك القطعة",
                        "en": "A cinematic depiction of the lifestyle that owning the item entails"
                    },
                    {
                        "ar": "تصوير Close-up فائق الدقة للمنتج وتفاصيله (Craftsmanship)",
                        "en": "High-resolution close-up photography of the product and its details (Craftsmanship)"
                    },
                    {
                        "ar": "إعلانات تخفيضات وعروض حصرية",
                        "en": "Advertisements for exclusive discounts and offers"
                    }
                ],
                "insights": {
                    "تصوير سينمائي لل Lifestyle المترتب على امتلاك القطعة": {
                        "ar": "العميل المترف يشتري 'المكانة الاجتماعية' (Status). ال Lifestyle يبيع الحلم. سنستخدمه في حملات ال Top of Funnel.",
                        "en": "The luxury customer buys 'status'. The lifestyle sells the dream. We will use it in Top of Funnel campaigns."
                    },
                    "تصوير Close-up فائق الدقة للمنتج وتفاصيله (Craftsmanship)": {
                        "ar": "هذا يعزز القيمة المدفوعة (Value Justification). سنستخدم هذا المحتوى في حملات ال Retargeting لتأكيد جودة الصناعة.",
                        "en": "This enhances the value paid (Value Justification). We will use this content in retargeting campaigns to confirm the quality of the industry."
                    },
                    "إعلانات تخفيضات وعروض حصرية": {
                        "ar": "ال Luxury لا يفعل (Sale) مباشر، هذا يدمر ال Brand Equity. ال 'عرض حصري لعملاء VIP' هو المسموح به فقط ب ال Email Marketing.",
                        "en": "Luxury does not do direct sale, this destroys brand equity. The 'Exclusive offer for VIP clients' is only allowed in Email Marketing."
                    }
                },
                "condition": (ans) => ans.q3
            },
            {
                "id": "q5",
                "label": {
                    "ar": "5. كيف تدير ال Retargeting للعملاء الذين زاروا المنتج (الذي قد يكلف آلاف الدولارات) ولم يشتروا؟",
                    "en": "5. How do you manage retargeting to customers who visited the product (which could cost thousands of dollars) but did not purchase?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نلاحقهم بإعلانات تعرض المنتج باستمرار (Catalog Sales)",
                        "en": "We follow them with advertisements that constantly display the product (Catalog Sales)."
                    },
                    {
                        "ar": "نلاحقهم بدعوة (Exclusive Invitation) لزيارة البوتيك",
                        "en": "We follow up with an Exclusive Invitation to visit the boutique"
                    },
                    {
                        "ar": "لا نلح عليهم للحفاظ على ال 'Exclusivity'",
                        "en": "Don't pressure them to maintain 'exclusivity'"
                    }
                ],
                "insights": {
                    "نلاحقهم بإعلانات تعرض المنتج باستمرار (Catalog Sales)": {
                        "ar": "ملاحقة جيدة لكن قد تكون 'رخيصة' بصرياً. سنصمم قالب (Frame) فاخر لل Dynamic Ads ليليق بمستوى البراند.",
                        "en": "Good pursuit but can be visually 'cheap'. We will design a luxurious frame for Dynamic Ads to match the level of the brand."
                    },
                    "نلاحقهم بدعوة (Exclusive Invitation) لزيارة البوتيك": {
                        "ar": "ال O2O (Online to Offline) الوأ المسار المفضل في ال Luxury. الدعوة الخاصة لتجربة القطعة (مع قهوة مختصة) ترفع الـ Conversion بشكل مرعب.",
                        "en": "O2O (Online to Offline) is the preferred path in Luxury. The special invitation to try the piece (with a specialty coffee) raises the conversion level terrifyingly."
                    },
                    "لا نلح عليهم للحفاظ على ال 'Exclusivity'": {
                        "ar": "ال 'Exclusivity' لا تعني أن ينسوك! سنستخدم ال Sequential Retargeting (عرض الصناعة -> عرض التاريخ -> دعوة خاصة) بشكل غیر مزعج.",
                        "en": "'Exclusivity' does not mean that they forget you! We will use Sequential Retargeting (View Industry -> View History -> Special Invitation) in an unobtrusive manner."
                    }
                },
                "condition": (ans) => ans.q4
            },
            {
                "id": "q6",
                "label": {
                    "ar": "6. هل تستهدف العملاء الأثرياء (High-Net-Worth Individuals - HNWI) بأوفن مباشر؟",
                    "en": "6. Do you target wealthy clients (High-Net-Worth Individuals - HNWI) with direct OFN?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعم، عبر الاستهداف المبني عل الاهتمامات (يخوت، طيران خاص) بفيسبوك",
                        "en": "Yes, through interest-based targeting (yachts, private aviation) on Facebook"
                    },
                    {
                        "ar": "نعم، عبر ال Lookalike Audiences لعملائنا ال VIP",
                        "en": "Yes, via Lookalike Audiences for our VIP clients"
                    },
                    {
                        "ar": "نواجه صعوبة في الوصول لهم إلكترونياً",
                        "en": "We are having difficulty reaching them electronically"
                    }
                ],
                "insights": {
                    "نعم، عبر الاستهداف المبني عل الاهتمامات (يخوت، طيران خاص) بفيسبوك": {
                        "ar": "الاستهداف بالاهتمامات قد يجلب 'الحالمين' وليس 'المالكين'. سندمجها مع سلوك الشراء السابق و iOS Devices (أحدث آيفون) لفلترة الداتا.",
                        "en": "Targeting by interests may bring in 'dreamers' but not 'owners'. We will combine it with previous purchasing behavior and iOS Devices (latest iPhone) to filter the data."
                    },
                    "نعم، عبر ال Lookalike Audiences لعملائنا ال VIP": {
                        "ar": "أقوى استراتيجية! بيانات ال VIP الي الكنز. سأقوم بإنشاء Value-Based Lookalike لجلب أثرياء مشابهين بدقة.",
                        "en": "The most powerful strategy! VIP data to the treasure. I will create a Value-Based Lookalike to bring in precisely similar wealthy people."
                    },
                    "نواجه صعوبة في الوصول لهم إلكترونياً": {
                        "ar": "الوصول لهم ممكن عبر ال (Whitelisting) مع ناشرين متخصصين (مثل مجلة Forbes أو Vogue) وعبر Google Search ل Search Intent.",
                        "en": "Reaching them is possible via whitelisting with specialized publishers (such as Forbes or Vogue) and via Google Search for Search Intent."
                    }
                },
                "condition": (ans) => ans.q5
            },
            {
                "id": "q7",
                "label": {
                    "ar": "7. ما هي أهمية ال SEO بمجال العلامات الفاخرة لديك؟",
                    "en": "7. What is the importance of SEO in your luxury brands field?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "مهم جداً، نعتمد على محتوى ب (Heritage) و (Craftsmanship)",
                        "en": "Very important, we rely on “Heritage” and “Craftsmanship” content."
                    },
                    {
                        "ar": "ليس مهماً، السوشيال ميديا هي المسيطرة",
                        "en": "It doesn't matter, social media is in control"
                    },
                    {
                        "ar": "مهم فقط لكلمات (اسم البراند - Branded Search)",
                        "en": "Important only for the words (brand name - Branded Search)"
                    }
                ],
                "insights": {
                    "مهم جداً، نعتمد على محتوى ب (Heritage) و (Craftsmanship)": {
                        "ar": "ال SEO التثقيفي (مثل: 'كيف تعرف الألماس النقي') يجلب المشتري المتعلم (Educated Buyer) الذي يسهل إقناعه بالسعر المرتفع.",
                        "en": "Educative SEO (eg: 'How do you know a pure diamond') brings in an educated buyer who is easily persuaded by a high price."
                    },
                    "ليس مهماً، السوشيال ميديا هي المسيطرة": {
                        "ar": "خطأ فادح. المشتري المترف يبحث (Research) بشكل مكثف قبل دفع مبلغ كبير. ال SEO هو ما يجعلك 'المرجع' في مجالك.",
                        "en": "Big mistake. The luxury buyer researches extensively before paying a large sum. SEO is what makes you the 'authority' in your field."
                    },
                    "مهم فقط لكلمات (اسم البراند - Branded Search)": {
                        "ar": "ال Branded Search يحمي اسمك، لكن ال Non-Branded (مثل: هدايا فاخرة لل CEO) يجلب ال Cash Flow الجديد. سنوسع ال Keywords.",
                        "en": "Branded Search protects your name, but Non-Branded (eg luxury gifts for the CEO) brings new Cash Flow. We will expand Keywords."
                    }
                },
                "condition": (ans) => ans.q6
            },
            {
                "id": "q8",
                "label": {
                    "ar": "8. كيف تدير تجربة كبار العملاء (Clienteling) بعد الشراء؟",
                    "en": "8. How do you manage the post-purchase customer experience?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "عبر ال WhatsApp بشكل مباشر عم مستشار المبيعات",
                        "en": "Via WhatsApp directly from the sales consultant"
                    },
                    {
                        "ar": "عبر برنامج ولاء (Points and Tiers) تقليدي",
                        "en": "Through a traditional Points and Tiers loyalty program"
                    },
                    {
                        "ar": "لا يوجد تواصل فعال بعد البيع",
                        "en": "No effective after-sales communication"
                    }
                ],
                "insights": {
                    "عبر ال WhatsApp بشكل مباشر عم مستشار المبيعات": {
                        "ar": "ال 1-to-1 هو ال Luxury بحد ذاته. سأربط الـ CRM بال WhatsApp ليتلقى المستشار تنبيهاً بعيد ميلاد العميل أو ذوقه لعرض قطع جديدة.",
                        "en": "1-to-1 is luxury itself. I will link the CRM to WhatsApp so that the consultant will receive an alert on the client’s birthday or his taste to display new pieces."
                    },
                    "عبر برنامج ولاء (Points and Tiers) تقليدي": {
                        "ar": "النقاط تصلح لل Retail العادي. في ال Luxury، الولاء يُبنى ب ال (Experiences) - مثل دعوة لحفل إطلاق مجموعة حديدة وليس (خصم 10%).",
                        "en": "Points are valid for regular retail. In Luxury, loyalty is built on experiences - such as an invitation to the Hadidah collection launch party, not a 10% discount."
                    },
                    "لا يوجد تواصل فعال بعد البيع": {
                        "ar": "أنت تترك ملايين الريالات. ال Customer Lifetime Value (CLTV) في ال Luxury الوأ الأهم. سنبني Email Marketing Flow فاخر (White-glove).",
                        "en": "You are leaving millions of riyals. The Customer Lifetime Value (CLTV) in Luxury is the most important. We will build a luxurious Email Marketing Flow (White-glove)."
                    }
                },
                "condition": (ans) => ans.q7
            },
            {
                "id": "q9",
                "label": {
                    "ar": "9. في حملات Google Ads، هل تستخدم ميزة ال (Offline Conversion Tracking) للربط عم البوتيك؟",
                    "en": "9. In Google Ads campaigns, do you use the Offline Conversion Tracking feature to link to the boutique?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعم، الـ CRM مربوط بجوجل ونعرف الإعلان الذي جلب المبيعة في المعرض",
                        "en": "Yes, the CRM is linked to Google and we know the advertisement that brought the sales at the exhibition"
                    },
                    {
                        "ar": "لا، نعتمد فقط على مبيعات الموقع الإلكتروني (Online Shop)",
                        "en": "No, we rely only on online shop sales."
                    },
                    {
                        "ar": "لا نعرف الميزة المذكورة",
                        "en": "We do not know the mentioned feature"
                    }
                ],
                "insights": {
                    "نعم، الـ CRM مربوط بجوجل ونعرف الإعلان الذي جلب المبيعة في المعرض": {
                        "ar": "هذا مستوى ال Enterprises! الخوارزمية الآن تفهم من هو العميل المترف الذي ይشتري فعلياً. سنستثمر ب Value-Based Bidding.",
                        "en": "This is the Enterprises level! The algorithm now understands who the luxury customer is actually buying. We will invest with Value-Based Bidding."
                    },
                    "لا، نعتمد فقط على مبيعات الموقع الإلكتروني (Online Shop)": {
                        "ar": "في ال Luxury، 70% من المبيعات تتم ب Offline (المعرض). فصل الأونلاين عن الأوفلاين يجعلك توقف إعلانات رابحة بالخطأ.",
                        "en": "At Luxury, 70% of sales are made offline (the showroom). Separating online from offline makes you stop profitable ads by mistake."
                    },
                    "لا نعرف الميزة المذكورة": {
                        "ar": "هذه أهم ميزة لل O2O. العميل ينقر أونلاين ويشتري أوفلاين (ROPO). إِذا لم نربط الداتا، ستكون الحملات عمياء. سأتولى تنفيذ الربط.",
                        "en": "This is the most important advantage of O2O. Customer clicks online and buys offline (ROPO). If we don't connect data, campaigns will be blind. I will do the linking."
                    }
                },
                "condition": (ans) => ans.q8
            },
            {
                "id": "q10",
                "label": {
                    "ar": "10. ما هي استراتيجيتك للاستحواذ على سوق الرفاهية في المنطقة؟",
                    "en": "10. What is your strategy to capture the luxury market in the region?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "التركيز المحلي (مدينة واحدة أو بوتيك واحد) بميزانية أقل من 10,000$",
                        "en": "Local focus (one city or boutique) with a budget under $10,000"
                    },
                    {
                        "ar": "توسع إقليمي (الخليج) مع ميزانية 10,000$ إلى 50,000$ وتفعيل O2O",
                        "en": "Regional expansion (Gulf) with a budget of $10,000 to $50,000 and O2O activation"
                    },
                    {
                        "ar": "هيمنة شاملة بميزانية مفتوحة (PR، فعاليات، Omni-channel Performance)",
                        "en": "End-to-end dominance with an open budget (PR, Events, Omni-channel Performance)"
                    }
                ],
                "insights": {
                    "التركيز المحلي (مدينة واحدة أو بوتيك واحد) بميزانية أقل من 10,000$": {
                        "ar": "سنركز 100% عل ال Local SEO، و PMax for Store Visits لجعل البوتيك الوجهة الأولى لل HNWI في مدينتك.",
                        "en": "We will focus 100% on Local SEO, and PMax for Store Visits to make the boutique the number one HNWI destination in your city."
                    },
                    "توسع إقليمي (الخليج) مع ميزانية 10,000$ إلى 50,000$ وتفعيل O2O": {
                        "ar": "سنبني مساراً من ال Instagram لبناء الرغبة، و Google Search لأصطيادها، مع Offline Conversion Tracking دقيق.",
                        "en": "We'll build a funnel from Instagram to build interest, and Google Search to capture it, with careful Offline Conversion Tracking."
                    },
                    "هيمنة شاملة بميزانية مفتوحة (PR، فعاليات، Omni-channel Performance)": {
                        "ar": "سأدير الحملات ك Luxury Marketing Architect. سندمج الداتا من كل النقاط لضمان أن البراند يظهر بالشكل الملكي الذي يستحقه.",
                        "en": "I will manage campaigns as Luxury Marketing Architect. We will integrate the data from all points to ensure that the brand appears in the royal form it deserves."
                    }
                },
                "condition": (ans) => ans.q9
            }
        ]
    },
    "consultation": {
        "title": {
            "ar": "Consultation (الاستشارات الإدارية والمالية)",
            "en": "Consultation (administrative and financial consulting)"
        },
        "questions": [
            {
                "id": "q1",
                "label": {
                    "ar": "1. ما هو التخصص الدقيق (Niche) لشركتك الاستشارية؟",
                    "en": "1. What is the exact specialty (Niche) of your consulting company?"
                },
                "type": "select",
                "options": [
                    {
                        "ar": "استشارات مالية وضريبية (Zakat, Tax, VAT)",
                        "en": "Financial and tax advice (Zakat, Tax, VAT)"
                    },
                    {
                        "ar": "استشارات إدارية وإعادة هيكلة شركات",
                        "en": "Management consulting and corporate restructuring"
                    },
                    {
                        "ar": "استشارات تقنية (Digital Transformation, ERP)",
                        "en": "Technology consulting (Digital Transformation, ERP)"
                    },
                    {
                        "ar": "استشارات موارد بشرية (HR, Recruitment Setup)",
                        "en": "Human Resources Consulting (HR, Recruitment Setup)"
                    }
                ],
                "insights": {
                    "استشارات مالية وضريبية (Zakat, Tax, VAT)": {
                        "ar": "ال Pain Point هنا هو ال 'غرامات والمخاطر القانونية'. إعلانات Google Search বكلمات (مستشار زكاة وضريبة الرياض) مع Email Nurturing هي الأقوى.",
                        "en": "The Pain Point here is 'fines and legal risks'. Google Search Ads The words (Riyadh Zakat and Tax Advisor) with Email Nurturing are the most powerful."
                    },
                    "استشارات إدارية وإعادة هيكلة شركات": {
                        "ar": "ال Lead Generation الناجح هنا يعتمد عل تقديم (Whitepapers / Case Studies) ب LinkedIn Ads لأصطياد الـ CEOs.",
                        "en": "Successful lead generation here depends on submitting (Whitepapers / Case Studies) with LinkedIn Ads to attract CEOs."
                    },
                    "استشارات تقنية (Digital Transformation, ERP)": {
                        "ar": "مشاريع ال ERP تتطلب (High-Ticket Sales). ال Funnel يجب أن يبدأ ب (Free IT Audit) ك Lead Magnet لكسر الجليد.",
                        "en": "ERP projects require (High-Ticket Sales). The funnel should start with Free IT Audit as a lead magnet to break the ice."
                    },
                    "استشارات موارد بشرية (HR, Recruitment Setup)": {
                        "ar": "الشركات تعاني من ال Turnover (التسرب الوظيفي). زاوية الإعلان ب (كيف تبني هيكل يقلل التسرب ب 40%) ستجلب لك مدراء ال HR فوراً.",
                        "en": "Companies suffer from turnover. Advertisement angle B (How to build a structure that reduces leakage by 40%) will bring you HR managers immediately."
                    }
                }
            },
            {
                "id": "q2",
                "label": {
                    "ar": "2. كيف تعتمد على LinkedIn Ads للوصول لل (Decision Makers)؟",
                    "en": "2. How do you rely on LinkedIn Ads to reach Decision Makers?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نستخدم Lead Gen Forms لتقديم (دليل/تقرير) مجاني",
                        "en": "We use Lead Gen Forms to provide a free guide/report"
                    },
                    {
                        "ar": "نرسلم لل Website المباشر ونأمل أن يتصلوا",
                        "en": "We send it to the direct website and hope they call"
                    },
                    {
                        "ar": "نعتمد على ال Outreach اليدوي (رسائل InMail) فقط",
                        "en": "We rely on manual Outreach (InMail messages) only"
                    }
                ],
                "insights": {
                    "نستخدم Lead Gen Forms لتقديم (دليل/تقرير) مجاني": {
                        "ar": "استراتيجية Inbound B2B ممتازة. سنربط الـ Leads ب CRM ونطلق Email Drip Campaign ل Nurturing الـ CEO حتى المكالمة.",
                        "en": "Excellent Inbound B2B strategy. We will connect the leads to the CRM and launch an Email Drip Campaign to nurture the CEO until the call."
                    },
                    "نرسلم لل Website المباشر ونأمل أن يتصلوا": {
                        "ar": "الـ CEO لا يتصل بناءً على إعلان. ال Friction عالٍ جداً. سنقوم بتغيير المسار ل (تحميل دراسة جدوى/تقرير) لسحب بياناته أولاً.",
                        "en": "The CEO doesn't call based on an ad. The Friction is very high. We will change the path to (Upload feasibility study/report) to pull its data first."
                    },
                    "نعتمد على ال Outreach اليدوي (رسائل InMail) فقط": {
                        "ar": "ال Outreach بطيء. سندمجه مع LinkedIn Ads (Account-Based Marketing) ليظهر إعلانك لل CEO قبل أن ترسل له رسالة ال InMail.",
                        "en": "Outreach is slow. We will integrate it with LinkedIn Ads (Account-Based Marketing) so that your ad appears to the CEO before you send him the InMail."
                    }
                },
                "condition": (ans) => ans.q1
            },
            {
                "id": "q3",
                "label": {
                    "ar": "3. كيف توظف Google Ads لاصطياد ال Demand (الطلب الحالي) بالـ B2B؟",
                    "en": "3. How do you use Google Ads to capture B2B demand?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نستهدف كلمات عريضة مثل (شركة استشارات، مستشار أعمال)",
                        "en": "We target broad words such as (consulting company, business consultant)"
                    },
                    {
                        "ar": "نستهدف كلمات B2B دقيقة (شركات استشارات مالية للشركات بالرياض)",
                        "en": "We target accurate B2B keywords (financial consulting companies for companies in Riyadh)"
                    },
                    {
                        "ar": "لا نستخدم جوجل لأن ميزانيته مرتفعة",
                        "en": "We do not use Google because its budget is high"
                    }
                ],
                "insights": {
                    "نستهدف كلمات عريضة مثل (شركة استشارات، مستشار أعمال)": {
                        "ar": "ال Broad Keywords ستجلب طلاباً وأفراداً يبحثون عن استشارات مجانية. سأقوم ب فلترة الـ Search Terms ب Negative Keywords صارمة.",
                        "en": "Broad Keywords will bring students and individuals looking for free consultations. I will filter the Search Terms with strict Negative Keywords."
                    },
                    "نستهدف كلمات B2B دقيقة (شركات استشارات مالية للشركات بالرياض)": {
                        "ar": "ال Exact Match هو شريان الحياة في الـ B2B. سأصمم Landing Page B2B-specific لرفع الـ Conversion Rate ولتبرير تكلفة النقرة المرتفعة.",
                        "en": "Exact Match is the lifeblood of B2B. I will design a B2B-specific landing page to increase the conversion rate and justify the high cost per click."
                    },
                    "لا نستخدم جوجل لأن ميزانيته مرتفعة": {
                        "ar": "تكلفة الالنقرة المرتفعة ($5-$15) مبررة جداً في الـ B2B لأن الـ LTV (قيمة العقد) قد تصل للملايين. تجاهل جوجل يعني ترك الصفقات الجاهزة للمنافس.",
                        "en": "High CPC ($5-$15) is very justified in B2B because the LTV (contract value) can reach millions. Ignoring Google means leaving ready-made deals to the competitor."
                    }
                },
                "condition": (ans) => ans.q2
            },
            {
                "id": "q4",
                "label": {
                    "ar": "4. ما هو ال Lead Magnet (الطعم التسويقي) الذي تستخدمه لل Lead Gen؟",
                    "en": "4. What lead magnet do you use for Lead Gen?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "دليل أو تقرير مليء بالبيانات الإحصائية (Whitepaper)",
                        "en": "A guide or report full of statistical data (whitepaper)"
                    },
                    {
                        "ar": "جلسة استشارة مجانية (Free Consultation)",
                        "en": "Free consultation session"
                    },
                    {
                        "ar": "لا نستخدم Lead Magnets، فقط 'اتصل بنا'",
                        "en": "We don't use Lead Magnets, just 'Contact Us'"
                    }
                ],
                "insights": {
                    "دليل أو تقرير مليء بالبيانات الإحصائية (Whitepaper)": {
                        "ar": "ال Whitepaper القوي يبني (Authority) ويجمع Leads ذات جودة عالية. سنستثمر فيه في LinkedIn و Google Display.",
                        "en": "Strong Whitepaper builds authority and collects high-quality leads. We will invest in LinkedIn and Google Display."
                    },
                    "جلسة استشارة مجانية (Free Consultation)": {
                        "ar": "جيد، لكنه يرهق وقت المستشارين مع عملاء غير مؤهلين. سأضيف استبيان (Qualification Form) قبل تأكيد الجلسة لفلترة الشركات الصغيرة.",
                        "en": "Good, but it eats up advisors' time with unqualified clients. I will add a Qualification Form before confirming the session to filter small businesses."
                    },
                    "لا نستخدم Lead Magnets، فقط 'اتصل بنا'": {
                        "ar": "الـ B2B Sales Cycle طويلة. الـ CEO لا يتصل من اليوم الأول. منحه معلومة مجانية قوية هو ما ييبني الثقة ليتصل بك لاحقاً.",
                        "en": "The B2B Sales Cycle is long. The CEO doesn't call from day one. Giving him solid, free information is what builds trust to contact you later."
                    }
                },
                "condition": (ans) => ans.q3
            },
            {
                "id": "q5",
                "label": {
                    "ar": "5. كيف تقوم بل Lead Nurturing (تغذية الـ Leads) بعد الحصول على الإيميل؟",
                    "en": "5. How do you do lead nurturing after getting the email?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نرسل Email Sequence مأتمت يحتوي عل Case Studies و Value",
                        "en": "We send an automated Email Sequence containing Case Studies and Value"
                    },
                    {
                        "ar": "نتصل بهم الاتفياً فوراً لحجز موعد",
                        "en": "Contact them immediately to book an appointment"
                    },
                    {
                        "ar": "لا نرسل محتوى، نتواصل فقط لمتابعة المبيعات",
                        "en": "We don't send content, we only communicate to follow up on sales"
                    }
                ],
                "insights": {
                    "نرسل Email Sequence مأتمت يحتوي عل Case Studies و Value": {
                        "ar": "أنت تطبق الـ B2B Marketing كما ينص الكتاب! سأقوم بتحسين معدلات ال Open/Click-Through لرفع نسبة تحولم إلى SQL (Sales Qualified Leads).",
                        "en": "You are doing B2B Marketing like the book says! I will improve your Open/Click-Through rates to increase your conversion rate to SQL (Sales Qualified Leads)."
                    },
                    "نتصل بهم الاتفياً فوراً لحجز موعد": {
                        "ar": "الاتصال السريع ممتاز، لكن قد يبدو 'Pushy' إِذا لم يكن ال Lead 'دافئاً'. سندمج الاتصال مع ال Email Drip لتحقيق التوازن.",
                        "en": "The speed dial is excellent, but it may sound 'pushy' if the lead is not 'warm'. We will combine Contact with Email Drip to achieve balance."
                    },
                    "لا نرسل محتوى، نتواصل فقط لمتابعة المبيعات": {
                        "ar": "المبيعات المباشرة في الاستشارات تبدو ك'تسول'. المستشار يجب أن يُطلب ولا يَطلب. المحتوى التعليمي هو ما يقلب الطاولة لصالحك.",
                        "en": "Direct sales in consulting sounds like 'begging'. The advisor should be requested and not requested. Educational content is what turns the tables in your favor."
                    }
                },
                "condition": (ans) => ans.q4
            },
            {
                "id": "q6",
                "label": {
                    "ar": "6. هل تستخدم ميزة ال Account-Based Marketing (ABM)؟",
                    "en": "6. Do you use Account-Based Marketing (ABM)?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعم، نبدد قائمة بالشركات المستهدفة ونوجه الإعلانات لمدرائها",
                        "en": "Yes, we run down a list of target companies and target ads to their managers"
                    },
                    {
                        "ar": "لا، نستهدف حسب المنصب والصناعة بشكل عام",
                        "en": "No, we target by position and industry in general"
                    },
                    {
                        "ar": "لا أعرف ما هو ال ABM",
                        "en": "I don't know what ABM is"
                    }
                ],
                "insights": {
                    "نعم، نبدد قائمة بالشركات المستهدفة ونوجه الإعلانات لمدرائها": {
                        "ar": "ال ABM الو السلاح النووي في الـ B2B. سأقوم بربط الداتا مع LinkedIn لضمان ضهور إعلاناتنا بشكل مخصص لكل شركة بحد ذاتها.",
                        "en": "ABM is the nuclear weapon in B2B. I will link the data with LinkedIn to ensure that our ads appear specifically for each company."
                    },
                    "لا، نستهدف حسب المنصب والصناعة بشكل عام": {
                        "ar": "الاستهداف العام يالدر الميزانية على شركات صغيرة أو لا تملك الميزانية. سنقوم بالانتقال لل ABM لتصويب الميزانية نحو ال (Big Fish).",
                        "en": "General targeting limits budget to small or no budget companies. We will move to ABM to target the budget towards the Big Fish."
                    },
                    "لا أعرف ما هو ال ABM": {
                        "ar": "الي استراتيجية تسويق موجهة لشركات بعينها (مثل: استهداف مدراء بنك الراجحي فقط). سأتولى إعدادها لك باحتراف.",
                        "en": "To a marketing strategy directed at specific companies (for example: targeting Al Rajhi Bank managers only). I will prepare it for you professionally."
                    }
                },
                "condition": (ans) => ans.q5
            },
            {
                "id": "q7",
                "label": {
                    "ar": "7. ما هي أهمية ال Case Studies (دراسات الحالة) في تسويقك؟",
                    "en": "7. What is the importance of Case Studies in your marketing?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "الي العمود الفقري لمبيعاتنا (تعرض الـ ROI الذي حققناه لعملائنا)",
                        "en": "To the backbone of our sales (exposing the ROI we have achieved to our customers)"
                    },
                    {
                        "ar": "لدينا بعض التقارير لكن لا نشتخدمها في الإعلان",
                        "en": "We have some reports but we don't use them in advertising"
                    },
                    {
                        "ar": "لا نملك Case Studies بسبب 'سرية البيانات'",
                        "en": "We do not have Case Studies due to 'data confidentiality'"
                    }
                ],
                "insights": {
                    "الي العمود الفقري لمبيعاتنا (تعرض الـ ROI الذي حققناه لعملائنا)": {
                        "ar": "ال Case Study الي ال Salesman الذي لا ينام. سنعمل منها (Video Snippets) ونعمل لها Retargeting لكل من زار الموقع.",
                        "en": "The Case Study to the Salesman who never sleeps. We will create video snippets and retargeting them for everyone who visits the site."
                    },
                    "لدينا بعض التقارير لكن لا نشتخدمها في الإعلان": {
                        "ar": "أنت تخفي أقوى سلاح لديك. سنقوم بصياغتها ك (Success Stories) ونضخها في LinkedIn لاختراق الشك اللدى العملاء.",
                        "en": "You are hiding your most powerful weapon. We will phrase them as Success Stories and inject them into LinkedIn to break through customer doubt."
                    },
                    "لا نملك Case Studies بسبب 'سرية البيانات'": {
                        "ar": "يمكن عمل Case Studies (Anonymized) بدون ذكر اسم الشركة المعنية، المهم هو ذكر الصناعة والـ ROI المحقق. هذا ضروري لبناء الثقة.",
                        "en": "Case Studies (Anonymized) can be done without mentioning the name of the company in question, what is important is to mention the industry and the achieved ROI. This is essential to build trust."
                    }
                },
                "condition": (ans) => ans.q6
            },
            {
                "id": "q8",
                "label": {
                    "ar": "8. كيف تدير تجربة ال Website بحيث يكون 'مؤهلاً لل B2B'؟",
                    "en": "8. How do you manage the website experience so that it is 'B2B-ready'?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "يحتوي على مدونة تخصصية (SEO)، وتوضيح لل Methodology الخاصة بنا",
                        "en": "It contains a specialized blog (SEO), and an explanation of our methodology"
                    },
                    {
                        "ar": "موقع بسيط (One Pager) يحتوي على خدماتنا فقط",
                        "en": "A simple website (One Pager) that contains only our services"
                    },
                    {
                        "ar": "لا نعتمد على الموقع كثيراً، العلاقات الشخصية الي الأهم",
                        "en": "We do not depend on the website much, personal relationships are the most important"
                    }
                ],
                "insights": {
                    "يحتوي على مدونة تخصصية (SEO)، وتوضيح لل Methodology الخاصة بنا": {
                        "ar": "موقع احترافي يبني ال Authority. سأقوم بربط (Lead Scoring) لمعرفة أي الزوار قرأ أكثر من 3 مقالات ليتم التواصل معه الاتفياً.",
                        "en": "A professional website that builds authority. I will link (Lead Scoring) to find out which visitors have read more than 3 articles so that we can contact them in Latvia."
                    },
                    "موقع بسيط (One Pager) يحتوي على خدماتنا فقط": {
                        "ar": "الـ B2B Buyer يحتاج لمعلومات أكثر من مجرد خدمات. يجب إضافة Case Studies, Team Profiles, و Thought Leadership articles.",
                        "en": "The B2B buyer needs more information than just services. Case Studies, Team Profiles, and Thought Leadership articles should be added."
                    },
                    "لا نعتمد على الموقع كثيراً، العلاقات الشخصية الي الأهم": {
                        "ar": "العلاقات تفتح الأبواب، لكن الموقع الو المكان الذي يزوره الـ CEO سراً لتأكيد سمعتك قبل توقيع العقد. سنجعله ملائماً.",
                        "en": "Relationships open doors, but the location is the place the CEO secretly visits to confirm your reputation before signing the contract. We'll make it fit."
                    }
                },
                "condition": (ans) => ans.q7
            },
            {
                "id": "q9",
                "label": {
                    "ar": "9. الل تستخدم 'ال Web Tracking' لمعرفة الشركات التي تتصفح موقعك حتى لو لم تتصل بك؟",
                    "en": "9. Do you use “Web Tracking” to know which companies browse your site even if they do not contact you?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعم، نشتخدم أدوات مثل Leadfeeder أو Clearbit",
                        "en": "Yes, we use tools like Leadfeeder or Clearbit"
                    },
                    {
                        "ar": "نستخدم Google Analytics فقط ولا نعرف أسماء الشركات",
                        "en": "We only use Google Analytics and do not know the names of the companies"
                    },
                    {
                        "ar": "لا نتتبع ذلك",
                        "en": "We don't track it"
                    }
                ],
                "insights": {
                    "نعم، نشتخدم أدوات مثل Leadfeeder أو Clearbit": {
                        "ar": "أنت تمتلك (X-Ray Vision) في تسويقك! سنوجه فريق ال Outbound للتواصل مع الشركات التي قرأت مقالاً بموقعنا اليوم.",
                        "en": "You have X-Ray Vision in your marketing! We will direct the Outbound team to contact companies that read an article on our website today."
                    },
                    "نستخدم Google Analytics فقط ولا نعرف أسماء الشركات": {
                        "ar": "GA يخبرك (كم شخص)، ولكن أدوات ال IP Tracking تخبرك (من الم). سأربط لك أداة لتكشف الوية الشركات الزائرة.",
                        "en": "GA tells you (how many people), but IP Tracking tools tell you (how many). I will link you to a tool to reveal the names of visiting companies."
                    },
                    "لا نتتبع ذلك": {
                        "ar": "هذا يعني أنك تفقد 98% من زوار موقعك الذين يبحثون فعلياً عن استشارة لكنهم ترددوا في تعبئة الفورم. سأقوم بحل المشكلة.",
                        "en": "This means that you lose 98% of your site visitors who are actually looking for advice but hesitate to fill out the form. I will solve the problem."
                    }
                },
                "condition": (ans) => ans.q8
            },
            {
                "id": "q10",
                "label": {
                    "ar": "10. ما الو حجم استثمارك الشهري في تسويق الـ B2B الاستشاري؟",
                    "en": "10. What is the size of your monthly investment in B2B marketing consultancy?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "أقل من 5,000$ (التركيز على LinkedIn Content و Google Search بسيط)",
                        "en": "Under $5,000 (focus on LinkedIn Content and Google Search is simple)"
                    },
                    {
                        "ar": "5,000$ إلى 15,000$ (بناء محتوى ABM واسع في السعودية)",
                        "en": "$5,000 to $15,000 (building extensive ABM content in Saudi Arabia)"
                    },
                    {
                        "ar": "أكثر من 15,000$ (سيطرة كاملة، Thought Leadership، و LinkedIn Account-Based Marketing)",
                        "en": "$15,000+ (Full Control, Thought Leadership, and LinkedIn Account-Based Marketing)"
                    }
                ],
                "insights": {
                    "أقل من 5,000$ (التركيز على LinkedIn Content و Google Search بسيط)": {
                        "ar": "سنركز الميزانية على ال Bottom-of-Funnel بوجل لاقتناص الباحثين الجاهزين للتعاقد, مع Lead Magnet واحد فعال.",
                        "en": "We will focus the budget on the Bottom-of-Funnel buggy to capture contract-ready researchers, with one effective Lead Magnet."
                    },
                    "5,000$ إلى 15,000$ (بناء محتوى ABM واسع في السعودية)": {
                        "ar": "مرحلة متقدمة! سندمج LinkedIn Ads لجلب الـ Leads (Top Funnel) و Google Retargeting للإغلاق (Bottom Funnel).",
                        "en": "Advanced stage! We will integrate LinkedIn Ads for Leads (Top Funnel) and Google Retargeting for Closes (Bottom Funnel)."
                    },
                    "أكثر من 15,000$ (سيطرة كاملة، Thought Leadership، و LinkedIn Account-Based Marketing)": {
                        "ar": "سأبني لك منظومة (B2B Demand Generation) تضخ أيميلات CEO’s مؤهلين يومياً لفريق المبيعات الخاص بك.",
                        "en": "I will build you a B2B Demand Generation system that pumps qualified CEO’s emails daily to your sales team."
                    }
                },
                "condition": (ans) => ans.q9
            }
        ]
    },
    "landing-pages": {
        "title": {
            "ar": "Landing Pages & CRO (صفحات الهبوط وتحسين التحويل)",
            "en": "Landing Pages & CRO (Landing Pages & Conversion Optimization)"
        },
        "questions": [
            {
                "id": "q1",
                "label": {
                    "ar": "1. ما هو هدف الأساسي من صفحة الهبوط التي تريد تصميمها؟",
                    "en": "1. What is the primary goal of the landing page you want to design?"
                },
                "type": "select",
                "options": [
                    {
                        "ar": "توليد عملاء محتملين (Lead Generation - B2B/Services)",
                        "en": "Lead Generation - B2B/Services"
                    },
                    {
                        "ar": "بيع منتج مباشر (Direct Response E-commerce)",
                        "en": "Direct Response E-commerce"
                    },
                    {
                        "ar": "التسجيل في ندوة أو دورة (Webinar/Course Registration)",
                        "en": "Registration for a seminar or course (Webinar/Course Registration)"
                    },
                    {
                        "ar": "تحميل تطبيق (App Install)",
                        "en": "Download the application (App Install)"
                    }
                ],
                "insights": {
                    "توليد عملاء محتملين (Lead Generation - B2B/Services)": {
                        "ar": "في ال Lead Gen، ال Trust هو أهم عنصر. ال Hero Section يجب أن يحتوي على (Value Proposition) قوية و (Social Proof) فوري لخفض الـ CPL.",
                        "en": "In the lead generation, trust is the most important element. The Hero Section must have a strong Value Proposition and an immediate Social Proof to lower the CPL."
                    },
                    "بيع منتج مباشر (Direct Response E-commerce)": {
                        "ar": "ال Direct Response يعتمد على (Urgency) والوضوح المطلق لتفاصيل المنتج (Benefits over Features) و (Risk Reversal) كالضمان.",
                        "en": "Direct Response relies on Urgency and absolute clarity of product details (Benefits over Features) and Risk Reversal as a guarantee."
                    },
                    "التسجيل في ندوة أو دورة (Webinar/Course Registration)": {
                        "ar": "النا نركز على ال (Curiosity Hook). ما السر الذي يكتشفونه في الWebinar؟ وإبراز مصداقية المدرب (Authority).",
                        "en": "We focus on the Curiosity Hook. What secret do they discover in the webinar? Highlighting the trainer’s credibility."
                    },
                    "تحميل تطبيق (App Install)": {
                        "ar": "صفحات تحميل التطبيقات تجب أن تكون مصممة لل Mobile First (Mobile-Only تقريباً) مع أزرار (Download on App Store) بمنتهى الوضوح.",
                        "en": "App download pages should be designed Mobile First (almost Mobile-Only) with clearly visible Download on App Store buttons."
                    }
                }
            },
            {
                "id": "q2",
                "label": {
                    "ar": "2. كيف تقيس نجاح صفحة الهبوط حالياً؟",
                    "en": "2. How do you currently measure the success of your landing page?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "عبر معدل التحويل (Conversion Rate - CVR)",
                        "en": "Via Conversion Rate (CVR)"
                    },
                    {
                        "ar": "عبر تكلفة الاستحواذ أو العميل (CPA / CPL)",
                        "en": "Via Cost Per Acquisition or Customer (CPA/CPL)"
                    },
                    {
                        "ar": "لا نقيس بدقة، نعتمد على 'الإحساس' بعدد الطلبات",
                        "en": "We do not measure accurately, we rely on the 'feel' of the number of requests"
                    }
                ],
                "insights": {
                    "عبر معدل التحويل (Conversion Rate - CVR)": {
                        "ar": "ال CVR هو المؤشر الصحيح لكفاءة الصفحة، لكن يجب دمجه مع ال CPA. سنقوم بعمل A/B Testing لرفع ال CVR بنسبة على الأقل 20%.",
                        "en": "CVR is the correct indicator of page efficiency, but it must be combined with CPA. We will conduct A/B testing to increase the CVR by at least 20%."
                    },
                    "عبر تكلفة الاستحواذ أو العميل (CPA / CPL)": {
                        "ar": "ال CPA منطقي، لكن قد تكون الإعلانات ممتازة والصفحة سيئة. سنفصل المقاييس لنعرف مقان الخلل بالضبط.",
                        "en": "CPA makes sense, but the ads may be great and the page may be bad. We will separate the metrics to know exactly where the defect is."
                    },
                    "لا نقيس بدقة، نعتمد على 'الإحساس' بعدد الطلبات": {
                        "ar": "ال 'إحساس' لا يبني بزنس أسكيل. سأقوم بربط Google Analytics 4 و Pixel / CAPI لتكون قراراتنا مبنية على Data 100%.",
                        "en": "The 'feeling' does not build a business skill. I will be linking Google Analytics 4 and Pixel / CAPI so that our decisions are 100% data based."
                    }
                },
                "condition": (ans) => ans.q1
            },
            {
                "id": "q3",
                "label": {
                    "ar": "3. ما هو معدل ارتداد الزوار (Bounce Rate) أو متوسط مدة البقاء في الصفحة؟",
                    "en": "3. What is the visitors’ bounce rate or average length of stay on the page?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "الزوار يخرجون بسرعة (أقل من 10 ثوانٍ)",
                        "en": "Visitors exit quickly (less than 10 seconds)"
                    },
                    {
                        "ar": "الزوار يتصفحون طويلاً لكن لا يشترون/يسجلون",
                        "en": "Visitors browse long but don't buy/register"
                    },
                    {
                        "ar": "لا أملك أدوات تتبع مثل Hotjar لمعرفة ذلك",
                        "en": "I don't have tracking tools like Hotjar to figure this out"
                    }
                ],
                "insights": {
                    "الزوار يخرجون بسرعة (أقل من 10 ثوانٍ)": {
                        "ar": "هناك (Mismatch) بين وعد الإعلان ومحتوى الصفحة (Hero Section). أو أن السرعة بطيئة جداً. سأقوم بإعادة اليكلة ال Header فوراً.",
                        "en": "There is a mismatch between the ad promise and the hero section. Or the speed is too slow. I will restore the header immediately."
                    },
                    "الزوار يتصفحون طويلاً لكن لا يشترون/يسجلون": {
                        "ar": "هذا يعني أن المحتوى مثير للاهتمام لكن ال Call to Action (CTA) ضعيف أو السعر يحتاج إلى (Value Justification). سنصمم Offer يستحيل رفضه.",
                        "en": "This means that the content is interesting but the call to action (CTA) is weak or the price needs (Value Justification). We will design an Offer that is impossible to refuse."
                    },
                    "لا أملك أدوات تتبع مثل Hotjar لمعرفة ذلك": {
                        "ar": "أنت تسير وأعينك مغمضة. سأقوم بتركيب Hotjar لرؤية (Heatmaps) وتسجيل حركة الزوار لنكتشف أين يترددون بالضبط.",
                        "en": "You walk with your eyes closed. I will install Hotjar to see (Heatmaps) and record visitors' movement to find out exactly where they are visiting."
                    }
                },
                "condition": (ans) => ans.q2
            },
            {
                "id": "q4",
                "label": {
                    "ar": "4. كيف تتعامل مع سرعة تحميل الصفحة (Page Speed)؟",
                    "en": "4. How do you deal with page loading speed?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "الصفحة سريعة جداً (تفتح في أقل من ثانيتين)",
                        "en": "The page is very fast (opens in less than 2 seconds)"
                    },
                    {
                        "ar": "الصفحة مليئة بالفيديوهات والصور وتستغرق أكثر من 4 ثوانٍ للتحميل",
                        "en": "The page is full of videos and photos and takes more than 4 seconds to load"
                    },
                    {
                        "ar": "نعتمد على سيرفرات جاهزة ولأ نعرف سرعتها الحقيقية",
                        "en": "We rely on ready-made servers and we do not know their true speed"
                    }
                ],
                "insights": {
                    "الصفحة سريعة جداً (تفتح في أقل من ثانيتين)": {
                        "ar": "ممتاز. كل ثانية تأخير تخسرك 7% من المبيعات. هذا يضمن لنا User Experience مثالياً.",
                        "en": "excellent. Every second of delay loses you 7% of sales. This guarantees us an ideal User Experience."
                    },
                    "الصفحة مليئة بالفيديوهات والصور وتستغرق أكثر من 4 ثوانٍ للتحميل": {
                        "ar": "العميل (خاصة في السناب والتيك توك) سيغلق الصفحة قبل أن تفتح! سنقوم بضغط الملفات واستخدام CDN (كمثل Cloudflare) لتطيير السرعة.",
                        "en": "The customer (especially on Snap and Tik Tok) will close the page before it opens! We'll compress the files and use a CDN (like Cloudflare) to speed up the speed."
                    },
                    "نعتمد على سيرفرات جاهزة ولأ نعرف سرعتها الحقيقية": {
                        "ar": "سأقوم بعمل Audit على ال Google PageSpeed Insights واصلاح كل أخطاء ال Core Web Vitals لضمان استجابة فورية.",
                        "en": "I will conduct a Google PageSpeed ​​Insights audit and fix all Core Web Vitals errors to ensure an immediate response."
                    }
                },
                "condition": (ans) => ans.q3
            },
            {
                "id": "q5",
                "label": {
                    "ar": "5. هل تستخدم (A/B Testing) لتحسين معدل التحويل (CRO)؟",
                    "en": "5. Do you use A/B Testing for Conversion Rate Optimization (CRO)?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعم، نختبر العناوين وال Offers باستمرار",
                        "en": "Yes, we constantly test titles and offers"
                    },
                    {
                        "ar": "اختبرنا في البداية فقط واستقرينا على نسخة واحدة",
                        "en": "We initially only tested and settled on one version"
                    },
                    {
                        "ar": "لا، نعتمد على صفحة واحدة منذ بنائها",
                        "en": "No, we have been relying on one page since its inception"
                    }
                ],
                "insights": {
                    "نعم، نختبر العناوين وال Offers باستمرار": {
                        "ar": "عقلية Growth Hacker أصلية! سأقوم باستخدام (Multivariate Testing) لأكتشاف ال Winning Combination في ال Headline + CTA.",
                        "en": "The Growth Hacker Mindset is authentic! I will use Multivariate Testing to discover the winning combination in Headline + CTA."
                    },
                    "اختبرنا في البداية فقط واستقرينا على نسخة واحدة": {
                        "ar": "سلوك المستخدمين يتغير، وال Ad Fatigue يمتد للصفحة أيضاً. ال Testing يجب أن يكون عملية مستمرة لتعظيم الـ ROAS.",
                        "en": "User behavior changes, and Ad Fatigue extends to the page as well. Testing should be an ongoing process to maximize ROAS."
                    },
                    "لا، نعتمد على صفحة واحدة منذ بنائها": {
                        "ar": "أنت تخلف المال على الطاولة. تغيير (عنوان واحد) قد يضاعف المبيعات 3 مرات دون زيادة ميزانية الإعلان. سأبني لك Testing Framework.",
                        "en": "You're leaving money on the table. Changing one title could triple sales without increasing the advertising budget. I will build a Testing Framework for you."
                    }
                },
                "condition": (ans) => ans.q4
            },
            {
                "id": "q6",
                "label": {
                    "ar": "6. في قسم ال Social Proof (الدليل الاجتماعي)، ماذا تعرض؟",
                    "en": "6. In the Social Proof section, what do you display?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "فيديوهات للعملاء (UGC) وتقييمات بأسماء حقيقية",
                        "en": "Real customer videos (UGC) and reviews"
                    },
                    {
                        "ar": "أرقام إحصائية (خدمنا +10,000 عميل)",
                        "en": "Statistical numbers (we served +10,000 clients)"
                    },
                    {
                        "ar": "نعرض تقييمات نصية بدون صور للعملاء",
                        "en": "We offer text reviews without images to customers"
                    }
                ],
                "insights": {
                    "فيديوهات للعملاء (UGC) وتقييمات بأسماء حقيقية": {
                        "ar": "هذا الو السلاح الأقوى في 2024. ال Testimonials المرئية تكسر أي حاجز للشك. سنجعلها قريبة من زر الدفع (CTA).",
                        "en": "This is the most powerful weapon in 2024. Visual Testimonials break any barrier of doubt. We'll make it close to the push button (CTA)."
                    },
                    "أرقام إحصائية (خدمنا +10,000 عميل)": {
                        "ar": "ال Authority بالأرقام ممتاز. سندمجها ب (Trust Badges) - شعارات شركات قبرى أو بوابات دفع معروفة لزيادة الموثوقية.",
                        "en": "Authority in numbers is excellent. We will combine it with Trust Badges - logos of well-known payment gateways or companies to increase reliability."
                    },
                    "نعرض تقييمات نصية بدون صور للعملاء": {
                        "ar": "الزائر اليوم يشك ფي النصوص (يعتقدها مزيفة). سنضيف فيديوهات أو لقطات شاشة من ال WhatsApp/Twitter ليشعر بالواقعية.",
                        "en": "Today's visitor doubts the texts (he thinks they are fake). We will add videos or screenshots from WhatsApp/Twitter to make it feel realistic."
                    }
                },
                "condition": (ans) => ans.q5
            },
            {
                "id": "q7",
                "label": {
                    "ar": "7. الل ال Call to Action (CTA) في موقعك واضح ومختلف لونه عن باقي الصفحة؟",
                    "en": "7. Is the Call to Action (CTA) on your site clear and different in color from the rest of the page?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعم، الزر (كبير، متباين، ويشرح ماذا سيحدث بعد النقر)",
                        "en": "Yes, the button (large, differentiated, and explains what happens after clicking)"
                    },
                    {
                        "ar": "الزر متناسق مع ألوان الموقع للحفاظ على التصميم (Aesthetic)",
                        "en": "The button is consistent with the site's colors to maintain the design (aesthetic)"
                    },
                    {
                        "ar": "لدينا عدة أزرار بخيارات مختلفة (اتصل بنا، اشترِ الآن، اقرأ المزيد)",
                        "en": "We have several buttons with different options (Contact Us, Buy Now, Read More)"
                    }
                ],
                "insights": {
                    "نعم، الزر (كبير، متباين، ويشرح ماذا سيحدث بعد النقر)": {
                        "ar": "تطبيق مثالي لقواعد ال UX/UI. سأجعل النص (Action-Oriented) مثل 'احصل على نسختك المجانية الآن' بدلاً من 'إرسال'.",
                        "en": "Perfect implementation of UX/UI rules. I'll make the text (Action-Oriented) something like 'Get your free copy now' instead of 'Submit'."
                    },
                    "الزر متناسق مع ألوان الموقع للحفاظ على التصميم (Aesthetic)": {
                        "ar": "الخطأ الذي يكلف الملايين. الزر يجب أن (يفقع) في عين الزائر (Contrast Color). سأقوم بتغييره للون مضاد للخلفية فوراً.",
                        "en": "A mistake that costs millions. The button should \"pop\" in the visitor's eye (Contrast Color). I will change it to a background color immediately."
                    },
                    "لدينا عدة أزرار بخيارات مختلفة (اتصل بنا، اشترِ الآن، اقرأ المزيد)": {
                        "ar": "الخيارات الكثيرة تخلق (Analysis Paralysis - شلل التحليل). صفحة الالبوط يجب أن تحوي الدفاً واحداً فقط (One Goal, One CTA). سأزيل التشتيت.",
                        "en": "Too many options create analysis paralysis. The landing page must contain only one goal (One Goal, One CTA). I will remove the distraction."
                    }
                },
                "condition": (ans) => ans.q6
            },
            {
                "id": "q8",
                "label": {
                    "ar": "8. كيف تتعامل مع نموذج تسجيل البيانات (Lead Form)؟",
                    "en": "8. How do you deal with the data registration form (Lead Form)?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نسأل من 2 إلى 3 معلومات فقط (الاسم، الرقم، الإيميل)",
                        "en": "We only ask for 2 to 3 pieces of information (name, number, email)"
                    },
                    {
                        "ar": "نسأل أسئلة كثيرة لتأكيد جدية العميل (Qualification)",
                        "en": "We ask many questions to confirm the client's seriousness (Qualification)"
                    },
                    {
                        "ar": "نستخدم Multi-step Form (نموذج متعدد الخطوات)",
                        "en": "We use Multi-step Form"
                    }
                ],
                "insights": {
                    "نسأل من 2 إلى 3 معلومات فقط (الاسم، الرقم، الإيميل)": {
                        "ar": "ممتاز لل Volume, لكن قد تكون الجودة أقل. سنقوم بربطه ب CRM ليقوم بتصفيتها الآلية (Lead Enrichment).",
                        "en": "Excellent for volume, but quality may be lower. We will connect it to the CRM for automated filtering (Lead Enrichment)."
                    },
                    "نسأل أسئلة كثيرة لتأكيد جدية العميل (Qualification)": {
                        "ar": "جيد لل Quality، لكن الـ CPL (تكلفة الLead) سترتفع. سنجعل الأسئلة الإضافية (Optional) أو نستخدم (Multi-step) لتخفيف الرهبة.",
                        "en": "Good for Quality, but CPL (Cost of Lead) will go up. We will make additional questions (optional) or use (multi-step) to ease the dread."
                    },
                    "نستخدم Multi-step Form (نموذج متعدد الخطوات)": {
                        "ar": "هذا الو السر العظيم في ال Lead Gen! الزائر يجيب على أسئلة بسيطة في البداية (ما الو مجالك؟)، وتلتزم نفسياً بإكمال باقي الفورم (Sunk Cost Fallacy).",
                        "en": "This is the great secret of Lead Gen! The visitor answers simple questions at the beginning (What is your field?), and is psychologically committed to completing the rest of the form (Sunk Cost Fallacy)."
                    }
                },
                "condition": (ans) => ans.q7
            },
            {
                "id": "q9",
                "label": {
                    "ar": "9. الل تستخدم (Urgency / Scarcity) لإجبار الزائر على أخذ إجراء فوري؟",
                    "en": "9. Do you use Urgency/Scarcity to force the visitor to take immediate action?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعم، بعداد تنازلي حقيقي أو عرض محدود الكمية",
                        "en": "Yes, with a real countdown timer or a limited quantity offer"
                    },
                    {
                        "ar": "نعم، بعداد وهمي يتجدد مع كل زائر",
                        "en": "Yes, with an imaginary counter that is renewed with every visitor"
                    },
                    {
                        "ar": "لا نستخدم الذه الأساليب",
                        "en": "We do not use these methods"
                    }
                ],
                "insights": {
                    "نعم، بعداد تنازلي حقيقي أو عرض محدود الكمية": {
                        "ar": "ال Scarcity الحقيقية تضاعف المبيعات. سنجعلها Sticky (ثابتة) في أعلى الصفحة لتبقى في ذهن المستخدم.",
                        "en": "The real Scarcity doubles sales. We will make it Sticky at the top of the page to stay in the user's mind."
                    },
                    "نعم، بعداد وهمي يتجدد مع كل زائر": {
                        "ar": "الزائر أصبح ذكياً፣ العداد الوهمي يدمر ال Trust بشكل كامل. سأزيله واستبدله ب (Limited Capacity) مثل 'نستقبل 5 عملاء فقط الشهر'.",
                        "en": "The visitor has become smart. The fake counter completely destroys the trust. I will remove it and replace it with (Limited Capacity) like 'We only receive 5 clients per month'."
                    },
                    "لا نستخدم الذه الأساليب": {
                        "ar": "أنت تعتمد على مزاج الزائر ليشتري. إضافة مكافأة (Fast-action Bonus) لمن يشتري في ال 15 دقيقة القادمة սتقلب موازين ال CVR.",
                        "en": "You depend on the visitor's mood to buy. Adding a Fast-action Bonus to anyone who buys in the next 15 minutes will tip the scales of the CVR."
                    }
                },
                "condition": (ans) => ans.q8
            },
            {
                "id": "q10",
                "label": {
                    "ar": "10. كيف تصمم تجربة الموبايل (Mobile Experience) لصفحتك؟",
                    "en": "10. How do you design the mobile experience for your page?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "الصفحة مصممة أساساً للموبايل (Mobile-First) مع Sticky CTA",
                        "en": "The page is designed primarily for mobile (Mobile-First) with Sticky CTA"
                    },
                    {
                        "ar": "الصفحة تتجاوب مع الموبايل (Responsive) لكن صممت على كمبيوتر",
                        "en": "The page is responsive to mobile phones, but it was designed on a computer"
                    },
                    {
                        "ar": "لا نركز على الموبايل التطبيق معقد على الشاشة الصغيرة",
                        "en": "We do not focus on mobile, the application is complicated on the small screen"
                    }
                ],
                "insights": {
                    "الصفحة مصممة أساساً للموبايل (Mobile-First) مع Sticky CTA": {
                        "ar": "80%-90% من ترافيك السوشيال ميديا الو Mobile. أنت في المسار الصحيح. سأركز على तحسين ال Checkout ليكون بنقرة واحدة (Apple Pay).",
                        "en": "80%-90% of social media traffic is mobile. You are on the right track. I will focus on Hussein Checkout to be one click (Apple Pay)."
                    },
                    "الصفحة تتجاوب مع الموبايل (Responsive) لكن صممت على كمبيوتر": {
                        "ar": "ال Responsive ليس كافياً. ترتيب العناصر قد يكون سيئاً على الهاتف. سنعيد اليكلة ال Mobile View ليظهر ال CTA بدون Scroll.",
                        "en": "Responsive is not enough. Items may be poorly arranged on the phone. We will reshape the Mobile View so that the CTA appears without the scroll."
                    },
                    "لا نركز على الموبايل التطبيق معقد على الشاشة الصغيرة": {
                        "ar": "أنت تحرق ميزانيتك! إعلانات TikTok/Snap/Insta كلالا من الواتف. սأعيد تبسيط الصفحة (Decluttering) لتكون مثل تطبيق مريح.",
                        "en": "You're burning your budget! TikTok/Snap/Insta ads from your phone. The page has been re-simplified (Decluttering) to be like a convenient application."
                    }
                },
                "condition": (ans) => ans.q9
            }
        ]
    },
    "digital-auditing": {
        "title": {
            "ar": "Digital Auditing (التدقيق الرقمي للحملات)",
            "en": "Digital Auditing"
        },
        "questions": [
            {
                "id": "q1",
                "label": {
                    "ar": "1. ما هو الدافع الرئيسي لطلبك لخدمة التدقيق الرقمي (Digital Audit)؟",
                    "en": "1. What is the main motivation for your request for Digital Audit service?"
                },
                "type": "select",
                "options": [
                    {
                        "ar": "الحملات تصرف ميزانية عالية ولا تحقق المبيعات المطلوبة (Low ROAS)",
                        "en": "Campaigns spend a high budget and do not achieve the required sales (Low ROAS)"
                    },
                    {
                        "ar": "تكلفة الاستحواذ على العميل (CPA) ارتفعت فجأة بشكل جنوني",
                        "en": "Your cost per customer acquisition (CPA) has suddenly skyrocketed"
                    },
                    {
                        "ar": "نخطط للتوسع (Scaling) ونريد التأكد من جاهزية البنية التحتية",
                        "en": "We are planning to expand (scaling) and want to make sure the infrastructure is ready"
                    },
                    {
                        "ar": "البيانات غير متطابقة (Discrepancy) بين إعلانات المنصات والمبيعات الفعلية",
                        "en": "Data mismatch (Discrepancy) between platform ads and actual sales"
                    }
                ],
                "insights": {
                    "الحملات تصرف ميزانية عالية ولا تحقق المبيعات المطلوبة (Low ROAS)": {
                        "ar": "المشكلة غالباً في (الاستهداف/Targeting) أو أن (الرسالة الإعلانية/Creative) لا تطابق نية البحث. سأقوم ب Audit شامل لل Search Terms وال Asset Groups.",
                        "en": "The problem is often in (Targeting) or that (Creative Advertising Message) does not match the search intent. I will conduct a comprehensive audit of Search Terms and Asset Groups."
                    },
                    "تكلفة الاستحواذ على العميل (CPA) ارتفعت فجأة بشكل جنوني": {
                        "ar": "هذا يشير إلى (Ad Fatigue) أو تداخل في ال Audiences. سأحلل ال Frequency Rate و Auction Insights لمعرفة من يسرق حصتك في السوق.",
                        "en": "This indicates Ad Fatigue or interference in the Audiences. I will analyze Frequency Rate and Auction Insights to find out who is stealing your market share."
                    },
                    "نخطط للتوسع (Scaling) ونريد التأكد من جاهزية البنية التحتية": {
                        "ar": "خطوة ذكية جداً! لا يمكن عمل Scaling لحملات ضعيفة الأساس. سأراجع ال Account Structure و Conversion Tracking لضمان توسع صحي.",
                        "en": "Very smart move! Scaling cannot be done for poorly-founded campaigns. I will review Account Structure and Conversion Tracking to ensure healthy expansion."
                    },
                    "البيانات غير متطابقة (Discrepancy) بين إعلانات المنصات والمبيعات الفعلية": {
                        "ar": "الذه مشكلة في ال (Attribution) و Tracking. سأقوم بالتدقيق في إعدادات GTM و Meta Pixel/CAPI و Google Ads Conversion Tags.",
                        "en": "This is a problem with Attribution and Tracking. I'll be checking the GTM, Meta Pixel/CAPI, and Google Ads Conversion Tags settings."
                    }
                }
            },
            {
                "id": "q2",
                "label": {
                    "ar": "2. هل تستخدم Server-Side Tracking (Conversions API)؟",
                    "en": "2. Are you using Server-Side Tracking (Conversions API)?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعم، قمنا بتركيبه مؤخراً",
                        "en": "Yes, we installed it recently"
                    },
                    {
                        "ar": "لا، نعتمد على Pixel المتصفح العادي",
                        "en": "No, we rely on the regular Pixel browser"
                    },
                    {
                        "ar": "لا أعرف ما هو Server-Side Tracking",
                        "en": "I don't know what Server-Side Tracking is"
                    }
                ],
                "insights": {
                    "نعم، قمنا بتركيبه مؤخراً": {
                        "ar": "ممتاز. المرحلة التالية في ال Audit الي التأكد من (Event Match Quality) و (Deduplication) لضمان عدم تضخم مبيعات المنصات الوهمية.",
                        "en": "excellent. The next stage in the audit is to ensure (Event Match Quality) and (Deduplication) to ensure that sales of fake platforms are not inflated."
                    },
                    "لا، نعتمد على Pixel المتصفح العادي": {
                        "ar": "بيكسل المتصفح يفقد بين 20% و 40% من بيانات (iOS/Adblockers). خوارزميات إعلاناتك تعمل شبه عمياء. سأضع تفعيل ال CAPI كأولوية قصوى في تقريري.",
                        "en": "Browser pixel loses between 20% and 40% of data (iOS/Adblockers). Your advertising algorithms work almost blindly. I will make implementing CAPI a top priority in my report."
                    },
                    "لا أعرف ما هو Server-Side Tracking": {
                        "ar": "الو الحل الجذري لمشكلة حجب أبل للبيانات (iOS 14+). بدونه، المنصات لا تعرف من اشترى، مما يرفع ال CPA. سأتكفل بشرحه وتنفيذه لك.",
                        "en": "Here is the radical solution to the problem of Apple blocking data (iOS 14+). Without it, exchanges don't know who bought, which raises the CPA. I will explain and implement it for you."
                    }
                },
                "condition": (ans) => ans.q1
            },
            {
                "id": "q3",
                "label": {
                    "ar": "3. كيف تدير استراتيجية المزايدة (Bidding Strategy) في Google Ads حالياً؟",
                    "en": "3. How do you currently manage your bidding strategy in Google Ads?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نستخدم Target ROAS أو Target CPA (Value/Conversion-based)",
                        "en": "We use Target ROAS or Target CPA (Value/Conversion-based)"
                    },
                    {
                        "ar": "نستخدم Maximize Clicks أو Manual CPC",
                        "en": "We use Maximize Clicks or Manual CPC"
                    },
                    {
                        "ar": "نعتمد على توصيات جوجل (Auto-apply Recommendations) بشكل أعمى",
                        "en": "We rely blindly on Google Auto-apply Recommendations"
                    }
                ],
                "insights": {
                    "نستخدم Target ROAS أو Target CPA (Value/Conversion-based)": {
                        "ar": "استراتيجية صحيحة، لكن سأراجع الل (Target) الو الرقم الذي يحقق لك أرباحاً صافية مع خصم تكاليف الشحن والمنتج؟ (Profit-driven Bidding).",
                        "en": "Correct strategy, but I will review Target and what number will bring you net profits, deducting shipping and product costs? (Profit-driven Bidding)."
                    },
                    "نستخدم Maximize Clicks أو Manual CPC": {
                        "ar": "Max Clicks يأتي بزوار ممتازين في استنزاف الميزانية ولكنهم لا يشترون. سأضع خطة انتقال آمنة إلى Smart Bidding بعد تصليح الـ Conversions.",
                        "en": "Max Clicks brings in excellent budget draining visitors but they don't buy. I will make a safe transition plan to Smart Bidding after the Conversions are fixed."
                    },
                    "نعتمد على توصيات جوجل (Auto-apply Recommendations) بشكل أعمى": {
                        "ar": "هذا يحرق أموالك! بعض التوصيات مفيدة، لكن تطبيق 'Broad Match' مثلاً بدون Negative Keywords كافية يدمر الـ ROI. սأوقف ال Auto-apply فوراً.",
                        "en": "This burns your money! Some recommendations are useful, but applying 'Broad Match' for example without enough Negative Keywords destroys the ROI. սStop Auto-apply immediately."
                    }
                },
                "condition": (ans) => ans.q2
            },
            {
                "id": "q4",
                "label": {
                    "ar": "4. ما هو وضع حساب إعلانات منصات التواصل (Meta, TikTok, Snapchat)؟",
                    "en": "4. What is the status of the social media advertising account (Meta, TikTok, Snapchat)?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "هيكل منظم (CBO/ABO, Prospecting vs Retargeting)",
                        "en": "Regulated Structure (CBO/ABO, Prospecting vs Retargeting)"
                    },
                    {
                        "ar": "كل 캠بين يطلق بشكل عشوائي وحسب المنتج (Messy Structure)",
                        "en": "Each 캠 is released randomly and based on the product (Messy Structure)"
                    },
                    {
                        "ar": "نعتمد على ميزانية صغيرة بزر (Boost Post) فقط",
                        "en": "We rely on a small budget with only the Boost Post button"
                    }
                ],
                "insights": {
                    "هيكل منظم (CBO/ABO, Prospecting vs Retargeting)": {
                        "ar": "اليكل قوي. التدقيق النا سيركز على (Audience Overlap) و (Creative Testing Framework) لمعرفة لماذا ال CPA مرتفع رغم صحة هيكل.",
                        "en": "The yoke is strong. Our audit will focus on (Audience Overlap) and (Creative Testing Framework) to find out why the CPA is high despite the correct structure."
                    },
                    "كل 캠بين يطلق بشكل عشوائي وحسب المنتج (Messy Structure)": {
                        "ar": "العشوائية تخلق (Learning Phase Reset) مستمر. سأعيد اليكلة الحساب إلى (Consolidated Account Structure) لتجذية الخوارزمية بشكل أفضل.",
                        "en": "Randomness creates a continuous Learning Phase Reset. I will reconfigure the account to Consolidated Account Structure to streamline the algorithm better."
                    },
                    "نعتمد على ميزانية صغيرة بزر (Boost Post) فقط": {
                        "ar": "ال Boost يأتي بإعجابات وليس مبيعات. سأبني لك Ads Manager حقيقي في التقرير النهائي يستهدف الدف (Purchase) فقط.",
                        "en": "Boost comes with likes, not sales. I will build you a real Ads Manager in the final report targeting Purchase only."
                    }
                },
                "condition": (ans) => ans.q3
            },
            {
                "id": "q5",
                "label": {
                    "ar": "5. كيف تعيد استهداف زوارك (Retargeting)؟",
                    "en": "5. How do you retarget your visitors?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "بناءً على السلوك (DPA، زار السلة، قام بالضافة للتشيك أوت)",
                        "en": "Based on behavior (DPA, visited cart, added to checkout)"
                    },
                    {
                        "ar": "إعلان واحد يظالر لكل من زار الموقع بشكل عام (All Website Visitors)",
                        "en": "One ad for everyone who visited the site in general (All Website Visitors)"
                    },
                    {
                        "ar": "لا نتعب في ال Retargeting لأننا نبحث عن زوار جدد",
                        "en": "We don't get tired of retargeting because we are looking for new visitors"
                    }
                ],
                "insights": {
                    "بناءً على السلوك (DPA، زار السلة، قام بالضافة للتشيك أوت)": {
                        "ar": "ال Segmentation الصحيح. ال Audit սيراجع ال (Lookback Windows) 3 أيام vs 14 يوم لمنع ال Ad Fatigue ولضمان ال Frequency المناسب.",
                        "en": "The correct Segmentation. The Windows Lookback Audit takes 3 days versus 14 days to prevent Ad Fatigue and ensure proper frequency."
                    },
                    "إعلان واحد يظالر لكل من زار الموقع بشكل عام (All Website Visitors)": {
                        "ar": "هذا يهدر الميزانية على شخص دخل بالخطأ وغادر فوراً. سأضع خطة (Exclusions) لل Bounce Rate و (Inclusions) لل High Intent Users فقط.",
                        "en": "This wastes the budget on someone who entered by mistake and left immediately. I will set a plan (Exclusions) for Bounce Rate and (Inclusions) for High Intent Users only."
                    },
                    "لا نتعب في ال Retargeting لأننا نبحث عن زوار جدد": {
                        "ar": "أنت تترك 70% من المبيعات المحتملة للمنافسين! الـ ROAS الأعلى دائماً يأتي من ال Retargeting. سأعطيها أولوية في تقدير النمو.",
                        "en": "You are leaving 70% of potential sales to competitors! The highest ROAS always comes from retargeting. I would give it priority in estimating growth."
                    }
                },
                "condition": (ans) => ans.q4
            },
            {
                "id": "q6",
                "label": {
                    "ar": "6. الل تقوم بمراجعة Google Analytics 4 (GA4) بشكل دوري؟",
                    "en": "6. Do you review Google Analytics 4 (GA4) periodically?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعم، لدينا Custom Events و Ecommerce Tracking يعمل بدقة",
                        "en": "Yes, our Custom Events and Ecommerce Tracking works fine"
                    },
                    {
                        "ar": "نستخدمه फقط لمعرفة عدد الزوار وليس المبيعات",
                        "en": "We only use it to know the number of visitors, not sales"
                    },
                    {
                        "ar": "لم نقم بإعداد GA4 بشكل صحيح",
                        "en": "We have not set up GA4 correctly"
                    }
                ],
                "insights": {
                    "نعم، لدينا Custom Events و Ecommerce Tracking يعمل بدقة": {
                        "ar": "ممتاز. ال Audit سيشمل مراجعة ال (Attribution Models) Data-Driven في GA4 لمعرفة ال Channel التي تبدأ رحلة الشراء وليس فقط التي تغلقها.",
                        "en": "excellent. The audit will include reviewing the Attribution Models Data-Driven in GA4 to find out which channel begins the purchasing journey and not just the channel that closes it."
                    },
                    "نستخدمه फقط لمعرفة عدد الزوار وليس المبيعات": {
                        "ar": "الزوار بدون مبيعات لا قيمة لهم البزنس. سأقوم في تقريري بتوضيح خطوات ربط ال Purchase Event لتصبح الأرقام ذات دلالة مالية.",
                        "en": "Visitors without sales are worthless to the business. In my report, I will explain the steps to link the Purchase Event so that the numbers become financially significant."
                    },
                    "لم نقم بإعداد GA4 بشكل صحيح": {
                        "ar": "أنت تفتقد لل (Source of Truth - مصدر الحقيقة). سأبني لك أيكوسيستم تتبع متكأمل باستخدام Google Tag Manager لضمان صحة الداتا.",
                        "en": "You are missing (Source of Truth). I will build you an integrated tracking ecosystem using Google Tag Manager to ensure the authenticity of the data."
                    }
                },
                "condition": (ans) => ans.q5
            },
            {
                "id": "q7",
                "label": {
                    "ar": "7. ما الي نسبة ال Click-Through Rate (CTR) التي تحققها إعلاناتك الناجحة؟",
                    "en": "7. What percentage of Click-Through Rate (CTR) do your successful ads achieve?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "أعلى من 2% في السوشيال و 10% في جوجل",
                        "en": "Higher than 2% on social media and 10% on Google"
                    },
                    {
                        "ar": "بين 0.5% و 1% (النقرات ضعيفة)",
                        "en": "Between 0.5% and 1% (weak clicks)"
                    },
                    {
                        "ar": "لا نعرف كيف نقرأ ال CTR أو لماذا هو مهم",
                        "en": "We don't know how to read the CTR or why it is important"
                    }
                ],
                "insights": {
                    "أعلى من 2% في السوشيال و 10% في جوجل": {
                        "ar": "ال Creatives عندك ممتازة (Hook قوي). المشكلة النا ستكون في ال Landing Page Conversion Rate. هذا الو مقان التدقيق الأساسي.",
                        "en": "Your creatives are excellent (strong hook). Our problem will be in the Landing Page Conversion Rate. This is the primary audit location."
                    },
                    "بين 0.5% و 1% (النقرات ضعيفة)": {
                        "ar": "هذا عارض ضعف ال (Ad Copy) أو أن ال Offer ليس جذاباً. سأراجع ال Copywriting و ال Angles التسويقية المستخدمة.",
                        "en": "This is a symptom of poor Ad Copy or that the Offer is not attractive. I will review the copywriting and marketing angles used."
                    },
                    "لا نعرف كيف نقرأ ال CTR أو لماذا هو مهم": {
                        "ar": "ال CTR المرتفع يخفض تكلفة الإعلان (CPM/CPC) بشكل جنوني لأن الخوارزمية تكافئ الإعلان الجيد. سنﺿعه في لوحة ال KPIs.",
                        "en": "A high CTR lowers your advertising cost (CPM/CPC) like crazy because the algorithm rewards good advertising. We will put it in the KPIs board."
                    }
                },
                "condition": (ans) => ans.q6
            },
            {
                "id": "q8",
                "label": {
                    "ar": "8. الل تستخدم ال Lookalike Audiences (الجماهير المشابهة) في Meta؟",
                    "en": "8. Do you use Lookalike Audiences in Meta?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعم، مبنية على (أعلى العملاء LTV) أو مشترين سابقين",
                        "en": "Yes, based on (highest LTV customers) or previous buyers"
                    },
                    {
                        "ar": "نستخدمالا مبنية على (متفاعلين على انستجرام)",
                        "en": "We use data based on (interactors on Instagram)"
                    },
                    {
                        "ar": "لا نستخدمها، نعتمد على ال Broad (الاستهداف المفتوح) فقط",
                        "en": "We do not use it, we rely on broad (open targeting) only"
                    }
                ],
                "insights": {
                    "نعم، مبنية على (أعلى العملاء LTV) أو مشترين سابقين": {
                        "ar": "ال Seeds ممتازة. التدقيق سيتأكد من عدم تداخل الذه الجماهير (Audience Overlap) مع حملات ال Retargeting التي ترفع ال CPA.",
                        "en": "The seeds are excellent. The audit will ensure that audience overlap does not interfere with retargeting campaigns that increase CPA."
                    },
                    "نستخدمها مبنية على (متفاعلين على انستجرام)": {
                        "ar": "المتفاعلون في إنستجرام عادة يكونون 'لايكات' بدون قوة شرائية. سنحول ال Lookalike ليكون مبنياً على (Add to Cart / Purchase).",
                        "en": "Interactors on Instagram are usually 'likes' with no purchasing power. We will convert Lookalike to be based on (Add to Cart / Purchase)."
                    },
                    "لا نستخدمها، نعتمد على ال Broad (الاستهداف المفتوح) فقط": {
                        "ar": "ال Broad ممتاز في الخوارزميات الجديدة, لكنه يحتاج Creative قوي جداً يعمل كفلتر. سنقوم بإيجاد الतوازن بين Broad و LAL.",
                        "en": "Broad is excellent in new algorithms, but it requires a very strong creative function to act as a filter. We will find the balance between Broad and LAL."
                    }
                },
                "condition": (ans) => ans.q7
            },
            {
                "id": "q9",
                "label": {
                    "ar": "9. كيف تعرف أي قناة تسويقية تجਲب العائد الأكبر لك (Google vs Meta vs Snap)؟",
                    "en": "9. How do you know which marketing channel will bring you the greatest return (Google vs Meta vs Snap)?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "لدينا أداة Attribution (مثل Triple Whale / Northbeam) أو بنينا المعادلة في GA4",
                        "en": "We have an Attribution tool (eg Triple Whale / Northbeam) or we built the equation in GA4"
                    },
                    {
                        "ar": "نعتمد على الأرقام الداخلية في كل منصة (Ads Manager)",
                        "en": "We rely on internal numbers in each platform (Ads Manager)."
                    },
                    {
                        "ar": "لا نعرف، نحن نضخ الميزانية فيهم جميعاً ونقيس المبيعات الكلية",
                        "en": "We don't know, we pump the budget into all of them and measure the total sales"
                    }
                ],
                "insights": {
                    "لدينا أداة Attribution (مثل Triple Whale / Northbeam) أو بنينا المعادلة في GA4": {
                        "ar": "هذا الو التسويق المنيع. سيكون ال Audit مبنياً على تحسين (Marginal CPA) و (MER - Marketing Efficiency Ratio).",
                        "en": "This is impenetrable marketing. The audit will be based on improving (Marginal CPA) and (MER - Marketing Efficiency Ratio)."
                    },
                    "نعتمد على الأرقام الداخلية في كل منصة (Ads Manager)": {
                        "ar": "كل منصة تنਸب الفضل لنفسالا (Over-reporting). عميل شاهد إعلان سناب واشترى من جوجل، الاثنان սيسجلان മبيعة. سأحل أزمة ال Double Tracking.",
                        "en": "Each platform takes credit for Over-reporting. A customer saw a Snap ad and bought from Google, both recording a sale. I will solve the double tracking problem."
                    },
                    "لا نعرف، نحن نضخ الميزانية فيهم جميعاً ونقيس المبيعات الكلية": {
                        "ar": "ال MER جيد، لكن بدون معرفة القناة الرابحة، 안ت لا تستطيع ال Scale بأمان. سأضع خطة ل Measurement Framework واضح.",
                        "en": "MER is good, but without knowing the winning channel, you cannot scale safely. I will plan a clear Measurement Framework."
                    }
                },
                "condition": (ans) => ans.q8
            },
            {
                "id": "q10",
                "label": {
                    "ar": "10. بعد أيجاد أماكن الخلل بالAudit، ما الي خطتك التالية؟",
                    "en": "10. After finding the faults with Audit, what is your next plan?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "أريد تنفيذ التوصيات فوراً لإنقاذ الميزانية المالدرة",
                        "en": "I want to implement the recommendations immediately to save the money budget"
                    },
                    {
                        "ar": "أريد التقرير ليقوم فريقي الداخلي بتنفيذه",
                        "en": "I want the report for my internal team to implement"
                    },
                    {
                        "ar": "أريد خطة Scaling شاملة بعد إيجاد الحلول",
                        "en": "I want a comprehensive scaling plan after finding solutions"
                    }
                ],
                "insights": {
                    "أريد تنفيذ التوصيات فوراً لإنقاذ الميزانية المالدرة": {
                        "ar": "سأجالز لك ال Action Plan بترتيب (أولويات ال Impact) لنقوم بإيقاف النزيف المالي في اليوم الأول بعد الAudit.",
                        "en": "I will discuss the Action Plan with you in order of (impact priorities) so that we can stop the financial bleeding on the first day after the audit."
                    },
                    "أريد التقرير ليقوم فريقي الداخلي بتنفيذه": {
                        "ar": "سأقدم لك ملفاً شاملاً يحتوي على Screenshots ولينكات ولوم فيديو تفصيلي لفريقك ليتسنى لالم تطبیق التعديلات بوضوح.",
                        "en": "I will provide you with a comprehensive file containing screenshots, links, and a detailed video tutorial for your team so that you can clearly implement the modifications."
                    },
                    "أريد خطة Scaling شاملة بعد إيجاد الحلول": {
                        "ar": "ال Audit الي الخطوة الأولى. بعدها سأتولى إدارة الحساب بعقلية ال (Performance Partner) للوصول بأرقأمك ل8 أضعاف الـ ROAS.",
                        "en": "The audit is the first step. Then I will manage the account with a Performance Partner mentality to reach your numbers to 8 times the ROAS."
                    }
                },
                "condition": (ans) => ans.q9
            }
        ]
    },
    "medical": {
        "title": {
            "ar": "Medical & Healthcare (الخدمات الطبية والعيادات)",
            "en": "Medical & Healthcare (Medical Services and Clinics)"
        },
        "questions": [
            {
                "id": "q1",
                "label": {
                    "ar": "1. ما هو نوع التخصص الطبي لديك الذي تريد التسويق له؟",
                    "en": "1. What type of medical specialty do you have that you want to market?"
                },
                "type": "select",
                "options": [
                    {
                        "ar": "عيادات تجميل وجلدية وليزر (Aesthetics & Derma)",
                        "en": "Aesthetics & Derma clinics"
                    },
                    {
                        "ar": "طب أسنان وتركيبات (Dental Clinics)",
                        "en": "Dental Clinics"
                    },
                    {
                        "ar": "عيادات عامة وتخصصیة (أطفال، باطنية، ألم)",
                        "en": "General and specialized clinics (children, internal medicine, pain)"
                    },
                    {
                        "ar": "مراكز رقاية وتغذية (Wellness & Diet)",
                        "en": "Wellness & Diet centers"
                    }
                ],
                "insights": {
                    "عيادات تجميل وجلدية وليزر (Aesthetics & Derma)": {
                        "ar": "هذا المجال مبني على ال (Social Proof) وال Before/After. تيك توك واسناب الما المكان للوعي، وجوجل لاقتناص 'أفضل عيادة تجميل بالرياض'.",
                        "en": "This field is based on (Social Proof) and Before/After. Tik Tok and Snapchat are the place to raise awareness, and Google to seize the 'best beauty clinic in Riyadh'."
                    },
                    "طب أسنان وتركيبات (Dental Clinics)": {
                        "ar": "ابتسامة الوليوود وزراعة الأسنان (High-ticket). نحتاج بنا ال Lead Gen المبني على سمعة الطبيب (Personal Branding) عبر Google Search.",
                        "en": "Hollywood smile and dental implants (High-ticket). We need a Lead Gen based on the doctor’s reputation (Personal Branding) via Google Search."
                    },
                    "عيادات عامة وتخصصیة (أطفال، باطنية، ألم)": {
                        "ar": "الحاجة ہنا (ملحة). لا يوجد 'ترفيه'. علينا السيطرة على خرائط جوجل (Google My Business) و Local Search.",
                        "en": "The need is here (urgent). There is no 'entertainment'. We have to control Google Maps (Google My Business) and Local Search."
                    },
                    "مراكز رقاية وتغذية (Wellness & Diet)": {
                        "ar": "ال Pain Point النا يطلب تشجيعاً مستمراً. حملات ال Video (التي تبيع النتيجة وليس الدايت) مع Email Automations تضمن استمرار العميل.",
                        "en": "Our Pain Point requires constant encouragement. Video campaigns (that sell the result, not the diet) with Email Automations ensure customer continuity."
                    }
                }
            },
            {
                "id": "q2",
                "label": {
                    "ar": "2. كيف تواجه سياسات الرفض الصارمة (Ad Rejections) من جوجل وميتا للصور الطبية؟",
                    "en": "2. How do you face Google and Meta's strict Ad Rejections policies for medical images?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعاني من حظر حساباتنا باستمرار",
                        "en": "We are constantly getting our accounts banned"
                    },
                    {
                        "ar": "نستخدم صوراً كارتونية أو نصوصاً لتجنب الرفض",
                        "en": "We use cartoon images or text to avoid rejection"
                    },
                    {
                        "ar": "نعرف قواعد ال (Personal Attributes) ولدينا مسار معتمد للصور",
                        "en": "We know the rules of Personal Attributes and have an approved path for images"
                    }
                ],
                "insights": {
                    "نعاني من حظر حساباتنا باستمرار": {
                        "ar": "ميتا تجن من ذكر العيوب الشخصية (Personal Attributes - مثل 'الل تعاني من حب الشباب؟'). سأكتب لك Copy يمتثل للسياسات ويجلب مبيعات بدون خطر.",
                        "en": "Mita gets mad at mentioning personal faults (Personal Attributes - like 'Who suffers from acne?'). I will write you a copy that complies with policies and brings in sales without the risk."
                    },
                    "نستخدم صوراً كارتونية أو نصوصاً لتجنب الرفض": {
                        "ar": "الصور المزيفة لا تبني ال Trust في المجال الطبي. سأعلمك كيف تستحدم صوراً حقيقية بزوايا (Angles) مقبولة لدى الخوارزميات.",
                        "en": "Fake photos do not build trust in the medical field. I will teach you how to use real images with angles acceptable to the algorithms."
                    },
                    "نعرف قواعد ال (Personal Attributes) ولدينا مسار معتمد للصور": {
                        "ar": "هذا يعكس نضجاً إعلانياً ممتازاً. سننتقل مباشرة إلى تحسين تجربة ما بعد النقرة في ال Landing Page المعقمة طبياً.",
                        "en": "This reflects excellent advertising maturity. We'll jump right into improving the post-click experience on the medically sanitized landing page."
                    }
                },
                "condition": (ans) => ans.q1
            },
            {
                "id": "q3",
                "label": {
                    "ar": "3. كيف تقوم بجدولة المواعيد للمرضى الجدد من الإعلانات؟",
                    "en": "3. How do you schedule appointments for new patients from ads?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "استقبالـ Leads في الواتساب والكول սنتر يتصل بهم",
                        "en": "Receiving Leads on WhatsApp and calling them"
                    },
                    {
                        "ar": "نظام حجز مواعيد مباشر عبر الموقع (Online Booking)",
                        "en": "Direct appointment booking system via the website (Online Booking)"
                    },
                    {
                        "ar": "رسائل في الإنستجرام فقط",
                        "en": "Messages on Instagram only"
                    }
                ],
                "insights": {
                    "استقبالـ Leads في الواتساب والكول սنتر يتصل بهم": {
                        "ar": "هذا يعمل ജيداً إذا كان الرد خلال 5 دقائق. إذا تأخر، يبرد الLead ويذهب لعيادة أخرى. سأركب لك أتمتة الواتساب الفورية.",
                        "en": "This only works if you respond within 5 minutes. If he is late, the lead cools down and goes to another clinic. I will install instant WhatsApp automation for you."
                    },
                    "نظام حجز مواعيد مباشر عبر الموقع (Online Booking)": {
                        "ar": "هذا الو ال Scale! بربط هذا النظام ب (Google Analytics 4)، սتعرف أي كلمة معينة جلبت حجزاً فعلياً لتضأعف ميزانيتها.",
                        "en": "This is the scale! By linking this system to Google Analytics 4, it knows which specific keyword brought in an actual booking to double its budget."
                    },
                    "رسائل في الإنستجرام فقط": {
                        "ar": "ال DM يكلف الكثير من وقت المرضات وليس قابلاً للتتبع المالي الدقيق. سنحول هذا الترافيك إلى مسار Lead Gen دقيق يفلتر الجادين.",
                        "en": "DM costs a lot of patients' time and is not strictly financially traceable. We will turn this traffic into an accurate lead generation path that filters out serious buyers."
                    }
                },
                "condition": (ans) => ans.q2
            },
            {
                "id": "q4",
                "label": {
                    "ar": "4. ما الي أستراتيجيتك للسيطرة على جوجل مابس (Google My Business) لعيادتك؟",
                    "en": "4. What is your strategy for controlling Google My Business for your clinic?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "لدينا حساب ولدينا تقييمات ممتازة ومستمرة",
                        "en": "We have an account and have ongoing excellent reviews"
                    },
                    {
                        "ar": "لدينا حساب لكن لا نهتم بجمع التقييمات",
                        "en": "We have an account but we don't care about collecting ratings"
                    },
                    {
                        "ar": "لا نملك حساباً موثقاً",
                        "en": "We do not have a verified account"
                    }
                ],
                "insights": {
                    "لدينا حساب ولدينا تقييمات ممتازة ومستمرة": {
                        "ar": "ال (Map Pack) في جوجل الي منਜم كذهب للعيادات. سنعزز ذلك بحملات (Local Campaigns / PMax for Store Goals) ⵟالتي تظالرك في قمة الخريطة.",
                        "en": "The Map Pack on Google is gold for clinics. We'll reinforce this with Local Campaigns / PMax for Store Goals that keep you at the top of the map."
                    },
                    "لدينا حساب لكن لا نهتم بجمع التقييمات": {
                        "ar": "المريض يقرأ التقييمات كما يقرأ اسم ألطبيب. سنربط نظام استقبال العيادة برسالة SMS آلية لكل مريض سعيد لطلب تقيیم مباشر.",
                        "en": "The patient reads the reviews as he reads the doctor's name. We will link the clinic's reception system with an automated SMS message to each happy patient to request a live evaluation."
                    },
                    "لا نملك حساباً موثقاً": {
                        "ar": "أنت تخفي عيادتك عن نصف المرضى. توثيق حساب جوجل هو أول أولوية في الخطة التسويقية المبنية على ال (Trust).",
                        "en": "You hide your clinic from half the patients. Google account verification is the first priority in the marketing plan based on (Trust)."
                    }
                },
                "condition": (ans) => ans.q3
            },
            {
                "id": "q5",
                "label": {
                    "ar": "5. كيف تقوم بتسويق الأطباء (Personal Branding) العاملين في عيادتك؟",
                    "en": "5. How do you personally market the doctors working in your clinic?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نسوق لهم فردياً عبر فيديوهات متخصصة في حسابات العيادة",
                        "en": "We market to them individually through specialized videos in the clinic’s accounts"
                    },
                    {
                        "ar": "نسوق لاسم العيادة فقط وليس للأطباء لضمان عدم مغادرتهم بالعملاء",
                        "en": "We market the name of the clinic only and not the doctors to ensure that they do not leave with clients"
                    },
                    {
                        "ar": "نعرض صورهم فقط في الموقع",
                        "en": "We only display their photos on the site"
                    }
                ],
                "insights": {
                    "نسوق لهم فردياً عبر فيديوهات متخصصة في حسابات العيادة": {
                        "ar": "المريض يشتري 'الطبيب' قبل العيادة. التوقيع باسم طبيب خبير في تيك توك يرفع تحقيقات العيادة ككل. استراتيجية ممتازة سنكثفها.",
                        "en": "The patient buys the 'doctor' before the clinic. Signing the name of a doctor who is an expert on TikTok raises the investigations of the clinic as a whole. An excellent strategy that we will intensify."
                    },
                    "نسوق لاسم العيادة فقط وليس للأطباء لضمان عدم مغادرتهم بالعملاء": {
                        "ar": "مخاوف منطقية، لكن العيادة ال'مجهولة' تعاني من ضعف ال CVR بسبب نقص الثقة. الحل الو تصدير المنظومة ككل والمعدات الطبية (Authority).",
                        "en": "Reasonable concerns, but the 'anonymous' clinic suffers from poor CVR due to a lack of trust. The solution is to export the entire system and medical equipment (Authority)."
                    },
                    "نعرض صورهم فقط في الموقع": {
                        "ar": "صورة الطبیب بخلفية بيضاء مملة ولا తخلق تواصلاً عاطفياً. المريض يريد أن يسمع صوته وهو يشرح حل مشكلته ليأتمنه على صحته.",
                        "en": "The picture of the doctor with a white background is boring and does not create an emotional connection. The patient wants to hear his voice explaining the solution to his problem so that he can trust him with his health."
                    }
                },
                "condition": (ans) => ans.q4
            },
            {
                "id": "q6",
                "label": {
                    "ar": "6. الل تستخدم ال Upsell وال Cross-sell للمرضى الحاليين؟",
                    "en": "6. Do you use Upsell and Cross-sell for current patients?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعم، مثلاً بعد تنظيف الأسنان نعرض خصماً لتبييض الأسنان عبر الواتساب",
                        "en": "Yes, for example, after cleaning your teeth, we offer a discount on teeth whitening via WhatsApp"
                    },
                    {
                        "ar": "لا نقوم بذلك، المريض يأتي للخدمة الطਲوبة فقط",
                        "en": "We do not do this, the patient only comes for the kind service"
                    },
                    {
                        "ar": "أحياناً بشكل يدوي في العيادة عبر طاقم الاستقبال",
                        "en": "Sometimes manually in the clinic through the reception staff"
                    }
                ],
                "insights": {
                    "نعم، مثلاً بعد تنظيف الأسنان نعرض خصماً لتبييض الأسنان عبر الواتساب": {
                        "ar": "ال Customer Lifetime Value (LTV) لديكم عالٍ جداً بهذه الطرق! سأبني قمع مبيعات (Funnel) آلي ليتم هذا مع كل العملاء بدون تدخل يدوي.",
                        "en": "Your Customer Lifetime Value (LTV) is very high in these ways! I will build an automated sales funnel to do this with all customers without manual intervention."
                    },
                    "لا نقوم بذلك، المريض يأتي للخدمة الطਲوبة فقط": {
                        "ar": "أنت تخسر ربحاً صافياً بنسبة 30% على الأقل. أستحواذ العميل تم ودفعت قيمته للإعلانات، أي خدمة اضافية تباع له الي صافي ربح. سأفعل Retargeting لل Past Patients.",
                        "en": "You lose net profit by at least 30%. The client's acquisition was completed and the value of the advertisements was paid for, meaning any additional service was sold to him for a net profit. I will do Retargeting for Past Patients."
                    },
                    "أحياناً بشكل يدوي في العيادة عبر طاقم الاستقبال": {
                        "ar": "طاقم الأستقبال عادة يكون مشغولاً أو يخجل من البيع. الأتمتة عبر Email/SMS الي الذي لا ينسى ولا يخجل.",
                        "en": "Reception staff are usually busy or shy about selling. Automation via Email/SMS that is unforgettable and unashamed."
                    }
                },
                "condition": (ans) => ans.q5
            },
            {
                "id": "q7",
                "label": {
                    "ar": "7. ما الي استراتيجيتك لبناء الثقة (Trust Factor) في صفحات الالبوط للعيادة؟",
                    "en": "7. What is your strategy for building trust (Trust Factor) on the clinic’s landing pages?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "إبراز الاعتمادات (مثل وزارة الصحة)، وصور الأطباء، والتقييمات في أعلى الصفحة",
                        "en": "Highlight accreditations (such as Ministry of Health), photos of doctors, and ratings at the top of the page"
                    },
                    {
                        "ar": "نعتمد على شرح مفصل للتقنية المستخدمة (مثل اسم جهاز الليزر)",
                        "en": "We rely on a detailed explanation of the technology used (such as the name of the laser device)."
                    },
                    {
                        "ar": "صفحة بسيطة فيها معلومات الاتصال وفورم فقط",
                        "en": "A simple page with contact information and a form only"
                    }
                ],
                "insights": {
                    "إبراز الاعتمادات (مثل وزارة الصحة)، وصور الأطباء، والتقييمات في أعلى الصفحة": {
                        "ar": "هذا هو اليكل ال Landing Page اللطبية المثالي. سأقوم بإجراء A/B Testing لتغيير ال Headlines وتطوير الـ Conversion بنسبة أعلى.",
                        "en": "This is the ideal medical landing page. I will conduct A/B testing to change the headlines and develop the conversion at a higher rate."
                    },
                    "نعتمد على شرح مفصل للتقنية المستخدمة (مثل اسم جهاز الليزر)": {
                        "ar": "المريض العادي لا يفهم أسماء الأجهزة، يفهم فقط 'بدون ألم' و 'نتيجة سريعة'. سأترجم ﻤيزات الجهاز إلى منافع نفسية بال Copywriting.",
                        "en": "The average patient does not understand the names of the devices, he only understands 'painless' and 'quick result'. I will translate the device's features into psychological benefits through copywriting."
                    },
                    "صفحة بسيطة فيها معلومات الاتصال وفورم فقط": {
                        "ar": "صفحة اللهبوط البسيطة ჸستولد Leads لكنهم ⵟ(Cold). સيترددون في القدوم للعيادة بسبب مخاوفهم. ال Trust الو المفتاح.",
                        "en": "A simple landing page ჸwill generate Leads but they are ⵟ(Cold). સThey hesitate to come to the clinic because of their fears. The trust and the key."
                    }
                },
                "condition": (ans) => ans.q6
            },
            {
                "id": "q8",
                "label": {
                    "ar": "8. في حملات البحث (Google Search)، الل تستخदम ال Call Extensions؟",
                    "en": "8. In Google Search campaigns, do you use Call Extensions?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعم، كثير من مرضانا يضغطون للاتصال مبأشرة مبدون دخول الموقع",
                        "en": "Yes, many of our patients click to call directly without entering the website"
                    },
                    {
                        "ar": "لا، نجعلهم يتصفحون الموقع ثم يبحثون عن رقم الهاتف",
                        "en": "No, we have them browse the website and then look up the phone number"
                    },
                    {
                        "ar": "لا نعرف ما الي إضافات اللاتصال",
                        "en": "We do not know what the communication add-ons are"
                    }
                ],
                "insights": {
                    "نعم، كثير من مرضانا يضغطون للاتصال مبأشرة مبدون دخول الموقع": {
                        "ar": "هذا ยدل على ضبط سليم لل Intent. سأعزز ذلك ب Call Tracking لمعرفة أي كلمت بحث جابت المكالمة لتمويلها أكبر.",
                        "en": "This indicates proper Intent setting. I will enhance this with Call Tracking to see which search terms generated the most funding for the call."
                    },
                    "لا، نجعلهم يتصفحون الموقع ثم يبحثون عن رقم الهاتف": {
                        "ar": "في حالة الألم (كمثل طبيب الأسنان في منتصف الليل)، المريض يريد أن یتصل بنقرة واحدة من البحث. ⵟسأفعل ال Call-Only Campaigns.",
                        "en": "In case of pain (like the dentist in the middle of the night), the patient wants to be contacted with one click of search. ⵟI will do Call-Only Campaigns."
                    },
                    "لا نعرف ما الي إضافات اللاتصال": {
                        "ar": "الي ميزة تضيف رقمك بشكل كبير تحت الإعلان في الالاتف. نستخدمالا للعيادات ضماناً لحجزات فورية من الباحثين.",
                        "en": "There is a feature that greatly adds your number under the advertisement on the phone. We use clinics to ensure immediate bookings from researchers."
                    }
                },
                "condition": (ans) => ans.q7
            },
            {
                "id": "q9",
                "label": {
                    "ar": "9. الل تستخدم ال Offline Conversion Tracking لتأكيد نجاح الحملات الطبية؟",
                    "en": "9. Do you use Offline Conversion Tracking to confirm the success of medical campaigns?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "نعم، الـ CRM مربوط بجوجل وMeta، ونعلم من دفع في العيادة ومن أي أعلان",
                        "en": "Yes, the CRM is linked to Google and Meta, and we know who paid in the clinic and from which ad"
                    },
                    {
                        "ar": "لا، نقيس النجاح بعدد الـ Leads (رسائل الواتساب أو الفورم) فقط",
                        "en": "No, we measure success by the number of leads (WhatsApp messages or forms) only"
                    },
                    {
                        "ar": "العيادة لا تمتلک نظام CRM أو HIS متطور يربط مع الإعلانات",
                        "en": "The clinic does not have an advanced CRM or HIS system that links with advertisements"
                    }
                ],
                "insights": {
                    "نعم، الـ CRM مربوط بجوجل وMeta، ونعلم من دفع في العيادة ومن أي أعلان": {
                        "ar": "هذا يجعلكم في مقدمة مستشفیات الخليج. الخوارزيميات تعلم الآن من المريض الذي يدفع وليس فقط يਸتفسر. سأحسن ال Bidding بناءً عليها.",
                        "en": "This puts you at the forefront of Gulf hospitals. Algorithms now know who the patient is paying and not just interpret. I will improve the bidding accordingly."
                    },
                    "لا، نقيس النجاح بعدد الـ Leads (رسائل الواتساب أو الفورم) فقط": {
                        "ar": "هناك فجوة بين 'من سأل' ومن 'حضر للعيادة ودفع'. بدون ال Offline Tracking، ستظل حملأتك تعتمد على CPL مضلل.",
                        "en": "There is a gap between 'who asked' and 'who came to the clinic and paid'. Without Offline Tracking, your campaign will continue to rely on a misleading CPL."
                    },
                    "العيادة لا تمتلک نظام CRM أو HIS متطور يربط مع الإعلانات": {
                        "ar": "سأشاعدك في أيجاد حلول تتبع يدوية أو شبه آلية (مثل Sheet مربوط ب Zapier) لتغذية إعلانات الـ Conversion لجوجل.",
                        "en": "I will help you find manual or semi-automated tracking solutions (such as Sheet linked to Zapier) to feed Conversion ads to Google."
                    }
                },
                "condition": (ans) => ans.q8
            },
            {
                "id": "q10",
                "label": {
                    "ar": "10. ما هو حجم استثمارك الشهري फي తسويق العيادة للتوسع وقصب حصة السوق؟",
                    "en": "10. What is the size of your monthly investment in marketing the clinic to expand and increase market share?"
                },
                "type": "radio",
                "options": [
                    {
                        "ar": "أقل ਮن 5,000$ (تركيز على خطوط علاჯიة ⵟمحددة)",
                        "en": "Less than $5,000 (focus on specific premium lines)"
                    },
                    {
                        "ar": "5,000$ ألى 15,000$ (نمو ⵟقوي وبناء Brand متوسط في الმدينة)",
                        "en": "$5,000 to $15,000 (Strong Growth and Medium Brand Building in the City)"
                    },
                    {
                        "ar": "أكثر من 15,000$ (السيطرة على كأفة ألممارسات الطبية ফي الخليج ب Omnichannel)",
                        "en": "More than $15,000 (control of all medical practices in the Gulf with Omnichannel)"
                    }
                ],
                "insights": {
                    "أقل ਮن 5,000$ (تركيز على خطوط علاჯიة ⵟمحددة)": {
                        "ar": "سنوكه الميزانية إلى ال Google Search للكلمات ذات النية الملحة (High Intent) فقط لضمان حجزات فورية.",
                        "en": "Budget Google Search for high intent terms only to ensure instant bookings."
                    },
                    "5,000$ ألى 15,000$ (نمو ⵟقوي وبناء Brand متوسط في الმدينة)": {
                        "ar": "مرحلة ممتازة لل Scaling. سნستخدم Meta لل Social Proof وال Retargeting، مع Google PMax ለجلب المرضى من الخرائط.",
                        "en": "An excellent stage for scaling. I will use Meta for Social Proof and Retargeting, with Google PMax fetching patients from maps."
                    },
                    "أكثر من 15,000$ (السيطرة على كأفة ألممارسات الطبية ফي الخليج ب Omnichannel)": {
                        "ar": "سأبنی لك اليکل Lead Generation يضم Server-Side Tracking و Call Intelligence و CRM Automations، لأجلب لك المرضى الVIP.",
                        "en": "I will build a lead generation system for you that includes Server-Side Tracking, Call Intelligence, and CRM Automations, to bring you VIP patients."
                    }
                },
                "condition": (ans) => ans.q9
            }
        ]
    }
};

window.servicesData = servicesData;

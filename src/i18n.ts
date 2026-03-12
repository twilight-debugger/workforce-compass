import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations directly for now, or use back-end plugin if files are large
const resources = {
    en: {
        translation: {
            "nav": {
                "intelligence": "Intelligence",
                "simulations": "Simulations",
                "strategy": "Strategy",
                "ma": "M&A",
                "about": "About",
                "view_demo": "View Demo",
                "command_center": "Command Center"
            },
            "dashboard": {
                "verified": "Verified",
                "admin_access": "Admin Access",
                "executive_user": "Executive User"
            },
            "hero": {
                "tagline": "Workforce Decision Intelligence",
                "title_part1": "Simulate. Compare.",
                "title_part2": "Decide with clarity.",
                "subtitle": "Visualize, simulate, and optimize your workforce strategy with AI-driven predictive intelligence.",
                "description": "Enterprise leaders use WorkforceIQ to model workforce risk scenarios, compare HR strategies side-by-side, and receive AI-generated strategic recommendations — all in real time.",
                "cta": "Launch Command Center"
            },
            "features": {
                "heading": "How it works",
                "subheading": "Three pillars of workforce decision intelligence.",
                "simulate": {
                    "title": "Simulate Scenarios",
                    "desc": "Run Monte Carlo simulations on workforce risk with configurable strategies, seeds, and shock tests."
                },
                "compare": {
                    "title": "Compare Strategies",
                    "desc": "Evaluate baseline vs. aggressive vs. conservative approaches with side-by-side KPI breakdowns."
                },
                "ai": {
                    "title": "AI Explanations",
                    "desc": "Get natural-language strategic recommendations powered by decision intelligence models."
                }
            }
        }
    },
    es: {
        translation: {
            "nav": {
                "intelligence": "Inteligencia",
                "simulations": "Simulaciones",
                "strategy": "Estrategia",
                "ma": "M&A",
                "about": "Nosotros",
                "view_demo": "Ver Demo",
                "command_center": "Centro de Mando"
            },
            "dashboard": {
                "verified": "Verificado",
                "admin_access": "Acceso Admin",
                "executive_user": "Usuario Ejecutivo"
            },
            "hero": {
                "tagline": "Inteligencia de Decisiones de Personal",
                "title_part1": "Simule. Compare.",
                "title_part2": "Decida con claridad.",
                "subtitle": "Visualice, simule y optimice su estrategia de personal con inteligencia predictiva impulsada por IA.",
                "description": "Los líderes empresariales utilizan WorkforceIQ para modelar escenarios de riesgo laboral, comparar estrategias de RRHH y receive recomendaciones estratégicas generadas por IA, todo en tiempo real.",
                "cta": "Lanzar Centro de Mando"
            },
            "features": {
                "heading": "Cómo funciona",
                "subheading": "Tres pilares de la inteligencia de decisiones de personal.",
                "simulate": {
                    "title": "Simular Escenarios",
                    "desc": "Ejecute simulaciones de Monte Carlo sobre el riesgo de la fuerza laboral con estrategias, semillas y pruebas de choque configurables."
                },
                "compare": {
                    "title": "Comparar Estrategias",
                    "desc": "Evalúe los enfoques de referencia frente a los agresivos o conservadores con desgloses de KPI paralelos."
                },
                "ai": {
                    "title": "Explicaciones de IA",
                    "desc": "Obtenga recomendaciones estratégicas en lenguaje natural impulsadas por modelos de inteligencia de decisiones."
                }
            }
        }
    },
    hi: {
        translation: {
            "nav": {
                "intelligence": "बुद्धिमत्ता",
                "simulations": "सिमुलेशन",
                "strategy": "रणनीति",
                "ma": "M&A",
                "about": "हमारे बारे में",
                "view_demo": "डेमो देखें",
                "command_center": "कमांड सेंटर"
            },
            "dashboard": {
                "verified": "सत्यापित",
                "admin_access": "व्यवस्थापक पहुँच",
                "executive_user": "कार्यकारी उपयोगकर्ता"
            },
            "hero": {
                "tagline": "कार्यबल निर्णय बुद्धिमत्ता",
                "title_part1": "अनुकरण करें. तुलना करें.",
                "title_part2": "स्पष्टता के साथ निर्णय लें.",
                "subtitle": "AI-संचालित भविष्य कहनेवाला बुद्धिमत्ता के साथ अपनी कार्यबल रणनीति की कल्पना करें, अनुकरण करें और अनुकूलित करें।",
                "description": "एंटरप्राइज़ लीडर्स कार्यबल जोखिम परिदृश्यों को मॉडल करने, मानव संसाधन रणनीतियों की तुलना करने और रीयल-टाइम में AI-जनित रणनीतिक अनुशंसाएं प्राप्त करने के लिए WorkforceIQ का उपयोग करते हैं।",
                "cta": "कमांड सेंटर लॉन्च करें"
            },
            "features": {
                "heading": "यह कैसे काम करता है",
                "subheading": "कार्यबल निर्णय बुद्धिमत्ता के तीन स्तंभ।",
                "simulate": {
                    "title": "परिदृश्यों का अनुकरण करें",
                    "desc": "कॉन्फ़िगर करने योग्य रणनीतियों, बीजों और शॉक परीक्षणों के साथ कार्यबल जोखिम पर मोंटे कार्लो सिमुलेशन चलाएं।"
                },
                "compare": {
                    "title": "रणनीतियों की तुलना करें",
                    "desc": "कंधे से कंधा मिलाकर KPI ब्रेकडाउन के साथ बेसलाइन बनाम आक्रामक बनाम रूढ़िवादी दृष्टिकोण का मूल्यांकन करें।"
                },
                "ai": {
                    "title": "AI स्पष्टीकरण",
                    "desc": "निर्णय बुद्धिमत्ता मॉडल द्वारा संचालित प्राकृतिक-भाषा रणनीतिक सिफारिशें प्राप्त करें।"
                }
            }
        }
    },
    zh: {
        translation: {
            "nav": {
                "intelligence": "智能",
                "simulations": "模拟",
                "strategy": "策略",
                "ma": "并购",
                "about": "关于",
                "view_demo": "查看演示",
                "command_center": "指挥中心"
            },
            "dashboard": {
                "verified": "已验证",
                "admin_access": "管理员权限",
                "executive_user": "执行用户"
            },
            "hero": {
                "tagline": "劳动力决策智能",
                "title_part1": "模拟。对比。",
                "title_part2": "明智决策。",
                "subtitle": "利用 AI 驱动的预测智能，对您的劳动力策略进行可视化、模拟和优化。",
                "description": "企业领导者使用 WorkforceIQ 在实时中对劳动力风险场景进行建模、并排比较人力资源策略，并获得 AI 生成的战略建议。",
                "cta": "启动指挥中心"
            },
            "features": {
                "heading": "工作原理",
                "subheading": "劳动力决策智能的三大支柱。",
                "simulate": {
                    "title": "模拟场景",
                    "desc": "通过可配置策略、随机数和冲击测试，运行关于劳动力风险的蒙特卡罗模拟。"
                },
                "compare": {
                    "title": "比较策略",
                    "desc": "通过并排的 KPI 分解，评估基线、激进与保守方法。"
                },
                "ai": {
                    "title": "AI 解释",
                    "desc": "获得由决策智能模型提供的自然语言战略建议。"
                }
            }
        }
    },
    ar: {
        translation: {
            "nav": {
                "intelligence": "الذكاء",
                "simulations": "المحاكاة",
                "strategy": "إستراتيجية",
                "ma": "الاندماج والاستحواذ",
                "about": "حول",
                "view_demo": "عرض تجريبي",
                "command_center": "مركز القيادة"
            },
            "dashboard": {
                "verified": "تم التحقق",
                "admin_access": "صلاحيات المسؤول",
                "executive_user": "مستخدم تنفيذي"
            },
            "hero": {
                "tagline": "ذكاء قرارات القوى العاملة",
                "title_part1": "محاكاة. مقارنة.",
                "title_part2": "قرر بوضوح.",
                "subtitle": "قم بتصور ومحاكاة وتحسين استراتيجية القوى العاملة الخاصة بك باستخدام الذكاء التنبؤي المدعوم بالذكاء الاصطناعي.",
                "description": "يستخدم قادة المؤسسات WorkforceIQ لنمذجة سيناريوهات مخاطر القوى العاملة، ومقارنة استراتيجيات الموارد البشرية جنباً إلى جنب، وتلقي توصيات استراتيجية تم إنشاؤها بواسطة الذكاء الاصطناعي - كل ذلك في الوقت الفعلي.",
                "cta": "تشغيل مركز القيادة"
            },
            "features": {
                "heading": "كيف يعمل",
                "subheading": "الركائز الثلاث لذكاء قرارات القوى العاملة.",
                "simulate": {
                    "title": "محاكاة السيناريوهات",
                    "desc": "قم بتشغيل محاكاة مونت كارلو على مخاطر القوى العاملة باستخدام استراتيجيات واختبارات الصدمات القابلة للتكوين."
                },
                "compare": {
                    "title": "مقارنة الاستراتيجيات",
                    "desc": "قم بتقييم خط الأساس مقابل المناهج القوية والمحافظة مع تفكيك مؤشرات الأداء الرئيسية جنباً إلى جنب."
                },
                "ai": {
                    "title": "شروحات الذكاء الاصطناعي",
                    "desc": "احصل على توصيات استراتيجية باللغة الطبيعية مدعومة بنماذج ذكاء القرار."
                }
            }
        }
    },
    ur: {
        translation: {
            "nav": {
                "intelligence": "ذہانت",
                "simulations": "تخروپن",
                "strategy": "حکمت عملی",
                "ma": "انضمام اور حصول",
                "about": "ہمارے بارے میں",
                "view_demo": "ڈیمو دیکھیں",
                "command_center": "کمانڈ سینٹر"
            },
            "dashboard": {
                "verified": "تصدیق شدہ",
                "admin_access": "ایڈمن تک رسائی",
                "executive_user": "ایگزیکٹو صارف"
            },
            "hero": {
                "tagline": "ورک فورس فیصلہ سازی کی ذہانت",
                "title_part1": "نمونہ بنائیں۔ موازنہ کریں۔",
                "title_part2": "وضاحت کے ساتھ فیصلہ کریں۔",
                "subtitle": "AI سے چلنے والی پیش گوئی کرنے والی ذہانت کے ساتھ اپنی ورک فورس کی حکمت عملی کو تصور کریں، تخروپن کریں، اور بہتر بنائیں۔",
                "description": "انٹرپرائز لیڈرز حقیقی وقت میں ورکرز کے خطرے کے منظرناموں کی ماڈلنگ کرنے، HR حکمت عملیوں کا موازنہ کرنے، اور AI سے تیار کردہ اسٹریٹجک سفارشات حاصل کرنے کے لیے WorkforceIQ کا استعمال کرتے ہیں۔",
                "cta": "کمانڈ سینٹر شروع کریں"
            },
            "features": {
                "heading": "یہ کیسے کام کرتا ہے",
                "subheading": "ورک فورس فیصلے کی ذہانت کے تین ستون۔",
                "simulate": {
                    "title": "منظرناموں کا نمونہ بنائیں",
                    "desc": "ورک فورس کے خطرات پر مونٹی کارلو کی نقلی کارروائیاں ترتیب دینے والی حکمت عملیوں اور شاک ٹیسٹوں کے ساتھ چلائیں۔"
                },
                "compare": {
                    "title": "حکمت عملی کا موازنہ کریں",
                    "desc": "ساتھ ساتھ KPI بریک ڈاؤنز کے ساتھ بنیادی، جارحانہ، اور قدامت پسند طریقوں کا اندازہ لگائیں۔"
                },
                "ai": {
                    "title": "AI وضاحتیں",
                    "desc": "فیصلے کی ذہانت کے ماڈلز سے چلنے والی قدرتی زبان کی اسٹریٹجک سفارشات حاصل کریں۔"
                }
            }
        }
    },
    ru: {
        translation: {
            "nav": {
                "intelligence": "Интеллект",
                "simulations": "Симуляции",
                "strategy": "Стратегия",
                "ma": "M&A",
                "about": "О нас",
                "view_demo": "Смотреть демо",
                "command_center": "Командный центр"
            },
            "dashboard": {
                "verified": "Проверено",
                "admin_access": "Доступ администратора",
                "executive_user": "Управляющий"
            },
            "hero": {
                "tagline": "Интеллект для кадровых решений",
                "title_part1": "Симулируйте. Сравнивайте.",
                "title_part2": "Принимайте четкие решения.",
                "subtitle": "Визуализируйте, симулируйте и оптимизируйте свою кадровую стратегию с помощью прогнозного интеллекта на базе ИИ.",
                "description": "Руководители предприятий используют WorkforceIQ для моделирования сценариев кадровых рисков, параллельного сравнения HR-стратегий и получения стратегических рекомендаций от ИИ в режиме реального времени.",
                "cta": "Запустить Командный центр"
            },
            "features": {
                "heading": "Как это работает",
                "subheading": "Три столпа интеллекта для принятия кадровых решений.",
                "simulate": {
                    "title": "Симуляция сценариев",
                    "desc": "Запускайте симуляции Монте-Карло для кадровых рисков с настраиваемыми стратегиями, переменными и стресс-тестами."
                },
                "compare": {
                    "title": "Сравнение стратегий",
                    "desc": "Оценивайте базовые, агрессивные и консервативные подходы с помощью подробного сравнения KPI."
                },
                "ai": {
                    "title": "Объяснения ИИ",
                    "desc": "Получайте стратегические рекомендации на естественном языке на основе моделей принятия решений."
                }
            }
        }
    },
    fr: {
        translation: {
            "nav": {
                "intelligence": "Intelligence",
                "simulations": "Simulations",
                "strategy": "Stratégie",
                "ma": "M&A",
                "about": "À propos",
                "view_demo": "Voir la démo",
                "command_center": "Centre de commandement"
            },
            "dashboard": {
                "verified": "Vérifié",
                "admin_access": "Accès Admin",
                "executive_user": "Utilisateur Exécutif"
            },
            "hero": {
                "tagline": "Intelligence Décisionnelle RH",
                "title_part1": "Simulez. Comparez.",
                "title_part2": "Décidez avec clarté.",
                "subtitle": "Visualisez, simulez et optimisez votre stratégie RH avec une intelligence prédictive basée sur l'IA.",
                "description": "Les dirigeants d'entreprise utilisent WorkforceIQ pour modéliser des scénarios de risques RH, comparer des stratégies côte à côte et recevoir des recommandations stratégiques générées par l'IA - le tout en temps réel.",
                "cta": "Lancer le Centre de Commandement"
            },
            "features": {
                "heading": "Comment ça marche",
                "subheading": "Les trois piliers de l'intelligence décisionnelle RH.",
                "simulate": {
                    "title": "Simuler des Scénarios",
                    "desc": "Exécutez des simulations de Monte Carlo sur les risques RH avec des stratégies configurables et des tests de résistance."
                },
                "compare": {
                    "title": "Comparer les Stratégies",
                    "desc": "Évaluez les approches de base, agressives et conservatrices avec des répartitions KPI côte à côte."
                },
                "ai": {
                    "title": "Explications IA",
                    "desc": "Obtenez des recommandations stratégiques en langage naturel basées sur des modèles d'intelligence décisionnelle."
                }
            }
        }
    },
    pt: {
        translation: {
            "nav": {
                "intelligence": "Inteligência",
                "simulations": "Simulações",
                "strategy": "Estratégia",
                "ma": "F&A",
                "about": "Sobre",
                "view_demo": "Ver Demo",
                "command_center": "Centro de Comando"
            },
            "dashboard": {
                "verified": "Verificado",
                "admin_access": "Acesso de Admin",
                "executive_user": "Usuário Executivo"
            },
            "hero": {
                "tagline": "Inteligência de Decisão da Força de Trabalho",
                "title_part1": "Simule. Compare.",
                "title_part2": "Decida com clareza.",
                "subtitle": "Visualize, simule e otimize sua estratégia de força de trabalho com inteligência preditiva impulsionada por IA.",
                "description": "Líderes usam o WorkforceIQ para modelar cenários de risco, comparar estratégias de RH lado a lado e receber recomendações estratégicas geradas por IA - tudo em tempo real.",
                "cta": "Iniciar Centro de Comando"
            },
            "features": {
                "heading": "Como funciona",
                "subheading": "Os três pilares da inteligência de decisão da força de trabalho.",
                "simulate": {
                    "title": "Simular Cenários",
                    "desc": "Execute simulações de Monte Carlo sobre o risco da força de trabalho com estratégias e testes de choque configuráveis."
                },
                "compare": {
                    "title": "Comparar Estratégias",
                    "desc": "Avalie as abordagens de linha de base, agressivas e conservadoras com detalhamentos de KPI lado a lado."
                },
                "ai": {
                    "title": "Explicações por IA",
                    "desc": "Obtenha recomendações estratégicas em linguagem natural alimentadas por modelos de inteligência de decisão."
                }
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage', 'cookie'],
        },
    });

export default i18n;

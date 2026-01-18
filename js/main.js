/* ================================================== */
/* NORAMA TECH - MAIN JAVASCRIPT */
/* ================================================== */

// ============== LANGUAGE SYSTEM ==============

const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.courses': 'Courses',
        'nav.portfolio': 'Portfolio',
        'nav.contact': 'Contact',

        // Hero Section
        'hero.title': 'Welcome to Norama Tech',
        'hero.subtitle': 'Next Generation Cyber Security & Tech Solutions',
        'hero.description': 'Empowering businesses with cutting-edge technology, robust security, and innovative solutions',
        'hero.cta': 'Get Started',

        // About Section
        'about.title': 'About Norama Tech',
        'about.subtitle': 'Who We Are',
        'about.description': 'Norama Tech is a leading global technology company specializing in cybersecurity, web development, and innovative software solutions. We combine cutting-edge technology with creative excellence to deliver transformative results.',
        'about.vision_title': 'Our Vision',
        'about.vision_desc': 'To be the most trusted technology partner for businesses worldwide, driving digital transformation through innovation, security, and excellence.',
        'about.stat1': '500+',
        'about.statLabel1': 'Projects Completed',
        'about.stat2': '50+',
        'about.statLabel2': 'Expert Team',
        'about.stat3': '15+',
        'about.statLabel3': 'Years Experience',
        'about.stat4': '30+',
        'about.statLabel4': 'Countries Served',

        // Services Section
        'services.title': 'Our Services',
        'services.cyber_security': 'Cyber Security & Penetration Testing',
        'services.cyber_desc': 'Advanced threat detection and vulnerability assessment',
        'services.web_dev': 'Web Design & Development',
        'services.web_desc': 'Stunning and responsive websites built for performance',
        'services.mobile': 'Mobile App Development',
        'services.mobile_desc': 'Cross-platform mobile applications for iOS and Android',
        'services.software': 'Software Solutions',
        'services.software_desc': 'Custom enterprise software tailored to your needs',
        'services.ai': 'AI & Automation',
        'services.ai_desc': 'Intelligent systems and process automation',
        'services.training': 'Courses & Training',
        'services.training_desc': 'Technical education and professional development',

        // Cyber Section
        'cyber.title': 'Cyber Security & Penetration Testing',
        'cyber.feature1': 'Network Security',
        'cyber.feature1_desc': 'Advanced threat detection and prevention systems',
        'cyber.feature2': 'Penetration Testing',
        'cyber.feature2_desc': 'Comprehensive security assessment and vulnerability analysis',
        'cyber.feature3': 'Threat Analysis',
        'cyber.feature3_desc': 'Real-time monitoring and incident response',
        'cyber.feature4': 'Data Protection',
        'cyber.feature4_desc': 'Enterprise-grade encryption and data security',

        // Courses Section
        'courses.title': 'Courses & Training',
        'courses.ethical_hacking': 'Ethical Hacking & Penetration Testing',
        'courses.web_security': 'Web Security Fundamentals',
        'courses.cloud_security': 'Cloud Security & DevSecOps',
        'courses.python': 'Python for Cybersecurity',
        'courses.advanced': 'Advanced Threat Analysis',
        'courses.duration': 'Duration: ',

        // Portfolio Section
        'portfolio.title': 'Portfolio & Projects',

        // Contact Section
        'contact.title': 'Get in Touch',
        'contact.email': 'Email:',
        'contact.phone': 'Phone:',
        'contact.location': 'Location:',
        'contact.form_name': 'Your Name',
        'contact.form_email': 'Your Email',
        'contact.form_subject': 'Subject',
        'contact.form_message': 'Your Message',
        'contact.form_submit': 'Send Message',

        // Footer
        'footer.about': 'About',
        'footer.about_text': 'Leading cybersecurity and tech solutions provider',
        'footer.services': 'Services',
        'footer.follow': 'Follow Us',
        'footer.copyright': '© 2026 Norama Tech. All rights reserved.'
    },
    ar: {
        // Navigation
        'nav.home': 'الرئيسية',
        'nav.about': 'عن الشركة',
        'nav.services': 'الخدمات',
        'nav.courses': 'الدورات',
        'nav.portfolio': 'المشاريع',
        'nav.contact': 'التواصل',

        // Hero Section
        'hero.title': 'مرحبًا بك في نوراما تيك',
        'hero.subtitle': 'حلول الأمن السيبراني والتكنولوجيا من الجيل التالي',
        'hero.description': 'تمكين الأعمال بالتكنولوجيا المتقدمة والأمان القوي والحلول المبتكرة',
        'hero.cta': 'ابدأ الآن',

        // About Section
        'about.title': 'عن نوراما تيك',
        'about.subtitle': 'من نحن',
        'about.description': 'نوراما تيك هي شركة تكنولوجيا عالمية رائدة متخصصة في الأمن السيبراني وتطوير الويب والحلول البرمجية المبتكرة. نجمع بين التكنولوجيا المتقدمة والتميز الإبداعي لتقديم نتائج تحويلية.',
        'about.vision_title': 'رؤيتنا',
        'about.vision_desc': 'أن نكون الشريك التكنولوجي الأكثر موثوقية للشركات حول العالم، مما يدفع التحول الرقمي من خلال الابتكار والأمان والتميز.',
        'about.stat1': '500+',
        'about.statLabel1': 'مشروع مكتمل',
        'about.stat2': '50+',
        'about.statLabel2': 'فريق خبراء',
        'about.stat3': '15+',
        'about.statLabel3': 'سنة خبرة',
        'about.stat4': '30+',
        'about.statLabel4': 'دول مخدومة',

        // Services Section
        'services.title': 'خدماتنا',
        'services.cyber_security': 'الأمن السيبراني واختبار الاختراق',
        'services.cyber_desc': 'كشف التهديدات المتقدمة وتقييم الثغرات الأمنية',
        'services.web_dev': 'تصميم وتطوير الويب',
        'services.web_desc': 'مواقع ويب مذهلة وسريعة الاستجابة',
        'services.mobile': 'تطوير تطبيقات الهاتف',
        'services.mobile_desc': 'تطبيقات هاتفية متعددة المنصات',
        'services.software': 'الحلول البرمجية',
        'services.software_desc': 'برمجيات مخصصة حسب احتياجاتك',
        'services.ai': 'الذكاء الاصطناعي والأتمتة',
        'services.ai_desc': 'أنظمة ذكية وأتمتة العمليات',
        'services.training': 'الدورات والتدريب',
        'services.training_desc': 'التعليم التقني والتطوير المهني',

        // Cyber Section
        'cyber.title': 'الأمن السيبراني واختبار الاختراق',
        'cyber.feature1': 'أمان الشبكات',
        'cyber.feature1_desc': 'أنظمة متقدمة للكشف والوقاية من التهديدات',
        'cyber.feature2': 'اختبار الاختراق',
        'cyber.feature2_desc': 'تقييم أمني شامل وتحليل الثغرات',
        'cyber.feature3': 'تحليل التهديدات',
        'cyber.feature3_desc': 'مراقبة فورية والاستجابة للحوادث',
        'cyber.feature4': 'حماية البيانات',
        'cyber.feature4_desc': 'تشفير وأمان البيانات من مستوى المؤسسات',

        // Courses Section
        'courses.title': 'الدورات والتدريب',
        'courses.ethical_hacking': 'الهندسة الأخلاقية واختبار الاختراق',
        'courses.web_security': 'أساسيات أمان الويب',
        'courses.cloud_security': 'أمان السحابة و DevSecOps',
        'courses.python': 'Python للأمن السيبراني',
        'courses.advanced': 'تحليل التهديدات المتقدمة',
        'courses.duration': 'المدة: ',

        // Portfolio Section
        'portfolio.title': 'المشاريع والحافظة',

        // Contact Section
        'contact.title': 'تواصل معنا',
        'contact.email': 'البريد الإلكتروني:',
        'contact.phone': 'الهاتف:',
        'contact.location': 'الموقع:',
        'contact.form_name': 'اسمك',
        'contact.form_email': 'بريدك الإلكتروني',
        'contact.form_subject': 'الموضوع',
        'contact.form_message': 'رسالتك',
        'contact.form_submit': 'إرسال الرسالة',

        // Footer
        'footer.about': 'عن',
        'footer.about_text': 'مزود حلول الأمن السيبراني والتكنولوجيا الرائدة',
        'footer.services': 'الخدمات',
        'footer.follow': 'تابعنا',
        'footer.copyright': '© 2026 نوراما تيك. جميع الحقوق محفوظة.'
    }
};

// ============== STATE MANAGEMENT ==============

const appState = {
    language: localStorage.getItem('language') || 'en',
    theme: localStorage.getItem('theme') || 'light',
    companyName: localStorage.getItem('companyName') || 'Norama Tech',
    currentSection: 'home'
};

// ============== INITIALIZATION ==============

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initNavigation();
    setupScrollAnimations();
    populateServices();
    populateCourses();
    populatePortfolio();
    setupFormHandling();
    setupIntersectionObserver();
});

// ============== THEME MANAGEMENT ==============

function initTheme() {
    const theme = appState.theme;
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeToggleIcon();
}

function toggleTheme() {
    const currentTheme = appState.theme;
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    appState.theme = newTheme;
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    updateThemeToggleIcon();
}

function updateThemeToggleIcon() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('.theme-icon');
        if (appState.theme === 'dark') {
            icon.innerHTML = `<circle cx="12" cy="12" r="5"></circle><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;
        } else {
            icon.innerHTML = `<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>`;
        }
    }
}

// ============== LANGUAGE MANAGEMENT ==============

function initLanguage() {
    const language = appState.language;
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    updateAllText();
    
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = language;
    }
}

function changeLanguage(language) {
    appState.language = language;
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    updateAllText();
}

function t(key) {
    const language = appState.language;
    const trans = translations[language];
    return trans && trans[key] ? trans[key] : key;
}

function updateAllText() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = t(key);
    });

    // Update hero section
    const heroTitle = document.getElementById('heroTitle');
    if (heroTitle) heroTitle.textContent = t('hero.title');
    
    const heroSubtitle = document.getElementById('heroSubtitle');
    if (heroSubtitle) heroSubtitle.textContent = t('hero.subtitle');
    
    const heroDescription = document.getElementById('heroDescription');
    if (heroDescription) heroDescription.textContent = t('hero.description');
    
    const ctaButton = document.getElementById('ctaButton');
    if (ctaButton) ctaButton.textContent = t('hero.cta');

    // Update about section
    const aboutTitle = document.getElementById('aboutTitle');
    if (aboutTitle) aboutTitle.textContent = t('about.title');

    // Update all other text elements
    updateAboutText();
    updateServiceText();
    updateCoursesText();
    updateContactText();
    updateFooterText();
}

function updateAboutText() {
    const elements = {
        'aboutTitle': 'about.title',
        'aboutSubtitle': 'about.subtitle',
        'aboutDescription': 'about.description',
        'visionTitle': 'about.vision_title',
        'visionDescription': 'about.vision_desc',
        'stat1': 'about.stat1',
        'statLabel1': 'about.statLabel1',
        'stat2': 'about.stat2',
        'statLabel2': 'about.statLabel2',
        'stat3': 'about.stat3',
        'statLabel3': 'about.statLabel3',
        'stat4': 'about.stat4',
        'statLabel4': 'about.statLabel4'
    };

    Object.keys(elements).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = t(elements[id]);
    });
}

function updateServiceText() {
    const elements = {
        'servicesTitle': 'services.title',
        'cyberTitle': 'cyber.title',
        'feature1Title': 'cyber.feature1',
        'feature1Desc': 'cyber.feature1_desc',
        'feature2Title': 'cyber.feature2',
        'feature2Desc': 'cyber.feature2_desc',
        'feature3Title': 'cyber.feature3',
        'feature3Desc': 'cyber.feature3_desc',
        'feature4Title': 'cyber.feature4',
        'feature4Desc': 'cyber.feature4_desc'
    };

    Object.keys(elements).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = t(elements[id]);
    });
}

function updateCoursesText() {
    const elements = {
        'coursesTitle': 'courses.title',
        'portfolioTitle': 'portfolio.title'
    };

    Object.keys(elements).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = t(elements[id]);
    });
}

function updateContactText() {
    const elements = {
        'contactTitle': 'contact.title',
        'contactEmail': 'contact.email',
        'contactPhone': 'contact.phone',
        'contactLocation': 'contact.location',
        'formName': 'contact.form_name',
        'formEmail': 'contact.form_email',
        'formSubject': 'contact.form_subject',
        'formMessage': 'contact.form_message',
        'formSubmit': 'contact.form_submit'
    };

    Object.keys(elements).forEach(id => {
        const el = document.getElementById(id);
        if (el && elements[id]) el.textContent = t(elements[id]);
    });

    // Update form placeholders
    const formName = document.getElementById('formName');
    if (formName) formName.placeholder = t('contact.form_name');
    
    const formEmail = document.getElementById('formEmail');
    if (formEmail) formEmail.placeholder = t('contact.form_email');
    
    const formSubject = document.getElementById('formSubject');
    if (formSubject) formSubject.placeholder = t('contact.form_subject');
    
    const formMessage = document.getElementById('formMessage');
    if (formMessage) formMessage.placeholder = t('contact.form_message');
}

function updateFooterText() {
    const elements = {
        'footerAbout': 'footer.about',
        'footerAboutText': 'footer.about_text',
        'footerServices': 'footer.services',
        'footerFollow': 'footer.follow',
        'footerCopyright': 'footer.copyright'
    };

    Object.keys(elements).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = t(elements[id]);
    });
}

// ============== NAVIGATION ==============

function initNavigation() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', (e) => {
            changeLanguage(e.target.value);
        });
    }

    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 100) {
            navbar.style.background = `rgba(${getBgColor()}, 0.98)`;
            navbar.style.boxShadow = '0 2px 20px rgba(0, 255, 136, 0.1)';
        } else {
            navbar.style.background = `rgba(${getBgColor()}, 0.95)`;
            navbar.style.boxShadow = 'none';
        }
    });
}

function getBgColor() {
    if (appState.theme === 'dark') {
        return '10, 10, 10';
    }
    return '255, 255, 255';
}

// ============== POPULATE SERVICES ==============

function populateServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    if (!servicesGrid) return;

    const services = [
        {
            icon: '🛡️',
            titleKey: 'services.cyber_security',
            descKey: 'services.cyber_desc'
        },
        {
            icon: '🌐',
            titleKey: 'services.web_dev',
            descKey: 'services.web_desc'
        },
        {
            icon: '📱',
            titleKey: 'services.mobile',
            descKey: 'services.mobile_desc'
        },
        {
            icon: '⚙️',
            titleKey: 'services.software',
            descKey: 'services.software_desc'
        },
        {
            icon: '🤖',
            titleKey: 'services.ai',
            descKey: 'services.ai_desc'
        },
        {
            icon: '📚',
            titleKey: 'services.training',
            descKey: 'services.training_desc'
        }
    ];

    servicesGrid.innerHTML = services.map(service => `
        <div class="service-card fade-in">
            <div class="service-icon">${service.icon}</div>
            <h3>${t(service.titleKey)}</h3>
            <p>${t(service.descKey)}</p>
        </div>
    `).join('');
}

// ============== POPULATE COURSES ==============

function populateCourses() {
    const coursesGrid = document.getElementById('coursesGrid');
    if (!coursesGrid) return;

    const courses = [
        {
            title: 'courses.ethical_hacking',
            level: 'Advanced',
            duration: '12 weeks'
        },
        {
            title: 'courses.web_security',
            level: 'Intermediate',
            duration: '8 weeks'
        },
        {
            title: 'courses.cloud_security',
            level: 'Advanced',
            duration: '10 weeks'
        },
        {
            title: 'courses.python',
            level: 'Intermediate',
            duration: '6 weeks'
        },
        {
            title: 'courses.advanced',
            level: 'Expert',
            duration: '14 weeks'
        }
    ];

    coursesGrid.innerHTML = courses.map(course => `
        <div class="course-card fade-in">
            <div class="course-header">
                <h3>${t(course.title)}</h3>
                <span class="course-level">${course.level}</span>
            </div>
            <div class="course-body">
                <p>${t(course.title)}</p>
                <div class="course-duration">${t('courses.duration')} ${course.duration}</div>
                <button class="course-button">Enroll Now</button>
            </div>
        </div>
    `).join('');
}

// ============== POPULATE PORTFOLIO ==============

function populatePortfolio() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    if (!portfolioGrid) return;

    const projects = [
        { title: 'SecureVault', category: 'Cyber Security', emoji: '🔐' },
        { title: 'CloudGuard', category: 'Cloud Security', emoji: '☁️' },
        { title: 'NetScan Pro', category: 'Security Tools', emoji: '🔍' },
        { title: 'DataShield', category: 'Data Protection', emoji: '🛡️' },
        { title: 'ThreatX', category: 'Threat Analysis', emoji: '⚡' },
        { title: 'WebSecure', category: 'Web Security', emoji: '🌐' }
    ];

    portfolioGrid.innerHTML = projects.map((project, index) => `
        <div class="portfolio-item fade-in" style="animation-delay: ${index * 0.1}s">
            <div class="portfolio-image">${project.emoji}</div>
            <div class="portfolio-content">
                <span class="portfolio-category">${project.category}</span>
                <h3>${project.title}</h3>
                <p>Advanced security solution for enterprise needs</p>
            </div>
        </div>
    `).join('');
}

// ============== FORM HANDLING ==============

function setupFormHandling() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('formName').value,
                email: document.getElementById('formEmail').value,
                subject: document.getElementById('formSubject').value,
                message: document.getElementById('formMessage').value
            };

            // Save to localStorage
            const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
            messages.push({
                ...formData,
                timestamp: new Date().toISOString()
            });
            localStorage.setItem('contactMessages', JSON.stringify(messages));

            // Show success message
            alert('Message sent successfully! (Stored in localStorage)');
            contactForm.reset();
        });
    }
}

// ============== SCROLL ANIMATIONS ==============

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card, .course-card, .portfolio-item, .stat-card').forEach(el => {
        observer.observe(el);
    });
}

function setupIntersectionObserver() {
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                appState.currentSection = entry.target.id;
                updateActiveNavLink();
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}

function updateActiveNavLink() {
    document.querySelectorAll('.nav-link').forEach(link => {
        const section = link.getAttribute('data-section');
        if (section === appState.currentSection) {
            link.style.color = 'var(--primary-color)';
        } else {
            link.style.color = 'var(--text-primary)';
        }
    });
}

// ============== CTA BUTTON ==============

document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('ctaButton');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

// ============== UTILITIES ==============

function getCompanyName() {
    return appState.companyName;
}

function setCompanyName(name) {
    appState.companyName = name;
    localStorage.setItem('companyName', name);
    const logoText = document.getElementById('logoText');
    if (logoText) logoText.textContent = name;
}

// Export for use in dashboard
window.appState = appState;
window.t = t;
window.changeLanguage = changeLanguage;
window.toggleTheme = toggleTheme;
window.setCompanyName = setCompanyName;
window.getCompanyName = getCompanyName;

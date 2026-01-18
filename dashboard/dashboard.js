/* ================================================== */
/* NORAMA TECH - DASHBOARD JAVASCRIPT */
/* ================================================== */

// ============== INITIALIZATION ==============

document.addEventListener('DOMContentLoaded', () => {
    initDashboard();
    setupEventListeners();
    loadDashboardData();
    setupSectionNavigation();
    populateTranslationEditors();
});

// ============== DASHBOARD STATE ==============

const dashboardState = {
    theme: localStorage.getItem('dashboard-theme') || 'dark',
    currentSection: 'general'
};

// ============== INITIALIZATION FUNCTIONS ==============

function initDashboard() {
    applyDashboardTheme();
    updateCompanyNameField();
}

function setupEventListeners() {
    // Sidebar toggle
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarClose = document.getElementById('sidebarClose');
    const sidebar = document.getElementById('sidebar');

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    if (sidebarClose) {
        sidebarClose.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    }

    // Theme toggle
    const dashThemeToggle = document.getElementById('dashThemeToggle');
    if (dashThemeToggle) {
        dashThemeToggle.addEventListener('click', toggleDashboardTheme);
    }

    // Sliders
    const fontSizeSlider = document.getElementById('fontSizeSlider');
    if (fontSizeSlider) {
        fontSizeSlider.addEventListener('input', updateFontSizeValue);
    }

    const borderRadiusSlider = document.getElementById('borderRadiusSlider');
    if (borderRadiusSlider) {
        borderRadiusSlider.addEventListener('input', updateBorderRadiusValue);
    }

    const shadowSlider = document.getElementById('shadowSlider');
    if (shadowSlider) {
        shadowSlider.addEventListener('input', updateShadowValue);
    }

    // Color pickers
    const colorInputs = document.querySelectorAll('.color-input');
    colorInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            const hexInput = e.target.nextElementSibling;
            if (hexInput) {
                hexInput.value = e.target.value;
            }
        });
    });

    // Page visibility toggles
    const pageToggles = document.querySelectorAll('.page-toggle');
    pageToggles.forEach(toggle => {
        toggle.addEventListener('change', updatePageStatus);
    });

    // Animation toggles
    const animationToggles = document.querySelectorAll('.animation-toggle');
    animationToggles.forEach(toggle => {
        toggle.addEventListener('change', updateAnimationStatus);
    });

    // Animation preview
    const previewBox = document.querySelector('.preview-box');
    if (previewBox) {
        previewBox.addEventListener('click', () => {
            previewBox.style.animation = 'none';
            setTimeout(() => {
                previewBox.style.animation = 'bounce 2s infinite';
            }, 10);
        });
    }
}

function setupSectionNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const section = item.getAttribute('data-section');
            if (section && section !== 'preview') {
                e.preventDefault();
                showSection(section);
                
                // Update active state
                navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');
                
                // Close mobile sidebar
                const sidebar = document.getElementById('sidebar');
                sidebar.classList.remove('active');
            }
        });
    });

    // Set initial active section
    const generalSection = document.querySelector('[data-section="general"]');
    if (generalSection) {
        generalSection.classList.add('active');
    }
}

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.dashboard-section').forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active');
    }

    dashboardState.currentSection = sectionId;
}

// ============== THEME MANAGEMENT ==============

function toggleDashboardTheme() {
    const newTheme = dashboardState.theme === 'light' ? 'dark' : 'light';
    dashboardState.theme = newTheme;
    localStorage.setItem('dashboard-theme', newTheme);
    applyDashboardTheme();
}

function applyDashboardTheme() {
    const theme = dashboardState.theme;
    document.documentElement.setAttribute('data-theme', theme);
    
    const themeToggle = document.getElementById('dashThemeToggle');
    if (themeToggle) {
        themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// ============== COMPANY INFORMATION ==============

function updateCompanyNameField() {
    const companyNameInput = document.getElementById('companyNameInput');
    if (companyNameInput) {
        const companyName = localStorage.getItem('companyName') || 'Norama Tech';
        companyNameInput.value = companyName;
    }
}

function saveCompanyName() {
    const input = document.getElementById('companyNameInput');
    const name = input.value.trim();
    
    if (!name) {
        alert('Please enter a company name');
        return;
    }

    localStorage.setItem('companyName', name);
    
    // Update in main site
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        try {
            if (iframe.contentWindow.setCompanyName) {
                iframe.contentWindow.setCompanyName(name);
            }
        } catch (e) {
            console.error('Cannot access iframe:', e);
        }
    });

    showNotification('Company name saved successfully!');
}

function saveLogoText() {
    const logoInput = document.getElementById('logoInput');
    const text = logoInput.value.trim();
    
    localStorage.setItem('logoText', text);
    showNotification('Logo text saved successfully!');
}

// ============== HERO SECTION CONTENT ==============

function saveHeroTitle() {
    const input = document.getElementById('heroTitleInput');
    localStorage.setItem('heroTitle', input.value);
    updateMainSite();
    showNotification('Hero title updated!');
}

function saveHeroSubtitle() {
    const input = document.getElementById('heroSubtitleInput');
    localStorage.setItem('heroSubtitle', input.value);
    updateMainSite();
    showNotification('Hero subtitle updated!');
}

function saveHeroDesc() {
    const input = document.getElementById('heroDescInput');
    localStorage.setItem('heroDescription', input.value);
    updateMainSite();
    showNotification('Hero description updated!');
}

// ============== ABOUT SECTION CONTENT ==============

function saveAboutDesc() {
    const input = document.getElementById('aboutDescInput');
    localStorage.setItem('aboutDescription', input.value);
    updateMainSite();
    showNotification('About description updated!');
}

function saveVision() {
    const input = document.getElementById('visionInput');
    localStorage.setItem('visionDescription', input.value);
    updateMainSite();
    showNotification('Vision statement updated!');
}

// ============== CTA BUTTON ==============

function saveCtaText() {
    const input = document.getElementById('ctaTextInput');
    localStorage.setItem('ctaButtonText', input.value);
    updateMainSite();
    showNotification('CTA button text updated!');
}

// ============== COLOR MANAGEMENT ==============

function savePrimaryColor() {
    const colorInput = document.getElementById('primaryColor');
    const hexInput = document.getElementById('primaryColorHex');
    
    const color = colorInput.value || hexInput.value;
    localStorage.setItem('primaryColor', color);
    applyCustomColors();
    showNotification('Primary color applied!');
}

function saveSecondaryColor() {
    const colorInput = document.getElementById('secondaryColor');
    const hexInput = document.getElementById('secondaryColorHex');
    
    const color = colorInput.value || hexInput.value;
    localStorage.setItem('secondaryColor', color);
    applyCustomColors();
    showNotification('Secondary color applied!');
}

function saveTertiaryColor() {
    const colorInput = document.getElementById('tertiaryColor');
    const hexInput = document.getElementById('tertiaryColorHex');
    
    const color = colorInput.value || hexInput.value;
    localStorage.setItem('tertiaryColor', color);
    applyCustomColors();
    showNotification('Tertiary color applied!');
}

function applyCustomColors() {
    const primaryColor = localStorage.getItem('primaryColor') || '#0066ff';
    const secondaryColor = localStorage.getItem('secondaryColor') || '#1a3a5c';
    const tertiaryColor = localStorage.getItem('tertiaryColor') || '#0099ff';

    // Apply to iframe if available
    const iframe = document.getElementById('previewFrame');
    if (iframe) {
        try {
            const doc = iframe.contentDocument;
            if (doc) {
                const style = doc.createElement('style');
                style.textContent = `
                    :root {
                        --primary-color: ${primaryColor} !important;
                        --secondary-color: ${secondaryColor} !important;
                        --tertiary-color: ${tertiaryColor} !important;
                    }
                `;
                doc.head.appendChild(style);
            }
        } catch (e) {
            console.error('Cannot apply colors to iframe:', e);
        }
    }
}

// ============== TYPOGRAPHY ==============

function saveFontFamily() {
    const select = document.getElementById('fontFamily');
    const fontFamily = select.value;
    localStorage.setItem('fontFamily', fontFamily);
    
    const iframe = document.getElementById('previewFrame');
    if (iframe) {
        try {
            const doc = iframe.contentDocument;
            if (doc) {
                doc.body.style.fontFamily = fontFamily;
            }
        } catch (e) {
            console.error('Cannot apply font to iframe:', e);
        }
    }
    
    showNotification('Font family changed!');
}

function saveFontSize() {
    const slider = document.getElementById('fontSizeSlider');
    const size = slider.value;
    localStorage.setItem('fontSize', size);
    
    const iframe = document.getElementById('previewFrame');
    if (iframe) {
        try {
            const doc = iframe.contentDocument;
            if (doc) {
                doc.documentElement.style.fontSize = (size / 100 * 16) + 'px';
            }
        } catch (e) {
            console.error('Cannot apply font size to iframe:', e);
        }
    }
    
    showNotification('Font size updated!');
}

function updateFontSizeValue() {
    const slider = document.getElementById('fontSizeSlider');
    const value = document.getElementById('fontSizeValue');
    value.textContent = slider.value + '%';
}

// ============== LAYOUT SETTINGS ==============

function saveBorderRadius() {
    const slider = document.getElementById('borderRadiusSlider');
    const radius = slider.value;
    localStorage.setItem('borderRadius', radius);
    
    const iframe = document.getElementById('previewFrame');
    if (iframe) {
        try {
            const doc = iframe.contentDocument;
            if (doc) {
                const style = doc.createElement('style');
                style.textContent = `
                    .card, .service-card, .course-card, 
                    .portfolio-item, .feature-item {
                        border-radius: ${radius}px !important;
                    }
                `;
                doc.head.appendChild(style);
            }
        } catch (e) {
            console.error('Cannot apply border radius to iframe:', e);
        }
    }
    
    showNotification('Border radius updated!');
}

function updateBorderRadiusValue() {
    const slider = document.getElementById('borderRadiusSlider');
    const value = document.getElementById('borderRadiusValue');
    value.textContent = slider.value + 'px';
}

function saveShadowIntensity() {
    const slider = document.getElementById('shadowSlider');
    const intensity = parseInt(slider.value);
    localStorage.setItem('shadowIntensity', intensity);
    showNotification('Shadow intensity updated!');
}

function updateShadowValue() {
    const slider = document.getElementById('shadowSlider');
    const value = document.getElementById('shadowValue');
    const intensity = parseInt(slider.value);
    
    if (intensity < 33) {
        value.textContent = 'Light';
    } else if (intensity < 66) {
        value.textContent = 'Medium';
    } else {
        value.textContent = 'Heavy';
    }
}

// ============== PAGE VISIBILITY ==============

function saveSectionVisibility() {
    const checkboxes = {
        'home': document.getElementById('homeVisible'),
        'about': document.getElementById('aboutVisible'),
        'services': document.getElementById('servicesVisible'),
        'courses': document.getElementById('coursesVisible'),
        'portfolio': document.getElementById('portfolioVisible'),
        'contact': document.getElementById('contactVisible')
    };

    const visibility = {};
    Object.keys(checkboxes).forEach(key => {
        visibility[key] = checkboxes[key].checked;
    });

    localStorage.setItem('sectionVisibility', JSON.stringify(visibility));
    updateMainSite();
    showNotification('Section visibility updated!');
}

function updatePageStatus() {
    const pageItems = document.querySelectorAll('.page-item');
    pageItems.forEach(item => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        const status = item.querySelector('.page-status');
        if (checkbox && status) {
            status.textContent = checkbox.checked ? 'Visible' : 'Hidden';
            status.style.color = checkbox.checked ? 'var(--success)' : 'var(--danger)';
        }
    });
}

function resetPageOrder() {
    if (confirm('Reset page order to default?')) {
        localStorage.removeItem('pageOrder');
        showNotification('Page order reset!');
    }
}

// ============== ANIMATIONS ==============

function saveAnimationSpeed() {
    const select = document.getElementById('animationSpeed');
    const speed = select.value;
    localStorage.setItem('animationSpeed', speed);
    
    const multiplier = {
        'slow': 0.8,
        'normal': 1,
        'fast': 1.5
    };

    const iframe = document.getElementById('previewFrame');
    if (iframe) {
        try {
            const doc = iframe.contentDocument;
            if (doc) {
                const style = doc.createElement('style');
                style.textContent = `
                    * {
                        --transition-fast: ${0.2 * multiplier[speed]}s ease !important;
                        --transition-normal: ${0.3 * multiplier[speed]}s ease !important;
                        --transition-slow: ${0.5 * multiplier[speed]}s ease !important;
                    }
                `;
                doc.head.appendChild(style);
            }
        } catch (e) {
            console.error('Cannot apply animation speed to iframe:', e);
        }
    }
    
    showNotification(`Animation speed set to ${speed}!`);
}

function updateAnimationStatus() {
    const toggles = document.querySelectorAll('.animation-toggle');
    const animations = {};
    
    toggles.forEach(toggle => {
        const animation = toggle.getAttribute('data-animation');
        animations[animation] = toggle.checked;
    });

    localStorage.setItem('animations', JSON.stringify(animations));
}

function saveAnimationSettings() {
    updateAnimationStatus();
    showNotification('Animation settings saved!');
}

// ============== LANGUAGE MANAGEMENT ==============

function populateTranslationEditors() {
    const englishContainer = document.getElementById('englishTranslations');
    const arabicContainer = document.getElementById('arabicTranslations');

    if (!englishContainer || !arabicContainer) return;

    const enTexts = {
        'hero.title': 'Welcome to Norama Tech',
        'hero.subtitle': 'Next Generation Cyber Security & Tech Solutions',
        'services.cyber_security': 'Cyber Security & Penetration Testing',
        'about.description': 'Norama Tech is a leading global technology company...',
        'contact.title': 'Get in Touch'
    };

    const arTexts = {
        'hero.title': 'مرحبًا بك في نوراما تيك',
        'hero.subtitle': 'حلول الأمن السيبراني والتكنولوجيا من الجيل التالي',
        'services.cyber_security': 'الأمن السيبراني واختبار الاختراق',
        'about.description': 'نوراما تيك هي شركة تكنولوجيا عالمية رائدة...',
        'contact.title': 'تواصل معنا'
    };

    englishContainer.innerHTML = Object.keys(enTexts).map(key => `
        <div class="translation-item">
            <label>${key}</label>
            <input type="text" data-key="${key}" value="${enTexts[key]}" class="en-translation">
        </div>
    `).join('');

    arabicContainer.innerHTML = Object.keys(arTexts).map(key => `
        <div class="translation-item">
            <label>${key}</label>
            <input type="text" data-key="${key}" value="${arTexts[key]}" class="ar-translation" dir="rtl">
        </div>
    `).join('');
}

function saveEnglishTranslations() {
    const inputs = document.querySelectorAll('.en-translation');
    const translations = {};
    
    inputs.forEach(input => {
        const key = input.getAttribute('data-key');
        translations[key] = input.value;
    });

    localStorage.setItem('enTranslations', JSON.stringify(translations));
    updateMainSite();
    showNotification('English translations saved!');
}

function saveArabicTranslations() {
    const inputs = document.querySelectorAll('.ar-translation');
    const translations = {};
    
    inputs.forEach(input => {
        const key = input.getAttribute('data-key');
        translations[key] = input.value;
    });

    localStorage.setItem('arTranslations', JSON.stringify(translations));
    updateMainSite();
    showNotification('Arabic translations saved!');
}

function saveDefaultLanguage() {
    const select = document.getElementById('defaultLanguage');
    localStorage.setItem('defaultLanguage', select.value);
    showNotification('Default language set!');
}

// ============== DATA LOADING ==============

function loadDashboardData() {
    loadCompanyData();
    loadColorData();
    loadTypographyData();
    loadAnimationData();
}

function loadCompanyData() {
    const companyName = localStorage.getItem('companyName') || 'Norama Tech';
    const input = document.getElementById('companyNameInput');
    if (input) {
        input.value = companyName;
    }
}

function loadColorData() {
    const primaryColor = localStorage.getItem('primaryColor') || '#0066ff';
    const secondaryColor = localStorage.getItem('secondaryColor') || '#1a3a5c';
    const tertiaryColor = localStorage.getItem('tertiaryColor') || '#0099ff';

    document.getElementById('primaryColor').value = primaryColor;
    document.getElementById('primaryColorHex').value = primaryColor;

    document.getElementById('secondaryColor').value = secondaryColor;
    document.getElementById('secondaryColorHex').value = secondaryColor;

    document.getElementById('tertiaryColor').value = tertiaryColor;
    document.getElementById('tertiaryColorHex').value = tertiaryColor;
}

function loadTypographyData() {
    const fontSize = localStorage.getItem('fontSize') || '100';
    const fontFamily = localStorage.getItem('fontFamily') || "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    const borderRadius = localStorage.getItem('borderRadius') || '16';

    document.getElementById('fontSizeSlider').value = fontSize;
    document.getElementById('fontSizeValue').textContent = fontSize + '%';

    document.getElementById('fontFamily').value = fontFamily;

    document.getElementById('borderRadiusSlider').value = borderRadius;
    document.getElementById('borderRadiusValue').textContent = borderRadius + 'px';
}

function loadAnimationData() {
    const animations = JSON.parse(localStorage.getItem('animations') || '{}');
    const animationSpeed = localStorage.getItem('animationSpeed') || 'normal';

    document.getElementById('animationSpeed').value = animationSpeed;

    const toggles = document.querySelectorAll('.animation-toggle');
    toggles.forEach(toggle => {
        const animation = toggle.getAttribute('data-animation');
        toggle.checked = animations[animation] !== false;
    });
}

// ============== UTILITIES ==============

function updateMainSite() {
    const iframe = document.getElementById('previewFrame');
    if (iframe) {
        iframe.src = iframe.src;
    }
}

function refreshPreview() {
    const iframe = document.getElementById('previewFrame');
    if (iframe) {
        iframe.src = '../index.html';
        showNotification('Preview refreshed!');
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'success-message';
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.top = '80px';
    notification.style.right = '20px';
    notification.style.zIndex = '2000';
    notification.style.maxWidth = '400px';

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function clearAllData() {
    if (confirm('Are you sure you want to clear ALL data? This cannot be undone!')) {
        if (confirm('This will reset everything to default. Continue?')) {
            localStorage.clear();
            sessionStorage.clear();
            location.reload();
        }
    }
}

// ============== EXPORT FUNCTIONS ==============

window.saveCompanyName = saveCompanyName;
window.saveLogoText = saveLogoText;
window.saveHeroTitle = saveHeroTitle;
window.saveHeroSubtitle = saveHeroSubtitle;
window.saveHeroDesc = saveHeroDesc;
window.saveAboutDesc = saveAboutDesc;
window.saveVision = saveVision;
window.saveCtaText = saveCtaText;
window.savePrimaryColor = savePrimaryColor;
window.saveSecondaryColor = saveSecondaryColor;
window.saveTertiaryColor = saveTertiaryColor;
window.saveFontFamily = saveFontFamily;
window.saveFontSize = saveFontSize;
window.saveBorderRadius = saveBorderRadius;
window.saveShadowIntensity = saveShadowIntensity;
window.saveSectionVisibility = saveSectionVisibility;
window.saveAnimationSpeed = saveAnimationSpeed;
window.saveAnimationSettings = saveAnimationSettings;
window.saveDefaultLanguage = saveDefaultLanguage;
window.saveEnglishTranslations = saveEnglishTranslations;
window.saveArabicTranslations = saveArabicTranslations;
window.resetPageOrder = resetPageOrder;
window.refreshPreview = refreshPreview;
window.clearAllData = clearAllData;
window.toggleDashboardTheme = toggleDashboardTheme;

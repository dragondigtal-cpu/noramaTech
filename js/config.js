/* ================================================== */
/* NORAMA TECH - DEFAULT CONFIGURATION */
/* ================================================== */

// This file initializes default settings on first load
// Place this before main.js or include it as a separate script

const DEFAULT_CONFIG = {
    // Company Information
    companyName: 'Norama Tech',
    logoText: 'Norama',
    
    // Theme Settings
    theme: 'dark',
    language: 'en',
    
    // Color Scheme
    colors: {
        primary: '#0066ff',
        secondary: '#1a3a5c',
        tertiary: '#0099ff'
    },
    
    // Typography
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    fontSize: 100, // percentage
    
    // Layout
    borderRadius: 16, // pixels
    shadowIntensity: 50, // 0-100
    
    // Animation Settings
    animationSpeed: 'normal', // slow, normal, fast
    animations: {
        hover: true,
        scroll: true,
        glow: true,
        gradient: true,
        particles: true
    },
    
    // Section Visibility
    sectionsVisible: {
        home: true,
        about: true,
        services: true,
        cybersecurity: true,
        courses: true,
        portfolio: true,
        contact: true
    },
    
    // Content Text
    content: {
        heroTitle: 'Welcome to Norama Tech',
        heroSubtitle: 'Next Generation Cyber Security & Tech Solutions',
        heroDescription: 'Empowering businesses with cutting-edge technology, robust security, and innovative solutions',
        ctaButtonText: 'Get Started'
    }
};

// Initialize default config on first load
function initializeDefaultConfig() {
    if (!localStorage.getItem('config_initialized')) {
        Object.keys(DEFAULT_CONFIG).forEach(key => {
            if (typeof DEFAULT_CONFIG[key] === 'object') {
                localStorage.setItem(key, JSON.stringify(DEFAULT_CONFIG[key]));
            } else {
                localStorage.setItem(key, DEFAULT_CONFIG[key]);
            }
        });
        localStorage.setItem('config_initialized', 'true');
    }
}

// Run on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeDefaultConfig);
} else {
    initializeDefaultConfig();
}

// Export for use in other scripts
window.DEFAULT_CONFIG = DEFAULT_CONFIG;
window.initializeDefaultConfig = initializeDefaultConfig;

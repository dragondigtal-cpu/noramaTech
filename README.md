# 🚀 Norama Tech - Modern Web Platform + Admin Dashboard

## 📋 Project Overview

Norama Tech is a **complete, production-ready website and admin dashboard** for a global technology company specializing in cybersecurity, web development, mobile apps, and training services.

### Features ✨

- ✅ **100% Vanilla JavaScript** - No frameworks, no libraries
- ✅ **HTML5 + CSS3** - Modern, semantic markup with advanced CSS
- ✅ **Dark/Light Mode** - Full theme support with LocalStorage persistence
- ✅ **Bilingual Support** - English (LTR) & Arabic (RTL) with instant switching
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **Admin Dashboard** - Complete control over website content and design
- ✅ **Smooth Animations** - Futuristic effects, scroll animations, hover effects
- ✅ **Live Preview** - See changes in real-time in the dashboard
- ✅ **LocalStorage Management** - All data persists without backend

## 📁 Project Structure

```
norama/
├── index.html              # Main website (single-page application)
├── css/
│   └── style.css          # All website styles with animations
├── js/
│   └── main.js            # JavaScript logic, i18n, state management
├── dashboard/
│   ├── dashboard.html     # Dashboard interface
│   ├── dashboard.css      # Dashboard styling
│   └── dashboard.js       # Dashboard functionality
├── assets/                 # Images and media (if needed)
└── README.md              # This file
```

## 🎯 Key Pages

1. **Home** - Hero section with 3D rotating cube and compelling copy
2. **About** - Company info, vision, and statistics
3. **Services** - 6 main service offerings with icons
4. **Cyber Security** - Detailed security features
5. **Courses** - Training programs with levels and duration
6. **Portfolio** - Project showcase with categories
7. **Contact** - Contact form (stored in LocalStorage)

## 🎨 Design System

### Colors (Customizable)
- **Primary**: #00ff88 (Neon Green)
- **Secondary**: #ff0099 (Hot Pink)
- **Tertiary**: #00d9ff (Cyan)

### Theme
- Futuristic & Cyber aesthetic
- Dark mystery vibe with neon accents
- Smooth, professional animations
- Glassmorphism effects with backdrop-filter

### Typography
- Modern sans-serif (Segoe UI as default)
- Responsive font sizing
- Multiple heading levels
- Customizable font family and size

## 🎯 Dashboard Features

### 1. General Settings
- Company name management
- Logo customization
- Force Dark Mode
- Toggle animations
- Default language selection
- Section visibility control

### 2. Content Management
- Edit hero section (title, subtitle, description)
- Modify about section content
- Update call-to-action button text
- Vision statement editing

### 3. Design Controls
- Color picker for primary, secondary, tertiary colors
- Font family selection
- Font size adjustment (slider: 80-120%)
- Border radius customization
- Shadow intensity control

### 4. Page Management
- Toggle page visibility (show/hide entire sections)
- Page reordering capability
- Individual section controls

### 5. Animation Settings
- Global animation enable/disable
- Animation speed control (Slow/Normal/Fast)
- Individual animation toggles:
  - Hover effects
  - Scroll animations
  - Glow effects
  - Gradient animations
  - Particle effects

### 6. Language Management
- Edit English translations
- Edit Arabic translations
- Instant preview in website
- Support for all text elements

### 7. Live Preview
- Embedded iframe showing live website
- Real-time updates from dashboard changes
- Refresh button for manual refresh

## 🚀 How to Use

### For End Users (Website)

1. **Access the Website**
   - Open `index.html` in a web browser
   - Website loads with default configuration

2. **Toggle Dark/Light Mode**
   - Click the sun/moon icon in the navigation bar
   - Theme preference is saved to LocalStorage

3. **Change Language**
   - Click the language dropdown (EN/AR)
   - Entire site updates to selected language
   - RTL/LTR layout automatically adjusts

4. **View All Sections**
   - Navigate using the top navigation menu
   - Smooth scroll animations activate
   - Responsive design adapts to screen size

5. **Contact Us**
   - Fill the contact form on the Contact page
   - Submit (data saved to LocalStorage)
   - Can view submitted messages in browser DevTools

### For Administrators (Dashboard)

1. **Access Dashboard**
   - From main website: Click the grid icon in top navigation
   - Direct access: Open `dashboard/dashboard.html`

2. **General Settings**
   - Update company name → immediately reflects on website
   - Toggle Dark Mode to match your preference
   - Set default language for all visitors
   - Control which sections are visible

3. **Edit Content**
   - Click "Content" in sidebar
   - Edit hero title, subtitle, description
   - Modify about section and vision
   - Update CTA button text
   - Changes reflect in live preview

4. **Customize Design**
   - Click "Design" in sidebar
   - Use color pickers to change primary, secondary, tertiary colors
   - Select different font families
   - Adjust font size with slider
   - Modify border radius and shadow intensity
   - See changes in real-time on website

5. **Manage Pages**
   - Click "Pages" in sidebar
   - Toggle visibility of each section
   - Show/hide entire pages without removing content
   - Reset page order to defaults

6. **Control Animations**
   - Click "Animations" in sidebar
   - Enable/disable all animations globally
   - Set animation speed (Slow/Normal/Fast)
   - Toggle specific animation types
   - Click preview box to test animations

7. **Manage Languages**
   - Click "Languages" in sidebar
   - Edit English text for any translation key
   - Edit Arabic text with RTL support
   - Save changes → website updates immediately

8. **Live Preview**
   - Click "Live Preview" in sidebar
   - See embedded website with all your changes
   - Refresh button to reload preview
   - Test responsiveness by resizing browser

## 🔧 Technical Details

### Browser Compatibility
- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance
- No external dependencies
- Minimal CSS and JavaScript
- Efficient LocalStorage usage
- Smooth animations with hardware acceleration
- Lazy loading for images (if added)

### LocalStorage Keys
```javascript
// Main site
'language'              // Current language (en/ar)
'theme'                 // Current theme (light/dark)
'companyName'           // Company name
'contactMessages'       // Contact form submissions
'sectionVisibility'     // Visibility of sections

// Dashboard
'dashboard-theme'       // Dashboard theme
'companyName'           // Same as above
'logoText'              // Logo text
'heroTitle'             // Hero section title
'heroSubtitle'          // Hero section subtitle
'heroDescription'       // Hero section description
'aboutDescription'      // About section text
'visionDescription'     // Vision statement
'ctaButtonText'         // CTA button text
'primaryColor'          // Primary color
'secondaryColor'        // Secondary color
'tertiaryColor'         // Tertiary color
'fontFamily'            // Font family selection
'fontSize'              // Font size percentage
'borderRadius'          // Border radius value
'shadowIntensity'       // Shadow intensity (0-100)
'animationSpeed'        // Animation speed (slow/normal/fast)
'animations'            // Animation toggles
'defaultLanguage'       // Default language setting
'enTranslations'        // English translations
'arTranslations'        // Arabic translations
'pageOrder'             // Page display order
```

### Key JavaScript Functions

**Main Site (main.js)**
- `toggleTheme()` - Switch dark/light mode
- `changeLanguage(lang)` - Change language
- `t(key)` - Translate text key
- `setCompanyName(name)` - Update company name
- `getCompanyName()` - Get company name

**Dashboard (dashboard.js)**
- `saveCompanyName()` - Save company info
- `savePrimaryColor()` - Apply color changes
- `saveFontFamily()` - Change typography
- `saveAnimationSpeed()` - Adjust animations
- `saveEnglishTranslations()` - Update translations
- `showSection(id)` - Navigate sections
- `clearAllData()` - Reset everything

## 🎨 Customization Guide

### Change Brand Colors
1. Go to Dashboard → Design
2. Click color pickers to select new colors
3. Hex codes are editable directly
4. Changes apply instantly to website

### Add New Services
1. Edit `js/main.js` - Find `populateServices()`
2. Add new service object to array:
   ```javascript
   {
       icon: '🔒',
       titleKey: 'services.new_service',
       descKey: 'services.new_desc'
   }
   ```
3. Add translations to `translations` object

### Create New Content Sections
1. Edit `index.html` - Add new `<section>` with unique ID
2. Add CSS styles in `style.css`
3. Add JavaScript logic in `main.js` if needed
4. Add to navigation menu

### Modify Dashboard Functionality
1. Edit `dashboard/dashboard.html` for structure
2. Update `dashboard/dashboard.css` for styling
3. Modify `dashboard/dashboard.js` for logic
4. Add new settings cards as needed

## 🔐 Security Notes

- No sensitive data is transmitted
- All data stored locally in browser (LocalStorage)
- Contact form submissions stored locally only
- Passwords and credentials NOT stored
- No backend/server required
- No tracking or analytics

## ⚡ Performance Tips

1. **Reduce Animation Complexity**
   - Dashboard → Animations → Disable unused effects

2. **Optimize Images**
   - Use WebP format where supported
   - Compress images before adding

3. **Minimize CSS/JS**
   - Current files are already optimized
   - Cache in browser for fast loading

4. **Mobile Optimization**
   - Site is mobile-first responsive
   - Test on real devices
   - Use lighthouse for audits

## 🐛 Troubleshooting

### Dashboard Changes Not Showing
1. Refresh the main website
2. Clear browser cache (Ctrl+Shift+Del)
3. Check browser console for errors (F12)

### Translations Not Appearing
1. Verify language is set correctly
2. Check translation keys in main.js
3. Ensure all text elements have id attributes

### Animations Not Working
1. Ensure animations are enabled in Dashboard
2. Check animation speed setting
3. Try clearing LocalStorage and reloading

### Colors Not Updating
1. Verify color format (hex codes like #00ff88)
2. Check color picker values match
3. Refresh preview in dashboard

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **iPad**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1400px

## 🎯 Future Enhancements

Possible additions (without breaking vanilla approach):
- Blog section with markdown
- Team member profiles
- Service pricing calculator
- Client testimonials carousel
- Newsletter signup
- Advanced filtering in portfolio
- Dark mode schedule (auto at sunset)
- Accessibility improvements (WCAG AA)

## 📞 Support & Maintenance

### Regular Maintenance
1. Check console for JavaScript errors
2. Test all features monthly
3. Verify localStorage isn't full
4. Update contact email if changed

### Backup Important Data
1. Export LocalStorage periodically
2. Save exported configurations
3. Document any customizations

## 📄 License

This project is custom-built for Norama Tech. All rights reserved.

## 👨‍💻 Developer Notes

### Code Quality
- Clean, commented code throughout
- Semantic HTML structure
- CSS uses custom properties (CSS variables)
- JavaScript uses ES6+ where appropriate
- No global variable pollution

### Browser DevTools Tips
- Use Application tab to view LocalStorage
- Use Network tab to check loading performance
- Use Console to debug JavaScript
- Use Elements to inspect DOM structure
- Use Lighthouse for performance audits

### Debugging
```javascript
// View all LocalStorage data
console.log(localStorage)

// Clear specific key
localStorage.removeItem('key')

// View current app state
console.log(appState)
console.log(dashboardState)

// Test translations
console.log(t('hero.title'))
```

---

**Last Updated**: January 2026
**Version**: 1.0.0
**Status**: Production Ready ✅

🎉 **Enjoy your new website and dashboard!**

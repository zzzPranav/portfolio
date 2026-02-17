# Technology Stack

## Programming Languages

### HTML5
- Version: HTML5 (DOCTYPE html)
- Usage: Semantic markup for all page content and structure
- Key features: data attributes for library configuration, accessibility attributes

### CSS3
- Main stylesheet: `assets/css/main.css`
- Preprocessor: SCSS (source files in `assets/scss/`)
- Framework: Bootstrap 5.3.3
- Custom styling for theme-specific components

### JavaScript
- Version: ES6+ (modern JavaScript)
- Main file: `assets/js/main.js`
- Usage: Interactive features, animations, form handling, library initialization

### PHP
- Version: Not specified (server-dependent)
- Usage: Contact form backend processing (`forms/contact.php`)
- Handles form validation and email sending

## Frontend Framework & Libraries

### Bootstrap 5.3.3
- **Purpose**: Responsive grid system and UI components
- **Files**: 
  - `assets/vendor/bootstrap/css/bootstrap.min.css`
  - `assets/vendor/bootstrap/js/bootstrap.bundle.min.js`
- **Usage**: Layout structure, responsive utilities, component styling

### Bootstrap Icons
- **Purpose**: Icon font library
- **File**: `assets/vendor/bootstrap-icons/bootstrap-icons.css`
- **Usage**: Navigation icons, social media icons, UI elements

## Animation & Effects Libraries

### AOS (Animate On Scroll)
- **Purpose**: Scroll-triggered animations
- **Files**: 
  - `assets/vendor/aos/aos.css`
  - `assets/vendor/aos/aos.js`
- **Usage**: Fade-up, fade-in effects on sections and elements

### Typed.js
- **Purpose**: Typing animation effect
- **File**: `assets/vendor/typed.js/typed.umd.js`
- **Usage**: Dynamic text typing in hero section

### Waypoints
- **Purpose**: Scroll position detection
- **File**: `assets/vendor/waypoints/noframework.waypoints.js`
- **Usage**: Trigger events at specific scroll positions

### PureCounter
- **Purpose**: Animated number counting
- **File**: `assets/vendor/purecounter/purecounter_vanilla.js`
- **Usage**: Statistics section counters

## UI Component Libraries

### Swiper
- **Purpose**: Touch-enabled slider/carousel
- **Files**:
  - `assets/vendor/swiper/swiper-bundle.min.css`
  - `assets/vendor/swiper/swiper-bundle.min.js`
- **Usage**: Testimonials carousel with autoplay and pagination
- **Configuration**: JSON-based config in script tags

### GLightbox
- **Purpose**: Lightbox for images and galleries
- **Files**:
  - `assets/vendor/glightbox/css/glightbox.min.css`
  - `assets/vendor/glightbox/js/glightbox.min.js`
- **Usage**: Portfolio image viewing with zoom functionality

### Isotope Layout
- **Purpose**: Filterable and sortable grid layouts
- **File**: `assets/vendor/isotope-layout/isotope.pkgd.min.js`
- **Usage**: Portfolio filtering by category (App, Product, Branding, Books)

### ImagesLoaded
- **Purpose**: Image loading detection
- **File**: `assets/vendor/imagesloaded/imagesloaded.pkgd.min.js`
- **Usage**: Ensures proper layout after images load (works with Isotope)

## Form Handling

### PHP Email Form
- **Purpose**: Contact form validation and processing
- **File**: `assets/vendor/php-email-form/validate.js`
- **Backend**: `forms/contact.php`
- **Features**: Client-side validation, loading states, error/success messages

## Fonts

### Google Fonts
- **Families**:
  - Roboto (weights: 100-900, regular and italic)
  - Poppins (weights: 100-900, regular and italic)
  - Raleway (weights: 100-900, regular and italic)
- **Loading**: Preconnect optimization for performance
- **Display**: swap strategy for faster text rendering

## Build System

### No Build Process Required
- Static HTML/CSS/JS files served directly
- Optional SCSS compilation for style customization
- No package manager dependencies (npm/yarn) needed for deployment

### SCSS Compilation (Optional)
- Source files: `assets/scss/`
- Output: `assets/css/main.css`
- Instructions: See `assets/scss/Readme.txt`

## Deployment

### GitHub Actions
- **Workflow**: `.github/workflows/static.yml`
- **Purpose**: Automated static site deployment
- **Trigger**: Push to repository
- **Target**: GitHub Pages or static hosting

### Static Hosting Compatible
- No server-side requirements except PHP for contact form
- Can be deployed to:
  - GitHub Pages
  - Netlify
  - Vercel
  - Any static hosting service
  - Traditional web hosting with PHP support

## Development Commands

### Local Development
```bash
# No build required - open index.html directly in browser
# Or use any local server:
python -m http.server 8000
# or
php -S localhost:8000
```

### SCSS Compilation (if customizing styles)
```bash
# Requires SCSS compiler
# See assets/scss/Readme.txt for specific instructions
```

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Bootstrap 5.3.3 browser support
- ES6+ JavaScript features (may need transpilation for older browsers)
- Responsive design: Mobile, tablet, desktop viewports

## External Dependencies
- Google Fonts CDN
- Google Maps embed (for contact section)
- All other dependencies bundled in `assets/vendor/`

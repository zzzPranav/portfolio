# Project Structure

## Directory Organization

### Root Level
```
portfolio/
├── index.html              # Main landing page with all sections
├── portfolio-details.html  # Individual portfolio item detail page
├── service-details.html    # Service detail page template
├── starter-page.html       # Blank starter template
├── README.md              # Project documentation
└── Readme.txt             # Template documentation
```

### Assets Directory (`assets/`)
Central location for all static resources organized by type.

#### CSS (`assets/css/`)
- `main.css` - Compiled main stylesheet with all custom styles

#### JavaScript (`assets/js/`)
- `main.js` - Core application logic and initialization scripts

#### Images (`assets/img/`)
- `hero-bg.jpg` - Hero section background image
- `my-profile-img.jpg` - Profile photo
- `favicon.png` - Browser favicon
- `apple-touch-icon.png` - iOS home screen icon
- `logo.png` - Site logo
- `services.jpg` - Services section image
- `portfolio/` - Portfolio item images subdirectory
- `testimonials/` - Testimonial profile images subdirectory

#### SCSS (`assets/scss/`)
- Source SCSS files for CSS compilation (development)
- `Readme.txt` - SCSS compilation instructions

#### Vendor Libraries (`assets/vendor/`)
Third-party dependencies organized by library:
- `aos/` - Animate On Scroll library for scroll animations
- `bootstrap/` - Bootstrap 5.3.3 framework (CSS and JS)
- `bootstrap-icons/` - Bootstrap icon font
- `glightbox/` - Lightbox for image galleries
- `imagesloaded/` - Image loading detection utility
- `isotope-layout/` - Filterable and sortable layouts
- `php-email-form/` - Contact form validation
- `purecounter/` - Animated counter for statistics
- `swiper/` - Touch slider for testimonials carousel
- `typed.js/` - Typing animation effect
- `waypoints/` - Scroll-based trigger library

### Forms Directory (`forms/`)
- `contact.php` - Server-side contact form processing script
- `Readme.txt` - Form configuration instructions

### GitHub Workflows (`.github/workflows/`)
- `static.yml` - GitHub Actions workflow for static site deployment

### Amazon Q Rules (`.amazonq/rules/`)
- `memory-bank/` - Project documentation and guidelines

## Core Components

### Single Page Application Structure
The main `index.html` follows a sectioned layout pattern:
1. **Header** - Fixed sidebar navigation with profile and social links
2. **Hero Section** - Full-screen introduction with dynamic typing
3. **About Section** - Personal information and biography
4. **Stats Section** - Achievement counters
5. **Skills Section** - Technical proficiency display
6. **Resume Section** - Education and experience timeline
7. **Portfolio Section** - Filterable project gallery
8. **Services Section** - Service offerings grid
9. **Testimonials Section** - Client feedback carousel
10. **Contact Section** - Contact form and information
11. **Footer** - Copyright and credits

### Component Relationships
- HTML pages reference CSS from `assets/css/main.css`
- JavaScript functionality loaded from `assets/js/main.js`
- Vendor libraries loaded before main scripts for dependency resolution
- Images referenced relatively from `assets/img/` directory
- Contact form submits to `forms/contact.php` for processing

## Architectural Patterns

### Template-Based Architecture

### Progressive Enhancement
- Core HTML content accessible without JavaScript
- CSS provides visual styling layer
- JavaScript adds interactive enhancements (animations, filtering, carousels)

### Mobile-First Responsive Design
- Bootstrap grid system for responsive layouts
- Breakpoint-based styling for different screen sizes
- Touch-optimized interactions for mobile devices

### Modular Vendor Dependencies
- Self-contained vendor libraries in separate directories
- Independent CSS and JS files per library
- Easy to update or replace individual components

### Static Site Generation
- No build process required for basic deployment
- Optional SCSS compilation for style customization
- GitHub Actions workflow for automated deployment

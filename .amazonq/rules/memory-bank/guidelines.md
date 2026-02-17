# Development Guidelines

## Code Quality Standards

### JavaScript Formatting
- **Strict Mode**: Always use `"use strict";` at the beginning of IIFE (Immediately Invoked Function Expression)
- **Indentation**: 2 spaces for JavaScript code
- **Semicolons**: Required at end of statements
- **String Quotes**: Double quotes for strings
- **Line Length**: Keep lines readable, break long chains appropriately

### PHP Formatting
- **Line Endings**: CRLF (`\r\n`) line endings
- **Indentation**: 2 spaces for PHP code
- **Opening Tags**: Standard `<?php` tag with proper spacing
- **Comments**: Multi-line block comments with asterisks for file headers

### Documentation Standards
- **File Headers**: Include template name, URL, update date, author, and license information
- **Section Comments**: Use multi-line JSDoc-style comments with asterisks for major sections
- **Inline Comments**: Brief, descriptive comments for complex logic
- **Comment Format**: 
  ```javascript
  /**
   * Section description
   */
  ```

### Naming Conventions
- **Variables**: camelCase (e.g., `headerToggleBtn`, `scrollTop`, `navmenulinks`)
- **Functions**: camelCase with descriptive verb-noun pattern (e.g., `headerToggle`, `toggleScrollTop`, `aosInit`)
- **Constants**: camelCase for configuration objects
- **CSS Classes**: kebab-case (e.g., `header-toggle`, `scroll-top`, `filter-active`)
- **Data Attributes**: kebab-case (e.g., `data-typed-items`, `data-layout`, `data-default-filter`)

## Structural Conventions

### JavaScript Architecture
- **IIFE Pattern**: Wrap all code in self-executing anonymous function to avoid global scope pollution
  ```javascript
  (function() {
    "use strict";
    // All code here
  })();
  ```
- **No Global Variables**: All variables scoped within IIFE
- **Event-Driven**: Use addEventListener for all event handling
- **DOM-Ready**: Use `window.addEventListener('load', callback)` for initialization

### Code Organization
- **Logical Grouping**: Group related functionality with descriptive section comments
- **Sequential Flow**: Organize code in order of execution/initialization
- **Feature Isolation**: Each feature in its own commented section
- **Initialization Pattern**: Define functions first, then attach event listeners

### DOM Manipulation
- **Query Selectors**: Use `document.querySelector()` for single elements, `document.querySelectorAll()` for collections
- **Class Manipulation**: Use `classList.add()`, `classList.remove()`, `classList.toggle()` methods
- **Null Checks**: Always check if element exists before manipulation
  ```javascript
  if (preloader) {
    // Safe to use preloader
  }
  ```

## Semantic Patterns

### Event Handling Pattern
```javascript
// 1. Select element
const element = document.querySelector('.selector');

// 2. Define handler function
function handleEvent() {
  // Logic here
}

// 3. Attach listener
element.addEventListener('event', handleEvent);
```

### Iteration Pattern
```javascript
// Use forEach for NodeLists
document.querySelectorAll('.items').forEach(item => {
  item.addEventListener('click', () => {
    // Handler logic
  });
});
```

### Toggle Pattern
```javascript
// Ternary for conditional class manipulation
window.scrollY > 100 ? element.classList.add('active') : element.classList.remove('active');

// Or explicit toggle
element.classList.toggle('class-name');
```

### Library Initialization Pattern
```javascript
// 1. Check for element existence
const element = document.querySelector('.selector');
if (element) {
  // 2. Get configuration from data attributes
  let config = element.getAttribute('data-config');
  
  // 3. Initialize library
  new Library(element, config);
}
```

## Common Implementation Patterns

### Scroll-Based Functionality
- **Scroll Detection**: Listen to `scroll` event on document
- **Threshold Checking**: Use numeric thresholds (e.g., `window.scrollY > 100`)
- **Smooth Scrolling**: Use `window.scrollTo()` with `behavior: 'smooth'`
- **Scroll Offset**: Account for fixed headers with `scrollMarginTop`

### Mobile Navigation
- **Toggle State**: Use class toggling for show/hide states
- **Icon Switching**: Toggle between icon classes (e.g., `bi-list` ↔ `bi-x`)
- **Auto-Close**: Close mobile nav when clicking internal links
- **Event Propagation**: Use `e.stopImmediatePropagation()` to prevent bubbling

### Animation Integration
- **AOS Library**: Initialize with configuration object
  ```javascript
  AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
  ```
- **Waypoints**: Trigger animations at scroll positions with offset percentage
- **Progress Bars**: Animate width using `aria-valuenow` attribute values

### Configuration from HTML
- **Data Attributes**: Store configuration in HTML data attributes
- **JSON Parsing**: Parse JSON config from script tags
  ```javascript
  let config = JSON.parse(element.querySelector('.config').innerHTML.trim());
  ```
- **Fallback Values**: Use nullish coalescing (`??`) for default values
  ```javascript
  let layout = element.getAttribute('data-layout') ?? 'masonry';
  ```

## Internal API Usage

### Library Initialization Examples

#### Typed.js
```javascript
const selectTyped = document.querySelector('.typed');
if (selectTyped) {
  let typed_strings = selectTyped.getAttribute('data-typed-items');
  typed_strings = typed_strings.split(',');
  new Typed('.typed', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
  });
}
```

#### Isotope with ImagesLoaded
```javascript
let initIsotope;
imagesLoaded(container, function() {
  initIsotope = new Isotope(container, {
    itemSelector: '.isotope-item',
    layoutMode: layout,
    filter: filter,
    sortBy: sort
  });
});
```

#### GLightbox
```javascript
const glightbox = GLightbox({
  selector: '.glightbox'
});
```

### PHP Email Form Pattern
```php
// 1. Define receiving email
$receiving_email_address = 'contact@example.com';

// 2. Check and include library
if(file_exists($php_email_form = '../path/to/library.php')) {
  include($php_email_form);
} else {
  die('Unable to load library!');
}

// 3. Create instance and configure
$contact = new PHP_Email_Form;
$contact->ajax = true;
$contact->to = $receiving_email_address;
$contact->from_name = $_POST['name'];
$contact->from_email = $_POST['email'];
$contact->subject = $_POST['subject'];

// 4. Add messages
$contact->add_message($_POST['name'], 'From');
$contact->add_message($_POST['email'], 'Email');
$contact->add_message($_POST['message'], 'Message', 10);

// 5. Send and echo result
echo $contact->send();
```

## Frequently Used Code Idioms

### Arrow Functions for Event Handlers
```javascript
element.addEventListener('click', (e) => {
  e.preventDefault();
  // Handler logic
});
```

### Conditional Element Removal
```javascript
window.addEventListener('load', () => {
  preloader.remove();
});
```

### Class State Management
```javascript
// Remove active from all, add to current
document.querySelectorAll('.items .active').forEach(item => item.classList.remove('active'));
currentItem.classList.add('active');
```

### Parent/Sibling Navigation
```javascript
this.parentNode.classList.toggle('active');
this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
```

### Computed Style Access
```javascript
let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
```

## Best Practices

### Performance
- **Load Event**: Initialize heavy libraries on `window.addEventListener('load')` to avoid blocking
- **ImagesLoaded**: Wait for images before initializing layout libraries (Isotope)
- **Debouncing**: Use scroll events efficiently with proper handlers
- **Lazy Initialization**: Only initialize features when elements exist

### Accessibility
- **ARIA Attributes**: Use `aria-valuenow`, `aria-valuemin`, `aria-valuemax` for progress bars
- **Semantic HTML**: Rely on proper HTML structure from templates
- **Keyboard Navigation**: Ensure interactive elements are keyboard accessible

### Maintainability
- **Single Responsibility**: Each function handles one specific task
- **Descriptive Names**: Function and variable names clearly indicate purpose
- **Consistent Patterns**: Follow established patterns throughout codebase
- **Template Attribution**: Maintain template credits and license information

### Error Handling
- **Existence Checks**: Always verify elements exist before manipulation
- **Graceful Degradation**: Features fail silently if elements missing
- **Library Loading**: Check file existence before including (PHP)
- **Die on Critical Errors**: Use `die()` for critical missing dependencies

### Configuration Management
- **Centralized Config**: Store configuration in HTML data attributes
- **Default Values**: Provide sensible defaults with nullish coalescing
- **External Config**: Use JSON for complex configurations (Swiper)
- **Environment Variables**: Use placeholder values for sensitive data (email addresses)

## Code Review Checklist
- [ ] All code wrapped in IIFE with strict mode
- [ ] Proper section comments for each feature
- [ ] Element existence checks before manipulation
- [ ] Event listeners properly attached
- [ ] No global variable pollution
- [ ] Consistent naming conventions (camelCase JS, kebab-case CSS)
- [ ] Template attribution maintained
- [ ] Smooth scrolling implemented where appropriate
- [ ] Mobile-responsive event handlers included
- [ ] Library initialization on proper events (load vs DOMContentLoaded)

# Restaurant Website - Project Guide

## Quick Start

1. **Open any HTML file in your browser:**
   - `index.html` - Start here for the homepage
   - `menu.html` - Browse the full menu
   - `contact.html` - Make a reservation or contact

2. **No setup required** - Pure HTML, CSS, and JavaScript (vanilla)

## File Structure Explained

```
restaurant_website/
│
├── 📄 index.html              Homepage - Features and reservations
├── 📄 menu.html               Complete menu with search and filters
├── 📄 contact.html            Contact form, FAQs, and reservations
├── 📄 README.md               Full documentation
│
├── 📁 css/                    Stylesheets
│   ├── styles.css             Main styles (Global, Responsive)
│   └── menu.css               Menu-specific styling
│
├── 📁 js/                     JavaScript files
│   ├── main.js                Navigation, Forms, Animations
│   └── menu.js                Menu search and filters
│
├── 📁 assets/                 Media files
│   ├── 📁 images/             Image placeholder folder
│   └── 📁 icons/              Icon assets folder
│
└── 📁 README files
    ├── README.md              Complete documentation
    └── PROJECT_GUIDE.md       This file
```

## Pages at a Glance

### 🏠 Homepage (index.html)
- Beautiful hero section
- About section with features
- Featured menu with filters
- Customer testimonials
- Quick reservation form
- Navigation and footer

### 🍽️ Menu Page (menu.html)
- Full restaurant menu
- Search functionality
- Dietary filters (Vegetarian, Vegan)
- All 26+ menu items with:
  - Dish names
  - Descriptions
  - Prices
  - Calorie counts
  - Dietary tags
- Responsive grid layout

### 📧 Contact Page (contact.html)
- Contact form with validation
- Full contact information
- Reservation booking system
- Private events information
- FAQ accordion (5 questions)
- Business hours
- Social media links

## Key Features

### 🎨 Design
- Modern, elegant color scheme (Red/Gold/Dark Blue)
- Professional typography
- Consistent branding throughout
- Smooth animations
- Gradient backgrounds

### 📱 Responsive
- Mobile-first approach
- Works on phones, tablets, desktops
- Hamburger menu on mobile
- Touch-friendly buttons
- Optimized layouts

### ⚙️ Interactive
- Mobile navigation menu
- Real-time search (menu page)
- Category filters
- Form validation
- Success/error notifications
- Accordion FAQ
- Smooth scrolling

### ♿ Accessible
- Semantic HTML
- Form labels properly linked
- ARIA-friendly markup
- Keyboard navigation support
- Color contrast compliance

## CSS Features Used

```css
/* Grid Layouts */
display: grid;
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

/* Flexbox */
display: flex;
justify-content: center;
align-items: center;

/* CSS Variables */
:root {
  --primary-color: #c41e3a;
  --secondary-color: #2c3e50;
  --accent-color: #f39c12;
}

/* Media Queries */
@media (max-width: 768px) {
  /* Mobile styles */
}

/* Animations */
@keyframes slideInDown {
  from { transform: translateY(-30px); }
  to { transform: translateY(0); }
}

/* Gradients */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## JavaScript Functionality

### Navigation (main.js)
```javascript
// Mobile menu toggle
// Active page indicator
// Smooth scroll to sections
// Header shadow on scroll
```

### Forms (main.js)
```javascript
// Email validation
// Phone validation
// Required field checking
// Error message display
// Success notifications
```

### Menu (menu.js)
```javascript
// Real-time search (debounced)
// Dietary filtering
// Favorite toggling
// Dynamic filtering
```

### Animations (main.js)
```javascript
// Intersection Observer for scroll effects
// Fade-in animations
// Smooth transitions
// Counter animations (ready)
```

## Interaction Examples

### Using the Site

**Homepage:**
1. Click navigation to jump to sections
2. Click "Explore Menu" button
3. Explore featured dishes
4. Click filter buttons to see categories
5. Scroll to testimonials and reservations
6. Fill in reservation form

**Menu Page:**
1. Type in search box to find dishes
2. Click dietary filters (Vegetarian/Vegan)
3. See instant results
4. View full nutritional info
5. Go back to homepage

**Contact Page:**
1. Fill in contact form with a message
2. See form validation in action
3. Submit to trigger notification
4. Fill in reservation form
5. Select date, time, guest count
6. Expand FAQ questions to read answers

## Customization Ideas

### Change Restaurant
- Restaurant name (all pages)
- Logo emoji (header)
- Address and phone
- Operating hours
- Menu items and prices

### Change Colors
```css
--primary-color: #your-red;
--secondary-color: #your-dark;
--accent-color: #your-gold;
```

### Add Features
- Real backend for reservations
- Photo gallery
- Blog section
- Online ordering
- Email confirmations
- Admin dashboard

### Add Content
- More menu items
- Restaurant photos
- Chef bios
- Event photos
- Team information
- Press coverage

## Browser Compatibility

✅ Chrome/Edge 90+
✅ Firefox 88+
✅ Safari 14+
✅ Mobile browsers
✅ Tablets
✅ Responsive at all sizes

## Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid/Flexbox
- **JavaScript** - Vanilla (No frameworks)
- **No dependencies** - Pure frontend

## Form Validation Rules

- Name: Required, min 2 characters
- Email: Required, valid email format
- Phone: Required, 10+ digits
- Message: Required
- Date/Time: Required, valid date
- Guest count: Required (2-12)

## Menu Item Tags

- 🌱 Vegetarian
- 🌿 Vegan
- 🌶️ Spicy
- 🥜 Gluten-Free
- 🐟 Pescatarian

## Tips for Best Experience

1. **Desktop:** Full experience with all features
2. **Mobile:** Tap hamburger menu to navigate
3. **Search:** Type dish names or descriptions
4. **Filters:** Click tags to filter results
5. **Forms:** Fill completely for validation
6. **Notifications:** Check top-right for success messages

## Performance Features

- No external dependencies
- Fast loading (minimal CSS/JS)
- Optimized animations (GPU-accelerated)
- Lazy-loading ready
- Mobile-optimized images

## Accessibility Features

- Semantic HTML structure
- Form labels associated with inputs
- Color contrast tested
- Keyboard navigation support
- Screen reader friendly
- Mobile accessible

## Next Steps

1. **Explore:** Browse all three pages
2. **Test:** Fill out forms and use filters
3. **Customize:** Change colors, text, and content
4. **Deploy:** Add to web server or hosting
5. **Connect:** Add backend for real reservations

---

**Built with:** HTML5, CSS3, Vanilla JavaScript
**Type:** Full Restaurant Website Template
**License:** Free to use and modify

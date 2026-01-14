# Luxe Dining - Professional Restaurant Website

A full-featured restaurant website built with modern HTML5, CSS3, and vanilla JavaScript. Includes responsive design, interactive features, and professional UI/UX patterns.

## 🏗️ Site Architecture

### Project Structure

```
restaurant_website/
├── index.html              # Homepage - Hero, About, Featured Menu, Testimonials
├── menu.html               # Full Menu Page - Searchable, Filterable Menu Items
├── contact.html            # Contact & Reservations - Contact Form, FAQ, Private Events
├── css/
│   ├── styles.css          # Main stylesheet (Global styles, Components)
│   └── menu.css            # Menu-specific styles
├── js/
│   ├── main.js             # Core JavaScript (Navigation, Forms, Animations)
│   └── menu.js             # Menu page interactions
├── assets/
│   ├── images/             # Image placeholder folder
│   └── icons/              # Icon assets folder
└── README.md               # This file
```

## 📄 Pages Overview

### 1. **index.html** - Homepage
**Purpose:** Landing page and brand introduction

**Sections:**
- **Navigation Header** - Sticky navbar with responsive hamburger menu
- **Hero Section** - Eye-catching welcome with CTA buttons
- **About Section** - Restaurant story with features grid
- **Featured Menu Preview** - 9 featured dishes with category filters
- **Testimonials** - Customer reviews with ratings
- **Reservations** - Quick booking form
- **Footer** - Links, hours, contact info, newsletter signup

**Features:**
- Responsive navigation with mobile hamburger menu
- Smooth scrolling to sections
- Menu filtering system (All, Appetizers, Main Courses, Desserts)
- Interactive form with validation
- Social media links

### 2. **menu.html** - Full Menu Page
**Purpose:** Comprehensive menu browsing experience

**Sections:**
- **Menu Hero** - Page title and tagline
- **Search & Filters** - Real-time search box and dietary filters
- **Menu Sections:**
  - Appetizers (6 items)
  - Main Courses (8 items)
  - Sides (3 items)
  - Desserts (6 items)
  - Beverages (3 items)
- **Dietary Information** - Visual legend for dietary tags
- **Footer** - Consistent with homepage

**Features:**
- Real-time search functionality (debounced)
- Dietary filter (Vegetarian, Vegan, All)
- Price range display
- Calorie information
- Dietary restriction tags (Spicy, Vegetarian, Vegan, Gluten-Free)
- Responsive menu grid layout

### 3. **contact.html** - Contact & Reservations
**Purpose:** Multi-function contact and booking hub

**Sections:**
- **Contact Hero** - Page introduction
- **Contact Form** - Message submission form
- **Contact Information** - Address, phone, email, hours, social links
- **Reservations** - Detailed booking form with policies
- **Private Events** - Event catering information
- **FAQ Accordion** - 5 common questions with expandable answers
- **Footer** - Contact summary

**Features:**
- Contact form with validation
- Reservation form with date/time/guest count selectors
- Collapsible FAQ section (accordion)
- Event inquiry section
- Phone number and email links

## 🎨 Design System

### Color Palette
```css
--primary-color: #c41e3a       /* Deep Red - Brand accent */
--secondary-color: #2c3e50     /* Dark Blue - Text */
--accent-color: #f39c12        /* Gold - Highlights */
--light-bg: #f8f9fa            /* Light Gray - Backgrounds */
--dark-text: #2c3e50           /* Dark - Body text */
--light-text: #ecf0f1          /* Light - Light backgrounds */
```

### Typography
- **Font Family:** Segoe UI, Tahoma, Geneva, Verdana (System fonts)
- **Body:** 1rem (16px), line-height 1.6
- **Headings:** Scales from 1.3rem to 3.5rem

### Component Library
- **Buttons** - Primary (Red), Secondary (Gold outline)
- **Forms** - Input, textarea, select with focus states
- **Cards** - Menu items, testimonials, features
- **Tags** - Dietary restriction badges with colors
- **Navigation** - Sticky header with hamburger menu
- **Accordion** - Expandable FAQ items

## 💻 JavaScript Features

### main.js - Core Functionality

1. **Navigation System**
   - Mobile hamburger menu toggle
   - Active link highlighting based on page
   - Smooth scroll behavior

2. **Form Validation**
   - Required field checking
   - Email format validation
   - Phone number validation
   - Error message display
   - Success notifications

3. **Intersection Observer Animations**
   - Fade-in effects when sections scroll into view
   - Performance optimized

4. **Menu Filtering**
   - Real-time category filtering
   - Smooth transitions between filtered states

5. **Utility Functions**
   - Debounce (for search)
   - Throttle (for scroll events)
   - Notification system

### menu.js - Menu Page Interactions

1. **Search Functionality**
   - Real-time search across dish names and descriptions
   - Case-insensitive matching

2. **Dietary Filtering**
   - Filter by vegetarian, vegan, or show all
   - Visual feedback with opacity changes

3. **Price Range Filtering**
   - Filter items by price (implementation ready)

4. **Favorites System**
   - Toggle favorite status on menu items
   - Local storage ready

## 📱 Responsive Design

### Breakpoints
- **Desktop:** 1200px+ (Full layout)
- **Tablet:** 768px - 1199px (Adjusted grid, single column for some sections)
- **Mobile:** Below 768px (Hamburger menu, stacked layout, full-width)

### Mobile Optimizations
- Hamburger navigation menu
- Touch-friendly button sizes (min 44x44px)
- Stacked form layouts
- Single-column grids
- Optimized typography scaling

## 🎯 Interactive Elements

### Form Interactions
- Real-time validation feedback
- Input focus states with color changes
- Error messages below fields
- Success notifications (top-right)
- Form reset after submission

### Menu Interactions
- Hover effects on menu items (lift effect)
- Filter button state changes
- Search term highlighting
- Dietary tag filtering

### Navigation
- Sticky header with scroll shadow
- Hamburger menu with animated icon
- Smooth scroll to sections
- Active page indicator

### Animations
- Slide-in animations for hero content
- Fade-in for sections (on scroll)
- Smooth transitions on hover
- CSS animations and JavaScript timeline

## 🔧 Technical Features

### HTML5
- Semantic markup (header, nav, section, footer)
- Form elements with proper attributes
- Accessibility attributes (labels, alt text)

### CSS3
- CSS Grid for layouts
- Flexbox for alignment
- CSS variables for theming
- Media queries for responsive design
- Gradient backgrounds
- Box shadows and transitions
- CSS animations (@keyframes)

### JavaScript (Vanilla)
- No dependencies required
- Event delegation
- DOM manipulation
- Form validation
- Local storage ready
- Modular function organization

## 📋 Features Checklist

- ✅ Complex multi-page site architecture
- ✅ Professional HTML5 templates
- ✅ Advanced CSS3 styling
- ✅ Responsive mobile design
- ✅ Interactive JavaScript features
- ✅ Form validation system
- ✅ Search functionality
- ✅ Menu filtering system
- ✅ Accordion FAQ section
- ✅ Mobile navigation menu
- ✅ Smooth scrolling
- ✅ Notification system
- ✅ Animation effects
- ✅ Professional color scheme
- ✅ Accessibility features

## 🚀 How to Use

1. **Open in Browser:** Open any HTML file in a modern web browser
2. **Navigate:** Use the navigation menu or links to move between pages
3. **Test Forms:** Submit contact form to see validation
4. **Search Menu:** Use the search box to find dishes
5. **Filter Menu:** Click dietary filters to see results
6. **Make Reservation:** Fill in reservation form with your details
7. **Read FAQ:** Click FAQ questions to expand answers

## 💡 Customization

### Change Restaurant Name
Replace "Luxe Dining" throughout:
- `index.html`, `menu.html`, `contact.html` - Logo and title
- `styles.css` - References in comments
- `js/main.js` - Form messages

### Change Colors
Edit CSS variables in `styles.css`:
```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  --accent-color: #your-color;
}
```

### Add Real Images
Place images in `assets/images/` and update `src` attributes:
```html
<img src="assets/images/your-image.jpg" alt="description">
```

### Add Menu Items
Copy menu item HTML structure in `menu.html` and customize:
```html
<div class="detailed-menu-item">
  <!-- Add your item -->
</div>
```

## 🔐 Security Notes

- Forms don't submit to a server (client-side only)
- Add backend integration for actual reservations
- Implement CSRF tokens for production
- Validate input on server side
- Sanitize user inputs

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## 📦 Files Summary

| File | Size | Purpose |
|------|------|---------|
| index.html | ~9 KB | Homepage |
| menu.html | ~12 KB | Menu page |
| contact.html | ~10 KB | Contact/Reservations |
| css/styles.css | ~12 KB | Main styling |
| css/menu.css | ~2 KB | Menu-specific styles |
| js/main.js | ~8 KB | Core interactions |
| js/menu.js | ~3 KB | Menu interactions |

## 🎓 Learning Resources

This project demonstrates:
- Responsive web design patterns
- Modern HTML5 semantic markup
- Advanced CSS3 techniques
- Vanilla JavaScript DOM manipulation
- Form validation patterns
- Mobile-first approach
- Component-based design
- Accessibility best practices

## 📝 License

This is a sample/template project for educational purposes.

---

**Last Updated:** January 2024
**Version:** 1.0

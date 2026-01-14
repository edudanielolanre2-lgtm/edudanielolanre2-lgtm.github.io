// ===== Navigation ===== 
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');

  // Toggle mobile menu
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // Set active nav link based on current page
  updateActiveNavLink();
});

function updateActiveNavLink() {
  const navLinks = document.querySelectorAll('.nav-menu a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// ===== Smooth Scroll ===== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      const element = document.querySelector(href);
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== Intersection Observer for animations ===== 
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeIn 0.6s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .menu-item, .feature, .testimonial').forEach(el => {
  el.style.opacity = '0';
  observer.observe(el);
});

// ===== Menu Filtering ===== 
function initMenuFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const menuItems = document.querySelectorAll('.menu-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // Filter items
      const filter = this.getAttribute('data-filter');
      menuItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 10);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initMenuFilters);

// ===== Form Validation ===== 
function initFormValidation() {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      if (validateForm(this)) {
        // Show success message
        showNotification('Message sent successfully! We\'ll be in touch soon.', 'success');
        
        // Reset form
        this.reset();
        
        // Optional: Send data to server
        // submitForm(this);
      }
    });
  });
}

function validateForm(form) {
  let isValid = true;
  const inputs = form.querySelectorAll('input, textarea, select');

  inputs.forEach(input => {
    // Remove previous error
    input.classList.remove('error');
    
    if (input.name) {
      if (!input.value.trim()) {
        showFieldError(input, 'This field is required');
        isValid = false;
      } else if (input.type === 'email' && !isValidEmail(input.value)) {
        showFieldError(input, 'Please enter a valid email');
        isValid = false;
      } else if (input.name === 'phone' && !isValidPhone(input.value)) {
        showFieldError(input, 'Please enter a valid phone number');
        isValid = false;
      }
    }
  });

  return isValid;
}

function showFieldError(input, message) {
  input.classList.add('error');
  input.style.borderColor = '#c41e3a';
  
  let errorDiv = input.parentElement.querySelector('.error-message');
  if (!errorDiv) {
    errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#c41e3a';
    errorDiv.style.fontSize = '0.85rem';
    errorDiv.style.marginTop = '0.25rem';
    input.parentElement.appendChild(errorDiv);
  }
  errorDiv.textContent = message;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  const phoneRegex = /^[\d\s\-\(\)]{10,}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 2rem;
    background: ${type === 'success' ? '#27ae60' : '#3498db'};
    color: white;
    border-radius: 5px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    z-index: 9999;
    animation: slideInUp 0.3s ease;
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideInDown 0.3s ease reverse';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

document.addEventListener('DOMContentLoaded', initFormValidation);

// ===== Scroll Effect ===== 
let lastScrollY = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  lastScrollY = window.scrollY;

  // Add shadow to header on scroll
  if (header) {
    if (lastScrollY > 10) {
      header.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
    } else {
      header.style.boxShadow = 'var(--shadow)';
    }
  }
});

// ===== Counter Animation ===== 
function animateCounter(element) {
  const target = parseInt(element.textContent);
  const duration = 1000;
  const step = target / (duration / 50);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 50);
}

// ===== Accordion Menu ===== 
function initAccordion() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const body = this.nextElementSibling;
      const isActive = this.classList.contains('active');

      // Close other accordions in same parent
      const parent = this.closest('.accordion-group') || this.parentElement;
      parent.querySelectorAll('.accordion-header').forEach(h => {
        if (h !== this) {
          h.classList.remove('active');
          h.nextElementSibling.style.maxHeight = null;
        }
      });

      // Toggle current
      this.classList.toggle('active');
      if (!isActive) {
        body.style.maxHeight = body.scrollHeight + 'px';
      } else {
        body.style.maxHeight = null;
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', initAccordion);

// ===== Gallery Lightbox ===== 
function initGallery() {
  const galleryItems = document.querySelectorAll('[data-gallery]');

  galleryItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      openLightbox(this.getAttribute('href'));
    });
  });

  // Close lightbox on escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });
}

function openLightbox(src) {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <img src="${src}" alt="Gallery Image">
      <button class="lightbox-close">&times;</button>
    </div>
  `;

  lightbox.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    animation: fadeIn 0.3s ease;
  `;

  document.body.appendChild(lightbox);

  lightbox.querySelector('.lightbox-close').addEventListener('click', function() {
    lightbox.remove();
  });

  lightbox.addEventListener('click', function(e) {
    if (e.target === this) {
      this.remove();
    }
  });
}

function closeLightbox() {
  const lightbox = document.querySelector('.lightbox');
  if (lightbox) lightbox.remove();
}

document.addEventListener('DOMContentLoaded', initGallery);

// ===== Utility Functions ===== 
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

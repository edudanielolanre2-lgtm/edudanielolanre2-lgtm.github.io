// ===== Menu Page Interactions =====
document.addEventListener('DOMContentLoaded', function() {
  initMenuSearch();
  initMenuCategoryTabs();
});

function initMenuSearch() {
  const searchInput = document.querySelector('.menu-search');
  const menuItems = document.querySelectorAll('.detailed-menu-item');

  if (searchInput) {
    searchInput.addEventListener('input', debounce(function(e) {
      const searchTerm = e.target.value.toLowerCase();

      menuItems.forEach(item => {
        const title = item.querySelector('.menu-item-title').textContent.toLowerCase();
        const description = item.querySelector('.menu-item-description').textContent.toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm) || searchTerm === '') {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.3s ease';
        } else {
          item.style.display = 'none';
        }
      });
    }, 300));
  }
}

function initMenuCategoryTabs() {
  const categoryBtns = document.querySelectorAll('.category-btn');
  const categories = document.querySelectorAll('.menu-category');

  categoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const categoryId = this.getAttribute('data-category');

      // Update active button
      categoryBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // Show/hide categories
      categories.forEach(cat => {
        if (cat.id === categoryId) {
          cat.style.display = 'block';
          cat.style.animation = 'fadeIn 0.4s ease';
        } else {
          cat.style.display = 'none';
        }
      });
    });
  });
}

// ===== Filter by dietary restrictions =====
function filterByDietary(type) {
  const items = document.querySelectorAll('.detailed-menu-item');

  items.forEach(item => {
    const tags = item.querySelectorAll('.tag');
    let hasTag = false;

    tags.forEach(tag => {
      if (tag.classList.contains(type)) {
        hasTag = true;
      }
    });

    if (type === 'all' || hasTag) {
      item.style.display = 'block';
      item.style.opacity = '1';
    } else {
      item.style.opacity = '0.3';
      item.style.pointerEvents = 'none';
    }
  });
}

// ===== Price Range Filter =====
function filterByPrice(min, max) {
  const items = document.querySelectorAll('.detailed-menu-item');

  items.forEach(item => {
    const priceText = item.querySelector('.menu-item-price').textContent;
    const price = parseFloat(priceText.replace('$', ''));

    if (price >= min && price <= max) {
      item.style.display = 'block';
      item.style.opacity = '1';
    } else {
      item.style.opacity = '0.3';
    }
  });
}

// ===== Add to favorites =====
function toggleFavorite(button) {
  button.classList.toggle('favorited');
  const itemName = button.closest('.detailed-menu-item').querySelector('.menu-item-title').textContent;

  if (button.classList.contains('favorited')) {
    showNotification(`${itemName} added to favorites!`, 'success');
  } else {
    showNotification(`${itemName} removed from favorites`, 'info');
  }
}

// Utility function (imported from main.js)
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
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
    notification.remove();
  }, 3000);
}

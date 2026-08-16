/* ================================================================
   WELLBEING NUTRITION — KOREAN MARINE COLLAGEN PDP
   CRO Prototype — Interactions (Source-Fidelity Pass)
   
   Features:
   - Pack selector (updates price, savings, per-unit)
   - Quantity selector (+/−)
   - Add to Cart (visual feedback)
   - FAQ accordion (open/close)
   - Deep-dive accordion
   - Anchor navigation (smooth scroll)
   - Sticky mobile CTA (tracks selected pack)
   - Image gallery thumbnails
   - Review objection theme filter
   ================================================================ */

(function () {
  'use strict';

  /* ---- PRODUCT DATA (exact verified source pricing) ---- */
  const variants = [
    {
      id: 40790287614032,
      name: 'Pack of 1',
      price: 1745,
      mrp: 1799,
      savings: 54,
      savingsPercent: '3% OFF',
      servings: '~25 servings (200g tub)'
    },
    {
      id: 40790287646800,
      name: 'Pack of 2',
      price: 3418,
      mrp: 3598,
      savings: 180,
      savingsPercent: '5% OFF',
      servings: '~50 servings (2x 200g tubs)'
    },
    {
      id: 40790287679568,
      name: 'Pack of 3',
      price: 5019,
      mrp: 5397,
      savings: 378,
      savingsPercent: '7% OFF',
      servings: '~75 servings (3x 200g tubs)'
    },
    {
      id: 40790287712336,
      name: 'Pack of 4',
      price: 6476,
      mrp: 7196,
      savings: 720,
      savingsPercent: '10% OFF',
      servings: '~100 servings (4x 200g tubs)'
    }
  ];

  let selectedVariant = 0;
  let quantity = 1;

  /* ---- FORMAT CURRENCY ---- */
  function formatPrice(amount) {
    return '₹' + amount.toLocaleString('en-IN');
  }

  /* ---- PACK SELECTOR ---- */
  function initPackSelector() {
    const cards = document.querySelectorAll('.pack-card');
    if (!cards.length) return;

    cards.forEach(function (card, index) {
      card.addEventListener('click', function () {
        selectedVariant = index;
        updatePackSelection();
        updatePriceDisplay();
        updateStickyPrice();
      });

      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectedVariant = index;
          updatePackSelection();
          updatePriceDisplay();
          updateStickyPrice();
        }
      });
    });

    updatePackSelection();
  }

  function updatePackSelection() {
    var cards = document.querySelectorAll('.pack-card');
    cards.forEach(function (card, index) {
      card.classList.toggle('active', index === selectedVariant);
      card.setAttribute('aria-pressed', index === selectedVariant);
    });
  }

  function updatePriceDisplay() {
    var v = variants[selectedVariant];
    var priceEl = document.getElementById('current-price');
    var mrpEl = document.getElementById('mrp-price');
    var savingsEl = document.getElementById('price-savings');
    var perServingEl = document.getElementById('per-serving');

    if (priceEl) priceEl.textContent = formatPrice(v.price);
    if (mrpEl) mrpEl.textContent = 'MRP ' + formatPrice(v.mrp);
    if (savingsEl) savingsEl.textContent = 'Save ' + formatPrice(v.savings) + ' (' + v.savingsPercent + ')';
    if (perServingEl) perServingEl.textContent = v.servings;
  }

  function updateStickyPrice() {
    var v = variants[selectedVariant];
    var stickyPrice = document.getElementById('sticky-price');
    var stickyMrp = document.getElementById('sticky-mrp');

    if (stickyPrice) stickyPrice.textContent = formatPrice(v.price);
    if (stickyMrp) stickyMrp.textContent = 'MRP ' + formatPrice(v.mrp);
  }

  /* ---- QUANTITY SELECTOR ---- */
  function initQuantitySelector() {
    var minusBtn = document.getElementById('qty-minus');
    var plusBtn = document.getElementById('qty-plus');
    var qtyDisplay = document.getElementById('qty-value');

    if (!minusBtn || !plusBtn || !qtyDisplay) return;

    minusBtn.addEventListener('click', function () {
      if (quantity > 1) {
        quantity--;
        qtyDisplay.textContent = quantity;
      }
    });

    plusBtn.addEventListener('click', function () {
      if (quantity < 10) {
        quantity++;
        qtyDisplay.textContent = quantity;
      }
    });
  }

  /* ---- ADD TO CART ---- */
  function initAddToCart() {
    var btns = document.querySelectorAll('.js-add-to-cart');
    
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var original = btn.textContent;
        btn.textContent = 'Added to Cart ✓';
        btn.classList.add('added');
        btn.disabled = true;

        // Update cart count
        var cartCount = document.getElementById('cart-count');
        if (cartCount) {
          var current = parseInt(cartCount.textContent) || 0;
          cartCount.textContent = current + quantity;
          cartCount.style.display = 'inline-flex';
        }

        setTimeout(function () {
          btn.textContent = original;
          btn.classList.remove('added');
          btn.disabled = false;
        }, 2000);
      });
    });
  }

  /* ---- ACCORDION ---- */
  function initAccordions() {
    var triggers = document.querySelectorAll('.accordion-trigger');
    
    triggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var item = trigger.closest('.accordion-item');
        var isOpen = item.classList.contains('open');

        // Close all siblings in same accordion
        var accordion = item.closest('.accordion');
        if (accordion) {
          accordion.querySelectorAll('.accordion-item.open').forEach(function (openItem) {
            if (openItem !== item) {
              openItem.classList.remove('open');
              openItem.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
            }
          });
        }

        item.classList.toggle('open', !isOpen);
        trigger.setAttribute('aria-expanded', !isOpen);
      });
    });
  }

  /* ---- IMAGE GALLERY ---- */
  function initGallery() {
    var thumbs = document.querySelectorAll('.gallery__thumb');
    var mainImg = document.getElementById('gallery-main-img');
    if (!thumbs.length || !mainImg) return;

    thumbs.forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        var img = thumb.querySelector('img');
        if (!img) return;
        var src = img.src;
        // Upgrade size parameter
        mainImg.src = src.replace(/width=\d+/, 'width=900');
        
        thumbs.forEach(function (t) { t.classList.remove('active'); });
        thumb.classList.add('active');
      });
    });
  }

  /* ---- REVIEW THEME FILTER ---- */
  function initReviewThemes() {
    var themes = document.querySelectorAll('.review-theme');
    var cards = document.querySelectorAll('.review-card');
    
    if (!themes.length || !cards.length) return;

    themes.forEach(function (theme) {
      theme.addEventListener('click', function () {
        var filter = theme.getAttribute('data-theme');

        var wasActive = theme.classList.contains('active');
        themes.forEach(function (t) { t.classList.remove('active'); });

        if (!wasActive) {
          theme.classList.add('active');
        }

        cards.forEach(function (card) {
          if (wasActive || !filter) {
            card.style.display = '';
            return;
          }
          var cardTheme = card.getAttribute('data-theme');
          card.style.display = (cardTheme === filter) ? '' : 'none';
        });
      });
    });
  }

  /* ---- STICKY CTA VISIBILITY ---- */
  function initStickyCta() {
    var sticky = document.querySelector('.sticky-cta');
    var hero = document.querySelector('.hero');
    if (!sticky || !hero) return;

    function checkVisibility() {
      var rect = hero.getBoundingClientRect();
      if (rect.bottom < 0) {
        sticky.style.transform = 'translateY(0)';
      } else {
        sticky.style.transform = 'translateY(100%)';
      }
    }

    sticky.style.transition = 'transform 0.3s ease';
    sticky.style.transform = 'translateY(100%)';

    window.addEventListener('scroll', checkVisibility, { passive: true });
    checkVisibility();
  }

  /* ---- SMOOTH SCROLL FOR ANCHOR LINKS ---- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var targetId = link.getAttribute('href');
        if (targetId === '#') return;
        
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          var offset = 80;
          var position = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: position, behavior: 'smooth' });
        }
      });
    });
  }

  /* ---- INITIALIZATION ---- */
  function init() {
    initPackSelector();
    initQuantitySelector();
    initAddToCart();
    initAccordions();
    initGallery();
    initReviewThemes();
    initStickyCta();
    initSmoothScroll();
    updatePriceDisplay();
    updateStickyPrice();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

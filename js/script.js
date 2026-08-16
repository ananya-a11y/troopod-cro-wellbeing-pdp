/* ================================================================
   WELLBEING NUTRITION — KOREAN MARINE COLLAGEN PDP
   CRO Prototype — Interactions (Final Visual & Slider Pass)
   
   Features:
   - Pack selector (updates price, savings, per-unit)
   - Quantity selector (+/−)
   - Add to Cart (visual feedback & cart counter)
   - FAQ accordion (open/close)
   - Deep-dive accordion
   - Anchor navigation (smooth scroll)
   - Sticky mobile CTA (tracks selected pack)
   - Image gallery thumbnails
   - Review Objection Slider / Carousel (Prev/Next, dots, theme filters)
   - AI Product Assistant (verified answer chips)
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

  const aiAnswers = {
    source: "Yes. Sourced 100% from deep-sea wild-caught fish skin and scales (Korean Marine Collagen), making it non-vegetarian, mercury-free, and heavy-metal tested.",
    dose: "Take 5–10g (1 scoop) daily. Dissolves seamlessly into coffee, tea, smoothies, or water. Best taken mid-morning or evening.",
    serving: "1 scoop is approximately 8g, providing ~25 daily servings per 200g tub.",
    types: "Contains 90% Type I collagen (primary skin structural collagen) and 10% Type III collagen for comprehensive skin, hair, nail, and joint support."
  };

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
        var originalHtml = btn.innerHTML;
        btn.innerHTML = '<span>ADDED TO CART!</span>';
        btn.classList.add('added');
        btn.disabled = true;

        var cartCount = document.getElementById('cart-count');
        if (cartCount) {
          var current = parseInt(cartCount.textContent) || 0;
          cartCount.textContent = current + quantity;
          cartCount.style.display = 'inline-flex';
        }

        setTimeout(function () {
          btn.innerHTML = originalHtml;
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
        trigger.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
      });
    });
  }

  /* ---- GALLERY THUMBNAILS ---- */
  function initGallery() {
    var thumbs = document.querySelectorAll('.gallery__thumb');
    var mainImg = document.getElementById('gallery-main-img');
    if (!thumbs.length || !mainImg) return;

    thumbs.forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        thumbs.forEach(function (t) { t.classList.remove('active'); });
        thumb.classList.add('active');

        var img = thumb.querySelector('img');
        if (img) {
          mainImg.style.opacity = '0';
          setTimeout(function () {
            mainImg.src = img.src.replace('&width=120', '&width=900');
            mainImg.alt = img.alt;
            mainImg.style.opacity = '1';
          }, 150);
        }
      });
    });
  }

  /* ---- REVIEWS TESTIMONIAL SLIDER ---- */
  function initReviewSlider() {
    var track = document.getElementById('reviews-slider-track');
    var prevBtn = document.getElementById('reviews-prev');
    var nextBtn = document.getElementById('reviews-next');
    var dotsContainer = document.getElementById('reviews-dots');
    var themeButtons = document.querySelectorAll('.review-theme');
    
    if (!track) return;

    var cards = Array.from(track.querySelectorAll('.review-card'));
    var currentIndex = 0;
    var activeFilter = 'all';

    function getVisibleCards() {
      if (activeFilter === 'all') {
        return cards;
      }
      return cards.filter(function (card) {
        return card.getAttribute('data-theme') === activeFilter;
      });
    }

    function updateSlider() {
      var visibleCards = getVisibleCards();

      // Show/hide cards according to filter
      cards.forEach(function (card) {
        if (activeFilter === 'all' || card.getAttribute('data-theme') === activeFilter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });

      if (currentIndex >= visibleCards.length) {
        currentIndex = Math.max(0, visibleCards.length - 1);
      }

      var cardWidth = visibleCards[0] ? visibleCards[0].offsetWidth + 24 : 0;
      track.style.transform = 'translateX(-' + (currentIndex * cardWidth) + 'px)';

      renderDots(visibleCards.length);
    }

    function renderDots(count) {
      if (!dotsContainer) return;
      dotsContainer.innerHTML = '';
      if (count <= 1) return;

      for (var i = 0; i < count; i++) {
        (function (index) {
          var dot = document.createElement('div');
          dot.className = 'reviews-dot' + (index === currentIndex ? ' active' : '');
          dot.addEventListener('click', function () {
            currentIndex = index;
            updateSlider();
          });
          dotsContainer.appendChild(dot);
        })(i);
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        var visibleCards = getVisibleCards();
        if (currentIndex > 0) {
          currentIndex--;
        } else {
          currentIndex = Math.max(0, visibleCards.length - 1);
        }
        updateSlider();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        var visibleCards = getVisibleCards();
        if (currentIndex < visibleCards.length - 1) {
          currentIndex++;
        } else {
          currentIndex = 0;
        }
        updateSlider();
      });
    }

    themeButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        themeButtons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        activeFilter = btn.getAttribute('data-theme');
        currentIndex = 0;
        updateSlider();
      });
    });

    window.addEventListener('resize', updateSlider);
    updateSlider();
  }

  /* ---- AI PRODUCT ASSISTANT ---- */
  function initAiAssistant() {
    var chips = document.querySelectorAll('.ai-chip');
    var answerBox = document.getElementById('ai-answer-box');
    if (!chips.length || !answerBox) return;

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var qKey = chip.getAttribute('data-q');
        var answer = aiAnswers[qKey];

        if (answer) {
          answerBox.innerHTML = '<strong>Verified AI Answer:</strong> ' + answer;
          answerBox.style.display = 'block';
        }
      });
    });
  }

  /* ---- ANCHOR NAVIGATION SMOOTH SCROLL ---- */
  function initAnchorNav() {
    var links = document.querySelectorAll('.pdp-anchor-link');
    if (!links.length) return;

    links.forEach(function (link) {
      link.addEventListener('click', function (e) {
        var targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          var targetEl = document.querySelector(targetId);
          if (targetEl) {
            e.preventDefault();
            links.forEach(function (l) { l.classList.remove('active'); });
            link.classList.add('active');
            var offsetTop = targetEl.getBoundingClientRect().top + window.pageYOffset - 110;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
          }
        }
      });
    });
  }

  /* ---- INIT ALL ---- */
  document.addEventListener('DOMContentLoaded', function () {
    initPackSelector();
    initQuantitySelector();
    initAddToCart();
    initAccordions();
    initGallery();
    initReviewSlider();
    initAiAssistant();
    initAnchorNav();
  });
})();

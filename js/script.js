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
      card.setAttribute('aria-checked', index === selectedVariant);
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

    function getPerView() {
      var visibleCards = getVisibleCards();
      var wrap = track.parentElement;
      if (!visibleCards[0] || !wrap) return 1;
      return Math.max(1, Math.round(wrap.offsetWidth / (visibleCards[0].offsetWidth + 24)));
    }

    function getMaxIndex() {
      return Math.max(0, getVisibleCards().length - getPerView());
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

      var maxIndex = getMaxIndex();
      if (currentIndex > maxIndex) currentIndex = maxIndex;
      if (currentIndex < 0) currentIndex = 0;

      var cardWidth = visibleCards[0] ? visibleCards[0].offsetWidth + 24 : 0;
      track.style.transform = 'translateX(-' + (currentIndex * cardWidth) + 'px)';

      renderDots(maxIndex + 1);
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
        if (currentIndex > 0) {
          currentIndex--;
        } else {
          currentIndex = getMaxIndex();
        }
        updateSlider();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        if (currentIndex < getMaxIndex()) {
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

/* ================================================================
   ▓▓▓ V2 UPGRADE LAYER — MOTION ENGINE ▓▓▓
   Self-contained IIFE. Appended after the original code, touches
   nothing inside it. Safe to delete as a block if ever needed.
   ================================================================ */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- 1. SCROLL REVEAL ------------------------------------------
     Auto-tags content blocks so almost no HTML edits are needed.
     Anything already carrying data-reveal / data-stagger is respected. */
  var REVEAL_MAP = [
    ['.section-eyebrow',        'fade'],
    ['.section-heading',        'fade'],   // words rise individually (V3 split)
    ['.section-subheading',     'up'],
    ['.why-visual-anchor',      'left'],
    ['.why-editorial-item',     'right'],
    ['.benefits-media',         'left'],
    ['.benefit-card',           'scale'],
    ['.routine-card',           'scale'],
    ['.brand-proof-card',       'up'],
    ['.study-card',             'scale'],
    ['.science-core-node',      'scale'],
    ['.science-flow-node',      'up'],
    ['.accordion-item',         'up'],
    ['.timeline-step',          'up'],
    ['.compare-wrap',           'up'],
    ['.quality-item',           'up'],
    ['.final-cta__heading',     'up'],
    ['.final-cta__text',        'up'],
    ['.final-cta .cta-primary', 'up']
  ];

  function tagReveals() {
    REVEAL_MAP.forEach(function (pair) {
      var nodes = document.querySelectorAll(pair[0]);
      nodes.forEach(function (el, i) {
        if (el.hasAttribute('data-reveal')) return;
        if (el.closest('.hero')) return;           // hero has its own entrance
        el.setAttribute('data-reveal', pair[1]);
        // stagger siblings of the same kind
        var delay = Math.min(i, 6) * 80;
        if (delay) el.style.setProperty('--reveal-delay', delay + 'ms');
      });
    });
  }

  function initReveal() {
    var items = document.querySelectorAll('[data-reveal], [data-stagger], .timeline');
    if (!items.length) return;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    items.forEach(function (el) { io.observe(el); });
  }

  /* ---- 2. HERO ENTRANCE ------------------------------------------ */
  function initHeroEntrance() {
    if (reduceMotion) return;
    var sel = [
      '.gallery', '.buy-box__category', '.buy-box__title',
      '.buy-box__subtitle-tag', '.buy-box__description', '.buy-box__rating',
      '.buy-box__source', '.buy-box__benefits', '.proof-strip',
      '.buy-box__price-wrapper'
    ];
    sel.forEach(function (s) {
      var el = document.querySelector(s);
      if (el) el.classList.add('hero-anim');
    });
  }

  /* ---- 3. ANIMATED COUNTERS -------------------------------------- */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';
    var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    var dur = 1600;
    var start = null;

    if (reduceMotion) { el.textContent = prefix + target.toFixed(decimals) + suffix; return; }

    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);          // easeOutCubic
      el.textContent = prefix + (target * eased).toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function initCounters() {
    var els = document.querySelectorAll('[data-count]');
    if (!els.length) return;

    if (!('IntersectionObserver' in window)) {
      els.forEach(animateCount);
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        animateCount(e.target);
        io.unobserve(e.target);
      });
    }, { threshold: 0.5 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---- 4. SCROLL PROGRESS BAR ------------------------------------ */
  function initProgressBar() {
    var bar = document.createElement('div');
    bar.className = 'scroll-progress';
    document.body.appendChild(bar);

    function update() {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      var p = h > 0 ? window.scrollY / h : 0;
      bar.style.transform = 'scaleX(' + p + ')';
    }
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  /* ---- 5. SCROLLSPY for the anchor nav ---------------------------
     The original only set .active on click; now it tracks scrolling. */
  function initScrollSpy() {
    var links = Array.prototype.slice.call(document.querySelectorAll('.pdp-anchor-link'));
    if (!links.length) return;

    var targets = links
      .map(function (l) {
        var id = l.getAttribute('href');
        var el = id && id.charAt(0) === '#' ? document.querySelector(id) : null;
        return el ? { link: l, el: el } : null;
      })
      .filter(Boolean);

    if (!targets.length) return;

    function onScroll() {
      var line = window.scrollY + 160;
      var current = targets[0];
      targets.forEach(function (t) {
        if (t.el.offsetTop <= line) current = t;
      });
      links.forEach(function (l) { l.classList.toggle('active', l === current.link); });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- 6. STICKY DESKTOP BUY BAR --------------------------------- */
  function initDeskBuyBar() {
    var hero = document.getElementById('hero-atc');
    var bar = document.querySelector('.desk-buybar');
    if (!hero || !bar) return;

    function onScroll() {
      var past = hero.getBoundingClientRect().bottom < 0;
      bar.classList.toggle('is-visible', past);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Mirror the hero price into the bar whenever the pack changes
    var src = document.getElementById('current-price');
    var srcMrp = document.getElementById('mrp-price');
    var dst = document.getElementById('deskbar-price');
    var dstMrp = document.getElementById('deskbar-mrp');
    if (!src || !dst) return;

    // Mirrors the hero price, including each frame of the V3 odometer roll.
    // The pop animation itself is owned by V3 — don't touch classes here.
    var mo = new MutationObserver(function () {
      dst.textContent = src.textContent;
      if (dstMrp && srcMrp) dstMrp.textContent = srcMrp.textContent;
    });
    mo.observe(src, { childList: true, characterData: true, subtree: true });
  }

  /* ---- 7. ACCORDION: real height animation -----------------------
     The original CSS used max-height:600px, which clips long answers
     and makes the easing feel wrong. We watch the .open class that the
     original script toggles and set an exact pixel height. */
  function initAccordionHeight() {
    var items = document.querySelectorAll('.accordion-item');
    if (!items.length) return;

    function sync(item) {
      var content = item.querySelector('.accordion-content');
      var inner = item.querySelector('.accordion-content__inner');
      if (!content || !inner) return;
      content.style.height = item.classList.contains('open')
        ? inner.offsetHeight + 'px'
        : '0px';
    }

    items.forEach(function (item) {
      sync(item);
      new MutationObserver(function () { sync(item); })
        .observe(item, { attributes: true, attributeFilter: ['class'] });
    });

    window.addEventListener('resize', function () {
      items.forEach(function (item) {
        if (item.classList.contains('open')) sync(item);
      });
    });
  }

  /* ---- 8. SUBTLE 3D TILT on photo cards -------------------------- */
  function initTilt() {
    if (reduceMotion || window.matchMedia('(hover: none)').matches) return;
    var cards = document.querySelectorAll('.routine-card');

    cards.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var r = card.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform =
          'translateY(-10px) perspective(900px) rotateX(' + (-y * 4).toFixed(2) +
          'deg) rotateY(' + (x * 4).toFixed(2) + 'deg)';
      });
      card.addEventListener('mouseleave', function () { card.style.transform = ''; });
    });
  }

  /* ---- 9. AI ANSWER entrance ------------------------------------- */
  function initAiAnswerMotion() {
    var box = document.getElementById('ai-answer-box');
    if (!box) return;
    new MutationObserver(function () {
      box.classList.remove('is-in');
      void box.offsetWidth;
      box.classList.add('is-in');
    }).observe(box, { childList: true });
  }

  /* ---- 10. REVIEW SLIDER: autoplay + drag / swipe -----------------
     Adds behaviour on top of the existing slider by driving its own
     Prev / Next buttons, so there is no duplicated state. */
  function initSliderExtras() {
    var track = document.getElementById('reviews-slider-track');
    var next = document.getElementById('reviews-next');
    var prev = document.getElementById('reviews-prev');
    var section = document.querySelector('.reviews-section');
    if (!track || !next || !section) return;

    /* autoplay */
    var timer = null;
    function play() {
      if (reduceMotion) return;
      stop();
      timer = setInterval(function () { next.click(); }, 5200);
    }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }

    section.addEventListener('mouseenter', stop);
    section.addEventListener('mouseleave', play);
    section.addEventListener('focusin', stop);

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        entries[0].isIntersecting ? play() : stop();
      }, { threshold: 0.25 }).observe(section);
    } else {
      play();
    }

    /* drag + swipe */
    var down = false, startX = 0, moved = 0;

    function pointerDown(e) {
      down = true; moved = 0;
      startX = (e.touches ? e.touches[0].clientX : e.clientX);
      track.classList.add('is-dragging');
      stop();
    }
    function pointerMove(e) {
      if (!down) return;
      moved = (e.touches ? e.touches[0].clientX : e.clientX) - startX;
    }
    function pointerUp() {
      if (!down) return;
      down = false;
      track.classList.remove('is-dragging');
      if (Math.abs(moved) > 55) { (moved < 0 ? next : prev).click(); }
      play();
    }

    track.addEventListener('mousedown', pointerDown);
    window.addEventListener('mousemove', pointerMove);
    window.addEventListener('mouseup', pointerUp);
    track.addEventListener('touchstart', pointerDown, { passive: true });
    track.addEventListener('touchmove', pointerMove, { passive: true });
    track.addEventListener('touchend', pointerUp);

    /* arrow keys */
    section.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') next.click();
      if (e.key === 'ArrowLeft' && prev) prev.click();
    });
  }

  /* ---- BOOT ------------------------------------------------------ */
  function boot() {
    tagReveals();
    initReveal();
    initHeroEntrance();
    initCounters();
    initProgressBar();
    initScrollSpy();
    initDeskBuyBar();
    initAccordionHeight();
    initTilt();
    initAiAnswerMotion();
    initSliderExtras();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();

/* ================================================================
   ▓▓▓ V3 — SIGNATURE MOTION ENGINE ▓▓▓
   Second self-contained IIFE. Pairs with the V3 CSS layer.
   Everything checks prefers-reduced-motion and no-ops if set.
   ================================================================ */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- V3.1 AURORA -------------------------------------------- */
  function initAurora() {
    var hero = document.querySelector('.hero');
    if (!hero || reduce || hero.querySelector('.hero-aurora')) return;
    var layer = document.createElement('div');
    layer.className = 'hero-aurora';
    layer.setAttribute('aria-hidden', 'true');
    layer.innerHTML = '<i></i><i></i><i></i>';
    hero.insertBefore(layer, hero.firstChild);
  }

  /* ---- V3.2 SPLIT-WORD HEADINGS -------------------------------- */
  function splitWords(el, step) {
    if (el.querySelector('.sw')) return;
    var words = el.textContent.trim().split(/\s+/);
    el.textContent = '';
    words.forEach(function (w, i) {
      var outer = document.createElement('span');
      outer.className = 'sw';
      var inner = document.createElement('span');
      inner.className = 'sw-i';
      inner.textContent = w;
      inner.style.transitionDelay = (i * (step || 55)) + 'ms';
      outer.appendChild(inner);
      el.appendChild(outer);
      if (i < words.length - 1) el.appendChild(document.createTextNode(' '));
    });
  }

  function initSplitHeadings() {
    if (reduce) return;
    document.querySelectorAll('.section-heading, .final-cta__heading')
      .forEach(function (h) { splitWords(h, 55); });

    // The hero H1 is above the fold — release it on load, not on scroll.
    var h1 = document.querySelector('.buy-box__title');
    if (h1) {
      splitWords(h1, 62);
      requestAnimationFrame(function () {
        setTimeout(function () { h1.classList.add('sw-go'); }, 180);
      });
    }
  }

  /* ---- V3.3 MAGNETIC BUTTONS + RIPPLE -------------------------- */
  function initMagnetic() {
    var btns = document.querySelectorAll('.cta-primary');

    btns.forEach(function (btn) {
      if (!reduce && !window.matchMedia('(hover: none)').matches) {
        btn.addEventListener('mouseenter', function () { btn.classList.add('is-magnetic'); });
        btn.addEventListener('mousemove', function (e) {
          var r = btn.getBoundingClientRect();
          var x = e.clientX - r.left - r.width / 2;
          var y = e.clientY - r.top - r.height / 2;
          btn.style.setProperty('--mx', (x * 0.14).toFixed(1) + 'px');
          btn.style.setProperty('--my', (y * 0.22).toFixed(1) + 'px');
        });
        btn.addEventListener('mouseleave', function () {
          btn.classList.remove('is-magnetic');
          btn.style.setProperty('--mx', '0px');
          btn.style.setProperty('--my', '0px');
        });
      }

      /* click ripple */
      btn.addEventListener('click', function (e) {
        if (reduce) return;
        var r = btn.getBoundingClientRect();
        var d = Math.max(r.width, r.height) * 2.2;
        var s = document.createElement('span');
        s.className = 'rip';
        s.style.width = s.style.height = d + 'px';
        s.style.left = (e.clientX - r.left) + 'px';
        s.style.top = (e.clientY - r.top) + 'px';
        btn.appendChild(s);
        setTimeout(function () { s.remove(); }, 640);
      });
    });
  }

  /* ---- V3.4 ADD-TO-CART BURST ---------------------------------- */
  function initBurst() {
    if (reduce) return;
    var COLORS = ['#E65100', '#FF7A29', '#2E7D32', '#1D1D1B', '#FFB27A'];

    document.querySelectorAll('.js-add-to-cart').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var r = btn.getBoundingClientRect();
        var cx = r.left + r.width / 2;
        var cy = r.top + r.height / 2;

        for (var i = 0; i < 18; i++) {
          var p = document.createElement('span');
          p.className = 'burst';
          var ang = (Math.PI * 2 * i) / 18 + (Math.random() - 0.5) * 0.5;
          var dist = 70 + Math.random() * 95;
          p.style.setProperty('--bx', (Math.cos(ang) * dist).toFixed(0) + 'px');
          p.style.setProperty('--by', (Math.sin(ang) * dist).toFixed(0) + 'px');
          p.style.left = cx + 'px';
          p.style.top = cy + 'px';
          p.style.background = COLORS[i % COLORS.length];
          p.style.animationDelay = (Math.random() * 90) + 'ms';
          document.body.appendChild(p);
          (function (el) { setTimeout(function () { el.remove(); }, 1100); })(p);
        }
      });
    });
  }

  /* ---- V3.5 GALLERY TILT + GLARE ------------------------------- */
  function initTiltGallery() {
    var main = document.querySelector('.gallery__main');
    if (!main) return;

    if (!main.querySelector('.gallery__glare')) {
      var g = document.createElement('div');
      g.className = 'gallery__glare';
      g.setAttribute('aria-hidden', 'true');
      main.appendChild(g);
    }
    if (reduce || window.matchMedia('(hover: none)').matches) return;

    main.addEventListener('mousemove', function (e) {
      var r = main.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width;
      var py = (e.clientY - r.top) / r.height;
      main.classList.add('is-tilting');
      main.style.transform =
        'rotateX(' + ((0.5 - py) * 7).toFixed(2) + 'deg) ' +
        'rotateY(' + ((px - 0.5) * 8).toFixed(2) + 'deg) translateZ(0)';
      main.style.setProperty('--gx', (px * 100).toFixed(1) + '%');
      main.style.setProperty('--gy', (py * 100).toFixed(1) + '%');
    });

    main.addEventListener('mouseleave', function () {
      main.classList.remove('is-tilting');
      main.style.transform = '';
    });
  }

  /* ---- V3.6 SVG DRAW-ON ---------------------------------------- */
  function initDrawIcons() {
    var strip = document.querySelector('.quality-strip');
    if (!strip) return;

    var shapes = strip.querySelectorAll('.quality-item__icon-wrap svg *');
    if (!shapes.length) return;

    if (reduce || !('IntersectionObserver' in window)) { strip.classList.add('is-drawn'); return; }

    shapes.forEach(function (s) {
      var len = 0;
      try { len = s.getTotalLength ? s.getTotalLength() : 0; } catch (err) { len = 0; }
      if (!len) return;
      s.style.strokeDasharray = len;
      s.style.strokeDashoffset = len;
    });

    var io = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) return;
      shapes.forEach(function (s) { s.style.strokeDashoffset = '0'; });
      strip.classList.add('is-drawn');
      io.disconnect();
    }, { threshold: 0.35 });
    io.observe(strip);
  }

  /* ---- V3.7 CURSOR SPOTLIGHT ----------------------------------- */
  function initSpotlight() {
    if (reduce) return;
    document.querySelectorAll('.brand-proof-section, .final-cta').forEach(function (sec) {
      sec.addEventListener('mousemove', function (e) {
        var r = sec.getBoundingClientRect();
        sec.style.setProperty('--sx', (((e.clientX - r.left) / r.width) * 100).toFixed(1) + '%');
        sec.style.setProperty('--sy', (((e.clientY - r.top) / r.height) * 100).toFixed(1) + '%');
      });
    });
  }

  /* ---- V3.8 WIPE REVEAL TARGETS -------------------------------- */
  function tagWipes() {
    ['.benefits-media', '.why-visual-anchor'].forEach(function (sel) {
      var el = document.querySelector(sel);
      if (el && !el.hasAttribute('data-wipe')) el.setAttribute('data-wipe', '');
    });
  }

  /* ---- V3.9 PRICE ODOMETER ------------------------------------
     Driven off pack-card clicks rather than a MutationObserver, so
     our own writes can never re-trigger it. */
  function initPriceRoll() {
    var priceEl = document.getElementById('current-price');
    if (!priceEl) return;

    function toNum(s) { return parseFloat(String(s).replace(/[^0-9.]/g, '')) || 0; }
    function fmt(n) { return '₹' + Math.round(n).toLocaleString('en-IN'); }

    var from = toNum(priceEl.textContent);

    document.querySelectorAll('.pack-card').forEach(function (card) {
      card.addEventListener('click', function () {
        requestAnimationFrame(function () {
          var to = toNum(priceEl.textContent);
          if (to === from) return;
          if (reduce) { from = to; return; }

          var start = null, dur = 520, a = from;
          priceEl.classList.remove('is-rolling');
          void priceEl.offsetWidth;
          priceEl.classList.add('is-rolling');

          function step(ts) {
            if (start === null) start = ts;
            var p = Math.min((ts - start) / dur, 1);
            var e = 1 - Math.pow(1 - p, 3);
            priceEl.textContent = fmt(a + (to - a) * e);
            if (p < 1) { requestAnimationFrame(step); } else { priceEl.textContent = fmt(to); from = to; }
          }
          requestAnimationFrame(step);
        });
      });
    });
  }

  /* ---- V3.10 PARALLAX ------------------------------------------ */
  function initParallax() {
    if (reduce) return;
    var els = document.querySelectorAll('[data-parallax]');
    if (!els.length) return;
    var ticking = false;

    function frame() {
      var vh = window.innerHeight;
      els.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        var mid = r.top + r.height / 2;
        var off = ((mid - vh / 2) / vh) * (parseFloat(el.getAttribute('data-parallax')) || 18);
        el.style.transform = 'translate3d(0,' + (-off).toFixed(1) + 'px,0)';
      });
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(frame); }
    }, { passive: true });
    frame();
  }

  function tagParallax() {
    var img = document.querySelector('.benefits-media img');
    if (img && !img.hasAttribute('data-parallax')) img.setAttribute('data-parallax', '22');
  }

  /* ---- BOOT ---------------------------------------------------- */
  function boot() {
    initAurora();
    initSplitHeadings();
    initMagnetic();
    initBurst();
    initTiltGallery();
    initDrawIcons();
    initSpotlight();
    tagWipes();
    initPriceRoll();
    tagParallax();
    initParallax();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();

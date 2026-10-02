// ============================================================
// Smooth scrolling for in-page anchors
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (!href || href === '#') return; // skip bare "#" links
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update URL without jumping
      history.pushState(null, '', href);
    }
  });
});

// ============================================================
// Intersection Observer — scroll-in animations
// Respects prefers-reduced-motion
// ============================================================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeUp 0.8s ease forwards';
        observer.unobserve(entry.target); // animate once, then stop watching
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-fade-up').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
} else {
  document.querySelectorAll('.animate-fade-up').forEach(el => {
    el.style.opacity = '1';
  });
}

// ============================================================
// Theme Toggle
// ============================================================
const toggleBtn = document.getElementById('themeToggle');
const body = document.body;

function applyTheme(theme) {
  const isEmber = theme === 'ember';
  body.classList.toggle('light-mode', isEmber);
  if (toggleBtn) {
    toggleBtn.innerHTML = isEmber
      ? '<i class="fas fa-sun" aria-hidden="true"></i>'
      : '<i class="fas fa-moon" aria-hidden="true"></i>';
    toggleBtn.setAttribute('aria-label', isEmber ? 'Switch to dark theme' : 'Switch to ember theme');
  }
}

// Initialize from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light' || savedTheme === 'ember') {
  applyTheme('ember');
} else {
  applyTheme('dark');
}

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const goingEmber = !body.classList.contains('light-mode');
    applyTheme(goingEmber ? 'ember' : 'dark');
    localStorage.setItem('theme', goingEmber ? 'light' : 'dark');
  });
}

// ============================================================
// Contact Form Handler (Formspree)
// ============================================================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    const action = contactForm.getAttribute('action');

    // Guard: if the action URL is still a placeholder, warn the user
    if (!action || action.includes('YOUR_FORM_ID')) {
      formMessage.className = 'form-message error';
      formMessage.innerHTML = '❌ Something went wrong. Please email me directly at marcofisher21@gmail.com';
      formMessage.style.display = 'block';
      setTimeout(() => { formMessage.style.display = 'none'; }, 6000);
      return;
    }

    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin" aria-hidden="true"></i> Sending...';
    submitBtn.disabled = true;

    try {
      const response = await fetch(action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        formMessage.className = 'form-message success';
        formMessage.innerHTML = '✅ Message sent! I\'ll get back to you soon.';
        contactForm.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      formMessage.className = 'form-message error';
      formMessage.innerHTML = '❌ Something went wrong. Please email me directly at marco.fisher21@gmail.com';
    } finally {
      formMessage.style.display = 'block';
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;

      setTimeout(() => {
        formMessage.style.display = 'none';
      }, 6000);
    }
  });
}

// ============================================================
// Dynamic Footer Year
// ============================================================
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ============================================================
// Console Easter Egg
// ============================================================
console.log(
  "%c✨ Luminous Portfolio %c| Marco Fisher %c→ marco.fisher21@gmail.com",
  "color: #D4AF37; font-size: 16px; font-weight: bold;",
  "color: #9B59B6; font-size: 14px;",
  "color: #B8A8D8; font-size: 12px;"
);
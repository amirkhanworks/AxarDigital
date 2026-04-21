/* ============================================================
   AXAR DIGITAL — main.js
   Behaviours: nav scroll, hamburger, dropdown, accordion,
               smooth scroll, active nav, responsive table
   ============================================================ */

(function () {
  'use strict';

  // ── 1. NAV SCROLL SHADOW ──────────────────────────────────
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 20) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run on load
  }

  // ── 2. MOBILE HAMBURGER ───────────────────────────────────
  const hamburger  = document.getElementById('hamburger');
  const navLinks   = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close nav when clicking outside
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ── 3. PRODUCTS DROPDOWN ─────────────────────────────────
  const dropdownItems = document.querySelectorAll('.nav-item.dropdown');

  dropdownItems.forEach((item) => {
    const trigger = item.querySelector('.dropdown-trigger');

    if (!trigger) return;

    // Desktop: toggle on click (also works on mobile)
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = item.classList.toggle('open');
      trigger.setAttribute('aria-expanded', isOpen);

      // Close siblings
      dropdownItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove('open');
          const otherTrigger = other.querySelector('.dropdown-trigger');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Keyboard: Escape closes
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        item.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
        trigger.focus();
      }
    });

    // Close when clicking a dropdown item
    const links = item.querySelectorAll('.dropdown-item');
    links.forEach((link) => {
      link.addEventListener('click', () => {
        item.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
        if (navLinks) {
          navLinks.classList.remove('open');
          if (hamburger) {
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
          }
        }
      });
    });
  });

  // Close dropdowns on outside click
  document.addEventListener('click', () => {
    dropdownItems.forEach((item) => {
      item.classList.remove('open');
      const trigger = item.querySelector('.dropdown-trigger');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    });
  });

  // ── 4. FAQ ACCORDION ─────────────────────────────────────
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    const answer   = item.querySelector('.faq-answer');

    if (!question || !answer) return;

    question.setAttribute('aria-expanded', 'false');

    question.addEventListener('click', () => {
      const isExpanded = question.getAttribute('aria-expanded') === 'true';

      // Close all others
      faqItems.forEach((other) => {
        if (other !== item) {
          const otherQ = other.querySelector('.faq-question');
          const otherA = other.querySelector('.faq-answer');
          if (otherQ) otherQ.setAttribute('aria-expanded', 'false');
          if (otherA) otherA.classList.remove('open');
        }
      });

      // Toggle current
      question.setAttribute('aria-expanded', !isExpanded);
      answer.classList.toggle('open', !isExpanded);
    });
  });

  // ── 5. SMOOTH SCROLL ─────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80; // nav height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });

        // Close mobile nav if open
        if (navLinks) navLinks.classList.remove('open');
        if (hamburger) {
          hamburger.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  // ── 6. ACTIVE NAV STATE ───────────────────────────────────
  const path = window.location.pathname;

  const navLinkEls = document.querySelectorAll('a.nav-link, a.dropdown-item');
  navLinkEls.forEach((link) => {
    const href = link.getAttribute('href') || '';
    // Match by pathname segment
    if (href && path.endsWith(href.replace(/^\.\.\//, ''))) {
      link.classList.add('active');
    }
    // Homepage
    if ((path === '/' || path.endsWith('index.html')) && (href === 'index.html' || href === './')) {
      link.classList.add('active');
    }
  });

  // ── 7. COMPARISON TABLE — RESPONSIVE ─────────────────────
  const compTable = document.querySelector('.comparison-table');
  if (compTable) {
    const note = document.querySelector('.comparison-table-note');
    const checkResponsive = () => {
      if (window.innerWidth <= 768) {
        if (note) note.style.display = 'block';
      } else {
        if (note) note.style.display = 'none';
        // Ensure all cells are visible on resize
        compTable.querySelectorAll('th, td').forEach(cell => {
          cell.style.display = '';
        });
      }
    };
    window.addEventListener('resize', checkResponsive, { passive: true });
    checkResponsive();
  }

  // ── 8. CLOSE NAV ON LINK CLICK (mobile) ──────────────────
  if (navLinks) {
    navLinks.querySelectorAll('a.nav-link:not(.dropdown-trigger)').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        if (hamburger) {
          hamburger.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

})();

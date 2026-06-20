/* ====================================================================
   PILARCPNS LANDING PAGE
   script.js (vanilla, no library)
   - Theme toggle (light / dark)
   - FAQ accordion (native details, no JS needed for toggle itself)
   - Mobile menu (hamburger)
   - Smooth scroll for nav anchors
   ==================================================================== */

(function () {
  'use strict';

  // === THEME TOGGLE ===
  var root = document.documentElement;
  var toggle = document.querySelector('#theme-toggle');
  var STORAGE_KEY = 'pilarcpns-theme';

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    // Update meta theme-color for mobile browsers
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', theme === 'dark' ? '#1F1008' : '#F5F1E9');
    }
  }

  function currentTheme() {
    return root.getAttribute('data-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  // Sync UI to stored value on load (FOUC script already set attribute, this confirms)
  var saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    applyTheme(saved);
  }

  // Wire toggle click
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {
        // localStorage may be blocked in some contexts; ignore silently
      }
    });
  }

  // === SMOOTH SCROLL FOR ANCHOR LINKS ===
  // Native scroll-behavior: smooth in CSS handles most cases.
  // This adds focus management for accessibility.
  var anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = link.getAttribute('href');
      if (href === '#' || href.length < 2) return;
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update focus for screen readers
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      // Update URL hash without jumping
      if (history.pushState) {
        history.pushState(null, '', href);
      }
    });
  });

  // === MOBILE MENU TOGGLE ===
  var navToggle = document.querySelector('#nav-toggle');
  var mobileMenu = document.getElementById('mobile-menu');
  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('hidden') === false;
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    // Close menu when clicking a nav link
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (!mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // === KEYBOARD: ESCAPE closes FAQ details if focused ===
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      var openFaq = document.querySelector('details.faq-item[open]');
      if (openFaq) {
        openFaq.removeAttribute('open');
      }
    }
  });

  // === FADE-IN ON SCROLL (IntersectionObserver) ===
  // Respect prefers-reduced-motion: skip observer, sections stay visible.
  // Targets main > section only (header sticky + footer excluded).
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReduced && 'IntersectionObserver' in window) {
    var fadeTargets = document.querySelectorAll('main > section');
    fadeTargets.forEach(function (el) {
      el.classList.add('fade-on-scroll');
    });

    var fadeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.05
    });

    fadeTargets.forEach(function (el) {
      fadeObserver.observe(el);
    });
  }
})();

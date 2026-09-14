(function () {
  'use strict';
  const menu = document.querySelector('#mobile-menu');
  const menuToggle = document.querySelector('#menu-toggle');
  const menuClose = document.querySelector('#menu-close');
  const menuLinks = document.querySelectorAll('.mobile-menu a');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function setMenu(open) {
    menu.classList.toggle('open', open);
    menu.setAttribute('aria-hidden', String(!open));
    menuToggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  }
  menuToggle.addEventListener('click', () => setMenu(true));
  menuClose.addEventListener('click', () => setMenu(false));
  menuLinks.forEach((link) => link.addEventListener('click', () => setMenu(false)));

  document.querySelectorAll('.education-card p').forEach((paragraph) => {
    if (paragraph.textContent.trim() === 'Business Intelligence & Data Analytics') paragraph.remove();
  });
  // Ambient stripes stay; motion.css restores them.

  document.querySelectorAll('.lens-copy .signature').forEach((signature) => signature.remove());
  document.querySelectorAll('.marquee-track').forEach((track) => {
    const items = [...track.children];
    const firstSet = document.createElement('span');
    const secondSet = document.createElement('span');
    firstSet.className = 'marquee-set';
    secondSet.className = 'marquee-set';
    items.forEach((item) => firstSet.append(item));
    firstSet.querySelectorAll('*').forEach((item) => item.removeAttribute('aria-hidden'));
    secondSet.innerHTML = firstSet.innerHTML;
    secondSet.setAttribute('aria-hidden', 'true');
    track.replaceChildren(firstSet, secondSet);
  });

  const gallery = document.querySelector('#gallery');
  if (gallery && !gallery.querySelector('.social-tile')) {
    const socialTile = document.createElement('a');
    socialTile.className = 'social-tile';
    socialTile.href = 'https://www.instagram.com/virtu0sos/';
    socialTile.target = '_blank';
    socialTile.rel = 'noopener';
    socialTile.innerHTML = '<i class="bi bi-instagram"></i><strong>More from the field</strong><span>@virtu0sos on Instagram <i class="bi bi-arrow-up-right"></i></span>';
    gallery.append(socialTile);
  }
  const socialTile = document.querySelector('.social-tile');
  if (socialTile) {
    socialTile.style.setProperty('display', 'grid', 'important');
    socialTile.style.setProperty('height', 'auto', 'important');
  }
  const galleryItems = gallery ? [...gallery.querySelectorAll('a:not(.social-tile)')] : [];
  const lastPhoto = galleryItems[galleryItems.length - 1];
  if (gallery && socialTile && lastPhoto && !gallery.querySelector('.gallery-end-slot')) {
    const galleryMain = document.createElement('div');
    const endSlot = document.createElement('div');
    galleryMain.className = 'gallery-main';
    endSlot.className = 'gallery-end-slot';
    galleryItems.slice(0, -1).forEach((item) => galleryMain.append(item));
    endSlot.append(lastPhoto, socialTile);
    gallery.replaceChildren(galleryMain, endSlot);
  }
  function sizeGallery() {
    if (!gallery) return;
    gallery.style.setProperty('display', 'block', 'important');
    gallery.style.setProperty('column-count', 'initial', 'important');
    gallery.style.setProperty('column-gap', 'normal', 'important');
    const galleryMain = gallery.querySelector('.gallery-main');
    if (galleryMain) {
      galleryMain.style.setProperty('column-count', window.innerWidth <= 800 ? '2' : '4', 'important');
      galleryMain.style.setProperty('column-gap', '14px', 'important');
    }
  }
  galleryItems.forEach((item) => item.querySelector('img')?.addEventListener('load', sizeGallery));
  window.addEventListener('resize', sizeGallery);
  sizeGallery();
  const ambientStripes = document.querySelector('.ambient-stripes');
  if (ambientStripes) ambientStripes.style.setProperty('opacity', '0.28', 'important');

  const timeline = document.querySelector('.timeline');
  const nutrienRoles = timeline ? [...timeline.querySelectorAll('.timeline-item')].slice(0, 2) : [];
  if (timeline && nutrienRoles.length === 2 && !timeline.querySelector('.company-group')) {
    const companyGroup = document.createElement('div');
    companyGroup.className = 'company-group reveal';
    companyGroup.innerHTML = '<div class="company-rail"><img src="assets/revamp_assets/Nutrien.png" alt="Nutrien Ag Solutions"><span>Nutrien India Digital</span></div><div class="company-roles"></div>';
    const roles = companyGroup.querySelector('.company-roles');
    nutrienRoles.forEach((role) => {
      role.querySelectorAll('.company-logo').forEach((logo) => logo.remove());
      roles.append(role);
    });
    timeline.insertBefore(companyGroup, timeline.firstChild);
  }
  const johnDeereRole = timeline?.querySelector(':scope > .timeline-item');
  if (timeline && johnDeereRole && !timeline.querySelector('.john-deere-group')) {
    const johnDeereGroup = document.createElement('div');
    johnDeereGroup.className = 'company-group john-deere-group reveal';
    johnDeereGroup.innerHTML = '<div class="company-rail"><img src="assets/revamp_assets/John_Deere_idueR-FERQ_1.png" alt="John Deere"><span>John Deere India</span></div><div class="company-roles"></div>';
    johnDeereRole.querySelectorAll('.company-logo').forEach((logo) => logo.remove());
    johnDeereGroup.querySelector('.company-roles').append(johnDeereRole);
    timeline.append(johnDeereGroup);
  }

  const progress = document.querySelector('#scroll-progress');
  const hero = document.querySelector('.hero');
  const header = document.querySelector('.site-header');
  const cursorDot = document.querySelector('#cursor-dot');
  const cursorRing = document.querySelector('#cursor-ring');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  document.querySelectorAll('.portrait-frame').forEach((frame) => {
    frame.addEventListener('mouseenter', () => frame.classList.add('signature-active'));
    frame.addEventListener('mouseleave', () => frame.classList.remove('signature-active'));
    frame.addEventListener('focusin', () => frame.classList.add('signature-active'));
    frame.addEventListener('focusout', () => frame.classList.remove('signature-active'));
  });

  const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2, tx: window.innerWidth / 2, ty: window.innerHeight / 2 };
  const mouseShift = { x: 0, y: 0, tx: 0, ty: 0 };

  function updateScrollProgress() {
    const scrollY = window.scrollY;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.transform = `scaleX(${scrollable ? scrollY / scrollable : 0})`;
    document.documentElement.style.setProperty('--stripe-shift', `${scrollY * -0.22}px`);
    document.documentElement.style.setProperty('--lens-shift', `${scrollY * -0.14}px`);
    if (header) {
      header.classList.toggle('is-scrolled', scrollY > 24);
    }
    document.querySelectorAll('.desktop-nav a[href^="#"], .desktop-nav a[href*="index.html#"]').forEach((link) => {
      const id = link.getAttribute('href').split('#')[1];
      const section = id && document.getElementById(id);
      if (!section) return;
      const rect = section.getBoundingClientRect();
      link.classList.toggle('is-active', rect.top <= 140 && rect.bottom > 160);
    });
    document.querySelectorAll('.case-toc a[href^="#"]').forEach((link) => {
      const section = document.querySelector(link.getAttribute('href'));
      if (!section) return;
      const rect = section.getBoundingClientRect();
      link.classList.toggle('is-active', rect.top < 180 && rect.bottom > 180);
    });
  }

  if (hero && !prefersReducedMotion) {
    hero.addEventListener('pointermove', (event) => {
      const bounds = hero.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      hero.style.setProperty('--pointer-x', `${x * 22}px`);
      hero.style.setProperty('--pointer-y', `${y * 22}px`);
    });
    hero.addEventListener('pointerleave', () => {
      hero.style.setProperty('--pointer-x', '0px');
      hero.style.setProperty('--pointer-y', '0px');
    });
  }

  if (!prefersReducedMotion && finePointer) {
    document.body.classList.add('has-cursor');
    document.addEventListener('pointermove', (event) => {
      pointer.tx = event.clientX;
      pointer.ty = event.clientY;
      mouseShift.tx = (event.clientX / window.innerWidth - 0.5) * 36;
      mouseShift.ty = (event.clientY / window.innerHeight - 0.5) * 24;
      document.documentElement.style.setProperty('--spot-x', `${(event.clientX / window.innerWidth) * 100}%`);
      document.documentElement.style.setProperty('--spot-y', `${(event.clientY / window.innerHeight) * 100}%`);
    }, { passive: true });
    document.querySelectorAll('a, button, .flip-card, .featured-media').forEach((el) => {
      el.addEventListener('pointerenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('pointerleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  document.querySelectorAll('.magnetic').forEach((el) => {
    el.addEventListener('pointermove', (event) => {
      if (prefersReducedMotion || !finePointer) return;
      const bounds = el.getBoundingClientRect();
      const x = event.clientX - bounds.left - bounds.width / 2;
      const y = event.clientY - bounds.top - bounds.height / 2;
      el.style.transform = `translate(${x * 0.22}px, ${y * 0.28}px)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });

  document.querySelectorAll('.tilt-card, .education-card').forEach((el) => {
    el.addEventListener('pointermove', (event) => {
      if (prefersReducedMotion || !finePointer) return;
      const bounds = el.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;
      el.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 7}deg) rotateY(${(x - 0.5) * 9}deg)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });

  const revealElements = document.querySelectorAll('.reveal');
  function updateReveals() {
    revealElements.forEach((element) => {
      if (element.classList.contains('visible')) return;
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9 && rect.bottom > 40) element.classList.add('visible');
    });
  }
  if (prefersReducedMotion) {
    revealElements.forEach((element) => element.classList.add('visible'));
  } else {
    updateReveals();
    window.addEventListener('load', updateReveals);
  }

  const deck = document.querySelector('#idea-deck');
  if (deck) {
    const slides = [...deck.querySelectorAll('.deck-slide')];
    const dots = deck.querySelector('#deck-dots');
    let index = 0;
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.setAttribute('aria-label', `Go to beat ${i + 1}`);
      dot.addEventListener('click', () => show(i));
      dots.append(dot);
    });
    function show(next) {
      index = (next + slides.length) % slides.length;
      slides.forEach((slide, i) => slide.classList.toggle('is-on', i === index));
      [...dots.children].forEach((dot, i) => dot.classList.toggle('is-on', i === index));
    }
    show(0);
    deck.querySelector('[data-deck="prev"]')?.addEventListener('click', () => show(index - 1));
    deck.querySelector('[data-deck="next"]')?.addEventListener('click', () => show(index + 1));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') show(index + 1);
      if (event.key === 'ArrowLeft') show(index - 1);
    });
    let touchX = 0;
    deck.addEventListener('touchstart', (event) => { touchX = event.changedTouches[0].clientX; }, { passive: true });
    deck.addEventListener('touchend', (event) => {
      const dx = event.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 40) show(index + (dx < 0 ? 1 : -1));
    }, { passive: true });
  }

  let lenis;
  if (!prefersReducedMotion && typeof Lenis === 'function') {
    lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1
    });
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
      document.querySelectorAll('.hero-portrait, .case-collage, .lens-image').forEach((el) => {
        gsap.to(el, {
          y: el.classList.contains('hero-portrait') ? 70 : 90,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true }
        });
      });
    }
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (event) => {
        const id = link.getAttribute('href');
        if (!id || id === '#') return;
        const target = document.querySelector(id);
        if (!target) return;
        event.preventDefault();
        lenis.scrollTo(target, { offset: -70 });
        setMenu(false);
      });
    });
  }

  function tick() {
    pointer.x += (pointer.tx - pointer.x) * 0.22;
    pointer.y += (pointer.ty - pointer.y) * 0.22;
    mouseShift.x += (mouseShift.tx - mouseShift.x) * 0.08;
    mouseShift.y += (mouseShift.ty - mouseShift.y) * 0.08;
    if (cursorDot) cursorDot.style.transform = `translate3d(${pointer.tx}px, ${pointer.ty}px, 0)`;
    if (cursorRing) cursorRing.style.transform = `translate3d(${pointer.x}px, ${pointer.y}px, 0)`;
    document.documentElement.style.setProperty('--mouse-x', `${mouseShift.x}px`);
    document.documentElement.style.setProperty('--mouse-y', `${mouseShift.y}px`);
    document.documentElement.style.setProperty('--stripe-angle', `${-2 + mouseShift.x * 0.08}deg`);
    if (!lenis) {
      updateScrollProgress();
      if (!prefersReducedMotion) updateReveals();
    }
    requestAnimationFrame(tick);
  }
  if (lenis) lenis.on('scroll', () => {
    updateScrollProgress();
    if (!prefersReducedMotion) updateReveals();
  });
  window.addEventListener('scroll', () => {
    updateScrollProgress();
    if (!prefersReducedMotion) updateReveals();
  }, { passive: true });
  updateScrollProgress();
  requestAnimationFrame(tick);

  if (typeof GLightbox === 'function') GLightbox({ selector: '.glightbox' });
})();

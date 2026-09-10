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

  if (!prefersReducedMotion) {
    document.addEventListener('pointermove', (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 42;
      const y = (event.clientY / window.innerHeight - 0.5) * 42;
      document.documentElement.style.setProperty('--mouse-x', `${x}px`);
      document.documentElement.style.setProperty('--mouse-y', `${y}px`);
      document.documentElement.style.setProperty('--stripe-angle', `${-2 + x * 0.15}deg`);
    }, { passive: true });
  }

  const progress = document.querySelector('#scroll-progress');
  const hero = document.querySelector('.hero');
  document.querySelectorAll('.portrait-frame').forEach((frame) => {
    frame.addEventListener('mouseenter', () => frame.classList.add('signature-active'));
    frame.addEventListener('mouseleave', () => frame.classList.remove('signature-active'));
    frame.addEventListener('focusin', () => frame.classList.add('signature-active'));
    frame.addEventListener('focusout', () => frame.classList.remove('signature-active'));
  });

  function updateScrollProgress() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${scrollable ? window.scrollY / scrollable : 0})`;
    document.documentElement.style.setProperty('--stripe-shift', `${window.scrollY * -0.28}px`);
    document.documentElement.style.setProperty('--stripe-angle', `${-2 + window.scrollY * 0.002}deg`);
    document.documentElement.style.setProperty('--lens-shift', `${window.scrollY * -0.18}px`);
  }

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress();

  if (hero && !prefersReducedMotion) {
    hero.addEventListener('pointermove', (event) => {
      const bounds = hero.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      hero.style.setProperty('--pointer-x', `${x * 18}px`);
      hero.style.setProperty('--pointer-y', `${y * 18}px`);
    });
    hero.addEventListener('pointerleave', () => {
      hero.style.setProperty('--pointer-x', '0px');
      hero.style.setProperty('--pointer-y', '0px');
    });
  }
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach((element) => revealObserver.observe(element));
  window.addEventListener('load', () => {
    if (prefersReducedMotion) {
      revealElements.forEach((element) => element.classList.add('visible'));
      return;
    }
    revealElements.forEach((element, index) => {
      window.setTimeout(() => element.classList.add('visible'), index * 90);
    });
  });
  if (typeof GLightbox === 'function') GLightbox({ selector: '.glightbox' });
})();

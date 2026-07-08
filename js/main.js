document.addEventListener('DOMContentLoaded', () => {
  // ===== Elements =====
  const navLinks = document.querySelectorAll('.nav__link');
  const sectionIndicators = document.querySelectorAll('.section-indicator__num');
  const mobileNav = document.getElementById('mobileNav');
  const menuToggle = document.getElementById('menuToggle');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav__link');
  const terminalModal = document.getElementById('terminalModal');
  const terminalOpen = document.getElementById('terminalOpen');
  const terminalOpen2 = document.getElementById('terminalOpen2');
  const terminalClose = document.getElementById('terminalClose');
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const serviceCards = document.querySelectorAll('.service-card');

  const scrollSections = [
    { id: 'home', indicator: 'home' },
    { id: 'about', indicator: 'about' },
    { id: 'projects', indicator: 'projects' },
    { id: 'contact', indicator: 'contact' },
  ];

  // ===== Active Nav Link =====
  function setActiveNav(sectionId) {
    navLinks.forEach((link) => {
      link.classList.toggle('nav__link--active', link.dataset.nav === sectionId);
    });

    const indicatorMap = { home: 'home', about: 'about', services: 'about', projects: 'projects', blog: 'projects', hacks: 'projects', contact: 'contact' };
    const activeIndicator = indicatorMap[sectionId] || sectionId;

    sectionIndicators.forEach((ind) => {
      ind.classList.toggle('active', ind.dataset.section === activeIndicator);
    });
  }

  // ===== Scroll Spy =====
  function onScroll() {
    const scrollPos = window.scrollY + window.innerHeight / 3;
    let current = 'home';

    scrollSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollPos) {
        current = id;
      }
    });

    if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 50) {
      current = 'contact';
    }

    const servicesEl = document.getElementById('services');
    const blogEl = document.getElementById('blog');
    const hacksEl = document.getElementById('hacks');
    const contactEl = document.getElementById('contact');

    if (servicesEl && scrollPos >= servicesEl.offsetTop && scrollPos < (document.getElementById('projects')?.offsetTop || Infinity)) {
      setActiveNav('services');
      return;
    }
    if (hacksEl && contactEl && scrollPos >= hacksEl.offsetTop && scrollPos < contactEl.offsetTop) {
      setActiveNav('hacks');
      return;
    }
    if (blogEl && hacksEl && scrollPos >= blogEl.offsetTop && scrollPos < hacksEl.offsetTop) {
      setActiveNav('blog');
      return;
    }

    setActiveNav(current);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ===== Mobile Menu =====
  function toggleMenu(open) {
    mobileNav.classList.toggle('active', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', () => toggleMenu(!mobileNav.classList.contains('active')));
  }

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // ===== Terminal Modal =====
  function openTerminal() {
    terminalModal.classList.add('active');
    terminalModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeTerminal() {
    terminalModal.classList.remove('active');
    terminalModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (terminalOpen) terminalOpen.addEventListener('click', openTerminal);
  if (terminalOpen2) terminalOpen2.addEventListener('click', openTerminal);
  if (terminalClose) terminalClose.addEventListener('click', closeTerminal);

  if (terminalModal) {
    terminalModal.querySelector('.terminal-modal__backdrop')?.addEventListener('click', closeTerminal);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeTerminal();
      toggleMenu(false);
    }
  });

  // ===== Service Cards → Scroll to Services =====
  serviceCards.forEach((card) => {
    card.addEventListener('click', () => {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // ===== Contact Form =====
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();

      if (!name || !email || !message) {
        formStatus.textContent = window.i18n.t('contact.error');
        formStatus.className = 'contact-form__status error';
        return;
      }

      formStatus.textContent = window.i18n.t('contact.success');
      formStatus.className = 'contact-form__status success';
      contactForm.reset();

      setTimeout(() => {
        formStatus.textContent = '';
        formStatus.className = 'contact-form__status';
      }, 5000);
    });
  }

  // ===== Counter Animation =====
  const statNums = document.querySelectorAll('.stat-card__num');
  let statsAnimated = false;

  function animateStats() {
    if (statsAnimated) return;
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return;

    const rect = aboutSection.getBoundingClientRect();
    if (rect.top > window.innerHeight || rect.bottom < 0) return;

    statsAnimated = true;
    statNums.forEach((el) => {
      const target = parseInt(el.dataset.count, 10);
      const duration = 2000;
      const start = performance.now();

      function update(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(target * eased);
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = target;
      }

      requestAnimationFrame(update);
    });
  }

  window.addEventListener('scroll', animateStats, { passive: true });
  animateStats();

  // ===== Reveal on Scroll =====
  const revealEls = document.querySelectorAll(
    '.section-header, .about__grid, .service-full-card, .project-card, .blog-card, .hack-card, .contact__grid'
  );

  revealEls.forEach((el) => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach((el) => revealObserver.observe(el));

  // ===== Skill Bars Animation =====
  const skillBars = document.querySelectorAll('.skill-item__fill');
  skillBars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = '0';
    bar.dataset.target = width;
  });

  const skillsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.target;
        }
      });
    },
    { threshold: 0.3 }
  );

  skillBars.forEach((bar) => skillsObserver.observe(bar));

  // ===== Language Switcher =====
  document.querySelectorAll('.lang-switch__btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      window.i18n.setLanguage(btn.dataset.lang);
    });
  });
});

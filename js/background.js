(function initCyberBackground() {
  if (document.getElementById('cyberBg')) return;

  const wrapper = document.createElement('div');
  wrapper.className = 'cyber-bg';
  wrapper.id = 'cyberBg';
  wrapper.setAttribute('aria-hidden', 'true');
  wrapper.innerHTML = `
    <canvas class="cyber-bg__canvas" id="bgCanvas"></canvas>
    <div class="cyber-bg__grid"></div>
    <div class="cyber-bg__hex"></div>
    <div class="cyber-bg__scanline"></div>
    <div class="cyber-bg__vignette"></div>
    <div class="cyber-bg__orb cyber-bg__orb--1"></div>
    <div class="cyber-bg__orb cyber-bg__orb--2"></div>
    <div class="cyber-bg__orb cyber-bg__orb--3"></div>
  `;
  document.body.prepend(wrapper);

  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = 0;
  let height = 0;
  let particles = [];
  let mouse = { x: -9999, y: -9999 };
  let animationId = null;

  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const particleCount = isMobile ? 40 : 90;
  const connectionDist = isMobile ? 100 : 140;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }

  function createParticles() {
    particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: Math.random() * 1.8 + 0.4,
      alpha: Math.random() * 0.5 + 0.2,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        p.x -= dx * 0.008;
        p.y -= dy * 0.008;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 200, 255, ${p.alpha})`;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const cdx = p.x - p2.x;
        const cdy = p.y - p2.y;
        const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

        if (cdist < connectionDist) {
          const opacity = (1 - cdist / connectionDist) * 0.18;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(0, 168, 232, ${opacity})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    });

    animationId = requestAnimationFrame(draw);
  }

  function drawStatic() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 200, 255, ${p.alpha * 0.6})`;
      ctx.fill();
    });
  }

  function init() {
    resize();
    createParticles();

    if (prefersReducedMotion) {
      drawStatic();
    } else {
      draw();
    }
  }

  window.addEventListener('resize', () => {
    resize();
    createParticles();
    if (prefersReducedMotion) drawStatic();
  });

  if (!prefersReducedMotion && !isMobile) {
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
  }

  document.addEventListener('visibilitychange', () => {
    if (prefersReducedMotion) return;
    if (document.hidden) {
      cancelAnimationFrame(animationId);
    } else {
      draw();
    }
  });

  init();
})();

(function initStarsBackground() {
  if (document.getElementById('starsBg')) return;

  const wrapper = document.createElement('div');
  wrapper.className = 'stars-bg';
  wrapper.id = 'starsBg';
  wrapper.setAttribute('aria-hidden', 'true');
  wrapper.innerHTML = `
    <div class="stars-bg__container">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  `;
  document.body.prepend(wrapper);
})();

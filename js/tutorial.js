function renderTutorial(lang) {
  const id = document.body.dataset.tutorial;
  const root = document.getElementById('tutorialRoot');
  if (!id || !root || !HACK_TUTORIALS[id]) return;

  const data = HACK_TUTORIALS[id][lang] || HACK_TUTORIALS[id].en;
  document.title = `${data.title} | ENIGMA Academy`;

  const sectionsHtml = data.sections
    .map(
      (sec, i) => `
      <section class="tutorial-section">
        <div class="tutorial-section__num">${String(i + 1).padStart(2, '0')}</div>
        <h2 class="tutorial-section__title">${sec.title}</h2>
        <div class="tutorial-section__body">${sec.body.replace(/\n/g, '<br>')}</div>
      </section>`
    )
    .join('');

  root.innerHTML = `
    <div class="tutorial-hero">
      <span class="tutorial-hero__label">// ENIGMA ACADEMY</span>
      <h1 class="tutorial-hero__title">${data.title}</h1>
      <p class="tutorial-hero__meta">${data.meta}</p>
      <p class="tutorial-hero__intro">${data.intro}</p>
    </div>
    <div class="tutorial-sections">${sectionsHtml}</div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  renderTutorial(window.i18n.getLang());

  document.querySelectorAll('.lang-switch__btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      window.i18n.setLanguage(btn.dataset.lang);
    });
  });

  window.addEventListener('languageChanged', (e) => {
    renderTutorial(e.detail.lang);
  });
});

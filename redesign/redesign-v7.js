(() => {
  document.documentElement.classList.add('td-v7');

  const heroTitle = document.querySelector('.td6-hero-copy h1');
  if (heroTitle) heroTitle.innerHTML = 'Test at home.<br><span>Results in 15 minutes.</span>';

  const rails = document.querySelectorAll('.td6-product-grid,.td6-decision-grid,.td6-step-track,.td6-single-track');
  rails.forEach(rail => {
    rail.addEventListener('scroll', () => rail.classList.add('has-scrolled'), {passive:true, once:true});
  });
})();

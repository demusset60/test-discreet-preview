(() => {
  const reveal = () => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('is-visible')); return; }
    const io = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target);} }), {threshold:.12});
    els.forEach(el => io.observe(el));
  };

  const rebuildSteps = () => {
    const cards = document.querySelectorAll('.step-card');
    if (cards.length < 3) return;
    const visuals = cards.map ? cards.map(x=>x) : Array.from(cards);
    const v1 = cards[0].querySelector('.step-image');
    const v2 = cards[1].querySelector('.step-image');
    const v3 = cards[2].querySelector('.step-image');
    if (v1) {
      v1.className = 'step-image step-image--phone';
      v1.innerHTML = `<div class="phone-scene"><div class="phone-shell"><div class="phone-speaker"></div><div class="phone-screen"><div class="mini-brand"><b>TD</b><span>TEST DISCREET</span></div><div class="mini-kicker">FIND THE RIGHT TEST</div><div class="mini-product"><img src="assets/test-discreet-core-4-pack.webp" alt=""><div><strong>Core 4</strong><small>£39.95</small></div></div><div class="mini-product"><img src="assets/test-discreet-hiv-pack.webp" alt=""><div><strong>HIV 1/2</strong><small>£17.95</small></div></div><div class="mini-cta">Choose test</div></div></div></div>`;
    }
    if (v2) {
      v2.className = 'step-image step-image--test';
      v2.innerHTML = `<div class="test-scene"><div class="pipette"></div><span class="sample-drop"></span><div class="cassette"><span class="cassette-mark">TD</span><div class="result-window"><i></i></div><div class="sample-well"></div></div></div>`;
    }
    if (v3) {
      v3.className = 'step-image step-image--result';
      v3.innerHTML = `<div class="result-scene"><div class="result-card"><span>RESULT</span><strong>Read at the stated time</strong></div><div class="cassette cassette--result"><span class="cassette-mark">TD</span><div class="result-window"><em>C</em><em>T</em><i></i></div><div class="sample-well"></div></div><div class="result-tick">✓</div></div>`;
    }
  };

  const modal = document.querySelector('.offer-modal');
  const backdrop = document.querySelector('.offer-backdrop');
  const close = () => { if(modal) modal.hidden = true; if(backdrop) backdrop.hidden = true; };
  const open = () => { if(modal) modal.hidden = false; if(backdrop) backdrop.hidden = false; };
  document.querySelector('.offer-close')?.addEventListener('click', close);
  backdrop?.addEventListener('click', close);
  document.addEventListener('keydown', e => { if(e.key === 'Escape') close(); });
  document.querySelector('.offer-body form')?.addEventListener('submit', e => { e.preventDefault(); const b=e.currentTarget.querySelector('button'); b.textContent='Offer unlocked'; setTimeout(close,850); });
  rebuildSteps();
  reveal();
  setTimeout(open, 900);
})();

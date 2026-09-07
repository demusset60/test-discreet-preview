(() => {
  const reveal = () => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('is-visible')); return; }
    const io = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target);} }), {threshold:.12});
    els.forEach(el => io.observe(el));
  };
  const modal = document.querySelector('.offer-modal');
  const backdrop = document.querySelector('.offer-backdrop');
  const close = () => { if(modal) modal.hidden = true; if(backdrop) backdrop.hidden = true; };
  const open = () => { if(modal) modal.hidden = false; if(backdrop) backdrop.hidden = false; };
  document.querySelector('.offer-close')?.addEventListener('click', close);
  backdrop?.addEventListener('click', close);
  document.addEventListener('keydown', e => { if(e.key === 'Escape') close(); });
  document.querySelector('.offer-body form')?.addEventListener('submit', e => { e.preventDefault(); const b=e.currentTarget.querySelector('button'); b.textContent='Offer unlocked'; setTimeout(close,850); });
  reveal();
  setTimeout(open, 900);
})();

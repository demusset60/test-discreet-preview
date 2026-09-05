(() => {
  document.documentElement.classList.add('td-v5');

  const replaceText = (root = document.body) => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      node.nodeValue = node.nodeValue
        .replace(/Disposable plastic straw/gi, 'Disposable plastic pipette')
        .replace(/plastic straw/gi, 'plastic pipette');
    });
  };
  replaceText();

  const hero = document.querySelector('.hero');
  if (hero) {
    const bg = hero.querySelector('.hero-bg');
    if (bg) {
      bg.src = 'assets/test-discreet-bundle-hero.webp';
      bg.alt = 'Test Discreet at-home rapid test range';
    }
    const copy = hero.querySelector('.hero-copy');
    const h1 = copy?.querySelector('h1');
    const lede = copy?.querySelector('.lede');
    if (h1) h1.textContent = 'Test at home. Results in 15 minutes.';
    if (lede) lede.textContent = 'Rapid self-tests for STIs and prostate health, delivered discreetly with clear instructions.';
    const eyebrow = copy?.querySelector('.hero-eyebrow');
    if (eyebrow) eyebrow.textContent = 'PRIVATE AT-HOME TESTING';
    const cta = copy?.querySelector('.hero-cta');
    if (cta) {
      const links = cta.querySelectorAll('a');
      if (links[0]) links[0].textContent = 'Shop bundles';
      if (links[1]) links[1].textContent = 'All tests';
      if (!copy.querySelector('.hero-trust')) {
        const trust = document.createElement('div');
        trust.className = 'hero-trust';
        trust.innerHTML = '<span><i></i>Plain packaging</span><span><i></i>Free UK tracked delivery</span><span><i></i>Secure checkout</span>';
        cta.insertAdjacentElement('afterend', trust);
      }
    }
  }

  document.querySelectorAll('.choice-band,.td-proof-band,.td-choice').forEach((el) => el.remove());
  const quick = document.querySelector('.quick');
  if (quick) {
    const section = document.createElement('section');
    section.className = 'td-choice';
    section.innerHTML = `
      <div class="wrap">
        <div class="td-choice-head">
          <h2>Start with the coverage that suits you.</h2>
          <p>Not sure what to choose? Bundles make it easier to cover more in one order, while individual tests are there when you know exactly what you need.</p>
        </div>
        <div class="td-choice-grid">
          <a class="td-choice-card td-choice-card--main" href="product-sti-bundle.html"><small>BEST VALUE</small><strong>Full STI screen</strong><p>Our broadest option for more complete coverage.</p><b>Explore the bundle →</b></a>
          <a class="td-choice-card td-choice-card--core" href="product-core-4.html"><small>MOST POPULAR</small><strong>Core 4</strong><p>Chlamydia, gonorrhoea, HIV and syphilis.</p><b>Explore Core 4 →</b></a>
          <a class="td-choice-card td-choice-card--single" href="#tests"><small>SPECIFIC TEST</small><strong>Single tests</strong><p>Choose exactly what you need.</p><b>View all tests →</b></a>
        </div>
      </div>`;
    quick.insertAdjacentElement('afterend', section);
  }

  const iconOrder = `<svg viewBox="0 0 220 150" aria-hidden="true"><rect x="57" y="10" width="106" height="130" rx="18" fill="#fff" stroke="#9A8B80" stroke-width="3"/><rect x="69" y="31" width="82" height="76" rx="7" fill="#F3F0EC"/><rect x="79" y="42" width="62" height="10" rx="5" fill="#C6C8CA"/><rect x="79" y="60" width="49" height="8" rx="4" fill="#A9ACAF"/><rect x="79" y="80" width="62" height="18" rx="9" fill="#705B65"/><circle cx="110" cy="123" r="6" fill="#C6C8CA"/></svg>`;
  const iconTest = `<svg viewBox="0 0 220 150" aria-hidden="true"><rect x="42" y="89" width="136" height="32" rx="10" fill="#fff" stroke="#9A8B80" stroke-width="3"/><rect x="63" y="99" width="42" height="12" rx="5" fill="#F3F0EC"/><circle cx="151" cy="105" r="8" fill="#EEE7EA" stroke="#705B65" stroke-width="2"/><path d="M139 16l29 29-52 52-29-29z" fill="#fff" stroke="#9A8B80" stroke-width="3"/><path d="M150 28l6 6-45 45-6-6z" fill="#C6C8CA"/><path d="M142 75c7 7 6 15 0 21-6-6-7-14 0-21z" fill="#705B65"/></svg>`;
  const iconKnow = `<svg viewBox="0 0 220 150" aria-hidden="true"><rect x="31" y="48" width="158" height="55" rx="14" fill="#fff" stroke="#9A8B80" stroke-width="3"/><rect x="58" y="63" width="66" height="24" rx="7" fill="#F3F0EC"/><line x1="77" y1="67" x2="77" y2="83" stroke="#705B65" stroke-width="4"/><circle cx="158" cy="76" r="10" fill="#EEE7EA"/><path d="M148 120h20" stroke="#A9ACAF" stroke-width="3" stroke-linecap="round"/></svg>`;

  const oldHow = document.querySelector('#how');
  if (oldHow && !document.querySelector('.td-how')) {
    oldHow.id = 'how-original';
    oldHow.style.display = 'none';
    const section = document.createElement('section');
    section.id = 'how';
    section.className = 'td-how';
    section.innerHTML = `
      <div class="wrap">
        <div class="td-how-head"><h2>Order. Test. Know.</h2><p>A simple at-home process, with the components and instructions included in the box.</p></div>
        <div class="td-step-grid">
          <article class="td-step"><div class="td-step-visual">${iconOrder}</div><div class="td-step-copy"><span>01</span><h3>Order discreetly</h3><p>Choose your test or bundle and check out securely.</p></div></article>
          <article class="td-step"><div class="td-step-visual">${iconTest}</div><div class="td-step-copy"><span>02</span><h3>Test at home</h3><p>Use the included pipette or swab, depending on your test, and follow the instructions.</p></div></article>
          <article class="td-step"><div class="td-step-visual">${iconKnow}</div><div class="td-step-copy"><span>03</span><h3>Read your result</h3><p>Check the cassette at the exact time stated in the instructions.</p></div></article>
        </div>
      </div>`;
    oldHow.insertAdjacentElement('beforebegin', section);
  }

  const faq = document.querySelector('#faq');
  if (faq && !document.querySelector('.td-trust')) {
    const section = document.createElement('section');
    section.className = 'td-trust';
    section.innerHTML = `
      <div class="wrap td-trust-shell">
        <div class="td-trust-copy"><span class="hero-eyebrow">WHY TEST DISCREET</span><h2>Private, clear and straightforward.</h2><p>Trust comes from getting the details right: discreet delivery, clear instructions and transparent information before you buy.</p></div>
        <div class="td-trust-grid">
          <div><span>DELIVERY</span><strong>Plain outer packaging</strong><p>The parcel does not identify which test you ordered.</p></div>
          <div><span>IN THE BOX</span><strong>Clear instructions included</strong><p>Each kit includes the components needed for that test.</p></div>
          <div><span>INFORMATION</span><strong>Know what you are buying</strong><p>Sample type, result timing and key test information are shown clearly.</p></div>
          <div><span>CHECKOUT</span><strong>Secure ordering</strong><p>A simple checkout flow designed to keep the process discreet.</p></div>
        </div>
      </div>`;
    faq.insertAdjacentElement('beforebegin', section);
  }

  const psaMarkup = `<div class="psa-css-box" role="img" aria-label="Test Discreet Prostate Specific Ag PSA Rapid Test Kit"><div class="psa-logo">TD</div><div class="psa-brand">TEST DISCREET</div><div class="psa-title">Prostate Specific Ag (PSA)<br>Rapid Test Kit</div><div class="psa-pill">1TEST</div><div class="psa-checks">✓ Fast<br>✓ Reliable<br>✓ Private</div><div class="psa-marks"><span>CE</span><span>IVD</span></div></div>`;
  document.querySelectorAll('a[href*="product-psa.html"] .card-media').forEach((media) => { media.innerHTML = psaMarkup; });
  if (/product-psa\.html$/i.test(location.pathname)) {
    const media = document.querySelector('.pdp-media');
    if (media) media.innerHTML = psaMarkup;
  }

  document.querySelectorAll('.card-media img').forEach((img) => { img.loading = 'lazy'; });

  if (!localStorage.getItem('tdV5OfferDismissed')) {
    setTimeout(() => {
      if (document.querySelector('.td-offer-backdrop')) return;
      const back = document.createElement('div');
      back.className = 'td-offer-backdrop';
      back.innerHTML = `<div class="td-offer" role="dialog" aria-modal="true" aria-label="Bundle discount"><div class="td-offer-top"><small>FIRST ORDER</small><h3>£5 off your first bundle.</h3><button class="td-offer-close" aria-label="Close">×</button></div><div class="td-offer-body"><p>Get a welcome offer for the Core 4 or Full STI Screen.</p><form class="td-offer-form"><input type="email" placeholder="Email address" aria-label="Email address" required><button type="submit">Get offer</button></form><div class="td-offer-foot">Preview only — connect the offer to Shopify before launch.</div></div></div>`;
      document.body.appendChild(back);
      const close = () => { back.remove(); localStorage.setItem('tdV5OfferDismissed', '1'); };
      back.querySelector('.td-offer-close').addEventListener('click', close);
      back.addEventListener('click', (e) => { if (e.target === back) close(); });
      back.querySelector('form').addEventListener('submit', (e) => { e.preventDefault(); back.querySelector('.td-offer-body').innerHTML = '<p style="font-weight:600;color:#58454F">Offer captured for the preview.</p><p style="margin-top:.35rem">We’ll wire this to the real Shopify discount before launch.</p>'; setTimeout(close, 1800); });
    }, 6500);
  }
})();
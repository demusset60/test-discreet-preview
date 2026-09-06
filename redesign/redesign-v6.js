(() => {
  document.documentElement.classList.add('td-v6');
  const C = window.TD_CATALOGUE || {};
  const main = document.querySelector('main#main');
  if (!main || !C['sti-bundle']) return;

  const money = n => '£' + Number(n).toFixed(2);
  const p = h => C[h] || {};
  const save = h => p(h).compareAt ? p(h).compareAt - p(h).price : 0;
  const link = h => `product-${h}.html`;
  const pic = h => `<img src="${p(h).image}" alt="${p(h).title || ''}">`;

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(n=>n.nodeValue=n.nodeValue.replace(/Disposable plastic straw/gi,'Disposable plastic pipette').replace(/plastic straw/gi,'plastic pipette'));

  const card = (h,badge='') => {
    const x=p(h); const sample=h==='chlamydia-gonorrhoea'?'Swab':'Fingerprick';
    const desc={
      'sti-bundle':'Seven infections across five kits.',
      'core-4':'Chlamydia, gonorrhoea, HIV and syphilis.',
      'chlamydia-gonorrhoea':'Two common bacterial STIs in one test.',
      'syphilis':'At-home syphilis antibody rapid test.',
      'hiv':'At-home HIV 1/2 antibody rapid test.',
      'hsv-2':'At-home HSV-2 rapid test.',
      'hep-b-c':'Hepatitis B & C combo rapid test.',
      'psa':'At-home PSA screening test.'
    }[h] || 'At-home rapid test with clear instructions.';
    return `<article class="td6-product-card" data-reveal>
      ${badge?`<span class="td6-badge">${badge}</span>`:''}
      <a class="td6-product-media" href="${link(h)}">${pic(h)}</a>
      <div class="td6-product-copy">
        <a class="td6-product-title" href="${link(h)}">${x.title}</a>
        <p>${desc}</p>
        <div class="td6-meta"><span>${sample}</span><span>15 min</span></div>
        <div class="td6-price-row"><strong>${money(x.price)}</strong>${x.compareAt?`<s>${money(x.compareAt)}</s>`:''}${save(h)>0?`<em>Save ${money(save(h))}</em>`:''}</div>
        <button class="td6-add" data-add="${h}">Add to cart</button>
      </div>
    </article>`;
  };

  main.innerHTML = `
    <section class="td6-hero">
      <div class="td6-wrap td6-hero-grid">
        <div class="td6-hero-copy" data-reveal>
          <span class="td6-kicker">PRIVATE TESTING, MADE SIMPLE</span>
          <h1>Test at home.<br><span>Results in 15 minutes.</span></h1>
          <p>Rapid self-tests for STIs and prostate health, delivered in plain packaging with clear instructions.</p>
          <div class="td6-hero-actions"><a class="td6-btn td6-btn-primary" href="product-sti-bundle.html">Shop bundles →</a><a class="td6-btn td6-btn-ghost" href="#tests">All tests</a></div>
          <div class="td6-hero-proof"><span>Plain packaging</span><span>Free UK tracked delivery</span><span>Secure checkout</span></div>
        </div>
        <div class="td6-hero-stage">
          <div class="td6-stage-glow"></div>
          <div class="td6-pack td6-pack-a">${pic('syphilis')}</div>
          <div class="td6-pack td6-pack-b">${pic('hiv')}</div>
          <div class="td6-pack td6-pack-c">${pic('chlamydia-gonorrhoea')}</div>
          <div class="td6-pack td6-pack-d">${pic('psa')}</div>
          <div class="td6-phone" aria-hidden="true"><div class="td6-phone-notch"></div><div class="td6-phone-screen"><div class="td6-phone-feed">
            <div class="td6-mobile-head"><b>TD</b><span>TEST DISCREET</span></div>
            <div class="td6-mobile-hero"><small>PRIVATE TESTING</small><strong>Know at home.</strong><span>Results in 15 minutes.</span></div>
            <div class="td6-mobile-card">${pic('sti-bundle')}<b>Full STI screen</b><span>${money(p('sti-bundle').price)}</span></div>
            <div class="td6-mobile-card">${pic('core-4')}<b>Core 4</b><span>${money(p('core-4').price)}</span></div>
            <div class="td6-mobile-card">${pic('hiv')}<b>HIV 1/2</b><span>${money(p('hiv').price)}</span></div>
            <div class="td6-mobile-card">${pic('syphilis')}<b>Syphilis</b><span>${money(p('syphilis').price)}</span></div>
            <div class="td6-mobile-end"><b>Order. Test. Know.</b><span>Private by design.</span></div>
          </div></div></div>
          <div class="td6-stage-note">Small tests.<br><b>A bigger tomorrow.</b></div>
        </div>
      </div>
    </section>

    <nav class="td6-categorybar"><div class="td6-wrap"><a class="is-active" href="#tests">All tests</a><a href="product-sti-bundle.html">Bundles</a><a href="#singles">STI tests</a><a href="product-psa.html">Prostate health</a><span></span><b>Private. Clear. Fast.</b></div></nav>

    <section class="td6-featured" id="tests"><div class="td6-wrap">
      <div class="td6-section-head" data-reveal><div><span class="td6-kicker">OUR TESTS</span><h2>Popular tests and bundles.</h2></div><a href="#singles">View all tests →</a></div>
      <div class="td6-product-grid">${card('sti-bundle','BEST VALUE')}${card('core-4','MOST POPULAR')}${card('chlamydia-gonorrhoea')}${card('syphilis')}</div>
    </div></section>

    <section class="td6-time"><div class="td6-wrap td6-time-grid">
      <div class="td6-time-copy" data-reveal><span class="td6-kicker">FROM QUESTION TO ANSWER</span><h2>Fifteen minutes can feel very different.</h2><p>A clear process turns waiting into something manageable. Take the test, follow the timer in the instructions, then read your result at the stated time.</p></div>
      <div class="td6-timer" data-reveal><div class="td6-ring"><span>15</span><small>MIN</small></div><div class="td6-timeline"><i></i><div><b>Sample</b><span>Take your test</span></div><div><b>Wait</b><span>Follow the stated time</span></div><div><b>Know</b><span>Read your result</span></div></div></div>
    </div></section>

    <section class="td6-decision"><div class="td6-wrap">
      <div class="td6-section-head td6-section-head-split" data-reveal><div><span class="td6-kicker">FIND THE RIGHT FIT</span><h2>Choose the option that suits you.</h2></div><p>Go broad for more complete coverage, choose the Core 4, or pick one specific test when you know what you need.</p></div>
      <div class="td6-decision-grid">
        <a class="td6-decision-card td6-decision-main" href="product-sti-bundle.html" data-reveal><div><span>BEST VALUE</span><h3>Full STI screen</h3><p>Seven infections across five kits.</p><b>Explore the bundle →</b></div><figure>${pic('sti-bundle')}</figure></a>
        <a class="td6-decision-card td6-decision-core" href="product-core-4.html" data-reveal><div><span>MOST POPULAR</span><h3>Core 4</h3><p>Chlamydia, gonorrhoea, HIV and syphilis.</p><b>Explore Core 4 →</b></div><figure>${pic('core-4')}</figure></a>
        <a class="td6-decision-card td6-decision-single" href="#singles" data-reveal><div><span>SPECIFIC TEST</span><h3>Single tests</h3><p>Choose exactly what you need.</p><b>View all tests →</b></div><figure><div class="td6-mini-stack">${pic('hiv')}${pic('syphilis')}${pic('psa')}</div></figure></a>
      </div>
    </div></section>

    <section class="td6-how" id="how"><div class="td6-wrap">
      <div class="td6-section-head td6-section-head-split" data-reveal><div><span class="td6-kicker">ORDER. TEST. KNOW.</span><h2>A simple process, from phone to answer.</h2></div><p>Three clear steps. The exact sample method depends on the test you choose.</p></div>
      <div class="td6-step-track">
        <article class="td6-step-card td6-step-phone" data-reveal><div class="td6-step-visual"><div class="td6-hand-phone"><div class="td6-mini-phone"><div class="td6-mini-scroll"><span>TD</span><b>All tests</b><i>${pic('core-4')}</i><strong>Core 4</strong><em>${money(p('core-4').price)}</em><button>Choose test</button><i>${pic('hiv')}</i><strong>HIV 1/2</strong></div></div></div></div><div class="td6-step-copy"><span>01</span><h3>Order discreetly</h3><p>Choose your test or bundle on your phone and check out securely.</p></div></article>
        <article class="td6-step-card" data-reveal><div class="td6-step-visual td6-photo"><img src="assets/td-step-test.png" alt="Using the included pipette with an at-home test cassette"></div><div class="td6-step-copy"><span>02</span><h3>Test at home</h3><p>Follow the included instructions and use the pipette or swab required for your test.</p></div></article>
        <article class="td6-step-card" data-reveal><div class="td6-step-visual td6-photo"><img src="assets/td-step-result.png" alt="Reading an at-home rapid test result"></div><div class="td6-step-copy"><span>03</span><h3>Read your result</h3><p>Check the cassette at the exact time stated in the instructions.</p></div></article>
      </div>
    </div></section>

    <section class="td6-singles" id="singles"><div class="td6-wrap">
      <div class="td6-section-head" data-reveal><div><span class="td6-kicker">SHOP INDIVIDUALLY</span><h2>Know what you need?</h2></div><span class="td6-draghint">Scroll to explore →</span></div>
      <div class="td6-single-track">${card('chlamydia-gonorrhoea')}${card('hiv')}${card('syphilis')}${card('hsv-2')}${card('hep-b-c')}${card('psa')}</div>
    </div></section>

    <section class="td6-trust"><div class="td6-wrap td6-trust-grid">
      <div class="td6-trust-copy" data-reveal><span class="td6-kicker">TRUSTED EVERY STEP</span><h2>Private, clear and straightforward.</h2><p>Trust comes from getting the details right: discreet delivery, clear instructions and transparent information before you buy.</p><a href="#faq">Read common questions →</a></div>
      <div class="td6-trust-cards"><div data-reveal><i>□</i><b>Plain outer packaging</b><p>The parcel does not identify which test you ordered.</p></div><div data-reveal><i>≡</i><b>Clear instructions included</b><p>Each kit includes the components needed for that test.</p></div><div data-reveal><i>i</i><b>Know what you are buying</b><p>Sample type, result timing and key test information are shown clearly.</p></div><div data-reveal><i>⌑</i><b>Secure ordering</b><p>A simple checkout flow designed to keep the process discreet.</p></div></div>
    </div></section>

    <section class="td6-offer-inline"><div class="td6-wrap"><div><span>FIRST ORDER</span><h2>£5 off your first bundle.</h2><p>A welcome offer for the Core 4 or Full STI Screen.</p></div><form class="td6-inline-form" onsubmit="event.preventDefault();"><input type="email" placeholder="Email address" aria-label="Email address"><button>Get my £5 off</button></form></div></section>

    <section class="td6-faq" id="faq"><div class="td6-wrap td6-faq-grid"><div data-reveal><span class="td6-kicker">QUESTIONS, ANSWERED</span><h2>Before you test.</h2><p>Clear answers about delivery, sample types, timing and what comes next.</p></div><div class="td6-faq-list" data-reveal>
      <details><summary>Will anyone know what I ordered?</summary><p>Your order is sent in plain outer packaging. Product information is inside the parcel.</p></details>
      <details><summary>How quickly do I get a result?</summary><p>The rapid tests are designed to be read at the result time stated in the instructions; the products on this preview are presented as 15-minute tests.</p></details>
      <details><summary>What sample do I need?</summary><p>The Chlamydia & Gonorrhoea combo uses a swab. The blood-test kits use a fingerprick sample and include the relevant collection components.</p></details>
      <details><summary>What is included in a blood-test box?</summary><p>Test pad, disposable plastic pipette, instructions for use, sample diluent, medical waste bag, disposable lancet and alcohol pads.</p></details>
      <details><summary>What if my result is positive?</summary><p>Follow the instructions supplied with the test and seek appropriate clinical advice or confirmatory testing where recommended.</p></details>
    </div></div></section>`;

  const reveal = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');reveal.unobserve(e.target)}}),{threshold:.08});
  document.querySelectorAll('[data-reveal]').forEach(el=>reveal.observe(el));

  let ticking=false;
  addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(()=>{document.documentElement.style.setProperty('--scroll',Math.min(scrollY/700,1).toFixed(3));ticking=false});ticking=true}},{passive:true});

  const offer=document.createElement('aside');
  offer.className='td6-offer';
  offer.innerHTML=`<button class="td6-offer-close" aria-label="Close">×</button><span>FIRST ORDER</span><h3>£5 off your first bundle.</h3><p>Join for a welcome offer on the Core 4 or Full STI Screen.</p><form><input type="email" placeholder="Email address" aria-label="Email address" required><button>Get offer</button></form><small>Preview only — connect this offer to Shopify before launch.</small>`;
  document.body.appendChild(offer);
  const key='td6OfferDismissed';
  if(!sessionStorage.getItem(key)) setTimeout(()=>offer.classList.add('is-open'),8500);
  offer.querySelector('.td6-offer-close').onclick=()=>{offer.classList.remove('is-open');sessionStorage.setItem(key,'1')};
  offer.querySelector('form').onsubmit=e=>{e.preventDefault();offer.classList.remove('is-open');sessionStorage.setItem(key,'1')};

  document.addEventListener('click',e=>{
    const b=e.target.closest('[data-add]'); if(!b) return;
    const old=b.textContent; b.textContent='Added ✓'; b.disabled=true;
    setTimeout(()=>{b.textContent=old;b.disabled=false},1200);
  });
})();

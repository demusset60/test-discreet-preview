(() => {
  document.documentElement.classList.add('td-redesign');

  const replaceText = (root = document.body) => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      node.nodeValue = node.nodeValue
        .replace(/Disposable plastic straw/gi, 'Disposable plastic pipette')
        .replace(/plastic straw/gi, 'plastic pipette');
    });
  };
  replaceText();

  /* Keep the hero line that already worked. */
  const hero = document.querySelector('.hero');
  if (hero) {
    const copy = hero.querySelector('.hero-copy');
    const h1 = copy?.querySelector('h1');
    const lede = copy?.querySelector('.lede');
    if (h1) h1.textContent = 'Test at home. Results in 15 minutes.';
    if (lede) lede.textContent = 'Rapid self-tests for STIs and prostate health, posted in a plain box.';
    copy?.querySelector('.hero-eyebrow')?.remove();
    const cta = copy?.querySelector('.hero-cta');
    if (cta) {
      const links = cta.querySelectorAll('a');
      if (links[0]) links[0].textContent = 'Shop bundles';
      if (links[1]) links[1].textContent = 'All tests';
    }
  }

  /* Clear choice architecture near the top, kept deliberately compact. */
  const quick = document.querySelector('.quick');
  if (quick && !document.querySelector('.choice-band')) {
    const section = document.createElement('section');
    section.className = 'choice-band';
    section.innerHTML = `
      <div class="wrap choice-shell">
        <div class="choice-intro">
          <span class="choice-kicker">START HERE</span>
          <h2>Not sure which test?</h2>
          <p>Choose a broader screen, cover the core four infections, or buy one individual test.</p>
        </div>
        <div class="choice-grid">
          <a class="choice-card choice-card--featured" href="product-sti-bundle.html">
            <span class="choice-label">BEST VALUE</span>
            <strong>Full STI screen</strong>
            <small>Seven infections · five kits</small>
            <span class="choice-link">View bundle →</span>
          </a>
          <a class="choice-card" href="product-core-4.html">
            <span class="choice-label">MOST POPULAR</span>
            <strong>Core 4</strong>
            <small>Chlamydia, gonorrhoea, HIV & syphilis</small>
            <span class="choice-link">View Core 4 →</span>
          </a>
          <a class="choice-card" href="index.html#singles">
            <span class="choice-label">I KNOW WHAT I NEED</span>
            <strong>Single tests</strong>
            <small>Choose a specific infection or PSA test</small>
            <span class="choice-link">Shop singles →</span>
          </a>
        </div>
      </div>`;
    quick.insertAdjacentElement('afterend', section);
  }

  /* Compact trust points between shopping and education. */
  const tests = document.querySelector('#tests');
  if (tests && !document.querySelector('.td-proof-band')) {
    const proof = document.createElement('section');
    proof.className = 'td-proof-band';
    proof.innerHTML = `
      <div class="wrap proof-grid">
        <div><span>01</span><strong>Plain packaging</strong><p>Nothing on the outer parcel identifies what you ordered.</p></div>
        <div><span>02</span><strong>Everything included</strong><p>Your kit contains the components and instructions needed to complete the test.</p></div>
        <div><span>03</span><strong>Results at home</strong><p>Read the result yourself at the time stated in the instructions.</p></div>
      </div>`;
    tests.insertAdjacentElement('afterend', proof);
  }

  /* The visual three-step journey: order, pipette/test, result. */
  const how = document.querySelector('#how');
  if (how) {
    const heading = how.querySelector('.section-head h2');
    if (heading) heading.textContent = 'Order. Test. Know.';
    const steps = how.querySelectorAll('.how-step');
    if (steps[0]) {
      steps[0].querySelector('h3').textContent = 'Order';
      steps[0].querySelector('p').textContent = 'Choose your test or bundle. We send it in plain, tracked packaging.';
    }
    if (steps[1]) {
      steps[1].querySelector('h3').textContent = 'Test';
      steps[1].querySelector('p').textContent = 'Follow the instructions and use the supplied components for your kit.';
    }
    if (steps[2]) {
      steps[2].querySelector('h3').textContent = 'Know';
      steps[2].querySelector('p').textContent = 'Read your result at the time stated in the instructions.';
    }
  }

  /* Correct the visible set contents using the actual packaging specification supplied. */
  const path = location.pathname.toLowerCase();
  const isSingle = /product-(hiv|syphilis|hsv-2|hep-b-c|psa|chlamydia-gonorrhoea)\.html$/.test(path);
  if (isSingle) {
    const details = [...document.querySelectorAll('details')].find(d => /what.?s in the box/i.test(d.querySelector('summary')?.textContent || ''));
    const body = details?.querySelector('.acc-body');
    if (body) {
      const isCombo = /product-chlamydia-gonorrhoea\.html$/.test(path);
      const items = [
        'Test pad ×1',
        'Disposable plastic pipette ×1',
        'Instructions for use ×1',
        'Sample diluent ×1',
        'Medical waste bag ×1',
        ...(isCombo ? [] : ['Disposable lancet ×1']),
        'Alcohol pad ×2'
      ];
      body.innerHTML = `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
      details.open = true;
    }
  }

  /* PDP hierarchy stays factual and compact. */
  const pdp = document.querySelector('.pdp');
  if (pdp) {
    const buy = pdp.querySelector('.pdp-buy');
    const title = buy?.querySelector('h1');
    if (buy && title && !buy.querySelector('.pdp-eyebrow')) {
      const e = document.createElement('div');
      e.className = 'pdp-eyebrow';
      const sampleCell = [...document.querySelectorAll('.spec-table tr')].find(tr => /Sample/i.test(tr.cells?.[0]?.textContent || ''))?.cells?.[1]?.textContent?.trim();
      e.textContent = sampleCell ? `AT-HOME TEST · ${sampleCell.toUpperCase()}` : 'AT-HOME RAPID TEST';
      buy.insertBefore(e, title);
    }
  }

  /* Keep Robin's complete legal/navigation footer, just give it a concise brand statement. */
  const footer = document.querySelector('.footer');
  if (footer && !footer.querySelector('.footer-manifesto')) {
    const m = document.createElement('div');
    m.className = 'footer-manifesto wrap';
    m.innerHTML = '<span>TEST DISCREET</span><strong>Private by design. Clear by default.</strong>';
    footer.insertBefore(m, footer.firstChild);
  }
})();

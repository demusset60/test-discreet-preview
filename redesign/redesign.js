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

  // Trust strip: keep commercial reassurance without relying on placeholder regulatory copy.
  document.querySelectorAll('.ticker-list li').forEach(li => {
    if (/CE-marked test kits/i.test(li.textContent)) {
      const svg = li.querySelector('svg');
      li.textContent = '';
      if (svg) li.append(svg);
      li.append(document.createTextNode(' Clear instructions included'));
    }
  });

  const hero = document.querySelector('.hero');
  if (hero) {
    const copy = hero.querySelector('.hero-copy');
    const h1 = copy?.querySelector('h1');
    const lede = copy?.querySelector('.lede');
    if (copy && !copy.querySelector('.hero-eyebrow')) {
      const eyebrow = document.createElement('div');
      eyebrow.className = 'hero-eyebrow';
      eyebrow.textContent = 'AT-HOME RAPID TESTING';
      copy.insertBefore(eyebrow, h1 || copy.firstChild);
    }
    if (h1) h1.textContent = 'Know sooner. Test privately.';
    if (lede) lede.textContent = 'At-home rapid tests for STIs and prostate health, with clear instructions, discreet delivery and results in 15 minutes.';

    const cta = copy?.querySelector('.hero-cta');
    if (cta) {
      const links = cta.querySelectorAll('a');
      if (links[0]) links[0].textContent = 'Shop full STI screen';
      if (links[1]) links[1].textContent = 'Shop single tests';
    }
  }

  // Decision architecture: place the conversion choice before the catalogue.
  const quick = document.querySelector('.quick');
  if (quick && !document.querySelector('.choice-band')) {
    const section = document.createElement('section');
    section.className = 'choice-band';
    section.innerHTML = `
      <div class="wrap choice-shell">
        <div class="choice-intro">
          <span class="choice-kicker">NOT SURE WHERE TO START?</span>
          <h2>Choose how much you want to know.</h2>
          <p>Start broad, cover the four most common infections, or choose one specific test.</p>
        </div>
        <div class="choice-grid">
          <a class="choice-card choice-card--featured" href="product-sti-bundle.html">
            <span class="choice-label">BEST VALUE</span>
            <strong>Full STI screen</strong>
            <small>Seven infections · five kits</small>
            <span class="choice-link">Explore bundle <b>→</b></span>
          </a>
          <a class="choice-card" href="product-core-4.html">
            <span class="choice-label">MOST POPULAR</span>
            <strong>Core 4</strong>
            <small>Chlamydia, gonorrhoea, HIV & syphilis</small>
            <span class="choice-link">Explore Core 4 <b>→</b></span>
          </a>
          <a class="choice-card" href="index.html#tests">
            <span class="choice-label">I KNOW WHAT I NEED</span>
            <strong>Single tests</strong>
            <small>Choose an individual infection or PSA test</small>
            <span class="choice-link">See all tests <b>→</b></span>
          </a>
        </div>
      </div>`;
    quick.insertAdjacentElement('afterend', section);
  }

  // Add calm proof points below the first catalogue section if they are not already explicit.
  const tests = document.querySelector('#tests');
  if (tests && !document.querySelector('.td-proof-band')) {
    const proof = document.createElement('section');
    proof.className = 'td-proof-band';
    proof.innerHTML = `
      <div class="wrap proof-grid">
        <div><span>01</span><strong>Plain packaging</strong><p>Nothing on the outer parcel identifies what you ordered.</p></div>
        <div><span>02</span><strong>Everything in the box</strong><p>Test components and step-by-step instructions are included.</p></div>
        <div><span>03</span><strong>Results at home</strong><p>Read the result yourself at the time stated in the instructions.</p></div>
      </div>`;
    tests.insertAdjacentElement('afterend', proof);
  }

  // PDP hierarchy: concise trust eyebrow + clear sample type.
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

  // Give the footer a stronger brand statement without removing Robin's legal/navigation content.
  const footer = document.querySelector('.footer');
  if (footer && !footer.querySelector('.footer-manifesto')) {
    const m = document.createElement('div');
    m.className = 'footer-manifesto wrap';
    m.innerHTML = '<span>TEST DISCREET</span><strong>Private by design. Clear by default.</strong>';
    footer.insertBefore(m, footer.firstChild);
  }
})();

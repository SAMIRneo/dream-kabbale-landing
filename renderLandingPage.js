export function renderLandingPage() {
  const pillars = [
    ['Intelligence', 'Strategic readings, geopolitical decoding, signal detection, and sovereign interpretation.'],
    ['Creation', 'Worldbuilding, interfaces, visual systems, and cultural artifacts designed with symbolic precision.'],
    ['Execution', 'Agents, code, prototypes, products, and structures that turn vision into operational form.']
  ]

  const manifestoPoints = [
    'To publish with force instead of noise.',
    'To unite code, strategy, aesthetics, and symbolic architecture in one field.',
    'To make high-signal projects legible through world-class digital form.',
    'To build a living platform where visions can become systems.'
  ]

  const agents = [
    ['MICHAEL', 'Strategic intelligence, geopolitical decoding, power analysis, and civilizational readings.'],
    ['GABRIEL', 'Creative direction, visual storytelling, immersive aesthetics, and cultural image-making.'],
    ['RAPHAEL', 'Code architecture, system design, prototyping, and precise technical execution.'],
    ['URIEL', 'Crypto intelligence, monetary narratives, digital sovereignty, and frontier market interpretation.'],
    ['METATRON', 'Meta-orchestration, synthesis, cross-domain coherence, and worldview command.']
  ]

  const streams = [
    ['Projects', 'Flagship builds, launches, interfaces, and digital artifacts.'],
    ['Writings', 'Manifestos, strategic notes, and deep essays with long-term value.'],
    ['Signals', 'Rapid observations on culture, technology, money, and power.'],
    ['Systems', 'Agents, frameworks, methods, and operating structures.']
  ]

  return `
    <div class="page-shell">
      <div class="noise"></div>
      <div class="orb orb-a" data-parallax="1.2"></div>
      <div class="orb orb-b" data-parallax="0.8"></div>
      <div class="grid-lines"></div>

      <header class="topbar" data-reveal>
        <div class="brand-wrap">
          <div class="brand">DREAM KABBALE</div>
          <div class="brand-meta">Sovereign platform for intelligence, creation, and symbolic architecture</div>
        </div>
        <nav class="nav">
          <a href="#manifesto">Manifesto</a>
          <a href="#pillars">Pillars</a>
          <a href="#streams">Streams</a>
          <a href="#agents">Angels</a>
        </nav>
      </header>

      <main>
        <section class="hero" data-reveal>
          <div class="hero-intro">
            <div class="eyebrow">A high-signal publishing surface for projects, writings, strategy, design, and future-building experiments.</div>
            <div class="hero-status">2026 manifesto interface</div>
          </div>

          <h1>Where visions become systems, signals become strategy, and myth becomes interface.</h1>

          <div class="hero-lower">
            <p class="hero-copy">
              DREAM KABBALE is not a portfolio and not a content machine. It is a sovereign command surface where worldview,
              intelligence, creation, and execution converge into one coherent field.
            </p>
            <div class="hero-actions">
              <a class="button button-primary" href="#manifesto">Enter the manifesto</a>
              <a class="button button-secondary" href="#agents">Meet the angels</a>
            </div>
          </div>

          <div class="hero-grid">
            <div class="hero-card large" data-reveal>
              <span>01</span>
              <h3>Publishing as command</h3>
              <p>Release thought with density, direction, and aesthetic authority. Every page becomes a field of influence.</p>
            </div>
            <div class="hero-card" data-reveal>
              <span>02</span>
              <h3>Living myth</h3>
              <p>Symbolic charge without vagueness. Mystical depth translated into precise digital composition.</p>
            </div>
            <div class="hero-card" data-reveal>
              <span>03</span>
              <h3>Executable vision</h3>
              <p>Ideas do not stop at expression. They become systems, agents, products, rituals, and releases.</p>
            </div>
          </div>
        </section>

        <section class="manifesto section" id="manifesto" data-reveal>
          <div class="section-label">Manifesto</div>
          <div class="section-split">
            <h2>Not content. Not branding. A sovereign interface for a worldview.</h2>
            <div>
              <p>
                DREAM KABBALE exists to gather high-signal creations in one coherent field: strategy, code, intelligence,
                symbolic systems, media, aesthetics, and future-facing experiments.
              </p>
              <p>
                The ambition is not to publish more, but to publish with force. Each project becomes a node in a larger
                architecture of meaning.
              </p>
            </div>
          </div>

          <div class="manifesto-grid">
            ${manifestoPoints.map((point, index) => `
              <article class="manifesto-card" data-reveal>
                <span>0${index + 1}</span>
                <p>${point}</p>
              </article>
            `).join('')}
          </div>
        </section>

        <section class="pillars section" id="pillars" data-reveal>
          <div class="section-label">Pillars</div>
          <div class="pillars-grid">
            ${pillars.map(([title, copy]) => `
              <article class="pillar-card" data-reveal>
                <h3>${title}</h3>
                <p>${copy}</p>
              </article>
            `).join('')}
          </div>
        </section>

        <section class="quote-band" data-reveal>
          <p>
            DREAM KABBALE is the command center of a symbolic and strategic worldview made visible.
          </p>
        </section>

        <section class="streams section" id="streams" data-reveal>
          <div class="section-label">Streams</div>
          <div class="streams-head">
            <h2>A platform to publish projects, writings, signals, and systems in one unified architecture.</h2>
          </div>
          <div class="streams-grid">
            ${streams.map(([title, copy]) => `
              <article class="stream-card" data-reveal>
                <div class="stream-title">${title}</div>
                <p>${copy}</p>
              </article>
            `).join('')}
          </div>
        </section>

        <section class="agents section" id="agents" data-reveal>
          <div class="section-label">Angels</div>
          <div class="agents-grid">
            ${agents.map(([name, copy]) => `
              <article class="agent-card" data-reveal>
                <div class="agent-name">${name}</div>
                <p>${copy}</p>
              </article>
            `).join('')}
          </div>
        </section>

        <section class="closing section" data-reveal>
          <div class="closing-panel">
            <div>
              <div class="section-label">Next phase</div>
              <h2>Build the platform. Release the signal. Make the worldview legible.</h2>
              <p>From manifesto landing page to full publishing and project platform.</p>
            </div>
            <a class="button button-primary" href="mailto:samirladif@gmail.com">Launch DREAM KABBALE</a>
          </div>
        </section>
      </main>
    </div>
  `
}

import Link from 'next/link';
import Image from 'next/image';
import TypingEffect from '@/components/TypingEffect';


export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <p className="hero-eyebrow">Stitched Group</p>
            <h1 className="hero-title">
              <span className="title-line">Custom Apparel for</span>
              <span className="title-line"><TypingEffect /><span className="cursor">|</span></span>
            </h1>
            <p className="hero-description">
              Not decorated blanks. Not templates. Everything we make is designed and manufactured from scratch — premium materials, modern fits, built for moments that matter.
            </p>
            <div className="hero-buttons">
              <a href="#brands" className="btn btn-primary">Explore Our Brands</a>
              <a href="#process" className="btn btn-secondary">See Our Process</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-gallery">
              <div className="gallery-item gallery-item-large">
                <div className="gallery-placeholder">
                  <span className="placeholder-icon">👗</span>
                  <span className="placeholder-text">Custom Apparel</span>
                </div>
              </div>
              <div className="gallery-item">
                <div className="gallery-placeholder">
                  <span className="placeholder-icon">✂️</span>
                  <span className="placeholder-text">Cut & Sew</span>
                </div>
              </div>
              <div className="gallery-item">
                <div className="gallery-placeholder">
                  <span className="placeholder-icon">🎨</span>
                  <span className="placeholder-text">Custom Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy" id="about">
        <div className="container">
          <div className="philosophy-layout">
            <div className="philosophy-header">
              <span className="section-tag">Our Philosophy</span>
              <h2 className="section-title">The Stitched <em>Standard</em></h2>
            </div>
            <div className="philosophy-content">
              <p className="philosophy-lead">
                Most custom apparel is generic, clunky, and forgettable. We built Stitched to change that.
              </p>
              <p className="philosophy-body">
                Every piece we create is fully custom — no blank templates, no compromises. Premium materials. Modern fits. A real design process that treats your moment with the intention it deserves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="pillars">
        <div className="container">
          <div className="pillars-grid">
            <div className="pillar-card">
              <span className="pillar-number">01</span>
              <h3 className="pillar-title">Moments Matter</h3>
            </div>
            <div className="pillar-card">
              <span className="pillar-number">02</span>
              <h3 className="pillar-title">Specialization Over Generalization</h3>
            </div>
            <div className="pillar-card">
              <span className="pillar-number">03</span>
              <h3 className="pillar-title">Premium Without Pretension</h3>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <Link href="/about" className="btn btn-secondary">Learn More About Our Philosophy</Link>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands" id="brands">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Brands</span>
            <h2 className="section-title">One Vision. Five Specialized <em>Brands</em></h2>
            <p className="section-description">
              We don&apos;t believe in one-size-fits-all. That&apos;s why we&apos;ve built distinct brands — each with its own identity, expertise, and design sensibility — all powered by the same world-class infrastructure.
            </p>
          </div>

          <div className="not-sure-banner">
            <h3>Not sure which brand fits your event?</h3>
            <p>No problem — tell us about your moment and we&apos;ll match you with the right brand in under 2 minutes.</p>
            <Link href="/contact?brand=not-sure" className="btn btn-primary">Help Me Choose</Link>
          </div>

          <div className="brands-grid">
            <Link href="/brands/celebration-collective" className="brand-card">
              <div className="brand-card-placeholder-logo">🎉</div>
              <div className="brand-card-content">
                <h3 className="brand-name">Celebration Collective</h3>
                <p className="brand-tagline">Birthday vibes? Bach trip energy? Reunion swagger? We design the pieces your crew will actually want to wear — and keep forever.</p>
                <span className="brand-cta">Explore →</span>
              </div>
            </Link>
            <Link href="/brands/mitzvah-studio" className="brand-card">
              <Image src="/assets/Logos/MitzvahStudio.svg" alt="" className="brand-logo" width={200} height={200} />
              <div className="brand-card-content">
                <h3 className="brand-name">The Mitzvah Studio</h3>
                <p className="brand-tagline">Honoring tradition while feeling fresh. Custom pieces designed to celebrate this once-in-a-lifetime moment with intention and style.</p>
                <span className="brand-cta">Explore →</span>
              </div>
            </Link>
            <Link href="/brands/altar-atelier" className="brand-card">
              <Image src="/assets/Logos/AltarAtelier.svg" alt="" className="brand-logo" width={200} height={200} />
              <div className="brand-card-content">
                <h3 className="brand-name">Altar Atelier</h3>
                <p className="brand-tagline">Your wedding party deserves more than matching t-shirts from a big-box store. Bespoke pieces designed around your wedding&apos;s unique aesthetic.</p>
                <span className="brand-cta">Explore →</span>
              </div>
            </Link>
            <Link href="/brands/sewcorporate" className="brand-card">
              <Image src="/assets/Logos/SewCorporate.svg" alt="" className="brand-logo" width={200} height={200} />
              <div className="brand-card-content">
                <h3 className="brand-name">SewCorporate</h3>
                <p className="brand-tagline">Custom branded apparel that your team actually wants to wear. Built for companies who care about quality, culture, and looking sharp.</p>
                <span className="brand-cta">Explore →</span>
              </div>
            </Link>
            <Link href="/brands/member-threads" className="brand-card">
              <Image src="/assets/Logos/MemberThreads.svg" alt="" className="brand-logo brand-logo-member-threads" width={200} height={200} />
              <div className="brand-card-content">
                <h3 className="brand-name">Member Threads</h3>
                <p className="brand-tagline">Membership gear that builds belonging. Custom apparel for clubs, organizations, and communities who want to wear their identity with pride.</p>
                <span className="brand-cta">Explore →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process" id="process">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Process</span>
            <h2 className="section-title">How We <em>Work</em></h2>
          </div>
          <div className="process-grid">
            {[
              { num: '01', title: 'Discovery', desc: 'Tell us about your moment, your group, and your vision. We listen before we design.' },
              { num: '02', title: 'Design', desc: 'Our team creates fully custom concepts — not templates with your logo slapped on. Real design for real moments.' },
              { num: '03', title: 'Production', desc: 'Premium materials, modern fits, meticulous quality control. Every piece is made to keep, not toss.' },
              { num: '04', title: 'Delivery', desc: 'Seamless logistics whether you\'re ordering 12 pieces or 1,200. We scale without sacrificing quality.' },
            ].map(s => (
              <div key={s.num} className="process-step">
                <span className="step-number">{s.num}</span>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-description">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="differentiators">
        <div className="container">
          <div className="diff-layout">
            <div className="diff-header">
              <h2 className="section-title">What Sets Us <em>Apart</em></h2>
            </div>
            <div className="diff-list">
              {[
                { title: 'Cut-and-Sew Manufacturing', text: 'We don\'t print on blanks. Every garment is built from raw fabric to finished piece.' },
                { title: '5 Specialized Brands', text: 'Your wedding deserves a different designer than your corporate retreat. That\'s why we built separate brands for each type of moment.' },
                { title: 'Your Own Designer', text: 'No template pickers. A real designer creates custom concepts for your specific event.' },
                { title: 'Factory-Direct Pricing', text: 'We own the manufacturing process, so you get premium quality without the luxury markup.' },
              ].map(d => (
                <div key={d.title} className="diff-item">
                  <span className="diff-icon">✓</span>
                  <div className="diff-text-group">
                    <strong>{d.title}</strong>
                    <span className="diff-text">{d.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="founder-quote">
        <div className="container">
          <div className="founder-quote-content">
            <h2 className="section-title">Why We Built <em>Stitched</em></h2>
            <blockquote>
              &ldquo;The custom apparel industry treats every event the same. A wedding party gets the same cookie-cutter experience as a corporate retreat. We built Stitched to change that — five specialized brands, each designed to make your specific moment unforgettable.&rdquo;
            </blockquote>
            <p className="attribution">— Ethan Scher, Founder</p>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="trust-stats">
        <div className="container">
          <div className="trust-stats-grid trust-stats-three">
            <div className="trust-stat"><span className="trust-number">5</span><span className="trust-label">Specialized Brands</span></div>
            <div className="trust-stat"><span className="trust-number">100%</span><span className="trust-label">Cut-and-Sew Manufacturing</span></div>
            <div className="trust-stat"><span className="trust-number">8+</span><span className="trust-label">Piece Minimum</span></div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="coming-soon-projects">
        <div className="container">
          <div className="coming-soon-content">
            <h2 className="section-title">Your Moment Deserves <em>Better</em></h2>
            <p>Whether it&apos;s a wedding, celebration, or corporate event — we design and manufacture custom apparel from scratch, so your group looks and feels incredible.</p>
            <Link href="/contact" className="btn btn-primary btn-large">Start Your Project</Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-home-section">
        <div className="container">
          <div className="section-header center">
            <span className="section-tag">Common Questions</span>
            <h2 className="section-title">Frequently Asked <em>Questions</em></h2>
          </div>
          <div className="faq-home-grid">
            <div className="faq-home-item">
              <h4>What&apos;s the minimum order?</h4>
              <p>Minimums vary by brand, starting at just 8 pieces for weddings and 12 for celebrations. Corporate orders start at 25.</p>
            </div>
            <div className="faq-home-item">
              <h4>How far in advance should I order?</h4>
              <p>We recommend 6-8 weeks for most projects. Rush orders (4 weeks) are available for an additional fee.</p>
            </div>
            <div className="faq-home-item">
              <h4>What makes you different from other custom apparel?</h4>
              <p>Everything is cut-and-sew manufactured from scratch — not printed on generic blanks. Premium materials, modern fits, real design.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="/process#faq" className="btn btn-secondary">See All FAQs</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="contact">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to create something <em>worth keeping?</em></h2>
            <p className="cta-description">Find the brand that fits your moment.</p>
            <Link href="/contact" className="btn btn-primary btn-large">Start Your Project</Link>
            <p className="cta-email">or email us at <a href="mailto:hello@gostitched.com">hello@gostitched.com</a></p>
          </div>
        </div>
      </section>
    </>
  );
}

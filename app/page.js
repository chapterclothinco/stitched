import Link from 'next/link';
import Image from 'next/image';
import TypingEffect from '@/components/TypingEffect';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-centered">
            <h1 className="hero-title">
              <span className="title-line">Custom Apparel for</span>
              <span className="title-line"><TypingEffect /><span className="cursor">|</span></span>
            </h1>
            <p className="hero-description">
              Designed and manufactured from scratch. Premium materials, modern fits, built for moments that matter.
            </p>
            <div className="hero-buttons">
              <Link href="/contact" className="btn btn-primary">Start a Project</Link>
              <a href="#brands" className="btn btn-ghost">Explore Brands</a>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="philosophy" id="about">
        <div className="container">
          <div className="philosophy-centered">
            <p className="overline">Our Philosophy</p>
            <h2 className="headline-lg">We don&apos;t do <em>one-size-fits-all.</em></h2>
            <p className="body-lg">
              Every piece is fully custom — designed from raw fabric to finished garment. No blank templates. No screen printing on generic tees. A real design process that treats your moment with the intention it deserves.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="pillars">
        <div className="container">
          <div className="pillars-grid">
            <div className="pillar-card">
              <span className="pillar-number">01</span>
              <h3 className="pillar-title">Moments Matter</h3>
              <p className="pillar-description">Every celebration is unique. Your apparel should be too.</p>
            </div>
            <div className="pillar-card">
              <span className="pillar-number">02</span>
              <h3 className="pillar-title">Specialization Over Generalization</h3>
              <p className="pillar-description">Five dedicated brands, each built for a specific type of moment.</p>
            </div>
            <div className="pillar-card">
              <span className="pillar-number">03</span>
              <h3 className="pillar-title">Premium Without Pretension</h3>
              <p className="pillar-description">Factory-direct quality at prices that make sense.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="brands" id="brands">
        <div className="container">
          <div className="section-header center">
            <p className="overline">Our Brands</p>
            <h2 className="headline-lg">Five brands. One <em>standard.</em></h2>
            <p className="section-subtitle">
              Each brand has its own identity, expertise, and design sensibility — all powered by the same world-class manufacturing.
            </p>
          </div>

          <div className="brands-grid">
            <Link href="/brands/celebration-collective" className="brand-card">
              <div className="brand-card-content">
                <h3 className="brand-name">Celebration Collective</h3>
                <p className="brand-tagline">Birthday vibes, bach trip energy, reunion swagger — pieces your crew will actually want to wear.</p>
                <span className="brand-cta">Explore &rarr;</span>
              </div>
            </Link>
            <Link href="/brands/mitzvah-studio" className="brand-card">
              <Image src="/assets/Logos/MitzvahStudio.svg" alt="" className="brand-logo" width={200} height={200} />
              <div className="brand-card-content">
                <h3 className="brand-name">The Mitzvah Studio</h3>
                <p className="brand-tagline">Honoring tradition while feeling fresh. Custom pieces for this once-in-a-lifetime moment.</p>
                <span className="brand-cta">Explore &rarr;</span>
              </div>
            </Link>
            <Link href="/brands/altar-atelier" className="brand-card">
              <Image src="/assets/Logos/AltarAtelier.svg" alt="" className="brand-logo" width={200} height={200} />
              <div className="brand-card-content">
                <h3 className="brand-name">Altar Atelier</h3>
                <p className="brand-tagline">Your wedding party deserves more than matching t-shirts from a big-box store.</p>
                <span className="brand-cta">Explore &rarr;</span>
              </div>
            </Link>
            <Link href="/brands/sewcorporate" className="brand-card">
              <Image src="/assets/Logos/SewCorporate.svg" alt="" className="brand-logo" width={200} height={200} />
              <div className="brand-card-content">
                <h3 className="brand-name">SewCorporate</h3>
                <p className="brand-tagline">Custom branded apparel that your team actually wants to wear. Built for quality and culture.</p>
                <span className="brand-cta">Explore &rarr;</span>
              </div>
            </Link>
            <Link href="/brands/member-threads" className="brand-card">
              <Image src="/assets/Logos/MemberThreads.svg" alt="" className="brand-logo brand-logo-member-threads" width={200} height={200} />
              <div className="brand-card-content">
                <h3 className="brand-name">Member Threads</h3>
                <p className="brand-tagline">Membership gear that builds belonging. For clubs, organizations, and communities.</p>
                <span className="brand-cta">Explore &rarr;</span>
              </div>
            </Link>
          </div>

          <div className="brands-help">
            <p>Not sure which brand? <Link href="/contact?brand=not-sure">We&apos;ll help you choose &rarr;</Link></p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process" id="process">
        <div className="container">
          <div className="section-header center">
            <p className="overline">Our Process</p>
            <h2 className="headline-lg">How it <em>works.</em></h2>
          </div>
          <div className="process-grid">
            {[
              { num: '01', title: 'Discovery', desc: 'Tell us about your moment, your group, and your vision. We listen before we design.' },
              { num: '02', title: 'Design', desc: 'Our team creates fully custom concepts — not templates with your logo slapped on.' },
              { num: '03', title: 'Production', desc: 'Premium materials, modern fits, meticulous quality control. Every piece is made to keep.' },
              { num: '04', title: 'Delivery', desc: 'Seamless logistics whether you\'re ordering 12 pieces or 1,200.' },
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

      {/* What Sets Us Apart */}
      <section className="differentiators">
        <div className="container">
          <div className="diff-layout">
            <div className="diff-header">
              <p className="overline">Why Stitched</p>
              <h2 className="section-title">What sets us <em>apart.</em></h2>
            </div>
            <div className="diff-list">
              {[
                { title: 'Cut-and-Sew Manufacturing', text: 'We don\'t print on blanks. Every garment is built from raw fabric to finished piece.' },
                { title: '5 Specialized Brands', text: 'Your wedding deserves a different designer than your corporate retreat.' },
                { title: 'Your Own Designer', text: 'No template pickers. A real designer creates custom concepts for your specific event.' },
                { title: 'Factory-Direct Pricing', text: 'We own the manufacturing process, so you get premium quality without the luxury markup.' },
              ].map(d => (
                <div key={d.title} className="diff-item">
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
            <blockquote>
              &ldquo;The custom apparel industry treats every event the same. We built Stitched to change that — five specialized brands, each designed to make your specific moment unforgettable.&rdquo;
            </blockquote>
            <p className="attribution">Ethan Scher, Founder</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-home-section">
        <div className="container">
          <div className="section-header center">
            <p className="overline">FAQ</p>
            <h2 className="section-title">Common <em>questions.</em></h2>
          </div>
          <div className="faq-home-grid">
            <div className="faq-home-item">
              <h4>What&apos;s the minimum order?</h4>
              <p>Starting at 8 pieces for weddings and 12 for celebrations. Corporate orders start at 25.</p>
            </div>
            <div className="faq-home-item">
              <h4>How far in advance should I order?</h4>
              <p>We recommend 6-8 weeks for most projects. Rush orders (4 weeks) are available.</p>
            </div>
            <div className="faq-home-item">
              <h4>What makes you different?</h4>
              <p>Everything is cut-and-sew manufactured from scratch — not printed on generic blanks. Premium materials, modern fits, real design.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to create something <em>worth keeping?</em></h2>
            <p className="cta-description">Tell us about your moment.</p>
            <Link href="/contact" className="btn btn-primary btn-large btn-white">Start Your Project</Link>
            <p className="cta-email">or email <a href="mailto:hello@gostitched.com">hello@gostitched.com</a></p>
          </div>
        </div>
      </section>
    </>
  );
}

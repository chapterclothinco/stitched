import Link from 'next/link';

export const metadata = {
  title: 'About Us',
  description: 'Learn about Stitched Group - a design-led manufacturing company creating premium custom apparel for life\'s most meaningful moments.',
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="overline">About Us</span>
          <h1 className="page-title">The Story Behind <em>Stitched</em></h1>
          <p className="page-subtitle">A design-led manufacturing group creating premium custom apparel for life&apos;s most meaningful moments.</p>
        </div>
      </section>

      <section className="story-section">
        <div className="container">
          <div className="story-layout">
            <div className="story-content">
              <h2 className="section-title">Our <em>Story</em></h2>
              <p className="story-lead">Stitched was born from a simple observation: the custom apparel industry treats every event the same.</p>
              <p className="story-body">Whether you&apos;re ordering shirts for a wedding party or a corporate retreat, you&apos;re often stuck with the same generic options, the same cookie-cutter designs, and the same impersonal experience.</p>
              <p className="story-body">We believed there had to be a better way. A wedding celebration deserves a different aesthetic sensibility than a tech company&apos;s team shirts. A Bar Mitzvah calls for designs that honor tradition while feeling fresh and modern. A birthday bash should feel fun and celebratory, not corporate.</p>
              <p className="story-body">So we built Stitched — a manufacturing group with multiple specialized brands, each dedicated to a specific type of moment. Same commitment to quality, same premium materials, same expert craftsmanship. But completely different approaches to design, customer experience, and creative direction.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="section-header center">
            <span className="overline">Our Philosophy</span>
            <h2 className="section-title">What We <em>Believe</em></h2>
          </div>
          <div className="values-grid">
            {[
              { num: '01', title: 'Moments Matter', desc: 'Every celebration deserves apparel designed specifically for its unique character. We don\'t believe in one-size-fits-all solutions. Your moment is unique, and your apparel should be too.' },
              { num: '02', title: 'Specialization Over Generalization', desc: 'Our multi-brand approach means each moment type gets dedicated expertise, aesthetic sensibility, and customer experience. A wedding brand thinks differently than a corporate brand.' },
              { num: '03', title: 'Premium Without Pretension', desc: 'Quality materials, expert craftsmanship, and thoughtful design — accessible to anyone who values doing things right. High-end feel without the high-end attitude.' },
            ].map(v => (
              <div key={v.num} className="value-card">
                <span className="value-number">{v.num}</span>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-description">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="section-header center">
            <span className="overline">Who We Are</span>
            <h2 className="section-title">Our <em>Foundation</em></h2>
          </div>
          <div className="stats-grid">
            <div className="stat-item"><span className="stat-number">5</span><span className="stat-label">Specialized Brands</span></div>
            <div className="stat-item"><span className="stat-number">100%</span><span className="stat-label">Custom, Cut-and-Sew</span></div>
            <div className="stat-item"><span className="stat-number">0</span><span className="stat-label">Generic Blanks</span></div>
          </div>
        </div>
      </section>

      <section className="founder-section">
        <div className="container">
          <div className="founder-content">
            <div>
              <h3>Meet the Founder</h3>
              <h4>Ethan Scher</h4>
              <p>Ethan built Stitched after seeing the same problem over and over in the custom apparel industry: every event gets treated the same. A wedding party shouldn&apos;t have the same experience as a corporate team-building order. That&apos;s why Stitched has five specialized brands — each one designed around a specific type of moment, with its own design aesthetic, customer experience, and creative direction.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to create something <em>worth keeping?</em></h2>
            <p className="cta-description">Let&apos;s talk about your next project.</p>
            <Link href="/contact" className="btn btn-primary btn-large">Start Your Project</Link>
          </div>
        </div>
      </section>
    </>
  );
}

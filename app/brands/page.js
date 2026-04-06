import Link from 'next/link';

export const metadata = {
  title: 'Our Brands',
  description: 'Explore Stitched\'s five specialized brands - each dedicated to a specific type of moment with unique design sensibility and expertise.',
  openGraph: {
    title: 'Our Brands | Stitched',
    description: 'Five specialized brands, each dedicated to a specific type of moment with unique design sensibility and expertise.',
    url: 'https://gostitched.com/brands',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Stitched - Custom Apparel for Moments That Matter' }],
  },
};

export default function BrandsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="overline">Our Brands</span>
          <h1 className="page-title">Five Brands. One Standard of <em>Quality.</em></h1>
          <p className="page-subtitle">Every moment deserves its own approach. Find the brand that fits yours.</p>
        </div>
      </section>

      <section className="brands-page-section">
        <div className="container">
          <div className="brands-page-grid">
            <Link href="/brands/celebration-collective" className="brand-page-card">
              <div className="brand-page-header">
                <span className="brand-category">Life Celebrations</span>
                <h3 className="brand-page-name">Celebration Collective</h3>
                <p className="brand-page-tagline">Life&apos;s milestones, elevated</p>
              </div>
              <p className="brand-page-description">
                Birthdays, bach trips, graduations, reunions. Apparel that makes the moment memorable. Fun, colorful, and suited for the celebrations that actually matter to you.
              </p>
              <div className="brand-page-meta">
                <span className="brand-price">From $40/piece</span>
                <span className="brand-minimum">Min. 12 pieces</span>
              </div>
              <span className="brand-page-cta">Explore Collection →</span>
            </Link>

            <Link href="/brands/mitzvah-studio" className="brand-page-card">
              <div className="brand-page-header">
                <span className="brand-category">Bar & Bat Mitzvahs</span>
                <h3 className="brand-page-name">The Mitzvah Studio</h3>
                <p className="brand-page-tagline">Modern apparel for timeless traditions</p>
              </div>
              <p className="brand-page-description">
                Culturally aware design with reverence and modern restraint. Age-appropriate styles that honor tradition while still feeling fresh.
              </p>
              <div className="brand-page-meta">
                <span className="brand-price">From $55/piece</span>
                <span className="brand-minimum">Min. 15 pieces</span>
              </div>
              <span className="brand-page-cta">Explore Collection →</span>
            </Link>

            <Link href="/brands/altar-atelier" className="brand-page-card">
              <div className="brand-page-header">
                <span className="brand-category">Weddings & Bridal</span>
                <h3 className="brand-page-name">Altar Atelier</h3>
                <p className="brand-page-tagline">Refined pieces for every moment</p>
              </div>
              <p className="brand-page-description">
                Heirloom-quality apparel for the most intentional day of your life. Elegant, romantic, and made to become keepsakes.
              </p>
              <div className="brand-page-meta">
                <span className="brand-price">From $65/piece</span>
                <span className="brand-minimum">Min. 8 pieces</span>
              </div>
              <span className="brand-page-cta">Explore Collection →</span>
            </Link>

            <Link href="/brands/sewcorporate" className="brand-page-card">
              <div className="brand-page-header">
                <span className="brand-category">Corporate & Brand</span>
                <h3 className="brand-page-name">SewCorporate</h3>
                <p className="brand-page-tagline">Elevated corporate and brand apparel</p>
              </div>
              <p className="brand-page-description">
                Premium brand expression for organizations that operate at scale. Professional, modern, and made to impress clients and employees alike.
              </p>
              <div className="brand-page-meta">
                <span className="brand-price">From $45/piece</span>
                <span className="brand-minimum">Min. 25 pieces</span>
              </div>
              <span className="brand-page-cta">Explore Collection →</span>
            </Link>

            <Link href="/brands/member-threads" className="brand-page-card">
              <div className="brand-page-header">
                <span className="brand-category">Groups & Organizations</span>
                <h3 className="brand-page-name">Member Threads</h3>
                <p className="brand-page-tagline">Unity in every stitch</p>
              </div>
              <p className="brand-page-description">
                Elevated apparel for groups that expect more than standard issue. Team-oriented and made for communities that take pride in belonging.
              </p>
              <div className="brand-page-meta">
                <span className="brand-price">From $35/piece</span>
                <span className="brand-minimum">Min. 20 pieces</span>
              </div>
              <span className="brand-page-cta">Explore Collection →</span>
            </Link>

            <Link href="/contact" className="brand-page-card brand-page-card-cta">
              <div className="brand-page-header">
                <span className="brand-category">Need Help?</span>
                <h3 className="brand-page-name">Not Sure?</h3>
                <p className="brand-page-tagline">Let us guide you</p>
              </div>
              <p className="brand-page-description">
                Tell us about your event and we&apos;ll recommend the perfect brand for your moment. Our team is here to help you find the right fit.
              </p>
              <span className="brand-page-cta">Get a Recommendation →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to create something <em>worth keeping?</em></h2>
            <p className="cta-description">Find the brand built for your moment.</p>
            <Link href="/contact" className="btn btn-primary btn-large btn-white">Start Your Project</Link>
          </div>
        </div>
      </section>
    </>
  );
}

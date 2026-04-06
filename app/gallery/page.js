import Link from 'next/link';

export const metadata = {
  title: 'Gallery',
  description: 'Explore our portfolio of custom apparel projects, from weddings and celebrations to corporate events and team gear.',
  openGraph: {
    title: 'Gallery | Stitched',
    description: 'Explore our portfolio of custom apparel projects across five specialized brands.',
    url: 'https://gostitched.com/gallery',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Stitched - Custom Apparel for Moments That Matter' }],
  },
};

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="overline">Gallery</span>
          <h1 className="page-title">Our <em>Work</em></h1>
          <p className="page-subtitle">A look at the custom pieces we&apos;ve created for moments that matter.</p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <div className="gallery-coming-soon">
            <p className="gallery-coming-soon-text">Our gallery is being curated. Check back soon to see our latest work.</p>
            <Link href="/contact" className="btn btn-primary">Start Your Project</Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Have a vision in <em>mind?</em></h2>
            <p className="cta-description">Tell us about your moment and we&apos;ll bring it to life.</p>
            <Link href="/contact" className="btn btn-primary btn-large btn-white">Start Your Project</Link>
          </div>
        </div>
      </section>
    </>
  );
}

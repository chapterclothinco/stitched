import CatalogGrid from '@/components/CatalogGrid';

export const metadata = {
  title: 'Catalog',
  description: 'Explore what Stitched can create. Every piece is designed from scratch for a specific client. See examples across all five brands.',
};

export default function CatalogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">Our Work</span>
          <h1 className="page-title">What We Can <em>Create</em></h1>
          <p className="page-subtitle">Every piece below was designed from scratch for a specific client. Your project will be just as unique. This is just a taste of what&apos;s possible.</p>
        </div>
      </section>

      <CatalogGrid />

      <section className="imagine-more">
        <div className="container">
          <div className="imagine-more-content">
            <h2 className="section-title">This is just a fraction of what we can <em>do.</em></h2>
            <p>We&apos;re a fully custom, cut-and-sew manufacturer. If you can imagine it, we can build it. Different fabrics, fits, colors, techniques — every project starts as a blank canvas.</p>
            <p><strong>Have something specific in mind?</strong></p>
            <a href="/contact" className="btn btn-primary btn-large">Start Your Custom Project</a>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="section-tag">404</span>
        <h1 className="page-title">Page Not <em>Found</em></h1>
        <p className="page-subtitle">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <div style={{ marginTop: 40, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn-primary btn-large">Back to Home</Link>
          <Link href="/contact" className="btn btn-secondary btn-large">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}

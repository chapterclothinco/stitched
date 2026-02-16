import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <span className="logo-text">Stitched</span>
            </Link>
            <p className="footer-tagline">Custom apparel for moments that matter.</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Brands</h4>
              <Link href="/brands/celebration-collective">Celebration Collective</Link>
              <Link href="/brands/mitzvah-studio">The Mitzvah Studio</Link>
              <Link href="/brands/altar-atelier">Altar Atelier</Link>
              <Link href="/brands/sewcorporate">SewCorporate</Link>
              <Link href="/brands/member-threads">Member Threads</Link>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <Link href="/about">About</Link>
              <Link href="/process">Process</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Stitched Group LLC. All rights reserved.</p>
          <div className="footer-social">
            <a href="https://instagram.com/gostitched" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://linkedin.com/company/stitched" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

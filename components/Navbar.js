'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.pageYOffset > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const links = [
    { href: '/brands', label: 'Brands' },
    { href: '/catalog', label: 'Catalog' },
    { href: '/about', label: 'About' },
    { href: '/process', label: 'Process' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-container">
          <Link href="/" className="logo">
            <span className="logo-text">Stitched</span>
          </Link>
          <div className="nav-links">
            {links.map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
          </div>
          <div className="nav-actions">
            <Link href="/contact" className="btn-nav">Get Started</Link>
          </div>
          <button
            className={`mobile-menu-btn${menuOpen ? ' active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' active' : ''}`}>
        <div className="mobile-menu-links">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={closeMenu}>{l.label}</Link>
          ))}
          <Link href="/contact" className="mobile-cta" onClick={closeMenu}>Get Started</Link>
        </div>
      </div>
    </>
  );
}

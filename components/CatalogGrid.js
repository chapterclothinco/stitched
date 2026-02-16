'use client';

import { useState } from 'react';
import Link from 'next/link';
import catalogData from '@/data/catalog.json';

const brandLabels = {
  'celebration-collective': 'Celebration Collective',
  'mitzvah-studio': 'The Mitzvah Studio',
  'altar-atelier': 'Altar Atelier',
  'sewcorporate': 'SewCorporate',
  'member-threads': 'Member Threads',
};

const filters = [
  { value: 'all', label: 'All' },
  { value: 'celebration-collective', label: 'Celebration Collective' },
  { value: 'mitzvah-studio', label: 'Mitzvah Studio' },
  { value: 'altar-atelier', label: 'Altar Atelier' },
  { value: 'sewcorporate', label: 'SewCorporate' },
  { value: 'member-threads', label: 'Member Threads' },
];

export default function CatalogGrid() {
  const [active, setActive] = useState('all');
  const products = catalogData.products;
  const filtered = active === 'all' ? products : products.filter(p => p.brand === active);

  return (
    <>
      <section className="catalog-filters">
        <div className="container">
          <div className="filter-group">
            {filters.map(f => (
              <button
                key={f.value}
                className={`filter-btn${active === f.value ? ' active' : ''}`}
                onClick={() => setActive(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="catalog-section">
        <div className="container">
          <div className="catalog-grid">
            {filtered.map(p => (
              <div key={p.id} className="catalog-card">
                <div className="catalog-card-content">
                  <span className="catalog-brand-tag">{brandLabels[p.brand] || p.brand}</span>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <Link href={`/contact?brand=${p.brand}`} className="btn btn-primary">
                    Design Something Like This
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

'use client';

import { useState } from 'react';
import catalogData from '@/data/catalog.json';
import { getGarmentSVG } from './GarmentSVG';

const methodLabels = {
  'cut-and-sew': 'Cut & Sew',
  'screen-print': 'Screen Print',
  'embroidered': 'Embroidered',
};

export default function BrandCatalog({ brandSlug, categories }) {
  const allProducts = catalogData.products.filter(p => p.brand === brandSlug);
  const [filters, setFilters] = useState({ category: 'all', method: 'all', price: 'all', search: '' });

  let filtered = [...allProducts];
  if (filters.category !== 'all') filtered = filtered.filter(p => p.category === filters.category);
  if (filters.method !== 'all') filtered = filtered.filter(p => p.productionMethod === filters.method);
  if (filters.price !== 'all') {
    const [min, max] = filters.price.split('-').map(Number);
    filtered = filtered.filter(p => p.priceMin >= min && p.priceMin < max);
  }
  if (filters.search) {
    const q = filters.search.toLowerCase();
    filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
  }

  const updateFilter = (key, value) => setFilters(prev => ({ ...prev, [key]: value }));

  const clearFilters = () => {
    setFilters({ category: 'all', method: 'all', price: 'all', search: '' });
  };

  return (
    <section className="brand-catalog">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: 40 }}>
          <span className="section-tag">Collection</span>
          <h2 className="section-title">What We Can <em>Create</em></h2>
        </div>

        <div className="brand-catalog-toolbar">
          <div className="catalog-category-filters">
            <button className={`cat-filter-btn${filters.category === 'all' ? ' active' : ''}`} onClick={() => updateFilter('category', 'all')}>All</button>
            {categories.map(cat => (
              <button key={cat} className={`cat-filter-btn${filters.category === cat ? ' active' : ''}`} onClick={() => updateFilter('category', cat)}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
          <div className="catalog-toolbar-right">
            <select className="catalog-select" value={filters.method} onChange={e => updateFilter('method', e.target.value)}>
              <option value="all">All Methods</option>
              <option value="cut-and-sew">Cut &amp; Sew</option>
              <option value="screen-print">Screen Print</option>
              <option value="embroidered">Embroidered</option>
            </select>
            <select className="catalog-select" value={filters.price} onChange={e => updateFilter('price', e.target.value)}>
              <option value="all">All Prices</option>
              <option value="0-40">Under $40</option>
              <option value="40-70">$40–$70</option>
              <option value="70-999">$70+</option>
            </select>
            <input className="catalog-search" type="text" placeholder="Search..." value={filters.search} onChange={e => updateFilter('search', e.target.value)} />
            <button className="clear-filters-btn" onClick={clearFilters}>Clear</button>
          </div>
        </div>

        <div className="catalog-pagination">
          <span className="catalog-result-count">Showing {filtered.length} of {allProducts.length} products</span>
        </div>

        <div className="brand-product-grid" style={{ marginTop: 24 }}>
          {filtered.length === 0 ? (
            <div className="catalog-no-results">No products match your filters. Try adjusting your criteria.</div>
          ) : (
            filtered.map(p => (
              <div key={p.id} className="brand-product-card">
                <div className="product-illustration">
                  <span className={`product-badge${p.badge === 'PREMIUM' ? ' premium' : ''}`}>{p.badge}</span>
                  <span dangerouslySetInnerHTML={{ __html: getGarmentSVG(p.garmentType) }} />
                </div>
                <div className="product-info">
                  <h4>{p.name}</h4>
                  <span className="product-price">${p.priceMin}–${p.priceMax}</span>
                  <div className="product-method">{methodLabels[p.productionMethod] || p.productionMethod}</div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

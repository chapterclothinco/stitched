'use client';

import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    // Apply animation classes to elements
    document.querySelectorAll('.section-header').forEach(el => el.classList.add('animate-fade-up'));
    document.querySelectorAll('.philosophy-header').forEach(el => el.classList.add('animate-fade-left'));
    document.querySelectorAll('.philosophy-content').forEach(el => el.classList.add('animate-fade-right'));
    document.querySelectorAll('.section-title').forEach(el => el.classList.add('reveal-line'));

    document.querySelectorAll('.pillars-grid, .brands-grid, .process-grid, .diff-list').forEach(el => el.classList.add('stagger-children'));

    document.querySelectorAll('.brand-card').forEach((el, i) => {
      el.classList.add('animate-scale');
      el.style.transitionDelay = `${i * 0.08}s`;
    });

    document.querySelectorAll('.process-step').forEach((el, i) => {
      el.classList.add('animate-blur');
      el.style.transitionDelay = `${i * 0.15}s`;
    });

    document.querySelectorAll('.pillar-card').forEach((el, i) => {
      el.classList.add('animate-fade-up');
      el.style.transitionDelay = `${i * 0.12}s`;
    });

    document.querySelectorAll('.diff-item').forEach((el, i) => {
      el.classList.add('animate-fade-left');
      el.style.transitionDelay = `${i * 0.1}s`;
    });

    document.querySelectorAll('.cta-content').forEach(el => el.classList.add('animate-scale'));

    // Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { root: null, rootMargin: '-50px', threshold: 0.15 }
    );

    document.querySelectorAll(
      '.animate-fade-up, .animate-fade-left, .animate-fade-right, .animate-scale, .animate-blur, .stagger-children, .reveal-line'
    ).forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}

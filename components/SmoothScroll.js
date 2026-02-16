'use client';

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const offset = 100;
      const targetPos = target.getBoundingClientRect().top + window.pageYOffset - offset;
      const startPos = window.pageYOffset;
      const distance = targetPos - startPos;
      const duration = 1200;
      let startTime = null;

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        window.scrollTo(0, startPos + distance * ease);
        if (elapsed < duration) requestAnimationFrame(animation);
      }

      requestAnimationFrame(animation);
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}

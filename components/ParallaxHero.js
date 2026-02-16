'use client';

import { useEffect, useRef } from 'react';

export default function ParallaxHero({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            const yPos = (rect.top - window.innerHeight / 2) * 0.1;
            el.style.transform = `translateY(${yPos}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="hero-visual" ref={ref}>
      {children}
    </div>
  );
}

'use client';

import { useEffect, useRef } from 'react';

const words = ['Weddings', 'Communities', 'Celebrations', 'Companies', 'Milestones', 'Teams', 'Bar Mitzvahs', 'Startups', 'Reunions', 'Clubs'];

export default function TypingEffect() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let wordIndex = 0;
    let charIndex = words[0].length; // Start fully typed
    let isDeleting = false;
    let timeout;

    function type() {
      const currentWord = words[wordIndex];
      let speed;

      if (isDeleting) {
        el.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        speed = 50;
      } else {
        el.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        speed = 100;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        speed = 4000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 500;
      }

      timeout = setTimeout(type, speed);
    }

    // Start with a pause since first word is already displayed
    timeout = setTimeout(() => {
      isDeleting = true;
      type();
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return <span id="typing-text" ref={ref}>Weddings</span>;
}

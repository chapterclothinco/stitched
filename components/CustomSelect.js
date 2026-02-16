'use client';

import { useState, useRef, useEffect } from 'react';

export default function CustomSelect({ id, name, options, placeholder }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    function handleKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  function selectOption(option) {
    setSelected(option);
    setOpen(false);
  }

  return (
    <div className="custom-select" ref={ref}>
      <input type="hidden" name={name} value={selected ? selected.value : ''} />
      <button
        type="button"
        id={id}
        className={`custom-select-trigger${selected ? ' has-value' : ''}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span>{selected ? selected.label : placeholder}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </button>

      {open && (
        <div className="custom-select-dropdown" role="listbox">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`custom-select-option${selected && selected.value === option.value ? ' selected' : ''}`}
              role="option"
              aria-selected={selected && selected.value === option.value}
              onClick={() => selectOption(option)}
            >
              {option.label}
              {selected && selected.value === option.value && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

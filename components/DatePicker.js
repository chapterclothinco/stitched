'use client';

import { useState, useRef, useEffect } from 'react';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export default function DatePicker({ id, name }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [viewYear, setViewYear] = useState(new Date().getFullYear());
  const [viewMonth, setViewMonth] = useState(new Date().getMonth());
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

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const daysInPrev = new Date(viewYear, viewMonth, 0).getDate();

  const cells = [];
  for (let i = 0; i < firstDay; i++) {
    cells.push({ day: daysInPrev - firstDay + 1 + i, outside: true });
  }
  for (let i = 1; i <= daysInMonth; i++) {
    cells.push({ day: i, outside: false });
  }
  const remaining = 7 - (cells.length % 7);
  if (remaining < 7) {
    for (let i = 1; i <= remaining; i++) {
      cells.push({ day: i, outside: true });
    }
  }

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(viewYear - 1); }
    else setViewMonth(viewMonth - 1);
  }

  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(viewYear + 1); }
    else setViewMonth(viewMonth + 1);
  }

  function selectDay(day) {
    const date = new Date(viewYear, viewMonth, day);
    setSelected(date);
    setOpen(false);
  }

  function isSelected(day) {
    if (!selected) return false;
    return selected.getFullYear() === viewYear && selected.getMonth() === viewMonth && selected.getDate() === day;
  }

  function isToday(day) {
    return today.getFullYear() === viewYear && today.getMonth() === viewMonth && today.getDate() === day;
  }

  const displayValue = selected
    ? `${MONTHS[selected.getMonth()]} ${selected.getDate()}, ${selected.getFullYear()}`
    : '';

  const hiddenValue = selected
    ? `${selected.getFullYear()}-${String(selected.getMonth() + 1).padStart(2, '0')}-${String(selected.getDate()).padStart(2, '0')}`
    : '';

  return (
    <div className="datepicker" ref={ref}>
      <input type="hidden" name={name} value={hiddenValue} />
      <button
        type="button"
        id={id}
        className={`datepicker-trigger${selected ? ' has-value' : ''}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {displayValue || <span className="datepicker-placeholder">Select a date</span>}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      </button>

      {open && (
        <div className="datepicker-dropdown">
          <div className="datepicker-header">
            <button type="button" className="datepicker-nav" onClick={prevMonth} aria-label="Previous month">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <span className="datepicker-month-year">{MONTHS[viewMonth]} {viewYear}</span>
            <button type="button" className="datepicker-nav" onClick={nextMonth} aria-label="Next month">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
          <div className="datepicker-days-header">
            {DAYS.map(d => <span key={d} className="datepicker-day-label">{d}</span>)}
          </div>
          <div className="datepicker-grid">
            {cells.map((cell, i) => (
              <button
                key={i}
                type="button"
                className={`datepicker-cell${cell.outside ? ' outside' : ''}${!cell.outside && isSelected(cell.day) ? ' selected' : ''}${!cell.outside && isToday(cell.day) ? ' today' : ''}`}
                disabled={cell.outside}
                onClick={() => !cell.outside && selectDay(cell.day)}
              >
                {cell.day}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

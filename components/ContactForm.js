'use client';

import { useState } from 'react';
import CustomSelect from './CustomSelect';
import DatePicker from './DatePicker';

const brandOptions = [
  { value: 'celebration-collective', label: 'Celebration Collective' },
  { value: 'mitzvah-studio', label: 'The Mitzvah Studio' },
  { value: 'altar-atelier', label: 'Altar Atelier' },
  { value: 'sewcorporate', label: 'SewCorporate' },
  { value: 'member-threads', label: 'Member Threads' },
  { value: 'not-sure', label: 'Not Sure - Help Me Choose' },
];

const eventTypeOptions = [
  { value: 'wedding', label: 'Wedding' },
  { value: 'corporate', label: 'Corporate Event' },
  { value: 'birthday', label: 'Birthday/Celebration' },
  { value: 'bar-bat-mitzvah', label: 'Bar/Bat Mitzvah' },
  { value: 'reunion', label: 'Reunion' },
  { value: 'team-group', label: 'Team/Group Order' },
  { value: 'other', label: 'Other' },
];

const budgetOptions = [
  { value: 'under-2k', label: 'Under $2,000' },
  { value: '2k-5k', label: '$2,000 - $5,000' },
  { value: '5k-10k', label: '$5,000 - $10,000' },
  { value: '10k-25k', label: '$10,000 - $25,000' },
  { value: '25k-plus', label: '$25,000+' },
  { value: 'not-sure', label: 'Not Sure Yet' },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const form = e.target;
      const data = new FormData(form);
      await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="form-success">
        <div className="form-success-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <h3>Thank you!</h3>
        <p>We&apos;ve received your submission and will be in touch within 24 hours.</p>
        <p className="form-success-sub">In the meantime, feel free to explore our <a href="/brands">brands</a> or <a href="https://calendly.com/gostitched" target="_blank" rel="noopener noreferrer">schedule a discovery call</a>.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Your Name *</label>
          <input type="text" id="name" name="name" placeholder="John Smith" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input type="email" id="email" name="email" placeholder="john@example.com" required />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="brand">Brand Interest</label>
          <CustomSelect id="brand" name="brand" options={brandOptions} placeholder="Select a Brand" />
        </div>
        <div className="form-group">
          <label htmlFor="event-type">Event Type</label>
          <CustomSelect id="event-type" name="event-type" options={eventTypeOptions} placeholder="Select Event Type" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="quantity">Estimated Quantity</label>
          <input type="number" id="quantity" name="quantity" placeholder="e.g., 25" min="1" />
        </div>
        <div className="form-group">
          <label htmlFor="event-date">Event Date</label>
          <DatePicker id="event-date" name="event-date" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="budget">Budget Range</label>
          <CustomSelect id="budget" name="budget" options={budgetOptions} placeholder="Select Budget Range" />
        </div>
      </div>
      <div className="form-group full-width">
        <label htmlFor="message">Tell us about your vision</label>
        <textarea id="message" name="message" rows="5" placeholder="Share details about your event, style preferences, and any specific ideas you have in mind..."></textarea>
      </div>
      <div className="contact-buttons">
        <button type="submit" className="btn btn-primary btn-large" disabled={submitting}>
          {submitting ? 'Sending...' : 'Start Your Project'}
        </button>
        <a href="https://calendly.com/gostitched" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-large">
          Schedule a Discovery Call
        </a>
      </div>
      <p className="form-note">We typically respond within 24 hours.</p>
    </form>
  );
}

'use client';

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
  return (
    <form className="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
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
      <button type="submit" className="btn btn-primary btn-large full-width">Start Your Project</button>
      <p className="form-note">We typically respond within 24 hours.</p>
    </form>
  );
}

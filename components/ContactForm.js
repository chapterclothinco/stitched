'use client';

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
          <select id="brand" name="brand" defaultValue="">
            <option value="">Select a Brand</option>
            <option value="celebration-collective">Celebration Collective</option>
            <option value="mitzvah-studio">The Mitzvah Studio</option>
            <option value="altar-atelier">Altar Atelier</option>
            <option value="sewcorporate">SewCorporate</option>
            <option value="member-threads">Member Threads</option>
            <option value="not-sure">Not Sure - Help Me Choose</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="event-type">Event Type</label>
          <select id="event-type" name="event-type" defaultValue="">
            <option value="">Select Event Type</option>
            <option value="wedding">Wedding</option>
            <option value="corporate">Corporate Event</option>
            <option value="birthday">Birthday/Celebration</option>
            <option value="bar-bat-mitzvah">Bar/Bat Mitzvah</option>
            <option value="reunion">Reunion</option>
            <option value="team-group">Team/Group Order</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="quantity">Estimated Quantity</label>
          <input type="number" id="quantity" name="quantity" placeholder="e.g., 25" min="1" />
        </div>
        <div className="form-group">
          <label htmlFor="event-date">Event Date</label>
          <input type="date" id="event-date" name="event-date" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="budget">Budget Range</label>
          <select id="budget" name="budget" defaultValue="">
            <option value="">Select Budget Range</option>
            <option value="under-2k">Under $2,000</option>
            <option value="2k-5k">$2,000 - $5,000</option>
            <option value="5k-10k">$5,000 - $10,000</option>
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="25k-plus">$25,000+</option>
            <option value="not-sure">Not Sure Yet</option>
          </select>
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

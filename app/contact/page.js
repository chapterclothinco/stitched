import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us',
  description: 'Start your custom apparel project with Stitched. Tell us about your event and we\'ll bring your vision to life.',
  openGraph: {
    title: 'Contact Us | Stitched',
    description: 'Start your custom apparel project with Stitched. Tell us about your event and we\'ll bring your vision to life.',
    url: 'https://gostitched.com/contact',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Stitched - Custom Apparel for Moments That Matter' }],
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="overline">Contact</span>
          <h1 className="page-title">Let&apos;s Create Something <em>Worth Keeping</em></h1>
          <p className="page-subtitle">Tell us about your moment, and we&apos;ll bring it to life.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-form-wrapper">
              <ContactForm />
            </div>

            <div className="contact-info">
              <div className="info-card">
                <h3>Quick Contact</h3>
                <div className="info-item">
                  <span className="info-label">Email</span>
                  <a href="mailto:hello@gostitched.com" className="info-value">hello@gostitched.com</a>
                </div>
                <div className="info-item">
                  <span className="info-label">Response Time</span>
                  <span className="info-value">Within 24 hours</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Hours</span>
                  <span className="info-value">Mon-Fri, 9am-6pm EST</span>
                </div>
                <a href="https://calendly.com/gostitched" target="_blank" rel="noopener noreferrer" className="btn btn-primary info-calendly-btn">Schedule a Discovery Call</a>
              </div>

              <div className="info-card">
                <h3>Quick Answers</h3>
                <div className="quick-faq">
                  <div className="quick-faq-item">
                    <h4>How quickly will I hear back?</h4>
                    <p>We typically respond within 24 hours during business days.</p>
                  </div>
                  <div className="quick-faq-item">
                    <h4>What information should I have ready?</h4>
                    <p>Event date, estimated quantity, and any design ideas or inspiration you have.</p>
                  </div>
                  <div className="quick-faq-item">
                    <h4>What if I&apos;m not sure which brand I need?</h4>
                    <p>No problem! Select &ldquo;Not Sure&rdquo; and we&apos;ll help guide you to the right fit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

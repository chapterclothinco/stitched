import Link from 'next/link';

export const metadata = {
  title: 'Our Process',
  description: 'Learn how Stitched creates custom apparel - from discovery to delivery. Our 4-step process ensures quality results for every project.',
};

export default function ProcessPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="overline">Our Process</span>
          <h1 className="page-title">From Concept to <em>Creation</em></h1>
          <p className="page-subtitle">Every piece is crafted with intention, from initial design through final delivery.</p>
        </div>
      </section>

      <section className="process-detail-section">
        <div className="container">
          <div className="process-steps-detailed">
            <div className="process-step-detailed">
              <div className="step-header">
                <div className="step-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
                <span className="step-number-large">01</span>
                <div className="step-meta">
                  <h3 className="step-title-large">Discovery</h3>
                  <span className="step-timeline">1-2 business days</span>
                </div>
              </div>
              <div className="step-content">
                <p className="step-intro">We start by understanding your vision, event details, and what makes your moment unique.</p>
                <div className="step-details-grid">
                  <div className="step-details-col">
                    <h4>What Happens</h4>
                    <ul>
                      <li>15-minute intro call or detailed form submission</li>
                      <li>Share your event details, vision, and vibe</li>
                      <li>Discuss group size, timeline, and budget</li>
                    </ul>
                  </div>
                  <div className="step-details-col">
                    <h4>What You Get</h4>
                    <ul>
                      <li>Brand recommendation (which of our brands fits best)</li>
                      <li>Initial timeline estimate</li>
                      <li>Rough budget range</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="process-step-detailed">
              <div className="step-header">
                <div className="step-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg></div>
                <span className="step-number-large">02</span>
                <div className="step-meta">
                  <h3 className="step-title-large">Design</h3>
                  <span className="step-timeline">5-10 business days</span>
                </div>
              </div>
              <div className="step-content">
                <p className="step-intro">Our dedicated designers bring your vision to life with custom concepts tailored to your event.</p>
                <div className="step-details-grid">
                  <div className="step-details-col">
                    <h4>What Happens</h4>
                    <ul>
                      <li>Dedicated designer assigned to your project</li>
                      <li>2-3 initial concept presentations</li>
                      <li>Collaborative revision process (up to 3 rounds included)</li>
                      <li>Material and color consultations</li>
                    </ul>
                  </div>
                  <div className="step-details-col">
                    <h4>What You Get</h4>
                    <ul>
                      <li>Digital mockups of your custom pieces</li>
                      <li>Fabric swatches (for orders 50+)</li>
                      <li>Final design approval document</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="process-step-detailed">
              <div className="step-header">
                <div className="step-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg></div>
                <span className="step-number-large">03</span>
                <div className="step-meta">
                  <h3 className="step-title-large">Production</h3>
                  <span className="step-timeline">2-4 weeks</span>
                </div>
              </div>
              <div className="step-content">
                <p className="step-intro">Every piece is crafted from scratch using premium materials and expert manufacturing.</p>
                <div className="step-details-grid">
                  <div className="step-details-col">
                    <h4>What Happens</h4>
                    <ul>
                      <li>Premium materials sourced specifically for your order</li>
                      <li>Cut-and-sew manufacturing (not decorated blanks)</li>
                      <li>Quality control at every step</li>
                      <li>Individual piece inspection</li>
                    </ul>
                  </div>
                  <div className="step-details-col">
                    <h4>What Makes Us Different</h4>
                    <ul>
                      <li>Made from scratch, not printed on generic blanks</li>
                      <li>Modern fits designed for real bodies</li>
                      <li>Premium fabrics that feel as good as they look</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="process-step-detailed">
              <div className="step-header">
                <div className="step-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16.5 9.4l-9-5.19"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg></div>
                <span className="step-number-large">04</span>
                <div className="step-meta">
                  <h3 className="step-title-large">Delivery</h3>
                  <span className="step-timeline">3-5 business days shipping</span>
                </div>
              </div>
              <div className="step-content">
                <p className="step-intro">Your custom apparel arrives carefully packaged and ready for your moment.</p>
                <div className="step-details-grid">
                  <div className="step-details-col">
                    <h4>What Happens</h4>
                    <ul>
                      <li>Individual packaging for each piece</li>
                      <li>Bulk shipping or individual addresses available</li>
                      <li>Full tracking provided</li>
                      <li>Delivery confirmation</li>
                    </ul>
                  </div>
                  <div className="step-details-col">
                    <h4>Our Guarantee</h4>
                    <ul>
                      <li>On-time delivery or we make it right</li>
                      <li>Quality guarantee on all pieces</li>
                      <li>Easy reorder process for additions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="container">
          <div className="section-header center">
            <span className="overline">FAQ</span>
            <h2 className="section-title">Common <em>Questions</em></h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h4 className="faq-question">What&apos;s the minimum order?</h4>
              <p className="faq-answer">Minimums vary by brand. Celebration Collective starts at 12 pieces. Corporate orders start at 25. Contact us for specifics.</p>
            </div>
            <div className="faq-item">
              <h4 className="faq-question">How much does custom apparel cost?</h4>
              <p className="faq-answer">Pricing depends on design complexity, materials, and quantity. Most projects range from $45-150 per piece. We provide detailed quotes after the Discovery call.</p>
            </div>
            <div className="faq-item">
              <h4 className="faq-question">How far in advance should I order?</h4>
              <p className="faq-answer">We recommend 6-8 weeks for most projects. Rush orders (4 weeks) available for an additional fee.</p>
            </div>
            <div className="faq-item">
              <h4 className="faq-question">Can you meet a tight deadline?</h4>
              <p className="faq-answer">Sometimes! Contact us with your date and we&apos;ll let you know what&apos;s possible.</p>
            </div>
            <div className="faq-item">
              <h4 className="faq-question">Can I provide my own design?</h4>
              <p className="faq-answer">Absolutely. We can work with your existing artwork or create something entirely new.</p>
            </div>
            <div className="faq-item">
              <h4 className="faq-question">What if I don&apos;t know what I want?</h4>
              <p className="faq-answer">That&apos;s what our design team is for. We&apos;ll guide you through options and make recommendations based on your event.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to get <em>started?</em></h2>
            <p className="cta-description">Let&apos;s begin with a quick discovery call.</p>
            <Link href="/contact" className="btn btn-primary btn-large">Start Your Project</Link>
          </div>
        </div>
      </section>
    </>
  );
}

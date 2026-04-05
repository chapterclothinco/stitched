export const metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Stitched Group LLC.',
  openGraph: {
    title: 'Terms of Service | Stitched',
    description: 'Terms of Service for Stitched Group LLC.',
    url: 'https://gostitched.com/terms',
  },
};

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Terms of <em>Service</em></h1>
        </div>
      </section>

      <section className="legal-section">
        <div className="container">
          <div className="legal-content">
            <p className="legal-updated">Last updated: April 2026</p>

            <h2>1. Agreement to Terms</h2>
            <p>By accessing or using the Stitched website (gostitched.com) and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>

            <h2>2. Services</h2>
            <p>Stitched Group LLC provides custom apparel design and manufacturing services through its family of brands. All orders are subject to minimum quantity requirements and production timelines as discussed during the discovery process.</p>

            <h2>3. Orders and Payment</h2>
            <p>All custom orders require a deposit before production begins. Final pricing is confirmed after the design approval process. Payment terms will be outlined in your project proposal.</p>

            <h2>4. Intellectual Property</h2>
            <p>Designs created by Stitched remain the intellectual property of Stitched Group LLC unless otherwise agreed in writing. Customer-provided artwork remains the property of the customer.</p>

            <h2>5. Returns and Refunds</h2>
            <p>Due to the custom nature of our products, all sales are final once production has begun. We stand behind our quality guarantee and will address any manufacturing defects.</p>

            <h2>6. Contact</h2>
            <p>For questions about these terms, contact us at <a href="mailto:hello@gostitched.com">hello@gostitched.com</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}

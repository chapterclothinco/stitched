export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Stitched Group LLC.',
  openGraph: {
    title: 'Privacy Policy | Stitched',
    description: 'Privacy Policy for Stitched Group LLC.',
    url: 'https://gostitched.com/privacy',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Stitched - Custom Apparel for Moments That Matter' }],
  },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Privacy <em>Policy</em></h1>
        </div>
      </section>

      <section className="legal-section">
        <div className="container">
          <div className="legal-content">
            <p className="legal-updated">Last updated: April 2026</p>

            <h2>1. Information We Collect</h2>
            <p>We collect information you provide directly to us, including your name, email address, phone number, event details, and any other information you choose to share through our contact form or during consultations.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to provide and improve our services, communicate with you about your projects, send you updates about our services (with your consent), and fulfill our contractual obligations.</p>

            <h2>3. Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, so long as they agree to keep this information confidential.</p>

            <h2>4. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>

            <h2>5. Cookies</h2>
            <p>Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings.</p>

            <h2>6. Contact</h2>
            <p>For questions about this privacy policy, contact us at <a href="mailto:hello@gostitched.com">hello@gostitched.com</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}

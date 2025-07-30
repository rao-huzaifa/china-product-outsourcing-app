import Layout from '../../components/layout/Layout'
import Cta from '../../components/sections/home1/Cta'

export default function PrivacyPage() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Privacy Policy">
      <section className="privacy-section" style={{ background: '#fff', padding: '60px 0', marginBottom: 64 }}>
        <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
          <h1 className="section-title__title" style={{ fontWeight: 800, fontSize: 36, marginBottom: 24 }}>Privacy Policy</h1>
          <p>At Door to Door, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information.</p>
          <h2 style={{ fontWeight: 700, fontSize: 22, marginTop: 32 }}>1. Information We Collect</h2>
          <p>We may collect personal information such as your name, email address, phone number, and company details when you use our services or contact us.</p>
          <h2 style={{ fontWeight: 700, fontSize: 22, marginTop: 32 }}>2. How We Use Information</h2>
          <p>Your information is used to provide and improve our services, communicate with you, and comply with legal obligations.</p>
          <h2 style={{ fontWeight: 700, fontSize: 22, marginTop: 32 }}>3. Data Security</h2>
          <p>We implement industry-standard security measures to protect your data from unauthorized access or disclosure.</p>
          <h2 style={{ fontWeight: 700, fontSize: 22, marginTop: 32 }}>4. Cookies</h2>
          <p>Our website may use cookies to enhance your experience. You can disable cookies in your browser settings.</p>
          <h2 style={{ fontWeight: 700, fontSize: 22, marginTop: 32 }}>5. Third-Party Links</h2>
          <p>Our site may contain links to third-party websites. We are not responsible for their privacy practices.</p>
          <h2 style={{ fontWeight: 700, fontSize: 22, marginTop: 32 }}>6. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Please review it periodically for changes.</p>
          <p style={{ marginTop: 32 }}>For questions or requests regarding your data, please <a href="/contact">contact us</a>.</p>
        </div>
      </section>
      <div style={{ marginBottom: 32 }} />
      <Cta />
    </Layout>
  )
} 
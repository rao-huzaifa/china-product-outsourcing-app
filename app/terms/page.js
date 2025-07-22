import Layout from '../../components/layout/Layout'
import Cta from '../../components/sections/home1/Cta'

export default function TermsPage() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Terms & Conditions">
      <section className="terms-section" style={{ background: '#fff', padding: '60px 0', marginBottom: 64 }}>
        <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
          <h1 className="section-title__title" style={{ fontWeight: 800, fontSize: 36, marginBottom: 24 }}>Terms & Conditions</h1>
          <p>Welcome to Door to Doors. These terms and conditions outline the rules and regulations for the use of our website and services.</p>
          <h2 style={{ fontWeight: 700, fontSize: 22, marginTop: 32 }}>1. Acceptance of Terms</h2>
          <p>By accessing this website, you accept these terms and conditions in full. Do not continue to use Door to Doors if you do not accept all of the terms and conditions stated on this page.</p>
          <h2 style={{ fontWeight: 700, fontSize: 22, marginTop: 32 }}>2. Services</h2>
          <p>Door to Doors provides logistics, supply chain, and sourcing solutions. All services are subject to availability and may be modified or discontinued at any time.</p>
          <h2 style={{ fontWeight: 700, fontSize: 22, marginTop: 32 }}>3. User Responsibilities</h2>
          <p>Users agree not to misuse the website or services, and to provide accurate information when requested.</p>
          <h2 style={{ fontWeight: 700, fontSize: 22, marginTop: 32 }}>4. Intellectual Property</h2>
          <p>All content, trademarks, and data on this website are the property of Door to Doors or its licensors.</p>
          <h2 style={{ fontWeight: 700, fontSize: 22, marginTop: 32 }}>5. Limitation of Liability</h2>
          <p>Door to Doors is not liable for any damages arising from the use or inability to use the website or services.</p>
          <h2 style={{ fontWeight: 700, fontSize: 22, marginTop: 32 }}>6. Changes to Terms</h2>
          <p>We reserve the right to update these terms at any time. Continued use of the site constitutes acceptance of the new terms.</p>
          <p style={{ marginTop: 32 }}>For questions, please <a href="/contact">contact us</a>.</p>
        </div>
      </section>
      <div style={{ marginBottom: 32 }} />
      <Cta />
    </Layout>
  )
} 
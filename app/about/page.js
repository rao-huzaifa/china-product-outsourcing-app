'use client'
import About from '../../components/sections/home1/About';
import WhyChoose from '../../components/sections/home1/WhyChoose';
import Testimonial from '../../components/sections/home1/Testimonial';
import Cta from '../../components/sections/home1/Cta';
import { useState } from 'react';
import Layout from '../../components/layout/Layout';
import Project from '../../components/sections/home1/Project';

function SectionWrapper({ children, className = '', bg = '', divider = false, style = {} }) {
  return (
    <section
      className={`section-wrapper py-5 ${className}`}
      style={{
        background: bg || 'transparent',
        ...style,
      }}
    >
      {divider && <div className="section-divider" />}
      <div className="container unified-container">
        {children}
      </div>
    </section>
  );
}

function FounderNote() {
  return (
    <SectionWrapper className="founder-note-section">
      <div className="row justify-content-center">
        <div className="col-xl-8">
          <div className="about-one__left p-5 shadow-lg rounded bg-white position-relative" style={{borderLeft: '6px solid #0d6efd'}}>
            <div className="section-title text-left mb-4">
              <div className="section-title__tagline-box d-flex align-items-center">
                <span className="section-title__tagline me-2">A Note from Our Co-Founder</span>
                <span className="icon-quote" style={{fontSize: '2rem', color: '#0d6efd'}}></span>
              </div>
              <h2 className="section-title__title" style={{fontWeight: 700, color: '#0d6efd'}}>A Note from Our Co-Founder</h2>
            </div>
            <blockquote className="founder-note__blockquote mb-4" style={{fontSize: '1.15rem', lineHeight: 1.7, color: '#222'}}>
              Dear Valued Partners and Future Collaborators,<br /><br />
              When we founded Door to Doors, our goal was to transform how businesses approach sourcing and manufacturing in China. As someone who has tackled the complexities of global trade, I know firsthand the challenges you face.<br /><br />
              Door to Doors is not just another sourcing agent; we’re your competitive edge in a dynamic market. Our team’s expertise spans industries like chemicals, textiles, automobiles, and more, ensuring we deliver excellence at every stage. We prioritize transparency, reliability, and innovation, eliminating intermediaries to provide you with the best value. Our “fail fast” approach empowers you to innovate with minimal risk.<br /><br />
              Whether you’re a startup launching your first product or an established company optimizing your supply chain, Door to Doors is here to guide you. We don&apos;t just deliver products – we deliver confidence and success.<br /><br />
              Join us in redefining China sourcing. Let&apos;s turn your manufacturing challenges into opportunities for growth.
            </blockquote>
            <div className="about-one__signature mt-4" style={{borderTop: '1px solid #eee', paddingTop: '1rem'}}>
              <span style={{fontFamily: 'cursive', fontSize: '1.2rem', color: '#0d6efd'}}>Looking forward to partnering with you,</span><br />
              <span className="about-one__name" style={{fontWeight: 600}}>Faraz Khan</span><br />
              <span className="about-one__role" style={{color: '#888'}}>Co-Founder, Door to Doors</span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function Partnerships() {
  const stats = [
    { label: 'Years of Trusted Partnerships', value: 10, suffix: '+', icon: 'icon-handshake' },
    { label: 'Repeat Clients', value: 200, suffix: '+', icon: 'icon-users' },
    { label: 'Industries Served', value: 15, suffix: '+', icon: 'icon-industry' },
    { label: 'Countries Reached', value: 30, suffix: '+', icon: 'icon-globe' },
  ];
  return (
    <SectionWrapper>
      <div className="section-title text-center mb-4">
        <div className="section-title__tagline-box">
          <span className="section-title__tagline">Long-Term Partnerships</span>
        </div>
        <h2 className="section-title__title">Building Relationships, Not Just Transactions</h2>
        <p>Many of our clients have trusted us for years as their go-to partner for China sourcing.</p>
      </div>
      <div className="row g-4">
        {stats.map((stat, idx) => (
          <div className="col-6 col-md-3 text-center" key={stat.label}>
            <div className="p-4 shadow-sm rounded bg-white h-100 wow fadeInUp" data-wow-delay={`${0.1 * idx}s`}>
              <span className={`${stat.icon} mb-2`} style={{fontSize: '2.2rem', color: '#0d6efd'}}></span>
              <div style={{fontSize: '2rem', fontWeight: 'bold'}}>{stat.value}{stat.suffix}</div>
              <div>{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

function OurApproach() {
  const steps = [
    { title: 'Comprehensive Consultation', desc: 'We begin by understanding your product requirements, budget, and goals.' },
    { title: 'Custom Sourcing Strategy', desc: 'Using our extensive network of Chinese manufacturers, we craft a sourcing plan tailored to your needs.' },
    { title: 'Flexible Manufacturing Options', desc: 'From high-volume production to small-batch orders, we match you with the right partners.' },
    { title: 'Quality-Price Balance', desc: 'We optimize costs while maintaining high-quality standards.' },
    { title: 'Continuous Optimization', desc: 'We adapt to market trends and your evolving needs.' },
    { title: 'End-to-End Support', desc: 'From product development to final delivery, we manage every step.' },
    { title: 'Risk Mitigation', desc: 'Our “fail fast” approach enables quick pivots, minimizing risks for innovative products.' },
  ];
  return (
    <SectionWrapper>
      <div className="section-title text-center mb-4">
        <div className="section-title__tagline-box">
          <span className="section-title__tagline">Our Approach</span>
        </div>
        <h2 className="section-title__title">How We Work With You</h2>
      </div>
      <div className="row g-4">
        {steps.map((step, idx) => (
          <div className="col-12 col-md-6 col-lg-4" key={step.title}>
            <div className="p-4 shadow-sm rounded bg-white h-100 wow fadeInUp" data-wow-delay={`${0.1 * idx}s`}>
              <span className="icon-arrow-right mb-3" style={{fontSize: '2.2rem', color: '#0d6efd'}}></span>
              <h4 className="mb-2">{step.title}</h4>
              <p className="mb-0">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

function MissionCommitment() {
  const mission = {
    title: 'Our Mission',
    desc: 'To empower businesses of all sizes with seamless access to China’s manufacturing expertise, helping them bring their product visions to life efficiently and cost-effectively.',
    icon: 'icon-target',
  };
  const commitment = {
    title: 'Our Commitment',
    desc: 'At Door to Doors, your success is our priority. We treat your projects with the care and dedication we’d give our own, understanding the vision and hard work behind every product. Your success defines ours, and we’re committed to helping you achieve your manufacturing goals.',
    icon: 'icon-heart',
  };
  return (
    <SectionWrapper>
      <div className="section-title text-center mb-4">
        <div className="section-title__tagline-box">
          <span className="section-title__tagline">Our Mission & Commitment</span>
        </div>
        <h2 className="section-title__title">Why We Do What We Do</h2>
      </div>
      <div className="row g-4 justify-content-center">
        {[mission, commitment].map((item, idx) => (
          <div className="col-12 col-md-6" key={item.title}>
            <div className="p-4 shadow-sm rounded bg-white h-100 wow fadeInUp" data-wow-delay={`${0.1 * idx}s`}>
              <span className={`${item.icon} mb-3`} style={{fontSize: '2.2rem', color: '#0d6efd'}}></span>
              <h4 className="mb-2">{item.title}</h4>
              <p className="mb-0">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

function Features() {
  const features = [
    { title: 'Comprehensive Expertise', desc: 'From chemicals to electronics, our industry knowledge ensures we handle any challenge.' },
    { title: 'Direct Manufacturing Connections', desc: 'We eliminate middlemen, connecting you with vetted manufacturers for cost savings.' },
    { title: 'End-to-End Solutions', desc: 'From concept to delivery, we manage every aspect of your manufacturing journey.' },
    { title: 'Innovation-Focused Approach', desc: 'Our “fail fast” philosophy supports rapid prototyping and iteration.' },
    { title: 'Transparency and Trust', desc: 'Clear communication and full visibility into costs and processes.' },
    { title: 'Quality Assurance', desc: 'Rigorous quality controls ensure products meet or exceed international standards.' },
    { title: 'Global Reach, Local Expertise', desc: 'With a strong presence in China and a global client base, we bridge logistical and cultural gaps.' },
  ];
  return (
    <SectionWrapper>
      <div className="section-title text-center mb-4">
        <div className="section-title__tagline-box">
          <span className="section-title__tagline">What Sets Us Apart</span>
        </div>
        <h2 className="section-title__title">The Door to Doors Difference</h2>
      </div>
      <div className="row g-4">
        {features.map((feature, idx) => (
          <div className="col-12 col-md-6 col-lg-4 text-center" key={feature.title}>
            <div className="p-4 shadow-sm rounded bg-white h-100 wow fadeInUp" data-wow-delay={`${0.1 * idx}s`}>
              <span className="icon-star mb-3" style={{fontSize: '2.2rem', color: '#0d6efd'}}></span>
              <h4 className="mb-2">{feature.title}</h4>
              <p className="mb-0">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About US">
        <About />
        <FounderNote />
        {/* Replace IndustriesServed with Project component for dynamic categories from Sanity */}
        <section className="section-wrapper py-5">
          <div className="container unified-container">
            <div className="section-title text-center mb-4 wow fadeInDown" data-wow-delay="0.1s">
              <div className="section-title__tagline-box">
                <span className="section-title__tagline">Our Diverse Client Base</span>
              </div>
              <h2 className="section-title__title">Industries We Serve</h2>
              <p className="lead">We proudly serve a wide range of clients, from bold startups to global corporations. Our expertise covers:</p>
            </div>
            <Project />
          </div>
        </section>
        <Partnerships />
        <OurApproach />
        <MissionCommitment />
        <Features />
        <WhyChoose />
        <Testimonial />
        <Cta />
      </Layout>
    </>
  );
}
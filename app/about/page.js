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
    {
      title: 'Comprehensive Consultation',
      desc: 'We begin by understanding your product requirements, budget, and goals.',
      icon: 'fas fa-comments',
      color: '#e11d48'
    },
    {
      title: 'Custom Sourcing Strategy',
      desc: 'Using our extensive network of Chinese manufacturers, we craft a sourcing plan tailored to your needs.',
      icon: 'fas fa-bullseye',
      color: '#0d6efd'
    },
    {
      title: 'Flexible Manufacturing Options',
      desc: 'From high-volume production to small-batch orders, we match you with the right partners.',
      icon: 'fas fa-industry',
      color: '#10b981'
    },
    {
      title: 'Quality-Price Balance',
      desc: 'We optimize costs while maintaining high-quality standards.',
      icon: 'fas fa-balance-scale',
      color: '#f59e0b'
    },
    {
      title: 'Continuous Optimization',
      desc: 'We adapt to market trends and your evolving needs.',
      icon: 'fas fa-chart-line',
      color: '#8b5cf6'
    },
    {
      title: 'End-to-End Support',
      desc: 'From product development to final delivery, we manage every step.',
      icon: 'fas fa-headset',
      color: '#06b6d4'
    },
    {
      title: 'Risk Mitigation',
      desc: 'Our "fail fast" approach enables quick pivots, minimizing risks for innovative products.',
      icon: 'fas fa-shield-alt',
      color: '#ef4444'
    },
  ];

  return (
    <SectionWrapper className="our-approach-section" style={{ background: '#f8fafc' }}>
      <div className="section-title text-center mb-5">
        <div className="section-title__tagline-box">
          <span className="section-title__tagline" style={{
            color: '#e11d48',
            fontWeight: '600',
            fontSize: '0.9rem',
            letterSpacing: '1px'
          }}>OUR APPROACH</span>
        </div>
        <h2 className="section-title__title" style={{
          color: '#1e293b',
          fontWeight: '700',
          fontSize: '2.5rem',
          marginBottom: '1rem'
        }}>How We Work</h2>
        <p style={{
          color: '#64748b',
          fontSize: '1.1rem',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>Our proven process ensures successful outcomes for every project.</p>
      </div>

      <div className="row g-4 justify-content-center">
        {steps.map((step, idx) => {
          let colClass = 'col-12 col-md-6 col-lg-4';
          if (idx === 6) {
            colClass = 'col-12 col-md-6 col-lg-4 d-flex justify-content-center';
          }

          return (
            <div className={colClass} key={step.title}>
              <div
                className="approach-card wow fadeInUp"
                data-wow-delay={`${0.1 * idx}s`}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '2rem',
                  height: '100%',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                }}
              >
                <div
                  className="approach-icon mb-4"
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '12px',
                    background: `linear-gradient(135deg, ${step.color} 0%, ${step.color}dd 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    boxShadow: `0 4px 12px ${step.color}40`
                  }}
                >
                  <i
                    className={step.icon}
                    style={{
                      fontSize: '1.8rem',
                      color: '#ffffff',
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                    }}
                  ></i>
                </div>
                <h4
                  className="approach-title mb-3"
                  style={{
                    color: '#1e293b',
                    fontWeight: '700',
                    fontSize: '1.25rem',
                    lineHeight: '1.3',
                    marginBottom: '1rem'
                  }}
                >
                  {step.title}
                </h4>
                <p
                  className="approach-desc mb-0"
                  style={{
                    color: '#64748b',
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    margin: 0
                  }}
                >
                  {step.desc}
                </p>
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: `linear-gradient(90deg, ${step.color} 0%, ${step.color}dd 100%)`,
                    borderRadius: '0 0 16px 16px'
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .approach-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .approach-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .approach-icon {
          transition: all 0.3s ease;
        }

        .approach-card:hover .approach-icon {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .approach-card {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </SectionWrapper>
  );
}

function MissionCommitment() {
  const mission = {
    title: 'Our Mission',
    desc: 'To empower businesses of all sizes with  access to China\'s manufacturing expertise, helping them bring their product visions to life efficiently and cost-effectively.',
    icon: 'icon-target',
  };
  const commitment = {
    title: 'Our Commitment',
    desc: 'At Door to Door, your success is our priority. We treat your projects with the care and dedication we\'d give our own, understanding the vision and hard work behind every product. Your success defines ours, and we\'re committed to helping you achieve your manufacturing goals.',
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
    { 
      title: 'Comprehensive Expertise', 
      desc: 'From chemicals to electronics, our industry knowledge ensures we handle any challenge.',
      icon: 'fas fa-cogs',
      color: '#0d6efd'
    },
    { 
      title: 'Direct Manufacturing Connections', 
      desc: 'We eliminate middlemen, connecting you with vetted manufacturers for cost savings.',
      icon: 'fas fa-handshake',
      color: '#0d6efd'
    },
    { 
      title: 'End-to-End Solutions', 
      desc: 'From concept to delivery, we manage every aspect of your manufacturing journey.',
      icon: 'fas fa-route',
      color: '#0d6efd'
    },
    { 
      title: 'Innovation-Focused Approach', 
      desc: 'Our "fail fast" philosophy supports rapid prototyping and iteration.',
      icon: 'fas fa-lightbulb',
      color: '#0d6efd'
    },
    { 
      title: 'Transparency and Trust', 
      desc: 'Clear communication and full visibility into costs and processes.',
      icon: 'fas fa-eye',
      color: '#0d6efd'
    },
    { 
      title: 'Quality Assurance', 
      desc: 'Rigorous quality controls ensure products meet or exceed international standards.',
      icon: 'fas fa-award',
      color: '#0d6efd'
    },
    { 
      title: 'Global Reach, Local Expertise', 
      desc: 'With a strong presence in China and a global client base, we bridge logistical and cultural gaps.',
      icon: 'fas fa-globe',
      color: '#0d6efd'
    },
  ];
  
  return (
    <SectionWrapper className="features-section" style={{ background: '#ffffff' }}>
      <div className="section-title text-center mb-5">
        <div className="section-title__tagline-box">
          <span className="section-title__tagline" style={{ 
            color: '#e11d48', 
            fontWeight: '600', 
            fontSize: '0.9rem',
            letterSpacing: '1px'
          }}>WHAT SETS US APART</span>
        </div>
        <h2 className="section-title__title" style={{ 
          color: '#1e293b', 
          fontWeight: '700',
          fontSize: '2.5rem',
          marginBottom: '1rem'
        }}>The Door to Door Difference</h2>
        <p style={{ 
          color: '#64748b', 
          fontSize: '1.1rem',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>Discover what makes us your trusted partner in China sourcing and manufacturing.</p>
      </div>
      
      <div className="row g-4 justify-content-center">
        {features.map((feature, idx) => {
          // Determine column classes based on position
          let colClass = 'col-12 col-md-6 col-lg-4';
          if (idx === 6) { // Last item (Global Reach, Local Expertise)
            colClass = 'col-12 col-md-6 col-lg-4 d-flex justify-content-center';
          }
          
          return (
            <div className={colClass} key={feature.title}>
              <div 
                className="feature-card wow fadeInUp" 
                data-wow-delay={`${0.1 * idx}s`}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '2rem',
                  height: '100%',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  textAlign: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                }}
              >
                {/* Icon with blue background */}
                <div 
                  className="feature-icon mb-4"
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '12px',
                    background: `linear-gradient(135deg, ${feature.color} 0%, ${feature.color}dd 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem auto',
                    boxShadow: `0 4px 12px ${feature.color}40`
                  }}
                >
                  <i 
                    className={feature.icon}
                    style={{
                      fontSize: '1.8rem',
                      color: '#ffffff',
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                    }}
                  ></i>
                </div>
                
                {/* Content */}
                <h4 
                  className="feature-title mb-3"
                  style={{
                    color: '#1e293b',
                    fontWeight: '700',
                    fontSize: '1.25rem',
                    lineHeight: '1.3',
                    marginBottom: '1rem'
                  }}
                >
                  {feature.title}
                </h4>
                
                <p 
                  className="feature-desc mb-0"
                  style={{
                    color: '#64748b',
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    margin: 0
                  }}
                >
                  {feature.desc}
                </p>
                
                {/* Subtle accent line */}
                <div 
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: `linear-gradient(90deg, ${feature.color} 0%, ${feature.color}dd 100%)`,
                    borderRadius: '0 0 16px 16px'
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Add some custom CSS for better animations */}
      <style jsx>{`
        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .feature-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .feature-icon {
          transition: all 0.3s ease;
        }
        
        .feature-card:hover .feature-icon {
          transform: scale(1.1) rotate(15deg);
        }
        
        @media (max-width: 768px) {
          .feature-card {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </SectionWrapper>
  );
}

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About US">
        <About />
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
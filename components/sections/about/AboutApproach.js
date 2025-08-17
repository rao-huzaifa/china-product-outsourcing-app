import React from 'react';

const steps = [
  { title: 'Comprehensive Consultation', desc: 'We begin by understanding your product requirements, budget, and goals.', icon: 'icon-consult' },
  { title: 'Custom Sourcing Strategy', desc: 'Using our extensive network of Chinese manufacturers, we craft a sourcing plan tailored to your needs.', icon: 'icon-strategy' },
  { title: 'Flexible Manufacturing Options', desc: 'From high-volume production to small-batch orders, we match you with the right partners.', icon: 'icon-factory' },
  { title: 'Quality-Price Balance', desc: 'We optimize costs while maintaining high-quality standards.', icon: 'icon-balance' },
  { title: 'Continuous Optimization', desc: 'We adapt to market trends and your evolving needs.', icon: 'icon-refresh' },
  { title: 'End-to-End Support', desc: 'From product development to final delivery, we manage every step.', icon: 'icon-support' },
  { title: 'Risk Mitigation', desc: 'Our comprehensive quality control and supplier vetting process minimizes risks and ensures successful project outcomes.', icon: 'icon-shield' },
];

export default function AboutApproach() {
  return (
    <section className="about-approach wow fadeInUp" data-wow-delay="600ms">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-xl-8 text-center">
            <h2 className="about-approach__title mb-3">Our Approach</h2>
            <p className="about-approach__desc">
              Whether you’re new to importing from China or looking to streamline your supply chain, Door to Door crafts solutions to drive your business forward.
            </p>
          </div>
        </div>
        <div className="row about-approach__timeline g-4">
          {steps.map((step, idx) => (
            <div className="col-12 col-md-6 col-lg-4" key={step.title}>
              <div className="about-approach__step p-4 shadow-sm rounded h-100 wow fadeInUp" data-wow-delay={`${0.1 * idx}s`}>
                <div className="about-approach__step-icon mb-3">
                  <span className={step.icon} style={{fontSize: '2.2rem'}}></span>
                  <span className="about-approach__step-number ms-2">{idx + 1}</span>
                </div>
                <h4 className="about-approach__step-title mb-2">{step.title}</h4>
                <p className="about-approach__step-desc mb-0">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
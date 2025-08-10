import React from 'react';

const features = [
  { title: 'Personalized Service', desc: 'Tailored solutions to meet your unique needs.', icon: 'icon-user-check' },
  { title: 'Transparent Communication', desc: 'Clear updates throughout the sourcing and manufacturing process.', icon: 'icon-chat' },
  { title: 'Dedicated Account Managers', desc: 'Ensuring  operations and support.', icon: 'icon-briefcase' },
  { title: 'Regular Progress Updates', desc: 'Detailed reports to keep you informed.', icon: 'icon-report' },
];

export default function AboutClientApproach() {
  return (
    <section className="about-client-approach wow fadeInUp" data-wow-delay="400ms">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-xl-8 text-center">
            <h2 className="about-client-approach__title mb-3">Client-Centric Approach</h2>
            <p className="about-client-approach__desc">
              At Door to Door, we put our clients first with a service model built on trust, transparency, and support.
            </p>
          </div>
        </div>
        <div className="row g-4 about-client-approach__grid">
          {features.map((feature, idx) => (
            <div className="col-12 col-md-6 col-lg-3 text-center" key={feature.title}>
              <div className="about-client-approach__item p-4 shadow-sm rounded h-100 wow fadeInUp" data-wow-delay={`${0.1 * idx}s`}>
                <span className={`about-client-approach__icon ${feature.icon} mb-3`} style={{fontSize: '2.2rem'}}></span>
                <h4 className="about-client-approach__feature-title mb-2">{feature.title}</h4>
                <p className="about-client-approach__feature-desc mb-0">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
import React from 'react';

const features = [
  { title: 'Comprehensive Expertise', desc: 'From chemicals to electronics, our industry knowledge ensures we handle any challenge.', icon: 'icon-expertise' },
  { title: 'Direct Manufacturing Connections', desc: 'We eliminate middlemen, connecting you with vetted manufacturers for cost savings.', icon: 'icon-link' },
  { title: 'End-to-End Solutions', desc: 'From concept to delivery, we manage every aspect of your manufacturing journey.', icon: 'icon-end2end' },
  { title: 'Innovation-Focused Approach', desc: 'Our “fail fast” philosophy supports rapid prototyping and iteration.', icon: 'icon-innovation' },
  { title: 'Transparency and Trust', desc: 'Clear communication and full visibility into costs and processes.', icon: 'icon-transparency' },
  { title: 'Quality Assurance', desc: 'Rigorous quality controls ensure products meet or exceed international standards.', icon: 'icon-quality' },
  { title: 'Global Reach, Local Expertise', desc: 'With a strong presence in China and a global client base, we bridge logistical and cultural gaps.', icon: 'icon-global' },
];

export default function AboutFeatures() {
  return (
    <section className="about-features wow fadeInUp" data-wow-delay="800ms">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-xl-8 text-center">
            <h2 className="about-features__title mb-3">What Sets Us Apart</h2>
            <p className="about-features__desc">
              Discover the REO Trades difference. We combine expertise, innovation, and transparency to deliver exceptional results.
            </p>
          </div>
        </div>
        <div className="row g-4 about-features__grid">
          {features.map((feature, idx) => (
            <div className="col-12 col-md-6 col-lg-4 text-center" key={feature.title}>
              <div className="about-features__item p-4 shadow-sm rounded h-100 wow fadeInUp" data-wow-delay={`${0.1 * idx}s`}>
                <span className={`about-features__icon ${feature.icon} mb-3`} style={{fontSize: '2.2rem'}}></span>
                <h4 className="about-features__feature-title mb-2">{feature.title}</h4>
                <p className="about-features__feature-desc mb-0">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
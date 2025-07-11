import React from 'react';

const stats = [
  { label: 'Years of Trusted Partnerships', value: 10, suffix: '+', icon: 'icon-handshake' },
  { label: 'Repeat Clients', value: 200, suffix: '+', icon: 'icon-users' },
  { label: 'Industries Served', value: 15, suffix: '+', icon: 'icon-industry' },
  { label: 'Countries Reached', value: 30, suffix: '+', icon: 'icon-globe' },
];

export default function AboutPartnerships() {
  return (
    <section className="about-partnerships wow fadeInUp" data-wow-delay="500ms">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-xl-8 text-center">
            <h2 className="about-partnerships__title mb-3">Long-Term Partnerships</h2>
            <p className="about-partnerships__desc">
              At REO Trades, we aim to build lasting relationships, not just transactions. Many of our clients have trusted us for years as their go-to partner for China sourcing.
            </p>
          </div>
        </div>
        <div className="row g-4 about-partnerships__stats">
          {stats.map((stat, idx) => (
            <div className="col-6 col-md-3 text-center" key={stat.label}>
              <div className="about-partnerships__stat-item p-4 shadow-sm rounded h-100 wow fadeInUp" data-wow-delay={`${0.1 * idx}s`}>
                <span className={`about-partnerships__icon ${stat.icon} mb-2`} style={{fontSize: '2.2rem'}}></span>
                <div className="about-partnerships__stat-value" style={{fontSize: '2rem', fontWeight: 'bold'}}>{stat.value}{stat.suffix}</div>
                <div className="about-partnerships__stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
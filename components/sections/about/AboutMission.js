import React from 'react';

const mission = {
  title: 'Our Mission',
  desc: 'To empower businesses of all sizes with  access to China’s manufacturing expertise, helping them bring their product visions to life efficiently and cost-effectively.',
  icon: 'icon-target',
};

const commitment = {
  title: 'Our Commitment',
  desc: 'At Door to Door, your success is our priority. We treat your products with the care and dedication we&apos;d give our own, understanding the vision and hard work behind every product. Your success defines ours, and we&apos;re committed to helping you achieve your manufacturing goals.',
  icon: 'icon-heart',
};

export default function AboutMission() {
  return (
    <section className="about-mission wow fadeInUp" data-wow-delay="700ms">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-xl-8 text-center">
            <h2 className="about-mission__title mb-3">Our Mission & Commitment</h2>
            <p className="about-mission__desc">
              Experience the difference of working with a China sourcing company that truly understands your needs.
            </p>
          </div>
        </div>
        <div className="row g-4 about-mission__cards justify-content-center">
          {[mission, commitment].map((item, idx) => (
            <div className="col-12 col-md-6" key={item.title}>
              <div className="about-mission__card p-4 shadow-sm rounded h-100 wow fadeInUp" data-wow-delay={`${0.1 * idx}s`}>
                <span className={`about-mission__icon ${item.icon} mb-3`} style={{fontSize: '2.2rem'}}></span>
                <h4 className="about-mission__card-title mb-2">{item.title}</h4>
                <p className="about-mission__card-desc mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
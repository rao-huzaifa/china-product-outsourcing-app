import React from 'react';

const industries = [
  { name: 'Chemical Industries', icon: 'icon-lab' },
  { name: 'Automobile Manufacturers', icon: 'icon-car' },
  { name: 'Clothing & Textile', icon: 'icon-tshirt' },
  { name: 'Tool & Equipment', icon: 'icon-tools' },
  { name: 'Cement & Construction', icon: 'icon-building' },
  { name: 'Consumer Goods', icon: 'icon-box' },
  { name: 'Beauty Products', icon: 'icon-beauty' },
  { name: 'Skincare', icon: 'icon-skincare' },
  { name: 'Electrical', icon: 'icon-electrical' },
  { name: 'Footwear', icon: 'icon-shoe' },
  { name: 'Electronics', icon: 'icon-electronics' },
  { name: 'Mobile Accessories', icon: 'icon-mobile' },
  { name: 'Furniture', icon: 'icon-furniture' },
  { name: 'Eyewear', icon: 'icon-eyewear' },
  { name: 'Pharmaceuticals', icon: 'icon-pharma' },
  { name: 'Metal Products', icon: 'icon-metal' },
  { name: 'Mobiles & Tablets', icon: 'icon-tablet' },
];

export default function AboutIndustries() {
  return (
    <section className="about-industries wow fadeInUp" data-wow-delay="300ms">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-xl-8 text-center">
            <h2 className="about-industries__title mb-3">Our Diverse Client Base</h2>
            <p className="about-industries__desc">
              We proudly serve a wide range of clients, from bold startups to global corporations. Our expertise covers:
            </p>
          </div>
        </div>
        <div className="row g-3 about-industries__grid">
          {industries.map((industry, idx) => (
            <div className="col-6 col-md-4 col-lg-3 text-center" key={industry.name}>
              <div className="about-industries__item p-3 shadow-sm rounded h-100 wow fadeInUp" data-wow-delay={`${0.1 * idx}s`}>
                <span className={`about-industries__icon ${industry.icon} mb-2`} style={{fontSize: '2rem'}}></span>
                <div className="about-industries__name">{industry.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
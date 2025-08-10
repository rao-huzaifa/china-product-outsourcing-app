"use client";
import Link from "next/link"
export default function ServicesOne() {
    return (
        <>
            {/*Services One Start*/}
            <section className="services-one">
                <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                    <span className="section-title__tagline">WHAT WE DO</span>
                    </div>
                    <h2 className="section-title__title">
                     Sourcing from China<br /> Managed by Experts
                    </h2>
                </div>
                <div className="row">
                    {/*Services One Single Start*/}
                    <div
                    className="col-xl-4 col-lg-4 wow fadeInLeft"
                    data-wow-delay="100ms"
                    >
                    <div className="services-one__single">
                        <div className="services-one__icon">
                        <span className="icon-postbox" />
                        </div>
                        <h3 className="services-one__title">
                        Manufacturer Selection
                        </h3>
                        <p>We carefully select top Chinese manufacturers tailored to your product needs.</p>
                        {/* Removed Read More button */}
                    </div>
                    </div>
                    {/*Services One Single End*/}
                    {/*Services One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                    <div className="services-one__single">
                        <div className="services-one__icon">
                        <span className="icon-customer-service" />
                        </div>
                        <h3 className="services-one__title">
                        Production Oversight
                        </h3>
                        <p>Our China-based team monitors manufacturing for quality and timeliness.</p>
                        {/* Removed Read More button */}
                    </div>
                    </div>
                    {/*Services One Single End*/}
                    {/*Services One Single Start*/}
                    <div
                    className="col-xl-4 col-lg-4 wow fadeInRight"
                    data-wow-delay="300ms"
                    >
                    <div className="services-one__single">
                        <div className="services-one__icon">
                        <span className="icon-container" />
                        </div>
                        <h3 className="services-one__title">
                        Quality Inspections
                        </h3>
                        <p>Rigorous checks ensure your products meet the highest standards before leaving the factory.</p>
                    </div>
                    </div>
                    {/*Services One Single End*/}
                </div>
                </div>
            </section>
            {/*Services One End*/}
            <style jsx>{`
              .services-one__single {
                box-shadow: 0 6px 32px 0 rgba(0,0,0,0.07);
                transition: transform 0.25s cubic-bezier(.4,2,.6,1), box-shadow 0.25s;
                background: #fff;
              }
              .services-one__single:hover {
                transform: translateY(-8px) scale(1.03);
                box-shadow: 0 12px 40px 0 rgba(0,0,0,0.13);
                border-color: var(--onpoint-primary);
              }
              .services-one__icon {
                background: linear-gradient(135deg, var(--onpoint-primary) 0%, var(--onpoint-extra) 100%);
                box-shadow: 0 2px 12px 0 rgba(0,0,0,0.10);
                border: 2px solid #fff;
              }
              .services-one__icon > span {
                font-size: 54px;
                color: var(--onpoint-black);
              }
              .services-one__title {
                font-size: 1.5rem;
                font-weight: 800;
                margin-bottom: 24px;
                letter-spacing: -0.5px;
              }
              .services-one__single p {
                color: #6b7280;
                font-size: 1.08rem;
                margin-bottom: 0;
                min-height: 60px;
              }
              @media (max-width: 991px) {
                .services-one__single {
                  margin-bottom: 32px;
                  padding: 56px 18px 32px;
                }
                .services-one__icon {
                  width: 64px;
                  height: 64px;
                  top: -32px;
                }
                .services-one__icon > span {
                  font-size: 38px;
                }
              }
            `}</style>
        </>
    )
}

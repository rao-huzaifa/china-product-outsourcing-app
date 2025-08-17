'use client'
import Image from 'next/image'

export default function ProcessOne() {
    return (
        <>
            {/*Process One Start*/}
            <section className="process-one">
                <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                    <span className="section-title__tagline">OUR PROCESS</span>
                    </div>
                    <h2 className="section-title__title">
                    Your Trusted China Sourcing<br /> Partner for Success
                    </h2>
                </div>
                <div className="row">
                    {/*Process One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                    <div className="process-one__single">
                        <div className="process-one__shape-1">
                        <Image src="/assets/images/shapes/process-one-shape-1.png" alt="" width={100} height={100} />
                        </div>
                        <div className="process-one__count" />
                        <h3 className="process-one__title">Manufacturer Selection</h3>
                        <div className="process-one__icon-and-text">
                        <div className="icon">
                            <span className="icon-crane" />
                        </div>
                        <p>
                            We carefully vet and select top Chinese manufacturers based on your specific product requirements, quality standards, and production capacity needs.
                        </p>
                        </div>
                    </div>
                    </div>
                    {/*Process One Single End*/}
                    {/*Process One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                    <div className="process-one__single">
                        <div className="process-one__shape-1">
                        <Image src="/assets/images/shapes/process-one-shape-1.png" alt="" width={100} height={100} />
                        </div>
                        <div className="process-one__count" />
                        <h3 className="process-one__title">Quality Control & Production</h3>
                        <div className="process-one__icon-and-text">
                        <div className="icon">
                            <span className="icon-shipping" />
                        </div>
                        <p>
                            Our China-based team monitors production progress, conducts quality inspections, and ensures your products meet international standards before shipment.
                        </p>
                        </div>
                    </div>
                    </div>
                    {/*Process One Single End*/}
                    {/*Process One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                    <div className="process-one__single">
                        <div className="process-one__count" />
                        <h3 className="process-one__title">Logistics & Delivery</h3>
                        <div className="process-one__icon-and-text">
                        <div className="icon">
                            <span className="icon-postbox" />
                        </div>
                        <p>
                            We handle all logistics, customs clearance, and final delivery to your doorstep, providing real-time tracking throughout the entire journey.
                        </p>
                        </div>
                    </div>
                    </div>
                    {/*Process One Single End*/}
                </div>
                </div>
            </section>
            {/*Process One End*/}
        </>

    )
}


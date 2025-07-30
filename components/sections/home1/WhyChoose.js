import Link from "next/link"
export default function WhyChoose() {
    return (
        <>
            {/*Why Choose One Start*/}
            <section className="why-choose-one">
                <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                    <div className="why-choose-one__left">
                        <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Why Choose Door to Door?</span>
                        </div>
                        <h2 className="section-title__title">
                            Your Strategic Partner for Seamless China Sourcing
                        </h2>
                        </div>
                        <p className="why-choose-one__text">
                            As your strategic manufacturing partner, we make importing from China simple, cost-effective, and reliable.<br />
                            Whether you&apos;re a small business or a large enterprise, Door to Door delivers customized solutions to meet your unique needs.
                        </p>
                        <div className="why-choose-one__offer-list" style={{marginTop: '1.5rem', marginBottom: '1.5rem'}}>
                            <h3 className="why-choose-one__offer-title" style={{fontWeight: 'bold', marginBottom: '1rem'}}>What We Offer:</h3>
                            <ul className="why-choose-one__offer-items" style={{listStyle: 'disc inside', paddingLeft: '1rem'}}>
                                <li><strong>Expert China Sourcing:</strong> For chemicals, automobiles, clothing, tools, and more.</li>
                                <li><strong>Quality Control:</strong> Every product meets your specifications and international standards.</li>
                                <li><strong>Cost Optimization:</strong> Competitive prices to boost your profitability.</li>
                                <li><strong>Product Development:</strong> Concept-to-prototype expertise.</li>
                                <li><strong>Supply Chain Management:</strong> Streamlined sourcing to delivery.</li>
                                <li><strong>Regulatory Compliance:</strong> Navigate Chinese and global regulations.</li>
                                <li><strong>Customized Solutions:</strong> Bulk or small-batch production.</li>
                            </ul>
                        </div>
                        <div className="why-choose-one__btn-box">
                        <Link href="/about" className="thm-btn why-choose-one__btn">
                            Read more
                            <span />
                        </Link>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                    <div className="why-choose-one__right">
                        <div
                        className="why-choose-one__img wow slideInRight"
                        data-wow-delay="100ms"
                        data-wow-duration="2500ms"
                        >
                        <img
                            src="assets/images/resources/why-choose-one-img-1.jpg"
                            alt=""
                        />
                        <div className="why-choose-one__delivery-box">
                            <div className="icon">
                            <span className="icon-airplane" />
                            </div>
                            <p>
                            2 dAYS
                            <br /> Delivery
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/*Why Choose One End*/}
        </>


    )
}

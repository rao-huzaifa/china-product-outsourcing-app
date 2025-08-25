'use client'
import Layout from "../../../../components/layout/Layout"
import Link from "next/link"
import Image from 'next/image'

export default function OtherServices() {
    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our Services">
            {/* Services Content */}
            <section className="services-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="services-details__left">
                                <div className="services-details__img">
                                    <Image 
                                        src="/assets/images/services/services-details-img-1.jpg" 
                                        alt="Other Services" 
                                        width={800} 
                                        height={400}
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                </div>
                                <div className="services-details__content">
                                    <h3 className="services-details__title">Guangzhou Wholesale Market Guided Tours</h3>
                                    <p className="services-details__text-1">
                                        Experience the vibrant wholesale markets of Guangzhou with our expert-guided tours. 
                                        As China's largest trading hub, Guangzhou offers unparalleled access to thousands 
                                        of suppliers and manufacturers across diverse product categories.
                                    </p>
                                    <p className="services-details__text-2">
                                        Our experienced local guides will take you through the most reputable wholesale 
                                        markets, introduce you to trusted suppliers, and help you navigate the complex 
                                        landscape of sourcing in China. Whether you're a first-time buyer or an experienced 
                                        importer, our tours provide invaluable insights and connections.
                                    </p>
                                    
                                    <div className="services-details__points">
                                        <h4>What Our Guided Tours Include:</h4>
                                        <ul className="list-unstyled services-details__points-list">
                                            <li>
                                                <div className="icon">
                                                    <i className="fa fa-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Professional Local Guides</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="fa fa-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Access to Premium Wholesale Markets</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="fa fa-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Supplier Introduction & Negotiation Support</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="fa fa-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Quality Assessment & Product Verification</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="fa fa-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Market Analysis & Pricing Insights</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="fa fa-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Logistics & Shipping Coordination</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="services-details__bottom">
                                        <div className="services-details__bottom-left">
                                            <h4>Why Choose Our Guangzhou Market Tours?</h4>
                                            <p>
                                                Guangzhou is home to some of the world's largest wholesale markets, including 
                                                the famous Baiyun International Clothing Market, Yide Road Stationery Market, 
                                                and the Guangzhou International Trade Center. Our guided tours ensure you 
                                                make the most of your sourcing trip with insider knowledge and established 
                                                relationships.
                                            </p>
                                        </div>
                                        <div className="services-details__bottom-right m-5">
                                            <Link href="/contact" className="thm-btn">
                                                Book Your Tour
                                                <span></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="services-details__right">
                                <div className="services-details__sidebar">
                                    <div className="services-details__sidebar-single">
                                        <h4 className="services-details__sidebar-title">All Services</h4>
                                        <ul className="services-details__sidebar-list list-unstyled">
                                            <li>
                                                <Link href="/express-freight-solutions">Express Freight Solutions</Link>
                                            </li>
                                            <li>
                                                <Link href="/quick-move-logistics">Quick Move Logistics</Link>
                                            </li>
                                            <li>
                                                <Link href="/speedy-dispatch">Speedy Dispatch</Link>
                                            </li>
                                            <li>
                                                <Link href="/swift-supply-chain">Swift Supply Chain</Link>
                                            </li>
                                            <li>
                                                <Link href="/on-point-distribution">On Point Distribution</Link>
                                            </li>
                                            <li className="active">
                                                <Link href="/other-services">Other Services</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="services-details__sidebar-single">
                                        <div className="services-details__sidebar-img">
                                            <Image 
                                                src="/assets/images/services/services-details-get-touch-bg-img.jpg" 
                                                alt="Get in Touch" 
                                                width={300} 
                                                height={200}
                                                style={{ width: '100%', height: 'auto' }}
                                            />
                                            <div className="services-details__sidebar-img-content">
                                                <h4>Need Help?</h4>
                                                <p>Get in touch with our team for personalized assistance</p>
                                                <Link href="/contact" className="thm-btn">
                                                    Contact Us
                                                    <span></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

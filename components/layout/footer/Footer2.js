"use client"
import Link from "next/link"
import Image from 'next/image'
import { useState } from 'react'
import { createSanityDocument } from '../../../lib/sanity'

export default function Footer2() {
    const [form, setForm] = useState({ email: '' })
    const [status, setStatus] = useState('idle')
    const [error, setError] = useState('')

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
        setError('')
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setStatus('loading')
        setError('')
        if (!form.email) {
            setError('Please enter your email.')
            setStatus('idle')
            return
        }
        try {
            await createSanityDocument('newsletterSubscription', form)
            setStatus('success')
            setForm({ email: '' })
        } catch (err) {
            setStatus('error')
            setError('Something went wrong. Please try again.')
        }
    }

    return (
        <>
            {/*Site Footer Start*/}
            <footer className="site-footer-two">
                <div className="site-footer-two__shape-1">
                <Image src="/assets/images/shapes/site-footer-two-shape-1.png" alt="" width={100} height={100} />
                </div>
                <div className="container">
                <div className="site-footer-two__top">
                    <div className="row">
                    <div className="col-xl-4">
                        <div className="site-footer-two__top-left">
                        <h3 className="site-footer-two__top-title">
                            Have a <span>project</span> in mind?
                        </h3>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="site-footer-two__top-right">
                        <form onSubmit={handleSubmit} className="footer-widget-two__newsletter-form mc-form" noValidate>
                            <div className="footer-widget-two__newsletter-form-input-box">
                            <input type="email" placeholder="Enter Your Email" name="email" value={form.email} onChange={handleChange} required />
                            <button type="submit" className="footer-widget-two__newsletter-btn thm-btn" disabled={status==='loading'}>
                                Subscribe Now
                                <span />
                            </button>
                            </div>
                        </form>
                        <div className="mc-form__response" />
                        {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
                        {status==='success' && <div style={{ color: 'green', marginTop: 8 }}>Thank you for subscribing!</div>}
                        {status==='error' && <div style={{ color: 'red', marginTop: 8 }}>Something went wrong. Please try again.</div>}
                        </div>
                    </div>
                    </div>
                </div>
                <div className="site-footer-two__middle">
                    <div className="row">
                    <div
                        className="col-xl-5 col-lg-6 col-md-6 wow fadeInUp"
                        data-wow-delay="100ms"
                    >
                        <div className="footer-widget-two__column footer-widget-two__about">
                        <div className="footer-widget-two__logo">
                            <Link href="/">
                            <Image src="/assets/images/resources/for blackbg logo.png" alt="Door to Door Footer Logo" width={180} height={60} />
                            </Link>
                        </div>
                        <p className="footer-widget-two__text">
                            It is a long established fact that a reader
                            <br />
                            will be distracted Empowering{" "}
                        </p>
                        <div className="footer-widget-two__social">
                            <Link href="#">
                            <span className="icon-instagram" />
                            </Link>
                            <Link href="#">
                            <span className="icon-facebook-f" />
                            </Link>
                            <Link href="#">
                            <span className="icon-Vector" />
                            </Link>
                            <Link href="#">
                            <span className="icon-linkedin-in" />
                            </Link>
                        </div>
                        </div>
                    </div>
                    <div
                        className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                        data-wow-delay="200ms"
                    >
                        <div className="footer-widget__column footer-widget-two__services">
                        <div className="footer-widget-two__title-box">
                            <h3 className="footer-widget-two__title">Services</h3>
                        </div>
                        <ul className="footer-widget-two__services-list list-unstyled">
                            <li>
                            <Link href="/express-freight-solutions">
                                <span className="icon-angle-left" />
                                Express Freight Solutions
                            </Link>
                            </li>
                            <li>
                            <Link href="/quick-move-logistics">
                                <span className="icon-angle-left" />
                                Rapid Delivery Services
                            </Link>
                            </li>
                            <li>
                            <Link href="/speedy-dispatch">
                                <span className="icon-angle-left" />
                                Speedy Haulage
                            </Link>
                            </li>
                            <li>
                            <Link href="/on-point-distribution">
                                <span className="icon-angle-left" />
                                Reliable Transporters
                            </Link>
                            </li>
                            <li>
                            <Link href="/swift-supply-chain">
                                <span className="icon-angle-left" />
                                Swift Ship Solutions
                            </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div
                        className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                        data-wow-delay="300ms"
                    >
                        <div className="footer-widget-two__column footer-widget-two__contact">
                        <div className="footer-widget-two__title-box">
                            <h3 className="footer-widget-two__title">Contact</h3>
                        </div>
                        <ul className="footer-widget-two__contact-list list-unstyled">
                            <li>
                            <div className="icon">
                                <span className="icon-envolop email-icon" />
                            </div>
                            <p>
                                <Link href="mailto:debra.holt@example.com,">
                                debra.holt@example.com,
                                </Link>
                            </p>
                            </li>
                            <li>
                            <div className="icon">
                                <span className="icon-location location-icon" />
                            </div>
                            <p>3891 Ranchview Dr. Richardson</p>
                            </li>
                            <li>
                            <div className="icon">
                                <span className="icon-call phone-call" />
                            </div>
                            <p>
                                <Link href="tel:01245789321">01245789321,</Link>{" "}
                                <Link href="tel:012457895146">012457895146</Link>
                            </p>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="site-footer-two__bottom">
                <div className="container">
                    <div className="site-footer-two__bottom-inner">
                    <p className="site-footer-two__bottom-text">
                        © Yoursitename 2024 | All Rights Reserved
                    </p>
                    <ul className="list-unstyled site-footer-two__bottom-menu">
                        <li>
                        <Link href="/about">Trams &amp; Condition</Link>
                        </li>
                        <li>
                        <Link href="/about">Privacy Policy</Link>
                        </li>
                        <li>
                        <Link href="/contact">Contact Us</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </footer>
            {/*Site Footer End*/}
        </>


    )
}

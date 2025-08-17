'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@sanity/client'
import Link from "next/link"
import Image from 'next/image'
import { createSanityDocument } from '../../../lib/sanity'

// Helper function to capitalize first letter
const capitalizeFirstLetter = (string) => {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export default function Footer1() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const sanity = createClient({
            projectId: 'hjoc1p23',
            dataset: 'production',
            apiVersion: '2024-07-08',
            useCdn: true,
        })
        sanity.fetch(`*[_type == "projectCategory"] | order(title asc){ title, slug }`).then(setCategories)
    }, [])

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
        <footer className="site-footer">
            <div className="site-footer__shape-1 float-bob-y">
            <Image src="/assets/images/shapes/footer-shape-1.png" alt="" width={100} height={100} />
            </div>
            <div className="site-footer__top">
            <div className="container">
                <div className="site-footer__top-inner">
                <div className="row">
                    <div
                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="100ms"
                    >
                    <div className="footer-widget__column footer-widget__about">
                        <div className="footer-widget__logo">
                        <Link href="/">
                            <Image
                            src="/assets/images/resources/for blackbg logo.png"
                            alt="Door to Door Logo"
                            width={180}
                            height={60}
                            />
                        </Link>
                        </div>
                        <p className="footer-widget__about-text">
                        It is a long established fact that a reader Empowering
                        Communities
                        </p>
                        <ul className="footer-widget__about-contact list-unstyled">
                        <li>
                            <div className="icon">
                            <span className="icon-envolop email-icon" />
                            </div>
                            <p>
                            <Link href="mailto:debra.holt@example.com">
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
                            <Link href="tel:0192584341342">0192584341342</Link>
                            </p>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div
                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="200ms"
                    >
                    <div className="footer-widget__column footer-widget__company">
                        <div className="footer-widget__title-box">
                        <h3 className="footer-widget__title">About Company</h3>
                        </div>
                        <ul className="footer-widget__company-list list-unstyled">
                        <li>
                            <Link href="/about">About Us</Link>
                        </li>
                        <li>
                            <Link href="/faq">FAQ</Link>
                        </li>
                        <li>
                            <Link href="/testimonials">Testimonial</Link>
                        </li>
                        <li>
                            <Link href="/services">Service</Link>
                        </li>
                        <li>
                            <Link href="/blog">Blog And News</Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div
                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="300ms"
                    >
                    <div className="footer-widget__column footer-widget__services">
                        <div className="footer-widget__title-box">
                        <h3 className="footer-widget__title">Products</h3>
                        </div>
                        {categories.length > 0 ? (
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}>
                                {[0, 1].map(col => (
                                    <ul key={col} className="footer-widget__services-list list-unstyled" style={{ flex: 1, minWidth: 0 }}>
                                        {categories
                                            .filter((_, idx) => idx % 2 === col)
                                            .map(cat => (
                                                <li key={cat.slug.current}>
                                                    <Link href={`/projects/${cat.slug.current}`}>
                                                        <span className="icon-angle-left" />
                                                        {capitalizeFirstLetter(cat.title)}
                                                    </Link>
                                                </li>
                                            ))}
                                    </ul>
                                ))}
                            </div>
                        ) : (
                            <ul className="footer-widget__services-list list-unstyled">
                                <li>Loading...</li>
                            </ul>
                        )}
                    </div>
                    </div>
                    <div
                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="400ms"
                    >
                    <div className="footer-widget__column footer-widget__newsletter">
                        <div className="footer-widget__title-box">
                        <h3 className="footer-widget__title">Newsletter</h3>
                        </div>
                        <p className="footer-widget__newsletter-text">
                        Financial planners help people to gain knowledge about
                        </p>
                        <form onSubmit={handleSubmit} className="footer-widget__newsletter-form mc-form" noValidate>
                            <div className="footer-widget__newsletter-form-input-box">
                                <input type="email" placeholder="Your e-mail" name="email" value={form.email} onChange={handleChange} required />
                                <button type="submit" className="footer-widget__newsletter-btn" disabled={status==='loading'}>
                                    <span className="icon-paper-plane" />
                                </button>
                            </div>
                            {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
                            {status==='success' && <div style={{ color: 'green', marginTop: 8 }}>Thank you for subscribing!</div>}
                            {status==='error' && <div style={{ color: 'red', marginTop: 8 }}>Something went wrong. Please try again.</div>}
                        </form>
                        <div className="mc-form__response" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="site-footer__bottom">
            <div className="container">
                <div className="site-footer__bottom-inner">
                <p className="site-footer__bottom-text">
                    © Door to Door 2024 | All Rights Reserved<br />
                    <span style={{ fontSize: '0.95em', color: '#aaa' }}>
                        Design & Marketing by <a href="https://reorank.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>REO Rank</a>
                    </span>
                </p>
                <ul className="list-unstyled site-footer__bottom-menu">
                    <li>
                        <Link href="/terms">Terms &amp; Conditions</Link>
                    </li>
                    <li>
                        <Link href="/privacy">Privacy Policy</Link>
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

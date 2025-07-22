'use client'
import Link from "next/link"
import { useState } from 'react'
import { createSanityDocument } from '../../../lib/sanity'
export default function Faq() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    const [form, setForm] = useState({ name: '', email: '', phone: '', serviceType: '', message: '' })
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
        if (!form.name || !form.email || !form.message) {
            setError('Please fill in all required fields.')
            setStatus('idle')
            return
        }
        try {
            await createSanityDocument('faqSubmission', form)
            setStatus('success')
            setForm({ name: '', email: '', phone: '', serviceType: '', message: '' })
        } catch (err) {
            setStatus('error')
            setError('Something went wrong. Please try again.')
        }
    }
    return (
        <>
            {/*FAQ One Start*/}
            <section className="faq-one">
                <div className="faq-one__bg-color" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="faq-one__left">
                                <div className="section-title text-left">
                                    <div className="section-title__tagline-box">
                                        <span className="section-title__tagline">FAQ</span>
                                    </div>
                                    <h2 className="section-title__title">
                                        Frequently Asked Questions<br />About Door to Doors Sourcing
                                    </h2>
                                </div>
                                <div
                                    className="accrodion-grp faq-one-accrodion"
                                    data-grp-name="faq-one-accrodion-1"
                                    >
                                    <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                        <div className="accrodion-title">
                                        <h4>How does Door to Doors ensure product quality?</h4>
                                        </div>
                                        <div className={isActive.key == 1 ? "accrodion-content current" : "accrodion-content"}>
                                            <div className="inner">
                                            <p>
                                            We conduct rigorous inspections at every stage of production and before shipment, ensuring your products meet international standards.
                                            </p>
                                        </div>
                                        </div>
                                        <div className="faq-page__count"></div>
                                    </div>
                                    <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                        <div className="accrodion-title">
                                        <h4>What is the average delivery time?</h4>
                                        </div>
                                        <div className={isActive.key == 2 ? "accrodion-content current" : "accrodion-content"}>
                                            <div className="inner">
                                                <p>
                                                Delivery times depend on your product and destination, but we always strive for the fastest, most reliable shipping. Contact us for a tailored estimate.
                                                </p>
                                        </div>
                                        </div>
                                        <div className="faq-page__count"></div>
                                    </div>
                                    <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                        <div className="accrodion-title">
                                        <h4>Can Door to Doors handle both small and large orders?</h4>
                                        </div>
                                        <div className={isActive.key == 3 ? "accrodion-content current" : "accrodion-content"}>
                                            <div className="inner">
                                                <p>
                                                Yes! We offer customized solutions for both bulk and small-batch production.
                                                </p>
                                        </div>
                                        </div>
                                        <div className="faq-page__count"></div>
                                    </div>
                                    <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                        <div className="accrodion-title">
                                        <h4>What industries do you specialize in?</h4>
                                        </div>
                                        <div className={isActive.key == 4 ? "accrodion-content current" : "accrodion-content"}>
                                            <div className="inner">
                                                <p>
                                                We source for chemicals, automobiles, clothing, tools, and more.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-page__count"></div>
                                    </div>
                                    <div className={isActive.key == 5 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(5)}>
                                        <div className="accrodion-title">
                                        <h4>How do you manage shipping and customs?</h4>
                                        </div>
                                        <div className={isActive.key == 5 ? "accrodion-content current" : "accrodion-content"}>
                                            <div className="inner">
                                                <p>
                                                Our team coordinates all logistics, shipping, and customs clearance for a seamless experience.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-page__count"></div>
                                    </div>
                                    <div className={isActive.key == 6 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(6)}>
                                        <div className="accrodion-title">
                                        <h4>How do I get started?</h4>
                                        </div>
                                        <div className={isActive.key == 6 ? "accrodion-content current" : "accrodion-content"}>
                                            <div className="inner">
                                                <p>
                                                Contact us through our website or call us directly. We’ll guide you through every step.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-page__count"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                        <div
                            className="faq-one__right wow fadeInRight"
                            data-wow-delay="300ms"
                        >
                            <h3 className="faq-one__from-title">
                            Our One-Stop Car Repair Shop
                            </h3>
                            <form onSubmit={handleSubmit} className="contact-form-validated faq-one__form" noValidate>
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                <div className="faq-one__input-box">
                                    <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
                                </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                <div className="faq-one__input-box">
                                    <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
                                </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                <div className="faq-one__input-box">
                                    <input type="text" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
                                </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                <div className="faq-one__input-box">
                                    <div className="select-box">
                                        <select name="serviceType" value={form.serviceType} onChange={handleChange} className="selectmenu wide">
                                            <option value="">Choose a Option</option>
                                            <option>Type Of Service 01</option>
                                            <option>Type Of Service 02</option>
                                            <option>Type Of Service 03</option>
                                            <option>Type Of Service 04</option>
                                            <option>Type Of Service 05</option>
                                            <option>Type Of Service 06</option>
                                        </select>
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-12">
                                <div className="faq-one__input-box text-message-box">
                                    <textarea name="message" placeholder="Message here.." value={form.message} onChange={handleChange} required />
                                </div>
                                </div>
                                <div className="col-xl-12">
                                <div className="faq-one__btn-box">
                                    <button type="submit" className="thm-btn faq-one__btn" disabled={status==='loading'}>
                                    {status==='loading' ? 'Submitting...' : 'Submit Now'}
                                    <span />
                                    </button>
                                </div>
                                </div>
                                {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
                                {status==='success' && <div style={{ color: 'green', marginTop: 8 }}>Thank you! We will contact you soon.</div>}
                                {status==='error' && <div style={{ color: 'red', marginTop: 8 }}>Something went wrong. Please try again.</div>}
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*FAQ One End*/}
        </>


    )
}

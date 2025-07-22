'use client'
import Layout from "../../../components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import Image from 'next/image'
import { createSanityDocument } from '../../../lib/sanity'

export default function Home() {
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="FAQ">
                <div>

                    {/*FAQ One Start*/}
                    <section className="faq-one faq-page">
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
                                                Do You Have Any
                                                <br /> Question Please?
                                            </h2>
                                        </div>
                                        <div
                                            className="accrodion-grp faq-one-accrodion"
                                            data-grp-name="faq-one-accrodion-1"
                                            >
                                            <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                                <div className="accrodion-title">
                                                <h4>How can I track my shipment?</h4>
                                                </div>
                                                <div className={isActive.key == 1 ? "accrodion-content current" : "accrodion-content"}>
                                                    <div className="inner">
                                                    <p>
                                                    It is a long established fact that a reader will be distr
                                                    acted bioiiy the real ism dablea content of a page when
                                                    looking at its layout{" "}
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
                                                        It is a long established fact that a reader will be distr
                                                        acted bioiiy the real ism dablea content of a page when
                                                        looking at its layout{" "}
                                                        </p>
                                                </div>
                                                </div>
                                                <div className="faq-page__count"></div>
                                            </div>
                                            <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                                <div className="accrodion-title">
                                                <h4>Do you offer Smooth Running Supply?</h4>
                                                </div>
                                                <div className={isActive.key == 3 ? "accrodion-content current" : "accrodion-content"}>
                                                    <div className="inner">
                                                        <p>
                                                        It is a long established fact that a reader will be distr
                                                        acted bioiiy the real ism dablea content of a page when
                                                        looking at its layout{" "}
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
                   
                    {/*CTA One Start*/}
                    <section className="cta-one cta-two">
                        <div className="container">
                        <div className="cta-one__inner">
                            <div
                            className="cta-one__bg-img"
                            style={{
                                backgroundImage: "url(assets/images/resources/cta-one-bg-img.jpg)"
                            }}
                            />
                            <div className="cta-one__content-box">
                            <div className="cta-one__icon">
                                <span className="icon-call" />
                                <div className="cta-one__shape-1">
                                <Image src="/assets/images/shapes/cta-one-shape-1.png" alt="" width={100} height={100} />
                                </div>
                            </div>
                            <h3 className="cta-one__title">
                                Need any help?
                                <br /> contact us!
                            </h3>
                            <div className="cta-one__contact-box">
                                <div className="icon">
                                <span className="icon-phone" />
                                </div>
                                <div className="content">
                                <p>Need help?</p>
                                <h3>
                                    <a href="tel:3075550133">(307) 555-0133</a>
                                </h3>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    {/*CTA One End*/}


                </div>

            </Layout>
        </>
    )
}
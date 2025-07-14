import Link from "next/link"
import Image from 'next/image'
import { useState } from 'react'

export default function Sidebar({ isSidebar, handleSidebar }) {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('idle') // idle | loading | success | error
    const [error, setError] = useState('')

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
        setError('')
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setStatus('loading')
        setError('')
        // Simple validation
        if (!form.name || !form.email || !form.message) {
            setError('Please fill in all fields.')
            setStatus('idle')
            return
        }
        // Simulate API call (replace with real endpoint if needed)
        try {
            await new Promise(res => setTimeout(res, 1000))
            setStatus('success')
            setForm({ name: '', email: '', message: '' })
        } catch (err) {
            setStatus('error')
            setError('Something went wrong. Please try again.')
        }
    }

    return (
        <>
            {/* Start sidebar widget content */}
            <div className={`xs-sidebar-group info-group info-sidebar ${isSidebar ? "isActive" : "close-sidebar"}`}>
                <div className="xs-overlay xs-bg-black" onClick={handleSidebar}/>
                <div className="xs-sidebar-widget">
                <div className="sidebar-widget-container">
                    <div className="widget-heading">
                    <span href="#" className="close-side-widget" onClick={handleSidebar}>
                        X
                    </span>
                    </div>
                    <div className="sidebar-textwidget">
                    <div className="sidebar-info-contents">
                        <div className="content-inner">
                        <div className="logo">
                            <Link href="/">
                            <Image src="/assets/images/resources/footer-logo-1.png" width={150} height={50} alt="REO Trades Logo" />
                            </Link>
                        </div>
                        <div className="content-box">
                            <h4>About Us</h4>
                            <p>
                            REO Trades is your trusted partner for seamless China sourcing and manufacturing solutions. We connect businesses worldwide with China&apos;s vast manufacturing capabilities, ensuring quality, efficiency, and peace of mind throughout your product journey.
                            </p>
                        </div>
                        <div className="form-inner">
                            <h4>Get a free quote</h4>
                            <form onSubmit={handleSubmit} className="contact-form-validated" noValidate>
                            <div className="form-group">
                                <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                name="message"
                                placeholder="Message..."
                                value={form.message}
                                onChange={handleChange}
                                required
                                />
                            </div>
                            {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
                            <div className="form-group message-btn">
                                <button type="submit" className="thm-btn form-inner__btn" disabled={status === 'loading'}>
                                {status === 'loading' ? 'Sending...' : 'Submit Now'}
                                </button>
                            </div>
                            {status === 'success' && <div style={{ color: 'green', marginTop: 8 }}>Thank you! We will contact you soon.</div>}
                            {status === 'error' && <div style={{ color: 'red', marginTop: 8 }}>Something went wrong. Please try again.</div>}
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* End sidebar widget content */}
        </>
    )
}

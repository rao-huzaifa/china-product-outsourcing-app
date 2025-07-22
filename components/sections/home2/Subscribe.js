import Link from "next/link"
import { useState } from 'react'
import { createSanityDocument } from '../../../lib/sanity'


export default function Subscribe() {
    const [form, setForm] = useState({ name: '', email: '' })
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
            setForm({ name: '', email: '' })
        } catch (err) {
            setStatus('error')
            setError('Something went wrong. Please try again.')
        }
    }

    return (
        <> 

            <section className="subscribe-section">
            <div className="auto-container">
                <div className="inner-container">
                <h2>Subscribe To Our Newsletter</h2>
                <div className="form-inner">
                    <form onSubmit={handleSubmit}>
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input type="email" name="email" placeholder="Your email" value={form.email} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="message-btn">
                        <button type="submit" className="theme-btn-one" disabled={status==='loading'}>
                            {status==='loading' ? 'Subscribing...' : 'Subscribe Now'}
                        </button>
                    </div>
                    {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
                    {status==='success' && <div style={{ color: 'green', marginTop: 8 }}>Thank you for subscribing!</div>}
                    {status==='error' && <div style={{ color: 'red', marginTop: 8 }}>Something went wrong. Please try again.</div>}
                    </form>
                </div>
                </div>
            </div>
            </section>
            
        </>
    )
}

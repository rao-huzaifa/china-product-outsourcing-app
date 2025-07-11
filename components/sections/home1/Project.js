'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
import { createClient } from '@sanity/client'

export default function Project() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const sanity = createClient({
            projectId: 'hjoc1p23',
            dataset: 'production',
            apiVersion: '2024-07-08',
            useCdn: true,
        })
        const fetchCategories = async () => {
            try {
                const result = await sanity.fetch(`*[_type == "projectCategory"] | order(title asc){ title, slug, image{asset->{url}} }`)
                setCategories(result)
            } catch (error) {
                setCategories([])
            }
        }
        fetchCategories()
    }, [])

    return (
        <>
            {/*Project Two Start*/}
            <section className="project-one">
                <div className="container">
                <div className="row">
                    {/* Latest Project Callout */}
                    <div
                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="100ms"
                    >
                    <div className="project-two__single">
                        <div className="project-two__content-box">
                        <div className="section-title text-left">
                            <div className="section-title__tagline-box">
                            <span className="section-title__tagline">latest project</span>
                            </div>
                            <h2 className="section-title__title">
                            Seamless logistics for your logo
                            </h2>
                        </div>
                        <div className="project-two__btn-box">
                            <Link
                            href="/project-details"
                            className="thm-btn project-two__btn"
                            >
                            more project
                            <span />
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* Dynamic Project Categories */}
                    {categories.length > 0 ? (
                        categories.slice(0, 5).map((cat, idx) => (
                            <div
                                key={cat.slug.current}
                                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                data-wow-delay={`${300 + idx * 200}ms`}
                            >
                                <div className="project-two__single">
                                    <div className="project-two__img">
                                        {cat.image && cat.image.asset && cat.image.asset.url ? (
                                            <img src={cat.image.asset.url} alt={cat.title} />
                                        ) : (
                                            <div style={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e5e5e5', borderRadius: '20px', minHeight: 200}}>
                                                <span style={{fontSize: '2rem', color: '#222'}}>{cat.title}</span>
                                            </div>
                                        )}
                                        <div className="project-two__content">
                                            <p className="project-two__sub-title">Project Category</p>
                                            <h3 className="project-two__title">
                                                <Link href={`/projects/${cat.slug.current}`}>
                                                    {cat.title}
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        // Fallback to static placeholders if no categories
                        [1,2,3,4,5].map((n, idx) => (
                            <div
                                key={n}
                                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                data-wow-delay={`${300 + idx * 200}ms`}
                            >
                                <div className="project-two__single">
                                    <div className="project-two__img">
                                        <div style={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e5e5e5', borderRadius: '20px', minHeight: 200}}>
                                            <span style={{fontSize: '2rem', color: '#222'}}>410X310</span>
                                        </div>
                                        <div className="project-two__content">
                                            <p className="project-two__sub-title">Express Logistics</p>
                                            <h3 className="project-two__title">
                                                <Link href="/project-details">
                                                    Delivering success through logistics
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                </div>
            </section>
            {/*Project Two End*/}
        </>
    )
}

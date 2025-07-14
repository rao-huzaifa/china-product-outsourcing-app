'use client'

import Link from "next/link"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { createClient } from '@sanity/client'

export default function Blog() {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const sanity = createClient({
            projectId: 'hjoc1p23',
            dataset: 'production',
            apiVersion: '2024-07-08',
            useCdn: true,
        })
        sanity.fetch(`*[_type == "blog"]|order(publishedAt desc)[0...3]{
            _id,
            title,
            slug,
            excerpt,
            mainImage{asset->{url}},
            publishedAt,
            categories[]->{slug},
        }`).then(setBlogs)
    }, [])

    return (
        <>
            {/*Blog One Start*/}
            <section className="blog-one">
                <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                    <span className="section-title__tagline">Latests Blog</span>
                    </div>
                    <h2 className="section-title__title">
                    Streamlining your supply
                    <br /> chain processes
                    </h2>
                </div>
                <div className="row">
                    {blogs.length > 0 ? blogs.map((blog, idx) => (
                        <div
                            className={`col-xl-4 col-lg-4 wow ${idx === 0 ? 'fadeInLeft' : idx === 1 ? 'fadeInUp' : 'fadeInRight'}`}
                            data-wow-delay={`${100 + idx * 100}ms`}
                            key={blog._id || idx}
                        >
                            <div className="blog-one__single">
                                <div className="blog-one__img-box">
                                    <div className="blog-one__img">
                                        {blog.mainImage && blog.mainImage.asset && blog.mainImage.asset.url ? (
                                            <Image src={blog.mainImage.asset.url} alt={blog.title} width={400} height={300} style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: 20 }} />
                                        ) : (
                                            <div style={{height:232,display:'flex',alignItems:'center',justifyContent:'center',background:'#e5e5e5',borderRadius:20}}>
                                                <span style={{fontSize:'2rem',color:'#222'}}>350X232</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="blog-one__date">
                                        <p>{blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }) : ''}</p>
                                    </div>
                                </div>
                                <div className="blog-one__content">
                                    <h3 className="blog-one__title">
                                        <Link href={`/blog/${blog.categories?.[0]?.slug?.current || 'category'}/${blog.slug?.current || ''}`}>
                                            {blog.title}
                                        </Link>
                                    </h3>
                                    <p className="blog-one__text">
                                        {blog.excerpt}
                                    </p>
                                    <div className="blog-one__read-more">
                                        <Link href={`/blog/${blog.categories?.[0]?.slug?.current || 'category'}/${blog.slug?.current || ''}`}>
                                            Read More
                                            <span className="icon-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) : (
                        // Fallback to 3 placeholders if no blogs
                        [1,2,3].map((n, idx) => (
                            <div
                                className={`col-xl-4 col-lg-4 wow ${idx === 0 ? 'fadeInLeft' : idx === 1 ? 'fadeInUp' : 'fadeInRight'}`}
                                data-wow-delay={`${100 + idx * 100}ms`}
                                key={n}
                            >
                                <div className="blog-one__single">
                                    <div className="blog-one__img-box">
                                        <div className="blog-one__img">
                                            <div style={{height:232,display:'flex',alignItems:'center',justifyContent:'center',background:'#e5e5e5',borderRadius:20}}>
                                                <span style={{fontSize:'2rem',color:'#222'}}>350X232</span>
                                            </div>
                                        </div>
                                        <div className="blog-one__date">
                                            <p>24 March</p>
                                        </div>
                                    </div>
                                    <div className="blog-one__content">
                                        <h3 className="blog-one__title">
                                            <Link href="#">Blog Title</Link>
                                        </h3>
                                        <p className="blog-one__text">Blog excerpt goes here.</p>
                                        <div className="blog-one__read-more">
                                            <Link href="#">Read More<span className="icon-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                </div>
            </section>
            {/*Blog One End*/}
        </>
    )
}

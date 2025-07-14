"use client"

import Layout from "../../../components/layout/Layout"
import Link from "next/link"
import { createClient } from '@sanity/client'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

export default function Home() {
    const [blogs, setBlogs] = useState([])
    const [latestBlogs, setLatestBlogs] = useState([])
    const [visibleCount, setVisibleCount] = useState(4)
    const [loading, setLoading] = useState(false)
    const loader = useRef(null)
    const [categories, setCategories] = useState([])
    const [allTags, setAllTags] = useState([])

    // Create sanity client outside useEffect
    const sanity = createClient({
        projectId: 'hjoc1p23',
        dataset: 'production',
        apiVersion: '2024-07-08',
        useCdn: true,
    })

    useEffect(() => {
        sanity.fetch(`*[_type == "blog"]|order(publishedAt desc){
            _id,
            title,
            slug,
            excerpt,
            mainImage{asset->{url}},
            publishedAt,
            authorName,
            author->{name, image},
            categories[]->{title, slug},
            commentsCount,
            socialLinks,
            tags
        }`).then(data => {
            setBlogs(data)
            setLatestBlogs(data.slice(0, 3))
            // Aggregate all unique tags
            const tags = Array.from(new Set(data.flatMap(blog => blog.tags || [])))
            setAllTags(tags)
        })
        // Fetch all categories
        sanity.fetch(`*[_type == "blogCategory"] | order(title asc){ title, slug }`).then(setCategories)
    }, [sanity])

    // Infinite scroll logic
    useEffect(() => {
        const handleScroll = () => {
            if (loader.current) {
                const rect = loader.current.getBoundingClientRect()
                if (rect.top < window.innerHeight && !loading && visibleCount < blogs.length) {
                    setLoading(true)
                    setTimeout(() => {
                        setVisibleCount(v => Math.min(v + 2, blogs.length))
                        setLoading(false)
                    }, 600)
                }
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [blogs, visibleCount, loading])

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog">
                <div>
                    {/*Blog Page Start*/}
                    <section className="blog-page">
                        <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                {blogs.slice(0, visibleCount).map((blog, idx) => (
                                    <div className="blog-page__single" key={blog._id || idx} style={{ opacity: 0, animation: `fadeIn 0.7s ${idx * 0.1}s forwards` }}>
                                        <div className="blog-page__img">
                                            {blog.mainImage && blog.mainImage.asset && blog.mainImage.asset.url ? (
                                                <Image src={blog.mainImage.asset.url} alt={blog.title} width={800} height={500} style={{ width: '100%', height: 'auto', objectFit: 'cover', borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }} />
                                            ) : (
                                                <Image src="/assets/images/blog/blog-page-1-1.jpg" alt="" width={400} height={300} style={{ width: '100%', height: 'auto', objectFit: 'cover', borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }} />
                                            )}
                                            <div className="blog-page__date">
                                                <p>{blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '29 jan 2024'}</p>
                                            </div>
                                        </div>
                                        <div className="blog-page__content">
                                            <ul className="blog-page__meta list-unstyled">
                                                <li>
                                                    <Link href="#">
                                                        <span className="icon-comments-2" />
                                                        Comments ({blog.commentsCount ?? '0'})
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <span className="icon-user-2" />
                                                        By {blog.author?.name || blog.authorName || 'admin'}
                                                    </Link>
                                                </li>
                                            </ul>
                                            <h3 className="blog-page__title">
                                                <Link href={`/blog/${blog.categories?.[0]?.slug?.current || 'category'}/${blog.slug?.current || ''}`}>{blog.title}</Link>
                                            </h3>
                                            <p className="blog-page__text">
                                                {blog.excerpt}
                                            </p>
                                            <div className="blog-page__btn-box">
                                                <Link href={`/blog/${blog.categories?.[0]?.slug?.current || 'category'}/${blog.slug?.current || ''}`} className="thm-btn blog-page__btn">
                                                    Read more
                                                    <span />
                                                </Link>
                                            </div>
                                            <div className="blog-page__social">
                                                {blog.socialLinks?.instagram && <Link href={blog.socialLinks.instagram}><span className="icon-instagram" /></Link>}
                                                {blog.socialLinks?.facebook && <Link href={blog.socialLinks.facebook}><span className="icon-facebook-f" /></Link>}
                                                {blog.socialLinks?.twitter && <Link href={blog.socialLinks.twitter}><span className="icon-Vector" /></Link>}
                                                {blog.socialLinks?.linkedin && <Link href={blog.socialLinks.linkedin}><span className="icon-linkedin-in" /></Link>}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div ref={loader} />
                                {loading && <div style={{textAlign:'center', padding:'20px'}}><span className="spinner-border" /></div>}
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <div className="sidebar">
                                    <div className="sidebar__single sidebar__search">
                                        <h3 className="sidebar__title">Search</h3>
                                        <form action="#" className="sidebar__search-form">
                                            <input type="search" placeholder="Search.." />
                                            <button type="submit">
                                            <i className="fas fa-search" />
                                            </button>
                                        </form>
                                    </div>
                                    <div className="sidebar__single sidebar__post">
                                        <h3 className="sidebar__title">Latest Blogs</h3>
                                        <ul className="sidebar__post-list list-unstyled">
                                            {latestBlogs.map((blog, idx) => (
                                                <li key={blog._id || idx}>
                                                    <div className="sidebar__post-image">
                                                        {blog.mainImage && blog.mainImage.asset && blog.mainImage.asset.url ? (
                                                            <Image src={blog.mainImage.asset.url} alt={blog.title} width={100} height={100} style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: 12 }} />
                                                        ) : (
                                                            <Image src="/assets/images/blog/lp-1-1.jpg" alt="" width={100} height={100} style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: 12 }} />
                                                        )}
                                                    </div>
                                                    <div className="sidebar__post-content">
                                                        <p className="sidebar__post-date">
                                                            <i className="icon-calender" />
                                                            {blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : ''}
                                                        </p>
                                                        <h3>
                                                            <Link href={`/blog/${blog.categories?.[0]?.slug?.current || 'category'}/${blog.slug?.current || ''}`}>{blog.title}</Link>
                                                        </h3>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* Category and Tags remain static for now, can be made dynamic if needed */}
                                    <div className="sidebar__single sidebar__category">
                                        <h3 className="sidebar__title">Category</h3>
                                        <ul className="sidebar__category-list list-unstyled">
                                            {categories.map(cat => (
                                                <li key={cat.slug.current}>
                                                    <Link href={`/blog/${cat.slug.current}`}>{cat.title}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="sidebar__single sidebar__tags">
                                        <h3 className="sidebar__title">Tags</h3>
                                        <div className="sidebar__tags-list">
                                            {allTags.map((tag, idx) => (
                                                <Link href="#" key={idx}>{tag}</Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    {/*Blog Page End*/}

                  
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
                                <img src="assets/images/shapes/cta-one-shape-1.png" alt="" />
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
                                    <Link href="tel:3075550133">(307) 555-0133</Link>
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
            <style jsx global>{`
                @keyframes fadeIn {
                    to { opacity: 1; }
                }
            `}</style>
        </>
    )
}
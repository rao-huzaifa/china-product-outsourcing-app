"use client"

import Layout from "../../../../../components/layout/Layout"
import Link from "next/link"
import { createClient } from '@sanity/client'
import { useEffect, useState } from 'react'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'

export default function BlogDetailsPage({ params }) {
    const { category, blogslug } = params
    const [blog, setBlog] = useState(null)
    const [latestBlogs, setLatestBlogs] = useState([])
    const [loading, setLoading] = useState(true)

    // Create sanity client
    const sanity = createClient({
        projectId: 'hjoc1p23',
        dataset: 'production',
        apiVersion: '2024-07-08',
        useCdn: true,
    })

    useEffect(() => {
        // Fetch the blog post by slug and category
        const fetchBlog = async () => {
            const data = await sanity.fetch(
                `*[_type == "blog" && slug.current == $blogslug && references(*[_type=='blogCategory' && slug.current==$category]._id)][0]{
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
                    tags,
                    content,
                    galleryImages[]{asset->{url}},
                    testimonial->{name, position, image{asset->{url}}, rating, text}
                }`,
                { blogslug, category }
            )
            setBlog(data)
            setLoading(false)
        }
        // Fetch latest blogs for sidebar
        const fetchLatest = async () => {
            const data = await sanity.fetch(
                `*[_type == "blog"]|order(publishedAt desc)[0...3]{
                    _id,
                    title,
                    slug,
                    mainImage{asset->{url}},
                    publishedAt,
                    categories[]->{slug}
                }`
            )
            setLatestBlogs(data)
        }
        fetchBlog()
        fetchLatest()
    }, [sanity, blogslug, category])

    if (loading || !blog) {
        return <div style={{textAlign:'center',padding:'100px'}}>Loading...</div>
    }

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={blog.title}>
                {/*Blog Details Start*/}
                <section className="blog-details">
                    <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                        <div className="blog-details__left">
                            <div className="blog-details__img">
                            <Image src={blog.mainImage?.asset?.url || "/assets/images/blog/blog-details-img-1.jpg"} alt={blog.title} width={800} height={400} />
                            </div>
                            <div className="blog-details__content">
                            <ul className="blog-details__meta list-unstyled">
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
                            <h3 className="blog-details__title-1">
                                {blog.title}
                            </h3>
                            <p className="blog-details__text-1">
                                {blog.excerpt}
                            </p>
                            {/* Optionally render more content here if available */}
                            <div className="blog-details__text-2">
                                {blog.content && <PortableText value={blog.content} />}
                            </div>
                            {blog.testimonial && (
                                <div className="blog-details__client-box">
                                    <div className="blog-details__quote">
                                    <span className="icon-quote" />
                                    </div>
                                    <p className="blog-details__client-text">
                                    {blog.testimonial.text}
                                    </p>
                                    <h4 className="blog-details__client-name">{blog.testimonial.name}</h4>
                                    <p className="blog-details__client-sub-title">
                                    {blog.testimonial.position}
                                    </p>
                                    <div className="blog-details__client-ratting">
                                        {[...Array(blog.testimonial.rating || 5)].map((_, i) => (
                                            <span className="icon-star" key={i} />
                                        ))}
                                    </div>
                                </div>
                            )}
                            <h3 className="blog-details__title-2">
                                Keep your free time free!
                            </h3>
                            <div className="blog-details__text-3">
                                {blog.content && <PortableText value={blog.content} />}
                            </div>
                            <div className="blog-details__points-box">
                                <ul className="blog-details__points-list list-unstyled">
                                    <li>
                                        <div className="icon">
                                        <span className="icon-dabble-arrow" />
                                        </div>
                                        <p>Efficiently moving your goods, every time.</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                        <span className="icon-dabble-arrow" />
                                        </div>
                                        <p>Streamline your supply chain with our logistics</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                        <span className="icon-dabble-arrow" />
                                        </div>
                                        <p>Trust us for reliable and cost-effective logistics</p>
                                    </li>
                                </ul>
                                <ul className="blog-details__points-list list-unstyled">
                                    <li>
                                        <div className="icon">
                                        <span className="icon-dabble-arrow" />
                                        </div>
                                        <p>Delivering your goods with precision</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                        <span className="icon-dabble-arrow" />
                                        </div>
                                        <p>Optimize your logistics with our expertise.</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                        <span className="icon-dabble-arrow" />
                                        </div>
                                        <p>our one-stop solution for logistics</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="blog-details__img-box">
                                {blog.galleryImages && blog.galleryImages.length > 0 ? (
                                    blog.galleryImages.map((img, idx) => (
                                        <div className="blog-details__img-box-img" key={idx}>
                                            <Image src={img.asset.url} alt="" width={300} height={200} />
                                        </div>
                                    ))
                                ) : (
                                    <>
                                        <div className="blog-details__img-box-img">
                                            <Image src="/assets/images/blog/blog-details-img-box-img-1.jpg" alt="" width={300} height={200} />
                                        </div>
                                        <div className="blog-details__img-box-img">
                                            <Image src="/assets/images/blog/blog-details-img-box-img-2.jpg" alt="" width={300} height={200} />
                                        </div>
                                        <div className="blog-details__img-box-img">
                                            <Image src="/assets/images/blog/blog-details-img-box-img-3.jpg" alt="" width={300} height={200} />
                                        </div>
                                    </>
                                )}
                            </div>
                            <p className="blog-details__text-4">
                                Logistics service involves the planning, implementation, and
                                control of the efficient and effective the a ama the
                                transportation, storage, and distribution of goods and materials
                            </p>
                            <div className="blog-details__tag-and-social">
                                <div className="blog-details__tag-box">
                                <span>Tags:</span>
                                {blog.tags && blog.tags.map((tag, idx) => (
                                    <Link href="#" key={idx}>{tag}</Link>
                                ))}
                                </div>
                                <div className="blog-details__social">
                                {blog.socialLinks?.facebook && <Link href={blog.socialLinks.facebook}><span className="icon-facebook-f" /></Link>}
                                {blog.socialLinks?.instagram && <Link href={blog.socialLinks.instagram}><span className="icon-instagram" /></Link>}
                                {blog.socialLinks?.twitter && <Link href={blog.socialLinks.twitter}><span className="icon-Vector" /></Link>}
                                {blog.socialLinks?.linkedin && <Link href={blog.socialLinks.linkedin}><span className="icon-linkedin-in" /></Link>}
                                </div>
                            </div>
                            <div className="blog-details__pagenation-box">
                                <ul className="list-unstyled blog-details__pagenation">
                                <li>
                                    <div className="icon">
                                    <Link href="#">
                                        <span className="icon-arrow-left" />
                                    </Link>
                                    </div>
                                    <p>
                                    More Care
                                    <br /> places
                                    </p>
                                </li>
                                <li>
                                    <p>
                                    Mastering
                                    <br /> the Art
                                    </p>
                                    <div className="icon">
                                    <Link href="#">
                                        <span className="icon-arrow-right" />
                                    </Link>
                                    </div>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
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
                                {latestBlogs.map((item, idx) => (
                                    <li key={item._id || idx}>
                                        <div className="sidebar__post-image">
                                            <Image src={item.mainImage?.asset?.url || "/assets/images/blog/lp-1-1.jpg"} alt={item.title} width={100} height={100} />
                                        </div>
                                        <div className="sidebar__post-content">
                                            <p className="sidebar__post-date">
                                                <i className="icon-calender" />
                                                {item.publishedAt ? new Date(item.publishedAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : ''}
                                            </p>
                                            <h3>
                                                <Link href={`/blog/${item.categories?.[0]?.slug?.current || 'category'}/${item.slug?.current || ''}`}>{item.title}</Link>
                                            </h3>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            </div>
                            <div className="sidebar__single sidebar__category">
                            <h3 className="sidebar__title">Category</h3>
                            <ul className="sidebar__category-list list-unstyled">
                                {blog.categories && blog.categories.map((cat, idx) => (
                                    <li key={idx}>
                                        <Link href={`/blog/${cat.slug.current}`}>{cat.title}</Link>
                                    </li>
                                ))}
                            </ul>
                            </div>
                            <div className="sidebar__single sidebar__tags">
                            <h3 className="sidebar__title">Tags</h3>
                            <div className="sidebar__tags-list">
                                {blog.tags && blog.tags.map((tag, idx) => (
                                    <Link href="#" key={idx}>{tag}</Link>
                                ))}
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/*Blog Details End*/}
                {/*CTA One Start*/}
                <section className="cta-one cta-two">
                    <div className="container">
                    <div className="cta-one__inner">
                        <div
                        className="cta-one__bg-img"
                        style={{
                            backgroundImage: "url(/assets/images/resources/cta-one-bg-img.jpg)"
                        }}
                        />
                        <div className="cta-one__content-box">
                        <div className="cta-one__icon">
                            <span className="icon-call" />
                            <div className="cta-one__shape-1">
                            <img src="/assets/images/shapes/cta-one-shape-1.png" alt="" />
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
            </Layout>
        </>
    )
} 
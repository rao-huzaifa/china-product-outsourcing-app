'use client'

import Layout from "../../../components/layout/Layout"
import Link from "next/link"
import { sanityClient } from '../../../lib/sanity'
import './category-nav.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const projectsQuery = `
  *[_type == "project"]{
    title,
    slug,
    category->{title, slug},
    mainImage{asset->{url}},
    customer,
    startDate,
    endDate,
    rating
  } | order(_createdAt desc)
`

// Fetch all categories, even if they have no projects
const categoriesQuery = `
  *[_type == "projectCategory"] | order(title asc){
    title,
    slug
  }
`

// Helper function to capitalize first letter
const capitalizeFirstLetter = (string) => {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export default function Home() {
  const [projects, setProjects] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsData, categoriesData] = await Promise.all([
          sanityClient.fetch(projectsQuery),
          sanityClient.fetch(categoriesQuery)
        ])
        setProjects(projectsData)
        setCategories(categoriesData)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  // On the main projects page, 'All' is always active
  const activeCategory = null;

  // Color palette for categories (looped if more categories than colors)
  const colorPalette = [
    '#2563eb', // blue
    '#eab308', // yellow
    '#10b981', // green
    '#f59e42', // orange
    '#a21caf', // purple
    '#0ea5e9', // sky
    '#f43f5e', // rose
    '#14b8a6', // teal
    '#f97316', // amber
    '#6366f1', // indigo
  ];

  if (loading) {
    return (
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Products">
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <p>Loading projects...</p>
        </div>
      </Layout>
    )
  }

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Products">
        <div>
          {/* Category Navigation */}
          <section style={{ background: '#fff', padding: '40px 0 24px 0', marginBottom: 32 }}>
            <div className="category-nav-container" style={{ flexDirection: 'column', alignItems: 'center', display: 'flex' }}>
              <h2 style={{ margin: 0, fontWeight: 800, fontSize: 28, marginBottom: 24, textAlign: 'center', letterSpacing: '-0.5px', color: '#18181b' }}>
                Browse by Category
              </h2>
              <nav className="category-nav" aria-label="Project Categories" role="navigation">
                <Link href="/projects" className={activeCategory === null ? "active" : ""} style={{ background: activeCategory === null ? '#e11d48' : '#fff', color: activeCategory === null ? '#fff' : '#222' }}>
                  <strong>All</strong>
                </Link>
                {categories.map((cat, idx) => {
                  const color = colorPalette[idx % colorPalette.length];
                  const isActive = activeCategory === cat.slug.current;
                  return (
                    <Link
                      key={cat.slug.current}
                      href={`/projects/${cat.slug.current}`}
                      className={isActive ? "active" : ""}
                      style={{
                        background: isActive ? color : '#fff',
                        color: isActive ? '#fff' : color,
                        border: `1.5px solid ${color}`,
                        fontWeight: 500,
                        transition: 'background 0.25s, color 0.25s, transform 0.18s',
                      }}
                      aria-label={`Category: ${cat.title}`}
                    >
                      {capitalizeFirstLetter(cat.title)}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </section>
          {/*Project Two Start*/}
          <section className="project-one">
            <div className="container">
              <div className="row">
                {/* Dynamically render project cards from Sanity */}
                {projects.map((project, idx) => (
                  <div
                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay={`${100 + idx * 200}ms`}
                    key={project.slug?.current || idx}
                  >
                    <div className="project-two__single">
                      <div className="project-two__img">
                        <Image
                          src={project.mainImage?.asset?.url || "assets/images/project/project-2-1.jpg"}
                          alt={project.title}
                          width={400}
                          height={300}
                        />
                        <div className="project-two__content">
                          <p className="project-two__sub-title">{capitalizeFirstLetter(project.category?.title)}</p>
                          <h3 className="project-two__title">
                            <Link href={`/projects/${project.category?.slug?.current}/${project.slug?.current}`}>
                              {project.title}
                            </Link>
                          </h3>
                          {/* Optionally add more project info here if desired */}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/*Project Two End*/}

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
                      <Image src="assets/images/shapes/cta-one-shape-1.png" alt="" width={100} height={100} />
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
    </>
  )
}
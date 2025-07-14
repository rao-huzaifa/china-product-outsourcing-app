
import Layout from "../../../components/layout/Layout"
import Link from "next/link"
import { createClient } from '@sanity/client'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'

const sanity = createClient({
  projectId: 'hjoc1p23',
  dataset: 'production',
  apiVersion: '2024-07-08',
  useCdn: true,
})

const projectDetailsQuery = `
  *[_type == "project" && slug.current == $slug][0]{
    title,
    category->{title},
    customer,
    startDate,
    endDate,
    rating,
    socialLinks,
    mainImage{asset->{url}},
    descriptionTitle,
    description,
    gallery[]{asset->{url}}
  }
`

// For now, use a hardcoded slug. For dynamic routing, use params.slug
export default async function ProjectDetailsPage() {
  // TODO: Replace 'your-project-slug' with dynamic slug from params
  const project = await sanity.fetch(projectDetailsQuery, { slug: 'your-project-slug' })

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Project_Details">
        <div>
          {/*Project Details Start*/}
          <section className="project-details">
            <div className="container">
              <div className="row">
                <div className="col-xl-4">
                  <div className="project-details__left">
                    <div className="project-details__information">
                      <h3 className="project-details__information-title">
                        Project Information
                      </h3>
                      <ul className="project-details__information-list list-unstyled">
                        <li>
                          <span>Category:</span>
                          <p>{project?.category?.title}</p>
                        </li>
                        <li>
                          <span>Customer:</span>
                          <p>{project?.customer}</p>
                        </li>
                        <li>
                          <span>Start date: </span>
                          <p>{project?.startDate}</p>
                        </li>
                        <li>
                          <span>End date:</span>
                          <p>{project?.endDate}</p>
                        </li>
                        <li>
                          <span>Rating:</span>
                          <p>
                            {[...Array(project?.rating || 0)].map((_, i) => (
                              <i key={i} className="icon-star" />
                            ))}
                          </p>
                        </li>
                      </ul>
                      <div className="project-details__social">
                        {project?.socialLinks?.map(link => (
                          <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer">
                            <span className={`icon-${link.platform?.toLowerCase()}`} />
                          </a>
                        ))}
                      </div>
                    </div>
                    {/* Static contact info below */}
                    <ul className="project-details__contact-list list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-location icon-1" />
                        </div>
                        <div className="content">
                          <h3>Address</h3>
                          <p>
                            Dhaka 102, 8000 sent behaibior
                            <br /> road 45 house of street
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-call icon-2" />
                        </div>
                        <div className="content">
                          <h3>Lets Talk us</h3>
                          <p>
                            Phone number: <Link href="tel:32566800890">+32566 - 800 - 890</Link>
                          </p>
                          <p>
                            Fax: <Link href="tel:123458963007">1234 -58963 - 007</Link>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-envolop icon-3" />
                        </div>
                        <div className="content">
                          <h3>Send us email</h3>
                          <p>
                            <Link href="mailto:nafiz1223@gmail.com">nafiz1223@gmail.com</Link>
                            <Link href="nafiz1223@gmail.com">
                              {" "}
                              fahad
                              <br /> demo23yourmail.com
                            </Link>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-8">
                  <div className="project-details__right">
                    <div className="project-details__img">
                      <Image
                        src={project?.mainImage?.asset?.url || "/assets/images/project/project-details-img-1.jpg"}
                        alt={project?.title}
                        width={800}
                        height={400}
                      />
                    </div>
                    <h3 className="project-details__title-1">
                      {project?.descriptionTitle}
                    </h3>
                    <div className="project-details__text-1">
                      <PortableText value={project?.description} />
                    </div>
                    <div className="project-details__img-box">
                      <div className="row">
                        {project?.gallery?.slice(0, 2).map((img, i) => (
                          <div className="col-xl-6" key={i}>
                            <div className="project-details__img-box-img">
                              <Image
                                src={img.asset.url}
                                alt={`Gallery image ${i + 1}`}
                                width={400}
                                height={300}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>


                {/*CTA One Start*/}
                <section className="cta-one">
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

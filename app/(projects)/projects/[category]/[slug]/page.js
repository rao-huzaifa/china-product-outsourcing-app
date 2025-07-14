import { createClient } from '@sanity/client'
import { PortableText } from '@portabletext/react'
import Layout from "../../../../../components/layout/Layout"
import Image from 'next/image'

const sanity = createClient({
  projectId: 'hjoc1p23',
  dataset: 'production',
  apiVersion: '2024-07-08',
  useCdn: true,
})

const projectDetailsQuery = `
  *[_type == "project" && slug.current == $slug && category->slug.current == $category][0]{
    title,
    category->{title, slug},
    sidebarDetails,
    socialLinks,
    mainImage{asset->{url}},
    descriptionTitle,
    description,
    gallery[]{asset->{url}}
  }
`

export default async function ProjectDetailsPage({ params }) {
  const { category, slug } = params
  const project = await sanity.fetch(projectDetailsQuery, { slug, category })

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={project.title}>
      {/* Static hero image for all projects */}
      <div className="project-hero">
        <Image src="/assets/images/project/project-details-hero.jpg" alt="Project Hero" width={600} height={300} style={{ width: '100%', height: 'auto' }} />
      </div>
      <div>
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
                      {project.sidebarDetails?.map((item, idx) => (
                        <li key={idx}>
                          <span>{item.name}:</span>
                          <p>{item.value}</p>
                        </li>
                      ))}
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
                          Phone number: <a href="tel:32566800890">+32566 - 800 - 890</a>
                        </p>
                        <p>
                          Fax: <a href="tel:123458963007">1234 -58963 - 007</a>
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
                          <a href="mailto:nafiz1223@gmail.com">nafiz1223@gmail.com</a>
                          <a href="nafiz1223@gmail.com">
                            {" "}
                            fahad
                            <br /> demo23yourmail.com
                          </a>
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
    </Layout>
  )
} 
import Layout from "../../../../components/layout/Layout"
import Link from "next/link"
import { createClient } from '@sanity/client'
import Image from "next/image"

const sanity = createClient({
  projectId: 'hjoc1p23',
  dataset: 'production',
  apiVersion: '2024-07-08',
  useCdn: true,
})

const projectsByCategoryQuery = `
  *[_type == "project" && category->slug.current == $category]{
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

// Helper function to capitalize first letter
const capitalizeFirstLetter = (string) => {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export default async function CategoryProjectsPage({ params }) {
  const { category } = params
  const projects = await sanity.fetch(projectsByCategoryQuery, { category })
  
  // Get the category title from the first project or use the slug
  const categoryTitle = projects.length > 0 ? projects[0].category?.title : category;
  const capitalizedCategoryTitle = capitalizeFirstLetter(categoryTitle);

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={capitalizedCategoryTitle}>
      <div>
        <section className="project-one">
          <div className="container">
            <div className="row">
              {projects.map((project, idx) => (
                <div
                  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay={`${100 + idx * 200}ms`}
                  key={project.slug?.current || idx}
                >
                  <div className="project-two__single">
                    <div className="project-two__img">
                      <Image
                        src={project.mainImage?.asset?.url || "/assets/images/project/project-2-1.jpg"}
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
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
} 
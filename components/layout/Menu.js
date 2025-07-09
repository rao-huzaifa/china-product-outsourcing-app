import Link from "next/link"
import { createClient } from '@sanity/client'

export default async function Menu() {
    // Sanity client
    const sanity = createClient({
        projectId: 'hjoc1p23',
        dataset: 'production',
        apiVersion: '2024-07-08',
        useCdn: true,
    })
    // Fetch categories
    const categories = await sanity.fetch(`*[_type == "projectCategory"] | order(title asc){ title, slug }`)

    return (
        <>
        <ul className="main-menu__list">
            <li className="dropdown">
                <Link href="/">Home </Link>
                <ul>
                <li>
                    <Link href="/">Home One</Link>
                </li>
                <li>
                    <Link href="/index-2">Home Two</Link>
                </li>
                <li className="dropdown">
                    <a href="#">Header Styles</a>
                    <ul>
                    <li>
                        <Link href="/">Header One</Link>
                    </li>
                    <li>
                        <Link href="/index-2">Header Two</Link>
                    </li>
                    </ul>
                </li>
                </ul>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/calculator">Calculator</Link>
            </li>
            <li className="dropdown">
                <Link href="/projects">Projects</Link>
                <ul>
                    <li>
                        <Link href="/projects">All Projects</Link>
                    </li>
                    {categories.map(cat => (
                        <li key={cat.slug.current}>
                            <Link href={`/projects/${cat.slug.current}`}>{cat.title}</Link>
                        </li>
                    ))}
                </ul>
            </li>
            <li className="dropdown">
                <Link href="#">Blog</Link>
                <ul>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/blog-details">Blog Details</Link>
                </li>
                </ul>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
        </>
    )
}

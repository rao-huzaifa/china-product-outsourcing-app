'use client'
import Link from "next/link"
import { createClient } from '@sanity/client'
import { useState, useEffect } from 'react'

// Helper function to capitalize first letter
const capitalizeFirstLetter = (string) => {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export default function Menu() {
    // Sanity client
    const sanity = createClient({
        projectId: 'hjoc1p23',
        dataset: 'production',
        apiVersion: '2024-07-08',
        useCdn: true,
    })
    // Fetch categories
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const result = await sanity.fetch(`*[_type == "projectCategory"] | order(title asc){ title, slug }`)
                setCategories(result)
            } catch (error) {
                console.error('Error fetching categories:', error)
            }
        }
        fetchCategories()
    }, [sanity])

    // Split categories into two columns
    const midPoint = Math.ceil(categories.length / 2)
    const leftColumn = categories.slice(0, midPoint)
    const rightColumn = categories.slice(midPoint)

    // Fetch blog categories
    const [blogCategories, setBlogCategories] = useState([])

    useEffect(() => {
        const fetchBlogCategories = async () => {
            try {
                const result = await sanity.fetch(`*[_type == "blogCategory"] | order(title asc){ title, slug }`)
                setBlogCategories(result)
            } catch (error) {
                console.error('Error fetching blog categories:', error)
            }
        }
        fetchBlogCategories()
    }, [sanity])

    // Split blog categories into two columns
    const blogMidPoint = Math.ceil(blogCategories.length / 2)
    const blogLeftColumn = blogCategories.slice(0, blogMidPoint)
    const blogRightColumn = blogCategories.slice(blogMidPoint)

    return (
        <>
        <ul className="main-menu__list">
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/calculator">Calculator</Link>
            </li>
            <li className="dropdown">
                <Link href="/projects">Products</Link>
                <ul className="projects-dropdown">
                    <li className="dropdown-header">
                        <Link href="/projects">All Products</Link>
                    </li>
                    <li className="dropdown-columns">
                        <div className="dropdown-column">
                            {leftColumn.map(cat => (
                                <div key={cat.slug.current} className="dropdown-item">
                                    <Link href={`/projects/${cat.slug.current}`}>{capitalizeFirstLetter(cat.title)}</Link>
                                </div>
                            ))}
                        </div>
                        <div className="dropdown-column">
                            {rightColumn.map(cat => (
                                <div key={cat.slug.current} className="dropdown-item">
                                    <Link href={`/projects/${cat.slug.current}`}>{capitalizeFirstLetter(cat.title)}</Link>
                                </div>
                            ))}
                        </div>
                    </li>
                </ul>
            </li>
            <li className="dropdown">
                <Link href="/blog">Blog</Link>
                <ul className="projects-dropdown">
                    <li className="dropdown-header">
                        <Link href="/blog">All Blogs</Link>
                    </li>
                    <li className="dropdown-columns">
                        <div className="dropdown-column">
                            {blogLeftColumn.map(cat => (
                                <div key={cat.slug.current} className="dropdown-item">
                                    <Link href={`/blog/${cat.slug.current}`}>{cat.title}</Link>
                                </div>
                            ))}
                        </div>
                        <div className="dropdown-column">
                            {blogRightColumn.map(cat => (
                                <div key={cat.slug.current} className="dropdown-item">
                                    <Link href={`/blog/${cat.slug.current}`}>{cat.title}</Link>
                                </div>
                            ))}
                        </div>
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

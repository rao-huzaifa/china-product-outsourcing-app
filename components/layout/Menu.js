import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

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
                <Link href="#">Projects</Link>
                <ul>
                <li>
                    <Link href="/projects">Projects</Link>
                </li>
                <li>
                    <Link href="/project-details">Project Details</Link>
                </li>
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

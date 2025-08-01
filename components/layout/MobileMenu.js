'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import { createClient } from '@sanity/client'
import Image from 'next/image'

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

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

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
    return (
        <>
            
            {/*End Mobile Menu */}
            <div className="mobile-nav__wrapper">
                <div className="mobile-nav__overlay mobile-nav__toggler"  onClick={handleMobileMenu}/>
                {/* /.mobile-nav__overlay */}
                <div className="mobile-nav__content">
                    <span className="mobile-nav__close mobile-nav__toggler" onClick={handleMobileMenu}>
                    <i className="fa fa-times" />
                    </span>
                    <div className="logo-box">
                    <Link href="/" aria-label="logo image">
                        <Image src="/assets/images/resources/for whitebg logo.png" width={150} height={50} alt="Door to Door Logo" />
                    </Link>
                    </div>
                    {/* /.logo-box */}
                    <div className="mobile-nav__container">
                        <ul className="main-menu__list">
                        <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}>
                            <Link href="/" onClick={handleMobileMenu}>Home </Link>
                            <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                <li><Link href="/" onClick={handleMobileMenu}>Home One</Link></li>
                            </ul>
                            <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></div>
                        </li>
                        <li><Link href="/about" onClick={handleMobileMenu}>About</Link></li>
                        <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}>
                            <Link href="#" onClick={handleMobileMenu}>Pages</Link>
                            <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                <li><Link href="/team" onClick={handleMobileMenu}>Team</Link></li>
                                <li><Link href="/team-carousel" onClick={handleMobileMenu}>Team Carousel</Link></li>
                                <li><Link href="/team-details" onClick={handleMobileMenu}>Team Details</Link></li>
                                <li><Link href="/testimonials" onClick={handleMobileMenu}>Testimonials</Link></li>
                                <li><Link href="/faq" onClick={handleMobileMenu}>Faq</Link></li>
                                <li><Link href="/404" onClick={handleMobileMenu}>404 Error</Link></li>
                            </ul>
                            <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}>
                                <span className="fa fa-angle-right" />
                            </div>
                        </li>
                        <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}>
                            <Link href="#" onClick={handleMobileMenu}>Services</Link>
                            <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                <li><Link href="/services" onClick={handleMobileMenu}>Services</Link></li>
                                <li><Link href="/services-carousel" onClick={handleMobileMenu}>Services Carousel</Link></li>
                                <li><Link href="/express-freight-solutions" onClick={handleMobileMenu}>Express Freight Solutions</Link></li>
                                <li><Link href="/quick-move-logistics" onClick={handleMobileMenu}>Quick Move Logistics</Link></li>
                                <li><Link href="/speedy-dispatch" onClick={handleMobileMenu}>Speedy Dispatch</Link></li>
                                <li><Link href="/swift-supply-chain" onClick={handleMobileMenu}>Swift Supply Chain</Link></li>
                                <li><Link href="/on-point-distribution" onClick={handleMobileMenu}>On Point Distribution</Link></li>
                            </ul>
                            <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}>
                                <span className="fa fa-angle-right" />
                            </div>
                        </li>
                        <li className={isActive.key == 5 ? "dropdown current" : "dropdown"}>
                            <Link href="/projects" onClick={handleMobileMenu}>Projects</Link>
                            <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                <li><Link href="/projects" onClick={handleMobileMenu}>All Projects</Link></li>
                                {categories.map(cat => (
                                  <li key={cat.slug.current}>
                                    <Link href={`/projects/${cat.slug.current}`} onClick={handleMobileMenu}>{cat.title}</Link>
                                  </li>
                                ))}
                            </ul>
                            <div className={isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(5)}>
                                <span className="fa fa-angle-right" />
                            </div>
                        </li>
                        <li className={isActive.key == 6 ? "dropdown current" : "dropdown"}>
                            <Link href="#" onClick={handleMobileMenu}>Blog</Link>
                            <ul style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                <li><Link href="/blog" onClick={handleMobileMenu}>Blog</Link></li>
                                <li><Link href="/blog-details" onClick={handleMobileMenu}>Blog Details</Link></li>
                            </ul>
                            <div className={isActive.key == 6 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(6)}>
                                <span className="fa fa-angle-right" />
                            </div>
                        </li>
                        <li><Link href="/contact" onClick={handleMobileMenu}>Contact</Link></li>
                        </ul>
                    </div>
                    <ul className="mobile-nav__contact list-unstyled">
                    <li>
                        <i className="fa fa-envelope" />
                        <a href="mailto:needhelp@packageName__.com">needhelp@onpoint.com</a>
                    </li>
                    <li>
                        <i className="fa fa-phone-alt" />
                        <a href="tel:666-888-0000">666 888 0000</a>
                    </li>
                    </ul>
                    {/* /.mobile-nav__contact */}
                    <div className="mobile-nav__top">
                    <div className="mobile-nav__social">
                        <a href="#" className="fab fa-twitter" />
                        <a href="#" className="fab fa-facebook-square" />
                        <a href="#" className="fab fa-pinterest-p" />
                        <a href="#" className="fab fa-instagram" />
                    </div>
                    {/* /.mobile-nav__social */}
                    </div>
                    {/* /.mobile-nav__top */}
                </div>
                {/* /.mobile-nav__content */}
                </div>

            
            
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />

          

        </>
    )
}
export default MobileMenu;

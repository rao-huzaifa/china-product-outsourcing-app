import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (

      <header className={`main-header ${scroll ? "fixed-header" : ""}`}>
        <nav className="main-menu">
          <div className="main-menu__wrapper">
            <div className="container">
              <div className="main-menu__wrapper-inner">
                <div className="main-menu__left">
                  <div className="main-menu__logo">
                    <Link href="/">
                      <img src="assets/images/resources/logo-1.png" alt="" />
                    </Link>
                  </div>
                  <div className="main-menu__main-menu-box">
                    <div className="mobile-nav__toggler" onClick={handleMobileMenu}>
                      <i className="fa fa-bars" />
                    </div>
                    <Menu />
                  </div>
                </div>
                <div className="main-menu__right">
                  <div className="main-menu__search-nav-sidebar-btn-box">
                    <div className="main-menu__search-box" onClick={handlePopup}>
                      <div className="main-menu__search search-toggler fas fa-search" />
                    </div>
                    <div className="main-menu__nav-sidebar-icon" onClick={handleSidebar}>
                      <div className="navSidebar-button">
                        <span className="icon-dots-menu-one" />
                        <span className="icon-dots-menu-two" />
                        <span className="icon-dots-menu-three" />
                      </div>
                    </div>
                    <div className="main-menu__btn-box">
                      <Link href="/about" className="thm-btn main-menu__btn">
                        Read more
                        <span />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className={`stricky-header stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`}>
        <div className="sticky-header__content" />
        <nav className="main-menu">
          <div className="main-menu__wrapper">
            <div className="container">
              <div className="main-menu__wrapper-inner">
                <div className="main-menu__left">
                  <div className="main-menu__logo">
                    <Link href="/">
                      <img src="assets/images/resources/logo-1.png" alt="" />
                    </Link>
                  </div>
                  <div className="main-menu__main-menu-box">
                    <div className="mobile-nav__toggler" onClick={handleMobileMenu}>
                      <i className="fa fa-bars" />
                    </div>
                    <Menu />
                  </div>
                </div>
                <div className="main-menu__right">
                  <div className="main-menu__search-nav-sidebar-btn-box">
                    <div className="main-menu__search-box" onClick={handlePopup}>
                      <div
                        className="main-menu__search search-toggler fas fa-search"
                      />
                    </div>
                    <div className="main-menu__nav-sidebar-icon" onClick={handleSidebar}>
                      <div className="navSidebar-button">
                        <span className="icon-dots-menu-one" />
                        <span className="icon-dots-menu-two" />
                        <span className="icon-dots-menu-three" />
                      </div>
                    </div>
                    <div className="main-menu__btn-box">
                      <Link href="/about" className="thm-btn main-menu__btn">
                        Read more
                        <span />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <MobileMenu handleMobileMenu={handleMobileMenu} handleSidebar={handleSidebar} isSidebar={isSidebar} />
    </header>
    
    )
}
"use client"
import React, {useState} from "react"
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {

const [isOpened, setIsOpened] = useState(false);
const [isActive, setActive] = useState(false)

function toggle() {
  setIsOpened(wasOpened => !wasOpened);
  setActive(!isActive);
}
      return (
        <>
        <div
        className="nav px-md-5 py-md-4 py-2 mr-md-auto">
          <div className="item d-lg-only">
            <Link href="/" className="potoo-logo-a">
                <Image
                  src="/Potoo-word-header-logo.svg"
                  width="102"
                  height="20"
                  alt="Potoo logo"
                />
              </Link>
          </div>
          <div className="item center">
            <Link href="/" className="potoo-logo-a d-flex d-lg-none">
              <Image
                    src="/Potoo-word-header-logo.svg"
                    width="120"
                    height="53"
                    alt="Potoo logo"
                    className="bird-logo p-3 p-m-0"
                    title="Potoo Bird. A quiue bird lives in Brazil"
                    />
            </Link>
          </div>
          <div className="item pe-4 d-lg-only">
            <Link href="/work" className="nav-a">
              Work
            </Link>
          </div>
          <div className="item d-lg-only pe-4">
            <Link href="/dept/design" className="nav-a">
              Design
            </Link>
          </div>
          <div className="item d-lg-only pe-4">
            <Link href="/dept/development" className="nav-a">
              Development
            </Link>
          </div>
          <div className="item d-lg-only pe-4">
            <Link href="/studio" className="nav-a">
              About
            </Link>
          </div>
          <div className="item d-lg-only pr-md-0">
            <Link href="/contact" className="nav-a">
              Contact
            </Link>
          </div>
        </div>
        <div
            className={`mobile-menu ${isActive ? `menu-active` : ''}`}
             aria-label="menu" onClick={toggle}>
              <div className={`menu-icon ${isActive ? 'activeNav' : ''}`}>
                <span className={`menu ${isActive ? 'activeNav' : ''}`}></span>
              </div>
            </div>

        <div className="mobile-header container">
          <div className="header-box">
            <div className={`menu-list ${isActive ? 'activeNav' : ''}`}>
              <ul className="list header-list pt-5 mt-4 pt-md-5 mt-md-0">
                <li className="item"
                onClick={toggle}>
                  <Link href="/work" className="mobile-navBar-item code-a text-decoration-none">
                      Work
                  </Link>
                </li>
                <li className="item"
                onClick={toggle}>
                  <Link href="/dept/design" className="mobile-navBar-item code-a text-decoration-none">
                    Design
                  </Link>
                </li>
                <li className="item"
                onClick={toggle}>
                  <Link href="/dept/development" className="mobile-navBar-item code-a text-decoration-none">
                    Development
                  </Link>
                </li>
                <li className="item"
                onClick={toggle}>
                  <Link href="/studio" className="mobile-navBar-item design-a text-decoration-none">
                    About
                  </Link>
                </li>
                <li className="item"
                onClick={toggle}>
                  <Link href="/contact" className="mobile-navBar-item code-a text-decoration-none">
                   Contact
                  </Link>
                </li>
              </ul>
              <div className="phone-menu-footer footer-container container-fluid">
                <div className="row justify-content-lg-around justify-content-md-center justify-content-center pb-3 pt-0 pt-lg-4 pb-lg-3 mb-lg-0 mt-lg-2 mt-0 phone-email-row">
                    <div className="col-md-2 col-8 text-left pt-4 pt-md-0">
                    <ul className="list-style-none ps-0 mb-0 mt-md-2 contact-list">
                    <span className="footer-small-title">contact info</span>
                      <li className="item pt-md-3 pt-0">
                            <Link href="https://wa.me/009647809000956" className="say-hello-a">
                                    WhatsApp: +964 780 900 0956
                            </Link>
                      </li>
                      <li className="item pt-md-3 pt-1">
                            <Link href="tel:+13202604416" className="say-hello-a">
                                    Cell: +1 320 260 4416
                            </Link>
                      </li>
                      <li className="item pt-md-3 pt-1">
                            <Link href="mailto:ideas@potoo.studio" className="say-hello-a">
                                    Email: ideas@potoo.studio
                            </Link>
                      </li>
                  </ul>
                    </div>
                    <div className="col-md-2 col-4 pt-4 pt-md-0">
                        <ul className="media-list text-right text-md-left">
                        <span className="footer-small-title">social media</span>
                            <li className="item">
                                <Link href="https://www.instagram.com/potoostudio" aria-label="instagram" className="social-media-a">
                                    Instagram
                                </Link>
                            </li>
                            <li className="item pt-1">
                                <Link href="https://www.behance.net/potoostudio" aria-label="behance" className="social-media-a">
                                    Behance
                                </Link>
                            </li>
                            <li className="item pt-1">
                                <Link href="https://dribbble.com/potoostudio" aria-label="dribbble" className="social-media-a">
                                    Dribbble
                                </Link>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </>
      );
  }

export default Navbar;
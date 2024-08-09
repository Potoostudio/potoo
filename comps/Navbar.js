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
                  src="/Potoo Word Logo.svg"
                  width="80"
                  height="16"
                  alt="Potoo logo"
                />
              </Link>
          </div>
          <div className="item center">
            <Link href="/" className="potoo-logo-a d-flex d-lg-none">
              <Image
                    src="/Potoo Word Logo.svg"
                    width="200"
                    height="53"
                    alt="Potoo logo"
                    className="text-center bird-logo p-3 p-m-0"
                    title="Potoo Bird. A quiue bird lives in Brazil"
                    />
            </Link>
          </div>
          <div className="item pr-md-4 d-lg-only">
            <Link href="/work" className="nav-a">
              Work
            </Link>
          </div>
          <div className="item d-lg-only pr-md-4">
            <Link href="/studio" className="nav-a">
              Studio
            </Link>
          </div>
          <div className="item d-lg-only pr-md-4">
            <Link href="/journal" className="nav-a">
             Journal
            </Link>
          </div>
          <div className="item d-lg-only pr-md-0">
            <Link href="/art" className="nav-a">
             Art
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
                  <Link href="/studio" className="mobile-navBar-item design-a luxury-title">
                    Studio
                  </Link>
                </li>
                <li className="item"
                onClick={toggle}>
                  <Link href="/work" className="mobile-navBar-item code-a luxury-title">
                      Work
                  </Link>
                </li>
                <li className="item"
                onClick={toggle}>
                  <Link href="/journal" className="mobile-navBar-item code-a luxury-title">
                   Journal
                  </Link>
                </li>
                <li className="item"
                onClick={toggle}>
                  <Link href="/art" className="mobile-navBar-item code-a luxury-title">
                   Art
                  </Link>
                </li>
              </ul>
              <div className="phone-menu-footer footer-container container-fluid">
                <div className="row justify-content-lg-around justify-content-md-center justify-content-center pb-3 pt-0 pt-lg-4 pb-lg-3 mb-lg-0 mt-lg-2 mt-0 phone-email-row">
                    <div className="col-md-2 col-6 text-left pt-4 pt-md-0">
                      <ul className="contact-list">
                      <span className="footer-small-title">contact info</span>
                          <li className="item">
                            <Link href="mailto:ideas@potoo.studio" aria-label="email" className="say-hello-a pb-lg-2">
                                ideas@potoo.studio
                                <span className="bottom-line"></span>
                            </Link>
                          </li>
                          <li className="item pt-md-2 pt-2">
                            <Link href="tel:3202604416" aria-label="phone" className="say-hello-a pb-lg-2">
                                +1 320.260.4416
                                <span className="bottom-line"></span>
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
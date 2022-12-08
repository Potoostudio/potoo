import React, {useState} from "react"
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

function Navbar() {

const [isOpened, setIsOpened] = useState(false);
const [isActive, setActive] = useState(false)

function toggle() {
  setIsOpened(wasOpened => !wasOpened);
  setActive(!isActive);
}
      return (
        <>
        <div className="nav">
          <ul className="nav-list">
            <li className="nav-item logo-item">
              <Link href="/" className="potoo-logo-a d-flex">
                <Image
                    src="/new-potoo-logo.svg"
                    width="18"
                    height="41"
                    alt="Potoo logo"
                    className="text-center"
                    />
              </Link>
            </li>
            <li 
            className={`nav-item menu-item ${isActive ? `menu-active` : ''}`}
             aria-label="menu" onClick={toggle}>
              <div className={`menu-icon ${isActive ? 'activeNav' : ''}`}>
                <p className="menu">Menu</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="mobile-header container">
          <div className="header-box">
            <div className={`menu-list ${isActive ? 'activeNav' : ''}`}>
              <ul className="list header-list">
                <li className="item"
                onClick={toggle}>
                  <Link href="/about" className="mobile-navBar-item design-a luxury-title">
                    Studio
                  </Link>
                </li>
                <li className="item"
                onClick={toggle}>
                  <Link href="/projects" className="mobile-navBar-item code-a luxury-title">
                      Work
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
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
        
        <div className="nav">
          <div className="logo-box">
                <Link href="/">
                  <a className="potoo-logo-a d-block">
                    <Image 
                        src="/new-potoo-logo.svg"
                        width="100%"
                        height="140px"
                        alt="Potoo logo"
                        />
                  </a>
                </Link>
          </div>
          <div className="hamburger-menu" aria-label="menu"
            onClick={toggle}>
            <div className={`menu-icon ${isActive ? 'activeNav' : ''}`}>
              <p className={`menu ${isActive ? `menu-active` : ''}`}>Menu</p>
            </div>
          </div>
        </div>
        <div className="mobile-header container">
          <div className="header-box">
            <div className={`menu-list ${isActive ? 'activeNav' : ''}`}>
              <ul className="list header-list">
                <li className="item"
                onClick={toggle}>
                  <Link href="/about">
                    <a className="mobile-navBar-item design-a">
                     Studio
                    </a>
                  </Link>
                </li>
                <li className="item"
                onClick={toggle}>
                  <Link href="/projects">
                    <a className="mobile-navBar-item code-a">
                      Projects
                    </a>
                  </Link>
                </li>
              </ul>
              <div className="phone-menu-footer footer-container container">
                <div className="row justify-content-lg-around justify-content-md-center justify-content-center pb-4 pt-4 pt-lg-4 pb-lg-3 mb-lg-5 mt-lg-2 mt-3 phone-email-row">
                          <div className="col-lg-4 col-11 text-lg-left text-center pb-3 pb-md-0 pt-2 pt-md-0 order-lg-1">
                              <Link href="mailto:ideas@potoo.studio" aria-label="email">
                                  <a className="say-hello-a pb-lg-2">
                                      ideas@potoo.studio
                                      <span className="bottom-line"></span>
                                  </a>
                              </Link>
                          </div>
                          <div className="col-lg-4 col-11 text-center text-lg-right pt-md-0 pt-2 pt-md-4 pt-lg-0 pb-3 pb-md-3 pb-lg-0 order-lg-5">
                              <Link href="tel:3202604416" aria-label="phone">
                                  <a className="say-hello-a pb-lg-2">
                                      +1 320 260 4416
                                      <span className="bottom-line"></span>
                                  </a>
                              </Link>
                          </div>
                          <div className="col-lg-1 col-4 col-md-2 text-center text-md-right pt-4 pt-md-4  mt-md-1 pb-md-3 pt-lg-0 order-lg-2">
                              <Link href="https://www.instagram.com/potoostudio/" aria-label="instagram">
                                  <a  className="social-media-a">
                                      IG
                                  </a>
                              </Link>
                          </div>
                          <div className="col-lg-1 col-4 col-md-2 text-center text-md-right pt-4 pt-md-4  mt-md-1 pb-md-3 pt-lg-0 order-lg-3">
                              <Link href="https://www.behance.net/potoostudio" aria-label="behance">
                                  <a  className="social-media-a">
                                      BE
                                  </a>
                              </Link>
                          </div>
                          <div className="col-lg-1 col-4 col-md-2 text-center text-md-left pt-4 pt-md-4 mt-md-1 pb-md-3 pt-lg-0 order-lg-4">
                              <Link href="https://dribbble.com/Potoo" aria-label="dribbble">
                                  <a  className="social-media-a">
                                      DB
                                  </a>
                              </Link>
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
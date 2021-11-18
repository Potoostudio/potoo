import React, {useState} from "react"
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"

function Navbar() {
  
const [isOpened, setIsOpened] = useState(false);
const [isActive, setActive] = useState(false)

function toggle() {
  setIsOpened(wasOpened => !wasOpened);
  setActive(!isActive);
}
      return (
        <>
        
        <motion.div
        initial={{y:-100}}
        animate={{y: 0}}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.4
        }}
        >
          <header className="header">
            <div className="main-header">
              <div className="logo-box">
                  <Link href="/design">
                    <a className="bottom-menu-h5 design-a">

                     Design &amp; Code
                    </a>
                  </Link>
                <Link href="/">
                    <a className="potoo-logo-a d-block">
                      <Image 
                          src="/new-potoo-logo.svg"
                          width="100%"
                          height="100"
                          alt="Potoo logo"
                          />
                    </a>
                  </Link>
                  <Link href="/projects">
                    <a className="bottom-menu-h5 code-a">
                      Work
                    </a>
                  </Link>
              </div>
            </div>
          </header>
        </motion.div>
        <div className="mobile-header container">
          <div className="header-box row justify-content-end">
            <div className="logo-box col-5">
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
            <div className="hamburger-menu col-3 justify-content-end" aria-label="menu"
              onClick={toggle}>
              <div className={`menu-icon ${isActive ? 'activeNav' : ''}`}>
                <span className="line-1"></span>
                <span className="line-2"></span>
              </div>
            </div>
            <div className={`menu-list ${isActive ? 'activeNav' : ''}`}>
              <ul className="list header-list">
                <li className="item"
                onClick={toggle}>
                  <Link href="/design">
                    <a className="mobile-navBar-item design-a">
                    Design &amp; Code
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
              <div className="phone-menu-footer container-fluid">
                <div className="row justify-content-center">
                  <div className="col-10 p-10-0">
                     <Link href="mailto:ideas@potoo.studio" aria-label="email">
                        <a className="say-hello-a pb-lg-2">
                            ideas@potoo.studio
                            <span className="bottom-line"></span>
                        </a>
                    </Link>
                  </div>
                  <div className="col-10 p-10-0">
                    <Link href="tel:3202604416" aria-label="phone">
                        <a className="say-hello-a pb-lg-2">
                            +1 320 260 4416
                            <span className="bottom-line"></span>
                        </a>
                    </Link>
                  </div>
                  <div className="row bg-white pt-2 mt-3 w-100 justify-content-around">
                  <div className="col-2 p-1n25rem">
                      <Link href="https://www.instagram.com/potoostudio/" aria-label="instagram">
                          <a  className="social-media-a">
                              <Image
                              src="/Instagram-icon.svg"
                              width={35}
                              height={35}
                              alt="Instagram Icon"
                              />
                          </a>
                      </Link>
                        </div>
                  <div className="col-2 p-1n25rem">
                      <Link href="https://www.behance.net/potoostudio" aria-label="behance">
                          <a  className="social-media-a">
                              <Image
                              src="/Behance-icon.svg"
                              width={35}
                              height={35}
                              alt="Behance Icon"
                              />
                          </a>
                      </Link>
                  </div>
                  <div className="col-2 p-1n25rem">
                      <Link href="https://dribbble.com/Potoo" aria-label="dribbble">
                          <a  className="social-media-a">
                              <Image
                              src="/Dribbble-icon.svg"
                              width={35}
                              height={35}
                              alt="Dribbbkle Icon"
                              />
                          </a>
                      </Link>
                  </div>
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
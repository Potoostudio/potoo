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
                      Projects
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
            <div className="hamburger-menu col-3"
              onClick={toggle}>
              <div className={`menu-icon ${isActive ? 'activeNav' : ''}`}>
                <span className="line-1"></span>
                <span className="line-2"></span>
              </div>
            </div>
            {/* {isOpened && ( */}
            <div className={`menu-list ${isActive ? 'activeNav' : ''}`}>
              <ul className="list header-list">
                <li className="item">
                  <Link href="/design">
                    <a className="mobile-navBar-item design-a">
                    Design &amp; Code
                    </a>
                  </Link>
                </li>
                <li className="item">
                  <Link href="/projects">
                    <a className="mobile-navBar-item code-a">
                      Projects
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            {/* )} */}
          </div>
        </div>
      </>
      );
  }

export default Navbar;
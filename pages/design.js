import React, { useRef, useEffect,useState, Component } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from "react-intersection-observer"
import { animate, motion, useAnimation } from "framer-motion"
import Parallax from 'react-rellax';


function Design() {

    const [selected, setSelected] = useState(0)
    const [isActive, setActive] = useState(0);

    const UpdateToggle = (index) => {
      setSelected(index)
      setActive(index)
    } 
     
        return (
          <>
            <Head>
              <title>Potoo Studio | Design</title>
              <link rel="icon" href="favicon.ico" />
              <link rel="manifest" href="/manifest.json"/>
              <meta name="description" content="POTOO STUDIO | creative logos, brand, webpages, and brochures"/>
              <meta property="og:title" content="POTOO STUDIO | Design" />
              <meta property="og:description" content="POTOO STUDIO | creative logos, brand, webpages, and brochures"/>
              <meta property="og:url" content="https://potoo.studio/design" />
              <meta property="og:type" content="website" />
            </Head>
            <div className="container-fluid design-first-container mw-1450 pt-5 pt-md-0">
              <div className="row justify-content-center pt-md-5 mt-md-5">
                  <div className="col-md-10 col-10 pt-md-1 ml-md-0 text-center">
                      <ul className="design-page-list-btns text-center">
                          <li className={`item text-left ${isActive === 0 ? "active" : ''}`}
                            onClick={() => UpdateToggle(0)}>
                              logos
                          </li>
                          <li className={`item ${isActive === 1 ? "active" : ''}`}
                          onClick={() => UpdateToggle(1)}>
                              graphics
                          </li>
                          <li className={`item text-right ${isActive === 2 ? "active" : ''}`}
                          onClick={() => UpdateToggle(2)}>
                              websites
                          </li>
                      </ul>
                  </div>
                   
                    {(selected === 0) && 
                    <div className="col-md-10 col-10 pt-md-1 mt-md-2" >
                      <ul className="project-list-image-list pl-0 px-0 ">
                        <li className="item project-image-item">
                          <Image
                            src="/kish-logo-thumnail.jpg"
                            width="470px"
                            height="352px"
                            alt="project kish"
                          />
                        <Link href="/projects/project-kish">
                          <a className="project-li-link">
                        <div className="project-item-overlay">
                          <div className="project-item-title">
                              Kish
                          </div>
                        <Link href="/projects/project-kish">
                          <a className="project-item-link">
                          <svg className="link-icon" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125 125"><path className="cls-1" d="M42.2,21.2,78,56.9,24.4,110.4l35.7,35.8,53.6-53.6,35.7,35.7V21.2Z" transform="translate(-24.4 -21.2)"/></svg>
                          </a>
                        </Link>
                        </div>
                          </a>
                        </Link>
                        </li>
                      </ul>
                     </div>
                    }
                    {(selected === 1) && 
                    <div className="col-md-10 col-10 pt-md-1 mt-md-2" >
                    <ul className="project-list-image-list pl-0 px-0 ">
                      <li className="item project-graphics-item">
                        <Image
                          src="/prosthesis.jpg"
                          width="1091px"
                          height="650px"
                          alt="Prosthesis poster"
                        />
                        <span className="project-title-year">
                            <span className="title">Prosthesis</span>  <span className="year">2022</span>
                        </span>
                      </li>
                      <li className="item project-graphics-item">
                        <Image
                          src="/airport-poster.jpg"
                          width="1091px"
                          height="743px"
                          alt="Airport Poster"
                        />
                        <span className="project-title-year">
                           <span className="title">Airport</span>  <span className="year">2021</span>
                        </span>
                      </li>
                    </ul>
                   </div>
                    }
                    {(selected === 2) && 
                    <div className="col-8 pt-md-5 mt-md-5" >
                      
                     </div>
                    }
              </div>
          </div>
          </>
        );
    }

export default Design;


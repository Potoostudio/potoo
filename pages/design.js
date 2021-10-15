import React, { useRef, useEffect } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from "react-intersection-observer"
import { animate, motion, useAnimation } from "framer-motion"
import Parallax from 'react-rellax';


function Design() {


  return (
    <>
      <Head>
        <title>Potoo Studio | Design</title>
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="description" content="Potoo Studio | creative logos, brand, webpages, and brochures"/>
        <meta property="og:title" content="Potoo Studio | Design" />
        <meta property="og:description" content="Potoo Studio | creative logos, brand, webpages, and brochures"/>
        <meta property="og:url" content="https://potoo.studio/design" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="container-fluid design-first-container mw-1200px mt-md-5">
        <div className="row justify-content-center">
            <div className="col-lg-10 col-md-10 col-11 pt-lg-0 ml-lg-0 text-center">
                <Parallax speed={-2}>
                    <ul className="design-list">
                        <li className="design-list-item item">
                            <p className="font-size-1-7r">
                               <span className="design-letters">d</span> azzling
                            </p>
                        </li>
                        <li className="design-list-item item">
                            <p className="font-size-1-7r">
                                <span className="design-letters">e</span> ngaging
                            </p>
                        </li>
                        <li className="design-list-item item">
                            <p className="font-size-1-7r">
                               <span className="design-letters">s</span> picy
                            </p>
                        </li>
                        <li className="design-list-item item">
                            <p className="font-size-1-7r">
                               <span className="design-letters">i</span> nner
                            </p>
                        </li>
                        <li className="design-list-item item">
                            <p className="font-size-1-7r">
                              <span className="design-letters">g</span>  lorious
                            </p>
                        </li>
                        <li className="design-list-item item">
                            <p className="font-size-1-7r">
                              <span className="design-letters">n</span>  ew
                            </p>
                        </li>
                    </ul>
                </Parallax>
            </div>
        </div>
    </div>
        <div className="container-fluid design-page-container pr-md-0 pt-md-5 mt-md-5">        
        <div className="row justify-content-start pt-lg-5">
            <div className="col-lg-4 col-md-10 col-11 pl-lg-5 pl-0">
                <Image
                src="/y-b.jpg"
                width={617}
                height={823}
                alt="desk picture"
                />
                <h5 className="custom-h5 pt-lg-2">
                    Think the <span className="ls-15"> unthinkable</span>
                </h5>
            </div>
            <div className="col-lg-5 col-md-10 col-10 py-5 mt-5 mb-4 pl-4 pl-lg-5 pt-lg-5 mb-md-0 pb-lg-0 mt-lg-5 text-center">
               <h3 className="design-content justify-content-center">
                Make it  
                    <span className="design-content-list">
                        <ul className="make-it-list">
                            <li className="item">
                                simple
                            </li>
                            <li className="item pt-4">
                                relative 
                            </li>
                            <li className="item pt-4">
                                effective
                            </li>
                            <li className="item pt-4">
                                accessible
                            </li>
                        </ul>
                    </span>    
               </h3>
            </div>
        </div>
        <div className="row justify-content-end pt-lg-4 mt-lg-3 pt-5 pb-lg-4">
            <div className="col-md-5 col-12 pr-md-auto">
                <h5 className="code-p custom-h5   ">
                    and code remarkable <span className="ls-15">pictures</span>
                </h5>
            </div>
            <div className="col-md-6 col-12 pr-0 text-md-right">
                <Image
                src="/mac-laptop-potoo.png"
                height="752px"
                width="964px"
                alt="potoo macbook laptop"
                />
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-11">
                
            </div>
        </div>
        </div>
    </>
  );
}

export default Design;


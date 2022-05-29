import React, { useEffect } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {



  return (
    <>
      <Head>
	  	<title>Potoo Studio | Seedstock</title>
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="description" content="Potoo Project Seedstock | Branding project, logo, website design & development, marketing material"/>
        <meta property="og:title" content="POTOO STUDIO | Projects, Denver" />
        <meta property="og:description" content="Potoo Studio project | Branding project, logo, website design & development, marketing material"/>
        <meta property="og:url" content="https://potoo.studio/potoo-project" />
        <meta property="og:type" content="website" />
      </Head>
      
      <div className="container-fluid mw-1450 pt-5 project-showcase-container">
          <div className="row project-row justify-content-center">
              <div className="col-8 project-col">
                  <ul className="project-list">
                      <li className="project-item project-title">
                          Seedstock
                      </li>
                      <li className="project-item project-year">
                          2022
                      </li>
                      <li className="project-item project-info">
                        Advertising
                      </li>
                      <li className="project-item project-impression">
                        Impression
                      </li>
                      <li className="project-item project-impression-is">
                        <em>Neat</em>
                      </li>
                  </ul>
              </div>
          </div>
          <div className="row justify-content-center pt-5 mt-4 pb-5 mb-5">
           <div className="col-md-7 col-10">
            <p className="normal-text">
                Seedstock was looking to update their menu from paper to digital and add new beer releases and events.
            </p>
            <p className="normal-text">
                The design of the digital screen contains three sections. Every section has different content and goals. 
            </p>
           </div>
           <div className="col-11">
            <Image
                src="/Seedstock-digital-board.png"
                height= "992px"
                width= "1515px"
                alt= "Seedstock Digital Board"
                />
           </div>
           <div className="col-8 pt-5 mt-5">
            <Image
                src="/Seedstock-slogan.png"
                height= "445px"
                width= "1053px"
                alt= "Seedstock Slogan"
                />
           </div>
           <div className="col-9 pt-5 mt-5 text-center">
            <Image
                src="/Seedstock-digital-board-first-section.png"
                height= "609.13px"
                width= "934.7px"
                alt= "Seedstock Slogan"
                />
           </div>
           <div className="col-11 pt-5 mt-5 text-center">
            <Image
                src="/Seedstock-screen-menu-content.png"
                height= "1395.43px"
                width= "778.34px"
                alt= "Seedstock Menu"
                />
           </div>
           <div className="col-md-6 col-10 pt-5 mt-5 mb-5 pb-5">
               <h4 className="bold pt-md-5 mt-md-5 mb-md-4">Accessibility </h4>
               <ul className="accessibility-list w-75 pt-md-5 pb-md-5">
                   <li className="item">
                    Eyesight <span className="float-right">20/20 to 20/60</span>
                   </li>
                   <li className="item pt-md-3">
                    Distance <span className="font-weight-light">(screen to viewer)</span>  <span className="float-right">9<sup>ft</sup></span>
                   </li>
                   <li className="item pt-md-3">
                   Contrast Ratio <span className="float-right">12.92</span>
                   </li>
               </ul>
           </div>
           <div className="col-11 text-center mt-5">
               <h3 className="text-center pt-lg-4rem">
                   User Experience
               </h3>
               <div className="grid-text pt-5">
                <p className="normal-text text-left">
                    <strong className="pr-2">Section A</strong> is designed to be the first
                    element customers view as it is placed at the
                    eye level. This section contains different
                    background-color, bigger font size, and offset
                    picture to attract customers’ attention and be
                    the first section to view
                </p>
                <p className="normal-text text-left">
                    <strong className="pr-2">Section B</strong> is designed to be the second
                    element customers view. The bright white
                    background and underline title is designed to
                    drive customers’ attention to this section after
                    viewing section A
                </p>
               </div>
           </div>
           <div className="col-lg-6 col-6 col-md-7 pt-4 pt-md-5">
                <div className="text-center">
                    <video className="video-" playsinline="" webkit-playsinline="" autoPlay loop muted width="100%" height="100%">
                        <source src="/Seedstock-screen-video-new.mp4" type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div className="col-10 col-md-6 col-lg-10 mt-5 text-center pb-5 mb-5 pt-5 mt-5 pt-lg-6rem">
                <h4 className="project-footer-title pt-lg-6rem">
                    Project made under the influence of
                </h4>
                <ul className="project-footer-list pt-4 mt-2">
                    <li className="item">
                        Sigur Rós
                    </li>
                    <li className="item">
                        Pablo’s Coffee
                    </li>
                    <li className="item">
                        Meditation
                    </li>
                    <li className="item">
                        Seedstock IPA
                    </li>
                </ul>
            </div>
          </div>
      </div>

    </>
  )
}


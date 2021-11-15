import React, { useEffect } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {



  return (
    <>
      <Head>
	  	<title>Potoo Studio | Projects</title>
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="description" content="Potoo Project | Branding, websites, and design projects"/>
        <meta property="og:title" content="Potoo Studio | Projects, Denver" />
        <meta property="og:description" content="Potoo Studio project | Branding, websites, and design projects in Denver"/>
        <meta property="og:url" content="https://potoo.studio/potoo-project" />
        <meta property="og:type" content="website" />
      </Head>
      
      <div className="container-fluid mw-1450 pt-5 project-showcase-container">
          <div className="row project-row justify-content-center">
              <div className="col-8 project-col">
                  <ul className="project-list">
                      <li className="project-item project-title">
                          Potoo
                      </li>
                      <li className="project-item project-year">
                          2021
                      </li>
                      <li className="project-item project-info">
                        Strategy, Branding, Design, Web
                      </li>
                      <li className="project-item project-impression">
                        Impression
                      </li>
                      <li className="project-item project-impression-is">
                        Luxury
                      </li>
                  </ul>
              </div>
          </div>
          <div className="row justify-content-center pt-5 mt-4">
           <div className="col-11">
            <Image
              src="/Potoo-logo-just-word-long-T.jpg"
              height= "1229"
              width= "1920"
              alt= "Flying potoo"
              />
           </div>
          </div>
          <div className="row justify-content-start row-project-info pt-5 mt-4">
           <div className="col-10 pt-4 pl-md-5">
            <div className="project-statement pt-md-5">
              <p className="">
                We are a creative design studio established in 2021.
              </p>
            </div>
            <div className="project-concept pt-md-5 pt-3">
              <p className="concept">
                Huge eyes are capable of spotting impressions and a wide and gaping mouth to
                display extraordinary reactions.
              </p>
            </div>
            <div className="project-more-info pt-md-5 pt-3">
              <p className="more-info">
                We like to break the law of the usual and go beyond the ordinary to create impressions.
              </p>
            </div>
           </div>
          </div>
          <div className="row project-images-might-change-row justify-content-center mt-5">
           <div className="col-4 potoo-business-card-col">
            <Image
              src="/Potoo-bird-black-business-card.jpg"
              height= "796"
              width= "616"
              alt= "Potoo business card"
              />
           </div>
           <div className="col-7">
            <Image
              src="/Potoo-word-black-business-card.jpg"
              height= "1230"
              width= "951"
              alt= "Potoo business card"
              />
           </div>
          </div>
          <div className="row justify-content-center we-do-it-row">
            <div className="we-do-it-with-style-col col-md-4 col-11">
              <p className="we-do-it">we do it <span className="with"> with</span></p>
              <p className="style">style</p>
            </div>
          </div>
          <div className="row jutify-content-center images-row">
            <Image
              src="/Potoo-word-logo-no-space.jpg"
              height="1080px"
              width="1920px"
              alt="Potoo logo just word"
            />
          </div>
          <div className="row justify-content-around poster-row">
            <div className="col-2 poster-col">
            <Image
              src="/Potoo-poster-one.jpg"
              height="421px"
              width="297px"
              alt="Potoo poster"
            />
            </div>
            <div className="col-2 poster-col">
            <Image
              src="/Potoo-poster-two.jpg"
              height="421px"
              width="297px"
              alt="Potoo poster"
            />
            </div>
            <div className="col-2 poster-col">
            <Image
              src="/Potoo-poster-three.jpg"
              height="421px"
              width="297px"
              alt="Potoo poster"
            />
            </div>
          </div>
          <div className="row justify-content-end p-0">
            <div className="col-12 m-0 p-0">
            <Image
              src="/potoo-brand-package.jpg"
              height="1463px"
              width="1920px"
              alt="Potoo brand package image"
            />
            </div>
          </div>
      </div>

    </>
  )
}


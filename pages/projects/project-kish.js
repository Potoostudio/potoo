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
                          Kish
                      </li>
                      <li className="project-item project-year">
                          2021
                      </li>
                      <li className="project-item project-info">
                        Branding
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
          <div className="row justify-content-center pt-0 mt-0">
           <div className="col-11 text-center">
           <iframe width="1220" height="1176" src="https://xd.adobe.com/embed/166aa574-fe8a-4fce-a363-24797c445843-4339/?fullscreen" frameBorder="0" allowFullScreen></iframe>
           </div>
          </div>
      </div>

    </>
  )
}


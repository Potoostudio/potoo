import React, { useEffect } from "react"
import Head from 'next/head'

export default function Projects() {



  return (
    <>
      <Head>
	  	<title>POTOO STUDIO | Projects</title>
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="description" content="POTOO Project | Branding project, logo and marketing material"/>
        <meta property="og:title" content="POTOO STUDIO | Projects, Denver" />
        <meta property="og:description" content="POTOO STUDIO project | Branding project, logo and marketing material"/>
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
           <div className="col-12 col-md-12 px-0 px-md-3 text-center">
           <iframe className="project-embeded" width="1220" height="1176" src="https://xd.adobe.com/embed/fac1e2d1-bc47-4053-9313-d3049f0136e2-af92/" frameBorder="0" allowFullScreen></iframe>
           </div>
          </div>
      </div>

    </>
  )
}


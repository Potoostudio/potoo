import React from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Projects() {



  return (
    <>
      <Head>
	  	<title>POTOO STUDIO | Seedstock</title>
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="description" content="Potoo Project Seedstock | Branding project, logo, website design & development, marketing material"/>
        <meta property="og:title" content="POTOO STUDIO | Projects, Denver" />
        <meta property="og:description" content="Potoo Studio project | Branding project, logo, website design & development, marketing material"/>
        <meta property="og:url" content="https://potoo.studio/potoo-project" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="container-fluid pt-5 project-showcase-container">
          <motion.div className="row project-row justify-content-start pb-md-5 pt-5 pt-md-0 mt-5 mt-md-5 pb-5 pb-md-0 px-md-5 px-4"
          initial={{y: 0}}
          animate={{y: -20}}
          viewport={{ once: true }}
          transition={{
            y: { duration: 1, delay: 0.4},
          }}>
              <div className="col-md-4 col-10 project-col px-0">
                  <ul className="project-list">
                      <li className="project-item project-year mt-4 mt-md-5 border-bottom text-left pb-1">
                          2022
                      </li>
                      <li className="project-item project-title text-uppercase pt-5 mt-5 text-left">
                          Abdulhamid-Gulf War
                      </li>
                      <li className="project-item project-info text-left">
                        Story <span className="divider">| </span>Web
                      </li>
                      <li className="project-item project-impression color-secondary pt-5 text-left">
                        Impression <span className="float-right"><em className="impression-lines">- Loss -</em></span>
                      </li>
                  </ul>
              </div>
          </motion.div>
          <div className="row full-h px-0 pt-5 mt-5 px-md-5 px-4 justify-content-end px-md-5 px-4">
              <div className="col-md-8 col-12 px-0 text-center px-0">
                  <div className="image-container">
                    <Image
                    src="/project-hamid-bio.jpg"
                    layout='fill'
                    className="image"
                    alt="Hamid Bio"
                    />
                  </div>
              </div>
          </div>
          <div className="row video-row px-md-5 px-4 justify-content-center pt-5 mt-5">
           <div className="col-md-8 col-12 px-0 mx-5 pt-md-5 mt-md-5">
             <h5 className="color-secondary text-center pt-md-5 mt-md-5 pb-md-4">Video</h5>
           <div style={{padding:"56.25% 0 0 0", position:"relative"}}><iframe src="https://player.vimeo.com/video/772922513?h=88eb3d10cd&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style={{position: "absolute", top:"0", left:"0", width:"100%", height:"100%"}} title="AU-Website-Video-v1-Oud.mp4"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
           </div>
          </div>
          <div className="row img-row py-5 my-5 bg-white justify-content-md-around justify-content-center">
              <div className="col-md-3 col-11 py-5 my-5 text-center">
                  <div className="image-container">
                    <Image
                        src="/project-hamid-poster.jpg"
                        layout="fill"
                        className="image"
                        alt="Hamid Bio"
                        />
                  </div>
              </div>
              <div className="col-md-3 col-11 py-5 my-5 text-center">
                  <div className="image-container">
                    <Image
                        src="/project-hamid-army-picture.jpg"
                        layout="fill"
                        className="image"
                        alt="Hamid Bio"
                        />
                  </div>
              </div>
          </div>
          <div className="row justify-content-start pt-5 mt-5 px-md-5 px-4">
            <div className="col-12 text-center pt-md-5 mt-md-5">
                <h1 className="font-weight-bolder color-secondary">Timeline</h1>
            </div>
          </div>
          <div className="row pt-3 pt-md-0 pb-5 my-5 pt-md-5 justify-content-center row-timeline">
            <div className="col-md-1 col-3">
              <ul className="list pl-0 list-style-none">
                  <li className="item lime small-text">
                      1962
                  </li>
                  <li className="item"><h4 className="font-weight-bold h4-smaller">Birth</h4></li>
              </ul>
            </div>
            <div className="col-md-1 col-3">
                <ul className="list pl-0 list-style-none">
                    <li className="item small-text">
                        1978
                    </li>
                    <li className="item"><h4 className="font-weight-bold h4-smaller">Youth</h4></li>
                </ul>
            </div>
            <div className="col-md-1 col-3">
                <ul className="list pl-0 list-style-none">
                    <li className="item small-text">
                        1980
                    </li>
                    <li className="item"><h4 className="font-weight-bold h4-smaller">War</h4></li>
                </ul>
            </div>
            <div className="col-md-2 col-10 pt-4 pt-md-0 pb-5 pb-md-0">
                <motion.div
                    className="image-container  cursor-pointer"
                    whileInView= {{rotate: 365}}
                    whileHover={{rotate: -365}}
                    transition={{
                        rotate: { duration: 6, repeat: 0, delay: 0.1},
                    }}
                    initial={{rotate: 280}}
                    >
                    <Image
                    src="/project-hamid-timeline.svg"
                    layout="fill"
                    className="image"
                    alt="Abdulhamid Pictures"
                    />
                </motion.div>
            </div>
            <div className="col-md-1 col-3">
                <ul className="list pl-0 list-style-none">
                    <li className="small-text item">
                        1988
                    </li>
                    <li className="item"><h4 className="font-weight-bold h4-smaller">Peace</h4></li>
                </ul>
            </div>
            <div className="col-md-1 col-3">
                <ul className="list pl-0 list-style-none">
                    <li className="item small-text">
                        1990
                    </li>
                    <li className="item"><h4 className="font-weight-bold h4-smaller">War</h4></li>
                </ul>
            </div>
            <div className="col-md-1 col-3">
                <ul className="list pl-0 list-style-none">
                    <li className="small-text item">
                        1991
                    </li>
                    <li className="item"><h4 className="font-weight-bold h4-smaller">Passing</h4></li>
                </ul>
            </div>
          </div>
          <div className="row py-5 my-5 justify-content-center">
              <div className="col-md-4 col-10 py-5 my-5 text-center">
                  <motion.div className="image-container"
                   whileInView= {{scale: 1}}
                   transition={{
                    scale: { duration: 1.5, repeat: 0, delay: 0.2},
                   }}
                   initial={{scale: 0.5}}
                  >
                    <Image
                        src="/project-hamid-arabic-name.svg"
                        layout="fill"
                        className="image"
                        alt="Hamid Bio"
                    />
                  </motion.div>
              </div>
          </div>
          <div className="row video-row auto-play py-5 my-5">
              <div className="col-12 text-center py-5">
              <video className="video-" playsinline="" webkit-playsinline="" autoPlay loop muted width="100%" height="100%">
                        <source src="/project-hamid-website-scrolling.mp4" type="video/mp4"/>
                    </video>
              </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5 col-8 text-center">
              <h2 className="luxury-title">
                Website
              </h2>
              <Link href="https:/abdulhamid.life" className="text-white border-bottom text-decoration-none">
                abdulhamid.life
              </Link>
            </div>
          </div>
          <div className="row py-5 my-5 justify-content-center mb-md-5 pb-md-5">
          <div className="col-10 col-md-6 col-lg-10 mt-5 pt-5 text-center pb-5 mb-5 pt-5 mt-5 pt-lg-6rem">
              <h1 className="project-footer-title pt-lg-6rem luxury-title">
                Project made under the influence of
              </h1>
              <motion.ul
                className="project-footer-list pt-3 mt-2"
                whileInView= {{y: 0}}
                viewport={{ once: true }}
                transition={{
                  y: { duration: 1.2, repeat: 0, delay: 0.4},
                }}
                initial={{y: 30}}
                >
                <li className="item luxury-title">
                  Oud Music
                </li>
                <li className="item luxury-title">
                  Tea (Chai)
                </li>
                <li className="item luxury-title">
                  Traveling
                </li>
              </motion.ul>
            </div>
          </div>
      </div>

    </>
  )
}


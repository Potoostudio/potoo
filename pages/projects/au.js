import React from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import IframePlayer from 'player-iframe-video'

export default function Projects() {

    const iFrame = <iframe width="100%" height="100%"
                          src="https://player.vimeo.com/video/772922513?h=b2086adb80&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;loop=1"
                          frameBorder="0"
                          allow="fullscreen; picture-in-picture"
                          allowFullScreen
                          title="test player iframe vimeo"
                          />



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
      
      <div className="container-fluid mw-1450 pt-5 project-showcase-container">
          <div className="row project-row justify-content-center pb-md-5 pt-5 pt-md-0 mt-5 mt-md-5 pb-5 pb-md-0">
              <div className="col-md-8 col-10 project-col">
                  <ul className="project-list">
                      <motion.li className="project-item project-title luxury-title"
                      animate={{opacity: 1}}
                      transition={{
                       delay: 0.77
                      }}
                      initial={{opacity: 0}}
                       >
                          Abdulhamid <br/> <span className="small-text">(Gulf War)</span>
                      </motion.li>
                      <motion.li className="project-item project-year mt-4 mt-md-5"
                       animate= {{y: 0}}
                       transition={{
                        y: { duration: 0.8, repeat: 0, delay: 0.83},
                       }}
                       initial={{y: "15px"}}
                       >
                          2022
                      </motion.li>
                      <motion.li className="project-item project-info"
                      animate= {{y: 0}}
                      transition={{
                       y: { duration: 0.8, repeat: 0, delay: 0.86},
                      }}
                      initial={{y: "15px"}}
                      >
                        Web
                      </motion.li>
                      <motion.li className="project-item project-impression"
                      animate= {{y: 0}}
                      transition={{
                       y: { duration: 0.8, repeat: 0, delay: 0.89},
                      }}
                      initial={{y: "15px"}}
                      >
                        Impression
                      </motion.li>
                      <motion.li className="project-item project-impression-is"
                       animate= {{y: 0}}
                       transition={{
                        y: { duration: 0.8, repeat: 0, delay: 0.9},
                       }}
                       initial={{y: "15px"}}
                      >
                        <em className="impression-lines">- Loss -</em>
                      </motion.li>
                  </ul>
              </div>
          </div>
          <div className="row full-h px-0 bg-white pt-md-5 mt-md-5">
              <div className="col-12 px-0 text-center">
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
          <div className="row video-row px-0 mx-0">
           <div className="col-12 px-0 mx-0">
           <div className="video-wrapper">
                <div className="video-row">
                    <div className="video-box">
                    <IframePlayer id={"iframe-vimeo-player-test"} iFrame={iFrame} />
                    </div>
                </div>
            </div>
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
          <div className="row justify-content-start pt-5 mt-5">
            <div className="col-11 text-left pt-md-5 mt-md-5">
                <h1 className="font-weight-bold pl-md-5">Timeline</h1>
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
            <div className="col-md-3 col-10 pt-4 pt-md-0 pb-5 pb-md-0">
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
              <div className="col-md-6 col-10 py-5 my-5 text-center">
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
          <div className="row py-5 my-5 justify-content-center mb-md-5 pb-md-5">
          <div className="col-10 col-md-6 col-lg-10 mt-5 pt-5 text-center pb-5 mb-5 pt-5 mt-5 pt-lg-6rem">
              <h1 className="project-footer-title pt-lg-6rem">
                Project made under the influence of
              </h1>
              <motion.ul
                className="project-footer-list pt-3 mt-2"
                whileInView= {{y: 0}}
                transition={{
                  y: { duration: 1.2, repeat: 0, delay: 0.2},
                }}
                initial={{y: 50}}
                >
                <li className="item">
                  Oud Music
                </li>
                <li className="item">
                  Tea (Chai)
                </li>
                <li className="item">
                  Traveling
                </li>
              </motion.ul>
            </div>
          </div>
      </div>

    </>
  )
}


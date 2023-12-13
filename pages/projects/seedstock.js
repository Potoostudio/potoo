import React from "react"
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Projects() {



  return (
    <>
      <Head>
	  	<title>Seedstock</title>
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="description" content="Potoo Project Seedstock | Branding project, logo, website design & development, marketing material"/>
        <meta property="og:title" content="Seedstock" />
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
                        Seedstock
                      </li>
                      <li className="project-item project-info text-left">
                        Digital Design
                      </li>
                      <li className="project-item project-impression color-secondary pt-5 text-left">
                        Impression <span className="float-right"><em className="impression-lines">- Neat -</em></span>
                      </li>
                  </ul>
              </div>
          </motion.div>
          <div className="row justify-content-center pt-5 mt-5 pb-5 mb-5 pt-md-5 mt-md-5">
           <motion.div className="col-md-7 col-10"
            whileInView= {{y: 0}}
            viewport={{ once: true }}
            transition={{
            y: { duration: 0.8, repeat: 0, delay: 0.4},
            }}
            initial={{y: "15px"}}
           >
            <p className="normal-text before-border">
                <span className="top-border color-white">Seedstock</span> <span className="color-secondary">was looking to update their menu from paper to digital and add new beer releases and events.</span>
            </p>
            <p className="normal-text color-secondary">
                The design of the digital screen contains three sections. Every section has different content and goals. 
            </p>
           </motion.div>
           <div className="col-10">
            <motion.div className="image-container"
            whileInView= {{opacity: 1}}
            viewport={{ once: true }}
            transition={{
            opacity: { duration: 0.8, repeat: 0, delay: 0.4},
            }}
            initial={{opacity: 0}}
            >
                <Image
                src="/Seedstock-digital-board.png"
                layout="fill"
                className="image"
                alt= "Seedstock Digital Board"
                />
            </motion.div>
           </div>
           <div className="col-md-7 col-10 pt-5 mt-5">
            <motion.div className="image-container"
             whileInView= {{opacity: 1}}
             viewport={{ once: true }}
             transition={{
             opacity: { duration: 0.8, repeat: 0, delay: 0.4},
             }}
             initial={{opacity: 0}}
            >
                <Image
                    src="/Seedstock-slogan.png"
                    layout="fill"
                    className="image"
                    alt= "Seedstock Slogan"
                    />
            </motion.div>
           </div>
           <div className="col-md-7 col-10 pt-5 mt-5 text-center">
            <motion.div className="image-container"
            whileInView= {{opacity: 1}}
            viewport={{ once: true }}
            transition={{
            opacity: { duration: 0.8, repeat: 0, delay: 0.4},
            }}
            initial={{opacity: 0}}>
                <Image
                    src="/Seedstock-digital-board-first-section.png"
                    layout="fill"
                    className="image"
                    alt= "Seedstock Slogan"
                />
            </motion.div>
           </div>
           <div className="col-11 col-md-7 pt-5 mt-5 text-center">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.4},
                }}
                initial={{opacity: 0}}>
                    <Image
                        src="/Seedstock-screen-menu-content.png"
                        layout="fill"
                        className="image"
                        alt= "Seedstock Menu"
                    />
                </motion.div>
           </div>
           <motion.div className="col-md-6 col-10 py-5 my-5"
            whileInView= {{y: 0}}
            viewport={{ once: true }}
            transition={{
            y: { duration: 0.8, repeat: 0, delay: 0.4},
            }}
            initial={{y: "30px"}}
           >
               <h4 className="bold accessibility">Accessibility</h4>
               <ul className="accessibility-list w-75 pt-md-5 pb-md-5">
                   <li className="item color-secondary">
                    Eyesight <span className="float-right">20/20 to 20/60</span>
                   </li>
                   <li className="item pt-md-3 color-secondary">
                    Distance <span className="font-weight-light">(screen to viewer)</span>  <span className="float-right">9<sup>ft</sup></span>
                   </li>
                   <li className="item pt-md-3 color-secondary">
                   Contrast Ratio <span className="float-right">12.92</span>
                   </li>
               </ul>
           </motion.div>
           <div className="col-11 text-center mt-3">
               <h3 className="text-center pt-lg-4rem">
                   User Experience
               </h3>
               <div className="grid-text pt-5">
                <p className="normal-text text-left">
                    <strong className="pr-2">Section A</strong>
                    <span className="color-secondary">
                    is designed to be the first
                    element customers view as it is placed at the
                    eye level. This section contains different
                    background-color, bigger font size, and offset
                    picture to attract customers’ attention and be
                    the first section to view</span>
                </p>
                <p className="normal-text text-left">
                    <strong className="pr-2">Section B</strong>
                    <span className="color-secondary">
                    is designed to be the second
                    element customers view. The bright white
                    background and underline title is designed to
                    drive customers’ attention to this section after
                    viewing section A
                    </span>
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
            <div className="col-10 col-md-6 col-lg-10 mt-5 pt-5 text-center pb-5 mb-5 pt-5 mt-5 pt-lg-6rem">
                <h4 className="project-footer-title pt-lg-6rem luxury-title">
                    Project made under the influence of
                </h4>
                <motion.ul className="project-footer-list pt-3 mt-2"
                whileInView= {{y: 0}}
                viewport={{ once: true }}
                transition={{
                  y: { duration: 1.2, repeat: 0, delay: 0.4},
                }}
                initial={{y: 30}}
                >
                    <li className="item luxury-title">
                        Sigur Rós
                    </li>
                    <li className="item luxury-title">
                        Pablo’s Coffee
                    </li>
                    <li className="item luxury-title">
                        Meditation
                    </li>
                    <li className="item luxury-title">
                        Seedstock IPA
                    </li>
                </motion.ul>
            </div>
          </div>
      </div>

    </>
  )
}


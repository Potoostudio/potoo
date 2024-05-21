import React, { useEffect } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Projects() {



  return (
    <>
      <Head>
	  	<title>POTOO | Projects</title>
        <link rel="icon" href="favicon.png" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="description" content="Potoo Project | Branding project, logo, website design & development, marketing material"/>
        <meta property="og:title" content="POTOO STUDIO | Projects, Denver" />
        <meta property="og:description" content="Potoo Studio project | Branding project, logo, website design & development, marketing material"/>
        <meta property="og:url" content="https://potoo.studio/potoo-project" />
        <meta property="og:type" content="website" />
      </Head>
      
      <div className="container-fluid mt-md-5 pt-8x">
          <div className="row project-row justify-content-start pb-md-5 pt-5 pt-md-0 mt-5 mt-md-5 pb-5 pb-md-0 px-md-5">
            <motion.div className="col-md-4 col-10"
            whileInView= {{y: 0}}
            viewport={{ once: true }}
            transition={{
            y: { duration: 0.8, repeat: 0, delay: 0.2, ease: "easeOut"},
            }}
            initial={{y: "25px"}}>
                <div className="image-container">
                    <Image
                        src="/Potoo Word Logo.svg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Hard Hat"/>
                </div>
            </motion.div>
          </div>
          <motion.div className="row project-row justify-content-md-end pb-md-5 pt-4 pt-md-0 mt-6x pb-5 pb-md-0 px-md-5"
          whileInView= {{y: 0}}
          viewport={{ once: true }}
          transition={{
          y: { duration: 0.8, repeat: 0, delay: 0.2},
          }}
          initial={{y: "25px"}}>
            <div className="col-md-2 col-10">
               <p className="project-title">
                   <span className="color-secondary">Client:</span> Potoo Studio
               </p>
            </div>
            <div className="col-md-2 col-10">
               <p className="project-title">
                   <span className="color-secondary">Type:</span> Branding and Web
               </p>
            </div>
            <div className="col-md-3 col-10">
               <p className="project-title">
                   <span className="color-secondary">Components:</span> Brand Stategy, Brand Identity, Verbal & Visual Communication, Design, and Web
               </p>
            </div>
          </motion.div>

          <div className="row project-row justify-content-md-center pb-md-5 pt-6rem pt-lg-8rem mt-5 mt-md-5 pb-5 pb-md-0 px-md-5 px-0">
            <div className="col-md-2 col-11">
                <motion.h3 className="luxury-title text-capitalize text-md-right"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    Potoo Studio
                </motion.h3>
            </div>
            <div className="col-md-5 col-11 pt-2 pt-md-0">
                <motion.p className="normal-text"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.25}}>
                    is a design studio focused on creating verbal and visual communication through brand strategy, brand identity, and design.
                </motion.p>
            </div>
          </div>
          <div className="row project-row justify-content-center pb-md-5 pt-6rem pt-lg-8rem mt-5 mt-md-5 pb-5 pb-md-0 px-md-5 px-0">
          <div className="col-md-12 col-12">
                <motion.h6 className="text-uppercase font-weight-bolder text-left"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    Personality
                </motion.h6>
            </div>
            <div className="col-md-12 col-12 pt-md-3 pt-2">
                <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Potoo-Brand-Personality_Page_005.jpg"
                        layout="fill"
                        className="image"
                        alt= "Potoo Personality"/>
                </motion.div>
            </div>
          </div>

          <div className="row project-row justify-content-around pb-md-5 pt-6rem pt-lg-12rem mt-5 mt-md-5 pb-5 pb-md-0 px-md-5 px-0">
            <div className="col-md-12 col-12">
              <h6 className="font-weight-bolder text-uppercase text-left pt-md-5 pt-3">
                  Voice
              </h6>
            </div>
            <div className="col-12">
              <ul className="list bg-white list-style-none color-dark luxury-title font-large d-flex justify-content-around py-5">
                <li className="item">
                  Creative
                </li>
                <li className="item">
                  Clear
                </li>
                <li className="item">
                  Uplifting
                </li>
              </ul>
            </div>
          </div>
          <div className="row project-row justify-content-around pb-md-5 pt-6rem pt-lg-12rem mt-5 mt-md-5 pb-5 pb-md-0 px-md-5 px-0">
            <div className="col-md-12 col-12">
              <h6 className="font-weight-bolder text-uppercase text-left pt-md-5 pt-3">
                  Message
              </h6>
            </div>
            <div className="col-12">
              <h1 className="luxury-title p-5 text-center border-bottom">
                The verbal and visual communication of your brilliant future.
              </h1>
            </div>
            <div className="col-12 pt-5 mt-5">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Potoo-Brand-Personality_Page_020.jpg"
                        layout="fill"
                        className="image"
                        alt= "Potoo Personality"/>
                </motion.div>
            </div>
            <div className="col-12 pt-5 mt-5">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Potoo-Brand-Personality_Page_017.jpg"
                        layout="fill"
                        className="image"
                        alt= "Potoo Personality"/>
                </motion.div>
            </div>
          </div>
          <div className="row project-row justify-content-around pb-md-5 pt-6rem pt-lg-12rem mt-5 mt-md-5 pb-5 pb-md-0 px-md-5 px-0">
            <div className="col-md-12 col-12">
              <h6 className="font-weight-bolder text-uppercase text-left pt-md-5 pt-3">
                  Logo
              </h6>
            </div>
            <div className="col-12 pt-3">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Potoo-word-logo.svg"
                        layout="fill"
                        className="image"
                        alt= "Potoo Personality"/>
                </motion.div>
            </div>
            <div className="col-12 pt-5 mt-5">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Potoo-Brand-Personality_page_110.jpg"
                        layout="fill"
                        className="image"
                        alt= "Potoo Personality"/>
                </motion.div>
            </div>
          </div>

          <div className="row project-row justify-content-center pb-md-5 pt-6rem pt-lg-12rem mt-5 mt-md-5 pb-5 pb-md-0 px-md-5 px-0">
            <motion.div className="col-12"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                <h6 className="text-uppercase font-weight-bolder">
                    Colors & Typography
                </h6>
            </motion.div>
            <div className="col-12 pt-3">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Potoo-Brand-Personality_Page_042.jpg"
                        layout="fill"
                        className="image"
                        alt= "Potoo Personality"/>
                </motion.div>
            </div>
            <div className="col-12 pt-3">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Potoo-Brand-Personality_Page_058.jpg"
                        layout="fill"
                        className="image"
                        alt= "Potoo Personality"/>
                </motion.div>
            </div>
            <div className="col-12 pt-3">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Potoo-Brand-Personality_Page_081.jpg"
                        layout="fill"
                        className="image"
                        alt= "Potoo Personality"/>
                </motion.div>
            </div>
            <div className="col-12 pt-3">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Potoo-Brand-Personality_Page_057.jpg"
                        layout="fill"
                        className="image"
                        alt= "Potoo Personality"/>
                </motion.div>
            </div>
            <div className="col-12 pt-3">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Potoo-Brand-Personality_Page_082.jpg"
                        layout="fill"
                        className="image"
                        alt= "Potoo Personality"/>
                </motion.div>
            </div>
            <div className="col-12 pt-3">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Potoo-Brand-Personality_Page_059.jpg"
                        layout="fill"
                        className="image"
                        alt= "Potoo Personality"/>
                </motion.div>
            </div>
          </div>
          <div className="row project-row justify-content-center pb-md-5 pt-6rem pt-lg-12rem mt-5 mt-md-5 pb-5 pb-md-0 px-md-5 px-0">
            <motion.div className="col-12"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                <h6 className="text-uppercase font-weight-bolder">
                    Visuals
                </h6>
            </motion.div>
            <div className="col-4 pt-3">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Poster-visual-three-colored-posters.jpg"
                        layout="fill"
                        className="image"
                        alt= "Potoo Personality"/>
                </motion.div>
            </div>
            <div className="col-4 pt-3">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Poster-visual-it's-potoo.jpg"
                        layout="fill"
                        className="image"
                        alt= "Potoo Personality"/>
                </motion.div>
            </div>
            <div className="col-4 pt-3">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Classic-Letter-Paper.jpg"
                        layout="fill"
                        className="image"
                        alt= "Potoo Personality"/>
                </motion.div>
            </div>
            <div className="col-12 pt-3">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Poster-visual-personality.jpg"
                        layout="fill"
                        className="image"
                        alt= "Potoo Personality"/>
                </motion.div>
            </div>
            
            <div className="col-12 pt-3">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Poster-visual-three-posters.jpg"
                        layout="fill"
                        className="image"
                        alt= "Potoo Personality"/>
                </motion.div>
            </div>
            <div className="col-12 pt-3">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Envelope.jpg"
                        layout="fill"
                        className="image"
                        alt= "Potoo Personality"/>
                </motion.div>
            </div>
            <div className="col-12 pt-3">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Books-stamp.jpg"
                        layout="fill"
                        className="image"
                        alt= "Potoo Personality"/>
                </motion.div>
            </div>
          </div>
      </div>
    </>
  )
}


import React, { useEffect } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Projects() {



  return (
    <>
      <Head>
	  	<title>POTOO | Projects POTOO</title>
        <link rel="icon" href="favicon.png" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="description" content="Branding Agency Based in Denver and Baghdad"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="branding agency in Denver, branding agency in Baghdad, creative agency in Baghdad, creative agency in Denver" />
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
                   <span className="color-secondary">Components:</span> Brand Strategy, Brand Identity, Verbal & Visual Communication, Design, and Web
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
          <div className="row project-row justify-content-around pb-md-5 pt-6rem pt-lg-12rem mt-5 mt-md-5 pb-5 pb-md-0 px-md-5 px-0">
            <div className="col-md-12 col-12">
              <h6 className="color-secondary text-left pt-md-5 pt-3">
                  Logo
              </h6>
            </div>
            <div className="col-12 col-md-5 pt-3">
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
          </div>
          <div className="row project-row justify-content-around pb-md-5 pt-6rem pt-lg-12rem mt-5 mt-md-5 pb-5 pb-md-0 px-md-5 px-0">
          <div className="col-md-12 col-12">
              <h6 className="color-secondary text-left pt-md-5 pt-3">
                  Message: we create the 
              </h6>
            </div>
            <div className="col-12 col-md-6 pt-4">
              <p className="color-secondary">
              verbal communication of your brilliant future.
              </p>
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Potoo-Message-verbal.jpg"
                        layout="fill"
                        className="image"
                        alt= "Potoo Personality"/>
                </motion.div>
            </div>
            <div className="col-12 col-md-6 pt-4">
              <p className="color-secondary">
                visual communication of your brilliant future.
              </p>
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Potoo-Message-Visual.jpg"
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
                <h6 className="color-secondary">
                    Colors
                </h6>
            </motion.div>
            <div className="col-12 col-md-6 pt-3">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Potoo-Dark-Color.jpg"
                        layout="fill"
                        className="image"
                        alt= "Potoo Personality"/>
                </motion.div>
            </div>
            <div className="col-12 col-md-6 pt-3">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Potoo-Colors-Cards.jpg"
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
                <h6 className="color-secondary">
                    Typography
                </h6>
            </motion.div>
            <div className="col-12 col-md-6 pt-3">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Potoo-Type-Poster.jpg"
                        layout="fill"
                        className="image"
                        alt= "Potoo Personality"/>
                </motion.div>
            </div>
            <div className="col-12 col-md-6 pt-3">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Potoo-P.jpg"
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
                        src="/Potoo-Brand-Info.jpg"
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
                <h6 className="color-secondary">
                  Stationery
                </h6>
            </motion.div>
            <div className="col-md-4 col-12 pt-3">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Potoo-Letterhead.jpg"
                        layout="fill"
                        className="image"
                        alt= "Potoo Personality"/>
                </motion.div>
            </div>
            <div className="col-md-4 col-12 pt-3">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Potoo-Logo-Box.jpg"
                        layout="fill"
                        className="image"
                        alt= "Potoo Personality"/>
                </motion.div>
            </div>
            <div className="col-md-4 col-12 pt-3">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Potoo-BusinessCards.jpg"
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
                        src="/Potoo-Brand-Mockup.jpg"
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
                <h6 className="color-secondary">
                  Screen
                </h6>
            </motion.div>
            <div className="col-md-4 col-12 pt-3">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Potoo-Screens.jpg"
                        layout="fill"
                        className="image"
                        alt= "Potoo Personality"/>
                </motion.div>
            </div>
            <div className="col-md-4 col-12 pt-3">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Potoo-Phone.jpg"
                        layout="fill"
                        className="image"
                        alt= "Potoo Personality"/>
                </motion.div>
            </div>
            <div className="col-md-4 col-12 pt-3">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Potoo-website.jpg"
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
                <h6 className="color-secondary">
                  Visuals
                </h6>
            </motion.div>
            <div className="col-md-4 col-12 pt-3">
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
            <div className="col-md-4 col-12 pt-3">
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
            <div className="col-md-4 col-12 pt-3">
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


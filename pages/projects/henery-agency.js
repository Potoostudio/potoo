import React, { useEffect } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Projects() {



  return (
    <>
      <Head>
	  	<title>POTOO | Henery Agency</title>
        <link rel="icon" href="favicon.png" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="description" content="Potoo Project | Branding project, logo, website design & development, marketing material"/>
        <meta property="og:title" content="POTOO STUDIO | Projects, Denver" />
        <meta property="og:description" content="Potoo Studio project | Branding project, logo, website design & development, marketing material"/>
        <meta property="og:url" content="https://potoo.studio/potoo-project" />
        <meta property="og:type" content="website" />
      </Head>
      
      <div className="container-fluid mt-md-5 pt-8x">
          <div className="row project-row justify-content-start pt-5 pt-md-0 mt-5 mt-md-5 pb-5 pb-md-0 px-md-5">
            <motion.div className="col-md-2 col-10"
            whileInView= {{y: 0}}
            viewport={{ once: true }}
            transition={{
            y: { duration: 0.8, repeat: 0, delay: 0.2, ease: "easeOut"},
            }}
            initial={{y: "25px"}}>
                <div className="image-container">
                    <Image
                        src="/Henery-Agency-logo-the-dots.svg"
                        layout="fill"
                        className="image w-half"
                        alt= "Henery Agency logo dots"/>
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
                   <span className="color-secondary">Client:</span> Henery Agency
               </p>
            </div>
            <div className="col-md-2 col-10">
               <p className="project-title">
                   <span className="color-secondary">Type:</span> Brand
               </p>
            </div>
            <div className="col-md-3 col-10">
               <p className="project-title">
                   <span className="color-secondary">Components:</span> Brand Strategy, Verbal & Visual Identity, and Design
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
                    Henery Agency
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
                    In a world of common practices and resistance to change, Henery Agency launched to capture the visual identities of clients through uncommon channels.
                </motion.p>
            </div>
          </div>
          <div className="row project-row justify-content-around pb-md-5 pt-6rem pt-lg-12rem mt-5 mt-md-5 pb-5 pb-md-0 px-md-5 px-0">
            <div className="col-12 col-md-12 pt-3">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/henery-agency-logo-sketchs.png"
                        layout="fill"
                        className="image"
                        alt= "henery agency logo sketch"/>
                </motion.div>
            </div>
            <div className="col-12 col-md-6 p-0 pl-md-3 pt-md-5 pt-4">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/henery-agency-logo-details-1.jpg"
                        layout="fill"
                        className="image"
                        alt= "henery agency logo details"/>
                </motion.div>
            </div>
            <div className="col-12 col-md-6 p-0 pr-md-3 pt-md-5 pt-1">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/henery-agency-logo-details-2.jpg"
                        layout="fill"
                        className="image"
                        alt= "henery agency logo details"/>
                </motion.div>
            </div>
            <div className="col-12 col-md-12 pt-3 mt-8x">
                  <motion.video className="video-" playsinline="" webkit-playsinline="" autoPlay loop muted width="100%" height="100%"
                    whileInView= {{opacity: 1}}
                    viewport={{ once: true }}
                    transition={{
                    opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                   }}
                   initial={{opacity: 0.3}}>
                        <source src="/henery agency logo animation s.mp4" type="video/mp4"/>
                    </motion.video>
            </div>
          </div>
          <div className="row project-row justify-content-around pb-md-5 pt-6rem pt-lg-12rem mt-5 mt-md-5 pb-5 pb-md-0 px-md-5 px-0">
            <div className="col-md-12 col-12">
              <div style={{padding:"56.25% 0 0 0", position:"relative"}}><iframe src="https://player.vimeo.com/video/1012485230?h=88eb3d10cd&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style={{position: "absolute", top:"0", left:"0", width:"100%", height:"100%"}} title="AU-Website-Video-v1-Oud.mp4"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
            </div>
          </div>

          <div className="row project-row justify-content-center pb-md-5 pt-6rem pt-lg-12rem mt-5 mt-md-5 pb-5 pb-md-0 px-md-5 px-0">
            <div className="col-12 pt-3">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/henery-agency-logo-sign.jpg"
                        layout="fill"
                        className="image"
                        alt= "henery-agency-logo-sign"/>
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
                        src="/henery-agency-signs-directions.jpg"
                        layout="fill"
                        className="image"
                        alt= "henery-agency-signs-directions"/>
                </motion.div>
            </div>
            <div className="col-12 col-md-12 pt-3">
                  <motion.video className="video-" playsinline="" webkit-playsinline="" autoPlay loop muted width="100%" height="100%"
                    whileInView= {{opacity: 1}}
                    viewport={{ once: true }}
                    transition={{
                    opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                   }}
                   initial={{opacity: 0.3}}>
                        <source src="/Uncommon animation.mp4" type="video/mp4"/>
                    </motion.video>
            </div>
          </div>
          <div className="row project-row justify-content-center pb-md-5 mt-8x pb-5 pb-md-0 px-md-5 px-0">
            <div className="col-12 mt-2x">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/henery-agency-logo-colors.jpg"
                        layout="fill"
                        className="image"
                        alt= "henery-agency-logo-colors"/>
                </motion.div>
            </div>
            <div className="col-12 mt-2x">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/henery-agency-typography-icons.jpg"
                        layout="fill"
                        className="image"
                        alt= "henery agency typography icons"/>
                </motion.div>
            </div>
            <div className="col-12 mt-10x">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/henery-agency-poster-subway.jpg"
                        layout="fill"
                        className="image"
                        alt= "henery-agency-poster-subway"/>
                </motion.div>
            </div>
          </div>
          <div className="row project-row justify-content-center pb-md-5 mt-4x pb-5 pb-md-0 px-md-5 px-0">
            <div className="col-md-4 col-12 pt-3">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/henery-agency-two-covers.jpg"
                        layout="fill"
                        className="image"
                        alt= "henery agency two covers"/>
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
                        src="/henery-agency-business-card.jpg"
                        layout="fill"
                        className="image"
                        alt= "henery agency business card"/>
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
                        src="/henery-agency-logo-spacing.jpg"
                        layout="fill"
                        className="image"
                        alt= "henery agency logo spacing"/>
                </motion.div>
            </div>
          </div>
          <div className="row project-row justify-content-around pb-md-5 pt-6rem pt-lg-12rem mt-5 mt-md-5 pb-5 pb-md-0 px-md-5 px-0">
          <div className="col-12 mt-4x">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/henery-agency-lungs-poster.jpg"
                        layout="fill"
                        className="image"
                        alt= "henery-agency-lungs"/>
                </motion.div>
            </div>
            <div className="col-3 mt-12x">
                <motion.div className="image-container"
                    whileInView= {{opacity: 1}}
                    viewport={{ once: true }}
                    transition={{
                    opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                    }}
                    initial={{opacity: 0.3}}>
                      <Image
                          src="/henery-agency-colors-black.jpg"
                          layout="fill"
                          className="image"
                          alt= "henery agency color cards"/>
                  </motion.div>
              </div>
              <div className="col-4 mt-4x">
                <motion.div className="image-container"
                    whileInView= {{rotate: 0}}
                    viewport={{ once: true }}
                    transition={{
                    rotate: { duration: 1, repeat: 0, delay: 0.2},
                    }}
                    initial={{rotate: 0}}>
                      <Image
                          src="/henery-agency-colors-orange.jpg"
                          layout="fill"
                          className="image"
                          alt= "henery agency color cards"/>
                  </motion.div>
              </div>
              <div className="col-3 mt-12x">
                <motion.div className="image-container"
                    whileInView= {{opacity: 1}}
                    viewport={{ once: true }}
                    transition={{
                    opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                    }}
                    initial={{opacity: 0.3}}>
                      <Image
                          src="/henery-agency-colors-gray.jpg"
                          layout="fill"
                          className="image"
                          alt= "henery agency color cards"/>
                  </motion.div>
              </div>
          </div>
          <div className="row project-row justify-content-around pb-md-5 pt-4rem pt-lg-6rem mt-5 mt-md-5 pb-5 pb-md-0 px-md-5 px-0">
            <div className="col-12 pt-3">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/henery-agency-icons-dark-bg.jpg"
                        layout="fill"
                        className="image"
                        alt= "henery agency icons"/>
                </motion.div>
            </div>
            <div className="col-12 mt-2x">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/henery-agency-info-flyers.jpg"
                        layout="fill"
                        className="image"
                        alt= "henery agency info cards"/>
                </motion.div>
            </div>
            <div className="col-12 mt-4x">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/henery-agency-icons-stack.jpg"
                        layout="fill"
                        className="image"
                        alt= "henery-agency-icons-stack.jpg"/>
                </motion.div>
            </div>
          </div>
          <div className="row project-row justify-content-center pb-md-5 pt-6rem pt-lg-12rem mt-5 mt-md-5 pb-5 pb-md-0 px-md-5 px-0">
            <div className="col-12 pt-3">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/henery-agency-logo-many-circles.jpg"
                        layout="fill"
                        className="image"
                        alt= "henery-agency-logo-many-circles"/>
                </motion.div>
            </div>
            <div className="col-12 mt-12x">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/henery-agency-who-and-what.jpg"
                        layout="fill"
                        className="image"
                        alt= "henery-agency-who-and-what"/>
                </motion.div>
            </div>
            <div className="col-12 mt-1">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/henery-agency-colors-2.jpg"
                        layout="fill"
                        className="image"
                        alt= "henery-agency-colors-2"/>
                </motion.div>
            </div>
            
            <div className="col-12 mt-8x">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/henery-agency-marbel-posters.jpg"
                        layout="fill"
                        className="image"
                        alt= "henery-agency-marbel-poster "/>
                </motion.div>
            </div>
            <div className="col-12 mt-8x">
              <motion.div className="image-container"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/henery-agency-knowing-who-we-are.jpg"
                        layout="fill"
                        className="image"
                        alt= "henery-agency-knowing-who-we-are"/>
                </motion.div>
            </div>
          </div>
      </div>
    </>
  )
}


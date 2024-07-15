import React from "react"
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from "next/link"

export default function Projects() {
      

  return (
    <>
      <Head>
	  	<title>Jaeger—Aeration </title>
        <link rel="icon" href="favicon.png" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="description" content="POTOO STUDIO Project Jaeger—Aeration | Branding project, logo, website design & development, Visual Design"/>
        <meta property="og:title" content="Jaeger Aeration" />
        <meta property="og:description" content="POTOO STUDIO project | Branding project, logo, website design & development, Visual Design`"/>
        <meta property="og:url" content="https://potoo.studio/jaeger-aeration" />
        <meta property="og:type" content="website" />
      </Head>


      <div className="container-fluid pt-5 mt-md-5">
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
                        src="/Jaeger-Hard-Hat.png"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Hard Hat"/>
                </div>
            </motion.div>
          </div>
          <motion.div className="row project-row justify-content-md-end pb-md-5 pt-4 pt-md-0 mt-0 mt-md-5 pb-5 pb-md-0 px-md-5"
          whileInView= {{y: 0}}
          viewport={{ once: true }}
          transition={{
          y: { duration: 0.8, repeat: 0, delay: 0.2},
          }}
          initial={{y: "25px"}}>
            <div className="col-md-2 col-10">
               <p className="project-title">
                   <span className="color-secondary">Client:</span> Jaeger Aeration
               </p>
            </div>
            <div className="col-md-2 col-10">
               <p className="project-title">
                   <span className="color-secondary">Type:</span> Branding and Web
               </p>
            </div>
            <div className="col-md-3 col-10">
               <p className="project-title">
                   <span className="color-secondary">Components:</span> UI/UX, Stationary Design, Digital
                           Design, Brand Identity, and Web
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
                    Jaeger Aeration
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
                    Is a wastewater treatment company <strong>“Pioneer of Fine-Bubble” </strong>
                    Jäger created the world’s first fine-bubble membrane
                    diffuser in <em>1973</em> as a replacement for ceramic diffusers. <br/> <br/>

                    We wanted to display the <em>50 years</em> in business with the
                    new voice  “Pioneer of Fine-Bubble” and give <strong>Jaeger
                    Aeration</strong> a look for the future.
                </motion.p>
            </div>
          </div>
          <div className="row project-row justify-content-center pb-md-5 pt-6rem pt-lg-8rem mt-5 mt-md-5 pb-5 pb-md-0 px-md-5 px-0">
            <div className="col-md-10 col-12">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Jaeger-logo.svg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-10 col-12">
                <motion.h6 className="text-uppercase font-weight-bolder text-md-center"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    logo
                </motion.h6>
            </div>
          </div>

          <div className="row project-row justify-content-around pb-md-5 pt-6rem pt-lg-12rem mt-5 mt-md-5 pb-5 pb-md-0 px-md-5 px-0">
            <div className="col-md-5 col-11 bg-yellow px-0">
                <motion.div className=""
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                  <video className="video- p-md-5 p-3" playsinline="" webkit-playsinline="" autoPlay loop muted width="100%" height="100%">
                        <source src="/Jaeger-Voice.mp4" type="video/mp4"/>
                    </video>
                </motion.div>
            </div>
            <div className="col-md-5 col-12">

                <h6 className="font-weight-bolder text-uppercase text-left pt-md-5 pt-3">
                    Voice
                </h6>
                <motion.div className="image-container pt-md-5 pt-2"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                    src="/Jaeger-Voice.svg"
                    layout="fill"
                    className="image"
                    alt= "Jaeger Aeration Voice"/>
                </motion.div>
            </div>
          </div>

          <div className="row project-row justify-content-center pb-md-5 pt-6rem pt-lg-12rem mt-5 mt-md-5 pb-5 pb-md-0 px-md-5 px-0">
            <motion.div className="col-md-5 col-12"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                <h6 className="text-uppercase font-weight-bolder">
                    Systems
                </h6>
                <p className="pt-4">
                    We used <em>typography</em>, <em>photography</em>, and <em>design </em>
                    to showcase the energy efficiency of <strong>Jaeger’s </strong>
                    new systems designed and built for lagoons
                    and basins.
                </p>
            </motion.div>
          </div>

          <div className="row project-row justify-content-around pb-md-5 pt-6rem pt-lg-12rem mt-5 mt-md-5 pb-5 pb-md-0 px-md-5 px-0">
            <div className="col-md-4 col-11 bg-light-purple px-0">
                  <motion.video className="video- p-md-5 p-4" playsinline="" webkit-playsinline="" autoPlay loop muted width="100%" height="100%"
                    whileInView= {{opacity: 1}}
                    viewport={{ once: true }}
                    transition={{
                    opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                   }}
                   initial={{opacity: 0.3}}>
                        <source src="/OxyLift&OxyPod.mp4" type="video/mp4"/>
                    </motion.video>
            </div>
            <div className="col-md-4 col-11 bg-light-orange mt-4 mt-md-0 px-0">
                <motion.div className="image-container"
                    whileInView= {{opacity: 1}}
                    viewport={{ once: true }}
                    transition={{
                    opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                    initial={{opacity: 0.3}}>
                    <Image
                    src="/Jaeger-Products.svg"
                    layout="fill"
                    className="image p-md-5 p-4"
                    alt= "Jaeger Aeration Products"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-5">
                <h6 className="text-uppercase font-weight-bolder">
                    Products
                </h6>
                <motion.p className="pt-4"
                    whileInView= {{opacity: 1}}
                    viewport={{ once: true }}
                    transition={{
                    opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                    initial={{opacity: 0.3}}>
                    Each product has a vital role in
                    making the systems and a unique
                    identity. We aimed to highlight
                    their diversity and importance
                </motion.p>
            </div>
          </div>

          <div className="row project-row justify-content-start pb-md-5 pt-6rem pt-lg-12rem mt-5 mt-md-5 pb-5 pb-md-0 px-md-5 px-0">
            <div className="col-md-12 col-12">
                <h6 className="text-uppercase font-weight-bolder">
                    Visuals
                </h6>
            </div>
            <div className="col-md-12 col-12 pt-md-3">
                    <motion.div className="image-container p-0"
                        whileInView= {{opacity: 1}}
                        viewport={{ once: true }}
                        transition={{
                        opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                    }}
                        initial={{opacity: 0.3}}>
                        <Image
                        src="/Jaeger-Brand-Visuals.jpg"
                        layout="fill"
                        className="image p-0"
                        alt= "Jaeger Aeration Visuals"/>
                    </motion.div>
                </div>
          </div>

          <div className="row project-row justify-content-start pb-md-5 pt-6rem pt-lg-12rem mt-5 mt-md-5 pb-5 pb-md-0 px-md-5 px-0">
            <div className="col-md-12 col-12 pt-md-3">
                    <motion.div className="image-container p-0"
                        whileInView= {{opacity: 1}}
                        viewport={{ once: true }}
                        transition={{
                        opacity: { duration: 0.8, repeat: 0, delay: 0.2, ease: "easeOut"},
                    }}
                        initial={{opacity: 0.45}}>
                        <Image
                        src="/Jaeger-Website-Screenshot.jpg"
                        layout="fill"
                        className="image p-0"
                        alt= "Jaeger Aeration Website"/>
                    </motion.div>
                </div>
                <div className="col-md-12 col-12 pt-4 text-center">
                    <h6 className="text-uppercase font-weight-bolder">
                        <Link href="https://www.jaeger-aeration.com" target="_blank" className="color-white text-decoration-underline text-uppercase font-weight-bolder">
                            website
                        </Link>
                    </h6>
            </div>
          </div>
          
      </div>

    </>
  )
}


import React, { useEffect } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Projects() {



  return (
    <>
      <Head>
	  	<title>Art | Shapes</title>
        <link rel="icon" href="favicon.png" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="description" content="Art | Shapes"/>
        <meta property="og:title" content="Art | Shapes" />
        <meta property="og:description" content="Art | Shapes"/>
        <meta property="og:url" content="https://potoo.studio/journal/brand-research"/>
        <meta property="og:type" content="website" />
      </Head>
      
      <div className="container-fluid pt-6x bg-white">
          <motion.div className="row project-row justify-content-center pb-md-5 pt-4 pt-md-0 mt-2x pb-0 px-md-0"
            whileInView= {{y: 0}}
            viewport={{ once: true }}
            transition={{
            y: { duration: 0.8, repeat: 0, delay: 0.2},
            }}
            initial={{y: "25px"}}>
              <div className="col-md-12 col-12 px-md-4 font-x-large top-line bottom-line">
                <h1 className="luxury-title font-x-large color-dark text-left py-4">
                  Minimalist shapes
                </h1>
            </div>
          </motion.div>
          <div className="row project-row justify-content-md-around justify-content-center pb-md-5 pt-6rem pt-lg-2rem mt-5 mt-md-5 pb-5 pb-md-0 px-md-5 px-0">
            <div className="col-md-5 col-11 art-shadow px-0 mt-4x">
              <div
                className="image-container">
                  <Image
                    src="/22.jpg"
                    layout="fill"
                    className="image"
                    alt="22"
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="col-md-5 col-11 art-shadow px-0 mt-4x">
              <div className="image-container">
                  <Image
                    src="/36.jpg"
                    layout="fill"
                    className="image"
                    alt="36"
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="col-md-5 col-11 art-shadow px-0 mt-4x">
              <div className="image-container">
                  <Image
                    src="/A.jpg"
                    layout="fill"
                    className="image"
                    alt="A"
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="col-md-5 col-11 art-shadow px-0 mt-4x">
              <div className="image-container">
                  <Image
                    src="/A.1.jpg"
                    layout="fill"
                    className="image"
                    alt="A"
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="col-md-5 col-11 art-shadow px-0 mt-4x">
              <div className="image-container">
                  <Image
                    src="/Face.jpg"
                    layout="fill"
                    className="image"
                    alt="face"
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="col-md-5 col-11 art-shadow px-0 mt-4x">
              <div className="image-container">
                  <Image
                    src="/Person.jpg"
                    layout="fill"
                    className="image"
                    alt="sleep"
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="col-md-5 col-11 art-shadow px-0 mt-4x">
              <div className="image-container">
                  <Image
                    src="/Shape.jpg"
                    layout="fill"
                    className="image"
                    alt="shape"
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="col-11  px-0 mt-4x">
              <div className="image-container">
                  <Image
                    src="/Poster-visual-three-colored-posters.jpg"
                    layout="fill"
                    className="image"
                    alt="Poster-visual-three-colored-posters"
                    loading="lazy"
                  />
              </div>
            </div>
          </div>
      </div>
    </>
  )
}


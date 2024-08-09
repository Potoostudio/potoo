import React, { useEffect } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Projects() {



  return (
    <>
      <Head>
	  	<title>Art | Making typography move</title>
        <link rel="icon" href="favicon.png" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="description" content="Art | Making typography move"/>
        <meta property="og:title" content="Art | Making typography move" />
        <meta property="og:description" content="Art | Making typography move"/>
        <meta property="og:url" content="https://potoo.studio/journal/brand-research"/>
        <meta property="og:type" content="website" />
      </Head>
      
      <div className="container-fluid pt-4x bg-white">
          <motion.div className="row project-row justify-content-center pb-md-5 pt-2 pt-md-0 mt-2x pb-0 px-md-0"
          whileInView= {{y: 0}}
          viewport={{ once: true }}
          transition={{
          y: { duration: 0.8, repeat: 0, delay: 0.2},
          }}
            initial={{y: "25px"}}>
              <div className="col-md-12 col-12 bottom-line top-line py-4 px-0">
                <h1 className="luxury-title font-x-large color-dark text-left px-md-4 pl-4 pl-md-0">
                 Making typography <span className={"tab-size-big"}></span> m<span className={"tab-size-big"}></span> o <span className={"tab-size-big"}></span> v <span className={"tab-size-big"}></span>e
                </h1>
            </div>
              <div className="col-md-12 col-12 bottom-line py-4 px-0">
                <p className="luxury-title font-x-large color-dark line-height-normal text-left px-md-4 pl-4 pl-md-0">
                Our mission is to use art to make life enjoyable. Typography in its simplest form can be empirically meaningful. We moved letters to display the motions of the words.
                </p>
            </div>
          </motion.div>
          <div className="row project-row justify-content-md-around justify-content-center pb-md-5 pt-6rem pt-lg-2rem mt-5 mt-md-5 pb-5 pb-md-0 px-md-5 px-0">
            <div className="col-md-5 col-11 art-shadow px-0">
              <motion.div
                whileHover={{
                opacity: 0.7,
                transition: { duration: 0.3, ease: "easeIn" },
                }}
                className="image-container">
                  <Image
                    src="/cold&hot.jpg"
                    layout="fill"
                    className="image"
                    alt="Cold and Hot"
                    loading="lazy"
                  />
              </motion.div>
            </div>
            <div className="col-md-5 col-11 art-shadow px-0 pt-5 pt-md-0">
              <motion.div
                whileHover={{
                opacity: 0.7,
                transition: { duration: 0.3, ease: "easeIn" },
                }}
                className="image-container">
                  <Image
                    src="/departing.jpg"
                    layout="fill"
                    className="image"
                    alt="departing"
                    loading="lazy"
                  />
              </motion.div>
            </div>
            <div className="col-md-5 col-11 art-shadow px-0 mt-4x">
              <motion.div
                whileHover={{
                opacity: 0.7,
                transition: { duration: 0.3, ease: "easeIn" },
                }}
                className="image-container">
                  <Image
                    src="/discussion.jpg"
                    layout="fill"
                    className="image"
                    alt="discussion"
                    loading="lazy"
                  />
              </motion.div>
            </div>
            <div className="col-md-5 col-11 art-shadow px-0 mt-4x">
              <motion.div
                whileHover={{
                opacity: 0.7,
                transition: { duration: 0.3, ease: "easeIn" },
                }}
                className="image-container">
                  <Image
                    src="/introvert.jpg"
                    layout="fill"
                    className="image"
                    alt="introvert"
                    loading="lazy"
                  />
              </motion.div>
            </div>
            <div className="col-md-5 col-11 art-shadow px-0 mt-4x">
              <motion.div
                whileHover={{
                opacity: 0.7,
                transition: { duration: 0.3, ease: "easeIn" },
                }}
                className="image-container">
                  <Image
                    src="/rebel.jpg"
                    layout="fill"
                    className="image"
                    alt="rebel"
                    loading="lazy"
                  />
              </motion.div>
            </div>
            <div className="col-md-5 col-11 art-shadow px-0 mt-4x">
              <motion.div
                whileHover={{
                opacity: 0.7,
                transition: { duration: 0.3, ease: "easeIn" },
                }}
                className="image-container">
                  <Image
                    src="/sleep.jpg"
                    layout="fill"
                    className="image"
                    alt="sleep"
                    loading="lazy"
                  />
              </motion.div>
            </div>
            <div className="col-md-5 col-11 art-shadow px-0 mt-4x">
              <motion.div
                whileHover={{
                opacity: 0.7,
                transition: { duration: 0.3, ease: "easeIn" },
                }}
                className="image-container">
                  <Image
                    src="/zaraf.jpg"
                    layout="fill"
                    className="image"
                    alt="zaraf"
                    loading="lazy"
                  />
              </motion.div>
            </div>
            <div className="col-md-5 col-11 art-shadow px-0 mt-4x">
              <motion.div
                whileHover={{
                opacity: 0.7,
                transition: { duration: 0.3, ease: "easeIn" },
                }}
                className="image-container">
                  <Image
                    src="/bump.jpg"
                    layout="fill"
                    className="image"
                    alt="bump"
                    loading="lazy"
                  />
              </motion.div>
            </div>
            <div className="col-11 mt-4x px-0">
              <div className="image-container">
                  <Image
                    src="/rabel-bump-picture.jpg"
                    layout="fill"
                    className="image"
                    alt="rabel-bump-picture"
                    loading="lazy"
                  />
                </div>
            </div>
            <div className="col-11 mt-4x px-0">
              <div className="image-container">
                  <Image
                    src="/rebel-picture.jpg"
                    layout="fill"
                    className="image"
                    alt="rebel-picture"
                    loading="lazy"
                  />
                </div>
            </div>
            <div className="col-11 mt-4x px-0">
              <div className="image-container">
                  <Image
                    src="/introvert-picture.jpg"
                    layout="fill"
                    className="image"
                    alt="introvert-picture"
                    loading="lazy"
                  />
                </div>
            </div>
            <div className="col-11 mt-4x px-0">
              <div className="image-container">
                  <Image
                    src="/making-work-move-picture.jpg"
                    layout="fill"
                    className="image"
                    alt="making-work-move-picture"
                    loading="lazy"
                  />
                </div>
            </div>
          </div>
      </div>
    </>
  )
}


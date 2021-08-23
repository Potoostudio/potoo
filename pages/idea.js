import React, { useEffect } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from "react-intersection-observer"
import { animate, motion, useAnimation } from "framer-motion"


export default function Idea() {

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);


  return (
    <>
      <Head>
        <title>Potoo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container-fluid idea-container mw-1450 pt-lg-3 pb-lg-5">
        <div className="row justify-content-around py-lg-5 my-lg-3">
          <div className="col-lg-9 col-12 text-center">
            <motion.h1
            initial={{y: 45, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{
              duration: 0.3,
              ease: "easeInOut"
            }}>
            <h1 className="projects-h1">
              Good for you!
            </h1>
            </motion.h1>
          </div>
        </div>
      </div>
    </>
  )
}


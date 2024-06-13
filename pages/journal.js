import React, { useEffect, useState } from "react"
import Head from 'next/head'
import Link from 'next/link'
import { useInView } from "react-intersection-observer"
import {useAnimation, motion } from "framer-motion"
import Image from 'next/image'



export default function Projects() {

	const [selected, setSelected] = useState(0)

    const UpdateToggle = (index) => {
      setSelected(index)
    } 
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
	  	<title>Journal</title>
        <link rel="icon" href="favicon.png" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="description" content="POTOO Journal | Journal"/>
        <meta property="og:title" content="Work" />
        <meta property="og:description" content="POTOO Journal |  Journal"/>
        <meta property="og:url" content="https://potoo.studio/journal" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="container-fluid pt-5 mt-6x mb-10x">
      <motion.div className="row home-page-row-project-images mb-5 mb-md-1 mt-md-2 justify-content-left px-4 px-md-5"
      initial={{y: 0}}
      animate={{y: -20}}
      viewport={{ once: true }}
      transition={{
        y: { duration: 1, delay: 0.4},
      }}>
        <div className="col-md-4 col-12 col-6 pt-md-4 pt-3 px-md-3 pb-md-0 mb-md-0">
            <Link href="/journal/brand-research" className="project-li-link">
                <div className="image-container">
                    <Image
                        src="/Brand-history.jpg"
                        layout="fill"
                        className="image"
                        alt="Xtraair Logo"
                        loading="lazy"
                        />
                </div>
                <h5 className="title pt-2 color-secondary luxury-title">
                    Brand research <span className="float-right font-18px">5-Minute Read</span>
                </h5>
            </Link>
        </div>
        </motion.div>
     </div>
    </>
  )
}


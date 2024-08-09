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
	  	<title>Art</title>
        <link rel="icon" href="favicon.png" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="description" content="POTOO Art | Art"/>
        <meta property="og:title" content="Work" />
        <meta property="og:description" content="POTOO Art |  Art"/>
        <meta property="og:url" content="https://potoo.studio/art" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="container-fluid mb-10x bg-white pt-5">
      <motion.div className="row home-page-row-project-images mb-5 mb-md-1 mt-md-2 justify-content-end px-0 px-md-0 pt-2x pb-2x"
        initial={{y: 0}}
        animate={{y: -20}}
        viewport={{ once: true }}
        transition={{
          y: { duration: 1, delay: 0.4},
        }}>
        <div className="col-md-12 col-12 py-md-4 pt-0 px-md-0 pb-md-0 mb-md-0 bottom-line top-line">
            <h1 className="pt-2 px-md-4 py-4 text-md-left font-x-large luxury-title hover-none mb-0 color-dark py-0">
                Art is part of our identity
            </h1>
        </div>
        <div className="col-md-6 col-12 px-0">
          <h5 className="py-4 px-3 px-md-4 color-dark line-height-normal font-large font-weight-normal pt-md-5">
              We use art to express ourselves, add joy to day-to-day life, highlight subjects, tell stories, show appreciation, and attract attention.
          </h5>
        </div>
        <div className="col-md-6 col-12 col-6 pt-md-4
         pt-5 px-md-3 pb-md-0 mb-md-0 ">
            <div className="image-container">
                <Image
                    src="/art-type-circle.jpg"
                    layout="fill"
                    className="image"
                    alt="art"
                    loading="lazy"
                    />
            </div>
        </div>
        </motion.div>
     </div>
      <div className="container-fluid pt-5 mt-6x mb-10x">
        <motion.div className="row home-page-row-project-images mb-5 mb-md-1 mt-md-2 justify-content-left px-4 px-md-5"
        initial={{y: 0}}
        animate={{y: -20}}
        viewport={{ once: true }}
        transition={{
          y: { duration: 1, delay: 0.4},
        }}>
        <div className="col-md-4 col-12 col-6 pt-md-4 pt-5 px-md-3 pb-md-0 mb-md-0">
            <Link href="/art/making-typography-move" className="project-li-link hover-none">
                <div className="image-container">
                    <Image
                        src="/rebel-picture.jpg"
                        layout="fill"
                        className="image"
                        alt="introvert"
                        loading="lazy"
                        />
                </div>
                <h6 className="title pt-2 color-white luxury-title hover-none mb-0">
                    Making typography move <span className="float-right">print</span>
                </h6>
            </Link>
        </div>
        <div className="col-md-4 col-12 col-6 pt-md-4 pt-3 px-md-3 pb-md-0 mb-md-0">
            <Link href="/art/shapes" className="project-li-link hover-none">
                <div className="image-container">
                    <Image
                        src="/Shape.jpg"
                        layout="fill"
                        className="image"
                        alt="Shape"
                        loading="lazy"
                        />
                </div>
                <h6 className="title pt-2 color-white luxury-title hover-none mb-0">
                    Minimalist shapes <span className="float-right">print</span>
                </h6>
            </Link>
        </div>
        <div className="col-md-4 col-12 col-6 pt-md-4 pt-5 px-md-3 pb-md-0 mb-md-0">
            <Link href="/art/36daysoftype-10" className="project-li-link hover-none">
                <div className="image-container">
                    <Image
                        src="/Letter_L.jpg"
                        layout="fill"
                        className="image"
                        alt="Letter_L"
                        loading="lazy"
                        />
                </div>
                <h6 className="title pt-2 color-white luxury-title hover-none mb-0">
                    36 days of type (10) <span className="float-right">design</span>
                </h6>
            </Link>
        </div>
        </motion.div>
     </div>
    </>
  )
}


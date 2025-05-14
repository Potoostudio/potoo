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
        <meta name="description" content="journal about branding and creative work"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="keywords" content="branding in Denver, branding in Baghdad, what is branding, why is branding important"/>
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
        <Link href="/journal/unkerned-vs-hand-kerned" className="project-li-link hover-none">
                <div className="image-container">
                  <Image
                      src="/baghdad-kerned-vs-unkerned.jpg"
                      layout="fill"
                      className="image"
                      alt="baghdad-kerned-vs-unkerned"
                      loading="lazy"
                      />
                </div>
                <h6 className="title pt-2 color-dark luxury-title hover-none mb-0">
                  Typography <span className="float-end text-decoration-underline">2-Minute Read</span>
                </h6>
                <h6 className="article-info pt-2 color-secondary luxury-title hover-none line-height-normal">
                 What is the difference between an unkerend Bagdhad and a hand-kerned Baghdad
                </h6>
            </Link>
        </div>
        <div className="col-md-4 col-12 col-6 pt-md-4 pt-3 px-md-3 pb-md-0 mb-md-0">
            <Link href="/journal/brand-research" className="project-li-link hover-none">
                <div className="image-container">
                    <Image
                        src="/Brand-history.jpg"
                        layout="fill"
                        className="image"
                        alt="Xtraair Logo"
                        loading="lazy"
                        />
                </div>
                <h6 className="title pt-2 color-dark luxury-title hover-none mb-0">
                    Brand research <span className="float-end text-decoration-underline">5-Minute Read</span>
                </h6>
                <h6 className="article-info pt-2 color-secondary luxury-title hover-none">
                 Know your audience beyond the demographic information
                </h6>
            </Link>
        </div>
        </motion.div>
     </div>
    </>
  )
}


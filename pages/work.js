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
	  	<title>POTOO STUDIO | Work</title>
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="description" content="POTOO STUDIO | We Are A Brand Studio Based In Denver"/>
        <meta property="og:title" content="POTOO STUDIO | We Are A Brand Studio Based In Denver" />
        <meta property="og:description" content="POTOO STUDIO |  We Are A Brand Studio Based In Denver"/>
        <meta property="og:url" content="https://potoo.studio/work" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="container-fluid design-container">
      <motion.div className="row home-page-row-project-images mb-5 mb-md-1 pt-5 mt-md-5 justify-content-center px-4 px-md-5"
      initial={{y: 0}}
      animate={{y: -20}}
      viewport={{ once: true }}
      transition={{
        y: { duration: 1, delay: 0.4},
      }}>
           <div className="col-md-12 px-0">
            <h3 className="luxury-title text-center line-before-after">Work</h3>
          </div>
          <div className="col-md-12 px-0">
              <ul className="project-list-image-list pt-5 pt-md-5 mt-md-4">
                <p className="project-title pt-md-4 pt-2 luxury-title">
                    Abdulhamid - Gulf War<br/><span className="project-info text-normal pt-1 pt-md-0">Story <span className="divider">|</span> Web <br/> Awards x4</span>
                </p>
                <li className="item project-image-item full-item">
                  <Link href="/projects/au" className="project-li-link">
                    <div className="image-container">
                      <Image
                          src="/project-hamid.jpg"
                          layout="fill"
                          className="image"
                          alt="Project Hamid"
                          />
                    </div>
                  </Link>

                </li>
                <p className="project-title pt-md-4 pt-5 mt-5 mt-md-0 luxury-title">
                  Seedstock<br/><span className="project-info text-normal pt-1 pt-md-0">Digital Design</span>
                </p>
                <li className="item project-image-item full-item">
                  <Link href="/projects/seedstock" className="project-li-link">
                    <div className="image-container">
                      <Image
                        src="/project-seedstock.jpg"
                        layout='fill'
                        className="image"
                        alt="Seedstock project image"
                        />
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
        </motion.div>
     </div>
    </>
  )
}


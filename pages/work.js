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
	  	<title>Work</title>
        <link rel="icon" href="favicon.png" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="description" content="POTOO STUDIO | We Are A Brand Studio Based In Denver"/>
        <meta property="og:title" content="Work" />
        <meta property="og:description" content="POTOO STUDIO |  We Are A Brand Studio Based In Denver"/>
        <meta property="og:url" content="https://potoo.studio/work" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="container-fluid design-container pt-5 mt-6x">
      <motion.div className="row home-page-row-project-images mb-5 mb-md-1 mt-md-2 justify-content-center px-4 px-md-5"
      initial={{y: 0}}
      animate={{y: -20}}
      viewport={{ once: true }}
      transition={{
        y: { duration: 1, delay: 0.4},
      }}>
        <div className="row project px-md-5">
          <div className="col-12 pb-md-1">
            <ul className="list-style-none pl-0 color-secondary">
              <li className="item">
                Brand strategy
              </li>
              <li className="item">
                Brand identity
              </li>
              <li className="item">
                Verbal & Visual communication
              </li>
              <li className="item">
                Web
              </li>
            </ul>
            </div>
            <div className="col-md-3 border-white">
              <Link href="/projects/potoo" className="project-li-link">
              <motion.div
                  whileHover={{
                  opacity: 0.7,
                  transition: { duration: 0.3, ease: "easeIn" },
                }}
                className="image-container">
                  <Image
                      src="/Potoo-Poster-visual-colors.jpg"
                      layout="fill"
                      className="image"
                      alt="Potoo project"
                      loading="lazy"
                      />
                </motion.div>
              </Link>
            </div>
            <div className="col-md-6 pt-2 pt-md-0">
              <Link href="/projects/potoo" className="project-li-link">
                <motion.div
                  whileHover={{
                  opacity: 0.7,
                  transition: { duration: 0.3, ease: "easeIn" },
                }}
                className="image-container">
                  <Image
                      src="/Potoo-Poster-visual-message.jpg"
                      layout="fill"
                      className="image"
                      alt="Potoo Project"
                      loading="lazy"
                      />
                </motion.div>
              </Link>
            </div>
            <div className="col-md-3 pt-2 pt-md-0">
              <Link href="/projects/potoo" className="project-li-link">
                <motion.div
                  whileHover={{
                  opacity: 0.7,
                  transition: { duration: 0.3, ease: "easeIn" },
                }}
                className="image-container">
                  <Image
                      src="/Potoo-Poster-visual-three-colored-posters.jpg"
                      layout="fill"
                      className="image"
                      alt="Potoo project"
                      loading="lazy"
                      />
                </motion.div>
              </Link>
              </div>
          </div>
       <div className="row project px-md-5 pt-10x mt-5">
         <div className="col-12 pb-md-1">
          <ul className="list-style-none pl-0 color-secondary">
            <li className="item">
              Brand strategy
            </li>
            <li className="item">
              Brand identity
            </li>
            <li className="item">
              Design
            </li>
            <li className="item">
              Web
            </li>
          </ul>
         </div>
          <div className="col-md-3 border-white">
            <Link href="/projects/jaeger-aeration" className="project-li-link">
              <video className="video- border-silver" playsinline="" webkit-playsinline="" autoPlay loop muted width="100%">
                          <source src="/Jaeger-Voice.mp4" type="video/mp4"/>
                  </video>
            </Link>
          </div>
          <div className="col-md-6">
            <Link href="/projects/jaeger-aeration" className="project-li-link">
              <motion.div
                whileHover={{
                opacity: 0.7,
                transition: { duration: 0.3, ease: "easeIn" },
              }}
              className="image-container">
                <Image
                    src="/Project-Jaeger.jpg"
                    layout="fill"
                    className="image"
                    alt="Jaeger aeration project"
                    loading="lazy"
                    />
              </motion.div>
            </Link>
          </div>
          <div className="col-md-3 pt-2 pt-md-0">
            <Link href="/projects/au" className="project-li-link">
              <motion.div
                whileHover={{
                opacity: 0.7,
                transition: { duration: 0.3, ease: "easeIn" },
              }}
              className="image-container">
                <Image
                    src="/Jaeger-Packaging-tape.jpg"
                    layout="fill"
                    className="image"
                    alt="Jaeger Aeration project"
                    loading="lazy"
                    />
              </motion.div>
            </Link>
            </div>
          </div>
       <div className="row project px-md-5 pt-10x mt-5">
         <div className="col-12 pb-md-1">
          <ul className="list-style-none pl-0 color-secondary">
              <li className="item">
                Story
              </li>
              <li className="item">
                Biography
              </li>
              <li className="item">
                Web
              </li>
            </ul>
         </div>
        <div className="col-md-3 border-white">
          <Link href="/projects/au" className="project-li-link">
            <motion.div
              whileHover={{
              opacity: 0.7,
              transition: { duration: 0.3, ease: "easeIn" },
            }}
            className="image-container">
              <Image
                  src="/project-hamid-army-picture.jpg"
                  layout="fill"
                  className="image"
                  alt="Abdulhamid Project"
                  loading="lazy"
                  />
            </motion.div>
          </Link>
        </div>
        <div className="col-md-6 pt-2 pt-md-0">
          <Link href="/projects/au" className="project-li-link">
            <motion.div
              whileHover={{
              opacity: 0.7,
              transition: { duration: 0.3, ease: "easeIn" },
            }}
            className="image-container">
              <Image
                  src="/Project-Abdulhamid.jpg"
                  layout="fill"
                  className="image"
                  alt="Abdulhamid Project"
                  loading="lazy"
                  />
            </motion.div>
          </Link>
        </div>
        <div className="col-md-3 pt-2 pt-md-0">
          <Link href="/projects/au" className="project-li-link">
            <motion.div
              whileHover={{
              opacity: 0.7,
              transition: { duration: 0.3, ease: "easeIn" },
            }}
            className="image-container">
              <Image
                  src="/project-hamid-poster.jpg"
                  layout="fill"
                  className="image"
                  alt="Jaeger Aeration project"
                  loading="lazy"
                  />
            </motion.div>
          </Link>
          </div>
        </div>
          {/* <div className="row home-page-row-project-images mb-5 mb-md-1 mt-md-5 justify-content-between px-4 px-md-5">
          <div className="col-md-5 col-12 pt-lg-5rem px-0 pt-5">
            <Link href="/projects/jaeger-aeration" className="project-li-link">
                <motion.div
                whileHover={{
                  opacity: 0.7,
                  transition: { duration: 0.3, ease: "easeIn" },
                }}
                className="image-container">
                  <Image
                      src="/Project-Jaeger.jpg"
                      layout="fill"
                      className="image"
                      alt="Project Jaeger Aeration"
                      loading="lazy"
                      />
                </motion.div>
              </Link>
            <p className="project-title pt-md-2 mt-md-0 pt-2 pb-3 mb-0 luxury-title">
                JAEGER—AERATION<br/><span className="project-info text-normal pt-md-0 float-md-right">Brand <span className="divider">|</span> Web</span>
            </p>
          </div>
          <div className="col-md-5 col-12 pt-lg-8rem pt-5 mt-5 px-0">
            <Link href="/projects/36daysoftype-10" className="project-li-link">
                <motion.div
                whileHover={{
                  opacity: 0.7,
                  transition: { duration: 0.3, ease: "easeIn" },
                }}
                className="image-container">
                  <Image
                      src="/Project-Type.jpg"
                      layout="fill"
                      className="image"
                      alt="Project 36 Days of Type"
                      loading="lazy"
                      />
                </motion.div>
              </Link>
              <p className="project-title pt-md-2 mt-md-0 pt-2 pb-3 mb-0 luxury-title">
                  36 Days of Type<br/><span className="project-info text-normal pt-1 pt-md-0">Design</span>
              </p>
          </div>
          <div className="col-md-5 col-12 pt-5 mt-5 px-0">
            <Link href="/projects/au" className="project-li-link">
                <motion.div
                whileHover={{
                  opacity: 0.7,
                  transition: { duration: 0.3, ease: "easeIn" },
                }}
                className="image-container">
                  <Image
                      src="/Project-Abdulhamid.jpg"
                      layout="fill"
                      className="image"
                      alt="Project Abdulhamid Gulf-War"
                      loading="lazy"
                      />
                </motion.div>
              </Link>
            <p className="project-title pt-md-2 mt-md-0 pt-2 pb-3 mb-0 luxury-title">
              Abdulhamid - Gulf War<br/><span className="project-info text-normal pt-1 pt-md-0">Story <span className="divider">|</span> Web</span>
            </p>
          </div>
        </div> */}
        </motion.div>
     </div>
    </>
  )
}


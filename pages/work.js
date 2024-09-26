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
        <div className="row project px-md-5">
            <div className="col-12 pb-md-1">
              <ul className="list-style-none pl-0 color-secondary">
              <span className="text-decoration-underline">HENERY AGENCY</span>
                <li className="item pt-2">
                  Brand strategy
                </li>
                <li className="item">
                  Brand identity
                </li>
                <li className="item">
                  Design
                </li>
              </ul>
            </div>
            <div className="col-md-3 border-white">
              <Link href="/projects/henery-agency" className="project-li-link">
              <motion.div
                  whileHover={{
                  opacity: 0.7,
                  transition: { duration: 0.3, ease: "easeIn" },
                }}
                className="image-container">
                  <Image
                      src="/henery-agency-project-img-sm-left.jpg"
                      layout="fill"
                      className="image"
                      alt="henery-agency-project-img-sm-left"
                      loading="lazy"
                      />
                </motion.div>
              </Link>
            </div>
            <div className="col-md-6 pt-2 pt-md-0">
              <Link href="/projects/henery-agency" className="project-li-link">
                <motion.div
                  whileHover={{
                  opacity: 0.7,
                  transition: { duration: 0.3, ease: "easeIn" },
                }}
                className="image-container">
                  <Image
                      src="/henery-agency-project-img-lg.jpg"
                      layout="fill"
                      className="image"
                      alt="henery-agency-project-img-lg"
                      loading="lazy"
                      />
                </motion.div>
              </Link>
            </div>
            <div className="col-md-3 pt-2 pt-md-0">
              <Link href="/projects/henery-agency" className="project-li-link">
                <motion.div
                  whileHover={{
                  opacity: 0.7,
                  transition: { duration: 0.3, ease: "easeIn" },
                }}
                className="image-container">
                  <Image
                      src="/henery-agency-project-img-sm-right.jpg"
                      layout="fill"
                      className="image"
                      alt="henery-agency-project-img-sm-right"
                      loading="lazy"
                      />
                </motion.div>
              </Link>
              </div>
          </div>
        <div className="row project pt-12x">
          <div className="col-12 pb-md-1">
            <ul className="list-style-none pl-0 color-secondary">
              <span className="text-decoration-underline">POTOO</span>
              <li className="item pt-2">
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
                      src="/Potoo-Dark-Color-650.jpg"
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
                      src="/Poster-visual-message-dark.jpg"
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
                      src="/Potoo-website-650.jpg"
                      layout="fill"
                      className="image"
                      alt="Potoo project"
                      loading="lazy"
                      />
                </motion.div>
              </Link>
              </div>
          </div>
       <div className="row project pt-12x mt-5">
         <div className="col-12 pb-md-1">
          <ul className="list-style-none pl-0 color-secondary">
          <span className="text-decoration-underline text-capitalize">JAEGER AERATION</span>
            <li className="item pt-2">
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
                <motion.div
                  whileHover={{
                  opacity: 0.7,
                  transition: { duration: 0.3, ease: "easeIn" },
                }}
                className="image-container">
                  <Image
                      src="/Jaeger-screen.jpg"
                      layout="fill"
                      className="image"
                      alt="Jaeger aeration project"
                      loading="lazy"
                      />
                </motion.div>
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
            <Link href="/projects/jaeger-aeration" className="project-li-link">
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
       <div className="row project pt-10x mt-5">
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
     </div>
    </>
  )
}


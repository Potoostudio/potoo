import React, { useEffect, useState } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion} from "framer-motion"

export default function Home() {

  const services = ["Brand Strategy", "Naming", "Product Design", "Brand Identity", "Design", "Web Development"];


  const [index, setIndex] = useState(0);

  useEffect(() => {
    const tick = () => setIndex(i => i + 1);
    const id = setInterval(tick, 1200);
    return () => clearInterval(id);
  }, []);

    return (
      <>
        <Head>
          <title>POTOO STUDIO</title>
          <link rel="icon" href="favicon.ico" />
          <link rel="manifest" href="/manifest.json"/>
          <meta name="description" content="POTOO STUDIO | We Are A Brand Studio Based In Denver. We specialize in branding and we development"/>
          <meta property="og:title" content="POTOO STUDIO" />
          <meta property="og:description" content="POTOO STUDIO | WE ARE A branding studio based in Denver. We specialize in branding and we development"/>
          <meta property="og:url" content="https://potoo.studio" />
          <meta property="og:type" content="website" />
        </Head>
        <div className="container-fluid home-page-container px-0 mx-1600 pt-md-0 mt-md-0">
          <div className="row justify-content-center">
            <div className="col-md-12 col-12 pl-lg-0 pr-lg-0 mr-lg-0  pr-0 pl-0">
              <div className="main-page-impression-text-box py-5 my-4 py-md-0 my-md-0">
                 <motion.h5
                 initial={{letterSpacing: "30px"}}
                 animate={{letterSpacing: "2px"}}
                 transition={{ duration: 1, delay: 0.1}}
                 className="studio-title letter-space-2px text-uppercase">
                   Branding & Design Studio
                 </motion.h5>
                  <motion.h5
                   initial={{opacity: 0, y: 30}}
                   animate={{opacity: 1, y: 0}}
                   transition={{ duration: 0.7, delay: 0.5}}
                  className="main-page-impression-title color-off-white luxury-title smaller-text mt-md-5 mt-5 pt-md-5 pt-5">We nest impressions through:</motion.h5>
                  <motion.h1
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{ duration: 0.7, delay: 0.8}}
                  className="main-page-impression-text-large color-white luxury-title">{services[index % services.length]}</motion.h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid pt-5 mt-md-4 mt-5">
          <motion.div className="row px-md-5 px-4 justify-content-between pt-4"
          initial={{opacity: 0.5}}
          animate={{opacity: 1}}
          transition={{
            opacity: { duration: 1, delay: 0.4},
          }}>
            <div className="col-md-12 px-0 col-12 text-center">
              <p className="text-normal">With minimalist design as the core of our studio, <span className="luxury-title font-18px font-italic text-white">we specialize in</span></p>
              <motion.ul
               initial={{opacity: 0.5}}
               whileInView={{opacity: 1}}
               viewport={{ once: true }}
               transition={{
                 opacity: { duration: 1, delay: 0.4},
               }}
              className="list specialize-list pt-md-3 pt-4 we-specialize-list justify-content-center">
                <li className="item font-weight-bolder">
                  Brand strategy
                </li>
                <li className="item pt-1 font-weight-bolder">
                  Naming
                </li>
                <li className="item pt-1 font-weight-bolder">
                  Brand Identity
                </li>
                <li className="item pt-1 font-weight-bolder">
                  Design
                </li>
                <li className="item pt-1 font-weight-bolder">
                  Web Development
                </li>
              </motion.ul>
            </div>
          </motion.div>
        </div>
       <div className="container-fluid design-container">
          <div className="row home-page-row-project-images mb-5 mb-md-1 pt-5 mt-md-5 justify-content-between px-4 px-md-5">
          <motion.div
            initial={{x: -100}}
            whileInView={{x: 0}}
            viewport={{ once: true }}
            transition={{
              x: { duration: 1, delay: 0.4},
            }}
            className="col-5 left-line"></motion.div>
             <div className="col-md-2 px-0">
                <motion.h3
                initial={{opacity: 0.5}}
                whileInView={{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                  opacity: { duration: 1, delay: 0.4},
                }}
                className="luxury-title text-center line-before-after">Work</motion.h3>
            </div>
            <motion.div
            initial={{x: 100}}
            whileInView={{x: 0}}
            viewport={{ once: true }}
            transition={{
              x: { duration: 1, delay: 0.4},
            }}
            className="col-5 right-line"></motion.div>
            <motion.div
             initial={{y: 0}}
             whileInView={{y: -40}}
             viewport={{ once: true }}
             transition={{
               y: { duration: 1, delay: 0.4},
             }}
            className="col-md-5 col-12 pt-lg-5rem px-0 pt-5">
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
              <p className="project-title pt-md-3 mt-md-0 pt-2 pb-3 mb-0 luxury-title">
                  JAEGER—AERATION<br/><span className="project-info text-normal pt-md-0 float-md-right">Brand <span className="divider">|</span> Web</span>
              </p>
            </motion.div>
            <motion.div
            initial={{y: 0}}
            whileInView={{y: -40}}
            viewport={{ once: true }}
            transition={{
              y: { duration: 1, delay: 0.4},
            }}
            className="col-md-5 col-12 pt-lg-8rem mt-5 px-0">
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
                <p className="project-title pt-md-3 mt-md-0 pt-2 pb-3 mb-0 luxury-title">
                    36 Days of Type<br/><span className="project-info text-normal pt-1 pt-md-0">Design</span>
                </p>
            </motion.div>
            <motion.div
             initial={{y: 0}}
             whileInView={{y: -40}}
             viewport={{ once: true }}
            whileTap={{ scale: 0.9 }}
             transition={{
               y: { duration: 1, delay: 0.4},
             }}
            className="col-md-5 col-12 pt-5 mt-5 px-0">
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
              <p className="project-title pt-md-3 mt-md-0 pt-2 pb-3 mb-0 luxury-title">
                Abdulhamid - Gulf War<br/><span className="project-info text-normal pt-1 pt-md-0">Story <span className="divider">|</span> Web</span>
              </p>
            </motion.div>
          </div>
       </div>
       <div className="container-fluid pt-md-0 pt-5 mt-md-0 mt-5">
       <div className="row justify-content-between px-4 px-md-5 pt-5 mt-5">
         <motion.div
          initial={{x: -100}}
          whileInView={{x: 0}}
          viewport={{ once: true }}
          transition={{
            x: { duration: 1, delay: 0.4},
          }}
          className="col-5 left-line"></motion.div>
          <div className="col-md-2 px-0 pb-4 pb-md-0">
            <motion.h3
            initial={{opacity: 0.7}}
            whileInView={{opacity: 1}}
            viewport={{ once: true }}
            transition={{
              opacity: { duration: 1, delay: 0.4},
            }}
            className="luxury-title text-center line-before-after">Awards <sup className="color-secondary">4x</sup></motion.h3>
          </div>
          <motion.div
          initial={{x: 100}}
          whileInView={{x: 0}}
          viewport={{ once: true }}
          transition={{
            x: { duration: 1, delay: 0.4},
          }}
          className="col-5 right-line"></motion.div>
            <motion.div className="col-md-5 col-8 pt-md-5 pt-1 px-0"
            initial={{y: 0}}
            whileInView={{y: -20}}
            viewport={{ once: true }}
            transition={{
              y: { duration: 1, delay: 0.4},
            }}>
              <ul className="award-list text-left list-unstyled pl-md-0">
                <li className="award-item pt-2">
                <Image
                    src="/cssdesignawards.svg"
                    width={163}
                    height={24}
                    className="award"
                    alt="project award"
                    />
                </li>
                <li className="award-item pt-md-4 pt-3">
                <Image
                    src="/csswinner.svg"
                    width={138}
                    height={17}
                    className="award"
                    alt="project award"
                    />
                </li>
              </ul>
            </motion.div>
            <motion.div className="col-md-5 col-3 pt-md-5 pt-1 px-0 pb-md-0 pb-5 mb-md-0 mb-5"
            initial={{y: 0}}
            whileInView={{y: -20}}
            viewport={{ once: true }}
            transition={{
              y: { duration: 1, delay: 0.4},
            }}
            >
              <ul className="award-list text-right text-md-left list-unstyled pl-md-0">
                <li className="award-item pt-2">
                  3x
                </li>
                <li className="award-item pt-md-4 pt-3">
                  1x
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </>
    )
  }


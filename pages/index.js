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
          <title>POTOO</title>
          <link rel="icon" href="favicon.ico" />
          <link rel="manifest" href="/manifest.json"/>
          <meta name="description" content="POTOO | We Are A Brand Studio Based In Denver. We specialize in branding and we development"/>
          <meta property="og:title" content="POTOO" />
          <meta property="og:description" content="POTOO| WE ARE A branding studio based in Denver. We specialize in branding and we development"/>
          <meta property="og:url" content="https://potoo.studio" />
          <meta property="og:type" content="website" />
        </Head>
        <div className="container-fluid home-page-container mx-1600 pt-md-0 mt-md-0">
          <div className="row hight-80vh justify-content-end bg-white pb-4">
            <motion.div 
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{ duration: 0.7, delay: 0.5}}
            className="col-md-12 col-12 pl-lg-0 pr-lg-0 mr-lg-0 pt-5 mt-5">
            <h3 className="main-page-impression-title text-md-center color-dark luxury-title font-weight-normal mt-5 pt-5">We create the verbal and visual communication of your brilliant future.</h3>
                {/* <motion.h1
                  initial={{opacity: 0, y: 30}}
                  animate={{opacity: 1, y: 0}}
                  transition={{ duration: 0.7, delay: 0.8}}
                className="main-page-impression-text-large color-white luxury-title">{services[index % services.length]}</motion.h1> */}
            </motion.div>
            <div className="col-md-6 col-12 pr-md-5 mr-md-5 pt-md-5 mt-5 mb-4 mb-md-0">
              <motion.h6
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{ duration: 0.7, delay: 0.55}}
                className="text-normal font-weight-normal text-dark pr-md-5 mr-md-5 w-75 pt-5 mt-md-5">We help clients create communication through brand stategy, brand identity, design, and web. </motion.h6>
            </div>
          </div>
          <div className="row home-page-row-project-images mb-5 mb-md-1 justify-content-between px-md-5 pt-12x">
            <motion.div
              initial={{x: -100}}
              whileInView={{x: 0}}
              viewport={{ once: true }}
              transition={{
                x: { duration: 1, delay: 0.4},
              }}
              className="col-5 left-line"></motion.div>
                <div className="col-md-2 px-md-0">
                  <motion.h3
                  initial={{opacity: 0.5}}
                  whileInView={{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                    opacity: { duration: 1, delay: 0.4},
                  }}
                  className="luxury-title text-md-center line-before-after">Work</motion.h3>
              </div>
              <motion.div
              initial={{x: 100}}
              whileInView={{x: 0}}
              viewport={{ once: true }}
              transition={{
                x: { duration: 1, delay: 0.4},
              }}
              className="col-5 right-line"></motion.div>
            </div>
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
       <div className="row project px-md-5 pt-12x mt-5">
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
       <div className="row project px-md-5 pt-12x mt-5">
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
         <div className="row justify-content-between px-md-5 pt-5 mt-lg-12rem">
         <motion.div
          initial={{x: -100}}
          whileInView={{x: 0}}
          viewport={{ once: true }}
          transition={{
            x: { duration: 1, delay: 0.4},
          }}
          className="col-md-5 col-12 left-line"></motion.div>
          <div className="col-md-2 px-md-0 pb-4 pb-md-0">
            <motion.h3
            initial={{opacity: 0.7}}
            whileInView={{opacity: 1}}
            viewport={{ once: true }}
            transition={{
              opacity: { duration: 1, delay: 0.4},
            }}
            className="luxury-title text-md-center line-before-after">Design</motion.h3>
          </div>
          <motion.div
          initial={{x: 100}}
          whileInView={{x: 0}}
          viewport={{ once: true }}
          transition={{
            x: { duration: 1, delay: 0.4},
          }}
          className="col-5 right-line"></motion.div>
            <motion.div className="col-md-5 col-8 pt-md-5 pt-1 px-md-0"
            initial={{y: 0}}
            whileInView={{y: -20}}
            viewport={{ once: true }}
            transition={{
              y: { duration: 1, delay: 0.4},
            }}>
            </motion.div>
         </div>
       <div className="row justify-content-between px-4 px-md-5">
            <motion.div className="col-md-4 col-6 pt-md-5 pt-3 px-md-4 pb-md-0 mb-md-0"
            initial={{y: 0}}
            whileInView={{y: -20}}
            viewport={{ once: true }}
            transition={{
              y: { duration: 1, delay: 0.4},
            }}
            >
            <div className="image-container border">
              <Image
                  src="/xtraair-logo-720.jpg"
                  layout="fill"
                  className="image"
                  alt="Xtraair Logo"
                  loading="lazy"
                  />
            </div>
            </motion.div>
            <motion.div className="col-md-4 col-6 pt-md-5 pt-3 px-md-4 pb-md-0 mb-md-0"
            initial={{y: 0}}
            whileInView={{y: -20}}
            viewport={{ once: true }}
            transition={{
              y: { duration: 1, delay: 0.4},
            }}
            >
            <div className="image-container border">
              <Image
                  src="/WNCS-logo-720.jpg"
                  layout="fill"
                  className="image"
                  alt="WNCS Logo"
                  loading="lazy"
                  />
            </div>
            </motion.div>
            <motion.div className="col-md-4 col-6 pt-md-5 pt-3 px-md-4 pb-md-0 mb-md-0"
            initial={{y: 0}}
            whileInView={{y: -20}}
            viewport={{ once: true }}
            transition={{
              y: { duration: 1, delay: 0.4},
            }}
            >
            <div className="image-container border">
              <Image
                  src="/ADS-Logo-720.jpg"
                  layout="fill"
                  className="image"
                  alt="ADS Logo"
                  loading="lazy"
                  />
            </div>
            </motion.div>
            <motion.div className="col-md-4 col-6 pt-md-5 pt-3 px-md-4 pb-md-0 mb-md-0"
            initial={{y: 0}}
            whileInView={{y: -20}}
            viewport={{ once: true }}
            transition={{
              y: { duration: 1, delay: 0.4},
            }}
            >
            <div className="image-container border">
              <Image
                  src="/Explico-logo-720.jpg"
                  layout="fill"
                  className="image"
                  alt="Explico Logo"
                  loading="lazy"
                  />
            </div>
            </motion.div>
            <motion.div className="col-md-4 col-6 pt-md-5 pt-3 px-md-4 pb-md-0 mb-md-0"
            initial={{y: 0}}
            whileInView={{y: -20}}
            viewport={{ once: true }}
            transition={{
              y: { duration: 1, delay: 0.4},
            }}
            >
            <div className="image-container border">
              <Image
                  src="/TOk-Logo-720.jpg"
                  layout="fill"
                  className="image"
                  alt="Tok Logo"
                  loading="lazy"
                  />
            </div>
            </motion.div>
            <motion.div className="col-md-4 col-6 pt-md-5 pt-3 px-md-4 pb-md-0 mb-md-0"
            initial={{y: 0}}
            whileInView={{y: -20}}
            viewport={{ once: true }}
            transition={{
              y: { duration: 1, delay: 0.4},
            }}
            >
            <div className="image-container border">
              <Image
                  src="/Farmer-logo-720.jpg"
                  layout="fill"
                  className="image"
                  alt="Farmer Logo"
                  loading="lazy"
                  />
            </div>
            </motion.div>
          </div>
          </div>
      </>
    )
  }


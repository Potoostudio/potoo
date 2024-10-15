import React, { useEffect, useState } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion} from "framer-motion"

export default function Home() {


  const [index, setIndex] = useState(0);

  useEffect(() => {
    const tick = () => setIndex(i => i + 1);
    const id = setInterval(tick, 1200);
    return () => clearInterval(id);
  }, []);

    return (
      <>
        <Head>
          <title>POTOO | Branding agency in Denver and Baghdad</title>
          <link rel="icon" href="favicon.png" />
          <link rel="manifest" href="/manifest.json"/>
          <meta name="description" content="Branding Agency Based in Denver and Baghdad"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="keywords" content="branding agency in Denver, branding agency in Baghdad, creative agency in Baghdad, creative agency in Denver" />
        </Head>
        <div className="container-fluid home-page-container pt-md-0 mt-md-0">
          <div className="row hight-80vh justify-content-end pb-4">
            <motion.div 
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{ duration: 0.7, delay: 0.5}}
            className="col-md-12 col-12 pl-lg-0 pr-lg-0 mr-lg-0 pt-5 mt-5">
            <h3 className="main-page-impression-title font-large text-md-center luxury-title font-weight-normal mt-5 pt-5">We create the verbal and visual identity of your brilliant brand.</h3>
            </motion.div>
            <div className="col-md-6 col-12 pr-md-5 mr-md-5 pt-md-5 mt-5 mb-4 mb-md-0">
              <motion.h6
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{ duration: 0.7, delay: 0.55}}
                className="text-normal line-height-normal font-weight-normal text-darker pr-md-5 mr-md-5 w-75 pt-5 mt-md-5">We help clients create communication through brand strategy, brand identity, design, and web. </motion.h6>
            </div>
          </div>
          <div className="row home-page-row-project-images mb-md-1 justify-content-between px-md-5 pt-12x">
            <div className="col-md-2">
              <motion.h3
              initial={{opacity: 0.5}}
              whileInView={{opacity: 1}}
              viewport={{ once: true }}
              transition={{
                opacity: { duration: 1, delay: 0.4},
              }}
              className="luxury-title line-before-after">Work</motion.h3>
          </div>
            </div>
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
        <div className="row project px-md-5 pt-12x">
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
       <div className="row project px-md-5 pt-12x mt-5">
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
        <motion.div
        initial={{y: 0}}
        whileInView={{y: -20}}
        viewport={{ once: true }}
        transition={{
          y: { duration: 1, delay: 0.4},
        }}
        className="row justify-content-start px-md-5 pt-10x">
          <div className="col-md-12 px-md-0 pb-0 pb-md-0 pt-5">
              <motion.h3
              initial={{opacity: 0.7}}
              whileInView={{opacity: 1}}
              viewport={{ once: true }}
              transition={{
                opacity: { duration: 1, delay: 0.4},
              }}
              className="luxury-title line-before-after">Journal</motion.h3>
          </div>
            <div className="col-md-4 col-12 pt-md-4 pt-3 px-md-0 pb-md-0 mb-md-0">
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
                <h5 className="title pt-4 color-secondary luxury-title hover-none mb-0">
                  Brand research <span className="float-right font-18px text-decoration-underline">5-Minute Read</span>
                </h5>
                <p className="article-info color-secondary luxury-title hover-none">
                 Know your audience beyond the demographic information
                </p>
            </Link>
            </div>
        </motion.div>
         <div className="row justify-content-between px-md-5 pt-10x">
          <div className="col-md-2 px-md-0 pb-4 pb-md-0">
            <motion.h3
            initial={{opacity: 0.7}}
            whileInView={{opacity: 1}}
            viewport={{ once: true }}
            transition={{
              opacity: { duration: 1, delay: 0.4},
            }}
            className="luxury-title line-before-after">Art</motion.h3>
          </div>
         </div>
         
         {/* Art Section */}
         <motion.div className="row home-page-row-project-images mt-md-2 justify-content-start px-4 px-md-5 mb-8x"
            initial={{y: 0}}
            animate={{y: -20}}
            viewport={{ once: true }}
            transition={{
              y: { duration: 1, delay: 0.4},
            }}>
            <div className="col-12 col-6 pt-md-4 pt-5 px-md-0 pb-md-0 mb-md-0">
                <Link href="/art/making-typography-move" className="project-li-link hover-none">
                    <div className="image-container">
                        <Image
                            src="/Make-type-move-project-img.jpg"
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
            <div className="col-12 col-6 pt-md-4 mt-6x p-0 pb-md-0 mb-md-0">
                <Link href="/art/shapes" className="project-li-link hover-none">
                    <div className="image-container">
                        <Image
                            src="/shapes-project-img.jpg"
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
            <div className="col-12 col-6 pt-md-4 mt-6x px-md-0 pb-md-0 mb-md-0">
                <Link href="/art/36daysoftype-10" className="project-li-link hover-none">
                    <div className="image-container">
                        <Image
                            src="/typography-project-img.jpg"
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
        {/* End of art section */}
          </div>
      </>
    )
  }


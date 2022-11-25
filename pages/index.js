import React, { useEffect, useState } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from "react-intersection-observer"
import { motion, useAnimation, useTransform, useViewportScroll} from "framer-motion"
import { Parallax } from 'react-scroll-parallax';
import HoverVideoPlayer from 'react-hover-video-player'


export default function Home() {


// Delete this code if it doesn't work on animation
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 1 }
      });
      console.log('visibile');
    }
    if (!inView) {
      controls.start({
        x: -200,
        opacity: 0
      });
      console.log('hidden');
    }
  }, [controls, inView]);

  const sec = {
    visible: {opacity: 1, x: 0, transition: { duration: 1, delay: 0.2}},
    hidden: {opacity: 0, x: -200},
  };

  const {scrollYProgress} = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.3]);
  return (
    <>
      <Head>
        <title>POTOO STUDIO</title>
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="description" content="POTOO STUDIO | A creative Studio specializes in branding, web design, and website development"/>
        <meta property="og:title" content="POTOO STUDIO" />
        <meta property="og:description" content="POTOO STUDIO | creative designs, branding, and website development"/>
        <meta property="og:url" content="https://potoo.studio" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="container-fluid home-page-container mx-0 pb-lg-5">
        <div className="row justify-content-center">
          <div className="col-md-12 col-12 pl-lg-0 pr-lg-0 mr-lg-0 your-bg pt-4 pt-md-0 pt-5 pr-0 pl-0">
            <motion.div className="main-page-impression-text-box py-5 my-4 py-md-0 my-md-0"
             initial={{opacity: 0}}
             animate={{opacity: 1}}
             transition={{
               opacity: { duration: 1, delay: 0.9},
             }}
             >
                <h1 className="main-page-impression-text-large mt-lg-5 pt-lg-4 ">
                  Nesting Impressions <br/> on <strong className="color">Paper</strong> and <strong className="color">Screen</strong>
                </h1>
            </motion.div>
          </div>
          {/* <div className=" col-md-3-custom-30p col-12 pt-2 pt-md-0">
            <video className="video" playsinline="" webkit-playsinline="" autoPlay loop muted width="100%" height="100%">
              <source src="/main-potoo-animtaion.mp4" type="video/mp4"/>
             </video>
          </div> */}
        </div>
      </div>
     <div className="container-fluid design-container mx-1600">
        <div className="row home-page-row-project-images mb-5 mb-md-1 pt-md-5 mt-md-5 justify-content-center">
          <div className="col-11 ml-md-5">
              <motion.h1 className="work-title luxury-title"
               whileInView= {{letterSpacing: 0}}
               transition={{
                letterSpacing: { duration: 0.8, repeat: 0, delay: 0.3},
               }}
               initial={{letterSpacing: "4rem"}}
               >
                Work
              </motion.h1>
              <ul className="project-list-image-list pt-4 pt-md-5 mt-md-4">
                <motion.li className="item project-image-item full-item"
                 whileInView= {{x: 0}}
                 transition={{
                  x: { duration: 0.8, repeat: 0, delay: 0.2},
                 }}
                 initial={{x: "20px"}}
                >
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
                  <p className="project-title pt-md-4 luxury-title">
                    Abdulhamid <span className="small-text">(Gulf War)</span> <br/><span className="project-info">Web</span>
                  </p>

                </motion.li>
                <motion.li className="item project-image-item third-item"
                whileInView= {{x: 0}}
                transition={{
                 x: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{x: "-20px"}}
                >
                  <Link href="/projects/seedstock" className="project-li-link">
                    <div className="image-container">
                      <Image
                        src="/project-seedstock.jpg"
                        layout='fill'
                        className="image"
                        alt="Seedstock project image"
                        />
                    </div>
                        <p className="project-title text-center luxury-title pt-md-3">
                          Seedstock <br/><span className="project-info">Advertising</span>
                        </p>
                  </Link>
                </motion.li>
              </ul>
            </div>
        </div>
     </div>
     <div className="container-fluid service-container mx-1600 mt-md-5">
        <div className="row justify-content-md-around justify-content-sm-start pt-md-5 px-lg-5">
            <div className="col-lg-5 col-md-5 col-11 px-lg-5 mb-lg-5 col-h">
              <motion.h1 className="service-custom-h1"
              whileInView= {{y: 0}}
              transition={{
               y: { duration: 0.4, repeat: 0, delay: 0},
              }}
              initial={{y: "20px"}}
              >
                branding
              </motion.h1>
              <ul className="service-item-ul">
                <motion.li className="item"
                whileInView= {{y: 0}}
                transition={{
                 y: { duration: 0.4, repeat: 0, delay: 0.1},
                }}
                initial={{y: "15px"}}
                >
                  Strategy + Naming
                </motion.li>
                <motion.li className="item"
                whileInView= {{y: 0}}
                transition={{
                 y: { duration: 0.4, repeat: 0, delay: 0.2},
                }}
                initial={{y: "15px"}}
                >
                  Identity
                </motion.li>
                <motion.li className="item"
                whileInView= {{y: 0}}
                transition={{
                 y: { duration: 0.4, repeat: 0, delay: 0.3},
                }}
                initial={{y: "15px"}}
                >
                  Guidelines
                </motion.li>
                <motion.li className="item"
                whileInView= {{y: 0}}
                transition={{
                 y: { duration: 0.4, repeat: 0, delay: 0.4},
                }}
                initial={{y: "15px"}}
                >
                   Product Design
                </motion.li>
              </ul>
            </div>
            <div className="col-lg-5 col-md-5 col-11 px-lg-5 mb-lg-5 col-h">
              <motion.h1 className="service-custom-h1"
              whileInView= {{y: 0}}
              transition={{
               y: { duration: 0.4, repeat: 0, delay: 0},
              }}
              initial={{y: "20px"}}
              >
                Web Design & Development
              </motion.h1>
              <ul className="service-item-ul">
                <motion.li className="item"
                whileInView= {{y: 0}}
                transition={{
                 y: { duration: 0.4, repeat: 0, delay: 0.1},
                }}
                initial={{y: "15px"}}
                >
                  Prototype
                </motion.li>
                <motion.li className="item"
                whileInView= {{y: 0}}
                transition={{
                 y: { duration: 0.4, repeat: 0, delay: 0.2},
                }}
                initial={{y: "15px"}}
                >
                  Responsive
                </motion.li>
                <motion.li className="item"
                whileInView= {{y: 0}}
                transition={{
                 y: { duration: 0.6, repeat: 0, delay: 0.3},
                }}
                initial={{y: "15px"}}
                >
                  CMS-based Sites
                </motion.li>
                <motion.li className="item"
                whileInView= {{y:0}}
                transition={{
                  y: { duration: 0.4, repeat: 0, delay: 0.4},
                }}
                initial={{y: "15px"}}
                >
                  Custom Web Development
                </motion.li>
              </ul>
            </div>
        </div>
      </div>
    </>
  )
}


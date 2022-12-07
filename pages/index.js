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
      <div className="container-fluid home-page-container px-0 pb-lg-5 mx-1600">
        <div className="row justify-content-center pb-md-5 mb-md-5">
          <div className="col-md-12 col-12 pl-lg-0 pr-lg-0 mr-lg-0 your-bg pt-4 pt-md-0 pt-5 pr-0 pl-0">
            <motion.div className="main-page-impression-text-box py-5 my-4 py-md-0 my-md-0"
             initial={{opacity: 0}}
             animate={{opacity: 1}}
             transition={{
               opacity: { duration: 1, delay: 0.9},
             }}
             >
                <h1 className="main-page-impression-text-large luxury-title">
                  Nesting Impressions <br/> <span className="smaller-text">on</span> <strong className="bolder-text">Paper</strong> <span className="smaller-text">and</span> <strong className="bolder-text">Screen</strong>
                </h1>
            </motion.div>
          </div>
        </div>
        <div className="row justify-content-between px-4 pt-5 mt-5">
          <div className="col-md-3 col-10 pt-5">
             <h1 className="luxury-title">
               Awards
             </h1>
          </div>
          <div className="col-md-4 col-10 pt-md-5 pt-1">
            <ul className="award-list text-right text-md-left">
              <li className="award-item">
              <Image
                  src="/csswinner.svg"
                  width={138}
                  height={17}
                  className="award"
                  alt="project award"
                  />
              </li>
              <li className="award-item pt-2 pt-md-0">
              <Image
                  src="/cssdesignawards.svg"
                  width={163}
                  height={24}
                  className="award"
                  alt="project award"
                  />
              </li>
            </ul>
          </div>
        </div>
      </div>
     <div className="container-fluid design-container mx-1600">
        <div className="row home-page-row-project-images mb-5 mb-md-1 pt-md-5 mt-md-5 justify-content-center px-4">
          <div className="col-12 px-0">
              <motion.h1 className="luxury-title"
               whileInView= {{letterSpacing: 0}}
               transition={{
                letterSpacing: { duration: 0.8, repeat: 0, delay: 0.3},
               }}
               initial={{letterSpacing: "0.4rem"}}
               >
                Work
              </motion.h1>
              <ul className="project-list-image-list pt-2 pt-md-5 mt-md-4">
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
                  <p className="project-title pt-md-4 pt-2 luxury-title">
                    Abdulhamid <span className="small-text">(Gulf War)</span> <br/><span className="project-info text-normal">Web</span> <span className="project-info float-right text-normal">Awards x4</span>
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
                        <p className="project-title text-center luxury-title pt-md-3 pt-2 ml-auto mr-auto">
                          Seedstock <br/><span className="project-info text-normal">Advertising</span>
                        </p>
                  </Link>
                </motion.li>
              </ul>
            </div>
        </div>
     </div>
     <div className="container-fluid service-container mx-1600">
        <div className="row justify-content-md-between justify-content-sm-center pt-md-5 px-lg-5 px-4">
          <div className="col-md-2 col-10">
            <h1 className="luxury-title">
              We Do
            </h1>
          </div>
          <div className="col-md-9 col-11 pt-md-0 pt-4">
                <ul className="we-do-list">
                  <li className="we-do-item mt-3 mt-md-0 pt-2">
                    Brand Strategy
                  </li>
                  <li className="we-do-item mt-5 mt-md-0 pt-2">
                    Naming
                  </li>
                  <li className="we-do-item mt-5 mt-md-0 pt-2">
                    Identity Systems
                  </li>
                  <li className="we-do-item mt-5 pt-2">
                    Brand Guidelines
                  </li>
                  <li className="we-do-item mt-5 pt-2">
                    Web Design
                  </li>
                  <li className="we-do-item mt-5 pt-2">
                    Web Development
                  </li>
                </ul>
          </div>
        </div>
      </div>
    </>
  )
}


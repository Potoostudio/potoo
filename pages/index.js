import React from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion} from "framer-motion"


export default function Home() {


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
      <div className="container-fluid home-page-container px-0 pb-lg-5 mx-1600">
        <div className="row justify-content-center pb-md-5 mb-md-5">
          <div className="col-md-12 col-12 pl-lg-0 pr-lg-0 mr-lg-0 your-bg pt-4 pt-md-0 pt-5 pr-0 pl-0">
            <motion.div className="main-page-impression-text-box py-5 my-4 py-md-0 my-md-0"
             initial={{opacity: 0}}
             animate={{opacity: 1}}
             transition={{
               opacity: { duration: 1, delay: 0.4},
             }}
             >
                <h1 className="main-page-impression-text-large luxury-title">
                  Nesting Impressions <br/> <span className="smaller-text">on</span> <strong className="bolder-text">Paper</strong> <span className="smaller-text">and</span> <strong className="bolder-text">Screen</strong>
                </h1>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5 mt-md-4 mt-5">
        <div className="row px-md-5 px-4 justify-content-center pt-5 pt-md-0 mt-5 mt-md-0">
          <div className="col-md-12 px-0">
            <h3 className="luxury-title text-center line-before-after">We</h3>
          </div>
        </div>
        <motion.div className="row px-md-5 px-4 justify-content-between pt-4"
        initial={{y: 0}}
        animate={{y: -20}}
        transition={{
          y: { duration: 1, delay: 0.4},
        }}>
          <div className="col-md-5 px-0 col-12">
            <h5 className="text-capitalize font-bolder">are A branding studio based in Denver.</h5>
          </div>
          <div className="col-md-5 px-0 col-12 pt-5 pt-md-0 mt-md-0 mt-5">
            <p className="text-normal">With minimalist design as the core of our studio, <span className="luxury-title font-18px font-italic text-white">we specialize in</span></p>
            <ul className="list specialize-list pt-md-5 pt-4">
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
            </ul>
          </div>
        </motion.div>
      </div>
     <div className="container-fluid design-container">
        <div className="row home-page-row-project-images mb-5 mb-md-1 pt-5 mt-md-5 justify-content-center px-4 px-md-5">
           <div className="col-md-12 px-0">
            <h3 className="luxury-title text-center line-before-after">Work</h3>
          </div>
          <div className="col-md-12 px-0">
              <motion.ul className="project-list-image-list pt-5 pt-md-5 mt-md-4"
              initial={{y: 0}}
              whileInView={{y: -20}}
              viewport={{ once: true }}
              transition={{
                y: { duration: 1, delay: 0.4},
              }}
              >
                <p className="project-title pt-md-4 mt-md-0 pt-5 mt-5 pb-3 mb-0 luxury-title">
                    JAEGER—AERATION<br/><span className="project-info text-normal pt-1 pt-md-0">Brand <span className="divider">|</span> Web</span>
                </p>
                <li className="item project-image-item full-item">
                  <Link href="/projects/jaeger-aeration" className="project-li-link">
                    <div className="image-container">
                      <Image
                          src="/Jaeger-Building-Signage.jpg"
                          layout="fill"
                          className="image"
                          alt="Project Jaeger Aeration"
                          loading="lazy"
                          />
                    </div>
                  </Link>
                </li>
                <p className="project-title pt-md-4 mt-md-0 pt-5 mt-5 pb-3 mb-0 luxury-title">
                    36 Days of Type<br/><span className="project-info text-normal pt-1 pt-md-0">Design</span>
                </p>
                <li className="item project-image-item full-item">
                  <Link href="/projects/36daysoftype-10" className="project-li-link">
                    <div className="image-container">
                      <Image
                          src="/Type-Project-Img.jpg"
                          layout="fill"
                          className="image"
                          alt="36 days of type"
                          />
                    </div>
                  </Link>
                </li>
                <p className="project-title pt-md-4 mt-md-0 pt-5 mt-5 pb-3 mb-0 luxury-title">
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
                <p className="project-title pt-md-4 mt-md-0 pt-5 mt-5 pb-3 mb-0 luxury-title">
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
              </motion.ul>
            </div>
        </div>
     </div>
     <div className="container-fluid pt-md-0 pt-5 mt-md-0 mt-5">
     <div className="row justify-content-between px-4 px-md-5 pt-5 mt-5">
        <div className="col-md-12 px-0 pb-4 pb-md-0">
          <h3 className="luxury-title text-center line-before-after">Awards <sup className="color-secondary">4x</sup></h3>
        </div>
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
              <li className="award-item pt-2 color-secondary">
                3x
              </li>
              <li className="award-item pt-md-4 pt-3 color-secondary">
                1x
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  )
}


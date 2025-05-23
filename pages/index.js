import React, { useEffect, useState } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion} from "framer-motion"
import EmblaCarousel from '../comps/carousel/EmblaCarousel'
import Projects from "../comps/project"
import Services from "../comps/services"

export default function Home() {


  const OPTIONS = { slidesToScroll: 'auto' }
  const SLIDE_COUNT = 8
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const tick = () => setIndex(i => i + 1);
    const id = setInterval(tick, 1200);
    return () => clearInterval(id);
  }, []);

    return (
      <>
        <Head>
          <title>A creative agency in Baghdad</title>
          <link rel="icon" href="favicon.png" />
          <link rel="manifest" href="/manifest.json"/>
          <meta name="description" content="A creative agency in Baghdad and Denver"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="keywords" content="branding agency in Denver, branding agency in Baghdad, creative agency in Baghdad, creative agency in Denver, AI agency in baghdad, Development agency in baghdad, cyber security solutions in baghdad, AI solutions in Baghdad,"/>
        </Head>
        <div className="container-fluid home-page-container pt-md-0 mt-md-0 bg-white">
          <div className="row height-67vh justify-content-start pb-4">
            <motion.div 
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{ duration: 0.7, delay: 0.5}}
            className="col-md-10 col-12 pl-lg-0 pr-lg-0 mr-lg-0 pt-5 mt-5">
            <h2 className="main-page-impression-title mx-md-5 mt-4 pt-5 color-dark font-medium">We are a creative studio, committed to creating meaningful
              solutions built around the fundamentals of design and technology.</h2>
            </motion.div>
          </div>
          <div className="row justify-content-md-end  justify-content-start pb-4 mx-md-5">
            <motion.div 
            initial={{opacity: 0, y: -30}}
            animate={{opacity: 1, y: 0}}
            transition={{ duration: 0.7, delay: 0.5}}
            className="col-md-3 col-10 pl-lg-0 pr-lg-0 mr-lg-5 mt-4">
              <h6 className="color-dark line-height-extra font-secondary">Our objective is to provide solutions designed to outlast today’s trends and stand relevant in the future.</h6>
            </motion.div>
            <motion.div 
            initial={{opacity: 0, y: -30}}
            animate={{opacity: 1, y: 0}}
            transition={{ duration: 0.7, delay: 0.5}}
            className="col-md-3 col-10 pl-lg-0 pr-lg-0 mr-lg-5 mt-4">
              <h6 className="color-dark line-height-extra font-secondary">Our process centers on uncovering the fundamentals and using them as the foundation to design solutions.</h6>
            </motion.div>
          </div>
          <Projects/>
          <div className="row justify-content-md-end pt-12x mt-4x">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            <div className="col-md-6 col-11 mt-2x pb-md-5 pb-md-3 mt-5 pe-md-5">
              <p className="info pb-md-3 line-height-extra font-secondary">
                We are on a mission to use design and technology in their best form to tell stories, highlight the insufficient, celebrate the extraordinary, document history, honor the difference, and fulfill our purpose in life.
              </p>
              <Link href="/studio" className=" hover-none btn btn-outline-dark bg-black color-white mt-2 mt-md-0 py-md-2 px-md-4 font-secondary">Read More</Link>
          </div>
          </div>
          <Services/>
        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{ once: true }}
          transition={{
            y: { duration: 1, delay: 0.4},
          }}
        className="row justify-content-start px-md-5 pt-12x pb-10x mt-4x">
          <div className="col-md-12 px-md-0 pb-0 pb-md-0 pt-5">
              <h4 className="line-before-after">Journal</h4>
          </div>
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
                <h6 className="title pt-2 hover-none mb-0 color-dark">
                  Typography <span className="float-end text-decoration-underline font-secondary">2-Minute Read</span>
                </h6>
                <p className="article-info pt-2 hover-none line-height-normal color-dark font-secondary">
                 The difference between an unkerend Baghdad and a finely hand-kerned Baghdad
                </p>
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
                <h6 className="title pt-2 color-dark hover-none mb-0 text-decoration-none">
                    Brand research <span className="float-end text-decoration-underline font-secondary">5-Minute Read</span>
                </h6>
                <h6 className="article-info pt-2 color-dark font-secondary hover-none text-decoration-none">
                 Know your audience beyond the demographic information
                </h6>
            </Link>
        </div>
        </motion.div>
        
          </div>
      </>
    )
  }


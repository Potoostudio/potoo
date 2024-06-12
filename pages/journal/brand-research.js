import React, { useEffect } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Projects() {



  return (
    <>
      <Head>
	  	<title>Journal | Brand Research</title>
        <link rel="icon" href="favicon.png" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="description" content="Journal | Brand research demographic and psychographic"/>
        <meta property="og:title" content="Journal | Brand research demographic and psychographic" />
        <meta property="og:description" content="Journal | Brand research demographic and psychographic"/>
        <meta property="og:url" content="https://potoo.studio/journal/brand-research"/>
        <meta property="og:type" content="website" />
      </Head>
      
      <div className="container-fluid mt-md-5 pt-8x bg-white">
          <div className="row project-row justify-content-start pb-md-0 pt-0 mt-0 mt-md-5 pb-0 px-md-5 px-3 color-dark">
            <motion.div className="col-12 col-10 px-0"
            whileInView= {{y: 0}}
            viewport={{ once: true }}
            transition={{
            y: { duration: 0.8, repeat: 0, delay: 0.2},
            }}
            initial={{y: "25px"}}>
                <h5 className="title luxury-title color-darker">
                  READ
                </h5>
            </motion.div>
          </div>
          <motion.div className="row project-row justify-content-center pb-md-5 pt-4 pt-md-0 mt-2x pb-0 px-md-5"
          whileInView= {{y: 0}}
          viewport={{ once: true }}
          transition={{
          y: { duration: 0.8, repeat: 0, delay: 0.2},
          }}
            initial={{y: "25px"}}>
              <div className="col-md-10 col-12">
                <h1 className="luxury-title font-x-large color-dark text-left">
                  Demographic and Psychographic research
                </h1>
                <ul className="list list-style-none pt-2 pt-md-0 px-0 journal-list pt-md-2">
                  <li className="item color-darker ">
                    Brand Research
                  </li>
                  <li className="item color-darker ml-md-4 mt-2 mt-md-0">
                    Brand Research
                  </li>
                  <li className="item color-darker ml-md-4 mt-2 mt-md-0">
                    Brand Research
                  </li>
                </ul>
            </div>
          </motion.div>
          <div className="row justify-content-right px-md-5 border-bottom">
            <div className="col-12 px-3">
              <h6 className="title luxury-title color-darker text-right pb-4">
                06.12.24
              </h6>
            </div>
          </div>
          <div className="row project-row justify-content-md-center pb-md-5 pt-6rem pt-lg-8rem mt-5 mt-md-5 pb-5 pb-md-0 px-md-5 px-0">
            <div className="col-md-10 col-12">
                <motion.p className="luxury-title text-left text-dark font-medium"
                 initial={{y: "25px"}}
                 whileInView={{y: 0}}
                 viewport={{ once: true }}
                 transition={{
                   y: { duration: 0.8, repeat: 0, delay: 0.2},
                 }}>
                    Research is the core foundation upon which a successful visual identity is designed.<br/> <br/>
                    It’s the process of understanding the essentials, audience, and goal of a project to build the strategy and design decisions that follow.<br/> <br/>
                    It is our role to understand the problem we are solving with design, because by doing so, we create a visual identity that is not only pleasing but also functional.
                </motion.p>
                <motion.h1
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}
                className="luxury-title text-dark font-x-large pt-5 mt-5 text-center">
                  Design makes function visible.<br/>
                  <span className="font-18px color-darker text-left">-Jennifer Morla</span>
                </motion.h1>
                <motion.p className="luxury-title text-left text-dark font-medium pt-5 mt-5"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    Think of research as the core of the project. It will determine the time, design stages, goals, and every other step of the project.<br/> <br/>
                    Treat your research as the foundation of your project, a firm foundation allows you to build a firm project.<br/> <br/>
                </motion.p>
                <motion.div className="image-container pt-4"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Brand-research.jpg"
                        layout="fill"
                        className="image"
                        alt= "Brand-research"/>
                </motion.div>
                <p className="font-italic color-dark pt-2">
                  Demographic and psychographic research
                </p>
                <motion.p className="luxury-title text-left text-dark font-medium pt-5 mt-5"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    According to David Airey:<br/>
                  “The use of demographics (age, sex, status, etc) is outdated.<br/>
                  Incorrect assumptions happen with demographics because not every twenty-one-year-old American woman at a university thinks the same.”<br/> <br/>
                  Treat your research as the foundation of your project, a firm foundation allows you to build a firm project.
                </motion.p>
                <motion.p className="luxury-title text-left text-dark font-medium pt-5 mt-5"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                  Modern designers focus on Psychographics (values, interests, needs aspirations, etc)<br/>
                  The analysis of Psychographics makes it easier to find your “who.”
                </motion.p>
                <motion.p className="luxury-title text-left text-dark font-medium pt-5 mt-5"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                  Know your audience beyond the demographic information
                </motion.p>
                <motion.h1 className="luxury-title text-left text-dark font-large pt-4"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                  Who are they?<br/>
                  What sparks them?<br/>
                  What are their goals?<br/>
                  What makes them giggle?<br/>
                  Why they should care?
                </motion.h1>
                <motion.p className="luxury-title text-left text-dark font-medium pt-5 mt-5 pb-5 mb-8x"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                  Then, you will find the right voice to communicate to your audience authentically.
                </motion.p>
            </div>
          </div>
      </div>
    </>
  )
}


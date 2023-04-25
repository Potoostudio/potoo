import React from "react"
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from "next/link"

export default function Projects() {
      

  return (
    <>
      <Head>
	  	<title>POTOO STUDIO | Jaeger—Aeration </title>
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="description" content="Potoo Project Jaeger—Aeration | Branding project, logo, website design & development, Visual Design"/>
        <meta property="og:title" content="POTOO STUDIO | Projects, Denver" />
        <meta property="og:description" content="Potoo Studio project | Branding project, logo, website design & development, Visual Design`"/>
        <meta property="og:url" content="https://potoo.studio/potoo-project" />
        <meta property="og:type" content="website" />
      </Head>
      
      
      <div className="container-fluid pt-5 project-showcase-container">
          <motion.div className="row project-row justify-content-start pb-md-5 pt-5 pt-md-0 mt-5 mt-md-5 pb-5 pb-md-0 px-md-5 px-4"
          initial={{y: 0}}
          animate={{y: -20}}
          viewport={{ once: true }}
          transition={{
            y: { duration: 1, delay: 0.4},
          }}>
          <div className="col-md-4 col-10 project-col px-0">
                  <ul className="project-list">
                      <li className="project-item project-year mt-4 mt-md-5 border-bottom text-left pb-1">
                          2023
                      </li>
                      <li className="project-item project-title text-uppercase text- pt-5 mt-5 text-left">
                        Jaeger — Aeration
                      </li>
                      <li className="project-item project-info text-left">
                        Brand | Web
                      </li>
                      <li className="project-item project-impression color-secondary pt-5 text-left">
                        Impression <span className="float-right"><em className="impression-lines">- Stretched -</em></span>
                      </li>
                  </ul>
              </div>
          </motion.div>
          <div className="row justify-content-between pt-5 mt-5 pb-5 mb-5 pt-md-5 mt-md-5 px-0 px-md-4">
           <motion.div className="col-md-5 col-10"
            whileInView= {{y: 0}}
            viewport={{ once: true }}
            transition={{
            y: { duration: 0.8, repeat: 0, delay: 0.4},
            }}
            initial={{y: "15px"}}
           >
            <h1 className="normal-text">
                Logo
            </h1>
           </motion.div>
           <div className="col-md-5 col-12 pt-md-0 pt-3">
            <motion.div className="image-container"
            whileInView= {{opacity: 1}}
            viewport={{ once: true }}
            transition={{
            opacity: { duration: 0.8, repeat: 0, delay: 0.4},
            }}
            initial={{opacity: 0}}
            >
            <p className="normal border-bottom pb-2">
                The stretched <em>em dash</em> displays the coverage of the <span className="font-weight-bold">US</span> and <span className="font-weight-bold">Europe </span>
                markets.
            </p>
            <Image
                src="/Jaeger-logo.svg"
                layout="fill"
                className="image pt-4"
                alt= "Jaeger Aeration Logo"
            />
            </motion.div>
           </div>
        </div>

        <div className="row justify-content-between pt-5 mt-5 pb-5 mb-5 pt-md-5 mt-md-5 px-0 px-md-4">
            <motion.div className="col-md-5 col-10 pt-md-5 mt-md-5"
                whileInView= {{y: 0}}
                viewport={{ once: true }}
                transition={{
                y: { duration: 0.8, repeat: 0, delay: 0.4},
                }}
                initial={{y: "15px"}}
            >
                <h1 className="normal-text">
                    Voice
                </h1>
            </motion.div>
            <div className="col-md-5 col-12 pt-md-5 mt-md-5 pt-3">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.4},
                }}
                initial={{opacity: 0}}
                >
                <p className="normal border-bottom pb-2">
                <span className="font-weight-bold">Pioneer</span> to emphasize the 50 years in business <br/>
                <span className="font-weight-bold">Fine-Bubble</span> describes the core of the business
                </p>
                <Image
                    src="/Jaeger-logo-with-voice.svg"
                    layout="fill"
                    className="image pt-4"
                    alt= "Jaeger Aeration Logo"
                />
                </motion.div>
            </div>
        </div>
        <div className="row justify-content-between pt-5 mt-5 pb-5 mb-5 pt-md-5 mt-md-5 px-0 px-md-4">
            <motion.div className="col-md-2 col-10 pt-md-5 mt-md-5"
                whileInView= {{y: 0}}
                viewport={{ once: true }}
                transition={{
                y: { duration: 0.8, repeat: 0, delay: 0.4},
                }}
                initial={{y: "15px"}}
            >
                <h1 className="normal-text">
                    Brand Guidelines
                </h1>
            </motion.div>
            <div className="col-md-8 col-12 pt-md-5 mt-md-5">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.4},
                }}
                initial={{opacity: 0}}
                >
                <Image
                    src="/Jaeger-brand-identity.jpg"
                    layout="fill"
                    className="image pt-4"
                    alt= "Jaeger Aeration  brand guidelines"
                />
                <div className="pt-3">
                    <Link href="https://heyzine.com/flip-book/d906398ae0.html" target="_blank" className="text-light link-opacity-75 link-opacity-100-hover text-decoration-none">Brand Guidelines</Link>
                </div>
                </motion.div>
            </div>
        </div>
        <div className="row justify-content-between pt-5 mt-5 pb-5 mb-5 pt-md-5 mt-md-5 px-0 px-md-4">
            <motion.div className="col-md-2 col-10 pt-md-5 mt-md-5"
                whileInView= {{y: 0}}
                viewport={{ once: true }}
                transition={{
                y: { duration: 0.8, repeat: 0, delay: 0.4},
                }}
                initial={{y: "15px"}}
            >
                <h1 className="normal-text">
                    Visual Design
                </h1>
            </motion.div>
            <div className="col-md-8 col-12 pt-md-5 mt-md-5">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.4},
                }}
                initial={{opacity: 0}}
                >
                <Image
                    src="/Jaeger-visual-design.jpg"
                    layout="fill"
                    className="image pt-4"
                    alt= "Jaeger Aeration Visual Design"
                />
                </motion.div>
            </div>
        </div>
        <div className="row justify-content-md-end pt-6rem mt-5 pb5 mt-md-5 px-0 px-md-4">
            <div className="col-12 col-md-4 mt-md-5 text-left pb-md-5 pt-md-5 pb-3 pt-lg-6rem">
                <h4 className="">This project made under the influence of:</h4>
            </div>
            <div className="col-12 col-md-4 text-left pt-md-5 mt-md-5 pt-lg-6rem">
            <motion.ul className="list pl-md-0 pl-3"
                whileInView= {{y: 0}}
                viewport={{ once: true }}
                transition={{
                  y: { duration: 1.2, repeat: 0, delay: 0.4},
                }}
                initial={{y: 30}}
                >
                    <li className="item">
                        Typography
                    </li>
                    <li className="item">
                        Sunny Days
                    </li>
                    <li className="item">
                        Cappuccino
                    </li>
                </motion.ul>
            </div>
        </div>
      </div>

    </>
  )
}


import React, { useEffect } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Iris() {



  return (
    <>
      <Head>
	  	<title>AI empowers people and business</title>
        <link rel="icon" href="favicon.png" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="description" content="AI empowers people and business"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="AI in Iraq, AI in Baghgdad, Customer service AI in Baghdad, Customer service AI in Iraq, AI in Iraq" />
      </Head>
      
      <div className="container-fluid mt-md-5 pt-8x">
          <div className="row project-row justify-content-start pt-5 pt-md-0 pb-0 px-md-5 mt-6x">
            <motion.div className="col-md-2 col-10 ps-0 mt-5 mt-md-0 pt-5 pt-md-0"
            whileInView= {{y: 0}}
            viewport={{ once: true }}
            transition={{
            y: { duration: 0.8, repeat: 0, delay: 0.2, ease: "easeOut"},
            }}
            initial={{y: "25px"}}>
                <div className="image-container">
                    <Image
                        src="/Iris-logo.svg"
                        layout="fill"
                        className="image w-s-50"
                        alt= "Logo of Iris AI assistant"/>
                </div>
            </motion.div>
          </div>
          <motion.div className="row project-row justify-content-start pb-md-5 pt-0 pb-5 pb-md-0 px-md-5"
          whileInView= {{y: 0}}
          viewport={{ once: true }}
          transition={{
          y: { duration: 0.8, repeat: 0, delay: 0.2, ease: "easeOut"},
          }}
          initial={{y: "25px"}}>
            <div className="col-md-8 col-10">
               <h6 className="project-title font-secondary">
                   AI empowers people and businesses.
                </h6>
            </div>
            <div className="col-md-8 col-10 pt-12x mt-5 mt-md-0">
               <p className="project-title mb-0 font-secondary pt-5 pt-md-0">
                   Designed by our Design Dept.
                </p>
               <p className="project-title font-secondary">
                   Developed by our Development Dept.
                </p>
            </div>
          </motion.div>

          <div className="row project-row justify-content-md-between pb-md-5 pt-6rem pt-lg-8rem mt-5 mt-md-5 pb-3 pb-md-0 px-md-5 px-0">
            <div className="col-md-6 col-11">
                <motion.h4 className=""
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    What is Iris?
                </motion.h4>

                <motion.p className="pt-3 font-secondary"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.25}}>
                    Iris is an AI designed to empower individuals and businesses through information and practical tools. Initially focused on the Iraqi market, Iris also has the potential to expand across the MENA region.
                </motion.p>
                <motion.p className="pt-md-5 pt-2 font-secondary"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.25}}>
                    Built to learn and evolve, and support growth and success.
                </motion.p>
            </div>
            <div className="col-md-5 col-11 pt-5">
                <motion.ul
                className="list-style-none ps-0 color-secondary font-secondary mb-0"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.25}}>
                  <span className=" text-uppercase">runs on</span>
                    <li className="item pt-2 font-secondary">
                     WhatsApp
                    </li>
                    <li className="item font-secondary">
                     Social Media
                    </li>
                    <li className="item font-secondary">
                     Websites
                    </li>
                  </motion.ul>
            </div>
          </div>
          <div className="row project-row justify-content-around pb-md-5 mt-0 mt-md-2 pb-5 pb-md-0 px-md-5 px-0">
            <div className="col-12 p-0 border">
                <motion.video className="video-" playsinline="" webkit-playsinline="" autoPlay loop muted width="100%" height="100%"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                   }}
                   initial={{opacity: 0.3}}>
                      <source src="/Iris-Main-Video.mp4" type="video/mp4"/>
                </motion.video>
            </div>
          </div>
          <div className="row project-row justify-content-around pb-md-5 mt-3 mt-md-2 pb-2 pb-md-0 px-md-5 px-0 pt-6rem pt-lg-12rem">
            <div className="col-12 pt-5 pt-md-3 mt-5 mt-md-0">
             <motion.h4 className=""
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    What does Iris do?
                </motion.h4>
            </div>
          </div>
          <div className="row project-row justify-content-md-between justify-content-start pb-md-4 mt-0 pb-4 mt-md-2 px-md-5 px-3 top-line pt-4">
            <div className="col-md-2 col-10 pt-1 px-0">
             <motion.h5 className="fw-bolded mb-1"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    Answer questions
                </motion.h5>
            </div>
            <div className="col-md-3 col-11 pt-md-1 pt-0 px-0">
             <motion.p className="font-secondary mb-1"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    Answer questions using English and Arabic/Iraqi dialect.
                </motion.p>
            </div>
              <div className="col-md-6 col-12 pt-md-1 pt-0 px-0">
                  <motion.video className="video-" playsinline="" webkit-playsinline="" autoPlay loop muted width="100%" height="100%"
                      whileInView= {{opacity: 1}}
                      viewport={{ once: true }}
                      transition={{
                      opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                    }}
                    initial={{opacity: 0.3}}>
                          <source src="/Iris-answers-text.mp4" type="video/mp4"/>
                    </motion.video>
              </div>
            </div>
          <div className="row project-row justify-content-md-between justify-content-start pb-md-4 pb-4 mt-0 mt-md-2 px-md-5 px-3 top-line pt-4">
            <div className="col-md-2 col-10 pt-1 px-0">
             <motion.h5 className="fw-bolded mb-1"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    Analyze pictures
                </motion.h5>
            </div>
            <div className="col-md-3 col-11 pt-md-1 pt-0 px-0">
             <motion.p className="font-secondary mb-1"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    Analyze pictures and files uploaded by users
                </motion.p>
            </div>
              <div className="col-md-6 col-12 pt-md-1 pt-0 px-0">
                  <motion.video className="video-" playsinline="" webkit-playsinline="" autoPlay loop muted width="100%" height="100%"
                      whileInView= {{opacity: 1}}
                      viewport={{ once: true }}
                      transition={{
                      opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                    }}
                    initial={{opacity: 0.3}}>
                          <source src="/Iris-file analyzing.mp4" type="video/mp4"/>
                    </motion.video>
              </div>
            </div>
          <div className="row project-row justify-content-md-between justify-content-start pb-md-4 mt-0 pb-4 mt-md-2 px-md-5 px-3 top-line pt-4">
              <div className="col-md-2 col-10 pt-1 px-0">
              <motion.h5 className="fw-bolded mb-1"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                      Answer voice notes
                  </motion.h5>
              </div>
              <div className="col-md-3 col-11 pt-md-1 pt-0 px-0 mb-0">
              <motion.p className="font-secondary mb-1"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                      Answer voice notes English and Arabic/Iraqi voice.
                  </motion.p>
              </div>
              <div className="col-md-6 col-12 pt-md-1 pt-0 px-0">
                  <motion.video className="video-" playsinline="" webkit-playsinline="" autoPlay loop muted width="100%" height="100%"
                      whileInView= {{opacity: 1}}
                      viewport={{ once: true }}
                      transition={{
                      opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                    }}
                    initial={{opacity: 0.3}}>
                          <source src="/Iris-voice-vid.mp4" type="video/mp4"/>
                    </motion.video>
              </div>
            </div>
          <div className="row project-row justify-content-md-between justify-content-start pb-md-4 mt-0 pb-4 mt-md-2 px-md-5 px-3 top-line pt-4 bottom-line">
              <div className="col-md-2 col-10 pt-1 px-0">
              <motion.h5 className="fw-bolded mb-1"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                      Book meetings
                  </motion.h5>
              </div>
              <div className="col-md-3 col-11 pt-md-1 pt-0 px-0">
              <motion.p className="font-secondary mb-1"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                      Checks calendar availability and books meetings for clients
                  </motion.p>
              </div>
              <div className="col-md-6 col-12 pt-md-1 pt-0 px-0">
                  <motion.video className="video-" playsinline="" webkit-playsinline="" autoPlay loop muted width="100%" height="100%"
                      whileInView= {{opacity: 1}}
                      viewport={{ once: true }}
                      transition={{
                      opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                    }}
                    initial={{opacity: 0.3}}>
                          <source src="/Iris-meeting-vid.mp4" type="video/mp4"/>
                    </motion.video>
              </div>
            </div>
          <div className="row project-row justify-content-start pb-md-4 mt-6x pt-lg-12rem px-md-4">
              <div className="col-12 pt-md-1 pt-5 mt-5 mt-md-0 mb-4">
                <motion.h4 className="fw-bolded"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                      What can Iris do for your company?
                  </motion.h4>
              </div>
              <div className="col-md-4 col-12 pt-3 pt-1">
                  <div className="box-bg p-4">
                    <p className=" pt-md-3 color-red">
                      CS
                    </p>
                    <h5 className="fw-bold pt-md-3">
                      Support customer service
                    </h5>
                    <p className="font-secondary pt-md-5 pt-3 pb-3 mb-md-5">
                      Enhance your customer service by responding to client inquiries 24/7 in under 6 seconds.
                    </p>
                    <div className="image-container w-25">
                      <Image
                        src="/Iris-customer-support.svg"
                        layout="fill"
                        className="image w-25"
                        alt= "Iris, icon of custmer support"/>
                    </div>
                  </div>
                </div>
              <div className="col-md-4 col-12 pt-3 pt-1">
                <div className="box-bg p-4">
                  <p className="color-red pt-md-3">
                    BV
                  </p>
                  <h5 className="fw-bold pt-md-3">
                    Voice of your brand
                  </h5>
                  <p className="font-secondary pt-md-5 pt-3 pb-3 mb-md-5">
                    Design Iris to reflects your brand’s voice and communicates its values to your clients.
                  </p>
                  <div className="image-container w-25">
                      <Image
                        src="/Iris-brand-voice.svg"
                        layout="fill"
                        className="image w-25"
                        alt= "Iris voice of your brand icon"/>
                    </div>
                </div>
                </div>
              <div className="col-md-4 col-12 pt-3 pt-md-3">
                  <div className="box-bg p-4">
                    <p className="color-red pt-md-3">
                      IC
                    </p>
                    <h5 className=" fw-bold pt-md-3">
                      Support internal communication
                    </h5>
                    <p className="font-secondary pt-md-5 pt-3 pb-3 mb-md-5">
                      Use Iris to strengthen internal communication within your company and streamline workflow.
                    </p>
                    <div className="image-container w-25">
                      <Image
                        src="/Iris-internal-communication.svg"
                        layout="fill"
                        className="image w-25"
                        alt= "Iris internal communication icon"/>
                    </div>
                  </div>
                </div>
              <div className="col-md-4 col-12 pt-3 pt-1 mt-md-4">
                  <div className="box-bg p-4">
                    <p className="color-red pt-md-3">
                      AB
                    </p>
                    <h5 className="fw-bold pt-md-3">
                      API based
                    </h5>
                    <p className="font-secondary pt-md-5 pt-3 pb-3 mb-md-5">
                      Iris can be embedded into WhatsApp, social media platforms, websites, and various types of applications.
                    </p>
                    <div className="image-container w-25">
                      <Image
                        src="/Iris-API.svg"
                        layout="fill"
                        className="image w-25"
                        alt= "Iris API icon"/>
                    </div>
                  </div>
                </div>
              <div className="col-md-4 col-12 pt-3 pt-1 mt-md-4">
                  <div className="box-bg p-4">
                    <p className="color-red pt-md-3 ">
                      C
                    </p>
                    <h5 className="fw-bold pt-md-3">
                      Customizable
                    </h5>
                    <p className="font-secondary pt-md-5 pt-3 pb-3 mb-md-5">
                    Customize Iris to seamlessly integrate with your business operations and workflows.
                    </p>
                    <div className="image-container w-25">
                      <Image
                        src="/Iris-customizable.svg"
                        layout="fill"
                        className="image w-25"
                        alt= "Iris customizable icon"/>
                    </div>
                  </div>
                </div>
          </div>
          <div className="row project-row justify-content-around pb-md-4 px-md-5 mt-6x pt-12x">
              <div className="col-12 pt-1 px-md-0 mb-4">
                <motion.h4 className="fw-bolded text-md-center me-md-5"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                      What makes Iris different?
                  </motion.h4>
              </div>
              <div className="col-md-4 col-12 pt-3">
                    <p className="color-red pt-md-3 text-md-end border-sm-bottom-dark">
                      CU
                    </p>
                </div>
                <div className="col-md-6 col-12 pt-md-3 pt-1">
                    <h5 className="fw-bold pt-md-3">
                    Customizable/قابلة للتعريف
                    </h5>
                    <p className="">
                      We customize Iris to speak your company’s voice, tell its message, and communicate its values and mission.
                    </p>
                </div>
              <div className="col-md-4 col-12 pt-3 pt-1">
                    <p className="color-red pt-3 text-md-end border-sm-bottom-dark">
                      SE
                    </p>
                </div>
                <div className="col-md-6 col-12 pt-md-3">
                    <h5 className="fw-bold pt-md-3">
                    Secure/حصينة
                    </h5>
                    <p className=" ">
                    All communication between Iris and clients are fully encrypted.
                    </p>
                </div>
              <div className="col-md-4 col-12 pt-3 pt-1">
                    <p className="color-red pt-3 text-md-end border-sm-bottom-dark">
                      IM
                    </p>
                </div>
                <div className="col-md-6 col-12 pt-md-3">
                    <h5 className="fw-bold pt-md-3">
                      Focused on Iraqi market/التركيز على السوق العراقي
                    </h5>
                    <p className=" ">
                      Initially focused on the Iraqi market, Iris also has the potential to expand across the MENA region.
                    </p>
                </div>
              <div className="col-md-4 col-12 pt-3 pt-1">
                    <p className="color-red pt-3 text-md-end border-sm-bottom-dark">
                      IQ
                    </p>
                </div>
                <div className="col-md-6 col-12 pt-md-3">
                    <h5 className="fw-bold pt-md-3">
                      Speaks Iraqi dialect/تتكلم عراقي
                    </h5>
                    <p className=" ">
                      Fluent in the Iraqi dialect—because real connection starts with speaking your audience’s language.
                    </p>
                </div>
              <div className="col-md-4 col-12 pt-3">
                    <p className="color-red pt-3 text-md-end border-sm-bottom-dark">
                      /
                    </p>
                </div>
                <div className="col-md-6 col-12 pt-md-3">
                    <h5 className="fw-bold pt-md-3">
                     24/7
                    </h5>
                    <p className=" ">
                      Iris is designed to answer any question at any time
                    </p>
                </div>
            </div>
          <div className="row project-row justify-content-md-around pb-md-4 px-md-5 mt-6x pt-12x">
              <div className="col-md-5 col-11 pt-1  mb-4">
                <motion.h4 className="fw-bolded text-md-start me-md-5"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                     How to get a license
                  </motion.h4>
              </div>
              <div className="col-md-6 col-11 pt-1">
                <ul className="license-list ps-0 list-style-none">
                  <li className="pt-3">
                    <h5>
                      1/Assign
                    </h5>
                    <p className="font-small">
                      We assign a license for your company
                    </p>
                  </li>
                  <li className="pt-3">
                    <h5>
                      2/Guidelines
                    </h5>
                    <p className="font-small">
                      We use your Corporate Identity and Business Operation to write the operation guidelines of Iris.
                    </p>
                  </li>
                  <li className="pt-3">
                    <h5>
                      3/Program
                    </h5>
                    <p className="font-small">
                      Program Iris to understand your message, tone of voice, mission, target market, and operation.
                    </p>
                  </li>
                  <li className="pt-3">
                    <h5>
                      4/Train
                    </h5>
                    <p className="font-small">
                      Train Iris to be the the verbal communication between your company and clients.
                    </p>
                  </li>
                  <li className="pt-3">
                    <h5>
                      5/Publish
                    </h5>
                    <p className="font-small">
                      We publish Iris to be the voice of your business.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row justify-content-md-end px-md-5 mt-4x pb-12x mb-10x">
              <div className="col-md-6 pt-5 pt-md-0">
                <h4 className="title fw-bolder">
                  Contact us for a license
                </h4>
                <ul className="list-style-none ps-0 mb-0 mt-md-2 color-d">
                      <li className="item pt-3">
                            <Link href="tel:+9647809000956" className="color-dark text-decoration-none">
                                    Cell: +964 780 900 0956
                            </Link>
                      </li>
                      <li className="item pt-1">
                            <Link href="mailto:ideas@potoo.studio" className="color-dark text-decoration-none">
                                    Email: ideas@potoo.studio
                            </Link>
                      </li>
                      <li className="item pt-md-5 pt-4">
                            <Link href="https://wa.me/009647809000956" className="color-dark">
                                    Talk to Iris
                            </Link>
                      </li>
                  </ul>
              </div>
            </div>
          </div>
    </>
  )
}


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
      
      <div className="container-fluid gradient pt-8x">
      <div className="row project-row justify-content-start pt-0 pb-0 px-md-5 mt-6x">
            <motion.div className="col-md-2 col-10 ps-0 mt-0 pt-5 pt-md-0"
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
          <motion.div className="row project-row justify-content-between pb-md-5 pt-0 pb-5 pb-md-0 px-md-5"
          whileInView= {{y: 0}}
          viewport={{ once: true }}
          transition={{
          y: { duration: 0.8, repeat: 0, delay: 0.2, ease: "easeOut"},
          }}
          initial={{y: "25px"}}>
            <div className="col-md-4 col-10">
               <h5 className="project-title pt-2 color-white">
                   AI empowers people and businesses.
                </h5>
                <p className="pt-3 color-white pt-5">
                    AI designed to empower individuals and businesses through information and practical tools. Build for the Iraqi market.
                </p>
            </div>
            <div className="col-md-4 col-11 pt-5">
                <motion.ul
                className="list-style-none ps-0 color-white font-secondary mb-0"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.25}}>
                  <span className=" text-uppercase color-bit-off-white">runs on</span>
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
            <div className="col-md-8 col-10 pt-6x mt-0">
               <p className="project-title color-white mb-0 font-secondary pt-5 pt-md-0">
                   Designed by our Design Dept.
                </p>
               <p className="project-title color-white font-secondary pt-1">
                   Developed by our Development Dept.
                </p>
            </div>
          </motion.div>
      </div>
      <div className="container-fluid">
          <div className="row project-row justify-content-md-between pb-md-5 pt-10x pt-lg-8rem mt-5 mt-md-5 pb-3 pb-md-0 px-md-5 px-0">
            <div className="col-12">
                <motion.h6 className="pt-md-5 pt-2 text-center text-uppercase letter-space-2px"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.25}}>
                    Designed to support
                </motion.h6>
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
             <motion.h2 className="text-md-start text-center"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    What does Iris do?
                </motion.h2>
            </div>
          </div>
          <div className="row project-row justify-content-md-between justify-content-start pb-md-4 pb-4 mt-md-2 mt-4 px-md-5 px-3 top-md-line pt-4">
            <div className="col-md-4 col-12 pt-md-1 pt-3 px-0">
             <motion.h1 className="fw-bolder mb-1 text-bg-gradient"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    Multilingual Support
                </motion.h1>
                <motion.h6 className=" line-height-extra pt-md-4 pt-2"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                     Iris can respond to text and voice inquiries in both English and Arabic, including the Iraqi dialect, facilitating effective communication with a diverse clientele.
                </motion.h6>
            </div>
              <div className="col-md-6 col-12 pt-md-1 pt-2 px-0">
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
          <div className="row project-row justify-content-md-between justify-content-start pb-md-4 pb-4 mt-5 mt-md-2 px-md-5 px-3 top-md-line pt-4">
            <div className="col-md-4 col-12 pt-md-1 pt-5 px-0">
             <motion.h1 className="fw-bolder mb-1 text-bg-gradient"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    Image and File Analysis
                </motion.h1>
                <motion.h6 className="line-height-extra pt-md-4 pt-2"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    Iris can process and analyze images and documents uploaded by users, providing relevant information or assistance based on the content.
                </motion.h6>
            </div>
              <div className="col-md-6 col-12 pt-md-1 pt-2 px-0">
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
          <div className="row project-row justify-content-md-between justify-content-start pb-md-4 mt-5 pb-4 mt-md-2 px-md-5 px-3 top-md-line pt-4">
              <div className="col-md-4 col-12 pt-md-1 pt-5 px-0">
              <motion.h1 className="fw-bolder mb-1 text-bg-gradient"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                      Answer voice notes
                  </motion.h1>
                  <motion.h6 className="line-height-extra pt-md-4 pt-3"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                      Iris is capable of understanding and responding to voice messages, accommodating users who prefer audio communication.
                  </motion.h6>
              </div>
              <div className="col-md-6 col-12 pt-md-1 pt-3 px-0">
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
          <div className="row project-row justify-content-md-between justify-content-start pb-md-4 mt-5 pb-4 mt-md-2 px-md-5 px-3 top-md-line pt-4 bottom-md-line">
              <div className="col-md-4 col-12 pt-md-1 pt-5 px-0">
              <motion.h1 className="fw-bolder mb-1 text-bg-gradient"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                      Appointment Scheduling
                  </motion.h1>
                  <motion.h6 className="mb-1 line-height-extra pt-md-4 pt-3"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                      Iris can access your calendar to schedule meetings, ensuring efficient time management and coordination.
                  </motion.h6>
              </div>
              <div className="col-md-6 col-12 pt-md-1 pt-3 px-0">
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
              <div className="col-md-4 col-12 pt-3 pt-1 mt-md-0 mt-3">
                  <div className="box-bg p-4">
                    <h1 className="fw-bold pt-md-3 color-white ">
                      Multilingual Chatbot
                    </h1>
                    <p className="color-white  pt-12x font-normal-rm mt-5 mt-md-0">
                    Iris can respond to text and voice inquiries in both English and Arabic, including the Iraqi dialect, facilitating proper communication with diverse clients.
                    </p>
                  </div>
                </div>
              <div className="col-md-4 col-12 pt-3 pt-1 mt-md-0 mt-3">
                  <div className="box-bg p-4">
                    <h1 className="fw-bold pt-md-3 color-white">
                      Customer Service Support
                    </h1>
                    <p className="color-white  pt-12x font-normal-rm mt-5 mt-md-0">
                      Iris delivers instant, 24/7 customer support in multiple languages, including English and Iraqi Arabic. It ensures fast, consistent responses to client inquiries.
                    </p>
                  </div>
                </div>
              <div className="col-md-4 col-12 pt-3 pt-1 mt-md-0 mt-3">
                  <div className="box-bg p-4">
                    <h1 className="fw-bold pt-md-3 color-white">
                      Customized Services
                    </h1>
                    <p className="color-white  pt-12x font-normal-rm mt-5 mt-md-0">
                    Customize Iris to seamlessly align with your business operations and workflows. It can schedule meetings, collect and process files to boost efficiency.
                    </p>
                  </div>
                </div>
          </div>
          <div className="row project-row justify-content-start pb-md-4 px-md-5 mt-6x pt-12x">
              <div className="col-12 pt-1 px-md-0 mb-5">
                <motion.h4 className="fw-bolded me-md-5"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                      What makes Iris different?
                  </motion.h4>
              </div>
              <div className="col-md-3 col-12 pt-0">
                    <h4 className="pt-md-1 pt-0 after-line-sm">
                      CU
                    </h4>
                </div>
                <div className="col-md-7 col-12 pt-3 pt-md-0 pb-4 pb-md-0">
                    <h2 className="fw-bold pt-md-0 text-bg-gradient">
                    Customizable/قابلة للتعريف
                    </h2>
                    <p className="font-normal-rm pt-md-0 pt-1">
                    We customize Iris to understand your company’s workflows and users, training it to seamlessly become a part of your operation.
                    </p>
                </div>
                <div className="col-md-3 col-12 pt-5 mt-5 mt-md-0">
                    <h4 className="pt-md-1 pt-0 after-line-sm">
                      A
                    </h4>
                </div>
                <div className="col-md-7 col-12 mt-md-5 mt-0">
                    <h2 className="fw-bold pt-md-0 pt-3 text-bg-gradient">
                    Affordable/سعر مناسب
                    </h2>
                    <ul className="ps-3 font-normal-rm pt-md-0 pt-1">
                      <li className="item">
                       Iris is entirely developed and hosted by our team, so there are no third-party fees per message or token.
                      </li>
                      <li className="item pt-2">
                        We offer transparent pricing with no hidden fees.
                      </li>
                      <li className="item pt-2">
                        You don’t need multiple tools, everything from voice replies and meeting scheduling to file analysis, and chatbot  is included in one solution.
                      </li>
                    </ul>
                </div>
              <div className="col-md-3 col-12 pt-5 mt-5 mt-md-0">
                    <h4 className="pt-0 pt-md-1 after-line-sm">
                      SE
                    </h4>
                </div>
                <div className="col-md-7 col-12 mt-md-5 mt-0">
                    <h2 className="fw-bold pt-md-0 pt-3 text-bg-gradient">
                      Secure/حصينة
                    </h2>
                    <p className="font-normal-rm pt-md-0 pt-1">
                    Iris is developed by our Development Dept., hosted securely on our servers, and operates independently from other AI systems to guarantee fully encrypted communication between the AI and clients.
                    </p>
                </div>
              <div className="col-md-3 col-12 pt-5 mt-5 mt-md-0">
                    <h4 className="pt-0 pt-md-1 after-line-sm">
                    IQ
                    </h4>
                </div>
                <div className="col-md-7 col-12 mt-md-5 mt-0">
                    <h2 className="fw-bold pt-md-0 pt-3 text-bg-gradient">
                      Focused on Iraqi market/التركيز على السوق العراقي
                    </h2>
                    <p className="font-normal-rm pt-md-0 pt-1">
                    Iris is uniquely built for the Iraqi market, providing accurate bilingual support and cultural relevance to help businesses connect effectively with local customers.
                    </p>
                </div>
              <div className="col-md-3 col-12 pt-5 mt-5 mt-md-0">
                    <h4 className="pt-0 pt-md-1 after-line-sm">
                      S
                    </h4>
                </div>
                <div className="col-md-7 col-12 pt-md-5">
                    <h2 className="pt-md-0 pt-3 text-bg-gradient fw-bold">
                      Scalable/قابلة للتوسع
                    </h2>
                    <p className="font-normal-rm pt-md-0 pt-1">
                      Iris is built to scale alongside your business growth. As your operations expand, Iris can handle increased workloads, support more users, and integrate with additional platforms.
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
            <div className="row justify-content-md-end px-md-5 mt-4x pb-2x ">
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
                  </ul>
              </div>
            </div>
            <div className="row justify-content-center pt-4x">
              <div className="col-md-12 gradient">
                <Link href="https://wa.me/009647809000956" className="text-decoration-none">
                  <h4 className="color-white fw-bolder pt-12x pb-12x text-center letter-space-2px text-uppercase text-stlye-none">
                    Talk to Iris
                  </h4>
                </Link>
              </div>
            </div>
          </div>
    </>
  )
}


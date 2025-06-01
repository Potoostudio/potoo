import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { motion} from "framer-motion"
import Link from "next/link"

export default function AI(){

          return (
            <>
              <Head>
                <title>AI-Powered Solutions</title>
                <link rel="icon" href="favicon.png" />
                <link rel="manifest" href="/manifest.json"/>
                <meta name="description" content="AI company in Baghdad"/>
                <meta name="keywords" content="AI company in Iraq, AI company in Baghdad, AI company in Baghdad, AI company in Iraq, AI agency in Baghdad, AI company in Baghdad, AI company in Baghdad, AIy company in Iraq, AI company in Baghdad, AI company in Iraq, AI solutions in Baghdad, AI solutions in Iraq"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
              </Head>
              <div className="container-fluid pt-5 pt-md-0 bg-white">
                  <motion.div
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{ duration: 0.7, delay: 0.5}}
                    className="row pt-md-0 mt-5 py-md-0 px-4 px-md-5 pb-5 pb-md-0 justify-content-between">
                      <div className="col-12 col-md-8 px-0 py-md-5 mt-md-5 mt-0 color-dark">
                             <Image
                                src="/AI-icon.svg"
                                width="75"
                                height="75"
                                className="image"
                                alt="AI-Powered Applications Icon"
                                loading="lazy"
                                />
                          <h3 className=" text-left font-large pt-5 mt-4 fw-500 line-height-normal">
                            AI-Powered Solutions
                          </h3>
                          <p className="info line-height-extra pt-md-4 pt-4">
                            We’re best at solving complex problems. We believe the most effective way to support our clients is by deeply understanding their challenges and designing AI-powered applications tailored to their needs. Each solution is custom-built to deliver value, efficiency, and unlock new opportunities.
                          </p>
                          <p className="info line-height-normal pt-4 fst-italic">
                            We utilize AI throughout every phase of our projects, from research and strategy to design and implementation.
                          </p>
                      </div>
                      <div className="col-md-3 col-12 pt-12x mt-0 mt-md-5">
                          <p className="text-uppercase font-secondary bottom-line pb-md-1 mb-md-2">
                            OUR AI language model
                          </p>
                          <Link href="/iris" className="project-li-link text-decoration-none">
                            <Image
                                src="/Iris-logo-red.svg"
                                width="57"
                                height="22"
                                className="image"
                                alt="Iris Logo red"
                                loading="lazy"
                                />
                          </Link>
                      </div>
                  </motion.div>
                  <motion.div
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{ duration: 0.7, delay: 0.5}}
                    className="row mt-10x pt-8x pb-8x px-3 px-md-5 justify-content-between bg-AI-gradient">
                      <div className="col-md-5">
                        <h3 className="color-white">
                          Tasks we can help you with using AI
                        </h3>
                      </div>
                      <div className="col-md-6 col-12 pb-5 pb-md-0">
                        <ul className="list color-white list-style-none ms-0 ps-0 pt-4 pt-md-0">
                          <li className="item font-normal-rm">
                            <span className="me-5">01/</span> Automate Repetitive Tasks
                          </li>
                          <li className="item font-normal-rm pt-2">
                            <span className="me-5">02/</span> Improve Decision-Making
                          </li>
                          <li className="item font-normal-rm pt-2">
                            <span className="me-5">03/</span> Enhance Customer Experience
                          </li>
                          <li className="item font-normal-rm pt-2">
                            <span className="me-5">04/</span> Boost Efficiency
                          </li>
                          <li className="item font-normal-rm pt-2">
                            <span className="me-5">05/</span> Strengthen Brand Voice
                          </li>
                        </ul>
                      </div>
                  </motion.div>
                  <div className="row project-row justify-content-around pb-md-5 mt-3 mt-md-2 pb-2 pb-md-0 px-md-5 px-0 pt-6rem pt-lg-12rem">
            <div className="col-12 pt-5 pt-md-3 mt-5 mt-md-0">
             <motion.h4 className=""
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    AI can help you
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
              </div>
            </>
          );
      }

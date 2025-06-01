import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { motion} from "framer-motion"
import Link from "next/link"

export default function Development(){

          return (
            <>
              <Head>
                <title>A development company in Baghdad</title>
                <link rel="icon" href="favicon.png" />
                <link rel="manifest" href="/manifest.json"/>
                <meta name="description" content="A development agency in Baghdad"/>
                <meta name="keywords" content="A development agency in Baghdad, custom application development agency in Baghdad, web development agency in iraq, web development agency in iraq, top web development agency in iraq, top web development agency in iraq, branding in baghdad, custom applications development in Iraq, custom applications development in Baghdad, AI-powered applications in Baghdad, AI-powered applications in Iraq, AI company in Iraq, AI company in Baghdad"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
              </Head>
              <div className="container-fluid pt-5 bg-white">
                  <div className="row pt-md-5 mt-5 py-md-5 px-4 px-md-5 pb-0">
                      <div className="col-12 col-md-9 px-0 mt-5 color-dark">
                          <motion.h5
                          initial={{opacity: 0, y: 30}}
                          animate={{opacity: 1, y: 0}}
                          transition={{ duration: 0.7, delay: 0.5}}
                          className=" text-left font-medium font-weight-normal line-height-normal">
                             Our Development Dept. focuses on:
                          </motion.h5>
                      </div>
                  </div>
                  <motion.div className="row justify-content-start pt-5 pb-5 mx-1 px-md-3"
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{ duration: 0.7, delay: 0.55}}>
                        
                        <motion.div
                        whileHover={{
                            boxShadow: "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
                            transition: { duration: 0.4 },
                          }}
                            className="col-md-3 col-12 p-md-4 p-3 border m-md-3 mt-md-0">
                            <Link href="/dept/cybersecurity" className="project-li-link text-decoration-none">
                                <motion.div
                                    whileHover={{
                                    opacity: 0.85,
                                    transition: { duration: 0.3, ease: "easeIn" },
                                        }}
                                    className="image-container w-25 pt-8x">
                                    <Image
                                        src="/cybersecurity-icon.svg"
                                        layout="fill"
                                        className="image"
                                        alt="Cyber Security Icon"
                                        loading="lazy"
                                        />
                                </motion.div>
                                <h5 className="title text-decoration-none color-dark pt-3">
                                 Cyber Security Solutions
                                </h5>
                            </Link>
                            </motion.div>
                        <motion.div
                        whileHover={{
                            boxShadow: "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
                            transition: { duration: 0.4 },
                          }}
                            className="col-md-3 col-12 p-md-4 p-3 border m-md-3 mt-3 mt-md-0 ">
                            <Link href="/dept/AI" className="project-li-link text-decoration-none">
                                <motion.div
                                    whileHover={{
                                    opacity: 0.85,
                                    transition: { duration: 0.3, ease: "easeIn" },
                                        }}
                                    className="image-container w-25 pt-8x">
                                    <Image
                                        src="/AI-icon.svg"
                                        layout="fill"
                                        className="image"
                                        alt="AI-Powered Applications Icon"
                                        loading="lazy"
                                        />
                                </motion.div>
                                <h5 className="title text-decoration-none color-dark pt-3">
                                 AI-Powered Applications
                                </h5>
                            </Link>
                            </motion.div>
                        <motion.div
                        whileHover={{
                            boxShadow: "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
                            transition: { duration: 0.4 },
                          }}
                            className="col-md-3 col-12 p-md-4 p-3 border m-md-3 mt-3 mt-md-0">
                            <Link href="/dept/custom-apps" className="project-li-link text-decoration-none">
                                <motion.div
                                    whileHover={{
                                    opacity: 0.85,
                                    transition: { duration: 0.3, ease: "easeIn" },
                                        }}
                                    className="image-container w-25 pt-8x">
                                    <Image
                                        src="/Custom-app-icon.svg"
                                        layout="fill"
                                        className="image"
                                        alt="Custom Application icon"
                                        loading="lazy"
                                        />
                                </motion.div>
                                <h5 className="title text-decoration-none color-dark pt-3">
                                 Custom Applications
                                </h5>
                            </Link>
                            </motion.div>
                  </motion.div>
              </div>
            </>
          );
      }

import React, {Component} from 'react';
import Head from 'next/head'
import { motion} from "framer-motion"
import Link from 'next/link'
import Image from 'next/image'

export default function Studio() {

          return (
            <>
              <Head>
                <title>A creative agency based in Baghdad and Denver</title>
                <link rel="icon" href="favicon.png" />
                <link rel="manifest" href="/manifest.json"/>
                <meta name="description" content="A branding agency in denver and baghdad"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="branding agency in Denver, branding agency in Baghdad, creative agency in Baghdad, creative agency in Denver, marketing agency in baghdad, best marketing agency in baghdad, top marketing agency in baghdad"/>
              </Head>

              <div className="container-fluid pt-5 bg-darker pb-5">
                  <div className="row pt-md-5 mt-5 py-md-5 px-4 px-md-5 pb-5 pb-md-0">
                      <div className="col-12 col-md-7 px-0 mt-5 color-white">
                          <motion.p
                          initial={{opacity: 0, y: 30}}
                          animate={{opacity: 1, y: 0}}
                          transition={{ duration: 0.7, delay: 0.5}}
                          className=" text-left font-weight-normal line-height-extra pb-5 mb-5 font-normal-rm">
                             We are a creative studio, committed to creating meaningful
                            solutions built around the fundamentals of design and technology.
                          </motion.p>
                      </div>
                      <div className="col-12 col-md-7 px-0 color-white">
                          <motion.p
                          initial={{opacity: 0, y: 30}}
                          animate={{opacity: 1, y: 0}}
                          transition={{ duration: 0.7, delay: 0.5}}
                          className=" text-left font-weight-normal line-height-extra pb-5 mb-5 font-normal-rm">
                             We are on a mission to use design and technology in their best form to tell stories, highlight the insufficient, celebrate the extraordinary, document history, honor the difference, and fulfill our purpose in life.
                          </motion.p>
                      </div>
                  </div>
                  <div className="row justify-content-between pb-0 mx-md-4 pt-md-4 mt-5 pb-5 mb-5">
                    <div className="col-12 col-md-4 text-left mt-0">
                        <h5 className="color-white">
                            Contact
                        </h5>
                            <ul className="list-style-none ps-0 mb-0 mt-md-2">
                            <li className="item pt-2">
                                    <Link href="https://wa.me/009647809000956" className="say-hello-a color-db text-decoration-none">
                                            WhatsApp: +964 780 900 0956
                                    </Link>
                            </li>
                            <li className="item pt-2">
                                    <Link href="tel:+13202604416" className="say-hello-a color-db text-decoration-none">
                                            Cell: +1 320 260 4416
                                    </Link>
                            </li>
                            <li className="item pt-2">
                                    <Link href="mailto:ideas@potoo.studio" className="say-hello-a color-db text-decoration-none">
                                            Email: ideas@potoo.studio
                                    </Link>
                            </li>
                        </ul> 
                    </div>
                </div>
              </div>
            </>
          );
      }


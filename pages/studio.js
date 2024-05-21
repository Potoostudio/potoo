import React from "react"
import Head from 'next/head'
import Image from 'next/image'
import { motion} from "framer-motion"
import Link from 'next/link'

class Studio extends React.Component {
    // state = {
    //     showBox: false,
    //     showItem: false
    //   };
    // handleBoxToggle = () => this.setState({ showBox: !this.state.showBox })
    // handleBoxToggleNaming = () => this.setState({ showItem: !this.state.showItem })
    // handleBoxToggleIdentity = () => this.setState({ showIdentity: !this.state.showIdentity })
    // handleBoxToggleDesign = () => this.setState({ showDesign: !this.state.showDesign })
    // handleBoxToggleWeb = () => this.setState({ showWeb: !this.state.showWeb })

      render() {

          return (
            <>
              <Head>
                <title>POTOO | Branding Agency Denver</title>
                <link rel="icon" href="favicon.png" />
                <link rel="manifest" href="/manifest.json"/>
                <meta name="description" content="POTOO | A Branding Agency in Denver"/>
                <meta property="og:title" content="POTOO | Branding Agency Denver" />
                <meta property="og:description" content="POTOO STUDIO | A Branding Agency in Denver"/>
                <meta property="og:url" content="https://potoo.studio/studio" />
                <meta property="og:type" content="website" />
              </Head>
      
      
              <div className="container-fluid pt-5 bg-white">
                  <div className="row pt-md-5 mt-5 py-md-5 px-4 px-md-5 pb-5 pb-md-0">
                      <div className="col-12 col-md-9 px-0 py-md-5 mt-5 color-dark">
                          <motion.h2
                          initial={{opacity: 0, y: 30}}
                          animate={{opacity: 1, y: 0}}
                          transition={{ duration: 0.7, delay: 0.5}}
                          className=" text-left font-medium font-weight-normal line-height-normal">
                            We are a branding agency based in Denver. We help clients
                            creating the verbal and visual communication of their brands.
                          </motion.h2>
                      </div>
                  </div>
                  <motion.div className="row justify-content-md-end border-top pt-5 pb-5 px-4 px-md-5"
                  initial={{opacity: 0, y: 30}}
                  animate={{opacity: 1, y: 0}}
                  transition={{ duration: 0.7, delay: 0.55}}>
                      <div className="col-12 col-md-6 text-left px-0 pt-md-0 pr-md-5">
                          <p className="color-dark pr-md-5">In a rapid world, we exist to create meaningful designs built around the fundamentals to help shape a brilliant future.</p>
                      </div>
                  </motion.div>
                  
                  <motion.div className="row justify-content-md-between border-top  pt-5 pb-5 px-4 px-md-5"
                  initial={{opacity: 0, y: 30}}
                  animate={{opacity: 1, y: 0}}
                  transition={{ duration: 0.7, delay: 0.55}}>
                      <div className="col-12 col-md-4 text-left px-0 pr-md-5">
                          <h1 className="color-dark pr-md-5">Process</h1>
                      </div>
                      <div className="col-12 col-md-6 text-left px-0 pr-md-5">
                          <p className="color-dark pr-md-5">Our process is focused on uncovering the fundamentals and letting them be the foundation of the design process. Our objective is to make work designed to outlast today’s trends and stand relevant in the future. The process is transparent, collaborative, and creative.</p>
                      </div>
                  </motion.div>
                  <motion.div
                  initial={{opacity: 0, y: 30}}
                  animate={{opacity: 1, y: 0}}
                  transition={{ duration: 0.7, delay: 0.55}}
                  className="row justify-content-md-between pt-md-5 mt-md-5 pb-5 color-dark px-4 px-md-5">
                      <div className="col-12 col-md-4 px-0">
                          <h3 className="text-md-left">
                              1
                          </h3>
                      </div>
                      <div className="col-12 col-md-6 px-0">
                          <h3 className="luxury-title">
                            Insight
                          </h3>
                          <p className="pt-0">
                            Gather all the insights to shape the fundamentals.
                          </p>
                      </div>
                      <div className="col-12 col-md-4 px-0 pt-5">
                          <h3 className="text-md-left">
                              2
                          </h3>
                      </div>
                      <div className="col-12 col-md-6 px-0 pt-md-5">
                          <h3 className="luxury-title">
                            Strategy
                          </h3>
                          <p className="pt-0">
                            Translating fundamentals into design strategy.
                          </p>
                      </div>
                      <div className="col-12 col-md-4 px-0 pt-5">
                          <h3 className="text-md-left">
                              3
                          </h3>
                      </div>
                      <div className="col-12 col-md-6 px-0 pt-md-5">
                          <h3 className="luxury-title">
                            Design
                          </h3>
                          <p className="pt-">
                            Employing the strategy to design the brand personality.
                          </p>
                      </div>
                      <div className="col-12 col-md-4 px-0 pt-5">
                          <h3 className="text-md-left">
                              4
                          </h3>
                      </div>
                      <div className="col-12 col-md-6 px-0 pt-md-5">
                          <h3 className="luxury-title">
                            Implementation
                          </h3>
                          <p className="pt-0">
                            Bring design to life through print and screen.
                          </p>
                      </div>
                  </motion.div>
                  <motion.div className="row justify-content-end border-top mt-6x pt-5 px-4 px-md-5 text-dark"
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{ duration: 0.7, delay: 0.55}}>
                    <div className="col-12 col-md-6 text-md-left px-0 pr-md-5">
                        <h1 className="color-dark pr-md-5">Services</h1>
                    </div>
                    <div className="col-12 col-md-3 px-0 pt-md-0 pt-5">
                        <Image
                        src="/Strategy-Icon.svg"
                        width= "39"
                        height= "9"
                        className="image"
                        alt="Strategy Icon"
                        loading="lazy"
                        />
                        <h3 className="luxury-title">
                            Strategy & Identity
                        </h3>
                    </div>
                    <div className="col-12 col-md-3 pt-md-0 pt-2 pl-0">
                        <ul className="list list-style-none pt-md-4 pt-0 pl-0">
                            <li>Brand Values</li>
                            <li>Brand Positioning</li>
                            <li>Audience Persona</li>
                            <li>Voice & Message</li>
                            <li>Brand Personality</li>
                            <li>Brand Guideline</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-3 px-0 pt-5 pt-md-0">
                        <Image
                        src="/Design-Icon.svg"
                        width= "42"
                        height= "5"
                        className="image"
                        alt="Strategy Icon"
                        loading="lazy"
                        />
                        <h3 className="luxury-title">
                            Design
                        </h3>
                    </div>
                    <div className="col-12 col-md-3 pt-md-0 pt-2 pl-0">
                        <ul className="list list-style-none pt-md-4 pt-0 pl-0">
                            <li>Visuals</li>
                            <li>Stationary</li>
                            <li>Logo</li>
                            <li>Signs</li>
                            <li>Products</li>
                        </ul>
                    </div>
                  </motion.div>
                  <motion.div
                  initial={{opacity: 0, y: 30}}
                  animate={{opacity: 1, y: 0}}
                  transition={{ duration: 0.7, delay: 0.55}}
                  className="row justify-content-end color-dark px-4 px-md-5 pb-5 ">
                    <div className="col-12 col-md-3 px-0 pt-5 pt-md-0">
                            <Image
                            src="/Web-Icon.svg"
                            width= "34"
                            height= "5"
                            className="image"
                            alt="Strategy Icon"
                            loading="lazy"
                            />
                            <h3 className="luxury-title">
                                Web
                            </h3>
                        </div>
                        <div className="col-12 col-md-3 pt-md-0 pt-2 pl-0">
                            <ul className="list list-style-none pt-md-4 pt-0 pl-0">
                                <li>Responsive Development</li>
                                <li>Copywriting</li>
                            </ul>
                        </div>
                  </motion.div>
                  <motion.div className="row justify-content-between border-top mt-6x pt-5 pb-5 px-4 px-md-5 text-dark"
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{ duration: 0.7, delay: 0.55}}>
                        <div className="col-12 col-md-4 text-left px-0 pr-md-5">
                            <h1 className="color-dark pr-md-5">Fundamentals</h1>
                        </div>
                        <div className="col-12 col-md-6 text-left px-0 pr-md-5">
                          <p className="color-dark pr-md-5">Our work is built around truly understanding the fundamentals to present people’s ideas and values. We are responsible for creating meaningful designs to help shape a bright future.</p>
                      </div>
                    </motion.div>
                  <motion.div className="row justify-content-between border-top mt-6x pt-5 px-4 px-md-5 text-dark"
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{ duration: 0.7, delay: 0.55}}>
                        <div className="col-12 col-md-4 text-left px-0 pr-md-5">
                            <h1 className="color-dark pr-md-5">Goal</h1>
                        </div>
                        <div className="col-12 col-md-6 text-left px-0 pr-md-5">
                          <p className="color-dark pr-md-5">Our goal is to focus on the fundamentals and let them shape a straightforward and creative design process.</p>
                          <p className="color-dark pr-md-5">Identify the problem? Could we improve rather than add? Could we simplify rather than complicate?</p>
                      </div>
                    </motion.div>
                  <motion.div className="row justify-content-between border-top mt-6x pt-5 pb-5 px-4 px-md-5 text-dark"
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{ duration: 0.7, delay: 0.55}}>
                        <div className="col-12 col-md-4 text-left px-0 pr-md-5">
                            <h1 className="color-dark pr-md-5">Collaboration</h1>
                        </div>
                        <div className="col-12 col-md-6 text-left px-0 pr-md-5">
                          <p className="color-dark pr-md-5">We are on a journey to create meaningful designs and relationships. This journey takes time and collaboration. We would love for you to be part of our journey. </p>
                          <p className="color-dark pr-md-5 pt-3">Work with us! <a className="text-dark text-decoration-underline" aria-label="email" href="mailto:ideas@potoo.studio?Subject=Work Collaboration">ideas@potoo.studio</a></p>
                          
                      </div>
                    </motion.div>
              </div>
            </>
          );
      }
  }

export default Studio;


import React, {Component} from 'react';
import Head from 'next/head'
import { motion} from "framer-motion"
import Projects from "../comps/project"
import Services from "../comps/services"

export default function Studio() {
    // state = {
    //     showBox: false,
    //     showItem: false
    //   };
    // handleBoxToggle = () => this.setState({ showBox: !this.state.showBox })
    // handleBoxToggleNaming = () => this.setState({ showItem: !this.state.showItem })
    // handleBoxToggleIdentity = () => this.setState({ showIdentity: !this.state.showIdentity })
    // handleBoxToggleDesign = () => this.setState({ showDesign: !this.state.showDesign })
    // handleBoxToggleWeb = () => this.setState({ showWeb: !this.state.showWeb })


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

              <div className="container-fluid pt-5 bg-white">
                  <div className="row pt-md-5 mt-5 py-md-5 px-4 px-md-5 pb-5 pb-md-0">
                      <div className="col-12 col-md-9 px-0 py-md-5 mt-5 color-dark">
                          <motion.h2
                          initial={{opacity: 0, y: 30}}
                          animate={{opacity: 1, y: 0}}
                          transition={{ duration: 0.7, delay: 0.5}}
                          className=" text-left font-medium font-weight-normal line-height-normal pb-5 mb-5">
                            We are a creative agency with offices in Baghdad and Denver,
                            focused on offering fine solutions through design and technology.
                          </motion.h2>
                      </div>
                  </div>
                  <motion.div className="row justify-content-md-end border-top pt-5 pb-5  px-4 px-md-5"
                    initial={{opacity: 0, y: 0}}
                    whileInView={{opacity: 1, y: -30}}
                    viewport={{ once: true }}
                    transition={{
                      y: { duration: 0.8, delay: 0.4},
                    }}>
                      <div className="col-12 col-md-6 text-left px-0 pt-md-5 pr-md-5 pb-md-5">
                          <p className="color-dark pr-md-5">In a rapid world, we exist to create meaningful solutions built around the fundamentals to help shape a brilliant future.</p>
                      </div>
                  </motion.div>
                  
                  <motion.div className="row justify-content-md-between border-top  pt-5 pb-5 px-4 px-md-5"
                    initial={{opacity: 0, y: 0}}
                    whileInView={{opacity: 1, y: -30}}
                    viewport={{ once: true }}
                    transition={{
                      y: { duration: 0.8, delay: 0.4},
                    }}>
                      <div className="col-12 col-md-4 text-left px-0 pr-md-5 pt-5">
                          <h4 className="color-dark pr-md-5">Process</h4>
                      </div>
                      <div className="col-12 col-md-6 text-left px-0 pr-md-5 pt-md-5">
                          <p className="color-dark pr-md-5">Our process is focused on uncovering the fundamentals and letting them be the foundation of the design process. Our objective is to make work designed to outlast today’s trends and stand relevant in the future. The process is transparent, collaborative, and creative.</p>
                      </div>
                  </motion.div>
                  <motion.div
                    initial={{opacity: 0, y: 0}}
                    whileInView={{opacity: 1, y: -30}}
                    viewport={{ once: true }}
                    transition={{
                      y: { duration: 0.8, delay: 0.4},
                    }}
                  className="row justify-content-md-between pt-md-5 mt-md-5 pb-5 color-dark px-4 px-md-5">
                      <div className="col-12 col-md-4 px-0">
                          <h5 className="text-md-left">
                              1
                          </h5>
                      </div>
                      <div className="col-12 col-md-6 px-0">
                          <h4 className="">
                            Insight
                          </h4>
                          <p className="pt-0">
                            Gather all the insights to shape the fundamentals.
                          </p>
                      </div>
                      <div className="col-12 col-md-4 px-0 pt-5">
                          <h5 className="text-md-left">
                              2
                          </h5>
                      </div>
                      <div className="col-12 col-md-6 px-0 pt-md-5">
                          <h4 className="">
                            Strategy
                          </h4>
                          <p className="pt-0">
                            Translating fundamentals into Solution-Oriented strategy.
                          </p>
                      </div>
                      <div className="col-12 col-md-4 px-0 pt-5">
                          <h5 className="text-md-left">
                              3
                          </h5>
                      </div>
                      <div className="col-12 col-md-6 px-0 pt-md-5">
                          <h4 className="">
                            Design/Develop
                          </h4>
                          <p className="pt-">
                            Design and develop solutions driven by the strategy.
                          </p>
                      </div>
                      <div className="col-12 col-md-4 px-0 pt-5">
                          <h5 className="text-md-left">
                              4
                          </h5>
                      </div>
                      <div className="col-12 col-md-6 px-0 pt-md-5">
                          <h4 className="">
                            Implementation
                          </h4>
                          <p className="pt-0">
                            Bring design and application to life.
                          </p>
                      </div>
                  </motion.div>
                  <Services/>
                  <motion.div className="row justify-content-between border-top mt-6x pt-5 pb-5 px-4 px-md-5 text-dark"
                    initial={{opacity: 0, y: 0}}
                    whileInView={{opacity: 1, y: -30}}
                    viewport={{ once: true }}
                    transition={{
                      y: { duration: 0.8, delay: 0.4},
                    }}>
                        <div className="col-12 col-md-4 text-left px-0 pr-md-5">
                            <h4 className="color-dark pr-md-5">Fundamentals</h4>
                        </div>
                        <div className="col-12 col-md-6 text-left px-0 pr-md-5">
                          <p className="color-dark pr-md-5">Our work is built around truly understanding the fundamentals to present people’s ideas and values. We are responsible for creating meaningful designs to help shape a bright future.</p>
                      </div>
                    </motion.div>
                  <motion.div className="row justify-content-between border-top mt-6x pt-5 px-4 px-md-5 text-dark"
                     initial={{opacity: 0, y: 0}}
                     whileInView={{opacity: 1, y: -30}}
                     viewport={{ once: true }}
                     transition={{
                       y: { duration: 0.8, delay: 0.4},
                     }}>
                        <div className="col-12 col-md-4 text-left px-0 pr-md-5">
                            <h4 className="color-dark pr-md-5">Goal</h4>
                        </div>
                        <div className="col-12 col-md-6 text-left px-0 pr-md-5">
                          <p className="color-dark pr-md-5">Our goal is to focus on the fundamentals and let them shape a straightforward and creative design process.</p>
                          <p className="color-dark pr-md-5">Identify the problem? Could we improve rather than add? Could we simplify rather than complicate?</p>
                      </div>
                    </motion.div>
                  <motion.div className="row justify-content-between border-top mt-6x pt-5 pb-5 px-4 px-md-5 text-dark"
                     initial={{opacity: 0, y: 0}}
                     whileInView={{opacity: 1, y: -30}}
                     viewport={{ once: true }}
                     transition={{
                       y: { duration: 0.8, delay: 0.4},
                     }}>
                        <div className="col-12 col-md-4 text-left px-0 pr-md-5">
                            <h4 className="color-dark pr-md-5">Collaboration</h4>
                        </div>
                        <div className="col-12 col-md-6 text-left px-0 pr-md-5">
                          <p className="color-dark pr-md-5">We are on a journey to create meaningful designs and relationships. This journey takes time and collaboration. We would love for you to be part of our journey. </p>
                          <p className="color-dark pr-md-5 pt-3">Work with us! <a className="text-dark text-decoration-underline" aria-label="email" href="mailto:ideas@potoo.studio?Subject=Work Collaboration">ideas@potoo.studio</a></p>
                      </div>
                    </motion.div>
              </div>
              <div className="container-fluid  pt-8x  pb-12x">
                  <Projects/>
              </div>
            </>
          );
      }


import React from "react"
import Head from 'next/head'
import Image from 'next/image'
import { motion} from "framer-motion"

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
                <title>POTOO STUDIO | Branding Studio</title>
                <link rel="icon" href="favicon.ico" />
                <link rel="manifest" href="/manifest.json"/>
                <meta name="description" content="POTOO STUDIO | A Branding Studio Based In Denver"/>
                <meta property="og:title" content="POTOO STUDIO | Studio" />
                <meta property="og:description" content="POTOO STUDIO | A Branding Studio Based In Denver"/>
                <meta property="og:url" content="https://potoo.studio/studio" />
                <meta property="og:type" content="website" />
              </Head>
      
      
              <div className="container-fluid pt-5 mt-5">
                  <div className="row pt-md-5 mt-5 py-md-5 px-4 px-md-5">
                      <div className="col-12 px-0 py-md-5 mt-5">
                          <motion.h1
                          initial={{letterSpacing: "30px"}}
                          animate={{letterSpacing: "1px"}}
                          transition={{ duration: 1, delay: 0.1}}
                          className="luxury-title text-center text-uppercase">
                              Studio
                          </motion.h1>
                      </div>
                  </div>
                  <motion.div className="row justify-content-between pt-4 px-4 pb-md-5 mt-5"
                  initial={{y: 0}}
                  animate={{y: -20}}
                  viewport={{ once: true }}
                  transition={{
                    y: { duration: 1, delay: 0.4},
                  }}>
                      <div className="col-12 text-center px-0 pt-md-0 pt-5 mt-md-0 mt-5">
                          <h6 className="color-secondary">With minimalist design as the core of our studio,</h6>
                      </div>
                      <div className="col-md-12 px-0 pb-5 mb-5 pt-2">
                          <h5 className="luxury-title text-center text-white">we specialize in</h5>
                          <ul className="list we-specialize-list">
                              <li className="item py-1 py-md-0 font-weight-bolder">
                                  Brand Strategy
                              </li>
                              <li className="item py-1 py-md-0 font-weight-bolder">
                                  Naming
                              </li>
                              <li className="item py-1 py-md-0 font-weight-bolder">
                                  Brand Identity
                              </li>
                              <li className="item py-1 py-md-0 font-weight-bolder">
                                  Design
                              </li>
                              <li className="item py-1 py-md-0 font-weight-bolder">
                                  Web Development
                              </li>
                          </ul>
                      </div>
                  </motion.div>
                  <motion.div
                   initial={{opacity: 0.6}}
                   whileHover={{opacity: 1}}
                   transition={{
                     opacity: { duration: 0.4},
                   }}
                  className="row justify-content-around pt-5 px-5 mt-5 cursor-pointer">
                  <div className="col-md-3 col-12 pt-md-0 pt-4 px-0">
                          <h2 className="text-white luxury-title p-md-5 p-4 border-sm-bottom mt-md-3 pr-md-0 border-md-right text-md-left text-center">Brand Strategy</h2>
                      </div>
                      <div className="col-md-7 col-12 text-left px-0">
                           <ul className="list what-we-do-list">
                               <li className={`item pt-4 pt-md-0`}>
                                    <Image
                                        src="/brand-strategy-1.svg"
                                        width={125}
                                        height={125}
                                        className="image"
                                        alt= "Brand Strategy"/>
                               </li>
                               <li className={`item pt-4 pt-md-0`}>
                                    <Image
                                        src="/brand-strategy-2.svg"
                                        width={125}
                                        height={125}
                                        className="image"
                                        alt= "Brand Strategy"/>
                               </li>
                               <li className={`item pt-4 pt-md-0`}>
                                    <Image
                                        src="/brand-strategy-3.svg"
                                        width={125}
                                        height={125}
                                        className="image"
                                        alt= "Brand Strategy"/>
                               </li>
                           </ul>
                      </div>
                  </motion.div>
                      <motion.div
                       initial={{opacity: 0.6}}
                       whileHover={{opacity: 1}}
                       transition={{
                         opacity: { duration: 0.4},
                       }}
                      className="row justify-content-around pt-5 px-5 mt-5 cursor-pointer">
                          <div className="col-md-3 col-12 pt-md-0 pt-4 px-0">
                              <h2 className="text-white luxury-title border-sm-bottom p-md-5 p-4 mt-md-3 pr-md-0 border-md-right text-md-left text-center">Naming</h2>
                          </div>
                          <div className="col-md-7 col-12 text-left px-0">
                          <ul className="list what-we-do-list">
                               <li className={`item pt-3 pt-md-0`}>
                                    <Image
                                        src="/Naming-1.svg"
                                        width={115}
                                        height={135}
                                        className="image"
                                        alt= "Brand Naming"/>
                               </li>
                               <li className={`item pt-3 pt-md-0`}>
                                    <Image
                                        src="/Naming-2.svg"
                                        width={100}
                                        height={125}
                                        className="image"
                                        alt= "Brand Naming"/>
                               </li>
                               <li className={`item pt-3 pt-md-0`}>
                                    <Image
                                        src="/Naming-3.svg"
                                        width={100}
                                        height={125}
                                        className="image"
                                        alt= "Brand Naming"/>
                               </li>
                           </ul>
                          </div>
                      </motion.div>
                      <motion.div
                       initial={{opacity: 0.6}}
                       whileHover={{opacity: 1}}
                       transition={{
                         opacity: { duration: 0.4},
                       }}
                      className="row justify-content-around pt-5 px-5 mt-5 cursor-pointer">
                          <div className="col-md-3 col-12 pt-md-0 pt-4 px-0">
                              <h2 className="text-white luxury-title border-sm-bottom p-md-5 p-4 mt-md-3 pr-md-0 border-md-right text-md-left text-center">Brand Identity</h2>
                          </div>
                          <div className="col-md-7 col-12 text-left px-0">
                          <ul className="list what-we-do-list">
                               <li className={`item pt-4 pt-md-0`}>
                                    <Image
                                        src="/Brand-Identity-1.svg"
                                        width={100}
                                        height={100}
                                        className="image"
                                        alt= "Brand Naming"/>
                               </li>
                               <li className={`item pt-5 pt-md-0`}>
                                    <Image
                                        src="/Brand-Identity-2.svg"
                                        width={100}
                                        height={100}
                                        className="image"
                                        alt= "Brand Naming"/>
                               </li>
                               <li className={`item pt-5 pt-md-0`}>
                                    <Image
                                        src="/Brand-Identity-3.svg"
                                        width={100}
                                        height={100}
                                        className="image"
                                        alt= "Brand Naming"/>
                               </li>
                           </ul>
                          </div>
                      </motion.div>
                      <motion.div
                       initial={{opacity: 0.6}}
                       whileHover={{opacity: 1}}
                       transition={{
                         opacity: { duration: 0.4},
                       }}
                      className="row justify-content-around pt-5 px-5 mt-5 cursor-pointer">
                          <div className="col-md-3 col-12 pt-md-0 pt-4 px-0">
                              <h2 className="text-white luxury-title border-sm-bottom p-md-5 p-4 mt-md-3 pr-md-0 border-md-right text-md-left text-center">Design</h2>
                          </div>
                          <div className="col-md-7 col-12 text-left px-0">
                          <ul className="list what-we-do-list">
                               <li className={`item pt-5 pt-md-0`}>
                                    <Image
                                        src="/Design-1.svg"
                                        width={125}
                                        height={125}
                                        className="image"
                                        alt= "Brand Naming"/>
                               </li>
                               <li className={`item pt-5 pt-md-0`}>
                                    <Image
                                        src="/Design-2.svg"
                                        width={125}
                                        height={125}
                                        className="image"
                                        alt= "Brand Naming"/>
                               </li>
                               <li className={`item pt-5 pt-md-0`}>
                                    <Image
                                        src="/Design-3.svg"
                                        width={125}
                                        height={125}
                                        className="image"
                                        alt= "Brand Naming"/>
                               </li>
                           </ul>
                          </div>
                      </motion.div>
                      <motion.div
                       initial={{opacity: 0.6}}
                       whileHover={{opacity: 1}}
                       transition={{
                         opacity: { duration: 0.4},
                       }}
                      className="row justify-content-around pt-5 px-5 mt-5 cursor-pointer">
                          <div className="col-md-3 col-12 pt-md-0 pt-4 px-0">
                              <h2 className="text-white luxury-title border-sm-bottom p-md-5 p-4 pr-md-0 border-md-right text-md-left text-center">Web Development</h2>
                          </div>
                          <div className="col-md-7 col-12 text-left px-0">
                          <ul className="list what-we-do-list">
                               <li className={`item pt-0 pt-md-0`}>
                                    <Image
                                        src="/Development-1.svg"
                                        width={125}
                                        height={125}
                                        className="image"
                                        alt= "Brand Naming"/>
                               </li>
                               <li className={`item pt-0 pt-md-0`}>
                                    <Image
                                        src="/Development-2.svg"
                                        width={125}
                                        height={125}
                                        className="image"
                                        alt= "Brand Naming"/>
                               </li>
                               <li className={`item pt-0 pt-md-0`}>
                                    <Image
                                        src="/Development-3.svg"
                                        width={125}
                                        height={125}
                                        className="image"
                                        alt= "Brand Naming"/>
                               </li>
                           </ul>
                          </div>
                      </motion.div>
                      <div className="row mt-5 pt-5 justify-content-center">
                          <div className="col-md-5 col-11 mt-5 pt-5">
                              <h5 className="everything-we-do">
                                  Everything we design is exceptional and is
                                  made to be part of something significant.
                                  For each project, we have the freedom and
                                  inspiration to design something extraordinary.
                                </h5>
                          </div>
                      </div>
              </div>
            </>
          );
      }
  }

export default Studio;


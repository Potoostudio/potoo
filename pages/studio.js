import React from "react"
import Head from 'next/head'
import Image from 'next/image'
import { motion} from "framer-motion"

class Studio extends React.Component {
    state = {
        showBox: false,
        showItem: false
      };
    handleBoxToggle = () => this.setState({ showBox: !this.state.showBox })
    handleBoxToggleNaming = () => this.setState({ showItem: !this.state.showItem })
    handleBoxToggleIdentity = () => this.setState({ showIdentity: !this.state.showIdentity })
    handleBoxToggleDesign = () => this.setState({ showDesign: !this.state.showDesign })
    handleBoxToggleWeb = () => this.setState({ showWeb: !this.state.showWeb })

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
                          <h1 className="luxury-title font-large text-center text-capitalize">
                              Studio
                          </h1>
                      </div>
                  </div>
                  <motion.div className="row justify-content-between pt-5 px-4 pb-md-5 mt-5"
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
                  <div className="row justify-content-around pt-5 px-5 mt-5 Strategy-row">
                  <div className="col-md-3 col-12 pt-md-0 pt-4 px-0">
                          <motion.h3
                            onMouseEnter={this.handleBoxToggle}
                            onMouseOut={this.handleBoxToggle}
                            whileHover={{
                                backgroundColor: '#000',
                                transition: { duration: 0.4 },
                              }}
                          className="text-white luxury-title p-5 text-center bg-darker cursor-pointer">
                              Brand Strategy
                          </motion.h3>
                      </div>
                      <div className="col-md-7 col-12 text-left px-0">
                           <ul className="list what-we-do-list">
                               <li className={`item pt-4 pt-md-0${this.state.showBox ? " opacity-100" : ""}`}>
                                    <Image
                                        src="/brand-strategy-1.svg"
                                        width={125}
                                        height={125}
                                        className="image"
                                        alt= "Brand Strategy"/>
                               </li>
                               <li className={`item pt-4 pt-md-0${this.state.showBox ? " opacity-100" : ""}`}>
                                    <Image
                                        src="/brand-strategy-2.svg"
                                        width={125}
                                        height={125}
                                        className="image"
                                        alt= "Brand Strategy"/>
                               </li>
                               <li className={`item pt-4 pt-md-0${this.state.showBox ? " opacity-100" : ""}`}>
                                    <Image
                                        src="/brand-strategy-3.svg"
                                        width={125}
                                        height={125}
                                        className="image"
                                        alt= "Brand Strategy"/>
                               </li>
                           </ul>
                      </div>
                  </div>
                      <div className="row justify-content-around pt-5 px-5 mt-5 Naming-row">
                          <div className="col-md-3 col-12 pt-md-0 pt-4 px-0">
                              <motion.h3
                                  onMouseEnter={this.handleBoxToggleNaming}
                                  onMouseOut={this.handleBoxToggleNaming}
                                  whileHover={{
                                    backgroundColor: '#000',
                                    transition: { duration: 0.4 },
                                  }}
                                  className="text-white luxury-title p-5 text-center bg-darker cursor-pointer">
                                      Naming
                              </motion.h3>
                          </div>
                          <div className="col-md-7 col-12 text-left px-0">
                          <ul className="list what-we-do-list">
                               <li className={`item pt-3 pt-md-0${this.state.showItem ? " opacity-100" : ""}`}>
                                    <Image
                                        src="/Naming-1.svg"
                                        width={115}
                                        height={135}
                                        className="image"
                                        alt= "Brand Naming"/>
                               </li>
                               <li className={`item pt-3 pt-md-0${this.state.showItem ? " opacity-100" : ""}`}>
                                    <Image
                                        src="/Naming-2.svg"
                                        width={100}
                                        height={125}
                                        className="image"
                                        alt= "Brand Naming"/>
                               </li>
                               <li className={`item pt-3 pt-md-0${this.state.showItem ? " opacity-100" : ""}`}>
                                    <Image
                                        src="/Naming-3.svg"
                                        width={100}
                                        height={125}
                                        className="image"
                                        alt= "Brand Naming"/>
                               </li>
                           </ul>
                          </div>
                      </div>
                      <div className="row justify-content-around pt-5 px-5 mt-5 Naming-row">
                          <div className="col-md-3 col-12 pt-md-0 pt-4 px-0">
                              <motion.h3
                              onMouseEnter={this.handleBoxToggleIdentity}
                              onMouseOut={this.handleBoxToggleIdentity}
                              whileHover={{
                                backgroundColor: '#000',
                                transition: { duration: 0.4 },
                              }}
                                  className="text-white luxury-title p-5 text-center bg-darker cursor-pointer">
                                      Brand Identity
                              </motion.h3>
                          </div>
                          <div className="col-md-7 col-12 text-left px-0">
                          <ul className="list what-we-do-list">
                               <li className={`item pt-5 pt-md-0${this.state.showIdentity ? " opacity-100" : ""}`}>
                                    <Image
                                        src="/Brand-Identity-1.svg"
                                        width={100}
                                        height={100}
                                        className="image"
                                        alt= "Brand Naming"/>
                               </li>
                               <li className={`item pt-5 pt-md-0${this.state.showIdentity ? " opacity-100" : ""}`}>
                                    <Image
                                        src="/Brand-Identity-2.svg"
                                        width={100}
                                        height={100}
                                        className="image"
                                        alt= "Brand Naming"/>
                               </li>
                               <li className={`item pt-5 pt-md-0${this.state.showIdentity ? " opacity-100" : ""}`}>
                                    <Image
                                        src="/Brand-Identity-3.svg"
                                        width={100}
                                        height={100}
                                        className="image"
                                        alt= "Brand Naming"/>
                               </li>
                           </ul>
                          </div>
                      </div>
                      <div className="row justify-content-around pt-5 px-5 mt-5 Naming-row">
                          <div className="col-md-3 col-12 pt-md-0 pt-4 px-0">
                              <motion.h3
                                  onMouseEnter={this.handleBoxToggleDesign}
                                  onMouseOut={this.handleBoxToggleDesign}
                                  whileHover={{
                                    backgroundColor: '#000',
                                    transition: { duration: 0.4 },
                                  }}
                                  className="text-white luxury-title p-5 text-center bg-darker cursor-pointer">
                                      Design
                              </motion.h3>
                          </div>
                          <div className="col-md-7 col-12 text-left px-0">
                          <ul className="list what-we-do-list">
                               <li className={`item pt-5 pt-md-0${this.state.showDesign ? " opacity-100" : ""}`}>
                                    <Image
                                        src="/Design-1.svg"
                                        width={125}
                                        height={125}
                                        className="image"
                                        alt= "Brand Naming"/>
                               </li>
                               <li className={`item pt-5 pt-md-0${this.state.showDesign ? " opacity-100" : ""}`}>
                                    <Image
                                        src="/Design-2.svg"
                                        width={125}
                                        height={125}
                                        className="image"
                                        alt= "Brand Naming"/>
                               </li>
                               <li className={`item pt-5 pt-md-0${this.state.showDesign ? " opacity-100" : ""}`}>
                                    <Image
                                        src="/Design-3.svg"
                                        width={125}
                                        height={125}
                                        className="image"
                                        alt= "Brand Naming"/>
                               </li>
                           </ul>
                          </div>
                      </div>
                      <div className="row justify-content-around pt-5 px-5 mt-5 Naming-row">
                          <div className="col-md-3 col-12 pt-md-0 pt-4 px-0">
                              <motion.h3
                                onMouseEnter={this.handleBoxToggleWeb}
                                onMouseOut={this.handleBoxToggleWeb}
                                whileHover={{
                                  backgroundColor: '#000',
                                  transition: { duration: 0.4 },
                                }}
                                  className="text-white luxury-title p-5 text-center bg-darker cursor-pointer">
                                      Web Development
                              </motion.h3>
                          </div>
                          <div className="col-md-7 col-12 text-left px-0">
                          <ul className="list what-we-do-list">
                               <li className={`item pt-0 pt-md-0${this.state.showWeb ? " opacity-100" : ""}`}>
                                    <Image
                                        src="/Development-1.svg"
                                        width={125}
                                        height={125}
                                        className="image"
                                        alt= "Brand Naming"/>
                               </li>
                               <li className={`item pt-0 pt-md-0${this.state.showWeb ? " opacity-100" : ""}`}>
                                    <Image
                                        src="/Development-2.svg"
                                        width={125}
                                        height={125}
                                        className="image"
                                        alt= "Brand Naming"/>
                               </li>
                               <li className={`item pt-0 pt-md-0${this.state.showWeb ? " opacity-100" : ""}`}>
                                    <Image
                                        src="/Development-3.svg"
                                        width={125}
                                        height={125}
                                        className="image"
                                        alt= "Brand Naming"/>
                               </li>
                           </ul>
                          </div>
                      </div>
              </div>
            </>
          );
      }
  }

export default Studio;


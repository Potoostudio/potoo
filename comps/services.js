"use client"
import React, {Component} from 'react'
import { motion} from "framer-motion"

export default function Projects() {

        return (
            <>
                <div className="fluid-container">
                <motion.div
            initial={{y: 0}}
            whileInView={{y: -20}}
            viewport={{ once: true }}
            transition={{
              y: { duration: 1, delay: 0.4},
            }}
            className="row justify-content-between px-md-5 pt-12x pb-10x mt-12x bg-darker ">
              <div className="col-lg-3">
                <motion.h4
                  initial={{opacity: 0.7}}
                  whileInView={{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                    opacity: { duration: 1, delay: 0.4},
                  }}
                className="line-before-after color-white">Services</motion.h4>
              </div>
              <div className="col-lg-3 col-11 pt-5 pt-md-0">
                <motion.h5
                  initial={{opacity: 0.7}}
                  whileInView={{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                    opacity: { duration: 1, delay: 0.4},
                  }}
                className="line-before-after color-white border-sm-bottom-white pb-2 me-md-4">Strategy & Identity</motion.h5>
                  <ul className="list-style-none ps-0 mb-0 mt-md-2 color-db ">
                      <li className="item pt-1">
                        Brand Strategy
                      </li>
                      <li className="item pt-1">
                        Research
                      </li>
                      <li className="item pt-1">
                        Naming
                      </li>
                      <li className="item pt-1">
                        Brand Guidelines
                      </li>
                      <li className="item pt-1">
                        Corporate Identity (CI)
                      </li>
                      <li className="item pt-1">
                        Brand Positioning
                      </li>
                      <li className="item pt-1">
                        Identity System (IS)
                      </li>
                  </ul>
              </div>
              <div className="col-lg-3 col-11 pt-5 pt-md-0">
                <motion.h5
                  initial={{opacity: 0.7}}
                  whileInView={{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                    opacity: { duration: 1, delay: 0.4},
                  }}
                className="line-before-after color-white border-sm-bottom-white pb-2 me-md-4">Design</motion.h5>
                  <ul className="list-style-none ps-0 mb-0 mt-md-2 color-db">
                      <li className="item pt-1">
                        Logo
                      </li>
                      <li className="item pt-1">
                        Book Design
                      </li>
                      <li className="item pt-1">
                        Packaging
                      </li>
                      <li className="item pt-1">
                       Brochures
                      </li>
                      <li className="item pt-1">
                        Websites
                      </li>
                      <li className="item pt-1">
                        Signage & Wayfinding
                      </li>
                      <li className="item pt-1">
                        Typography
                      </li>
                  </ul>
              </div>
              <div className="col-lg-3 pb-5 pb-md-0">
                <motion.h5
                  initial={{opacity: 0.7}}
                  whileInView={{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                    opacity: { duration: 1, delay: 0.4},
                  }}
                className="line-before-after color-white pt-5 pt-md-0 border-sm-bottom-white pb-2 me-md-4">Development</motion.h5>
                  <ul className="list-style-none ps-0 mb-0 mt-md-2 color-db">
                      <li className="item pt-1">
                      Cyber Security Solutions
                      </li>
                      <li className="item pt-1">
                        Custom Web Applications
                      </li>
                      <li className="item pt-1">
                        AI-Powered Applications
                      </li>
                      <li className="item pt-1">
                        API Development
                      </li>
                      <li className="item pt-1">
                        Data Management
                      </li>
                      <li className="item pt-1">
                        Data Processing
                      </li>
                      <li className="item pt-1">
                        Microservices Development
                      </li>
                  </ul>
              </div>

          </motion.div>
                </div>
        
          </>
        );
    }

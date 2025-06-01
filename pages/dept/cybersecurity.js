import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { motion} from "framer-motion"
import Link from "next/link"

export default function Development(){

          return (
            <>
              <Head>
                <title>Cyber Security company in Iraq</title>
                <link rel="icon" href="favicon.png" />
                <link rel="manifest" href="/manifest.json"/>
                <meta name="description" content="Cyber security company in Baghdad"/>
                <meta name="keywords" content="Cyber Security company in Iraq, Cyber Security company in Baghdad, Cybersecurity company in Baghdad, Cybersecurity company in Iraq, Cybersecurity agency in Baghdad, Cybersecurity company in Baghdad, Cybersecurity company in Baghdad, Cybersecurity company in Iraq, Cyber security company in Baghdad, Cyber security company in Iraq, Cybersecurity solutions in Baghdad, Cybersecurity solutions in Iraq"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
              </Head>
              <div className="container-fluid pt-5 bg-white">
                  <motion.div
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{ duration: 0.7, delay: 0.5}}
                    className="row pt-md-5 mt-5 py-md-5 px-4 px-md-5 pb-5 pb-md-0">
                      <div className="col-12 col-md-9 px-0 py-md-5 mt-md-5 mt-0 color-dark">
                          <h3
                          className=" text-left font-large fw-500 line-height-normal">
                             Cyber Security solutions to counter digital crimes
                          </h3>
                          <h5 className="title fw-500  pt-md-5 pt-3">
                            Protect Your Data.
                          </h5>
                          <p className="info line-height-extra pt-md-3 pt-4">
                            We develop intelligent, reliable, and scalable cybersecurity solutions, customized to meet the unique needs of businesses throughout Iraq.
                          </p>
                          <p className="info line-height-normal pt-2 fst-italic">
                            Our tools are designed to protect your data, secure your operations, and give you peace of mind.
                          </p>
                      </div>
                  </motion.div>
                  <motion.div
                   initial={{opacity: 0, y: 30}}
                   animate={{opacity: 1, y: 0}}
                   transition={{ duration: 0.7, delay: 0.5}}
                    className="row justify-content-between pt-0 py-md-0 px-3 mt-4 px-md-5 pb-5 pb-md-5">
                      <div className="col-12 col-md-12 px-0 py-md-0 color-dark border-bottom mt-0">
                          <h6 className="text-left fw-500 text-uppercase line-height-normal">
                             solutions
                          </h6>
                      </div>
                      <div className="col-md-4 col-12 pt-5 d-flex px-0">
                            <Image
                                width= "54"
                                height="23"
                                src="/data-leak-icon.svg"
                                className="image"
                                alt="Cyber Security Icon"
                                loading="lazy"
                                />
                            <h6 className="title ps-2 ">
                                Data Leak Monitoring & Prevention
                            </h6>
                      </div>
                      <div className="col-md-2 col-12 pt-md-5 pt-4 d-flex px-0">
                            <Image
                                width= "23"
                                height="23"
                                src="/cybersecurity-icon.svg"
                                className="image"
                                alt="Cyber Security Icon"
                                loading="lazy"
                                />
                            <h6 className="title  ps-2">
                                Network Security
                            </h6>
                      </div>
                      <div className="col-md-5 col-12 pt-md-5 pt-4 d-flex px-0">
                            <Image
                                width= "23"
                                height="23"
                                src="/training-icon.svg"
                                className="image"
                                alt="training Icon"
                                loading="lazy"
                                />
                            <h6 className="title ps-2">
                                Cybersecurity Training
                            </h6>
                      </div>
                      <div className="col-md-4 col-12 pt-md-3 pt-4 d-flex px-0">
                            <Image
                                width= "23"
                                height="23"
                                src="/tools-icon.svg"
                                className="image"
                                alt="Compliance & Data Governance Tools Icon"
                                loading="lazy"
                                />
                            <h6 className="title ps-2 ">
                                Compliance & Data Governance Tools
                            </h6>
                      </div>
                      <div className="col-md-2 col-12 pt-md-3 pt-4 d-flex px-0">
                            <Image
                                width= "23"
                                height="23"
                                src="/consulting-icon.svg"
                                className="image"
                                alt="Consulting Icon"
                                loading="lazy"
                                />
                            <h6 className="title  ps-2">
                                Consulting
                            </h6>
                      </div>
                      <div className="col-md-5 col-12 pt-md-5 pt-4 d-flex px-0"></div>
                  </motion.div>
                  <div className="row justify-content-start pt-0 py-md-0 px-3 mt-5 px-md-5 pb-5 pb-md-5">
                     <motion.div
                      initial={{opacity: 0, y: 30}}
                      whileInView={{opacity: 1, y: 0}}
                      viewport={{ once: true }}
                      transition={{
                        y: { duration: 1, delay: 0.4},
                      }}
                      className="col-12 box-shadow border pt-4 box-bg pe-0 mb-3 mb-md-0">
                        <Image
                            width= "50"
                            height="50"
                            src="/cybersecurity-icon.svg"
                            className="image ps-2"
                            alt="Consulting Icon"
                            loading="lazy"
                        />
                        <h4 className="title color-dark ps-2 pt-4 bottom-line pb-2">
                            Network Security
                        </h4>
                        <p className="ps-2 pt-4 pe-5 w-lg-50">
                            We provide custom firewall and intrusion detection systems designed for Iraqi businesses of all sizes. Whether you’re running a startup in Erbil or a government office in Baghdad, our team can help secure your internal networks from external threats, malware, and unauthorized access.
                        </p>
                        <ul className="list ps-4 pt-4 pe-2">
                            <li className="item">
                                Next-gen firewalls and threat monitoring
                            </li>
                            <li className="item">
                                Zero Trust architecture implementation
                            </li>
                            <li className="item">
                                Remote management and 24/7 threat alerts
                            </li>
                        </ul>
                        <ul className="list pt-4x ps-2 list-style-none">
                            <span className="text-uppercase bottom-line w-100 d-block">
                                Ideal for:
                            </span>
                            <li className="item pt-2">
                                Enterprises
                            </li>
                            <li className="item">
                                Government offices
                            </li>
                            <li className="item">
                                Educational institutions
                            </li>
                        </ul>
                     </motion.div>
                     <motion.div
                      initial={{opacity: 0, y: 30}}
                      whileInView={{opacity: 1, y: 0}}
                      viewport={{ once: true }}
                      transition={{
                        y: { duration: 1, delay: 0.4},
                      }}
                     className="col-12 box-shadow border pt-4 box-bg pe-0 mt-6x mb-3 mb-md-0">
                        <Image
                            width= "95"
                            height="50"
                            src="/data-leak-icon.svg"
                            className="image ps-2"
                            alt="data leak icon Icon"
                            loading="lazy"
                        />
                        <h4 className="title color-dark ps-2 pt-4 bottom-line pb-2">
                            Data Leak Monitoring & Prevention
                        </h4>
                        <p className="ps-2 pe-4 pt-4 w-lg-50">
                            With Iraq’s growing digital footprint, your data could be at risk without your knowledge. We offer data monitoring services that scan stolen databases, leaked credentials, and identity theft channels to alert you before damage is done.
                        </p>
                        <ul className="list ps-4 pt-4 pe-2">
                            <li className="item">
                                Real-time alerts on compromised data
                            </li>
                            <li className="item">
                                Automated credential tracking
                            </li>
                            <li className="item">
                                Incident response support and recovery plans
                            </li>
                        </ul>
                        <ul className="list pt-4x ps-2 list-style-none">
                            <span className="text-uppercase bottom-line w-100 d-block">
                                Ideal for:
                            </span>
                            <li className="item pt-2">
                                Banks
                            </li>
                            <li className="item">
                                Telecommunication
                            </li>
                            <li className="item">
                                Healthcare
                            </li>
                        </ul>
                     </motion.div>
                     <motion.div
                      initial={{opacity: 0, y: 30}}
                      whileInView={{opacity: 1, y: 0}}
                      viewport={{ once: true }}
                      transition={{
                        y: { duration: 1, delay: 0.4},
                      }}
                     className="col-12 box-shadow border pt-4 box-bg pe-0 mt-4x mb-3 mb-md-0">
                        <Image
                            width= "50"
                            height="50"
                            src="/training-icon.svg"
                            className="image ps-2"
                            alt="Consulting Icon"
                            loading="lazy"
                        />
                        <h4 className="title color-dark ps-2 pt-4 bottom-line pb-2">
                            Cybersecurity Awareness & Employee Training
                        </h4>
                        <p className="ps-2 pe-4 pt-4 w-lg-50">
                            Human error remains the main cause of data breaches. We offer interactive cybersecurity training in Arabic and English, tailored for Iraqi companies. From phishing simulations to secure password habits, we train your staff to become your first line of defense.
                        </p>
                        <ul className="list ps-4 pt-4 pe-2">
                            <li className="item">
                                Online and in-person training options
                            </li>
                            <li className="item">
                                Culturally adapted, locally relevant content
                            </li>
                        </ul>
                        <ul className="list pt-4x ps-2 list-style-none ">
                            <span className="text-uppercase bottom-line w-100 d-block">
                                Ideal for:
                            </span>
                            <li className="item pt-2">
                            HR departments
                            </li>
                            <li className="item">
                                IT teams
                            </li>
                            <li className="item">
                                Business owners
                            </li>
                        </ul>
                     </motion.div>
                     <motion.div
                      initial={{opacity: 0, y: 30}}
                      whileInView={{opacity: 1, y: 0}}
                      viewport={{ once: true }}
                      transition={{
                        y: { duration: 1, delay: 0.4},
                      }}
                     className="col-12 box-shadow border pt-4 box-bg pe-0 mt-4x mb-3 mb-md-0">
                        <Image
                            width= "95"
                            height="50"
                            src="/tools-icon.svg"
                            className="image ps-2"
                            alt="data leak icon Icon"
                            loading="lazy"
                        />
                        <h4 className="title color-dark ps-2 pt-4 bottom-line pb-2">
                            Compliance & Data Governance Tools
                        </h4>
                        <p className="ps-2 pe-4 pt-4 w-lg-50">
                            Iraqi businesses are increasingly expected to comply with data protection regulations and industry standards.We help you get ahead by offering automated tools that manage user access, secure sensitive files, and generate compliance reports for audits.
                        </p>
                        <ul className="list ps-4 pt-4 pe-2">
                            <li className="item">
                                GDPR-inspired data handling policies
                            </li>
                            <li className="item">
                                File access tracking and encryption
                            </li>
                            <li className="item">
                                Audit-ready documentation
                            </li>
                        </ul>
                        <ul className="list pt-4x ps-2 list-style-none">
                            <span className="text-uppercase bottom-line w-100 d-block">
                                Ideal for:
                            </span>
                            <li className="item pt-2">
                                Legal firms
                            </li>
                            <li className="item">
                                Financial services
                            </li>
                            <li className="item">
                                Government sectors
                            </li>
                        </ul>
                     </motion.div>
                     <motion.div
                      initial={{opacity: 0, y: 30}}
                      whileInView={{opacity: 1, y: 0}}
                      viewport={{ once: true }}
                      transition={{
                        y: { duration: 1, delay: 0.4},
                      }}
                     className="col-12 box-shadow border pt-4 box-bg pe-0 mt-4x">
                        <Image
                            width= "95"
                            height="50"
                            src="/consulting-icon.svg"
                            className="image ps-2"
                            alt="consulting Icon"
                            loading="lazy"
                        />
                        <h4 className="title color-dark ps-2 pt-4 bottom-line pb-2">
                            Consulting
                        </h4>
                        <p className="ps-2 pe-4 pt-4 w-lg-50">
                            We identify problems, evaluate security issues, assess risk, and implement solutions to defend against threats. We help clients understand threats, secure internal communications, choose the proper software, and build a scalable system. 
                        </p>
                        <ul className="list ps-4 pt-4 pe-2">
                            <li className="item">
                            Risk prevention, detection, and response
                            </li>
                            <li className="item">
                                Monitoring internet safety problems and crafting dynamic solutions
                            </li>
                            <li className="item">
                                Performing vulnerability testing and security checks
                            </li>
                        </ul>
                        <ul className="list pt-4x ps-2 list-style-none">
                            <span className="text-uppercase bottom-line w-100 d-block">
                                Ideal for:
                            </span>
                            <li className="item pt-2">
                                Private sector
                            </li>
                            <li className="item">
                                Financial companies
                            </li>
                            <li className="item">
                                Government sector
                            </li>
                        </ul>
                     </motion.div>
                  </div>
                  <motion.div
                     initial={{opacity: 0, y: 30}}
                     whileInView={{opacity: 1, y: 0}}
                     viewport={{ once: true }}
                     transition={{
                       y: { duration: 1, delay: 0.4},
                     }}
                    className="row justify-content-start py-md-0 px-3 mt-10x px-md-5 pb-5 pb-md-5 ">
                    <div className=" col-12">
                        <h5 className="bottom-line pb-4 "> We understand the Iraqi market</h5>
                        <h6 className="fw-bold mb-0">Built for Iraq</h6>
                        <p className="bottom-line pb-2">We understand the infrastructure, the challenges, and the real security risks on the ground.</p>
                        <h6 className="fw-bold mb-0">Expert-led</h6>
                        <p className="bottom-line pb-2">Our team includes ethical hackers, cybersecurity engineers, and AI-driven threat analysts.</p>
                        <h6 className="fw-bold mb-0">End-to-End Security</h6>
                        <p className="bottom-line pb-2">From individuals to entire enterprises, we secure it all.</p>
                        <h6 className="fw-bold mb-0">Local Support</h6>
                        <p className="bottom-line pb-2">Arabic-speaking specialists who can guide you every step of the way.</p>
                    </div>
                  </motion.div>
                  <motion.div
                     initial={{opacity: 0, y: 30}}
                     whileInView={{opacity: 1, y: 0}}
                     viewport={{ once: true }}
                     transition={{
                       y: { duration: 1, delay: 0.4},
                     }}
                    className="row justify-content-start py-md-0 px-3 mt-10x px-md-5 pb-5 pb-md-5 mb-8x">
                    <div className=" col-12">
                        <h5 className="pb-4"> Contact us for a security audit</h5>
                        <ul className="list-style-none ps-0 mb-0 mt-md-2">
                            <li className="item pt-2">
                                    <Link href="https://wa.me/009647809000956" className="say-hello-a color-dark text-decoration-none">
                                            WhatsApp: +964 780 900 0956 / Managed by <span className="text-decoration-underline">Iris</span> our AI.
                                    </Link>
                            </li>
                            <li className="item pt-2">
                                    <Link href="tel:+13202604416" className="say-hello-a color-dark text-decoration-none">
                                            Cell: +1 320 260 4416
                                    </Link>
                            </li>
                            <li className="item pt-2">
                                    <Link href="mailto:ideas@potoo.studio" className="say-hello-a color-dark text-decoration-none">
                                            Email: ideas@potoo.studio
                                    </Link>
                            </li>
                        </ul> 
                    </div>
                  </motion.div>
              </div>
            </>
          );
      }

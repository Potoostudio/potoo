"use client"
import React, {Component} from 'react'
import Link from 'next/link'
import Clock from 'react-live-clock'
import Image from 'next/image'
import { motion} from "framer-motion"

export default function Projects() {

        return (
            <>
                <div className="container-fluid">
                    <div className="row project mt-10x px-md-5 pt-md-0 pt-md-5">
                    <div className="col-md-8">
                        <Link href="/iris" className="project-li-link">
                        <motion.div
                            whileHover={{
                            opacity: 0.85,
                            transition: { duration: 0.3, ease: "easeIn" },
                        }}
                        className="image-container">
                            <Image
                                src="/Iris-project.jpg"
                                layout="fill"
                                className="image"
                                alt="Iris-project"
                                loading="lazy"
                                />
                        </motion.div>
                        </Link>
                    </div>
                    <div className="col-md-4 col-11 pb-md-1 flex-column justify-content-between d-flex">
                        <div className="flex-item">
                        <h5 className="project-title mt-md-5 pt-md-5 pt-2 fw-bolder">Iris</h5>
                        <p className="project-tag-line">AI empowers people and business.</p>
                        </div>
                        <div className="flex-item">
                        <ul className="list-style-none ps-0 color-darker mt-md-5 pt-md-5 mb-0 mt-2">
                        <span className=" text-uppercase font-secondary">Development</span>
                            <li className="item pt-2 font-secondary">
                            AI-Powered Application
                            </li>
                            <li className="item font-secondary">
                            WhatsApp API
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="row project mt-10x px-md-5 pt-md-0 pt-5">
                    <div className="col-md-8">
                        <Link href="/projects/henery-agency" className="project-li-link">
                        <motion.div
                            whileHover={{
                            opacity: 0.85,
                            transition: { duration: 0.3, ease: "easeIn" },
                        }}
                        className="image-container">
                            <Image
                                src="/henery-agency-project-img-lg.jpg"
                                layout="fill"
                                className="image"
                                alt="henery-agency-project"
                                loading="lazy"
                                />
                        </motion.div>
                        </Link>
                    </div>
                    <div className="col-md-4 col-11 pb-md-1 flex-column justify-content-between d-flex">
                        <div className="flex-item">
                        </div>
                        <div className="flex-item">
                        <h5 className="project-title mt-md-5 pt-md-5 pt-2 fw-bolder">Henery Agency</h5>
                        <p className="project-tag-line fs-normal">In a world of common practices and resistance to change, Henery Agency shows the uncommon.</p>
                        </div>
                        <div className="flex-item">
                        <ul className="list-style-none ps-0 mb-0 color-darker mt-md-5 pt-md-5 mt-2">
                        <span className=" text-uppercase font-secondary">Design</span>
                            <li className="item pt-2 font-secondary">
                            Brand strategy
                            </li>
                            <li className="item font-secondary">
                            Brand identity
                            </li>
                            <li className="item font-secondary">
                            Design
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="row project mt-10x px-md-5 pt-md-0 pt-5">
                    <div className="col-md-8">
                        <Link href="//projects/potoo" className="project-li-link">
                        <motion.div
                            whileHover={{
                            opacity: 0.85,
                            transition: { duration: 0.3, ease: "easeIn" },
                        }}
                        className="image-container">
                            <Image
                                src="/Potoo-Dark-Color-lg.jpg"
                                layout="fill"
                                className="image"
                                alt="Potoo Project"
                                loading="lazy"
                                />
                        </motion.div>
                        </Link>
                    </div>
                    <div className="col-md-4 col-11 pb-md-1 flex-column justify-content-between d-flex">
                        <div className="flex-item">
                        </div>
                        <div className="flex-item">
                        <h5 className="project-title mt-md-5 pt-md-5 pt-2 fw-bolder">POTOO</h5>
                        <p className="project-tag-line fs-normal">In a world of common practices and resistance to change, Henery Agency shows the uncommon.</p>
                        </div>
                        <div className="flex-item">
                        <ul className="list-style-none ps-0 mb-0 color-darker mt-md-5 pt-md-5">
                        <span className=" text-uppercase font-secondary">Design</span>
                            <li className="item pt-2 font-secondary">
                            Brand strategy
                            </li>
                            <li className="item font-secondary">
                            Brand identity
                            </li>
                            <li className="item font-secondary">
                            Verbal & Visual communication
                            </li>
                            <li className="item font-secondary">
                            Web
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="row project mt-10x px-md-5 pt-md-0 pt-5">
                    <div className="col-md-8">
                        <Link href="//projects/jaeger-aeration" className="project-li-link">
                        <motion.div
                            whileHover={{
                            opacity: 0.85,
                            transition: { duration: 0.3, ease: "easeIn" },
                        }}
                        className="image-container">
                            <Image
                                src="/Project-Jaeger.jpg"
                                layout="fill"
                                className="image border-dark"
                                alt="Jaeger Aeration Project"
                                loading="lazy"
                                />
                        </motion.div>
                        </Link>
                    </div>
                    <div className="col-md-4 col-11 pb-md-1 flex-column justify-content-between d-flex">
                        <div className="flex-item">
                        </div>
                        <div className="flex-item">
                        <h5 className="project-title mt-md-5 pt-md-5 pt-2 fw-bolder">JAEGER AERATION</h5>
                        <p className="project-tag-line fs-normal">In a world of common practices and resistance to change, Henery Agency shows the uncommon.</p>
                        </div>
                        <div className="flex-item">
                        <ul className="list-style-none ps-0 mb-0 color-darker mt-md-5 pt-md-5">
                        <span className=" text-uppercase pt-2 font-secondary">Design</span>
                            <li className="item pt-2 font-secondary">
                            Brand strategy
                            </li>
                            <li className="item font-secondary">
                            Brand identity
                            </li>
                            <li className="item font-secondary">
                            Design
                            </li>
                            <li className="item font-secondary">
                            Web
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                </div>
        
          </>
        );
    }

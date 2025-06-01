"use client"
import React from 'react'
import { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'
import useMouse from "@react-hook/mouse-position";
import { motion} from "framer-motion"

export default function Projects() {

    //mouse over effect
    const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = React.useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }

  const variants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "#fff",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    project: {
      opacity: 1,
      // backgroundColor: "rgba(255, 255, 255, 0.6)",
      backgroundColor: "#fff",
      color: "#000",
      height: 50,
      width: 120,
      fontSize: "14px",
      x: mouseXPosition - 32,
      y: mouseYPosition - 32,
      borderRadius: "0",
    },
    contact: {
      opacity: 1,
      backgroundColor: "#F52100",
      color: "#000",
      height: 64,
      width: 64,
      fontSize: "32px",
      x: mouseXPosition - 48,
      y: mouseYPosition - 48,
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  function projectEnter(event) {
    setCursorText("View project");
    setCursorVariant("project");
  }

  function projectLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }

  function contactEnter(event) {
    setCursorText("👋");
    setCursorVariant("contact");
  }

  function contactLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }

        return (
            <>
                <div className="container-fluid" ref={ref}>
                <motion.div
                    variants={variants}
                    className="circle"
                    animate={cursorVariant}
                    transition={spring}
                    >
                    <span className="cursorText">{cursorText}</span>
                </motion.div>
                    <div
                    className="row project mt-10x px-md-5 pt-md-0 pt-md-5">
                    <div className="col-md-8">
                        <Link href="/iris" className="project-li-link">
                        <div
                        className="image-container"
                        onMouseEnter={projectEnter}
                        onMouseLeave={projectLeave}>
                            <Image
                                src="/Iris-project.jpg"
                                layout="fill"
                                className="image"
                                alt="Iris-project"
                                loading="lazy"
                                />
                        </div>
                        </Link>
                    </div>
                    <div className="col-md-4 col-11 pb-md-1 flex-column justify-content-end d-flex">
                        <div className="flex-item">
                        <Link href="/iris" className="color-dark text-decoration-none">
                            <h5 className="project-title pt-2 fw-bolder pt-md-0 pt-2">Iris</h5>
                        </Link>
                        <p className="project-tag-line font-secondary">AI empowers people and business.</p>
                        </div>
                        <div className="flex-item">
                        <ul className="list-style-none ps-0 color-darker mb-0 mt-2">
                        <span className=" text-uppercase font-secondary">Development</span>
                            <li className="item pt-1 font-secondary">
                            AI-Powered Application
                            </li>
                            <li className="item font-secondary">
                            WhatsApp API
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                <motion.div
                  initial={{opacity: 0, y: 30}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{ once: true }}
                  transition={{
                    y: { duration: 1, delay: 0.4},
                  }}
                className="row project mt-10x px-md-5 pt-md-0 pt-5">
                    <div className="col-md-8">
                        <Link href="/projects/henery-agency" className="project-li-link">
                        <div
                         onMouseEnter={projectEnter}
                         onMouseLeave={projectLeave}
                        className="image-container">
                            <Image
                                src="/henery-agency-project-img-lg.jpg"
                                layout="fill"
                                className="image"
                                alt="henery-agency-project"
                                loading="lazy"
                                />
                        </div>
                        </Link>
                    </div>
                    <div className="col-md-4 col-11 pb-md-1 flex-column justify-content-end d-flex">
                        <div className="flex-item">
                        <Link href="/projects/henery-agency" className="color-dark text-decoration-none">
                            <h5 className="project-title pt-2 fw-bolder pt-md-0 pt-2 fw-bolder">Henery Agency</h5>
                        </Link>
                        <p className="project-tag-line">In a world of common practices and resistance to change, Henery Agency shows the uncommon.</p>
                        </div>
                        <div className="flex-item">
                        <ul className="list-style-none ps-0 mb-0 color-darker mt-2">
                        <span className=" text-uppercase font-secondary">Design</span>
                            <li className="item pt-1 font-secondary">
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
                </motion.div>
                <motion.div
                  initial={{opacity: 0, y: 30}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{ once: true }}
                  transition={{
                    y: { duration: 1, delay: 0.4},
                  }}
                className="row project mt-10x px-md-5 pt-md-0 pt-5">
                    <div className="col-md-8">
                    <Link href="/projects/potoo" className="project-li-link">
                        <div
                          onMouseEnter={projectEnter}
                          onMouseLeave={projectLeave}
                        className="image-container">
                            <Image
                                src="/Potoo-Dark-Color-lg.jpg"
                                layout="fill"
                                className="image"
                                alt="Potoo Project"
                                loading="lazy"
                                />
                        </div>
                        </Link>
                    </div>
                    <div className="col-md-4 col-11 pb-md-1 flex-column justify-content-end d-flex">
                        <div className="flex-item">
                        <Link href="/projects/potoo" className="color-dark text-decoration-none">
                            <h5 className="project-title pt-2 fw-bolder pt-md-0">POTOO</h5>
                        </Link>
                        <p className="project-tag-line">A creative studio build around the foundations of design and development.</p>
                        </div>
                        <div className="flex-item">
                        <ul className="list-style-none ps-0 mb-0 color-darker">
                        <span className=" text-uppercase font-secondary">Design</span>
                            <li className="item pt-1 font-secondary">
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
                </motion.div>
                <motion.div
                 initial={{opacity: 0, y: 30}}
                 whileInView={{opacity: 1, y: 0}}
                 viewport={{ once: true }}
                 transition={{
                   y: { duration: 1, delay: 0.4},
                 }}
                className="row project mt-10x px-md-5 pt-md-0 pt-5">
                    <div className="col-md-8">
                        <Link href="/projects/jaeger-aeration" className="project-li-link">
                        <div
                            onMouseEnter={projectEnter}
                            onMouseLeave={projectLeave}
                        className="image-container">
                            <Image
                                src="/Project-Jaeger.jpg"
                                layout="fill"
                                className="image border-dark"
                                alt="Jaeger Aeration Project"
                                loading="lazy"
                                />
                        </div>
                        </Link>
                    </div>
                    <div className="col-md-4 col-11 pb-md-1 flex-column justify-content-end d-flex">
                        <div className="flex-item">
                            <Link href="/projects/jaeger-aeration" className="color-dark text-decoration-none">
                                <h5 className="project-title pt-2 fw-bolder">JAEGER AERATION</h5>
                            </Link>
                            <p className="project-tag-line fs-normal">Pioneer of Fine-Bubble, Jäger created the world’s first fine-bubble membrane diffusers.</p>
                        </div>
                        <div className="flex-item">
                        <ul className="list-style-none ps-0 mb-0 color-darker">
                        <span className=" text-uppercase pt-2 font-secondary">Design</span>
                            <li className="item pt-1 font-secondary">
                            Logo
                            </li>
                            <li className="item font-secondary">
                            Identity & Strategy
                            </li>
                            <li className="item font-secondary">
                            Brand Guidelines
                            </li>
                            <li className="item font-secondary">
                            Web
                            </li>
                        </ul>
                        </div>
                    </div>
                </motion.div>
                </div>
        
          </>
        );
    }

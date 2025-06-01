import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { motion} from "framer-motion"
import Link from "next/link"
import useMouse from "@react-hook/mouse-position";

export default function Custom() {

    const [isActive, setIsActive] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [isAPIShow, setIsAPIShow] = useState(false);
    const [isERPShow, setIsERPShow] = useState(false);
    const [isToolShow, setIsToolShow] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  const webHandleClick = () => {
    setIsShow(!isShow);
  };
  const APIHandleClick = () => {
    setIsAPIShow(!isAPIShow);
  };
  const ERPHandleClick = () => {
    setIsERPShow(!isERPShow);
  };
  const ToolHandleClick = () => {
    setIsToolShow(!isToolShow);
  };

  //show text when hover
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
       opacity: 0,
       height: 10,
       width: 10,
       fontSize: "16px",
       backgroundColor: "#000",
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
       backgroundColor: "#000",
       color: "#fff",
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
     setCursorText("View section");
     setCursorVariant("project");
   }
 
   function projectLeave(event) {
     setCursorText("");
     setCursorVariant("default");
   }


        return (
            <>

            <Head>
            <title>Custom Applications</title>
            <link rel="icon" href="favicon.png" />
            <link rel="manifest" href="/manifest.json"/>
            <meta name="description" content="Custom Applications company in Iraq"/>
            <meta name="keywords" content="Custom Applications company in Iraq, Custom Applications company in Baghdad, Mobile development company in Baghdad, Mobile development company in Iraq, Mobile applications development company in Baghdad, Mobile applications development company in Iraq, Websites development company in Baghdad, Websites development company in Iraq agency in Baghdad, APIs development company in Baghdad, APIs development company in Iraq, ERPs systems development company in Baghdad, ERP systems development company in Iraq, Web development company in Baghdad, Web development company in Baghdad, web applications company in Iraq, custom web solutions company in Baghdad, IT company in Iraq, IT solutions in Baghdad, Web solutions in Iraq"/>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <div className="container-fluid pt-5 bg-white" ref={ref}>
                <motion.div
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{ duration: 0.7, delay: 0.5}}
                className="row pt-md-5 mt-5 py-md-5 px-4 px-md-5 pb-5 pb-md-0">
                    <div className="col-12 col-md-8 px-0 py-md-5 mt-md-5 mt-0 color-dark">
                            <Image
                            src="/Custom-app-icon.svg"
                            width="75"
                            height="75"
                            className="image"
                            alt="Custom Applications Icon"
                            loading="lazy"
                            />
                        <h3 className=" text-left font-large pt-3 mt-4 fw-500 line-height-normal">
                            Custom Applications
                        </h3>
                        <p className="info line-height-extra pt-md-4 pt-4">
                            Custom software offers <b>scalability</b> and <b>flexibility</b>, evolving in step with your business. As you expand into new markets or adapt your business model, new features and modules can be seamlessly integrated to meet your changing needs.
                        </p>
                        <p className="title text-uppercase bottom-line pt-5">
                            applications
                        </p>
                        <ul className="list list-style-none ps-0">
                            <li className="item pt-0 fw-bolder">
                                Mobile
                            </li>
                            <li className="item pt-1 fw-bolder">
                                Websites
                            </li>
                            <li className="item pt-1 fw-bolder">
                                APIs
                            </li>
                            <li className="item pt-1 fw-bolder">
                                ERP Systems
                            </li>
                            <li className="item pt-1 fw-bolder">
                                Internal Tools
                            </li>
                        </ul>
                    </div>
                </motion.div>

                <motion.div
                    variants={variants}
                    className="circle"
                    animate={cursorVariant}
                    transition={spring}
                    >
                    <span className="cursorText">{cursorText}</span>
                </motion.div>

                <motion.div
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{ duration: 0.7, delay: 0.5}}
                className="row justify-content-between pt-4 py-md-4 px-0 px-md-5 pb-1 bottom-line top-line"
                onClick={handleClick}
                onMouseEnter={projectEnter}
                onMouseLeave={projectLeave}
                >
                        <div className="col-md-3 col-12 pt-0">
                            <h1 className="title">
                                Mobile
                            </h1>
                            <p className={isActive ? 'h animate-slow active' : 'h animate-slow mb-1'}>
                                We build <b>customized applications</b> from the ground up – whether it’s a <b>web portal </b>for managing workflows or a <b>mobile app</b> for engaging your customers. Every application is designed with your specific functionality in mind to deliver a distinctive user experience.
                            </p>
                        </div>
                        <div className={isActive ? 'col-12 col-md-8 d-flex animate-slow col-md-8' : 'col-12 col-md-6 d-flex animate-slow'}>
                            <div className="image-container me-3">
                                <Image
                                    src="/custom-app-mobile.1.jpg"
                                    layout="fill"
                                    className="image"
                                    alt="AI-Powered Applications Icon"
                                    loading="lazy"
                                    />
                            </div>
                            <div className="image-container">
                                <Image
                                    src="/custom-app-mobile.2.jpg"
                                    layout="fill"
                                    className="image"
                                    alt="AI-Powered Applications Icon"
                                    loading="lazy"
                                    />
                            </div>
                        </div>
                </motion.div>
                <motion.div
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{ duration: 0.7, delay: 0.5}}
                className="row justify-content-between mt-4 py-md-4 px-0 px-md-5 pb-1 bottom-line"
                onClick={webHandleClick}
                onMouseEnter={projectEnter}
                onMouseLeave={projectLeave}
                >
                        <div className="col-md-3 col-12 pt-0">
                            <h1 className="title">
                                Web
                            </h1>
                            <p className={isShow ? 'h animate-slow active' : 'h animate-slow mb-1'}>
                            We build <b>customized applications</b> from the ground up – whether it’s a <b>web portal</b> for managing workflows or a <b>mobile app</b> for engaging your customers.<br/>Every application is designed with your specific functionality in mind to deliver a distinctive user experience.
                            </p>
                        </div>
                        <div className={isShow ? 'col-12 col-md-8 d-flex animate-slow col-md-8' : 'col-12 col-md-6  d-flex animate-slow'}>
                            <div className="image-container me-3">
                                <Image
                                    src="/custom-app-website.1.jpg"
                                    layout="fill"
                                    className="image"
                                    alt="AI-Powered Applications Icon"
                                    loading="lazy"
                                    />
                            </div>
                            <div className="image-container">
                                <Image
                                    src="/custom-app-website.2.jpg"
                                    layout="fill"
                                    className="image"
                                    alt="AI-Powered Applications Icon"
                                    loading="lazy"
                                    />
                            </div>
                        </div>
                </motion.div>
                <motion.div
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{ duration: 0.7, delay: 0.5}}
                className="row justify-content-between mt-4 py-md-4 px-0 px-md-5 pb-1 bottom-line"
                onClick={APIHandleClick}
                onMouseEnter={projectEnter}
                onMouseLeave={projectLeave}
                >
                        <div className="col-md-3 col-12 pt-0">
                            <h1 className="title">
                                APIs
                            </h1>
                            <p className={isAPIShow ? 'h animate-slow active' : 'h animate-slow mb-1'}>
                                We build reliable <b>APIs</b> and <b>middleware</b> that enable seamless integration between your software systems, ensuring <b>secure</b>and <b>efficient</b> data exchange across every department in your organization.
                            </p>
                        </div>
                        <div className={isAPIShow ? 'col-12 col-md-8 d-flex animate-slow col-md-8' : 'col-12 col-md-6  d-flex animate-slow'}>
                            <div className="image-container me-3">
                                <Image
                                    src="/custom-app-API.1.jpg"
                                    layout="fill"
                                    className="image"
                                    alt="AI-Powered Applications Icon"
                                    loading="lazy"
                                    />
                            </div>
                            <div className="image-container">
                                <Image
                                    src="/custom-app-API.2.jpg"
                                    layout="fill"
                                    className="image"
                                    alt="AI-Powered Applications Icon"
                                    loading="lazy"
                                    />
                            </div>
                        </div>
                </motion.div>
                <motion.div
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{ duration: 0.7, delay: 0.5}}
                className="row justify-content-between mt-4 py-md-4 px-0 px-md-5 pb-1 bottom-line"
                onClick={ERPHandleClick}
                onMouseEnter={projectEnter}
                onMouseLeave={projectLeave}
                >
                        <div className="col-md-3 col-12 pt-0">
                            <h1 className="title">
                                ERP Systems
                            </h1>
                            <p className={isERPShow ? 'h animate-slow active' : 'h animate-slow mb-1'}>
                            <b>ERP systems</b> to handle complex operations. All systems are configured to follow your business rules and workflows. The result is an internal system that <b>boosts efficiency</b> by aligning perfectly with your business workflow.
                            </p>
                        </div>
                        <div className={isERPShow ? 'col-12 col-md-8 d-flex animate-slow col-md-8' : 'col-12 col-md-6  d-flex animate-slow'}>
                            <div className="image-container me-3">
                                <Image
                                    src="/custom-app-ERP.1.jpg"
                                    layout="fill"
                                    className="image"
                                    alt="AI-Powered Applications Icon"
                                    loading="lazy"
                                    />
                            </div>
                            <div className="image-container">
                                <Image
                                    src="/custom-app-ERP.2.jpg"
                                    layout="fill"
                                    className="image"
                                    alt="AI-Powered Applications Icon"
                                    loading="lazy"
                                    />
                            </div>
                        </div>
                </motion.div>
                <motion.div
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{ duration: 0.7, delay: 0.5}}
                className="row justify-content-between mt-4 py-md-4 px-0 px-md-5 pb-1 bottom-line"
                onClick={ToolHandleClick}
                onMouseEnter={projectEnter}
                onMouseLeave={projectLeave}
                >
                        <div className="col-md-3 col-12 pt-0 pt-md-0">
                            <h1 className="title">
                                Internal Tools
                            </h1>
                            <p className={isToolShow ? 'h animate-slow active' : 'h animate-slow mb-1'}>
                            <b>Custom dashboards, reporting systems, data analytics platforms,</b> and <b>collaboration tools</b> built specifically for your team. <br/>These internal solutions are designed to replace clunky spreadsheets or patchwork apps with a unified platform.
                            </p>
                        </div>
                        <div className={isToolShow ? 'col-12 col-md-8 d-flex animate-slow' : 'col-12 col-md-6  d-flex animate-slow'}>
                            <div className="image-container me-3">
                                <Image
                                    src="/custom-app-tools.1.jpg"
                                    layout="fill"
                                    className="image"
                                    alt="AI-Powered Applications Icon"
                                    loading="lazy"
                                    />
                            </div>
                            <div className="image-container">
                                <Image
                                    src="/custom-app-tools.2.jpg"
                                    layout="fill"
                                    className="image"
                                    alt="AI-Powered Applications Icon"
                                    loading="lazy"
                                    />
                            </div>
                        </div>
                </motion.div>
            </div>
  </>
  );
}

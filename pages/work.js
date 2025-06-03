import React, { useEffect, useState } from "react"
import Head from 'next/head'
import { useInView } from "react-intersection-observer"
import {useAnimation, motion } from "framer-motion"
import Projects from "../comps/project"



export default function Work() {

	const [selected, setSelected] = useState(0)

    const UpdateToggle = (index) => {
      setSelected(index)
    } 
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);


  return (
    <>
      <Head>
	  	<title>Work</title>
        <link rel="icon" href="favicon.png" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="description" content="Branding Agency Based in Denver and Baghdad"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="branding agency in Denver, branding agency in Baghdad, creative agency in Baghdad, creative agency in Denver" />
      </Head>
      
      <div className="container-fluid design-container pt-5 pt-md-2">
       <Projects/>
     </div>
    </>
  )
}


import React, { useEffect } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from "react-intersection-observer"
import { animate, motion, useAnimation } from "framer-motion"
import Countdown from "react-countdown";

const completedMsg = () => <span>Project is loading</span>

const renderer = ({days, hours, minuts, seconds, completed}) => {
  if (completed) {
    return <completedMsg/>
  } else {
    return (
      <span>
        {days} days and {hours} hours
      </span>
    )
  }
}

export default function Projects() {

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
        <title>Potoo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container-fluid projects-container mw-1450 pt-lg-5 pb-lg-5 mt-md-5">
        <div className="row justify-content-around py-lg-5 my-lg-3">
          <h1 className="waiting-for-projects">
            First project will be posted in <Countdown date={Date.now() + 1996070800} renderer={renderer}/>
          </h1>
        </div>
      </div>
    </>
  )
}


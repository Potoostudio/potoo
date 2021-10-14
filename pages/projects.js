import React, { useEffect } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from "react-intersection-observer"
import { animate, motion, useAnimation } from "framer-motion"
import Countdown from "react-countdown";

const completedMsg = () => <span>Project is loading</span>

const renderer = ({days, hours, minutes, seconds, completed}) => {
  if (completed) {
    return <completedMsg/>
  } else {
    return (
      <span>
        {hours} : {minutes} : {seconds}
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
	  	<title>Potoo Studio | Projects</title>
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="description" content="Potoo Studio | Branding, websites, and design projects"/>
        <meta property="og:title" content="Potoo Studio | Projects, Denver" />
        <meta property="og:description" content="Potoo Studio | Branding, websites, and design projects in Denver"/>
        <meta property="og:url" content="https://potoo.studio/projects" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="container-fluid design-container  mw-1450 pt-lg-0 pb-lg-5 mt-md-5">
		<div className="row row-project-images pt-md-5 mt-md-5 justify-content-center">
			<div className="col-10">
				<p className="work-p">Work</p>
				<ul className="project-list-image-list">
					<li className="item project-image-item">
						<Image
							src="/Potoo-word-logo-no-space.jpg"
							width="470px"
							height="352px"
							alt="project potoo"
						/>
					<Link href="/project-potoo">
						<a className="project-li-link">
					<div className="project-item-overlay">
						<div className="project-item-title">
						Potoo Studio
						</div>
					<Link href="/project-potoo">
						<a className="project-item-link">
						<svg className="link-icon" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125 125"><path className="cls-1" d="M42.2,21.2,78,56.9,24.4,110.4l35.7,35.8,53.6-53.6,35.7,35.7V21.2Z" transform="translate(-24.4 -21.2)"/></svg>
						</a>
					</Link>
					</div>
						</a>
					</Link>
					</li>
				</ul>
				</div>
			</div>
      </div>
    </>
  )
}


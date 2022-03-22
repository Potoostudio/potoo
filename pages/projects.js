import React, { useEffect, useState } from "react"
import Head from 'next/head'
import Link from 'next/link'
import { useInView } from "react-intersection-observer"
import {useAnimation } from "framer-motion"



export default function Projects() {

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
	  	<title>Potoo Studio | Projects</title>
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="description" content="POTOO STUDIO | Branding, websites, and design projects"/>
        <meta property="og:title" content="POTOO STUDIO | Projects, Denver" />
        <meta property="og:description" content="POTOO STUDIO | Branding, websites, and design projects in Denver"/>
        <meta property="og:url" content="https://potoo.studio/projects" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="container-fluid design-container projects-container  mw-1450 pb-lg-5">
		<div className="row row-project-images pt-md-1 justify-content-center">
			<div className="col-12 col-md-10">
				<ul className="list projects-list">
					<li className="item projects-list-item"
					onMouseEnter ={()=> UpdateToggle(1)}
					onMouseLeave ={()=> UpdateToggle('')}>
						<Link href="/projects/project-potoo" >
							<a className="project-item-link">
								<span className="project-item-number">01</span> <p className="project-item-name">Potoo Studio</p>
							</a>
						</Link>
						<video className={`project-item-picture ${selected === 1 ? "active" : ''}`} playsinline="" webkit-playsinline="" autoPlay  loop muted width="100%" height="100%">
							<source src="/Potoo-animation.mp4" type="video/mp4"/>
						</video>
						{/* <iframe
							src="/Potoo-animation.gif"
							width="480px"
							height="446px"
							frameBorder="0"
							className={`project-item-picture ${selected === 1 ? "active" : ''}`}
						/> */}
					</li>
					<li className="item projects-list-item"
						onMouseEnter ={()=> UpdateToggle(2)}
						onMouseLeave ={()=> UpdateToggle('')}>
						<Link href="/projects/project-kish" >
							<a className="project-item-link">
								<span className="project-item-number">02</span> <p className="project-item-name">Kish</p>
							</a>
						</Link>
						<video className={`project-item-picture ${selected === 2 ? "active" : ''}`} playsinline="" webkit-playsinline="" autoPlay loop muted width="100%" height="100%">
							<source src="/kish-animation.mp4" type="video/mp4"/>
						</video>
						{/* <iframe
							src="/Kish-animation.gif"
							width="480px"
							height="446px"
							frameBorder="0"
							className={`project-item-picture ${selected === 2 ? "active" : ''}`}
						/> */}
					</li>
				</ul>
				
				</div>
			</div>
      </div>
    </>
  )
}


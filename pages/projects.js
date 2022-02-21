import React, { useEffect, useState } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from "react-intersection-observer"
import { animate, motion, useAnimation } from "framer-motion"



export default function Projects() {

	const [selected, setSelected] = useState(0)
    const [isActive, setActive] = useState(0);

    const UpdateToggle = (index) => {
      setSelected(index)
      setActive(index)
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
        <meta name="description" content="Potoo Studio | Branding, websites, and design projects"/>
        <meta property="og:title" content="Potoo Studio | Projects, Denver" />
        <meta property="og:description" content="Potoo Studio | Branding, websites, and design projects in Denver"/>
        <meta property="og:url" content="https://potoo.studio/projects" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="container-fluid design-container projects-container  mw-1450 pb-lg-5">
		<div className="row row-project-images pt-md-1 justify-content-center">
			<div className="col-12 col-md-10">
				<ul className="list projects-list">
					<li className="item projects-list-item">
						<Link href="/projects/project-potoo" >
							<a className="project-item-link" 
								onMouseEnter ={()=> UpdateToggle(0)}
								onMouseLeave ={()=> UpdateToggle("")}>
								<span className="project-item-number">01</span> <p className="project-item-name">Potoo Studio</p>
							</a>
						</Link>
						<iframe src="/Potoo-animation.gif" width="480" height="446" frameBorder="0" className={`project-item-picture ${isActive === 0? "active" : ''}`} allowFullScreen></iframe>
					</li>
					<li className="item projects-list-item">
						<Link href="/projects/project-kish" >
							<a className="project-item-link" 
								onMouseEnter ={()=> UpdateToggle(1)}
								onMouseLeave ={()=> UpdateToggle("")}>
								<span className="project-item-number">02</span> <p className="project-item-name">Kish</p>
							</a>
						</Link>
						<iframe src="/Kish-animation.gif" frameBorder="0" className={`project-item-picture ${isActive === 1? "active" : ''}`} allowFullScreen></iframe>
					</li>
				</ul>
				
				</div>
			</div>
      </div>
    </>
  )
}


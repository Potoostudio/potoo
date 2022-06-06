import React, { useEffect, useState } from "react"
import Head from 'next/head'
import Link from 'next/link'
import { useInView } from "react-intersection-observer"
import {useAnimation, motion } from "framer-motion"
import Image from 'next/image'



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
        <meta name="description" content="POTOO STUDIO | Brands, websites, and web design projects in Denver"/>
        <meta property="og:title" content="POTOO STUDIO | Projects, Denver" />
        <meta property="og:description" content="POTOO STUDIO |  Brands, websites, and web design projects in Denver"/>
        <meta property="og:url" content="https://potoo.studio/projects" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="container-fluid projects-container design-container  pb-lg-5 mt-md-0 pt-md-3">
        <div className="row home-page-row-project-images mb-5 mb-md-1 pt-md-5 mt-md-5 justify-content-center">
              <motion.div className="col-10">
                  <ul className="project-list-image-list">
                    <li className="item project-image-item">
                      <Link href="/projects/seedstock">
                        <a className="project-li-link">
                          <Image
                            src="/Seedstock-project-picture.jpg"
                            height="590px"
                            width="444px"
                            alt="Seedstock project image"
                            />
                            <p className="project-title">
                              Seedstock
                            </p>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </motion.div>
            </div>
		{/* <div className="row row-project-images pt-md-1 justify-content-center">
			<div className="col-12 col-md-10">
				<ul className="list projects-list">
					<li className="item projects-list-item"
					onMouseEnter ={()=> UpdateToggle(1)}
					onMouseLeave ={()=> UpdateToggle('')}>
						<Link href="/projects/potoo" >
							<a className="project-item-link">
								<span className="project-item-number">01</span> <p className="project-item-name">Potoo Studio</p>
							</a>
						</Link>
						<video className={`project-item-picture ${selected === 1 ? "active" : ''}`} playsinline="" webkit-playsinline="" autoPlay  loop muted width="100%" height="100%">
							<source src="/Potoo-animation.mp4" type="video/mp4"/>
						</video>
					</li>
					<li className="item projects-list-item"
						onMouseEnter ={()=> UpdateToggle(2)}
						onMouseLeave ={()=> UpdateToggle('')}>
						<Link href="/projects/kish" >
							<a className="project-item-link">
								<span className="project-item-number">02</span> <p className="project-item-name">Kish</p>
							</a>
						</Link>
						<video className={`project-item-picture ${selected === 2 ? "active" : ''}`} playsinline="" webkit-playsinline="" autoPlay loop muted width="100%" height="100%">
							<source src="/kish-animation.mp4" type="video/mp4"/>
						</video>
					</li>
				</ul>
				</div>
			</div> */}
      </div>
    </>
  )
}


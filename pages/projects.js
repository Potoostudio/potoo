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
	  	<title>POTOO STUDIO | Projects</title>
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="description" content="POTOO STUDIO | Brands, websites, and web design projects in Denver"/>
        <meta property="og:title" content="POTOO STUDIO | Projects, Denver" />
        <meta property="og:description" content="POTOO STUDIO |  Brands, websites, and web design projects in Denver"/>
        <meta property="og:url" content="https://potoo.studio/projects" />
        <meta property="og:type" content="website" />
      </Head>
      
      <div className="container-fluid design-container mx-1600">
      <div className="row home-page-row-project-images mb-5 mb-md-1 pt-md-5 mt-md-5 justify-content-center">
          <div className="col-11 ml-md-5">
              <motion.h1 className="work-title luxury-title"
               whileInView= {{letterSpacing: 0}}
               transition={{
                letterSpacing: { duration: 0.8, repeat: 0, delay: 0.3},
               }}
               initial={{letterSpacing: "4rem"}}
               >
                Work
              </motion.h1>
              <ul className="project-list-image-list pt-4 pt-md-5 mt-md-4">
                <motion.li className="item project-image-item full-item"
                whileInView= {{x: 0}}
                transition={{
                 x: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{x: "20px"}}
                >
                  <Link href="/projects/au" className="project-li-link">
                    <div className="image-container">
                      <Image
                          src="/project-hamid.jpg"
                          layout="fill"
                          className="image"
                          alt="Project Hamid"
                          />
                    </div>
                  </Link>
                  <p className="project-title pt-md-4 luxury-title">
                  Abdulhamid <span className="small-text">(Gulf War)</span> <br/><span className="project-info text-normal">Web</span> <span className="project-info float-right text-normal">Awards x4</span>
                  </p>

                </motion.li>
                <motion.li className="item project-image-item third-item"
                 whileInView= {{x: 0}}
                 transition={{
                  x: { duration: 0.8, repeat: 0, delay: 0.2},
                 }}
                 initial={{x: "-20px"}}
                >
                  <Link href="/projects/seedstock" className="project-li-link">
                    <div className="image-container">
                      <Image
                        src="/project-seedstock.jpg"
                        layout='fill'
                        className="image"
                        alt="Seedstock project image"
                        />
                    </div>
                      <p className="project-title text-center luxury-title pt-md-3 pt-2 ml-auto mr-auto">
                          Seedstock <br/><span className="project-info text-normal">Advertising</span>
                      </p>
                  </Link>
                </motion.li>
              </ul>
            </div>
        </div>
     </div>
    </>
  )
}


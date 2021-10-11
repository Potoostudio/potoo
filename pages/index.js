import React, { useEffect, useState } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from "react-intersection-observer"
import { animate, motion, useAnimation } from "framer-motion"
import Parallax from 'react-rellax';


export default function Home() {

  const [isShownPointOne, setPointOneShown] = useState(false);
  const [isShownPointTwo, setPointTwoShown] = useState(false);
  const [isShownPointThree, setPointThreeShown] = useState(false);
  const [isShownPointFour, setPointFourShown] = useState(false);


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
        <title>Potoo Studio</title>
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="description" content="Potoo Studio | creative designs, branding, and website development"/>
        <meta property="og:title" content="Potoo Studio" />
        <meta property="og:description" content="Potoo Studio | creative designs, branding, and website development"/>
        <meta property="og:url" content="https://potoo.studio" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="container-fluid home-page-container mw-1450 pt-lg-5 pb-lg-5 mt-lg-5">
        <div className="row justify-content-around">
          <div className="col-lg-4 col-12 pl-lg-4 pr-lg-0 pt-lg-0 pb-lg-5 pt-3 pb-5 text-center shows-h1-col">
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
              ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7, delay: 0.4
            }}>
            <h1 className="shows-h1">
              Show
            </h1>
            </motion.div>
          </div>
          <div className="col-lg-7 col-12 pl-lg-0 pr-lg-0 mr-lg-0 your-bg">
            <div className="row justify-content-center w-100 h-100">
              <div className="col-lg-12">
                <ul className="homepage-list list">
                  <li className="homepage-item item innovation-li">
                   <motion.div
                    initial={{x : -25, y: 1}}
                    animate={{x: 0, y: 0}}
                   transition={{
                     duration: 1.5,
                     ease: "easeOut",
                     delay: 0.4
                   }}>
                    <h1 className="innovation-h1">
                      Innovation
                    </h1>
                   </motion.div>
                   
                  </li>
                  <li className="homepage-item item authenticity-li">
                    <motion.div
                    initial={{x : 25, y: 1}}
                    animate={{x: 0, y: 0}}
                    transition={{
                      duration: 1.5,
                      ease: "easeOut",
                      delay: 0.4
                    }}
                    >
                    <h3 className="authenticity-h3">
                      Authenticity
                    </h3>
                    </motion.div>
                  </li>
                  <li className="homepage-item item Concept-li">
                    <motion.div
                    initial={{rotate : '90deg'}}
                    animate={{rotate : '0deg'}}
                    transition={{
                      duration: 1.5,
                      ease: "easeOut",
                      delay: 0.4
                    }}
                    >
                    <h4 className="Concept-h4">
                      Concept
                    </h4>

                    </motion.div>
                  </li>
                  <li className="homepage-item item vision-li">
                    <h1 className="vision-h1">
                      Vision
                    </h1>
                  </li>
                  <li className="homepage-item item journey-li">
                    <motion.div
                      initial={{rotate : '-180deg'}}
                      animate={{rotate : '0deg'}}
                      transition={{
                        duration: 1.5,
                        ease: "easeOut",
                        delay: 0.4
                      }} 
                      >
                    <h4 className="journey-h4">
                      Journey
                    </h4>
                    </motion.div>
                  </li>
                  <li className="homepage-item item transparency-li">
                    <h2 className="transparency-h2">
                      Transparency
                    </h2>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
     <div className="container design-container mw-1450">
        <div className="row justify-content-md-start justify-content-end">
          <div className="col-lg-6 col-md-7 col-11 homepage-design-col text-center pl-md-5 ml-md-5 pt-md-0 mt-md-0 pt-5 mt-4">
                <Parallax speed={2} > 
                  <p className="design-p text-left pl-md-2">
                  Potoo is a visionary bird flying
                  over marvelous <span className="red-text">ideas</span> and 
                  <span className="red-text"> <span className="nnovation"></span>nnovations</span>, hosting them on the 
                  web 
                  </p>
                </Parallax>
          </div>
        <div className="row ideas-row justify-content-center">
          <div className="col-md-7 col-12">
            <Parallax speed={1}> 
              <ul className="list ideas-list">
              <Parallax speed={0}>
                <li className="item idea-item item-one">
                  ideas
                </li>
              </Parallax>
                <li className="item idea-item item-two">
                  picture
                </li>
                <li className="item idea-item item-three">
                  impression
                </li>
              </ul>
              </Parallax>
            </div>
            <div className="col-md-3 col-6 pt-md-5 mt-md-5 bird-col">
            <Parallax speed={3}> 
              <Image
                src="/potoo-bird.png"
                height= "730px"
                width= "600"
                alt= "Flying potoo"
              />
              </Parallax>
          </div>
        </div>
     </div>
        <div className="row justify-content-md-end justify-content-mobile-center mw-1190">
          <div className="col-md-11 col-12">
            <Image
            src="/wow.jpg"
            height="445px"
            width="1129px"
            alt="wow"
            />
          </div>
        </div>
        <div className="row justify-content-end mw-1190">
            <div className="col-md-7 col-9 mr-md-5 pr-md-5">
                <h1 className="impression-h1 text-right-mobile">
                  impression<span>,</span>
                </h1>
            </div>
        </div>
        <div className="row justify-content-center pt-md-5 mt-md-5 pt-3 mb-5">
          <div className="col-md-8 col-12">
            <h2 className="impression-is-h2">
              diverse and decidedly different
            </h2>
          </div>
        </div>
     <div className="container-fluid service-container mw-1450 pt-md-5 mt-md-5">
       <div className="row justify-content-start pt-md-5">
         <div className="col-md-8 col-11 mb-md-4 mt-md-5 pl-md-5 ml-md-8r"> 
           <h2 className="create-impression-h2">
             We create impressions by
           </h2>
         </div>
          <div className="col-md-7 col-10">
            <ul className="service-list list">
              <motion.div
                whileHover={{scale: 1.06}}
              >
                  <li className="item service-item" 
                  onMouseEnter ={()=> setPointOneShown(true)}
                  onMouseLeave = {() => setPointOneShown(false)}
                  >
                   <span className="list-icon"></span> Branding
                </li>
              </motion.div>
              <motion.div
                whileHover={{scale: 1.06}}
              >
                <li className="item service-item"
                onMouseEnter = {() => setPointTwoShown(true)}
                onMouseLeave = {() => setPointTwoShown(false)}
                >
                  <span className="list-icon"></span> Web design
                </li>
              </motion.div>
              <motion.div
                whileHover={{scale: 1.06}}
              >
                <li className="item service-item"
                onMouseEnter = {() => setPointThreeShown(true)}
                onMouseLeave = {() => setPointThreeShown(false)}
                >
                  <span className="list-icon"></span> Graphic design
                </li>
              </motion.div>
              <motion.div
                whileHover={{scale: 1.06}}
              >
                <li className="item service-item"
                onMouseEnter = {() => setPointFourShown(true)}
                onMouseLeave = {() => setPointFourShown(false)}
                >
                 <span className="list-icon"></span> Web development
                </li>
              </motion.div>
            </ul>
          </div>
          <div className="col-md-4 col-2">
            <ul className="list service-list-content">
              {isShownPointOne && (
              <li className="item service-list-content-item">
                Looking at branding 
                as a puzzle; putting the 
                pieces together to make 
                the big picture of your 
                brand. “It’s fun!”
              </li>
              )}
              {isShownPointTwo && (
              <li className="item service-list-content-item">
                We spend most of 
                our time in Illustrator 
                making cool, bold designs
              </li>
              )}
              {isShownPointThree && (
              <li className="item service-list-content-item">
                Think of web design
                as writing a inspirational 
                story on a board on the 
                web
              </li>
              )}
              {isShownPointFour && (
              <li className="item service-list-content-item">
                We have Nextjs, React, and 
                Wordpress under our sleeves
                to make perfect pixel websites
              </li>
              )}
            </ul>
          </div>
       </div>
     </div>
     <div className="container-fluid service-container-mobile">
       <div className="row justify-content-start">
       <div className="col-md-6 col-12 mb-4 mt-5 pt-5"> 
           <h2 className="create-impression-h2">
             We create impression by
           </h2>
         </div>
         <div className="col-11 service-1-col">
           <h1 className="service-h1">
              Branding
           </h1>
           <p className="service-p">
              Look at branding 
              as a puzzle; putting the 
              pieces together to make 
              the big picture of your 
              brand. “It’s fun!”
           </p>
         </div>
         <div className="col-11 service-2-col">
           <h1 className="service-h1">
              Web design
           </h1>
           <p className="service-p">
              We spend most of 
              our time in Illustrator 
              making cool, bold designs
           </p>
         </div>
         <div className="col-11 service-3-col">
           <h1 className="service-h1">
              Graphic design
           </h1>
           <p className="service-p">
              Think of web design
              as writing a inspirational 
              story on a board on the 
              web
           </p>
         </div>
         <div className="col-11 service-4-col">
           <h1 className="service-h1">
              Web development
           </h1>
           <p className="service-p">
              We have Nextjs, React, and 
              Wordpress under my sleeves
              to make perfect pixel applications
           </p>
         </div>
       </div>
     </div>
     <div className="container-fluid code-container mw-1450">
         <div className="row justify-content-start">
          <div className="col-md-6 col-11 pt-md-5 mt-md-5 potoo-vision-col ml-md-5">
            <p className="potoo-vision-text">
              Nesting impression on the web
            </p>
          </div>
         </div>
     </div>
     </div>
    </>
  )
}


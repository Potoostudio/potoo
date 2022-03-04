import React, { useEffect, useState } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from "react-intersection-observer"
import { motion, useAnimation, useTransform, useViewportScroll} from "framer-motion"



export default function Home() {

  // const scrollRef = useRef(null);

  const [isShownPointOne, setPointOneShown] = useState(false);
  const [isShownPointTwo, setPointTwoShown] = useState(false);
  const [isShownPointThree, setPointThreeShown] = useState(false);
  const [isShownPointFour, setPointFourShown] = useState(false);

// Delete this code if it doesn't work on animation
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1, 
        transition: { duration: 1 }
      });
      console.log('visibile');
    }
    if (!inView) {
      controls.start({
        x: -200,
        opacity: 0 
      });
      console.log('hidden');
    }
  }, [controls, inView]);

  const sec = {
    visible: {opacity: 1, x: 0, transition: { duration: 1, delay: 0.2}},
    hidden: {opacity: 0, x: -200},
  };

  const {scrollYProgress} = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.3]);
  const color = useTransform(scrollYProgress, [0.64, 1], ['#0A100D', '#EBEBEB'])
  const left = useTransform(scrollYProgress, [0, 1], [-140, 0])
  return (
    <>
      <Head>
        <title>Potoo Studio</title>
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="description" content="POTOO STUDIO | creative designs, branding, and website development"/>
        <meta property="og:title" content="POTOO STUDIO" />
        <meta property="og:description" content="POTOO STUDIO | creative designs, branding, and website development"/>
        <meta property="og:url" content="https://potoo.studio" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="container-fluid home-page-container mw-1450 pb-lg-5">
        <div className="row justify-content-around">
          
          <div className="col-lg-7 col-10 pl-lg-0 pr-lg-0 mr-lg-0 your-bg pt-4 pt-md-0 pr-0">
            <div className="main-page-impression-text-box">
                <h1 className="main-page-impression-text-large">
                  Nesting Impressions
                </h1>
            </div>
          </div>
          <div className="col-lg-1 col-2 p-0">
            <span className="main-page-impression-text-on">on</span>
          </div>
          <div className="col-md-4 col-12 pt-2 pt-md-0">
          <iframe src="/main-potoo-animtaion.gif" frameBorder="0" width="385" height="385"  className='video-sec'/>
          </div>
        </div>
      </div>
     <div className="container-fluid design-container mx-1600">
        <div className="row justify-content-start">
          <div className="col-md-7 col-9 homepage-design-col text-center pl-md-5 ml-md-5 pt-md-0 mt-md-0 pt-2 mt-4">
              <p className="design-p text-left pl-md-2">
              <span className="potoo-cap">Potoo</span>, a visionary bird flying
              over extraordinary <span className="red-text">ideas</span> and 
              <span className="red-text"> <span className="nnovation"></span>innovations</span>, hosting them on the 
              web 
              </p>
          </div>
        </div>
        <div className="row ideas-row justify-content-center">
          <div className="col-md-10 col-9">
            <motion.div className="rellax text-center" data-rellax-speed="4" data-rellax-mobile-speed="2" data-rellax-tablet-speed="2" data-speed-desktop-speed="4"
            style={{scale: scale}}
            >
              <Image 
              src="/ideas-to-impressions.svg"
              height="750px"
              width="1400px"
              alt="ideas-to-impressions"
              />
            </motion.div>
        </div>
        </div>
        <div className="row home-page-row-project-images mb-5 mb-md-1 pt-md-5 mt-md-5 justify-content-center">
          <motion.div className="col-11">
              <p className="work-p">Projects</p>
              <ul className="project-list-image-list">
                <li className="item project-image-item">
                      <Image
                        src="/Potoo-word-logo-no-space.jpg"
                        width="470px"
                        height="352px"
                        alt="project potoo"
                      />
                  <Link href="/projects/project-potoo">
                    <a className="project-li-link">
                  <div className="project-item-overlay">
                    <div className="project-item-title">
                      Potoo Studio
                    </div>
                  <Link href="/projects/project-potoo">
                    <a className="project-item-link">
                    <svg className="link-icon" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125 125"><path className="cls-1" d="M42.2,21.2,78,56.9,24.4,110.4l35.7,35.8,53.6-53.6,35.7,35.7V21.2Z" transform="translate(-24.4 -21.2)"/></svg>
                    </a>
                  </Link>
                  </div>
                    </a>
                  </Link>
                </li>
              </ul>
            </motion.div>
        </div>
     </div>
     <div className="container-fluid service-container mx-1600 pt-md-5 mt-md-5">
       <div className="row justify-content-center pt-md-5">
         <div className="col-md-11 col-10 mb-md-4 mt-md-5 pl-md-5 pl-lg-0"> 
           <h2 className="create-impression-h2">
             We do:
           </h2>
         </div>
          <div className="col-md-7 col-10 pl-lg-0">
            <ul className="service-list list pl-lg-0">
              <motion.div
                whileHover={{scale: 1.04}}
              >
                  <li className="item service-item" 
                  onMouseEnter ={()=> setPointOneShown(true)}
                  onMouseLeave = {() => setPointOneShown(false)}
                  >
                   <span className="list-icon"></span> Branding
                </li>
              </motion.div>
              <motion.div
                whileHover={{scale: 1.04}}
              >
                <li className="item service-item"
                onMouseEnter = {() => setPointTwoShown(true)}
                onMouseLeave = {() => setPointTwoShown(false)}
                >
                  <span className="list-icon"></span> Web design
                </li>
              </motion.div>
              <motion.div
                whileHover={{scale: 1.04}}
              >
                <li className="item service-item"
                onMouseEnter = {() => setPointThreeShown(true)}
                onMouseLeave = {() => setPointThreeShown(false)}
                >
                  <span className="list-icon"></span> Graphic design
                </li>
              </motion.div>
              <motion.div
                whileHover={{scale: 1.04}}
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
                Think of web design
                as writing your inspirational 
                story on a board on the 
                web
              </li>
              )}
              {isShownPointThree && (
              <li className="item service-list-content-item">
                We spend most of 
                our time in Illustrator 
                making cool, bold designs
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
     <div className="container service-container-mobile pt-5">
       <div className="row justify-content-center">
         <div className="col-11 service-1-col service-mobile-col">
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
         <div className="col-11 service-2-col service-mobile-col">
           <h1 className="service-h1">
              Web design
           </h1>
           <p className="service-p">
              Think of web design
              as writing a inspirational 
              story on a board on the 
              web
           </p>
         </div>
         <div className="col-11 service-3-col service-mobile-col">
            <h1 className="service-h1">
              Graphic design
           </h1>
           <p className="service-p">
              We spend most of 
              our time in Illustrator 
              making cool, bold designs
           </p>
         </div>
         <div className="col-11 service-4-col service-mobile-col">
           <h1 className="service-h1">
              Web development
           </h1>
           <p className="service-p">
              We have Nextjs, React, and 
              Wordpress under our sleeves
              to make perfect pixel applications
           </p>
         </div>
       </div>
     </div>
     <div className="container-fluid code-container mw-1450">
         <motion.div style={{scale: scale}} className="row justify-content-center justify-content-md-center">
          <div className="col-md-10 col-10 pt-md-5 mt-md-5 potoo-vision-col ml-md-5">
            <motion.p style={{ color }} className="potoo-vision-text">
              Articulated Impressions
            </motion.p>
          </div>
         </motion.div>
     </div>
    </>
  )
}


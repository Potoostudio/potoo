import React, { useEffect, useState } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from "react-intersection-observer"
import { motion, useAnimation, useTransform, useViewportScroll} from "framer-motion"



export default function Home() {


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
  return (
    <>
      <Head>
        <title>POTOO STUDIO</title>
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="description" content="POTOO STUDIO | A creative Studio specializes in branding, web design, and website development"/>
        <meta property="og:title" content="POTOO STUDIO" />
        <meta property="og:description" content="POTOO STUDIO | creative designs, branding, and website development"/>
        <meta property="og:url" content="https://potoo.studio" />
        <meta property="og:type" content="website" />
        <meta name="format-detection" content="telephone=no"></meta>
      </Head>
      <div className="container-fluid home-page-container mx-0 pb-lg-5">
        <div className="row justify-content-center">
          <div className="col-md-12 col-12 pl-lg-0 pr-lg-0 mr-lg-0 your-bg pt-4 pt-md-0 pt-5 pr-0 pl-0">
            <ul className="fixed-menu">
              <li className="item">
                <Link href="/about">
                  <a className="nav-a">
                    Studio
                  </a>
                </Link>
              </li>
              <li className="item">
                <Link href="/projects">
                  <a className="nav-a">
                    Work
                  </a>
                </Link>
              </li>
            </ul>
            <div className="main-page-impression-text-box py-5 my-4 py-md-0 my-md-0">
                <h1 className="main-page-impression-text-large mt-lg-5 pt-lg-4">
                  Nesting Impressions <br/> on <strong className="color">Paper</strong> and <strong className="color">Screen</strong>
                </h1>
            </div>
          </div>
          {/* <div className=" col-md-3-custom-30p col-12 pt-2 pt-md-0">
            <video className="video" playsinline="" webkit-playsinline="" autoPlay loop muted width="100%" height="100%">
              <source src="/main-potoo-animtaion.mp4" type="video/mp4"/>
             </video>
          </div> */}
        </div>
      </div>
     <div className="container-fluid design-container mx-1600">
        <div className="row justify-content-start pt-md-5 pt-0 mt-md-4 mt-0">
          <div className="col-md-7 col-9 homepage-design-col text-center pl-md-5 ml-md-5 pt-md-0 mt-md-0 pt-5 mt-5">
              <p className="design-p text-left pl-md-2 pt-md-0 pt-5">
                <span className="potoo-cap">Potoo</span>, a visionary bird flying
                 over <strong>ideas</strong> and
                 <strong> innovations</strong>, nesting them on the web
              </p>
          </div>
        </div>
        <div className="row home-page-row-project-images mb-5 mb-md-1 pt-md-5 mt-md-5 justify-content-center">
          <div className="col-12 col-md-10">
            <div className="work-grid-two">
              <h1 className="work-title">
                Work
              </h1>
              <p className="normal work-text">
              Every project is an opportunity to present clients' inspiring stories and show what we have been learning
              </p>
            </div>
              <ul className="project-list-image-list pt-4 pt-md-5 mt-md-4">
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
            </div>
        </div>
     </div>
     <div className="container-fluid service-container mx-1600 mt-md-5">
        <div className="row justify-content-md-around justify-content-sm-start pt-md-5 px-lg-5">
            <div className="col-lg-5 col-md-5 col-11 px-lg-5 mb-lg-5 col-h">
              <h1 className="service-custom-h1">
                branding
              </h1>
              <ul className="service-item-ul">
                <li className="item">
                  Strategy
                </li>
                <li className="item">
                  Identity
                </li>
                <li className="item">
                  Guidelines
                </li>
                <li className="item">
                  Logo
                </li>
              </ul>
              <p className="service-p">
                Branding to us, is the art of
                making an impression of an
                idea or a product. Starting
                with the brand strategy and
                identity, we delicately choose
                what characterizes your brand,
                from a custom logo to colors
                and typeface.
              </p>
              <Link href="mailto:ideas@potoo.studio?subject=Brand Strategy">
                <a className="service-a-link first"> work with us</a>
              </Link>
            </div>
            <div className="col-lg-5 col-md-5 col-11 px-lg-5 mb-lg-5 col-h">
              <h1 className="service-custom-h1">
                Web Design
              </h1>
              <ul className="service-item-ul">
                <li className="item">
                  Responsive
                </li>
                <li className="item">
                  Prototypes
                </li>
              </ul>
              <p className="service-p">
                We design your website to translate 
                your brand identity seamlessly 
                through different screen sizes.
                We create prototypes to show
                how your website will look on 
                the web before we get to the 
                development stage.
              </p>
              <Link href="mailto:ideas@potoo.studio?subject=Web Design">
                <a className="service-a-link second"> work with us</a>
              </Link>
            </div>
            <div className="col-lg-5 col-md-5 col-11 px-lg-5 mt-lg-5 col-h">
              <h1 className="service-custom-h1 mt-md-5 mt-0">
                Graphic Design
              </h1>
              <ul className="service-item-ul">
                <li className="item">
                  Social Media
                </li>
                <li className="item">
                  Posters
                </li>
                <li className="item">
                  Banners
                </li>
              </ul>
              <p className="service-p">
                We personalize your brand with custom
                graphics for your social media
                accounts and paper prints.
              </p>
              <Link href="mailto:ideas@potoo.studio?subject=Graphics">
                <a className="service-a-link third"> work with us</a>
              </Link>
            </div>
            <div className="col-lg-5 col-md-5 col-11 px-lg-5 mt-lg-5 col-h">
              <h1 className="service-custom-h1 mt-md-5 mt-0">
                Web development
              </h1>
              <ul className="service-item-ul">
                <li className="item">
                SEO
                </li>
                <li className="item">
                  Accessibility
                </li>
                <li className="item">
                  Mobile Responsive
                </li>
              </ul>
              <p className="service-p">
                We code your website pixel by pixel
                to fit on all screens and operate seamlessly
                on all browsers.
              </p>
              <Link href="mailto:ideas@potoo.studio?subject=Website Development">
                <a className="service-a-link fourth"> work with us</a>
              </Link>
            </div>
        </div>
      </div>
    </>
  )
}


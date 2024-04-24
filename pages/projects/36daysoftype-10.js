import React from "react"
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Projects() {
      

  return (
    <>
      <Head>
	  	<title>36 Days of Type (10) </title>
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="description" content="POTOO STUDIO Project 36 Days of Type 10 | Type, Font Design"/>
        <meta property="og:title" content="36 Days of Type (10)" />
        <meta property="og:description" content="POTOO STUDIO project | 36 Days of Type 10 | Type, Font Design"/>
        <meta property="og:url" content="https://potoo.studio/36daysoftype-10" />
        <meta property="og:type" content="website" />
      </Head>


      <div className="container-fluid pt-5 mt-md-5">
          <div className="row project-row justify-content-md-start justify-content-center pb-md-5 pt-5 pt-md-0 mt-5 mt-md-5 pb-5 pb-md-0 px-md-5">
            <motion.div className="col-md-2 col-5"
            whileInView= {{y: 0}}
            viewport={{ once: true }}
            transition={{
            y: { duration: 0.8, repeat: 0, delay: 0.2, ease: "easeOut"},
            }}
            initial={{y: "25px"}}>
                <div className="image-container">
                    <Image
                        src="/36daysoftype-3.svg"
                        layout="fill"
                        className="image"
                        alt= "36 days of type 3"/>
                </div>
            </motion.div>
            
          </div>
          <motion.div className="row project-row justify-content-md-end pb-md-5 pt-5 pt-md-0 mt-5 mt-md-5 pb-5 pb-md-0 px-md-5"
            whileInView= {{y: 0}}
            viewport={{ once: true }}
            transition={{
            y: { duration: 0.8, repeat: 0, delay: 0.2},
          }}
          initial={{y: "25px"}}>
            <div className="col-md-3 col-10">
               <p className="project-title">
                   <span className="color-secondary">Type:</span> Typography
               </p>
            </div>
            <div className="col-md-3 col-10">
               <p className="project-title">
                   <span className="color-secondary">Components:</span> Digital Design
               </p>
            </div>
          </motion.div>

          <div className="row project-row justify-content-md-center pb-md-5 pt-6rem pt-lg-8rem mt-5 mt-md-5 pb-5 pb-md-5 px-md-5 px-0">
            <div className="col-md-3 col-11">
                <motion.h3 className="luxury-title text-capitalize text-md-right"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    36 Days of Type
                </motion.h3>
            </div>
            <div className="col-md-5 col-11 pt-2 pt-md-0">
                <motion.p className="normal-text"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.25}}>
                    This 36 days of type challenge is inspired by the oldest
                    system of writing first developed by the ancient <strong>Sumerians </strong>
                    of <strong>Mesopotamia </strong>c. <em>3500 BCE</em> “<strong>Cuneiform</strong>” and the display
                    serif font <strong>Chapman</strong>.
                </motion.p>
                
                <div className="image-container pt-md-5 pt-4 w-25">
                    <Image
                        src="/Cuneiform-Chapman.svg"
                        layout="fill"
                        className="image"
                        alt= "36 days of type z"/>
                </div>
            </div>
          </div>
          <div className="row project-row justify-content-center pb-md-5 pt-6rem pt-lg-8rem mt-5 mt-md-5 pb-5 pb-md-0 px-md-5 px-0">
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Letter_A.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Letter_B.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Letter_C.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Letter_D.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Letter_E.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Letter_F.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Letter_G.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Letter_H.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Letter_I.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Letter_J.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Letter_K.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Letter_L.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Letter_M.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Letter_N.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Letter_O.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Letter_P.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Letter_Q.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Letter_R.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Letter_S.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Letter_T.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Letter_U.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Letter_V.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Letter_W.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Letter_X.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Letter_Y.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Letter_Z.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Number_0.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Number_1.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Number_2.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Number_3.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Number_4.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Number_5.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Number_6.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Number_7.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Number_8.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
            <div className="col-md-3 col-12 pt-4 mt-2">
                <motion.div className="image-container"
                whileInView= {{opacity: 1}}
                viewport={{ once: true }}
                transition={{
                opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                }}
                initial={{opacity: 0.3}}>
                    <Image
                        src="/Number_9.jpg"
                        layout="fill"
                        className="image"
                        alt= "Jaeger Aeration Logo"/>
                </motion.div>
            </div>
        </div>
        <div className="row project-row justify-content-center pb-md-5 pt-6rem pt-lg-8rem mt-5 mt-md-5 pb-5 pb-md-5 px-md-5 px-0">
            <div className="col-md-6 col-11 bg-orange px-0">
                <video className="video- p-md-5 p-3" playsinline="" webkit-playsinline="" autoPlay loop muted width="100%" height="100%">
                        <source src="/36daysoftype-web.mp4" type="video/mp4"/>
                </video>
            </div>
        </div>
      </div>

    </>
  )
}


import React, { useEffect } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Projects() {



  return (
    <>
      <Head>
	  	<title>Journal | unkerned vs hand-kerned</title>
        <link rel="icon" href="favicon.png" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="description" content="Journal | unkerned vs hand-kerned"/>
        <meta property="og:title" content="Journal | unkerned vs hand-kerned" />
        <meta property="og:description" content="Journal | unkerned vs hand-kerned"/>
        <meta property="og:url" content="https://potoo.studio/journal/unkerned-vs-hand-kerned"/>
        <meta property="og:type" content="website" />
      </Head>
      
      <div className="container-fluid pt-8x bg-white">
          <div className="row project-row justify-content-start pb-md-0 pt-0 mt-0 mt-md-5 pb-0 px-md-5 px-3 color-dark">
            <motion.div className="col-12 col-10 px-0"
            whileInView= {{y: 0}}
            viewport={{ once: true }}
            transition={{
            y: { duration: 0.8, repeat: 0, delay: 0.2},
            }}
            initial={{y: "25px"}}>
                <h6 className="title color-darker">
                  Insight
                </h6>
            </motion.div>
          </div>
          <motion.div className="row project-row justify-content-center pb-md-5 pt-4 pt-md-0 mt-2x pb-0 px-md-5"
          whileInView= {{y: 0}}
          viewport={{ once: true }}
          transition={{
          y: { duration: 0.8, repeat: 0, delay: 0.2},
          }}
            initial={{y: "25px"}}>
              <div className="col-md-10 col-12">
                <h1 className=" color-dark text-left">
                 An unkerned Baghdad vs a hand-kerned Baghdad
                </h1>
                <ul className="list list-style-none pt-2 pt-md-0 px-0 journal-list pt-md-2">
                  <li className="item color-darker ">
                    Typography
                  </li>
                  <li className="item color-darker ml-md-4 ps-2 ps-md-0">
                    Kerning
                  </li>
                  <li className="item color-darker ml-md-4 ps-2 ps-md-0">
                    Logos
                  </li>
                </ul>
            </div>
          </motion.div>
          <div className="row justify-content-right px-md-5 border-bottom">
            <div className="col-12 px-3">
              <h6 className="title luxury-title color-darker text-right pb-4">
                12.8.24
              </h6>
            </div>
          </div>
          <div className="row project-row justify-content-md-center pb-md-5 mt-md-5 pb-5 pb-md-0 px-md-5 px-0">
            <div className="col-md-10 col-12">
                <motion.div className="image-container pt-4"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/unkerned-vs-kerned.jpg"
                        layout="fill"
                        className="image"
                        alt= "unkerned-vs-kerned"/>
                </motion.div>
                <motion.p className="luxury-title text-left text-dark font-medium "
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    I have been in Baghdad for approximately three months, and while traveling around, I have noticed several businesses, including universities, using the word “BAGHDAD.”<br/> <br/>
                </motion.p>
                <motion.p className="luxury-title text-left text-dark font-medium border-bottom pb-4"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    Most businesses write BAGHDAD in serif fonts almost always using Times New Roman, and up to now, I noticed they all have left the word to the automatic kerning as set by the program.<br/>
                </motion.p>
                <motion.div className="image-container pt-4"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/unkerned-baghdad.jpg"
                        layout="fill"
                        className="image"
                        alt= "unkerned-baghdad"/>
                </motion.div>
                <motion.p className="luxury-title text-left text-dark font-medium border-bottom pb-4"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                   The issue with the unkerned BAGHDAD is that the letters “GHD” look tighter, which makes the loose ones, in this case, the letters BA and AD stick out.
                </motion.p>
                <motion.div className="image-container pt-4"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/unkerned-with-lines.jpg"
                        layout="fill"
                        className="image"
                        alt= "unkerned-with-lines"/>
                </motion.div>
                <motion.p className="luxury-title text-left text-dark font-medium border-bottom pb-4"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                  Visually, it splits the word BAGHDAD into three parts, BA, GHD, and AD.BA and AD being the loose parts, and BHD being the tighter part.
                </motion.p>
                <motion.p className="luxury-title text-left text-dark font-medium pt-5 border-bottom pb-4"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                  Usually, kerning values are negative numbers, meaning that the characters in question should have the space between them reduced. But in this case, some of the values are positive pushing certain pairs of characters further apart.
                </motion.p>
                <motion.h1 className="luxury-title text-left text-dark font-medium pt-5 mt-5"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                  Starting with the letter B, the kern is set to a negative value to reduce the white space the top of the letter A creates and to pull the hairline of the letter A, closer to the bowl of the letter B.
                  The kerning of the letter B is set to -65.
                </motion.h1>
                <motion.div className="image-container pt-0 border-bottom pb-4"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Baghdad-hand-kerned-B.jpg"
                        layout="fill"
                        className="image"
                        alt= "Baghdad-hand-kerned-B"/>
                </motion.div>
                <motion.h1 className="luxury-title text-left text-dark font-medium pt-5 mt-5"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                  The kern of the letter A is also set to a negative value to allow pulling the bowl of the letter G closer to the serif of the letter A.
                  The kerning of the letter A is set to -50.
                </motion.h1>
                <motion.div className="image-container pt-0 border-bottom pb-4"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Baghdad-hand-kerned-A.jpg"
                        layout="fill"
                        className="image"
                        alt= "Baghdad-hand-kerned-A"/>
                </motion.div>
                <motion.h1 className="luxury-title text-left text-dark font-medium pt-5 mt-5"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                  The letter G has a positive kern to create a white space next to the letter H. The kerning of the letter G is set to 10.
                </motion.h1>
                <motion.div className="image-container pt-0 border-bottom pb-4"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Baghdad-hand-kerned-G.jpg"
                        layout="fill"
                        className="image"
                        alt= "Baghdad-hand-kerned-G"/>
                </motion.div>
                <motion.h1 className="luxury-title text-left text-dark font-medium pt-5 mt-5"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                  The letter H has the largest value of positive kerning to avoid a ligature with the serif of the letter D. The positive kern provides harmony between the rest of the letters.
                  The kerning of the letter H is set to 55.
                </motion.h1>
                <motion.div className="image-container pt-0 border-bottom pb-4"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Baghdad-hand-kerned-H.jpg"
                        layout="fill"
                        className="image"
                        alt= "Baghdad-hand-kerned-H"/>
                </motion.div>
                <motion.h1 className="luxury-title text-left text-dark font-medium pt-5 mt-5"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                  The letter D has an equal negative kerning to the letter B since both letters need to pull the hairline of the letter A closer to their bowls.
                  The kerning of the letter D is set to -65.
                </motion.h1>
                <motion.div className="image-container pt-0 border-bottom pb-4"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Baghdad-hand-kerned-D.jpg"
                        layout="fill"
                        className="image"
                        alt= "Baghdad-hand-kerned-D"/>
                </motion.div>
                <motion.h1 className="luxury-title text-left text-dark font-medium pt-5 mt-5"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                  Lastly, the letter A is designed with a positive kerning to avoid a ligature with the serif of the letter D and to create enough white space to prevent a visual ligature in the case of zooming out.
                  The kerning of the letter A is set to 10.
                </motion.h1>
                <motion.div className="image-container pt-0 border-bottom pb-4"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/Baghdad-hand-kerned-2A.jpg"
                        layout="fill"
                        className="image"
                        alt= "Baghdad-hand-kerned-2A"/>
                </motion.div>
                <motion.p className="luxury-title text-left text-dark font-medium pt-5 mt-5 pb-5 mb-8x"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                  This kerning is designed for a serif font family in this case, Times New Roman. Of course, every font family requires a different hand-kerning to work with its serifs, shapes, and curves.
                </motion.p>
                <motion.div className="image-container pt-0 border-bottom pb-4"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/hand-kerned-with-values.jpg"
                        layout="fill"
                        className="image"
                        alt= "hand-kerned-with-values"/>
                </motion.div>
                <motion.div className="image-container pt-0 \\"
                  whileInView= {{opacity: 1}}
                  viewport={{ once: true }}
                  transition={{
                  opacity: { duration: 0.8, repeat: 0, delay: 0.2},
                  }}
                  initial={{opacity: 0.3}}>
                    <Image
                        src="/hand-kerned-with-no-values.jpg"
                        layout="fill"
                        className="image"
                        alt= "hand-kerned-with-no-values"/>
                </motion.div>
            </div>
          </div>
      </div>
    </>
  )
}


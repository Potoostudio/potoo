import React, { useRef, useEffect } from "react"
import Head from 'next/head'
import Image from 'next/image'
import { motion} from "framer-motion"

function Studio() {

    return (
      <>
        <Head>
          <title>POTOO STUDIO | Branding Studio</title>
          <link rel="icon" href="favicon.ico" />
          <link rel="manifest" href="/manifest.json"/>
          <meta name="description" content="POTOO STUDIO | A Branding Studio Based In Denver"/>
          <meta property="og:title" content="POTOO STUDIO | Studio" />
          <meta property="og:description" content="POTOO STUDIO | A Branding Studio Based In Denver"/>
          <meta property="og:url" content="https://potoo.studio/studio" />
          <meta property="og:type" content="website" />
        </Head>


        <div className="container-fluid pt-5 mt-5">
            <div className="row pt-md-5 mt-5 py-md-5 px-4 px-md-5">
                <div className="col-12 px-0 py-md-5 mt-5">
                    <h1 className="luxury-title font-large text-md-center text-left text-capitalize">
                        We are A branding studio based in Denver
                    </h1>
                </div>
            </div>
            <motion.div className="row justify-content-between pt-5 px-4 px-md-5 mt-5"
            initial={{y: 0}}
            animate={{y: -20}}
            viewport={{ once: true }}
            transition={{
              y: { duration: 1, delay: 0.4},
            }}>
                <div className="col-12 text-center px-0 pt-md-0 pt-5 mt-md-0 mt-5">
                    <h6 className="color-secondary">With minimalist design as the core of our studio,</h6>
                </div>
                <div className="col-md-12 px-0 pb-5 mb-5 pt-2">
                    <h5 className="luxury-title text-center text-white line-before-after">we specialize in</h5>
                </div>
                <div className="col-md-5 col-12 pt-md-0 pt-4 px-0">
                    <h3 className="text-white font-weight-bold">
                        Brand strategy
                    </h3>
                </div>
                <div className="col-md-5 col-12 text-left px-0">
                     <p className="color-secondary">
                        Brand strategy is what shapes the brand.
                        It identifies what a brand stands for, and the way it will connect to
                        customers.
                    </p>
                </div>
                <div className="col-md-5 col-12  pt-md-5 mt-4 pt-3 px-0 ">
                    <h3 className="text-white font-weight-bold">
                        Naming
                    </h3>
                </div>
                <div className="col-md-5 col-12 text-left px-0 pt-md-5 mt-md-4">
                    <p className="color-secondary">
                        You might have a name for a business but don’t want to buy the
                        expensive domain name. We help startups come up with unique
                        names with affordable domain names.
                    </p>
                </div>
                <div className="col-md-5 col-12 pt-md-5 mt-5 pt-3 px-0">
                    <h3 className="text-white font-weight-bold">
                        Brand Identity
                    </h3>
                </div>
                <div className="col-md-5 col-12 text-left px-0 pt-md-5 mt-md-4">
                    <p className="color-secondary">
                        This is what makes a brand stand out from others. It contains all
                        the elements used to make a brand, and the guidelines to use
                        each one of them.
                    </p>
                </div>
                <div className="col-md-5 col-12 pt-md-5 mt-5 pt-3 px-0">
                    <h3 className="text-white font-weight-bold">
                        Design
                    </h3>
                </div>
                <div className="col-md-5 col-12 text-left px-0 pt-md-5 mt-md-4">
                    <p className="color-secondary">
                        We focus on Brand Strategy and Brand Identity when designing
                        for paper or screen. Our objective is to display the business
                        with a <span className="font-italic">minimalist</span>, <span className="font-italic">elegant design</span>.
                    </p>
                </div>
                <div className="col-md-5 col-12 pt-md-5 mt-5 pt-3 px-0">
                    <h3 className="text-white font-weight-bold">
                        Web Development
                    </h3>
                </div>
                <div className="col-md-5 col-12 text-left px-0 pt-md-5 mt-md-4">
                    <p className="color-secondary">
                        This is when we turn into night owls and show the POTOO in us.
                        We create websites with a seamless experience on mobile and
                        large screens with a focus on <span className="font-italic">SEO</span>, <span className="font-italic">functionality</span>, and <span className="font-italic">usability</span>.
                    </p>
                </div>
            </motion.div>
        </div>
      </>
    );
  }

export default Studio;


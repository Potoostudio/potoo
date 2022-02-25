import React, { useRef, useEffect,useState, Component } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from "react-intersection-observer"
import { animate, motion, useAnimation } from "framer-motion"
import Parallax from 'react-rellax';
import PototImage from "../public/potoo-bird.jpg";


function Design() {

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
      setActive(!isActive);
    };
        return (
          <>
            <Head>
              <title>Potoo Studio | Design</title>
              <link rel="icon" href="favicon.ico" />
              <link rel="manifest" href="/manifest.json"/>
              <meta name="description" content="POTOO STUDIO | creative logos, brand, webpages, and brochures"/>
              <meta property="og:title" content="POTOO STUDIO | About" />
              <meta property="og:description" content="POTOO STUDIO | creative logos, brand, webpages, and brochures"/>
              <meta property="og:url" content="https://potoo.studio/about" />
              <meta property="og:type" content="website" />
            </Head>
            
            
            <div className="container about-container pt-5 pt-md-0">
              <div className="row justify-content-start">
                  <div className="col-md-12 col-11">
                    <h1 className="we-are-potoo-h1">
                      we <span className="we-are-potoo-h1-are">are</span> <span className="we-are-potoo-h1-potoo">potoo</span>
                    </h1>
                  </div>
              </div>  
              <div className="row we-are-row justify-content-start">
                <div className="col-md-7 col-10">
                  <h3 className="we-are-h3">
                    We are a creative design studio established in 2021
                  </h3>
                </div>
              </div>
              <div className="row justify-content-center logo-concept-row">
                <div className="col-md-10 col-lg-9 col-11">
                  <h1 className="logo-concept-h1">
                    The concept of our logo
                  </h1>
                  <div className="logo-concept-box">
                    <div className="logo-concept-box-image">
                      <Image
                        src="/logo-192x192.png"
                        width="100%"
                        height="110px"
                        alt="potoo logo"
                      />
                    </div>
                    <div className="logo-concept-box-content">
                      <ul className="list">
                        <li className="item">
                          Huge eyes are capable of spotting impressions 
                        </li>
                        <li className="item">
                          A wide and gaping mouth to display extraordinary reactions
                        </li>
                        <li className="item">
                            Original picture <span className="logo-concept-box-pic-link" onClick={toggleClass}> Here</span> 
                        </li>
                        <li className={isActive ? 'item potoo-bird active': 'item potoo-bird'}>
                          <Image 
                            src="/potoo-bird.jpg"
                            height="700px"
                            width="500px"
                            alt= "potoo bird"
                            className="potoo-bird-picture"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-start content-row">
                <div className="col-11 col-md-4">
                  <p className="normal-p">
                    We like to break the law of the usual and go beyond the ordinary to create impressions
                  </p>
                  <p className="normal-p">
                    Impressions over job done, we remember the concept of our logo and consider impressions with every project we take
                  </p>
                </div>
              </div>
            </div>
          </>
        );
    }

export default Design;


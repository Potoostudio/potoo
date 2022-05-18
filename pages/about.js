import React, { useRef, useEffect } from "react"
import Head from 'next/head'



function Design() {

    return (
      <>
        <Head>
          <title>Potoo Studio | Design</title>
          <link rel="icon" href="favicon.ico" />
          <link rel="manifest" href="/manifest.json"/>
          <meta name="description" content="POTOO STUDIO | We are a creative web studio in Denver Colorado"/>
          <meta property="og:title" content="POTOO STUDIO | About" />
          <meta property="og:description" content="POTOO STUDIO | We are a creative web studio in Denver Colorado"/>
          <meta property="og:url" content="https://potoo.studio/about" />
          <meta property="og:type" content="website" />
        </Head>


        <div className="container about-container pt-5 pt-md-5 px-4 px-md-0">
          <div className="row justify-content-start">
              <div className="col-md-12 col-11">
                <h1 className="we-are-potoo-h1">
                  We <span className="we-are-potoo-h1-are">are</span> <span className="we-are-potoo-h1-potoo">potoo</span>
                </h1>
              </div>
          </div>
          <div className="row we-are-row justify-content-start">
            <div className="col-md-11 col-11">
              <h3 className="we-are-h3">
                We are a Denver based creative design studio
              </h3>
            </div>
          </div>
          <div className="row justify-content-start logo-concept-row">
            <div className="col-md-11 col-11">
              <h1 className="logo-concept-h1">
                The concept of our logo
              </h1>
              <div className="logo-concept-box">
                <div className="logo-concept-box-content">
                  <ul className="list pt-md-3 pt-0">
                    <li className="item">
                      Huge eyes are capable of spotting impressions
                    </li>
                    <li className="item">
                      A wide and gaping mouth to display extraordinary reactions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-start content-row">
            <div className="col-11 col-md-11 d-lg-flex">
              <p className="normal-p pl-0">
                We have no interest in rubbish work. We create unique images for brands
              </p>
              <p className="normal-p pl-0">
                We remember the concept of our logo and consider impressions with every project we take
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

export default Design;


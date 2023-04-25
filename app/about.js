import React, { useRef, useEffect } from "react"
import Head from 'next/head'


function Design() {

    return (
      <>
        <Head>
          <title>POTOO STUDIO | Design</title>
          <link rel="icon" href="favicon.ico" />
          <link rel="manifest" href="/manifest.json"/>
          <meta name="description" content="POTOO STUDIO | We are a creative web studio in Denver Colorado"/>
          <meta property="og:title" content="POTOO STUDIO | About" />
          <meta property="og:description" content="POTOO STUDIO | We are a creative web studio in Denver Colorado"/>
          <meta property="og:url" content="https://potoo.studio/about" />
          <meta property="og:type" content="website" />
        </Head>


        <div className="container about-container pt-5 pt-md-5 px-4 px-md-0 pb-md-5 mb-md-5">
          <div className="row justify-content-start">
              <div className="col-md-12 col-12 pt-2 mt-2">
                <h6 className="about-sec-title luxury-title">
                  we are potoo
                </h6>
                <div className="about-grid-two pt-md-4 pt-3">
                 <h5>
                    We are a Denver based creative studio.
                 </h5>
                    <p className="normal-p pt-4 pt-md-0">
                      We make impressions that connect brands to
                      clients. Our route to make an impression starts
                      with getting to know your brand and the target
                      market, then we design your digital brand and
                      presents it with digital / printed content and a
                      website.
                    </p>
                </div>
              </div>
          </div>

          <div className="row justify-content-start pt-5 mt-5 ">
            <div className="col-md-12 col-12 pt-5 mt-2">
                <h6 className="about-sec-title luxury-title">
                  The concept of our logo / mission
                </h6>
                <div className="pt-md-4 pt-5">
                    <ul className="list pt-md-3 pt-0 pl-0">
                      <li className="item normal-p">
                        Huge eyes are capable of spotting impressions
                      </li>
                      <li className="item pt-3 normal-p">
                        A wide and gaping mouth to display extraordinary reactions
                      </li>
                    </ul>
                </div>
            </div>
          </div>
          <div className="row justify-content-start pt-5 mt-5 pb-md-5 mb-md-5">
            <div className="col-md-12 col-12 pt-5 mt-5">
              <h6 className="about-sec-title luxury-title">
                What we do
              </h6>
              <ul className="we-do-list pt-md-5 mt-md-5">
                  <li className="we-do-item pt-2">
                    Brand Strategy
                  </li>
                  <li className="we-do-item pt-2">
                    Naming
                  </li>
                  <li className="we-do-item pt-2">
                    Identity Systems
                  </li>
                  <li className="we-do-item mt-5 pt-2">
                    Brand Guidelines
                  </li>
                  <li className="we-do-item mt-5 pt-2">
                    Web Design
                  </li>
                  <li className="we-do-item mt-5 pt-2">
                    Web Development
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </>
    );
  }

export default Design;


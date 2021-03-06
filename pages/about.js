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
                <h6 className="about-sec-title">
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
            <div className="col-md-12 col-12 pt-5 mt-5">
                <h6 className="about-sec-title">
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
              <h6 className="about-sec-title">
                What we do
              </h6>
                <div className="about-grid-two about-grid-two-45 pt-md-5 mt-md-4 pt-5 mt-4">
                  <h4 className="text-uppercase font-1n2rem">
                    Research
                  </h4>
                  <ul className="list pt-0 pl-0">
                    <li className="item text-upper-case normal-p">
                     Brand Research
                    </li>
                    <li className="item text-upper-case pt-md-3 normal-p">
                      Market Research
                    </li>
                  </ul>
                </div>
                <div className="about-grid-two about-grid-two-45 pt-md-5 mt-md-5 pt-4 mt-4">
                  <h4 className="text-uppercase font-1n2rem">
                    Strategy
                  </h4>
                  <ul className="list pt-0 pl-0">
                    <li className="item text-upper-case normal-p">
                      Brand Identity
                    </li>
                    <li className="item text-upper-case pt-md-3 normal-p">
                      Brand Strategy
                    </li>
                    <li className="item text-upper-case pt-md-3 normal-p">
                      Guidelines
                    </li>
                    <li className="item text-upper-case pt-md-3 normal-p">
                      Copywriting
                    </li>
                  </ul>
                </div>
                <div className="about-grid-two about-grid-two-45 pt-md-5 mt-md-5 pt-4 mt-4">
                  <h4 className="text-uppercase font-1n2rem">
                    Design
                  </h4>
                  <ul className="list pt-0 pl-0">
                    <li className="item text-upper-case normal-p">
                      Product Design
                    </li>
                    <li className="item text-upper-case pt-md-3 normal-p">
                      Visual Design
                    </li>
                    <li className="item text-upper-case pt-md-3 normal-p">
                      Web Design
                    </li>
                    <li className="item text-upper-case pt-md-3 normal-p">
                      UI / UX
                    </li>
                    <li className="item text-upper-case pt-md-3 normal-p">
                      Print Design
                    </li>
                  </ul>
                </div>
                <div className="about-grid-two about-grid-two-45 pt-md-5 mt-md-5 pt-4 mt-4">
                  <h4 className="text-uppercase font-1n2rem">
                   Technology
                  </h4>
                  <ul className="list pt-0 pl-0">
                    <li className="item text-upper-case normal-p">
                      Web Development
                    </li>
                    <li className="item text-upper-case pt-md-3 normal-p">
                      CMS-based Sites
                    </li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </>
    );
  }

export default Design;


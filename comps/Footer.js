import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Clock from 'react-live-clock'

export default function Footer() {

      return (
          <>
        <div className="container-fluid footer-container">
            <div className="row justify-content-center pl-md-5 pb-md-3 mx-md-5 pt-md-4">
                <div className="col-lg-9 col-12 text-center">
                    <h1 className="say-hello-h1 pb-5">
                        Let's create an <span className="footer-impression">impression</span> 
                    </h1>
                    <div className="row justify-content-lg-around justify-content-md-center justify-content-center pb-4 pt-4 pt-lg-4 pb-lg-2 mt-lg-2 mt-3 phone-email-row">
                        <div className="col-lg-4 col-12 text-lg-left text-center pb-2 pb-md-0">
                            <Link href="mailto:ideas@potoo.studio" aria-label="email">
                                <a className="say-hello-a pb-lg-2">
                                    ideas@potoo.studio
                                    <span className="bottom-line"></span>
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-1 col-4 col-md-2 text-md-center text-md-right pt-4 pt-md-4  mt-md-1 pb-md-3 pt-lg-0">
                            <Link href="https://www.instagram.com/potoostudio/" aria-label="instagram">
                                <a  className="social-media-a">
                                    IG
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-1 col-4 col-md-2 text-md-center text-md-right pt-4 pt-md-4  mt-md-1 pb-md-3 pt-lg-0">
                            <Link href="https://www.behance.net/potoostudio" aria-label="behance">
                                <a  className="social-media-a">
                                    BE
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-1 col-4 col-md-2 text-md-center text-md-left pt-4 pt-md-4 mt-md-1 pb-md-3 pt-lg-0">
                            <Link href="https://dribbble.com/Potoo" aria-label="dribbble">
                                <a  className="social-media-a">
                                    DB
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-12 text-lg-right pt-3 pb-4 pb-md-4 pb-lg-0 pt-md-4 pt-lg-0 ">
                            <Link href="tel:3202604416" aria-label="phone">
                                <a className="say-hello-a pb-lg-2">
                                    +1 320 260 4416
                                    <span className="bottom-line"></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid pl-lg-0 co-container pt-lg-5 mt-lg-2">
            <div className="row justify-content-md-center justify-content-center">
                <div className="col-lg-3 col-10">
                    <p className="co-made text-center mb-2 mb-md-3">
                        Made in the high altitude of Colorado
                    </p>
                </div>
                <div className="col-lg-3 col-10 text-center ">
                  <p className="clock mb-2 mb-md-3">It's <Clock className="digital-clock" format={'HH:mm'} ticking={true} timezone={'US/Mountain'}/> in the Rockies</p>
                </div>
            </div>
        </div>
        </>
      );
    }
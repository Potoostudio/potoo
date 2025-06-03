"use client"
import React, {Component} from 'react'
import Link from 'next/link'
import Clock from 'react-live-clock'

export default function Footer() {


        return (
            <>
          <div className="container-fluid footer-container pb-md-0 pb-4 bg-darker">
              <div className="row justify-content-between pb-0 mx-md-5 pt-md-4 mt-5 pb-5">
                <div className="col-12 col-md-4 text-left mt-0">
                    <h5 className="color-white border-sm-bottom pb-2 pb-md-0">
                        Contact
                    </h5>
                    <ul className="list-style-none ps-0 mb-0 mt-md-2 contact-list">
                      <li className="item pt-md-3 pt-0">
                            <Link href="https://wa.me/009647809000956" className="say-hello-a">
                                    WhatsApp: +964 780 900 0956
                            </Link>
                      </li>
                      <li className="item pt-md-3 pt-1">
                            <Link href="tel:+13202604416" className="say-hello-a">
                                    Cell: +1 320 260 4416
                            </Link>
                      </li>
                      <li className="item pt-md-3 pt-1">
                            <Link href="mailto:ideas@potoo.studio" className="say-hello-a">
                                    Email: ideas@potoo.studio
                            </Link>
                      </li>
                  </ul> 
                </div>
                <div className="col-12 col-md-2 text-left mt-md-0 mt-5">
                    <h5 className="color-white border-sm-bottom pb-2 pb-md-0">
                        Menu
                    </h5>
                    <ul className="list-style-none ps-0 mb-0 mt-md-2 contact-list">
                    <li className="item pt-md-2 pt-0">
                            <Link href="work" className="say-hello-a">
                                    /Work
                            </Link>
                    </li>
                    <li className="item pt-md-2 pt-1">
                            <Link href="/studio" className="say-hello-a">
                                    /About
                            </Link>
                    </li>
                    <li className="item pt-md-2 pt-1">
                            <Link href="/iris" className="say-hello-a">
                                    /Innovations
                            </Link>
                    </li>
                    <li className="item pt-md-2 pt-1">
                            <Link href="/contact" className="say-hello-a">
                                    /Contact
                            </Link>
                    </li>
                    </ul>
                  </div>
                <div className="col-12 col-md-2 text-left mt-md-0 mt-5 ">
                    <h5 className="color-white border-sm-bottom pb-2 pb-md-0">
                        Innovations
                    </h5>
                    <ul className="list-style-none ps-0 mb-0 mt-md-2 contact-list">
                    <li className="item pt-md-2 pt-0">
                            <Link href="/iris" className="say-hello-a">
                                    /Iris
                            </Link>
                    </li>
                    </ul>
                  </div>
                <div className="col-12 col-md-2 text-left mt-md-0 mt-5 ">
                    <h5 className="color-white border-sm-bottom pb-2 pb-md-0">
                        Locations
                    </h5>
                    <ul className="list-style-none ps-0 mb-0 mt-md-2 color-db">
                        <li className="item pt-md-2 pt-0">
                            Baghdad / <Clock className="digital-clock" format={'h:mm A'} ticking={true} timezone={'Asia/Baghdad'}/>
                        </li>
                        <li className="item pt-md-2 pt-1 color-db">
                            Denver /<Clock className="digital-clock" format={'h:mm A'} ticking={true} timezone={'US/Mountain'}/>
                        </li>
                    </ul>
                  </div>
                <div className="col-12 col-md-2 text-left mt-md-0 mt-5">
                    <h5 className="color-white border-sm-bottom pb-2 pb-md-0">
                        Office
                    </h5>
                    <ul className="list-style-none ps-0 mb-0 mt-md-2 contact-list">
                        <li className="item pt-md-2 pt-0">
                             <Link href="https://open.spotify.com/playlist/1KcPqdIHXmJUxCEo6USuCC?si=190b779aa27b4b1b" className="say-hello-a">
                                /Spotify
                            </Link>
                        </li>
                        <li className="item pt-md-2 pt-1  ">
                             <Link href="/art" className="say-hello-a">
                                /Art
                            </Link>
                        </li>
                        <li className="item pt-md-2 pt-1">
                             <Link href="/journal" className="say-hello-a">
                                /Journal
                            </Link>
                        </li>
                    </ul>
                  </div>
                </div>
                <div className="row mt-4x py-3 border-top justify-content-around">
                    <div className="col-md-3 col-4 color-db text-uppercase we-are-art">
                        <p className="">We Are Art</p>
                        
                    </div>
                    <div className="col-md-3 col-4 color-db text-center justify-content-center d-flex">
                        <Link href="https://www.instagram.com/potoostudio" aria-label="instagram" className=" footer-bottom-info  color-db">
                            Instagram
                        </Link>
                    </div>
                    <div className="col-md-3 col-4 color-db text-end footer-bottom-info color-db">
                        <Link href="/essentials/privacy" aria-label="instagram" className=" footer-bottom-info text-decoration-none  color-db">
                            Privacy policy
                        </Link>
                    </div>
                </div>
              </div>
        
          </>
        );
    }

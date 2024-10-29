"use client"
import React, {Component} from 'react'
import Link from 'next/link'
import Clock from 'react-live-clock'
import Image from 'next/image'

const impressionsList = ["future", "product", "book", "shop", "brand", "business", "idea", "studio"];
export default class Footer extends Component {

    constructor() {
        super();
        this.state = {textIdx: 0};
    }

    componentDidMount() {
        this.timeout = setInterval(() => {
            let currentIdx = this.state.textIdx;
            this.setState({ textIdx: currentIdx + 1});
        }, 950);
    }
    componentDidUnmount() {
        clearInterval(this.timeout);
    }

    render() {

        let impressionsChange = impressionsList[this.state.textIdx % impressionsList.length];

        return (
            <>
          <div className="container-fluid footer-container pt-5 pb-md-0 pb-4">
              <div className="row justify-content-between pb-md-3 mx-md-5 pt-md-4">
                  <div className="col-12 col-md-4 text-left pr-md-5 pb-md-0 pb-4">
                      <div className="image-container">
                        <Image
                            src="/Potoo Word Logo.svg"
                            layout='fill'
                            className="image"
                            alt="Potoo Studio Logo Word"
                        />
                      </div>
                  </div>
                  <div className="col-12 col-md-4 text-left pb-md-0 pb-0 pt-3 mobile-display-none">
                        <p className="">
                            We are a design studio focused on creating verbal and visual identity of your brilliant {impressionsChange}
                        </p>
                        <span className="say-list"></span>
                  </div>
              </div>
              <div className="row justify-content-between pb-0 mx-md-5 pt-md-4 mt-5">
                <div className="col-12 col-md-5 text-left mt-0">
                    <div className="row justify-content-start contact-list">
                        <div className="col-6 col-md-5">
                            <Clock className="digital-clock" format={'h:mm A'} ticking={true} timezone={'US/Mountain'}/>
                            <div className="container p-0 mt-0">
                                <Link href="https://potoo.studio/branding-agency-denver" aria-label="dribbble" className="say-hello-a">
                                    Denver
                                </Link>
                            </div>
                            <div className="container p-0 mt-2">
                                <Link href="mailto:ideas@potoo.studio" aria-label="email" className="say-hello-a font-small">
                                        ideas@potoo.studio
                                    <span className="bottom-line"></span>
                                </Link>
                            </div>
                            <div className="container p-0 mt-0">
                            <Link href="tel:3202604416" aria-label="phone" className="say-hello-a font-small">
                                +1 (320) 260.4416
                                <span className="bottom-line"></span>
                            </Link>
                            </div>
                        </div>
                        <div className="col-6 col-md-5 text-left mt-0">
                        <Clock className="digital-clock" format={'h:mm A'} ticking={true} timezone={'Asia/Baghdad'}/>
                            <div className="container p-0 mt-0">
                                <Link href="https://potoo.studio/branding-agency-baghdad" aria-label="dribbble" className="say-hello-a">
                                    Baghdad
                                </Link>
                            </div>
                            <div className="container p-0 mt-2">
                                <Link href="mailto:ideas@potoo.studio" aria-label="email" className="say-hello-a font-small">
                                    ideas@potoo.studio
                                    <span className="bottom-line"></span>
                                </Link>
                            </div>
                            <div className="container p-0 mt-0">
                                <Link href="tel:009647809000956" aria-label="phone" className="say-hello-a font-small">
                                    +964 7809 000956
                                    <span className="bottom-line"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 pt-5 pt-md-0">
                    <div className="row justify-content-between">
                        <div className="col-md-4 col-6 pt-0 mt-md-0 mt-0">
                            <ul className="media-list text-left">
                            {/* <span className="footer-small-title">social media</span> */}
                                <li className="item footer-small-title">
                                    <Link href="https://www.instagram.com/potoostudio" aria-label="instagram" className="social-media-a say-hello-a">
                                        Instagram
                                    </Link>
                                </li>
                                <li className="item pt-1 footer-small-title">
                                    <Link href="https://www.behance.net/potoostudio" aria-label="behance" className="social-media-a say-hello-a">
                                        Behance
                                    </Link>
                                </li>
                                <li className="item pt-1 footer-small-title">
                                    <Link href="https://dribbble.com/potoostudio" aria-label="dribbble" className="social-media-a say-hello-a">
                                        Dribbble
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    <div className="col-md-4 col-6 pt-0 mt-md-0 mt-0">
                            <ul className="media-list text-left">
                            {/* <span className="footer-small-title">social media</span> */}
                                <li className="item footer-small-title">
                                    <Link href="https://potoo.studio/work" aria-label="instagram" className="social-media-a say-hello-a">
                                        Work
                                    </Link>
                                </li>
                                <li className="item pt-1 footer-small-title">
                                    <Link href="https://potoo.studio/studio" aria-label="behance" className="social-media-a say-hello-a">
                                        Studio
                                    </Link>
                                </li>
                                <li className="item pt-1 footer-small-title">
                                    <Link href="https://potoo.studio/journal" aria-label="behance" className="social-media-a say-hello-a">
                                        Journal
                                    </Link>
                                </li>
                                <li className="item pt-1 footer-small-title">
                                    <Link href="https://potoo.studio/art" aria-label="behance" className="social-media-a say-hello-a">
                                        Art
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
              </div>
              <div className="row justify-content-center pb-md-4 mx-md-5 pt-md-4 pt-4">
                  {/* <div className="col-11 col-md-4 text-left">
                    <p className=" text-left mb-md-3 mb-0 footer-bottom-info">
                        2000 S Colorado Blvd Tower 1 Suite 2000-511 Denver, CO 80222 <br/>
                        Baghdad's location coming soon
                    </p>
                  </div> */}
                  <div className="col-md-2 col-4 text-left pt-2 pt-md-0">
                    <p className="text-left footer-bottom-info mb-3">
                        Site Made In House
                    </p>
                  </div>
                    {/* <div className="col-md-3 line-height-normal col-7 pt-1 pt-md-0 text-right text-md-left">
                        <time className="clock mb-3 footer-bottom-info">It's<Clock className="digital-clock" format={'h:mm A'} ticking={true} timezone={'US/Mountain'}/>in the beautiful Rockies and<Clock className="digital-clock" format={'h:mm A'} ticking={true} timezone={'Asia/Baghdad'}/>in the glorious Baghdad </time>
                    </div> */}
              </div>
          </div>
          </>
        );
    }
}
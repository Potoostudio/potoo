"use client"
import React, {Component} from 'react'
import Link from 'next/link'
import Clock from 'react-live-clock'
import Image from 'next/image'

const impressionsList = ["charismatic", "memorable", "extraordinary", "inspirational", "luxurious"];
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
                  <div className="col-12 col-md-12 text-left pr-md-5 pb-md-0 pb-4">
                  <span className="footer-small-title">Are are</span>
                      <div className="image-container">
                        <Image
                            src="/Potoo-logo-word-white.svg"
                            layout='fill'
                            className="image"
                            alt="Potoo Studio Logo Word"
                        />
                      </div>
                  </div>
                  <div className="col-3 text-left pt-4 pt-md-5 mt-md-4 mt-0">
                      <div className="container p-0 mt-2">
                          <h6 className="design-studio luxury-title text-uppercase">
                              Design Studio
                          </h6>
                          <span className="say-list"></span>
                      </div>
                  </div>
                  <div className="col-md-2 col-5 text-left pt-4 pt-md-5 mt-md-4 mt-0">
                      <ul className="contact-list">
                          <span className="footer-small-title">contact info</span>
                          <li className="item">
                            <Link href="mailto:ideas@potoo.studio" aria-label="email" className="say-hello-a">
                                ideas@potoo.studio
                                <span className="bottom-line"></span>
                            </Link>
                          </li>
                          <li className="item pt-md-2 pt-1">
                            <Link href="tel:3202604416" aria-label="phone" className="say-hello-a">
                                320.260.4416
                                <span className="bottom-line"></span>
                              </Link>
                          </li>
                      </ul>
                    </div>
                    <div className="col-md-2 col-4 pt-4 pt-md-5 mt-md-4 mt-0">
                        <ul className="media-list text-right text-md-left">
                        <span className="footer-small-title">social media</span>
                            <li className="item">
                                <Link href="https://www.instagram.com/potoostudio" aria-label="instagram" className="social-media-a say-hello-a">
                                    Instagram
                                </Link>
                            </li>
                            <li className="item pt-1">
                                <Link href="https://www.behance.net/potoostudio" aria-label="behance" className="social-media-a say-hello-a">
                                    Behance
                                </Link>
                            </li>
                            <li className="item pt-1">
                                <Link href="https://dribbble.com/potoostudio" aria-label="dribbble" className="social-media-a say-hello-a">
                                    Dribbble
                                </Link>
                            </li>
                        </ul>
                    </div>
              </div>
              <div className="row justify-content-between pb-md-4 mx-md-5 pt-md-4 pt-4">
                  <div className="col-11 col-md-4 text-left">
                    <p className=" text-left mb-md-3 mb-0 footer-bottom-info color-secondary">
                        2000 S Colorado Blvd Tower 1 Suite 2000-511 Denver, CO 80222
                    </p>
                  </div>
                  <div className="col-md-2 col-4 text-left pt-2 pt-md-0">
                    <p className="text-left footer-bottom-info mb-3 color-secondary">
                        Site Made In House
                    </p>
                  </div>
                    <div className="col-md-2 col-6 pt-1 pt-md-0 text-right text-md-left">
                        <time className="clock mb-3 footer-bottom-info color-secondary">It's<Clock className="digital-clock" format={'h:mm A'} ticking={true} timezone={'US/Mountain'}/>in the beautiful Rockies</time>
                    </div>
              </div>
          </div>
          </>
        );
    }
}
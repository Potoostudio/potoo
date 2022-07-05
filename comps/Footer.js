import React, {Component} from 'react'
import Link from 'next/link'
import Clock from 'react-live-clock'

const impressionsList = ["cheerful", "neat", "trusting", "bright", "luxury", "positive", "slick"];
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
          <div className="container-fluid footer-container">
              <div className="row justify-content-center pb-md-3 mx-md-5 pt-md-4">
                  <div className="col-lg-9 col-12 text-center">
                      <h1 className="say-hello-h1 pb-md-5 pb-2">
                          <span>Creating</span> <span>{impressionsChange}</span> <span>impressions</span>
                      </h1>
                      <div className="row justify-content-lg-around justify-content-md-center justify-content-center pb-4 pt-4 pt-lg-4 pb-lg-3 mt-lg-3 mt-3 phone-email-row">
                          <div className="col-lg-4 col-12 text-lg-left text-center py-2 pb-md-0">
                              <Link href="mailto:ideas@potoo.studio" aria-label="email">
                                  <a className="say-hello-a pb-lg-2">
                                      ideas@potoo.studio
                                      <span className="bottom-line"></span>
                                  </a>
                              </Link>
                          </div>
                          <div className="col-lg-1 col-4 col-md-2 text-md-center text-md-right py-3 pt-md-4  mt-md-1 pb-md-3 pt-lg-0">
                              <Link href="https://www.instagram.com/potoostudio" aria-label="instagram">
                                  <a  className="social-media-a">
                                      IG
                                  </a>
                              </Link>
                          </div>
                          <div className="col-lg-1 col-4 col-md-2 text-md-center text-md-right py-3 pt-md-4  mt-md-1 pb-md-3 pt-lg-0">
                              <Link href="https://www.behance.net/potoostudio" aria-label="behance">
                                  <a  className="social-media-a">
                                      BE
                                  </a>
                              </Link>
                          </div>
                          <div className="col-lg-1 col-4 col-md-2 text-md-center text-md-left py-3 pt-md-4 mt-md-1 pb-md-3 pt-lg-0">
                              <Link href="https://dribbble.com/potoostudio" aria-label="dribbble">
                                  <a  className="social-media-a">
                                      DB
                                  </a>
                              </Link>
                          </div>
                          <div className="col-lg-4 col-12 text-lg-right py-2 pb-md-4 pb-lg-0 pt-md-4 pt-lg-0">
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
          <div className="container-fluid pl-lg-0 co-container pt-lg-2 mt-lg-2 pb-lg-2 mt-5 mb-4 mb-md-0">
              <div className="row justify-content-md-center justify-content-center">
                  <div className="col-lg-3 col-10">
                      <p className="co-made text-center mb-2 mb-md-3">
                          Made in the high altitude of Colorado
                      </p>
                  </div>
                  <div className="col-lg-3 col-10 text-center ">
                    <time className="clock mb-2 mb-md-3">It's <Clock className="digital-clock" format={'HH:mm'} ticking={true} timezone={'US/Mountain'}/> in the Rockies</time>
                  </div>
              </div>
          </div>
          </>
        );
    }
}
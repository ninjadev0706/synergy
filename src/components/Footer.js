// import { useState } from "react";

const Footer = () => {
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phonenumber: "",
  //   message: "",
  // });

  // const updateFormData = event =>
  //   setFormData({
  //     ...formData,
  //     [event.target.name]: event.target.value
  //   });

  // const { firstName, lastName, email, phonenumber, message } = formData;

  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-head">
                <h2 data-aos="fade-up" data-aos-duration="2000">
                  Contact Us
                </h2>
                <span className="main-bor"></span>
                <p>
                  We are always open and we welcome and questions you have for our team. <br /> If you wish to get in touch, please fill out the form below.
                </p>
              </div>
            </div>
          </div>
          <div className="footer-wrap">
            <div className="col-lg-6 contact">
              <div className="footer-link-area">
                {/* <div className="footer-head">
                  <h3>Contact Us</h3>
                </div> */}
                <div className="footer-link">
                  <ul>
                    <li className="">
                      <img className="mr-10" src="./email.png" width="50px" alt=""/>
                      info@synergy.com
                    </li>
                    <li>
                      <img className="mr-10" src="./phone.png" width="50px" alt="" />
                      +1 702 333 666
                    </li>
                    <li>
                      <img className="mr-10" src="./position.png" width="50px" alt="" />
                      APR Streen USA
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 follow">
              <div className="footer-link-area">
                {/* <div className="footer-head">
                  <h3>Follow Us</h3>
                </div> */}
                <div className="social-link">
                  <ul>
                    <li className="col-6">
                      <a
                        href="https://twitter.com/Synergy_SURF"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img className="mr-10" src="./email.png" width="50px" alt="" />
                      </a>
                      Twitter
                    </li>
                    <li className="col-6">
                      <a href="/" target="_blank" >
                        <img className="mr-10" src="./email.png" width="50px" alt="" />
                      </a>
                      Facebook
                    </li>
                    <li className="col-6">
                      <a href="https://t.me/SynergySurf" target="_blank" rel="noreferrer">
                        <img className="mr-10" src="./email.png" width="50px" alt="" />
                      </a>
                      Telegram
                    </li>
                    <li className="col-6">
                      <a href="/" target="_blank">
                        <img className="mr-10" src="./email.png" width="50px" alt="" />
                      </a>
                      Instagram
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="map">
              <img src="/images/position.png" alt="" />
            </div> */}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="footer-logo">
                  <img src="/images/logo.png" alt="" className="img-fluid" />
                </div>
                <div className="footer-bottom-link">
                  <ul>
                    <li>
                      <a href="/">About</a>
                    </li>
                    <li>
                      <a href="/">Inventor</a>
                    </li>
                    <li>
                      <a href="/">Roadmap</a>
                    </li>
                    <li className="get-link">
                      <a href="/">Get the app</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="top-bor"></div>
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="copy-text">
                  Copyright 2021. All rights reserved
                </div>
                <div className="other-link">
                  <ul>
                    <li>
                      <a href="/">
                        Privacy Policy <span>|</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        Terms of use <span>|</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">Cookies</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

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
          <div className="">
            <div className="footer-container">
              <div className="footer-head">
                <h2 data-aos="fade-up" data-aos-duration="2000">
                  Don’t Miss Out, Stay Updated
                </h2>
                <span className="main-bor"></span>
                <div className="input-wrap">
                  <div className="input">
                    <input placeholder="Enter your email" />
                  </div>
                  <div>
                    <div className="subscribe-btn">
                      SUBSCRIBE
                    </div>
                  </div>
                </div>
                <div className="desc">
                  Don’t hesitate to subscribe to latest news about ICO markets as well as crucial financial knowledge to become successful investors globally
                </div>
                <div className="social-ico-wrap">
                  <div>
                    <img src="/social/telegram.svg" alt="" width="40px" />
                  </div>
                  <div>
                    <a href="https://twitter.com/Synergy_SURF" target="_blank" rel="noreferrer"><img src="/social/twitter.svg" alt="" width="40px" /></a>
                  </div>
                  <div>
                    <img src="/social/linkedin.svg" alt="" width="40px" />
                  </div>
                  <div>
                    <img src="/social/youtube.svg" alt="" width="40px" />
                  </div>
                  <div>
                    <img src="/social/instagram.svg" alt="" width="40px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="footer-logo">
                  <img src="/images/social/logo.png" alt="" className="img-fluid" />
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

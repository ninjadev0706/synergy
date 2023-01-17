import { useState, useEffect } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phonenumber: "",
    message: "",
  });

  const updateFormData = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

  const { firstName, lastName, email, phonenumber, message } = formData;

  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="footer-wrap">
            <div className="col-lg-4 contact">
              <div className="footer-link-area">
                <div className="footer-head">
                  <h3>Contact Us</h3>
                </div>
                <div className="footer-link">
                  <ul>
                    <li>
                      <span>
                        <i className="fa fa-envelope"></i>
                      </span>
                      info@synergy.com
                    </li>
                    <li>
                      <span>
                        <i className="fa fa-phone fa-lg"></i>
                      </span>
                      +1 702 333 666
                    </li>
                    <li>
                      <span>
                        <i className="fa fa-map-marker fa-lg"></i>
                      </span>
                      APR Streen USA
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 follow">
              <div className="footer-link-area">
                <div className="footer-head">
                  <h3>Follow Us</h3>
                </div>
                <div className="social-link">
                  <ul>
                    <li className="col-6">
                      <span>
                        <a
                          href="https://twitter.com/Synergy_SURF"
                          target="_blank"
                        >
                          <i className="fa fa-twitter"></i>
                        </a>
                      </span>
                      Twitter
                    </li>
                    <li className="col-6">
                      <span>
                        <a href="" target="_blank">
                          <i className="fa fa-facebook-f"></i>
                        </a>
                      </span>
                      Facebook
                    </li>
                    <li className="col-6">
                      <span>
                        <a href="https://t.me/SynergySurf" target="_blank">
                          <i className="fa fa-paper-plane"></i>
                        </a>
                      </span>
                      Telegram
                    </li>
                    <li className="col-6">
                      <span>
                        <a href="" target="_blank">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </span>
                      Instagram
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="map">
              <img src="/images/position.png" alt="" />
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
                  <img src="/images/logo.png" alt="" className="img-fluid" />
                </div>
                <div className="footer-bottom-link">
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Inventor</a>
                    </li>
                    <li>
                      <a href="#">Roadmap</a>
                    </li>
                    <li className="get-link">
                      <a href="">Get the app</a>
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
                      <a href="#">
                        Privacy Policy <span>|</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Terms of use <span>|</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">Cookies</a>
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

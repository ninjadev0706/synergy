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
          <div className="row">
            <div className="col-lg-5">
              <div className="footer-form">
                <div className="submitwrap footer-form-head">
                  <h3>Leave Us a Message</h3>
                  <div className="row clearfix submit-container">
                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <div className="field-inner">
                        <input
                          value={firstName}
                          type="text"
                          id="cc_first"
                          name="firstName"
                          placeholder="Firstname"
                          onChange={e => updateFormData(e)}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <div className="field-inner">
                        <input
                          value={lastName}
                          type="text"
                          id="cc_last"
                          placeholder="Lastname"
                          name="lastName"
                          onChange={e => updateFormData(e)}
                        />
                      </div>
                    </div>
                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <div className="field-inner">
                        <input
                          value={email}
                          type="email"
                          id="cc_email"
                          name="email"
                          placeholder="Email Address"
                          onChange={e => updateFormData(e)}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <div className="field-inner">
                        <input
                          value={phonenumber}
                          type="text"
                          id="cc_mbl"
                          placeholder="Phone Number"
                          name="phonenumber"
                          onChange={e => updateFormData(e)}
                        />
                      </div>
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                      <div className="field-inner">
                        <textarea
                          value={message}
                          name="message"
                          placeholder="Your Message ..."
                          id="cc_ques"
                          onChange={e => updateFormData(e)}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                      <div className="">
                        <button type="submit" className="main-btn" style={{ borderRadius: "5px", padding: '5px 15px', boxShadow: '0px 10px 18px #1da1f387' }}>
                          Submit Your Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
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
            <div className="col-lg-4">
              <div className="footer-link-area">
                <div className="footer-head">
                  <h3>Follow Us</h3>
                </div>
                <div className="social-link">
                  <ul>
                    <li>
                      <span>
                        <a
                          href="https://twitter.com/SoMeSynergy"
                          target="_blank"
                        >
                          <i className="fa fa-twitter"></i>
                        </a>
                      </span>{" "}
                    </li>
                    <li>
                      <span>
                        <a href="" target="_blank">
                          <i className="fa fa-facebook-f"></i>
                        </a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <a href="https://t.me/SynergySurf" target="_blank">
                          <i className="fa fa-paper-plane"></i>
                        </a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <a href="" target="_blank">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="p-20">
                  <img src="/images/position.png" alt="" />
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

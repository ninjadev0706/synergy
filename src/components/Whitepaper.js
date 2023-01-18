const Whitepaper = () => {
  return (
    <section className="app-sec p-100">
      <div className="container">
        <div className="whitepaper">
          <div className="col-lg-6">
            <div className="app-sec-inner">
              <div className="d-flex gap-20 whitepaper-title">
                <div className="whitepaper-bor"></div>
                <div>WHITEPAPER</div>
              </div>
              <h3 data-aos="fade-up" data-aos-duration="2000">
                Read Our Documents
              </h3>
              <p>
                Here is our full documents that help you to understand deeply about us and our operation
              </p>
              <div className="d-flex">
                <div>
                  <div className="d-flex gap-10 item">
                    <div>
                      <img
                        src="/images/success.png"
                        alt=""
                        width="25px"
                      />
                    </div>
                    <div>
                      Whitepaper
                    </div>
                  </div>
                  <div className="d-flex gap-10 item">
                    <div>
                      <img
                        src="/images/success.png"
                        alt=""
                        width="25px"
                      />
                    </div>
                    <div>
                      Terms of Coin Sale
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex gap-10 item">
                    <div>
                      <img
                        src="/images/success.png"
                        alt=""
                        width="25px"
                      />
                    </div>
                    <div>
                      Privacy Policy
                    </div>
                  </div>
                  <div className="d-flex gap-10 item">
                    <div>
                      <img
                        src="/images/success.png"
                        alt=""
                        width="25px"
                      />
                    </div>
                    <div>
                      Investor Deck
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="d-flex align-items-center gap-20">
                  <a
                    href="/images/whitepaper.pdf"
                    target="_blank"
                  >
                    <div className="d-flex gap-10 download-btn1">
                      <div>
                        <img
                          src="/images/download.png"
                          alt=""
                          width="20px"
                        />
                      </div>
                      <div>Whitepaper</div>
                    </div>
                  </a>
                  <a
                    href="/images/investor.pdf"
                    target="_blank"
                  >
                    <div className="d-flex gap-10 download-btn2">
                      <div>
                        <img
                          src="/images/download.png"
                          alt=""
                          width="20px"
                        />
                      </div>
                      <div>Investor Deck</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whitepaper;

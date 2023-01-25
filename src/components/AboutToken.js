const AboutToken = () => {
  return (
    <section className="about-token p-100" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-img" data-aos="zoom-in" data-aos-duration="2000">
              <img src="/images/about-img.png" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <h1>WHY ICO?</h1>
              <p>
                Simply put, our coin exists to help investors earn big. Formally known as an Initial Coin Offering, an ICO involves the public sale of a coin to investors, with the opportunity to use said coins to enjoy a product or service – like online shopping.
              </p>
              <p>
                With 92,233,720,368, tokens in total – 74,176,480 of which will be for sale in the ICO – we’re giving investors everywhere free rein to earn rewards, build a passive income stream, and turn their back on traditional investments as we know them.
              </p>
              <div className="link">
                <a
                  href="/images/whitepaper.pdf"
                  target="_blank"
                  className="main-btn"
                >
                  <span className="txt">Whitepaper</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutToken;

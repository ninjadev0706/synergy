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
              <h1>Why Ico</h1>
              <p>
                In the crypto ecosystem, an ICO refers to an intial coin
                offering. An ICO simply involves the public sale of a coin to
                investors who wish to hold the coin with the view of earning
                returns from it as well as enjoy access to certain services or
                rewards.
              </p>
              <p>
                We have a total of 20,000,000,000 crypto tokens in supply of
                these tokens, 190,000,000 of them we will put for sale in the
                initial coin offering. This will offer investors a chance to
                have a stake in our crypto so they can start earning passive
                income and rewards.
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

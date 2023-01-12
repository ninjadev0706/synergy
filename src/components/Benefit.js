const Benefit = () => {
  return (
    <section className="benefit p-100" id="benefit">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-head">
              <h2 data-aos="fade-up" data-aos-duration="2000">
                SYRF - The Native Crypto In Synergy Space
              </h2>
              <span className="main-bor"></span>
              <p>
                Offering users optimal utility and a prime opportunity for generating income
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="inner-box">
              <div className="icon-box" data-aos="zoom-in" data-aos-duration="2000">
                <span className="icon">
                  <img src="/images/income.png" alt="" />
                </span>
              </div>
              <h6>User income</h6>
              <div className="text">
                30% of advertisement
                revenue shared with users.
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="inner-box">
              <div className="icon-box" data-aos="zoom-in" data-aos-duration="2000">
                <span className="icon">
                  <img src="/images/economic.png" alt="" />
                </span>
              </div>
              <h6>More Economic Inclusion</h6>
              <div className="text">
                Individual holding cap to prevent whaling.
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="inner-box">
              <div className="icon-box" data-aos="zoom-in" data-aos-duration="2000">
                <span className="icon">
                  <img src="/images/inflationary.png" alt="" />
                </span>
              </div>
              <h6>Anti-inflationary</h6>
              <div className="text">
                25% of cash at the end of each year reserved for buying back circulating tokens.
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="inner-box">
              <div className="icon-box" data-aos="zoom-in" data-aos-duration="2000">
                <span className="icon">
                  <img src="/images/democratization.png" alt="" />
                </span>
              </div>
              <h6>Democratization</h6>
              <div className="text">
                Ability to participate in ideation and decision making process.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;

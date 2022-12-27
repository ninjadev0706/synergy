const TokenDetail = () => {
  return (
    <section className="token-detail p-100" id="token">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-head">
              <h2 data-aos="fade-up" data-aos-duration="2000">
                ICO Token Details
              </h2>
              <span className="main-bor"></span>
              <p>
                Our Token sale is grown in a rapid way in recent months, and we
                received the support of 200000 investors in different countries
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4">
            <div
              className="token-box active"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h4>Next Start</h4>
              <p>Jan 15, 2023 (9:00 AM GMT)</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="token-box inactive"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h4>Next End</h4>
              <p>Mar 15, 2023 (9:00 AM GMT)</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="token-box inactive"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h4>Acceptable Currencies</h4>
              <p>TRX (Tron)</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="token-box inactive"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h4>Number of Tokens for Sale</h4>
              <p>20.000.000</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="token-box inactive"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h4>Tokens exchange rate</h4>
              <p>1 SYRF = 31 TRX, 1 USD = 2 SYRF</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="token-box inactive"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h4>Minimal Transaction</h4>
              <p>10 Tokens / Transaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenDetail;

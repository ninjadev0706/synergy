import Countdown from "react-countdown";
import BuyToken from "./BuyToken";

const PurchaseToken = ({ account, promiseData, buyWithBNB, buyWithTokens }) => {
  let startTime = 1673708400000;

  const displayTime = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <></>;
    } else {
      return (
        <div className="time-countdown clearfix" data-countdown="2023/01/15">
          <div className="counter-column days">
            <span className="count">{days}</span>
            <span className="period">Days</span>
          </div>{' '}
          <div className="counter-column hours">
            <span className="count">{hours}</span>
            <span className="period">Hours</span>
          </div>{' '}
          <div className="counter-column minutes">
            <span className="count">{minutes}</span>
            <span className="period">Minutes</span>
          </div>{' '}
          <div className="counter-column seconds">
            <span className="count">{seconds}</span>
            <span className="period">Seconds</span>
          </div>
        </div>
      );
    }
  };

  return (
    <section className="main-banner" id="home">
      <div className="banner-inner">
        <div className="purchase-token">

          <div className="row">
            <div className="col-lg-12">
              <div className="lower-content">
                <div className="row clearfix">
                  <div className="counter-col col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="ban-contain">
                            <div className="banner-head">
                              <h1 data-aos="zoom-in" data-aos-duration="2000">
                                Integrating E-Commerce with Blockchain
                              </h1>
                              <p>
                                The platform helps investors ensure a safe entry to our coin
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=""><h5>Pre-sale will be live on</h5></div>
                      <div className="time-counter">
                        <Countdown date={startTime} renderer={displayTime} />
                      </div>
                    </div>
                  </div>

                  <div className="progress-col col-lg-6 col-md-12 col-sm-12">
                    <BuyToken
                      account={account}
                      promiseData={promiseData}
                      buyWithBNB={buyWithBNB}
                      buyWithTokens={buyWithTokens}
                    />
                    {/* <div className="inner">
                      <h5>Pre Sale</h5>
                      <div className="progress-box">
                        <div className="bar-outer">
                          <div className="bar-inner">
                            <div className="bar" style={{ width: "70%" }}></div>
                          </div>
                          <div className="pt pt-one">
                            <span>Ico</span>
                          </div>
                          <div className="pt pt-two">
                            <span>Soft Cap</span>
                          </div>
                          <div className="pt pt-three">
                            <span>Hard Cap</span>
                          </div>
                          <div className=" pt-four">
                            <span>0</span>
                          </div>
                          <div className=" pt-five">
                            <span>14.000.000 USD</span>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* <div
                className="home-down"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="link">
                  <a href="#" className="main-btn">
                    <span className="txt">Purchase tokens</span>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseToken;

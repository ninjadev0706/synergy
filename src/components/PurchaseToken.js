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
                                Integrating <br /> E-Commerce with Blockchain
                              </h1>
                              <p>
                                The platform helps investors ensure a safe entry to our coin
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="link">
                        <a
                          href="/"
                          className="main-btn"
                        >
                          <span className="txt">Purchase tokens</span>
                        </a>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseToken;

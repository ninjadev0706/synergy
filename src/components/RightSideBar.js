import React, { useState, useEffect } from "react";
import Purchase from "./Purchase";
import CountDownDate from "./CountDownDate";

const RightSideBar = ({
  account,
  promiseData,
  approve_AVAX,
  buyWithBNB,
  getTokenBalance
}) => {
  const [currentTime, setCurrentTime] = useState(new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const leftDays = () => {
    const leftDay =
      (Date.parse(promiseData["end_day"]) - (Date.now())) / 86400000;

    if (leftDay > 0 && leftDay < 30) {
      return Number(leftDay.toFixed(0)) + 1;
    } else {
      return 1;
    }
  };

  return (
    <div className="right-area">
      <div className={account ? "rightsidebar rightside-effect" : "rightsidebar dropfilter"}>
        {promiseData.icoState !== 1 ? (
          <button className="private-button  fs-14">PRIVATE</button>
        ) : (
          <button className="live-button  fs-14">LIVE</button>
        )}

        <div className="flex-column alignCenter rightsidebar-content">
          {/* <Purchase promiseData={promiseData} leftDays={leftDays} buyWithBNB={buyWithBNB} isEnded={isEnded} /> */}
          {promiseData.icoState !== 1 ? (
            <Purchase
              promiseData={promiseData}
              leftDays={leftDays}
              approve_AVAX={approve_AVAX}
              buyWithBNB={buyWithBNB}
            />
          ) : (
            <>
              <div>
                <Purchase promiseData={promiseData} leftDays={leftDays} buyWithBNB={buyWithBNB} getTokenBalance={getTokenBalance} />
              </div>
            </>
          )}
        </div>
      </div>
      {!account ? (
        <span className="warning-msg">Please Connect Wallet</span>
      ) : ''}
    </div>
  );
};

export default RightSideBar;

import React, { useState, useEffect } from "react";
import Purchase from "./Purchase";
import CountDownDate from "./CountDownDate";

const RightSideBar = ({
  account,
  promiseData,
  presaleStart,
  isEnded,
  approve_AVAX,
  buy_CCOIN,
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
      <div className={account? "rightsidebar rightside-effect": "rightsidebar dropfilter"}>
        {!presaleStart || isEnded ? (
          <button className="private-button  fs-14">PRIVATE</button>
        ) : (
          <button className="live-button  fs-14">LIVE</button>
        )}

        <div className="flex-column alignCenter rightsidebar-content">
          {/* <Purchase promiseData={promiseData} leftDays={leftDays} buy_CCOIN={buy_CCOIN} isEnded={isEnded} /> */}
          {(presaleStart && !isEnded) ? (
            <Purchase
              promiseData={promiseData}
              leftDays={leftDays}
              approve_AVAX={approve_AVAX}
              buy_CCOIN={buy_CCOIN}
            />
          ) : (
            <>
              {(!presaleStart && !isEnded) ? (
                <>
                  <div className=" fs-20">
                    <span className=" t-white">
                      <span className="">
                        Presale {" "}
                        {!presaleStart ? (
                          <span className="">starts</span>
                        ) : (
                          <span className="">ends</span>
                        )}{" "}
                        at
                      </span>{" "}
                      {!presaleStart ? (
                        <span className=" t-white">{promiseData["start_day"]}</span>
                      ) : (
                        <span className=" t-white">
                          {promiseData["end_day"]}
                        </span>
                      )}
                    </span>
                  </div>
                  <CountDownDate
                    seconds={ (Date.parse(promiseData["start_day"]) - (currentTime)) / 1000 }
                  />
                </>
              ) : (
                <div>        
                  <Purchase promiseData={promiseData} leftDays={leftDays} buy_CCOIN={buy_CCOIN} isEnded={isEnded} />
                </div>
              )}
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

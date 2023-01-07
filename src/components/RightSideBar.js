import React, { useState, useEffect } from "react";
import Purchase from "./Purchase";
import CountDownDate from "./CountDownDate";

const RightSideBar = ({
  account,
  promiseData,
  approve_AVAX,
  buyWithBNB,
  buyWithTokens
}) => {

  return (
    <div className="right-area">
      <div className={account ? "rightsidebar rightside-effect" : "rightsidebar dropfilter"}>
        {promiseData.icoState !== 1 ? (
          <button className="private-button  fs-14">PRIVATE</button>
        ) : (
          <button className="live-button  fs-14">LIVE</button>
        )}

        <div className="flex-column alignCenter rightsidebar-content">
          <div>
            <Purchase promiseData={promiseData} buyWithBNB={buyWithBNB} buyWithTokens={buyWithTokens} />
          </div>
        </div>
      </div>
      {!account ? (
        <span className="warning-msg">Please Connect Wallet</span>
      ) : ''}
    </div>
  );
};

export default RightSideBar;

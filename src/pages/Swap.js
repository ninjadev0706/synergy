import React, { useState } from "react";
import LoadingOverlay from "react-loading-overlay";
import "../styles/Swap.css";
LoadingOverlay.propTypes = undefined;

function Swap({
  account,
  promiseData,
  presaleStart,
  isEnded,
}) {
  const [loading, setLoading] = useState(true);
  const [rate, setRate] = useState(0);
  const [swap, SetSwap] = useState(true);
  const [avaxamount, setAvaxamount] = useState(0);
  const [ccoinamount, setCcoinamount] = useState(0);
  return (
    <div id="swap">
      <div className="swap-content">
        <div className="swap-body flex-column alginCenter">
            {swap ? (
              <div className="from-container">
                <div className="balance-title font-non-nulshock t-grey2 fs-20">
                  <p></p>
                  <p>Available: {promiseData["avax_val"]}</p>
                </div>
                <div className="avax-container">
                  <input
                    className="input-value-section t-grey2 fs-30"
                    type="number"
                    placeholder="0.0"
                    value={avaxamount}
                    disabled = { (account && isEnded) ? false: true }
                    readOnly={ account ? false: true }
                    onChange={(e) => {
                      let maxavax_val = promiseData["avax_val"] < promiseData["maxxout"] ? promiseData["avax_val"] : promiseData["maxxout"];
                      setCcoinamount(
                        Number(
                          maxavax_val * promiseData["dexXMTSPRate"]
                        ).toLocaleString(undefined, {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 4,
                        })
                      );
                      setAvaxamount(maxavax_val);
                    }}
                  />
                  <div className="max-button-section">
                    <button
                      className="max-button"
                      onClick={() => {
                      }}
                    >
                      MAX
                    </button>
                    <div className="avax-section font-non-nulshock t-grey3 fs-25">
                      <img alt="avax" className="avax-img ml-20" src="avax.png" />
                      <p className="avax-letter ml-20">AVAX</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="from-container">
                <div className="balance-title font-non-nulshock t-grey2 fs-20">
                  <p></p>
                  <p>Available: {promiseData["avax_val"]}</p>
                </div>
                <div className="avax-container">
                  <input
                    className="input-value-section t-grey2 fs-30"
                    type="number"
                    placeholder="0.0"
                    value={ccoinamount}
                    disabled = { (account && isEnded) ? false: true }
                    readOnly={ account ? false: true }
                    onChange={(e) => {
                      setCcoinamount(e.target.value);
                      setAvaxamount(
                        Number(
                          e.target.value * promiseData['dexCCRate']
                        ).toLocaleString(undefined, {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 4,
                        })
                      );
                    }}
                  />
                  <div className="max-button-section">
                    <button
                      className="max-button"
                      onClick={() => {
                      }}
                    >
                      MAX
                    </button>
                    <div className="avax-section font-non-nulshock t-grey3 fs-25">
                      <img alt="ccoin" className="ccoin-img ml-20" src="c-coin-small.png" />
                      <p className="avax-letter ml-20">CC</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          <div className="mt-20 mb-20 alignCenter">
            <button className="btn btn-swap" onClick={() => {swap ? SetSwap(false): SetSwap(true)}}><img alt="arrow" src="swap.png" className="arrow-img"/></button>
          </div>
          {swap ? (
            <div className="to-container">
              <div className="available-title font-non-nulshock t-grey2 fs-20">
                <p></p>
                <p>Balance: {promiseData["dexXMTSPRate"]}</p>
              </div>
              <div className="ccoin-container">
                <input
                  className="input-value-section t-grey2 fs-30"
                  type="number"
                  placeholder="0.0"
                  value={ccoinamount}
                  readOnly={ true }
                />
                <div className="ccoin-section font-non-nulshock t-grey3 fs-25">
                  <img alt="avax" className="ccoin-img" src="c-coin-small.png" />
                  <p className="ccoin-letter ml-20">CC</p>
                </div>
              </div>
            </div>
          ): (
            <div className="to-container">
              <div className="available-title font-non-nulshock t-grey2 fs-20">
                <p></p>
                <p>Balance: {promiseData["dexCCRate"]}</p>
              </div>
              <div className="ccoin-container">
                <input
                  className="input-value-section t-grey2 fs-30"
                  type="number"
                  placeholder="0.0"
                  value={avaxamount}
                  readOnly={ true }
                />
                <div className="ccoin-section font-non-nulshock t-grey3 fs-25">
                  <img alt="coin" className="avax-img" src="avax.png" />
                  <p className="ccoin-letter ml-20">AVAX</p>
                </div>
              </div>
            </div>
          )}
          <div className="ccoin-price-section font-non-nulshock t-white fs-20">
            <p>Price</p>
            <div className="ccoin-price-title">
              {rate === 0 ? (
                <p>{promiseData["dexCCRate"]} CC per AVAX</p>
              ) : (
                <p>
                  {promiseData["dexXMTSPRate"]}
                  AVAX per CC
                </p>
              )}
              <img
                alt="direction"
                className="two-direction-img ml-5"
                src="two-direction.png"
                onClick={() => {
                  if (rate === 1) setRate(0);
                  else setRate(1);
                }}
              />
            </div>
          </div>
          <div className="buy-sell-btn-area">
            { swap ? (
              ((avaxamount < promiseData["avax_val"])) ? (
                <button className="btn btn-buy-ccoin fs-30" disabled={!swap}>Swap to CCoin</button>
              ) : (
                avaxamount > promiseData["maxxout"] ?
                <button className="btn btn-buy-ccoin fs-30" disabled={true}>Avax Max Out</button> :
                <button className="btn btn-buy-ccoin fs-30" disabled={true}>Insufficient Balance</button>
              )
            ) : (
              <button className="btn btn-buy-ccoin fs-30" disabled={!swap}>Swap to CCoin</button>
            )}
            { !swap ? (ccoinamount < promiseData["ccoin_token"] ? (
              <button className="btn btn-buy-avax fs-30" disabled={swap}>Swap to Avax</button>
            ): (
              ccoinamount > promiseData["maxccout"] ? 
              <button className="btn btn-buy-avax fs-30" disabled={true}>CCoin Max Out</button> :
              <button className="btn btn-buy-avax fs-30" disabled={true}>Insufficient Balance</button>
            )) : (
              <button className="btn btn-buy-avax fs-30" disabled={swap}>Swap to Avax</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Swap;

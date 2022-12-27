import React, { useState, useEffect } from "react";
import { ProgressBar } from "react-bootstrap";
import { useWeb3React } from "@web3-react/core";
import BigNumber from "bignumber.js";
import { toast } from "react-toastify";

const Purchase = ({ promiseData, leftDays, buy_CCOIN, isEnded }) => {
  const { account } = useWeb3React();
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);
  const [rate, setRate] = useState(0.0);

  // const bigAmount = new BigNumber(fromAmount).multipliedBy(10 ** 6).toFixed(4);

  const progress = (sold, total) => {
    if (sold < total) {
      return ((sold * 100) / total).toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 5,
      });
    } else {
      return 100;
    }
  };

  const clickBuy = async () => {
    await buy_CCOIN(Number(fromAmount));
    toast.success("Purchase successful", {
      position: "top-center",
      autoClose: 4000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setFromAmount(0);
    setToAmount(0);
  };

  return (
    <>
      <div className="right-contentarea">
        {isEnded ? (
          (Date.parse(new Date()) < Date.parse(promiseData['start_day'])) ? 
          (
            <div className="calendar-section">
            <img alt="calendar" src="calendar.png" />
              <p className="font-non-nulshock fs-20 ml-10">Presale not start</p>
            </div>
          ) : (
            <div className="calendar-section">
            <img alt="calendar" src="calendar.png" />
              <p className="font-non-nulshock fs-20 ml-10">Presale ended</p>
            </div>
          )
        ) : (
          <div className="calendar-section">
            <img alt="calendar" src="calendar.png" />
            <p className="calendar-title font-non-nulshock fs-20 ml-10">
              {leftDays()} day(s) left
            </p>
          </div>
        )}

        <div className="progress-section font-non-nulshock t-white fs-20">
          <div className="progress-title">
            <p>Progress</p>
            <p>
              {promiseData["total_token"] === undefined &&
              promiseData["sold_token"] === undefined
                ? "0/0"
                : Number(promiseData["sold_token"]).toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 4,
                  }) +
                  "/" +
                  Number(promiseData["total_token"]).toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 4,
                  })}{" "}
              CC
            </p>
          </div>
          <div className="mt-10">
            <ProgressBar
              label={
                promiseData["total_token"] === undefined &&
                promiseData["sold_token"] === undefined
                  ? "0%"
                  : `${progress(
                      Number(promiseData["sold_token"]),
                      Number(promiseData["total_token"])
                    )}%`
              }
              now={
                promiseData["sold_token"] === undefined &&
                promiseData["total_token"] === undefined
                  ? 0
                  : progress(
                      Number(promiseData["sold_token"]),
                      Number(promiseData["total_token"]) +
                        Number(promiseData["sold_token"])
                    ) < 100
                  ? progress(
                      Number(promiseData["sold_token"]),
                      Number(promiseData["total_token"])
                    )
                  : 100
              }
              className={
                progress(
                  Number(promiseData["sold_token"]),
                  Number(promiseData["total_token"])
                ) < 100
                  ? "progress1"
                  : "progress2"
              }
            />
          </div>
        </div>
        <div className="from-container">
          <div className="balance-title font-non-nulshock t-grey2 fs-20">
            <p>From</p>
            <p>Available: {promiseData["avax_val"]}</p>
          </div>
          <div className="avax-container">
            <input
              className="input-value-section t-grey2 fs-30"
              type="number"
              placeholder="0.0"
              value={fromAmount}
              disabled = { (account && !isEnded) ? false: true }
              readOnly={ account ? false: true }
              onChange={(e) => {
                setToAmount(
                  Number(
                    e.target.value * promiseData["token_price"]
                  ).toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 4,
                  })
                );
                setFromAmount(e.target.value);
              }}
            />
            <div className="max-button-section">
              <button
                className="max-button"
                onClick={() => {
                  setFromAmount(Number(promiseData["avax_val"]));
                  setToAmount(
                    Number(
                      promiseData["token_price"] *
                        Number(promiseData["avax_val"])
                    )
                  );
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
        <div className="mt-20 mb-20">
          <img alt="arrow" src="yellow-arrow.png" />
        </div>
        <div className="to-container">
          <div className="available-title font-non-nulshock t-grey2 fs-20">
            <p>To</p>
            <p>Balance: {promiseData["token_price"]}</p>
          </div>
          <div className="ccoin-container">
            <input
              className="input-value-section t-grey2 fs-30"
              type="number"
              placeholder="0.0"
              value={Number(toAmount).toLocaleString(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 4,
              })}
              readOnly={ (account && !isEnded) ? false: true }
              onChange={(e) => {
                setFromAmount(
                  Number(
                    e.target.value / promiseData["token_price"]
                  ).toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 4,
                  })
                );
                setToAmount(e.target.value);
              }}
            />
            <div className="ccoin-section font-non-nulshock t-grey3 fs-25">
              <img alt="coin" className="ccoin-img" src="c-coin-small.png" />
              <p className="ccoin-letter ml-20">CC</p>
            </div>
          </div>
        </div>
        <div className="ccoin-price-section font-non-nulshock t-white fs-20">
          <p>Price</p>
          <div className="ccoin-price-title">
            {rate === 0 ? (
              <p>{promiseData["token_price"]} CC per AVAX</p>
            ) : (
              <p>
                {Number(1 / promiseData["token_price"]).toLocaleString(
                  undefined,
                  {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 4,
                  }
                )}{" "}
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
        <div>
          {fromAmount > promiseData["avax_val"] * 1 ? (
            <button className="insufficient-button font-non-nulshock fs-30">
              Insufficient Balance
            </button>
          ) : fromAmount <= 0 ? (
            <button className="amount-button font-non-nulshock fs-30">
              Enter an Amount
            </button>
          ) : fromAmount < 0.001 ? (
            <button className="min-price-button font-non-nulshock fs-30">
              Min. Purchase is 0.001 AVAX
            </button>
          ) : (
            (!isEnded ? (
              <button
                className="big-order-button13 font-non-nulshock fs-30"
                onClick={clickBuy}
              >
                Complete Order
              </button>
            ): (
              <button
                className="amount-button font-non-nulshock fs-30"
                onClick={clickBuy} disabled
              >
                Presale Ended
              </button>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Purchase;

import React, { useState, useEffect } from "react";
import { ProgressBar } from "react-bootstrap";
import { toast } from "react-toastify";

const Vesting = ({ account, promiseData, presaleStart, isEnded, claimCC }) => {
  const [fromAmount, setFromAmount] = useState(0);
  const [vestingflag, setvestingflag] = useState(false);
  const [vestedtime, setVestedtime] = useState('');

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

  useEffect(() => {
    var current_time = (new Date()).getTime();
    if(Number(promiseData['vest_starttime']) < Number(promiseData['vesting_endtime'])) {
      if (current_time < Number(promiseData['vesting_endtime'])*1000) {
        const leftDay = ((promiseData["vesting_endtime"]*1000 - current_time) / 86400000).toFixed(0);
        setVestedtime(leftDay);
        setvestingflag(true);
      } else {  
        setvestingflag(false);
      }
    }
  })

  const claimCCoin = async () => {
    await claimCC(Number(fromAmount));
    toast.success("Succesfuly withraw token!", {
      position: "top-center",
      autoClose: 4000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setFromAmount(0);
  };

  return (
    <>
      <div className="main-content">
        <div className="container-flex marginAuto card-content">
          <div className="rightsidebar vesting-area">
            <div className="flex-column alignCenter rightsidebar-content">
              <div className="">
                <div className="progress-section font-non-nulshock t-white fs-20">
                  <div className="progress-title">
                    <p>Claim Progress</p>
                    <p>
                      {promiseData["vested_token"] === undefined &&
                      promiseData["unlocked_token"] == undefined
                        ? "0/0"
                        : Number(
                            promiseData["unlocked_token"]
                          ).toLocaleString() +
                          "/" +
                          Number(
                            promiseData["vested_token"]
                          ).toLocaleString()}{" "}
                      CC
                    </p>
                  </div>
                  <div className="mt-10">
                    <ProgressBar
                      label={
                        promiseData["vested_token"] === undefined &&
                        promiseData["unlocked_token"] == undefined
                          ? "0%"
                          : `${progress(
                              Number(promiseData["unlocked_token"]),
                              Number(promiseData["vested_token"])
                            )}%`
                      }
                      now={
                        promiseData["unlocked_token"] == undefined &&
                        promiseData["vested_token"] == undefined
                          ? 0
                          : progress(
                              Number(promiseData["unlocked_token"]),
                              Number(promiseData["vested_token"]) +
                                Number(promiseData["unlocked_token"])
                            ) < 100
                          ? progress(
                              Number(promiseData["unlocked_token"]),
                              Number(promiseData["vested_token"])
                            )
                          : 100
                      }
                      className={
                        progress(
                          Number(promiseData["unlocked_token"]),
                          Number(promiseData["vested_token"])
                        ) < 100
                          ? "progress1"
                          : "progress2"
                      }
                    />
                  </div>
                </div>
                <div className="from-container">
                  <div className="balance-title font-non-nulshock t-white fs-20">
                    <p>Withrawable CCoin amount</p>
                  </div>
                  <div className="avax-container">
                    <input
                      className="input-value-section t-white fs-30"
                      type="number"
                      placeholder="0.0"
                      value={
                        promiseData["withrawable_token"] <= 0
                          ? ""
                          : Number(promiseData["withrawable_token"]).toLocaleString(
                              undefined,
                              {
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 5,
                              }
                            )
                      }
                      readOnly
                    />
                    <div className="max-button-section">
                      <div className="avax-section font-non-nulshock t-grey3 fs-25">
                        <img
                          alt="avax"
                          className="avax-img ml-20"
                          src="c-coin-logo.png"
                        />
                        <p className="avax-letter ml-20">CC</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-20 mb-20">
                  {promiseData["withrawable_token"] <= 0 ? (
                    (promiseData["locked_token"] == 0) ? (
                      <button className="insufficient-button font-non-nulshock">Locked Token is Nothing</button>
                    ): (
                      <button className="insufficient-button font-non-nulshock">
                        {
                          (!vestingflag ? 'Claim Period Not Yet Started': 'Next Claim Day: '+ vestedtime + ' days after') 
                        }
                      </button>
                    )
                  ) : (
                    <button
                      className="big-order-button font-non-nulshock fs-30"
                      onClick={claimCCoin}
                    >
                      Claim CCoin
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vesting;

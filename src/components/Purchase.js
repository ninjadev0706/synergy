import React, { useState, useEffect } from "react";
import { Dropdown, ProgressBar } from "react-bootstrap";
import { useWeb3React } from "@web3-react/core";
import BigNumber from "bignumber.js";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import TokenList from "./TokenList";
import { tokenlist } from "../config/tokens";
import erc20_ABI from "../config/abi/erc20.json";

let syrfAddr = "0x558C304e163671B2e6278de7b0cE384A28441111";

const Purchase = ({ promiseData, leftDays, buyWithBNB, isEnded, buyWithTokens }) => {
  const { account, library } = useWeb3React();
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);
  const [approveLoading, setApproveLoading] = useState(false);
  const [rate, setRate] = useState(0.0);
  const [selectedToken, setSelectToken] = useState(1);
  const [selectedTokenPrice, setSelectTokenPrice] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const [availableTokenBal, setAvailableTokenBal] = useState(0);
  const [availableSYRF, setAvailableSYRF] = useState(0);
  const [allowance, setAllowance] = useState(0);

  promiseData["total_token"] = 10000000;

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
    await buyWithBNB(Number(fromAmount));
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

  const buyWithToken = async () => {
    const selectedTokenAddr = tokenlist.find(item => item.id === selectedToken).address;
    await buyWithTokens(ethers.utils.parseUnits(fromAmount, 18), selectedTokenAddr);
    toast.success("Purchase successful", {
      position: "top-center",
      autoClose: 4000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setFromAmount(0);
    setToAmount(0);

    fetchData();
  };


  const ApproveToken = async () => {
    setApproveLoading(true);
    const selectedTokenAddr = tokenlist.find(item => item.id === selectedToken).address;
    const { ethereum } = window;

    if (ethereum && account) {
      let signer;
      let _provider;
      if (library) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        _provider = provider;
        signer = provider.getSigner();
      } else {
        const provider = new ethers.providers.JsonRpcProvider(
          "https://data-seed-prebsc-1-s3.binance.org:8545/"
        );
        _provider = provider;
        signer = provider.getSigner(selectedTokenAddr);
      }
      const TokenContract = new ethers.Contract(selectedTokenAddr, erc20_ABI, signer);
      try {
        const approve = await TokenContract.approve(promiseData.icoAddr, ethers.utils.parseUnits(fromAmount, 18));
        await approve.wait();
      } catch (err) {
        console.log("err => ", err)
      }
      console.log("end")
      setApproveLoading(false);
    }
  }

  const fetchData = async () => {
    const selectedTokenAddr = tokenlist.find(item => item.id === selectedToken).address;
    const { ethereum } = window;

    if (ethereum && account) {
      let signer;
      let _provider;
      if (library) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        _provider = provider;
        signer = provider.getSigner();
      } else {
        const provider = new ethers.providers.JsonRpcProvider(
          "https://data-seed-prebsc-1-s3.binance.org:8545/"
        );
        _provider = provider;
        signer = provider.getSigner(selectedTokenAddr);
      }

      let availableBal;
      if (selectedToken === 1) {
        const balance = await _provider.getBalance(account);
        const balanceInEth = ethers.utils.formatEther(balance);
        setAvailableTokenBal(balanceInEth);
      } else {
        const TokenContract = new ethers.Contract(selectedTokenAddr, erc20_ABI, signer);
        availableBal = await TokenContract.balanceOf(account);
        const allow_val = await TokenContract.allowance(account, promiseData.icoAddr);
        setAllowance(Number(allow_val));
        setAvailableTokenBal(new BigNumber(availableBal._hex).dividedBy(10 ** 18).toNumber());
      }
      const SYRFContract = new ethers.Contract(syrfAddr, erc20_ABI, signer);
      const availableToken = await SYRFContract.balanceOf(account);
      setAvailableSYRF(new BigNumber(availableToken._hex).dividedBy(10 ** 18).toNumber());
    }
  }

  useEffect(() => {
    setFromAmount(0);
    setToAmount(0);
    fetchData();
  }, [selectedToken, account, approveLoading])

  useEffect(() => {
    if (promiseData.bnbprice) {
      console.log("++++", promiseData)
      let price;
      if (selectedToken === 1) {
        price = promiseData.bnbprice / (10 ** 8);
      } else {
        price = 1;
      }
      setSelectTokenPrice(price);
    }
  }, [account, selectedToken])

  return (
    <>
      <div className="right-contentarea">
        {promiseData.icoState !== 1 ? (
          promiseData.icoState === 0 ?
            (
              <div className="calendar-section">
                <img alt="calendar" src="calendar.png" />
                <p className="font-non-nulshock fs-20 ml-10">&nbsp;Presale not start</p>
              </div>
            ) : (
              <div className="calendar-section">
                <img alt="calendar" src="calendar.png" />
                <p className="font-non-nulshock fs-20 ml-10">&nbsp;Presale ended</p>
              </div>
            )
        ) : (
          <div className="calendar-section">
            <img alt="calendar" src="calendar.png" />
            <p className="calendar-title font-non-nulshock fs-20 ml-10">
              &nbsp;{leftDays()} day(s) left
            </p>
          </div>
        )}

        <div className="progress-section font-non-nulshock t-white fs-20">
          <div className="progress-title">
            <p>Progress</p>
            <p>
              {promiseData && promiseData.soldAmount} / 10000000{" "}
              SYRF
            </p>
          </div>
          <div className="mt-10">
            <ProgressBar
              label={
                promiseData["total_token"] === undefined &&
                  promiseData["soldAmount"] === undefined
                  ? "0%"
                  : `${progress(
                    Number(promiseData["soldAmount"]),
                    Number(promiseData["total_token"])
                  )}%`
              }
              now={
                promiseData["soldAmount"] === undefined &&
                  promiseData["total_token"] === undefined
                  ? 0
                  : progress(
                    Number(promiseData["soldAmount"]),
                    Number(promiseData["total_token"]) +
                    Number(promiseData["soldAmount"])
                  ) < 100
                    ? progress(
                      Number(promiseData["soldAmount"]),
                      Number(promiseData["total_token"])
                    )
                    : 100
              }
              className={
                progress(
                  Number(promiseData["soldAmount"]),
                  Number(promiseData["total_token"])
                ) < 100
                  ? "progress1"
                  : "progress2"
              }
            />
          </div>
        </div>
        <div className="position-relative">
          <div className="from-container">
            <div className="balance-title font-non-nulshock t-grey2 fs-20">
              <p>From</p>
              <p>Available: {account ? availableTokenBal : 0}</p>
            </div>
            <div className="avax-container">
              <input
                className="input-value-section t-grey2 fs-30"
                type="number"
                placeholder="0.0"
                value={fromAmount}
                disabled={(account && promiseData.icoState === 1) ? false : true}
                readOnly={account ? false : true}
                onChange={(e) => {
                  setToAmount(e.target.value * selectedTokenPrice * (10 ** 2) / promiseData.syrfPrice);
                  setFromAmount(e.target.value);
                }}
              />
              <div className="max-button-section">
                <button
                  className="max-button"
                  onClick={() => {
                    setFromAmount(availableTokenBal);
                    setToAmount(availableTokenBal * selectedTokenPrice * (10 ** 2) / promiseData.syrfPrice);
                  }}
                >
                  MAX
                </button>
                <div className="selectedtoken font-non-nulshock t-grey3 fs-25 justify-content-start"
                  onClick={() => setOpen(!isOpen)}
                >
                  <img alt="" className="avax-img ml-20" src={`${tokenlist.find(item => item.id === selectedToken).image}`} />
                  <p className="avax-letter ml-20">{tokenlist.find(item => item.id === selectedToken).name}</p>
                </div>
              </div>
            </div>
          </div>
          {isOpen && <TokenList setOpen={setOpen} setSelectToken={setSelectToken} />}
        </div>
        <div className="swap-icon">
          <img alt="arrow" src="yellow-arrow.png" />
        </div>
        <div className="to-container">
          <div className="available-title font-non-nulshock t-grey2 fs-20">
            <p>To</p>
            <p>Balance: {availableSYRF}</p>
          </div>
          <div className="ccoin-container">
            <input
              className="input-value-section t-grey2 fs-30"
              type="number"
              placeholder="0.0"
              value={toAmount}
              readOnly={(account && !isEnded) ? false : true}
              onChange={(e) => {
                setFromAmount(e.target.value * (promiseData.syrfPrice / (10 ** 2)) / selectedTokenPrice);
                setToAmount(e.target.value);
              }}
            />
            <div className="ccoin-section font-non-nulshock t-grey3 fs-25">
              <img alt="coin" className="ccoin-img" src="./tokens/SYRF.png" />
              <p className="ccoin-letter ml-20">SYRF</p>
            </div>
          </div>
        </div>
        <div className="ccoin-price-section font-non-nulshock t-white fs-20">
          <p>Price</p>
          <div className="ccoin-price-title">
            {rate === 0 ? (
              <p>
                {promiseData.syrfPrice && Number(selectedTokenPrice * (10 ** 2) / promiseData.syrfPrice).toLocaleString(
                  undefined,
                  {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 4,
                  }
                )}{" "}
                SYRF per {tokenlist.find(item => item.id === selectedToken).name}
              </p>
            ) : (
              <p>
                {selectedTokenPrice && Number(promiseData.syrfPrice / (selectedTokenPrice * (10 ** 2))).toLocaleString(
                  undefined,
                  {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 4,
                  }
                )}{" "}
                {tokenlist.find(item => item.id === selectedToken).name} per SYRF
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
          <>
            {
              promiseData.icoState === 0 ?
                <button
                  className="amount-button font-non-nulshock fs-30"
                  disabled
                >
                  Presale isn't started yet
                </button>
                :
                <>
                  {
                    promiseData.icoState !== 1 ?
                      <button
                        className="amount-button font-non-nulshock fs-30"
                        disabled
                      >
                        Presale Ended
                      </button>
                      :
                      <>
                        {fromAmount > availableTokenBal ? (
                          <button className="insufficient-button font-non-nulshock fs-30">
                            Insufficient Balance
                          </button>
                        ) : fromAmount <= 0 ? (
                          <button className="amount-button font-non-nulshock fs-30">
                            Enter an Amount
                          </button>
                        ) :
                          <>
                            {
                              selectedToken === 1 ?
                                <button
                                  className="big-order-button font-non-nulshock fs-30"
                                  onClick={clickBuy}
                                >
                                  Complete Order
                                </button>
                                :
                                <>
                                  {
                                    !(account && allowance && new BigNumber(allowance).isGreaterThan(0)) ?
                                      <>
                                        {
                                          approveLoading ?
                                            <button
                                              className="big-order-button font-non-nulshock fs-30"
                                            >
                                              Approving ...
                                            </button>
                                            :
                                            <button
                                              className="big-order-button font-non-nulshock fs-30"
                                              onClick={ApproveToken}
                                            >
                                              Approve {tokenlist.find(item => item.id === selectedToken).name}
                                            </button>
                                        }
                                      </>
                                      :
                                      <>
                                        {
                                          promiseData.buyloading ?
                                            <button
                                              className="big-order-button font-non-nulshock fs-30"
                                            >
                                              Completing ...
                                            </button>
                                            :
                                            <button
                                              className="big-order-button font-non-nulshock fs-30"
                                              onClick={buyWithToken}
                                            >
                                              Complete Order
                                            </button>
                                        }
                                      </>

                                  }
                                </>
                            }
                          </>
                        }
                      </>
                  }
                </>
            }
          </>
        </div>
      </div>
    </>
  );
};

export default Purchase;

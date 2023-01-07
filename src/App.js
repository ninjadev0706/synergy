import { useState, useEffect } from "react";
// import ccoin_abi from "./utils/CCOINabi.json";
// import presale_abi from "./utils/PRESALEabi.json";
// import vesting_abi from "./utils/VESTINGabi.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import Swap from "./pages/Swap";
import Vesting from "./pages/Vesting";
import Hero from "./components/Hero";
import BigNumber from "bignumber.js";
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import "./App.css";
import LoadingOverlay from "react-loading-overlay";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ICOContract_ABI from "./config/abi/ICOContract_ABI.json";
import erc20_ABI from "./config/abi/erc20.json";

LoadingOverlay.propTypes = undefined;

const ICOContract_Addr = "0x8C35f0aF29E244449b108AA51295FF98B09B468f";

let ICOContract;

function App() {
  const [loading, setLoading] = useState(false);
  const [buyLoading, setBuyLoading] = useState(false);
  const { account, library } = useWeb3React();
  const [promiseData, setPromiseData] = useState([]);

  const buyWithBNB = async (amount) => {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      ICOContract = new ethers.Contract(ICOContract_Addr, ICOContract_ABI, signer);
      let bought = await ICOContract.invest({
        value: ethers.utils.parseEther(String(amount)),
      });
      await bought.wait();

      await getContractData();
    }
  };

  const buyWithTokens = async (_amount, _tokenAddr) => {
    setBuyLoading(true);
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      ICOContract = new ethers.Contract(ICOContract_Addr, ICOContract_ABI, signer);
      let bought = await ICOContract.buyWithTokens(_amount, _tokenAddr);
      await bought.wait();

      await getContractData();
    }
    setBuyLoading(false);
  }

  useEffect(() => {
    async function contractdata() {
      const { ethereum } = window;
      if (ethereum) {
        await getContractData();
      }
    }
    contractdata();
  }, [account]);

  const getContractData = async () => {
    setLoading(true);
    const { ethereum } = window;
    if (ethereum) {
      let signer;
      if (library) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        signer = provider.getSigner();
      } else {
        const provider = new ethers.providers.JsonRpcProvider(
          "https://data-seed-prebsc-1-s3.binance.org:8545/"
        );
        signer = provider.getSigner(ICOContract_Addr);
      }

      ICOContract = new ethers.Contract(ICOContract_Addr, ICOContract_ABI, signer);

      let readData = [];
      const bnbPrice = await ICOContract.getLatestPrice();
      const syrfPrice = await ICOContract.tokenPrice();
      const icoState = await ICOContract.ICOState();
      const soldAmount = await ICOContract.raisedAmount();

      readData['icoAddr'] = ICOContract_Addr;
      readData['bnbprice'] = bnbPrice.toNumber();
      readData['syrfPrice'] = syrfPrice.toNumber();
      readData['icoState'] = icoState;
      readData['soldAmount'] = new BigNumber(soldAmount._hex).dividedBy(10 ** 18).toNumber();
      readData['buyloading'] = buyLoading;
      setPromiseData(readData);
    }
    setLoading(false);
  };

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home
            account={account}
            promiseData={promiseData}
            buyWithBNB={buyWithBNB}
            buyWithTokens={buyWithTokens}
          />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;

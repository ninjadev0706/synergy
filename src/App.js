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
//dapp
// import { DAppProvider } from "@usedapp/core";
import "./App.css";
import LoadingOverlay from "react-loading-overlay";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ICOContract_ABI from "./config/abi/ICOContract_ABI.json";
import erc20_ABI from "./config/abi/erc20.json";

LoadingOverlay.propTypes = undefined;

// const ccoin_addr = "0x8E331576a609DD31297bD607F763ea6Cee15098a";
// const presale_addr = "0x3542309e5AC2907963993A1763750C488d0D742B";
// const vesting_addr = "0x6814C165b9C32d04633A56b6B9B634B5d6b559a7";
const ICOContract_Addr = "0x70d54117DD67e0BcF4b9d07fc77A33fE7Af2C0Ef";

// let CCOINPortal;
// let PresalePortal;
// let VestingPortal;

let ICOContract;

function App() {
  const [loading, setLoading] = useState(false);
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

  // const claimCC = async (amount) => {
  //   console.log("ASDfasdfasdfasd");
  //   const { ethereum } = window;
  //   if (ethereum) {
  //     const provider = new ethers.providers.Web3Provider(ethereum);
  //     const signer = provider.getSigner();
  //     VestingPortal = new ethers.Contract(vesting_addr, vesting_abi, signer);
  //     let withraw = await VestingPortal.withdrawToken();
  //     await withraw.wait();

  //     await getContractData();
  //   }
  // };

  useEffect(() => {
    async function contractdata() {
      const { ethereum } = window;
      if (ethereum) {
        await getContractData();
      }
    }
    contractdata();
  }, [account]);

  const getTokenBalance = async (tokenAddr) => {
    console.log("token address => ", tokenAddr)
    // const { ethereum } = window;

    // if (ethereum) {
      // let signer;
      // if (library) {
      //   const provider = new ethers.providers.Web3Provider(ethereum);
      //   signer = provider.getSigner();
      // } else {
      //   const provider = new ethers.providers.JsonRpcProvider(
      //     "https://data-seed-prebsc-1-s3.binance.org:8545/"
      //   );
      //   signer = provider.getSigner(tokenAddr);
      // }

      // const TokenContract = new ethers.Contract(tokenAddr, erc20_ABI, signer);
      // let availableBal;
      // availableBal = await TokenContract.balanceOf(account);
      // console.log(availableBal);

      // return availableBal;
    // }
  }

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
      const remainingAmount = await ICOContract.getICOTokenBalance();
      const soldAmount = await ICOContract.raisedAmount();

      readData['bnbprice'] = bnbPrice.toNumber();
      readData['syrfPrice'] = syrfPrice.toNumber();
      readData['icoState'] = icoState;
      readData['soldAmount'] = soldAmount.toNumber();
      readData['remainingAmount'] = new BigNumber(remainingAmount._hex).dividedBy(10 ** 18).toNumber();
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
        {/* {loading && (
          <div
            style={{
              background: "#00000055",
              width: "100%",
              height: "100%",
              zIndex: "1000",
              position: "fixed",
              top: 0,
            }}
          >
            <LoadingOverlay
              active={true}
              spinner
              text="Loading ..."
              styles={{
                overlay: (base) => ({
                  ...base,
                  background: "rgba(255, 255, 255)",
                  position: "absolute",
                  marginTop: "30%",
                }),
              }}
              fadeSpeed={9000}
            ></LoadingOverlay>
          </div>
        )} */}
        {/* <Hero promiseData={promiseData} /> */}
        {/* <DAppProvider config={{}}> */}
        <Routes>
          <Route path="/" element={<Home
            account={account}
            promiseData={promiseData}
            buyWithBNB={buyWithBNB}
            getTokenBalance={getTokenBalance}
          />} />

          {/* <Route path="/swap" element={<Swap 
              account={account}
              promiseData={promiseData}
              presaleStart={presaleStart}
              isEnded={isEnded}
            />} />
            <Route
              path="/vesting"
              element={
                <Vesting
                  account={account}
                  promiseData={promiseData}
                  presaleStart={presaleStart}
                  isEnded={isEnded}
                  claimCC={claimCC}
                />
              }
            /> */}
        </Routes>
        {/* </DAppProvider> */}
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;

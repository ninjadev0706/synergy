import { useState, useEffect } from "react";
import ccoin_abi from "./utils/CCOINabi.json";
import presale_abi from "./utils/PRESALEabi.json";
import vesting_abi from "./utils/VESTINGabi.json";
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
LoadingOverlay.propTypes = undefined;

const ccoin_addr = "0x8E331576a609DD31297bD607F763ea6Cee15098a";
const presale_addr = "0x3542309e5AC2907963993A1763750C488d0D742B";
const vesting_addr = "0x6814C165b9C32d04633A56b6B9B634B5d6b559a7";

let CCOINPortal;
let PresalePortal;
let VestingPortal;

function App() {
  const [loading, setLoading] = useState(false);
  const { account, library } = useWeb3React();
  const [presaleStart, setPresaleStart] = useState(0);
  const [isEnded, setIsEnded] = useState(false);
  const [promiseData, setPromiseData] = useState([]);

  const buy_CCOIN = async (amount) => {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      PresalePortal = new ethers.Contract(presale_addr, presale_abi, signer);
      let bought = await PresalePortal.buyTokens({
        value: ethers.utils.parseEther(String(amount)),
      });
      await bought.wait();

      await getContractData();
    }
  };

  const claimCC = async (amount) => {
    console.log("ASDfasdfasdfasd");
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      VestingPortal = new ethers.Contract(vesting_addr, vesting_abi, signer);
      let withraw = await VestingPortal.withdrawToken();
      await withraw.wait();

      await getContractData();
    }
  };

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
          "https://api.avax-test.network/ext/bc/C/rpc"
        );
        signer = provider.getSigner(ccoin_addr);
      }

      CCOINPortal = new ethers.Contract(ccoin_addr, ccoin_abi, signer);
      PresalePortal = new ethers.Contract(presale_addr, presale_abi, signer);
      VestingPortal = new ethers.Contract(vesting_addr, vesting_abi, signer);

      const promises = [];

      promises.push(await CCOINPortal.balanceOf(vesting_addr)); // total presale token amount
      promises.push(await PresalePortal.totalsold()); /// sold token amount
      promises.push(await PresalePortal.START()); // get start time
      promises.push(await PresalePortal.PERIOD()); /// get duration
      promises.push(await PresalePortal.getCurrentTime()); // get current time
      promises.push(await PresalePortal.isActive()); // get active flag
      promises.push(await PresalePortal.tokenchangeRate()); // get token change rate
      promises.push(await CCOINPortal.totalSupply()); // total supply token amount
      if (account) {
        promises.push(await PresalePortal.getAvaxBal(account)); /// buy available avax amount
        promises.push(await CCOINPortal.balanceOf(account)); // cc token amount
        promises.push(await VestingPortal.recipients(account)); // locked cc token amount by user
        promises.push(await VestingPortal.getWithdrawable(account)); // withrawable cc token amount
        promises.push(await VestingPortal.getVested(account)); // unlocked cc token amount
        promises.push(await VestingPortal.getTGETime()); // vesting start_day
        promises.push(await VestingPortal.getVestingEndTime()); // vesting end_day
        promises.push(await CCOINPortal.dexCCRate()); // dexCCRate
        promises.push(await CCOINPortal.dexXMTSPRate()); // dexXMTSPRate
        promises.push(await VestingPortal.getLocked(account)); //get Locked CCoin
        promises.push(await CCOINPortal.maxCCOut());
        promises.push(await CCOINPortal.maxXOut());
      }

      let temp = [];
      Promise.all(promises).then((responses) => {
        responses.forEach((response, index) => {
          temp.push(response);
        });
        let promisedata = [];
        promisedata["total_token"] = new BigNumber(Number(temp[0]))
          .dividedBy(10 ** 18)
          .toFixed(2);
        promisedata["sold_token"] = new BigNumber(Number(temp[1]))
          .dividedBy(10 ** 18)
          .toFixed(2);
        let presaleStart_ = temp[2];
        promisedata["start_day"] = new Date(presaleStart_ * 1000).toUTCString();
        let presaleEnd_ = presaleStart_ * 1000 + temp[3] * 86400 * 1000;
        promisedata["end_day"] = new Date(presaleEnd_).toUTCString();
        promisedata["current_time"] = new Date(temp[4] * 1000).toUTCString();
        promisedata["is_active"] = temp[5];
        promisedata["token_price"] = (
          new BigNumber(Number(temp[6])) / 1000
        ).toFixed(3);
        promisedata["total_supply"] = new BigNumber(Number(temp[7]))
          .dividedBy(10 ** 18)
          .toFixed(0);
        if (account) {
          promisedata["avax_val"] = new BigNumber(Number(temp[8]))
            .dividedBy(10 ** 18)
            .toFixed(2);
          promisedata["ccoin_token"] = new BigNumber(Number(temp[9]))
            .dividedBy(10 ** 18)
            .toFixed(2);
          promisedata["vested_token"] = new BigNumber(
            Number(temp[10]["totalAmount"])
          )
            .dividedBy(10 ** 18)
            .toFixed(2);
          promisedata["withrawable_token"] = new BigNumber(Number(temp[11]))
            .dividedBy(10 ** 18)
            .toFixed(2);
          promisedata["unlocked_token"] = new BigNumber(Number(temp[12]))
            .dividedBy(10 ** 18)
            .toFixed(2);
          promisedata["vest_starttime"] = new BigNumber(
            Number(temp[13])
          ).toFixed(0);
          promisedata["vesting_endtime"] = new BigNumber(
            Number(temp[14])
          ).toFixed(0);
          promisedata["dexCCRate"] = new BigNumber(Number(temp[15]))
            .dividedBy(10 ** 18)
            .toFixed(2);
          promisedata["dexXMTSPRate"] = new BigNumber(Number(temp[16]))
            .dividedBy(10 ** 18)
            .toFixed(2);
          promisedata["locked_token"] = new BigNumber(Number(temp[17]))
            .dividedBy(10 ** 18)
            .toFixed(2);
          promisedata["maxccout"] = new BigNumber(Number(temp[18]))
            .dividedBy(10 ** 18)
            .toFixed(2);
          promisedata["maxxout"] = new BigNumber(Number(temp[19]))
            .dividedBy(10 ** 18)
            .toFixed(2);
        } else {
          promisedata["avax_val"] = new BigNumber(Number(0))
            .dividedBy(10 ** 18)
            .toFixed(2);
          promisedata["ccoin_token"] = new BigNumber(Number(0))
            .dividedBy(10 ** 18)
            .toFixed(2);
          promisedata["vested_token"] = new BigNumber(Number(0))
            .dividedBy(10 ** 18)
            .toFixed(2);
          promisedata["withrawable_token"] = new BigNumber(Number(0))
            .dividedBy(10 ** 18)
            .toFixed(2);
          promisedata["unlocked_token"] = new BigNumber(Number(0))
            .dividedBy(10 ** 18)
            .toFixed(2);
          promisedata["vest_starttime"] = new BigNumber(
            Number(temp[13])
          ).toFixed(0);
          promisedata["vesting_endtime"] = new BigNumber(
            Number(temp[14])
          ).toFixed(0);
          promisedata["dexCCRate"] = new BigNumber(Number(temp[15]))
            .dividedBy(10 ** 18)
            .toFixed(2);
          promisedata["dexXMTSPRate"] = new BigNumber(Number(temp[16]))
            .dividedBy(10 ** 18)
            .toFixed(2);
          promisedata["locked_token"] = new BigNumber(Number(0))
            .dividedBy(10 ** 18)
            .toFixed(2);
          promisedata["maxccout"] = new BigNumber(Number(temp[18]))
            .dividedBy(10 ** 18)
            .toFixed(2);
          promisedata["maxxout"] = new BigNumber(Number(temp[19]))
            .dividedBy(10 ** 18)
            .toFixed(2);
        }
        setPromiseData(promisedata);
        setPresaleStart(Number(presaleStart_));
        setIsEnded(!promisedata["is_active"]);
      });
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
          <Route path="/" element={<Home />} />
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
        {/* <ToastContainer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;

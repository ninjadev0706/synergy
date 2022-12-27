import react from "react";


const startTime = "";
const endTime = "";
const tgeTime = "";

const LeftSideBar = ({ account, promiseData, presaleStart, isEnded }) => {
    return (
        <div className="leftsidebar">
            <div className="left-area">
                <div className="flex-row mb-30">
                    <img alt="ccoin" src="c-coin-logo.png" width={80} height={80} />
                    <div className="flex-column ml-20">
                        <span className=" t-gray fs-20 mb-5">PHASE #1</span>
                        <span className=" fs-25">ANGEL ROUND</span>
                    </div>
                </div>
                <div className="flex-column bt-1 pt-20">
                    <span className="leftside-title t-yellow-dark">ON SALE</span>
                    <span className="leftside-value mb-5">{Number(promiseData["total_token"])} CC</span>
                    <span className="leftside-description mb-10 t-gray ">{(Number(promiseData["total_token"]).toFixed(0) * 100 / Number(promiseData["total_supply"])).toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 4,
                })} % of total supply</span>
                </div>
                <div className="flex-column bt-1 pt-20">
                    <span className="leftside-title t-yellow-dark">CC/AVAX</span>
                    <span className="leftside-value mb-5">1 CC = {(promiseData["token_price"] === 0 ? "0" : 1/promiseData["token_price"]).toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 4,
                })} AVAX</span>
                    <span className="leftside-description mb-10 t-gray ">1 AVAX = {promiseData["token_price"]} CC</span>
                </div>
                <div className="flex-column bt-1 pt-20">
                    <span className="leftside-title t-yellow-dark">TERMS</span>
                    <div className="pt-10 mb-10 separateText">
                        <span className="leftside-description t-gray ">Phase start:</span>
                        {!presaleStart ? <span>{startTime}</span> : <span className="leftside-value">{promiseData["start_day"]}</span>}
                    </div>
                    <div className="mb-10 separateText">
                        <span className="leftside-description t-gray ">Phase end:</span>
                        {!presaleStart ? <span>{endTime}</span> : <span className="leftside-value">{promiseData["end_day"]}</span>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSideBar;
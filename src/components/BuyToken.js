import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import "../styles/Home.css";



const BuyToken = ({ account, promiseData, presaleStart, isEnded, buy_CCOIN }) => {

    return (
        <RightSideBar account={account} promiseData={promiseData} presaleStart={presaleStart} isEnded={isEnded} buy_CCOIN={buy_CCOIN} />
    );
};

export default BuyToken;

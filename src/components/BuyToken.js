import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import "../styles/Home.css";



const BuyToken = ({ account, promiseData, buyWithBNB, getTokenBalance }) => {

    return (
        <RightSideBar account={account} promiseData={promiseData} buyWithBNB={buyWithBNB} getTokenBalance={getTokenBalance} />
    );
};

export default BuyToken;

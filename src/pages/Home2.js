import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import "../styles/Home.css";



const Home = ({ account, promiseData, presaleStart, isEnded, buy_CCOIN }) => {

  return (
    <div className="main-content">
      <div className="container-flex marginAuto card-content">
          <LeftSideBar account={account} promiseData={promiseData} presaleStart={presaleStart} isEnded={isEnded} />
          <RightSideBar account={account} promiseData={promiseData} presaleStart={presaleStart} isEnded={isEnded} buy_CCOIN={buy_CCOIN} />
      </div>
    </div>
  );
};

export default Home;

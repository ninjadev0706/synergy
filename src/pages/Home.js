import AboutToken from "../components/AboutToken";
import AppSec from "../components/AppSec";
import Benefit from "../components/Benefit";
import EntrySec from "../components/EntrySec";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import PurchaseToken from "../components/PurchaseToken";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import TokenDetail from "../components/TokenDetail";

const Home = ({ account, promiseData, buyWithBNB, getTokenBalance }) => {

  return (
    <div className="">
      <Menu />
      <PurchaseToken
        account={account}
        promiseData={promiseData}
        buyWithBNB={buyWithBNB}
        getTokenBalance={getTokenBalance}
      />
      <AboutToken />
      <Benefit />
      <TokenDetail />
      <EntrySec />
      <Roadmap />
      <AppSec />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;

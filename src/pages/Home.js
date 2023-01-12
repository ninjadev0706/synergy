import AboutToken from "../components/AboutToken";
import AppSec from "../components/AppSec";
import Whitepaper from "../components/Whitepaper";
import Benefit from "../components/Benefit";
import Potential from "../components/Potential";
import EntrySec from "../components/EntrySec";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import PurchaseToken from "../components/PurchaseToken";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import TokenDetail from "../components/TokenDetail";

const Home = ({ account, promiseData, buyWithBNB, buyWithTokens }) => {

  return (
    <div className="">
      <Menu />
      <PurchaseToken
        account={account}
        promiseData={promiseData}
        buyWithBNB={buyWithBNB}
        buyWithTokens={buyWithTokens}
      />
      <AboutToken />
      <Benefit />
      <TokenDetail />
      <EntrySec />
      <Roadmap />
      <Potential />
      <Whitepaper />
      <AppSec />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;

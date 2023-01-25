import BuyToken from "./BuyToken";

const PurchaseToken = ({ account, promiseData, buyWithBNB, buyWithTokens }) => {

  const addNetwork = async () => {
    const { ethereum } = window;
    try {
      await ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x1CC",
            chainName: "Synergy.Surf.HTTPS",
            nativeCurrency: {
              name: "SYRF",
              symbol: "SYRF",
              decimals: 18,
            },
            rpcUrls: ["https://48384-57269.pph-server.de:80/"],
            // blockExplorerUrls: [""],
          },
        ],
      });
    } catch (addError) {
      console.error(addError);
    }
  }

  return (
    <section className="main-banner" id="home">
      <div className="banner-inner">
        <div className="purchase-token">

          <div className="row">
            <div className="col-lg-12">
              <div className="lower-content">
                <div className="row clearfix">
                  <div className="counter-col col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="ban-contain">
                            <div className="banner-head">
                              <h1 data-aos="zoom-in" data-aos-duration="2000">
                                Integrating <br /> E-Commerce with Blockchain
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="header-desc">
                          The platform helps investors ensure a safe entry to our coin
                        </p>
                      </div>
                      <div className="add-btn">
                        {/* <a
                          href="/"
                          className="main-btn"
                        >
                          <span className="txt">Purchase tokens</span>
                        </a> */}
                        <div className="d-flex gap-10 wrapper" onClick={addNetwork}>
                          <div>Add SYRF Network</div>
                          <div><img alt="" src="./images/metamask.svg" width="20px" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="progress-col col-lg-6 col-md-12 col-sm-12">
                    <BuyToken
                      account={account}
                      promiseData={promiseData}
                      buyWithBNB={buyWithBNB}
                      buyWithTokens={buyWithTokens}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseToken;

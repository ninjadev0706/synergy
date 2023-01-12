import { useMediaQuery } from "react-responsive";

const TokenDetail = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 567px)",
  });

  return (
    <section className="token-detail p-100 pb-20" id="token">
      <div className="container">
        <div className="">
          <div className="col-lg-12">
            <div className="main-head">
              <h2 data-aos="fade-up" data-aos-duration="2000">
                Tokenomics
              </h2>
              <span className="main-bor"></span>
            </div>
          </div>
        </div>
        <div className="mt-5 tokenomics">
          {isDesktopOrLaptop && <table>
            <thead>
              <tr>
                <th className="col-xs-12 col-sm-4">
                  <div className="d-flex title">
                    <div><img src="/images/token-description.png" alt="" height="20px" /></div>
                    <div>Description</div>
                  </div>
                </th>
                <th className="col-xs-12 col-sm-4">
                  <div className="d-flex title">
                    <div><img src="/images/token-allocation.png" alt="" height="20px" /></div>
                    <div>Allocation</div>
                  </div>
                </th>
                <th className="col-xs-12 col-sm-4">
                  <div className="d-flex title">
                    <div><img src="/images/token-tokens.png" alt="" height="20px" /></div>
                    <div>Tokens</div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="col-xs-12 col-sm-4">
                  <div className="item">Advisory</div>
                </td>
                <td className="col-xs-12 col-sm-4">
                  <div className="item">5%</div>
                </td>
                <td className="col-xs-12 col-sm-4">
                  <div className="item">1,000,000,000</div>
                </td>
              </tr>
              <tr>
                <td className="col-xs-12 col-sm-4">
                  <div className="item">Development</div>
                </td>
                <td className="col-xs-12 col-sm-4">
                  <div className="item">5%</div>
                </td>
                <td className="col-xs-12 col-sm-4">
                  <div className="item">1,000,000,000</div>
                </td>
              </tr>
              <tr>
                <td className="col-xs-12 col-sm-4">
                  <div className="item">Pre Sale</div>
                </td>
                <td className="col-xs-12 col-sm-4">
                  <div className="item">20%</div>
                </td>
                <td className="col-xs-12 col-sm-4">
                  <div className="item">4,000,000,000</div>
                </td>
              </tr>
              <tr>
                <td className="col-xs-12 col-sm-4">
                  <div className="item">Public Sale</div>
                </td>
                <td className="col-xs-12 col-sm-4">
                  <div className="item">50%</div>
                </td>
                <td className="col-xs-12 col-sm-4">
                  <div className="item">10,000,000,000</div>
                </td>
              </tr>
              <tr>
                <td className="col-xs-12 col-sm-4">
                  <div className="item">Bounties</div>
                </td>
                <td className="col-xs-12 col-sm-4">
                  <div className="item">10%</div>
                </td>
                <td className="col-xs-12 col-sm-4">
                  <div className="item">2,000,000,000</div>
                </td>
              </tr>
              <tr>
                <td className="col-xs-12 col-sm-4">
                  <div className="item">Liquidity Reserve</div>
                </td>
                <td className="col-xs-12 col-sm-4">
                  <div className="item">10%</div>
                </td>
                <td className="col-xs-12 col-sm-4">
                  <div className="item">2,000,000,000</div>
                </td>
              </tr>
              <tr>
                <td className="col-xs-12 col-sm-4">
                  <div className="item">Total</div>
                </td>
                <td className="col-xs-12 col-sm-4">
                  <div className="item">100%</div>
                </td>
                <td className="col-xs-12 col-sm-4">
                  <div className="item">20,000,000,000</div>
                </td>
              </tr>
            </tbody>
          </table>}
          {
            !isDesktopOrLaptop && <div className="mobile-tokenomics">
              <div className="item-grp p-20">
                <div className="d-flex title col-xs-12">
                  <div><img src="/images/token-description.png" alt="" height="20px" /></div>
                  <div>Description</div>
                </div>
                <div className="item col-xs-12">Advisory</div>
                <div className="item col-xs-12">Development</div>
                <div className="item col-xs-12">Pre Sale</div>
                <div className="item col-xs-12">Public Sale</div>
                <div className="item col-xs-12">Bounties</div>
                <div className="item col-xs-12">Liquidity Reserve</div>
                <div className="item col-xs-12">Total</div>
              </div>

              <div className="item-grp p-20">
                <div className="d-flex title col-xs-12">
                  <div><img src="/images/token-allocation.png" alt="" height="20px" /></div>
                  <div>Allocation</div>
                </div>
                <div className="item col-xs-12">5%</div>
                <div className="item col-xs-12">5%</div>
                <div className="item col-xs-12">20%</div>
                <div className="item col-xs-12">50%</div>
                <div className="item col-xs-12">10%</div>
                <div className="item col-xs-12">10%</div>
                <div className="item col-xs-12">100%</div>
              </div>

              <div className="item-grp p-20">
                <div className="d-flex title col-xs-12">
                  <div><img src="/images/token-tokens.png" alt="" height="20px" /></div>
                  <div>Tokens</div>
                </div>
                <div className="item col-xs-12">1,000,000,000</div>
                <div className="item col-xs-12">1,000,000,000</div>
                <div className="item col-xs-12">4,000,000,000</div>
                <div className="item col-xs-12">10,000,000,000</div>
                <div className="item col-xs-12">2,000,000,000</div>
                <div className="item col-xs-12">2,000,000,000</div>
                <div className="item col-xs-12">20,000,000,000</div>
              </div>

            </div>
          }
        </div>
      </div>
    </section>
  );
};

export default TokenDetail;

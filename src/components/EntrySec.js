import { useMediaQuery } from "react-responsive";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const EntrySec = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <section
      className="pb-100"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="container">
        <div className="">
          <div className="col-lg-12">
            <div className="main-head">
              <p style={{fontSize: '25px', fontWeight: 'bold'}}>
                Presale Breakdown
              </p>
            </div>
          </div>
        </div>
        <div className="tokenomics">
          {isDesktopOrLaptop && <table>
            <thead>
              <tr>
                <th className="col-sm-3">
                  <div className="d-flex title">
                    <div>Number of Tokens</div>
                  </div>
                </th>
                <th className="col-sm-3">
                  <div className="d-flex title">
                    <div>Number of Tokens</div>
                  </div>
                </th>
                <th className="col-sm-3">
                  <div className="d-flex title">
                    <div>Price (Approx)</div>
                  </div>
                </th>
                <th className="col-sm-3">
                  <div className="d-flex title">
                    <div>Amount</div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="col-sm-3">
                  <div className="item">First ICO</div>
                </td>
                <td className="col-sm-3">
                  <div className="item">20,000,000</div>
                </td>
                <td className="col-sm-3">
                  <div className="item">$0.5</div>
                </td>
                <td className="col-sm-3">
                  <div className="item">10,000,000</div>
                </td>
              </tr>
              <tr>
                <td className="col-sm-3">
                  <div className="item">Second ICO</div>
                </td>
                <td className="col-sm-3">
                  <div className="item">15,000,000</div>
                </td>
                <td className="col-sm-3">
                  <div className="item">$1.0</div>
                </td>
                <td className="col-sm-3">
                  <div className="item">15,000,000</div>
                </td>
              </tr>
              <tr>
                <td className="col-sm-3">
                  <div className="item">Third ICO</div>
                </td>
                <td className="col-sm-3">
                  <div className="item">12,237,586</div>
                </td>
                <td className="col-sm-3">
                  <div className="item">$1.63</div>
                </td>
                <td className="col-sm-3">
                  <div className="item">20,000,000</div>
                </td>
              </tr>
              <tr>
                <td className="col-sm-3">
                  <div className="item">Fourth ICO</div>
                </td>
                <td className="col-sm-3">
                  <div className="item">29,938,895</div>
                </td>
                <td className="col-sm-3">
                  <div className="item">$1.86</div>
                </td>
                <td className="col-sm-3">
                  <div className="item">50,000,000</div>
                </td>
              </tr>
            </tbody>
          </table>}
          {
            !isDesktopOrLaptop && <div className="mobile-tokenomics">
              <div className="item-grp p-20">
                <div className="d-flex title col-xs-12">
                  <div>Number of Tokens</div>
                </div>
                <div className="item col-xs-12">First ICO</div>
                <div className="item col-xs-12">Second ICO</div>
                <div className="item col-xs-12">Third ICO</div>
                <div className="item col-xs-12">Fourth ICO</div>
              </div>
              <div className="item-grp p-20">
                <div className="d-flex title col-xs-12">
                  <div>Number of Tokens</div>
                </div>
                <div className="item col-xs-12">20,000,000</div>
                <div className="item col-xs-12">15,000,000</div>
                <div className="item col-xs-12">12,237,586</div>
                <div className="item col-xs-12">29,938,895</div>
              </div>
              <div className="item-grp p-20">
                <div className="d-flex title col-xs-12">
                  <div>Price (Approx)</div>
                </div>
                <div className="item col-xs-12">$0.5</div>
                <div className="item col-xs-12">$1.0</div>
                <div className="item col-xs-12">$1.63</div>
                <div className="item col-xs-12">$1.86</div>
              </div>
              <div className="item-grp p-20">
                <div className="d-flex title col-xs-12">
                  <div>Amount</div>
                </div>
                <div className="item col-xs-12">10,000,000</div>
                <div className="item col-xs-12">15,000,000</div>
                <div className="item col-xs-12">20,000,000</div>
                <div className="item col-xs-12">50,000,000</div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  );
};

export default EntrySec;

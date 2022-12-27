import OwlCarousel from "react-owl-carousel";
import { useMediaQuery } from "react-responsive";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const EntrySec = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <section
      className="entry-sec pb-100"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="calendar-view">
              <div className="carousel-box">
                <OwlCarousel
                  className="token-sale-carousel owl-theme"
                  items={isDesktopOrLaptop ? 3 : 1}
                  loop={true}
                  autoplay
                >
                  <div className="sale-block-two">
                    <div className="inner-box">
                      <div className="date">First ICO</div>
                      <div className="bonus">Entry Price</div>
                      <div className="price">$0.50/token</div>
                    </div>
                  </div>
                  <div className="sale-block-two">
                    <div className="inner-box">
                      <div className="date">Second ICO</div>
                      <div className="bonus">Entry Price</div>
                      <div className="price">$1.00/token</div>
                    </div>
                  </div>
                  <div className="sale-block-two">
                    <div className="inner-box">
                      <div className="date">Third ICO</div>
                      <div className="bonus">Entry Price</div>
                      <div className="price">$1.63/token</div>
                    </div>
                  </div>
                  <div className="sale-block-two">
                    <div className="inner-box">
                      <div className="date">Fourth ICO</div>
                      <div className="bonus">Entry Price</div>
                      <div className="price">$1.86/token</div>
                    </div>
                  </div>
                  <div className="sale-block-two">
                    <div className="inner-box">
                      <div className="date">First ICO</div>
                      <div className="bonus">Entry Price</div>
                      <div className="price">$0.50/token</div>
                    </div>
                  </div>
                  <div className="sale-block-two">
                    <div className="inner-box">
                      <div className="date">Second ICO</div>
                      <div className="bonus">Entry Price</div>
                      <div className="price">$1.00/token</div>
                    </div>
                  </div>
                  <div className="sale-block-two">
                    <div className="inner-box">
                      <div className="date">Third ICO</div>
                      <div className="bonus">Entry Price</div>
                      <div className="price">$1.63/token</div>
                    </div>
                  </div>
                  <div className="sale-block-two">
                    <div className="inner-box">
                      <div className="date">Fourth ICO</div>
                      <div className="bonus">Entry Price</div>
                      <div className="price">$1.86/token</div>
                    </div>
                  </div>
                  {/* </div> */}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntrySec;

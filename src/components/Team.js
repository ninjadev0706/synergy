const Team = () => {
  return (
    <section className="team p-100" id="team">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-head">
              <h2 data-aos="fade-up" data-aos-duration="2000">
                Team Players
              </h2>
              <span className="main-bor"></span>
              <p>
                Our team players always finds effective ways to improve the
                product and process
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="team-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="image-box">
                <a href="#">
                  <img src="/images/t4.png" alt="" />
                </a>
              </div>
              <div className="lower-box"></div>
            </div>
          </div>
          <div className="team-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="image-box">
                <a href="#">
                  <img src="/images/t6.jpeg" alt="" />
                </a>
              </div>
              <div className="lower-box"></div>
            </div>
          </div>
          <div className="team-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="image-box">
                <a href="#">
                  <img src="/images/t2.png" alt="" />
                </a>
              </div>
              <div className="lower-box"></div>
            </div>
          </div>
          <div className="team-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="image-box">
                <a href="#">
                  <img src="/images/t3.png" alt="" />
                </a>
              </div>
              <div className="lower-box"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

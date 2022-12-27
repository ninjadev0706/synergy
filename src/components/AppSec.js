const AppSec = () => {
  return (
    <section className="app-sec p-100">
      <div className="container">
        <div className="row bg-app">
          <div className="col-lg-6">
            <div className="app-sec-inner">
              <h3 data-aos="fade-up" data-aos-duration="2000">
                About Ecommerce <br /> new world
              </h3>
              <p>
                Download the app to manage your projects, keep track of the
                progress and complete tasks without procastinating. Stay on
                track and complete on time!
              </p>
              <div className="app-down">
                <h4>Get the app</h4>
                <div className="d-flex align-items-center">
                  <img
                    src="/images/playstore.png"
                    alt=""
                    className="img-fluid"
                  />
                  <img
                    src="/images/appstore.png"
                    alt=""
                    className="img-fluid ml-3"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="app-img">
              <img src="/images/app-img.png" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSec;

import React from 'react'

const QuickBuy = () => {
  return (
    <section className="attorney-section ptb-140 bg-dark-white">
      <div style={{textAlign: "center", paddingBottom: "20px"}}><h3>Quick Buy</h3></div>
    <div className="container">
      
      <div className="row">
        <div className="col-md-6 col-lg-3">
          {/* single-attorney-1 */}
          <div className="single-attorney wow fadeInLeft">
            <div
              className="attorney-social-wrapper"
              data-wow-delay=".4s"
              data-wow-duration=".5s"
            >
              <img src="assets/img/attorneys/attorney1.png" alt="attorney" />
              {/* <div className="attorney-social-icon text-center">
                <a href="#">
                  <i className="ph-fill ph-linkedin-logo" />
                </a>
                <a href="#">
                  <i className="ph-fill ph-twitter-logo" />
                </a>
                <a href="#">
                  <i className="ph-fill ph-youtube-logo" />
                </a>
              </div> */}
            </div>
            <div className="attorney-info">
              <h4 className="heading-style2">
                <a href="#">Shawn S. Kerendian</a>
              </h4>
              <div className="meet-attorneys text-center" style={{paddingTop: "20px"}}>
                <a href="#" target="_blank" className="mt-btn" rel="noopener noreferrer">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          {/* single-attorney-2 */}
          <div
            className="single-attorney wow fadeInLeft"
            data-wow-delay=".8s"
            data-wow-duration=".5s"
          >
            <div className="attorney-social-wrapper">
              <img src="assets/img/attorneys/attorney2.png" alt="attorney" />
              {/* <div className="attorney-social-icon text-center">
                <a href="#">
                  <i className="ph-fill ph-linkedin-logo" />
                </a>
                <a href="#">
                  <i className="ph-fill ph-twitter-logo" />
                </a>
                <a href="#">
                  <i className="ph-fill ph-youtube-logo" />
                </a>
              </div> */}
            </div>
            <div className="attorney-info">
              <h4 className="heading-style2">
                <a href="attorney-single.html">Jeffrey M. Oberto</a>
              </h4>
              <div className="meet-attorneys text-center" style={{paddingTop: "20px"}}>
                <a href="#" target="_blank" className="mt-btn" rel="noopener noreferrer">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          {/* single-attorney-3 */}
          <div
            className="single-attorney wow fadeInLeft"
            data-wow-delay="1.2s"
            data-wow-duration=".5s"
          >
            <div className="attorney-social-wrapper">
              <img src="assets/img/attorneys/attorney3.png" alt="attorney" />
              {/* <div className="attorney-social-icon text-center">
                <a href="#">
                  <i className="ph-fill ph-linkedin-logo" />
                </a>
                <a href="#">
                  <i className="ph-fill ph-twitter-logo" />
                </a>
                <a href="#">
                  <i className="ph-fill ph-youtube-logo" />
                </a>
              </div> */}
            </div>
            <div className="attorney-info">
              <h4 className="heading-style2">
                <a href="attorney-single.html">Lindsey F. Munyer</a>
              </h4>
              <div className="meet-attorneys text-center" style={{paddingTop: "20px"}}>
                <a href="#" target="_blank" className="mt-btn" rel="noopener noreferrer">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          {/* single-attorney-4 */}
          <div
            className="single-attorney wow fadeInLeft"
            data-wow-delay="1.6s"
            data-wow-duration=".5s"
          >
            <div className="attorney-social-wrapper">
              <img src="assets/img/attorneys/attorney4.png" alt="attorney" />
              {/* <div className="attorney-social-icon text-center">
                <a href="#">
                  <i className="ph-fill ph-linkedin-logo" />
                </a>
                <a href="#">
                  <i className="ph-fill ph-twitter-logo" />
                </a>
                <a href="#">
                  <i className="ph-fill ph-youtube-logo" />
                </a>
              </div> */}
            </div>
            <div className="attorney-info">
              <h4 className="heading-style2">
                <a href="attorney-single.html">Steven A. Urenda</a>
              </h4>
              <div className="meet-attorneys text-center" style={{paddingTop: "20px"}}>
                <a href="#" target="_blank" className="mt-btn" rel="noopener noreferrer">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row">
        <div className="col-sm-12">
          <div className="meet-attorneys text-center">
            <a href="attorneys.html" className="mt-btn">
              Meet With Other Attorneys
            </a>
          </div>
        </div>
      </div> */}
    </div>
  </section>
  )
}

export default QuickBuy
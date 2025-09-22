import React from 'react'

const QuickBuy = ({ data}) => {

  if (!data) {
    console.warn('QuickBuy: missing data');
    return null; // skip rendering if data is missing
  }

  return (
    <section className="attorney-section ptb-140 bg-dark-white">
      <div style={{textAlign: "center", paddingBottom: "20px"}}><h3>{data?.title}</h3></div>
    <div className="container">
      
      <div className="row">
        {data.items.map((item, index) => (
        <div className="col-md-6 col-lg-3">
          {/* single-attorney-1 */}
          <div className="single-attorney wow fadeInLeft">
            <div
              className="attorney-social-wrapper"
              data-wow-delay=".4s"
              data-wow-duration=".5s"
            >
              <img src={item?.image} alt="attorney" />
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
                <a href="#">{item?.title}</a>
              </h4>
              <div className="meet-attorneys text-center" style={{paddingTop: "20px"}}>
                <a href={item?.button?.link} target="_blank" className="mt-btn" rel="noopener noreferrer">{item?.button?.text}</a>
              </div>
            </div>
          </div>
        </div>
        ))}
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
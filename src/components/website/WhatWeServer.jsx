import React from 'react'

const WhatWeServer = () => {
  return (
    <section className="about-section about-section-home1 ptb-140 bg-dark-white">
    <div className="container">
      <div className="row">
        <div className="col-xl-5">
          <div className="sec-content">
            <h3 className="sec-title mb-26">
              We Help to Avoid &amp; Solve Legal Problems
            </h3>
            <p>
              Our culture nurtures and strives to achieve innovation,
              creatGivity, legal expertise and is client focused. Daily, we
              enhance our entrepreneurial environment to be flexible and
              supportive, allowing our lawyers
            </p>
            <div className="achivement-logos mt-26" style={{display: "flex", flexDirection: 'row', gap: '10px'}}>
            <div style={{width: 70, aspectRatio: '1/1', borderRadius: '50%', overflow: "hidden"}}>
              <img src="https://www.shutterstock.com/image-photo/studio-close-portrait-happy-smiling-260nw-2153541715.jpg" width={"100%"} height={"100%"}  alt="achivement-logo" />
              </div>
              <div style={{width: 70, aspectRatio: '1/1', borderRadius: '50%', overflow: "hidden"}}>
              <img src="https://www.shutterstock.com/image-photo/studio-close-portrait-happy-smiling-260nw-2153541715.jpg" width={"100%"} height={"100%"}  alt="achivement-logo" />
              </div>
              <div style={{width: 70, aspectRatio: '1/1', borderRadius: '50%', overflow: "hidden"}}>
              <img src="https://www.shutterstock.com/image-photo/studio-close-portrait-happy-smiling-260nw-2153541715.jpg" width={"100%"} height={"100%"}  alt="achivement-logo" />
              </div>
              <div style={{width: 70, aspectRatio: '1/1', borderRadius: '50%', overflow: "hidden"}}>
              <img src="https://www.shutterstock.com/image-photo/studio-close-portrait-happy-smiling-260nw-2153541715.jpg" width={"100%"} height={"100%"}  alt="achivement-logo" />
              </div>
            </div>
            <a href="about.html" className="mt-btn">
              More About Us
            </a>
          </div>
        </div>
        <div className="col-xl-6 offset-xl-1 order-first order-xl-1">
          <div className="about-sec-img">
            <div className="about-img-rap about-img-one float-end w-img">
              <img src="https://www.shutterstock.com/image-photo/portrait-black-woman-smile-arms-600nw-2329488115.jpg" alt="juristic" />
            </div>
            <div className="about-img-rap about-img-two w-img">
              <img src="https://media.istockphoto.com/id/515270092/vector/balance-icon-law-balance-symbol-justice-scales-icon.jpg?s=612x612&w=0&k=20&c=1a9QG8M59xKuGQeRO-bZirD8xtJB367OWtv6iuNd7-0=" alt="juristic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default WhatWeServer
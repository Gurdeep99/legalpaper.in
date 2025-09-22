import React from 'react'

const WhatWeServer = ({ data }) => {
  return (
    <>
      {
        data.type == 1 ? <section className="about-section about-section-home1 ptb-140 bg-dark-white">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="sec-content">
                <h3 className="sec-title mb-26">
                  {data?.title}
                </h3>
                <p>
                  {data?.description}
                </p>
                <div className="achivement-logos mt-26" style={{ display: "flex", flexDirection: 'row', gap: '10px' }}>
                  {data?.items?.map((item, index) => (
                    <div style={{ width: 70, aspectRatio: '1/1', borderRadius: '50%', overflow: "hidden" }} key={index}>
                      <img src={item?.image} width={"100%"} height={"100%"} alt="achivement-logo" />
                    </div>
                  ))}
                </div>
                <a href={data.button.link} className="mt-btn">
                  {data.button.text}
                </a>
              </div>
            </div>
            <div className="col-xl-6 offset-xl-1 order-first order-xl-1">
              <div className="about-sec-img">
                <div className="about-img-rap about-img-one float-end w-img">
                  <img src={data?.image} alt="juristic" />
                </div>
                <div className="about-img-rap about-img-two w-img">
                  <img src={data?.subImage} alt="juristic" />
                </div>
              </div>
            </div>
          </div>
        </div>
        </section> : 
        data.type == 2 ? <section className="about-section ptb-140 bg-light-white">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="about-sec-img">
                <div className="about-img-rap about-img-one float-end w-img">
                  <img src={data.image} alt="juristic" />
                </div>
                <div className="about-img-rap about-img-two w-img">
                  <img src={data.subImage} alt="juristic" />
                </div>
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1">
              <div className="sec-content">
                <h3 className="sec-title mb-26">
                  {data?.title}
                </h3>
                <p>
                  {data.description}
                </p>
                <div className="achivement-logos mt-26">
                  {data?.items?.map((item, index) => (
                    <img key={index} src={item?.image} alt="achivement-logo" width={70} height={70} />
                  ))}
                </div>
                <a href={data?.button?.link} className="mt-btn">
                  {data?.button?.text}
                </a>
              </div>
            </div>
          </div>
        </div>
        </section> : 
        data.type == 3 ? <section className="about-page about-section ptb-140 bg-dark-white">
       <div className="container">
           <div className="row">
               <div className="col-xl-5">
                   <div className="sec-content">
                       <h3 className="sec-title mb-26">
                           {data.title}
                       </h3>
                       <p>
                           {data.description}
                       </p>
                       <div className="about-sec-media">
                           {data?.items?.map((item, index) => (
                           <div className="media-item d-flex align-items-center mb-26">
                               <div className="flex-shrink-0 media-icon">
                                   <i className={item.icon} />
                               </div>
                               <div className="media-body flex-grow-1 ms-3">
                                   <h4 className="heading-style2">{item.title}</h4>
                                   <p className="mb-0">
                                       {item.description}
                                   </p>
                               </div>
                           </div>
                           ))}
                       </div>
                   </div>
               </div>
               <div className="col-xl-6 offset-xl-1 order-first order-xl-1">
                   <div className="about-sec-img">
                       <div className="about-img-rap about-img-one float-end w-img">
                           <img src={data.image} alt="juristic" />
                       </div>
                       <div className="about-img-rap about-img-two w-img">
                           <img src={data.subImage} alt="juristic" />
                           {/* <a
                               href="https://www.youtube.com/watch?v=occycDAXmAA"
                               className="btn-play"
                           >
                               <i className="ph-fill ph-play" />
                           </a> */}
                       </div>
                   </div>
               </div>
           </div>
       </div>
        </section> : 
        null
      }
    </>
  )
}

export default WhatWeServer
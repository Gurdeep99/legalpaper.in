import React from 'react'

const ServiceStrip = ({ data }) => {

  return (
    <>
      <section className="practice-section-home pt-140 pb-100 bg-light-white">
        <div className="container">
          <div className="row">
            {data?.items?.map((item, index) => (
              <div className="col-md-6 col-lg-3">
                {/* practice area 1 */}
                <div
                  className="single-practice-area text-center wow fadeInDown"
                  data-wow-delay=".5s"
                  data-wow-duration=".3s"
                >
                  <i className={item.icon} />
                  <h5>{item.title}</h5>
                  <p className="disc">
                    {item.description}
                  </p>
                  <a href={item.button.link} className="read-more-btn">
                    {item.button.text}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceStrip
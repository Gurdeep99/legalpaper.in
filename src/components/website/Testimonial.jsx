import React from 'react'

const Testimonial = () => {
   const TT = {
    testimonial: {
        title: "Trusted by Our Customers",
        data: [
            {
                stars: 5,
                description: "Culture nurtures and strives, creativity, legal expertise and is client focused we enhance entrepreneurial environment to be flexible supportive, allowing our lawyers introduced rather to totally all and feel the charm of existence",
                author: "Alina",
                authorTitle: "Senior Associate"
            },
            {
                stars: 3,
                description: "Culture nurtures and strives, creativity, legal expertise and is client focused we enhance entrepreneurial environment to be flexible supportive, allowing our lawyers introduced rather to totally all and feel the charm of existence",
                author: "Katie",
                authorTitle: "Senior Associate"
            },
            {
                stars: 1,
                description: "Culture nurtures and strives, creativity, legal expertise and is client focused we enhance entrepreneurial environment to be flexible supportive, allowing our lawyers introduced rather to totally all and feel the charm of existence",
                author: "Shanaya",
                authorTitle: "Senior Associate"
            },
            {
                stars: 2,
                description: "Culture nurtures and strives, creativity, legal expertise and is client focused we enhance entrepreneurial environment to be flexible supportive, allowing our lawyers introduced rather to totally all and feel the charm of existence",
                author: "Lisa",
                authorTitle: "Senior Associate"
            }

        ]
    }
   }
  return (
    <section className="testimonial-section ptb-140 bg-light-white">
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <h3 className="sec-title text-center mb-64">
            Trusted by Our Customers
          </h3>
        </div>
        <div className="col-sm-12">
          <div className="testimonial-slider owl-carousel owl-theme">
            <div className="item">
              {/* testimonial-1 */}
              <div className="single-testimonial bg-dark-white">
                <div className="testimonial-rating">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-regular fa-star" />
                </div>
                <div className="testimonial-content">
                  <p>
                    “Culture nurtures and strives, creativity, legal expertise
                    and is client focused we enhance entrepreneurial environment
                    to be flexible supportive, allowing our lawyers introduced
                    rather to totally all and feel the charm of existence”
                  </p>
                  <h4 className="testimonial-author heading-style2">
                    Judith Hawkins
                  </h4>
                  <span className="author-title">Senior Associate</span>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Testimonial
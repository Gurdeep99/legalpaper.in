import React from 'react'

const Testimonial = ({data}) => {
   return (
      <section className="testimonial-section ptb-140 bg-light-white">
         <div className="container-fluid">
            <div className="row">
               <div className="col-sm-12">
                  <h3 className="sec-title text-center mb-64">
                     {data.testimonial.title}
                  </h3>
               </div>
               <div className="col-sm-12">
                  <div className="testimonial-slider owl-carousel owl-theme">
                     {data.testimonial.data.map((item, index) => (
                        <div key={index} className="item">
                           <div className="single-testimonial bg-dark-white">
                              <div className="testimonial-rating">
                                 {[...Array(5)].map((_, i) => (
                                    <i 
                                       key={i} 
                                       className={i < item.stars ? "fa-solid fa-star" : "fa-regular fa-star"} 
                                    />
                                 ))}
                              </div>
                              <div className="testimonial-content">
                                 <p>
                                    {item.description}
                                 </p>
                                 <h4 className="testimonial-author heading-style2">
                                    {item.author}
                                 </h4>
                                 <span className="author-title">{item.authorTitle}</span>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Testimonial;

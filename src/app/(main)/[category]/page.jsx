import TitleArea from '@/components/TitleArea'
import React from 'react'

const page = () => {
  return (
    <>
      <main>
        {/* page title area start */}
        <TitleArea title="Practice Areas" breadcrumb="Practice Areas" link="/" />
        {/* page title area end */}
        {/* pratice section start */}
        <section className="practice-page practice-section pt-140 bg-light-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                <h3 className="sec-title text-center mb-64">
                  Innovation and Client Focused Our Practice Area
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="single-case-info single-practice-style2">
                  {/* single practice 1 */}
                  <div className="single-case-img single-practice-img">
                    <img src="/assets/img/Practices/practice1.png" alt="case" />
                  </div>
                  <div className="single-practice-area">
                    <h5>Patent Infringement</h5>
                    <p className="disc">
                      Our culture nurtures strives achieve legal expertise and is
                      client
                    </p>
                    <a href="practice-details.html" className="read-more-btn">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="single-case-info single-practice-style2">
                  {/* single practice 2 */}
                  <div className="single-case-img single-practice-img">
                    <img src="/assets/img/Practices/practice2.png" alt="case" />
                  </div>
                  <div className="single-practice-area">
                    <h5>Domestic Violence</h5>
                    <p className="disc">
                      Our culture nurtures strives achieve legal expertise and is
                      client
                    </p>
                    <a href="practice-details.html" className="read-more-btn">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="single-case-info single-practice-style2">
                  {/* single practice 3 */}
                  <div className="single-case-img single-practice-img">
                    <img src="/assets/img/Practices/practice3.png" alt="case" />
                  </div>
                  <div className="single-practice-area">
                    <h5>Banking &amp; Finance</h5>
                    <p className="disc">
                      Our culture nurtures strives achieve legal expertise and is
                      client
                    </p>
                    <a href="practice-details.html" className="read-more-btn">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="single-case-info single-practice-style2">
                  {/* single practice 4 */}
                  <div className="single-case-img single-practice-img">
                    <img src="/assets/img/Practices/practice4.png" alt="case" />
                  </div>
                  <div className="single-practice-area">
                    <h5>Travel Accident</h5>
                    <p className="disc">
                      Our culture nurtures strives achieve legal expertise and is
                      client
                    </p>
                    <a href="practice-details.html" className="read-more-btn">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="single-case-info single-practice-style2">
                  {/* single practice 5 */}
                  <div className="single-case-img single-practice-img">
                    <img src="/assets/img/Practices/practice5.png" alt="case" />
                  </div>  
                  <div className="single-practice-area">
                    <h5>Education Law</h5>
                    <p className="disc">
                      Our culture nurtures strives achieve legal expertise and is
                      client
                    </p>
                    <a href="practice-details.html" className="read-more-btn">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="single-case-info single-practice-style2">
                  {/* single practice 6 */}
                  <div className="single-case-img single-practice-img">
                    <img src="/assets/img/Practices/practice6.png" alt="case" />
                  </div>
                  <div className="single-practice-area">
                    <h5>Criminal Justice</h5>
                    <p className="disc">
                      Our culture nurtures strives achieve legal expertise and is
                      client
                    </p>
                    <a href="practice-details.html" className="read-more-btn">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="single-case-info single-practice-style2">
                  {/* single practice 7 */}
                  <div className="single-case-img single-practice-img">
                    <img src="/assets/img/Practices/practice7.png" alt="case" />
                  </div>
                  <div className="single-practice-area">
                    <h5>Commercial Litigation</h5>
                    <p className="disc">
                      Our culture nurtures strives achieve legal expertise and is
                      client
                    </p>
                    <a href="practice-details.html" className="read-more-btn">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="single-case-info single-practice-style2">
                  {/* single practice 8 */}
                  <div className="single-case-img single-practice-img">
                    <img src="/assets/img/Practices/practice8.png" alt="case" />
                  </div>
                  <div className="single-practice-area">
                    <h5>Property &amp; Business</h5>
                    <p className="disc">
                      Our culture nurtures strives achieve legal expertise and is
                      client
                    </p>
                    <a href="practice-details.html" className="read-more-btn">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ratice section start */}
      </main>

    </>
  )
}

export default page
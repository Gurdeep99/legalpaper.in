"use client";
import ContactForm from '@/components/contactForm'
import Hero from '@/components/website/Hero';
import ServiceStrip from '@/components/website/ServiceStrip';
import Strip from '@/components/website/Strip';
import Testimonial from '@/components/website/Testimonial';
import React from 'react'

const page = () => {

  const TT = {
    hero: {
      image: '/assets/img/hero/main.jpg',
      background: '/assets/img/hero/background.jpg',
      subTitle: 'Patent Infringement',
      title: 'Patent Infringement',
      description: 'Patent Infringement',
      button: {
        link: '#',
        text: 'Read More',
        icon: 'flaticon-right-arrow'
      },
      siteInfo: [
        {
          value: '100',
          title: 'Clients'
        },
        {
          value: '100',
          title: 'Clients'
        }
      ]
    },
    serviceStrip: {
      data: [
        {
          icon: "flaticon-certificate",
          title: "Patent Infringement",
          description: "Our Law firm the securities attorneys understand that there difference between",
          button: {
            link: "practice-details",
            text: "Learn More",
          },
        },
        {
          icon: "flaticon-bandage",
          title: "Domestic Violence",
          description: "Our Law firm the securities attorneys understand that there difference between",
          button: {
            link: "practice-details",
            text: "Learn More",
          },
        },
        {
          icon: "flaticon-financial",
          title: "Banking &amp; Finance",
          description: "Our Law firm the securities attorneys understand that there difference between",
          button: {
            link: "practice-details",
            text: "Learn More",
          },
        },
        {
          icon: "flaticon-flight",
          title: "Travel Accidents",
          description: "Our Law firm the securities attorneys understand that there difference between",
          button: {
            link: "practice-details",
            text: "Learn More",
          },
        },
      ]
    },
    strip: {
      background: '#0a377f',
      data: [
        {
          title: '10 Million +',
          description: 'Consulting Minutes',
        },
        {
          title: '5 million pages',
          description: 'Drafted and Reviewed',
        },
        {
          title: '100,000',
          description: 'Start-up mentored',
        }
      ]
    },
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
  };

  return (
    <main>
      {/* hero section start */}
      <Hero data={TT} />
      {/* hero section end */}
      {/* practice area section start */}
      {true && <ServiceStrip data={TT} />}
      {/* practice area section end */}
      <Strip data={TT} />
      {/* about section start */}
      {false && <section className="about-section about-section-home1 ptb-140 bg-dark-white">
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
                <div className="achivement-logos mt-26">
                  <img src="assets/img/about/image39.png" alt="achivement-logo" />
                  <img src="assets/img/about/image40.png" alt="achivement-logo" />
                  <img src="assets/img/about/image41.png" alt="achivement-logo" />
                  <img src="assets/img/about/image42.png" alt="achivement-logo" />
                </div>
                <a href="about.html" className="mt-btn">
                  More About Us
                </a>
              </div>
            </div>
            <div className="col-xl-6 offset-xl-1 order-first order-xl-1">
              <div className="about-sec-img">
                <div className="about-img-rap about-img-one float-end w-img">
                  <img src="assets/img/about/about-sec-img1.png" alt="juristic" />
                </div>
                <div className="about-img-rap about-img-two w-img">
                  <img src="assets/img/about/about-sec-img2.png" alt="juristic" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>}
      {/* about section end */}
      {/* case studies section start */}
      {false && <section className="case-studies-section ptb-140 bg-light-white">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="sec-title text-center mb-64">
                Explore Latest Case Studies
              </h3>
            </div>
            <div className="col-sm-12">
              <div className="case-slider owl-carousel owl-theme">
                <div className="item">
                  {/* single-case-1 */}
                  <div className="single-case-info">
                    <div className="single-case-img">
                      <img src="assets/img/case/case1.png" alt="case" />
                    </div>
                    <div className="single-case-content">
                      <h4 className="heading-style2">
                        <a href="case-single.html">Labours Relations Board</a>
                      </h4>
                      <span>Merges &amp; Acquisitions</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  {/* single-case-2 */}
                  <div className="single-case-info">
                    <div className="single-case-img">
                      <img src="assets/img/case/case2.png" alt="case" />
                    </div>
                    <div className="single-case-content">
                      <h4 className="heading-style2">
                        <a href="case-single.html">Rules of Civil Procedure</a>
                      </h4>
                      <span>Domestic Violence</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  {/* single-case-3 */}
                  <div className="single-case-info">
                    <div className="single-case-img">
                      <img src="assets/img/case/case3.png" alt="case" />
                    </div>
                    <div className="single-case-content">
                      <h4 className="heading-style2">
                        <a href="case-single.html">Property &amp; Real Estate</a>
                      </h4>
                      <span>Investment Consulting</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  {/* single-case-4 */}
                  <div className="single-case-info">
                    <div className="single-case-img">
                      <img src="assets/img/case/case1.png" alt="case" />
                    </div>
                    <div className="single-case-content">
                      <h4 className="heading-style2">
                        <a href="case-single.html">Property &amp; Real Estate</a>
                      </h4>
                      <span>Investment Consulting</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>}
      {/* case studies section end */}
      {/* history section start */}
      {false && <section className="history-section">
        <div className="section-overlay ptb-140">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="sec-title text-center mb-64 mt-text-white">
                  Our History From Starting
                </h3>
              </div>
              <div className="col-sm-12">
                <div className="history-tab">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <button
                        className="nav-link active"
                        id="nav-home-tab1"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home1"
                        type="button"
                        role="tab"
                        aria-controls="nav-home1"
                        aria-selected="true"
                      >
                        1997
                      </button>
                      <button
                        className="nav-link"
                        id="nav-home-tab2"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home2"
                        type="button"
                        role="tab"
                        aria-controls="nav-home2"
                        aria-selected="false"
                      >
                        2004
                      </button>
                      <button
                        className="nav-link"
                        id="nav-home-tab3"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home3"
                        type="button"
                        role="tab"
                        aria-controls="nav-home3"
                        aria-selected="false"
                      >
                        2006
                      </button>
                      <button
                        className="nav-link"
                        id="nav-home-tab4"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home4"
                        type="button"
                        role="tab"
                        aria-controls="nav-home4"
                        aria-selected="false"
                      >
                        2010
                      </button>
                      <button
                        className="nav-link"
                        id="nav-home-tab5"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home5"
                        type="button"
                        role="tab"
                        aria-controls="nav-home5"
                        aria-selected="false"
                      >
                        2015
                      </button>
                      <button
                        className="nav-link"
                        id="nav-home-tab6"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home6"
                        type="button"
                        role="tab"
                        aria-controls="nav-home6"
                        aria-selected="false"
                      >
                        2023
                      </button>
                    </div>
                  </nav>
                  <div
                    className="tab-content mt-bg-light-white"
                    id="nav-tabContent"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="nav-home1"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab1"
                    >
                      <div className="row">
                        {/* history-tab-details-1 */}
                        <div className="col-xl-6">
                          <div className="history-tab-details">
                            <div className="history-tab-img">
                              <img
                                src="assets/img/history/history1.png"
                                alt="history"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="history-tab-details">
                            <div className="history-tab-content">
                              <h3>We Started With Small Significant Cases</h3>
                              <p>
                                Our culture nurtures and strives achieve,
                                creativity, legal expertise and is client focused we
                                enhance entrepreneurial environment to be flexible
                                and supportive, allowing our lawyers introduced
                                rather to totally all between was
                              </p>
                              <a href="case-single.html" className="read-more-btn">
                                Read This Full Story
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-home2"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab2"
                    >
                      <div className="row">
                        {/* history-tab-details-2 */}
                        <div className="col-xl-6">
                          <div className="history-tab-details">
                            <div className="history-tab-img">
                              <img
                                src="assets/img/history/history2.png"
                                alt="history"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="history-tab-details">
                            <div className="history-tab-content">
                              <h3>We Started With Small Significant Cases</h3>
                              <p>
                                Our culture nurtures and strives achieve,
                                creativity, legal expertise and is client focused we
                                enhance entrepreneurial environment to be flexible
                                and supportive, allowing our lawyers introduced
                                rather to totally all between was
                              </p>
                              <a href="case-single.html" className="read-more-btn">
                                Read This Full Story
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-home3"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab3"
                    >
                      <div className="row">
                        {/* history-tab-details-3 */}
                        <div className="col-xl-6">
                          <div className="history-tab-details">
                            <div className="history-tab-img">
                              <img
                                src="assets/img/history/history3.png"
                                alt="history"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="history-tab-details">
                            <div className="history-tab-content">
                              <h3>We Started With Small Significant Cases</h3>
                              <p>
                                Our culture nurtures and strives achieve,
                                creativity, legal expertise and is client focused we
                                enhance entrepreneurial environment to be flexible
                                and supportive, allowing our lawyers introduced
                                rather to totally all between was
                              </p>
                              <a href="case-single.html" className="read-more-btn">
                                Read This Full Story
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-home4"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab4"
                    >
                      <div className="row">
                        {/* history-tab-details-4 */}
                        <div className="col-xl-6">
                          <div className="history-tab-details">
                            <div className="history-tab-img">
                              <img
                                src="assets/img/history/history4.png"
                                alt="history"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="history-tab-details">
                            <div className="history-tab-content">
                              <h3>We Started With Small Significant Cases</h3>
                              <p>
                                Our culture nurtures and strives achieve,
                                creativity, legal expertise and is client focused we
                                enhance entrepreneurial environment to be flexible
                                and supportive, allowing our lawyers introduced
                                rather to totally all between was
                              </p>
                              <a href="case-single.html" className="read-more-btn">
                                Read This Full Story
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-home5"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab5"
                    >
                      <div className="row">
                        {/* history-tab-details-5 */}
                        <div className="col-xl-6">
                          <div className="history-tab-details">
                            <div className="history-tab-img">
                              <img
                                src="assets/img/history/history5.png"
                                alt="history"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="history-tab-details">
                            <div className="history-tab-content">
                              <h3>We Started With Small Significant Cases</h3>
                              <p>
                                Our culture nurtures and strives achieve,
                                creativity, legal expertise and is client focused we
                                enhance entrepreneurial environment to be flexible
                                and supportive, allowing our lawyers introduced
                                rather to totally all between was
                              </p>
                              <a href="case-single.html" className="read-more-btn">
                                Read This Full Story
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-home6"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab6"
                    >
                      <div className="row">
                        {/* history-tab-details-6 */}
                        <div className="col-xl-6">
                          <div className="history-tab-details">
                            <div className="history-tab-img">
                              <img
                                src="assets/img/history/history6.png"
                                alt="history"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="history-tab-details">
                            <div className="history-tab-content">
                              <h3>We Started With Small Significant Cases</h3>
                              <p>
                                Our culture nurtures and strives achieve,
                                creativity, legal expertise and is client focused we
                                enhance entrepreneurial environment to be flexible
                                and supportive, allowing our lawyers introduced
                                rather to totally all between was
                              </p>
                              <a href="case-single.html" className="read-more-btn">
                                Read This Full Story
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>}
      {false && <section className="history-call bg-dark-white">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="call-us">
                <p className="text-center">
                  Anyone who walks through our dor is important to us. Call now:
                  <a href="#">+1 (888) 423-7576</a>
                </p>
                <hr className="hr" />
              </div>
            </div>
          </div>
        </div>
      </section>}
      {/* history section end */}
      {/* attornys team section start */}
      {false && <section className="attorney-section ptb-140 bg-dark-white">
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
                  <div className="attorney-social-icon text-center">
                    <a href="#">
                      <i className="ph-fill ph-linkedin-logo" />
                    </a>
                    <a href="#">
                      <i className="ph-fill ph-twitter-logo" />
                    </a>
                    <a href="#">
                      <i className="ph-fill ph-youtube-logo" />
                    </a>
                  </div>
                </div>
                <div className="attorney-info">
                  <h4 className="heading-style2">
                    <a href="attorney-single.html">Shawn S. Kerendian</a>
                  </h4>
                  <span className="attorney-title">Associate Director</span>
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
                  <div className="attorney-social-icon text-center">
                    <a href="#">
                      <i className="ph-fill ph-linkedin-logo" />
                    </a>
                    <a href="#">
                      <i className="ph-fill ph-twitter-logo" />
                    </a>
                    <a href="#">
                      <i className="ph-fill ph-youtube-logo" />
                    </a>
                  </div>
                </div>
                <div className="attorney-info">
                  <h4 className="heading-style2">
                    <a href="attorney-single.html">Jeffrey M. Oberto</a>
                  </h4>
                  <span className="attorney-title">Senior Partner</span>
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
                  <div className="attorney-social-icon text-center">
                    <a href="#">
                      <i className="ph-fill ph-linkedin-logo" />
                    </a>
                    <a href="#">
                      <i className="ph-fill ph-twitter-logo" />
                    </a>
                    <a href="#">
                      <i className="ph-fill ph-youtube-logo" />
                    </a>
                  </div>
                </div>
                <div className="attorney-info">
                  <h4 className="heading-style2">
                    <a href="attorney-single.html">Lindsey F. Munyer</a>
                  </h4>
                  <span className="attorney-title">Managing Partner</span>
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
                  <div className="attorney-social-icon text-center">
                    <a href="#">
                      <i className="ph-fill ph-linkedin-logo" />
                    </a>
                    <a href="#">
                      <i className="ph-fill ph-twitter-logo" />
                    </a>
                    <a href="#">
                      <i className="ph-fill ph-youtube-logo" />
                    </a>
                  </div>
                </div>
                <div className="attorney-info">
                  <h4 className="heading-style2">
                    <a href="attorney-single.html">Steven A. Urenda</a>
                  </h4>
                  <span className="attorney-title">Senior Associate</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="meet-attorneys text-center">
                <a href="attorneys.html" className="mt-btn">
                  Meet With Other Attorneys
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>}
      {/* attornys team section end */}
     
      {/* contact section start */}
      <ContactForm />
      {/* contact section end */}
       {/* testimonial section start */}
       {true && <Testimonial data={TT} />}
      {/* testimonial section end */}
      {/* blog section start */}
      {false && <section className="blog-section pt-140 pb-100 bg-light-white">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="sec-title text-center mb-64">
                Latest News &amp; Articles
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              {/* blog 1 */}
              <div className="blog-item">
                <div className="blog-thumb">
                  <a href="blog-details.html">
                    <img src="assets/img/blog/blog-thumb1.png" alt="blog" />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <div className="blog-date">
                      <span>Feb 23, 2022</span>
                    </div>
                    <div className="blog-catagory">
                      <span>Knowledge</span>
                    </div>
                  </div>
                  <h4 className="blog-sm-title">
                    <a href="blog-details.html">
                      A Guide to Practicing Law in Multiple States
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              {/* blog 2 */}
              <div className="blog-item">
                <div className="blog-thumb">
                  <a href="blog-details.html">
                    <img src="assets/img/blog/blog-thumb2.png" alt="blog" />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <div className="blog-date">
                      <span>October 28, 20121</span>
                    </div>
                    <div className="blog-catagory">
                      <span>Knowledge</span>
                    </div>
                  </div>
                  <h4 className="blog-sm-title">
                    <a href="blog-details.html">
                      How to Successfully Organize Your Legal Files
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="d-md-none d-lg-block col-lg-4">
              {/* blog 3 */}
              <div className="blog-item">
                <div className="blog-thumb">
                  <a href="blog-details.html">
                    <img src="assets/img/blog/blog-thumb3.png" alt="blog" />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <div className="blog-date">
                      <span>October 28, 20121</span>
                    </div>
                    <div className="blog-catagory">
                      <span>Knowledge</span>
                    </div>
                  </div>
                  <h4 className="blog-sm-title">
                    <a href="blog-details.html">
                      Modern Offices in The Best District in Town
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>}
      {/* blog section end */}
    </main>
  )
}

export default page
import ContactForm from '@/components/contactForm'
import TitleArea from '@/components/TitleArea'
import React from 'react'

const page = () => {
    return (
        <>
            <main>
                {/* page title area start */}
                <TitleArea title="About Us" breadcrumb="About Us" link="/" />
                {/* page title area end */}
                {/* about section start */}
                <section className="about-section ptb-140 bg-light-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="about-sec-img">
                                    <div className="about-img-rap about-img-one float-end w-img">
                                        <img src="assets/img/about/about-sec-img1.png" alt="juristic" />
                                    </div>
                                    <div className="about-img-rap about-img-two w-img">
                                        <img src="assets/img/about/about-sec-img2.png" alt="juristic" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 offset-xl-1">
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
                                    <a href="#" className="mt-btn">
                                        More About Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* about section end */}
                {/* about section two start  */}
                <section className="about-page about-section ptb-140 bg-dark-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5">
                                <div className="sec-content">
                                    <h3 className="sec-title mb-26">
                                        We Are the Leading Law Firm in Worldwide
                                    </h3>
                                    <p>
                                        Our culture nurtures and strives to achieve innovation,
                                        creativity, legal expertise and is client focused. Daily, w e
                                        enhance our entrepreneurial environment to be flexible and
                                        supportive, allowing our lawyers
                                    </p>
                                    <div className="about-sec-media">
                                        <div className="media-item d-flex align-items-center mb-26">
                                            <div className="flex-shrink-0 media-icon">
                                                <i className="flaticon-jury" />
                                            </div>
                                            <div className="media-body flex-grow-1 ms-3">
                                                <h4 className="heading-style2">Qualified Legal Attorneys</h4>
                                                <p className="mb-0">
                                                    Our culture nurtures &amp; strives creativity legal
                                                    expertise client focused. entrepreneurial environmen
                                                </p>
                                            </div>
                                        </div>
                                        <div className="media-item d-flex align-items-center">
                                            <div className="flex-shrink-0 media-icon">
                                                <i className="flaticon-auction" />
                                            </div>
                                            <div className="media-body flex-grow-1 ms-3">
                                                <h4 className="heading-style2">
                                                    Over 30 Years of Experience
                                                </h4>
                                                <p className="mb-0">
                                                    Our culture nurtures &amp; strives creativity legal
                                                    expertise client focused. entrepreneurial environmen
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 offset-xl-1 order-first order-xl-1">
                                <div className="about-sec-img">
                                    <div className="about-img-rap about-img-one float-end w-img">
                                        <img src="assets/img/about/about3.png" alt="juristic" />
                                    </div>
                                    <div className="about-img-rap about-img-two w-img">
                                        <img src="assets/img/about/about4.png" alt="juristic" />
                                        <a
                                            href="https://www.youtube.com/watch?v=occycDAXmAA"
                                            className="btn-play"
                                        >
                                            <i className="ph-fill ph-play" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* about section two end */}
                {/* history section start */}
                <section className="history-section">
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
                </section>
                <section className="history-call bg-dark-white">
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
                </section>
                {/* history section end */}
                {/* attornys team section start */}
                <section className="attorney-section ptb-140 bg-dark-white">
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
                </section>
                {/* attornys team section end */}
                {/* contact section start */}
               {/* <ContactForm formType="map"/> */}
                {/* contact section end */}
                {/* brand section start */}
                <section className="brand-section pb-140 bg-light-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="call-us">
                                    <hr className="hr" />
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="brand-slider owl-carousel owl-theme">
                                    <div className="item">
                                        {/* brand-1 */}
                                        <div className="brand-item">
                                            <img src="assets/img/brand/brand2.png" alt="brand" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        {/* brand-2 */}
                                        <div className="brand-item">
                                            <img src="assets/img/brand/brand2.png" alt="brand" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        {/* brand-3 */}
                                        <div className="brand-item">
                                            <img src="assets/img/brand/brand2.png" alt="brand" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        {/* brand-4 */}
                                        <div className="brand-item">
                                            <img src="assets/img/brand/brand2.png" alt="brand" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        {/* brand-5 */}
                                        <div className="brand-item">
                                            <img src="assets/img/brand/brand2.png" alt="brand" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* brand section end */}
            </main>

            <main>
                {/* page title area start */}
                <TitleArea title="Contact Us" breadcrumb="Contact Us" link="/" />
                {/* page title area end */}
                {/* contact section start */}
                <ContactForm />
                {/* contact section end */}
                {/* contact map section start */}
                <section className="contact-map-section">
                    <div className="container-fluid px-0">
                        <div className="row">
                            <div className="col">
                                <div className="contact-map-location">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2961.4966722429335!2d-75.80948658444869!3d42.075406879206916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dae40aa864a7e7%3A0x7a4c41ecda420673!2s66%20Golden%20St%2C%20Kirkwood%2C%20NY%2013795%2C%20USA!5e0!3m2!1sen!2sbd!4v1680634171309!5m2!1sen!2sbd"
                                        width="100%"
                                        height={650}
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* contact map section end */}
            </main>

            <main>
                {/* page title area start */}
                <TitleArea title="Privacy Policy" breadcrumb="Privacy Policy" link="/" />
                {/* page title area end */}
                {/* case-details section start */}
                <section className="case-details ptb-140 bg-light-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="attorney-brife-bio cases-brife-info">
                                    <div className="case-img mb-64">
                                        <img src="assets/img/terms/terms.jpg" alt="terms" />
                                    </div>
                                    <div className="brife-bio-sec">
                                        <h3>Reasons for Using Website Privacy Policy</h3>
                                        <p className="mb-4">
                                            Your access to and use of the Service is conditioned on your
                                            acceptance of and compliance with these Terms. These Terms apply
                                            to all visitors, users and others who access or use the
                                            Service.By accessing or using the Service you agree to be bound
                                            by these Terms. If you disagree with any part of the terms then
                                            you may not access the Service.The Service and its original
                                            content, features and functionality are and will remain the
                                            exclusive property of The Bains Law Offices and its licensors.
                                        </p>
                                        <p className="mb-0">
                                            The lawguru Law Offices has no control over, and assumes no
                                            responsibility for, the content, privacy policies, or practices
                                            of any third party web sites or services. You further
                                            acknowledge and agree that The Bains Law Offices shall not be
                                            responsible or liable, directly or indirectly, for any damage or
                                            loss caused or alleged to be caused by or in connection with use
                                            of or reliance on any such content, goods or services available
                                            on or through any such web sites or services.
                                        </p>
                                    </div>
                                    <div className="brife-bio-sec case-inner-img">
                                        <div className="row">
                                            <div className="col-md-6 mb-4 mb-md-0">
                                                <img src="assets/img/terms/tram1.jpg" alt="tram1" />
                                            </div>
                                            <div className="col-md-6">
                                                <img src="assets/img/terms/tram2.jpg" alt="tram2" />
                                            </div>
                                        </div>
                                    </div>

                                    
                                    <div className="brife-bio-sec case-solution">
                                        <h3>Information Collection And Use</h3>
                                        <p className="mb-4">
                                            While using our Service, we may ask you to provide us with
                                            certain personally identifiable information that can be used to
                                            contact or identify you. Personally identifiable information
                                            (Personal Information) may include, but is not limited to:
                                        </p>
                                        <ul className="case-solution-list">
                                            <li>Name</li>
                                            <li>Email address</li>
                                            <li>Telephone number</li>
                                        </ul>
                                    </div>
                                    <div className="brife-bio-sec">
                                        <h3>Log Data</h3>
                                        <p className="mb-0">
                                            We collect information that your browser sends whenever you
                                            visit our Service (“Log Data”). This Log Data may include
                                            information such as your computer’s Internet Protocol (“IP”)
                                            address, browser type, browser version, the pages of our Service
                                            that you visit, the time and date of your visit, the time spent
                                            on those pages and other statistics.
                                        </p>
                                    </div>
                                    <div className="brife-bio-sec">
                                        <h3>Cookies</h3>
                                        <p className="mb-0">
                                            Cookies are files with small amount of data, which may include
                                            an anonymous unique identifier. Cookies are sent to your browser
                                            from a web site and stored on your computer’s hard drive. We use
                                            “cookies” to collect information. You can instruct your browser
                                            to refuse all cookies or to indicate when a cookie is being
                                            sent. However, if you do not accept cookies, you may not be able
                                            to use some portions of our Service.
                                        </p>
                                    </div>
                                    <div className="brife-bio-sec">
                                        <h3>Service Providers</h3>
                                        <p className="mb-0">
                                            We may employ third party companies and individuals to
                                            facilitate our Service, to provide the Service on our behalf, to
                                            perform Service-related services or to assist us in analyzing
                                            how our Service is used. These third parties have access to your
                                            Personal Information only to perform these tasks on our behalf
                                            and are obligated not to disclose or use it for any other
                                            purpose.
                                        </p>
                                    </div>
                                    <div className="brife-bio-sec">
                                        <h3>Links To Other Sites</h3>
                                        <p className="mb-0">
                                            Our Service may contain links to other sites that are not
                                            operated by us. If you click on a third party link, you will be
                                            directed to that third party’s site. We strongly advise you to
                                            review the Privacy Policy of every site you visit. We have no
                                            control over, and assume no responsibility for the content,
                                            privacy policies or practices of any third party sites or
                                            services.
                                        </p>
                                    </div>
                                    <div className="brife-bio-sec">
                                        <h3>Changes To This Privacy Policy</h3>
                                        <p className="mb-0">
                                            We may update our Privacy Policy from time to time. We will
                                            notify you of any changes by posting the new Privacy Policy on
                                            this page. You are advised to review this Privacy Policy
                                            periodically for any changes. Changes to this Privacy Policy are
                                            effective when they are posted on this page.
                                        </p>
                                    </div>
                                    <div className="brife-bio-sec m-0">
                                        <h3>Contact Us</h3>
                                        <p className="mb-0">
                                            If you have any questions about these Terms, please contact us.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* case-details section start */}
            </main>

        </>
    )
}

export default page
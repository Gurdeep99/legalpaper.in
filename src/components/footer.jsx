import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="section-overlay">
                    <div className="container">
                        
                        <div className="row pb-100" style={{paddingTop: '100px'}}>
                            <div className="col-sm-6 col-md-12 col-lg-4">
                                <div className="footer-widget">
                                    <div className="footer-widget-logo">
                                        <a href="/">
                                             <Image width={300} height={75} src="/assets/img/main.png" alt="site-logo" />
                                        </a>
                                    </div>
                                    <div className="footer-widget-content">
                                        <p className="ft-text">
                                            Our culture nurtures and strives to achieve innovation,
                                            creativity, legal expertise and is client focused. Daily, we
                                            enhance our
                                        </p>
                                        <div className="footer-social">
                                            <div className="footer-social-icon">
                                                <a href="https://www.linkedin.com/" target="_blank">
                                                    <i className="ph-fill ph-linkedin-logo" />
                                                </a>
                                                <a href="https://twitter.com/" target="_blank">
                                                    <i className="ph-fill ph-twitter-logo" />
                                                </a>
                                                <a href="https://www.youtube.com/" target="_blank">
                                                    <i className="ph-fill ph-youtube-logo" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="footer-widget">
                                    <h5 className="footer-widget-title tx-white">Expertise</h5>
                                    <div className="footer-widget-content">
                                        <div className="footer-links">
                                            <ul>
                                                <li>
                                                    <a href="practice-details">Patent Infringement</a>
                                                </li>
                                                <li>
                                                    <a href="practice-details">Domestic Violence</a>
                                                </li>
                                                <li>
                                                    <a href="practice-details">Travel Accidents</a>
                                                </li>
                                                <li>
                                                    <a href="practice-details">Banking &amp; Finance</a>
                                                </li>
                                                <li>
                                                    <a href="practice-details">Personal Injury</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="footer-widget">
                                    <h5 className="footer-widget-title tx-white">Useful Links</h5>
                                    <div className="footer-widget-content">
                                        <div className="footer-links">
                                            <ul>
                                                <li>
                                                    <a href="about">About Us</a>
                                                </li>
                                                <li>
                                                    <a href="testimonial">Testimonials</a>
                                                </li>
                                                <li>
                                                    <a href="case-studies">Case Studies</a>
                                                </li>
                                                <li>
                                                    <a href="Attorneys">Our Attorneys</a>
                                                </li>
                                                <li>
                                                    <a href="blogs-with-sidebar">Blogs</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-2">
                                <div className="footer-widget">
                                    <h5 className="footer-widget-title tx-white">Connect</h5>
                                    <div className="footer-widget-content">
                                        <div className="footer-links">
                                            <ul>
                                                <li className="mb-3">
                                                    <a href="#">66 Brooklyn golden street line NY, USA</a>
                                                </li>
                                                <li>
                                                    <a href="tel:+1(888)423-75764">+1 (888) 423-7576</a>
                                                    <a href="mailto:lawguru@support.com">lawguru@support.com</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sx-12">
                                <hr className="footer-hr" />
                            </div>
                        </div>
                        <div className="row footer-copyright">
                            <div className="col-lg-6">
                                <div className="footer-copyright-text">
                                    <p className="mb-0">
                                        © <a href="#">MirrorTheme</a> 2023. All Rights Reserved
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="footer-copyright-links">
                                    <a href="privacy-policy">Privacy Policy</a>
                                    <a href="terms-of-service">Terms of Service </a>
                                    <a href="faq">Faqs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
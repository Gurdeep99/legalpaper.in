"use client"
import React from 'react'

const ContactForm = ({ formType = "right" }) => {
    return (
        <>
            {formType === "right" ?
                <section className="contact-section ptb-140 bg-dark-white">
                    <div className="container">
                        <div className={"row"}>
                            <div className="col-lg-6 col-xl-5 d-flex align-self-lg-center">
                                <div className="sec-content">
                                    <h3 className="sec-title">
                                        Any Legal Questions? We'll Take It From Here
                                    </h3>
                                    <p>
                                        Our culture nurtures and strives to achieve innovation,
                                        creativity, legal expertise and is client focused. Daily, we
                                        enhance our entrepreneurial environment to be flexible and
                                        supportive, allowing our lawyers
                                    </p>
                                    <ul className="law-contact">
                                        <li className="mb-2">
                                            <a href="#" className="phone">
                                                <i className="ph-fill ph-phone" />
                                                +1 (888) 423-7576
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">66 Brooklyn gold en street line NY, USA</a>
                                        </li>
                                        <li>
                                            <a href="mailto:lawguru@support.com" className="email">
                                                lawguru@support.com
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-6 col-xl-6 offset-xl-1">
                                <form
                                    action="mail.php"
                                    method="post"
                                    className="law-cform form-style-2 wow flipInX"
                                    data-wow-delay="1s"
                                >
                                    <div className="row">
                                        <div className="col-sm-12 px-2">
                                            <h4 className="form-title text-center">Free Case Evaluation</h4>
                                        </div>
                                        <div className="col-sm-6 px-2">
                                            <div className="contact-field">
                                                <input
                                                    type="text"
                                                    id="firstn"
                                                    name="firstn"
                                                    placeholder="First Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 px-2">
                                            <div className="contact-field">
                                                <input
                                                    type="text"
                                                    id="lastn"
                                                    name="lastn"
                                                    placeholder="Last Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 px-2">
                                            <div className="contact-field">
                                                <input
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Email Address"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 px-2">
                                            <div className="contact-field">
                                                <input
                                                    type="text"
                                                    id="phone"
                                                    name="phone"
                                                    placeholder="Phone Number"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 px-2">
                                            <div className="contact-field">
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    name="subject"
                                                    placeholder="Subject"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 px-2">
                                            <div className="contact-field mb-0">
                                                <textarea
                                                    name="message"
                                                    id="message"
                                                    cols={30}
                                                    rows={3}
                                                    placeholder="Date of accident and overall description"
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <button className="mt-btn mt-btn-form">
                                                Request Consultation
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                :
                formType == "left" ?
                <section className="faq-page contact-section ptb-140 bg-dark-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-xl-6">
                                <form
                                    action="mail.php"
                                    method="post"
                                    className="law-cform form-style-2"
                                >
                                    <div className="row">
                                        <div className="col-sm-12 px-2">
                                            <h4 className="form-title text-center">
                                                Free Case Eva luation
                                            </h4>
                                        </div>
                                        <div className="col-sm-6 px-2">
                                            <div className="contact-field">
                                                <input
                                                    type="text"
                                                    id="firstn"
                                                    name="firstn"
                                                    placeholder="First Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 px-2">
                                            <div className="contact-field">
                                                <input
                                                    type="text"
                                                    id="lastn"
                                                    name="lastn"
                                                    placeholder="Last Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 px-2">
                                            <div className="contact-field">
                                                <input
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Email Address"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 px-2">
                                            <div className="contact-field">
                                                <input
                                                    type="text"
                                                    id="phone"
                                                    name="phone"
                                                    placeholder="Phone Number"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 px-2">
                                            <div className="contact-field">
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    name="subject"
                                                    placeholder="Subject"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 px-2">
                                            <div className="contact-field mb-0">
                                                <textarea
                                                    name="message"
                                                    id="message"
                                                    cols={30}
                                                    rows={3}
                                                    placeholder="Date of accident and overall description"
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <button className="mt-btn mt-btn-form">
                                                Request Consultation
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-6 col-xl-5 offset-xl-1 d-flex align-self-lg-center">
                                <div className="sec-content">
                                    <h3 className="sec-title">
                                        Any Legal Questions? We'll Take It From Here
                                    </h3>
                                    <p>
                                        Our culture nurtures and strives to achieve innovation,
                                        creativity, legal expertise and is client focused. Daily, we
                                        enhance our entrepreneurial environment to be flexible and
                                        supportive, allowing our lawyers
                                    </p>
                                    <ul className="law-contact">
                                        <li className="mb-2">
                                            <a href="#" className="phone">
                                                <i className="ph-fill ph-phone" />
                                                +1 (888) 423-7576
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">66 Brooklyn gold en street line NY, USA</a>
                                        </li>
                                        <li>
                                            <a href="mailto:lawguru@support.com" className="email">
                                                lawguru@support.com
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                :
                formType === "map" ? 
                <section className="contact-section contact-map ptb-140 bg-light-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7">
                                <div className="location-map wow flipInX" data-wow-duration="1s">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2961.4966722429335!2d-75.80948658444869!3d42.075406879206916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dae40aa864a7e7%3A0x7a4c41ecda420673!2s66%20Golden%20St%2C%20Kirkwood%2C%20NY%2013795%2C%20USA!5e0!3m2!1sen!2sbd!4v1680634171309!5m2!1sen!2sbd"
                                        width={600}
                                        height={650}
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                            <div className="col-xl-5">
                                <div className="contact-form-with-map contact-form-with-map h-100 d-xl-flex flex-column justify-content-center">
                                    <h3 className="sec-title mb-40">
                                        Any Legal Questions? We'll Take It From Here
                                    </h3>
                                    <form action="mail.php" method="post" className="law-cform">
                                        <div className="row">
                                            <div className="col-sm-6 px-2">
                                                <div className="contact-field">
                                                    <input
                                                        type="text"
                                                        id="firstn"
                                                        name="firstn"
                                                        placeholder="First Name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 px-2">
                                                <div className="contact-field">
                                                    <input
                                                        type="text"
                                                        id="lastn"
                                                        name="lastn"
                                                        placeholder="Last Name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 px-2">
                                                <div className="contact-field">
                                                    <input
                                                        type="text"
                                                        id="email"
                                                        name="email"
                                                        placeholder="Email Address"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 px-2">
                                                <div className="contact-field">
                                                    <input
                                                        type="text"
                                                        id="phone"
                                                        name="phone"
                                                        placeholder="Phone Number"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-12 px-2">
                                                <div className="contact-field">
                                                    <input
                                                        type="text"
                                                        id="subject"
                                                        name="subject"
                                                        placeholder="Subject"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-12 px-2">
                                                <div className="contact-field mb-0">
                                                    <textarea
                                                        name="message"
                                                        id="message"
                                                        cols={30}
                                                        rows={3}
                                                        placeholder="Date of accident and overall description"
                                                        defaultValue={""}
                                                    />
                                                </div>
                                                <button className="mt-btn mt-btn-form">
                                                    Request Consultation
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
                : <></>}
        </>
    )
}

export default ContactForm
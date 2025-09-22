"use client"
import React from 'react'

const ContactForm = ({ data }) => {


    return (
        <>
            {data.type == "right" ?
                <section className="contact-section ptb-140 bg-dark-white">
                    <div className="container">
                        <div className={"row"}>
                            <div className="col-lg-6 col-xl-5 d-flex align-self-lg-center">
                                <div className="sec-content">
                                    <h3 className="sec-title">
                                        {data.title}
                                    </h3>
                                    <p>
                                        {data.description}
                                    </p>
                                    <ul className="law-contact">
                                        <li className="mb-2">
                                            <a href="#" className="phone">
                                                <i className="ph-fill ph-phone" />
                                                {data.number}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">{data.address}</a>
                                        </li>
                                        <li>
                                            <a href="mailto:lawguru@support.com" className="email">
                                                {data.email}
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
                                            <h4 className="form-title text-center">{data.formTitle}</h4>
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
                data.type == "left" ?
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
                                            {data.title}
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
                data.type === "map" ? 
                <section className="contact-section contact-map ptb-140 bg-light-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7">
                                <div className="location-map wow flipInX" data-wow-duration="1s">
                                    <iframe
                                        src={data.map}
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
                                    {data.formTitle}
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
                                                    {data.button.text}
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

{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224568.90642784548!2d76.9900807!3d28.422601099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1758558756671!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
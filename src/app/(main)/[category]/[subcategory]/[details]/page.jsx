"use client"
import TitleArea from '@/components/TitleArea'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <>
            <main>
                {/* page title area start */}
                <TitleArea title="Practice Areas" breadcrumb="Practice Areas" link="/" />
                {/* page title area end */}
                {/* practice-details section start */}
                <section className="practice-details-page practice-details ptb-140 bg-light-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-xl-4">
                                <div className="practice-list me-lg-5">
                                    <ul>
                                        <li>
                                            <a href="practice-details.html">
                                                Patent Infringement
                                                <i className="fa-solid fa-angle-right" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="practice-details.html">
                                                Domestic Violence <i className="fa-solid fa-angle-right" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="practice-details.html" className="active">
                                                Banking &amp; Finance{" "}
                                                <i className="fa-solid fa-angle-right" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="practice-details.html">
                                                Travel Accident <i className="fa-solid fa-angle-right" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="practice-details.html">
                                                Education Law <i className="fa-solid fa-angle-right" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="practice-details.html">
                                                Criminal Justice <i className="fa-solid fa-angle-right" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="practice-details.html">
                                                Commercial Litigation
                                                <i className="fa-solid fa-angle-right" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="practice-details.html">
                                                Property &amp; Business
                                                <i className="fa-solid fa-angle-right" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="practice-details.html">
                                                Employment Law <i className="fa-solid fa-angle-right" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="practice-details.html">
                                                Personal Injury <i className="fa-solid fa-angle-right" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="case-support-info me-lg-5">
                                    <div className="support-info-overlay">
                                        <div className="support-icon">
                                            <i className="flaticon-jury" />
                                        </div>
                                        <h4>How Can We Help?</h4>
                                        <ul>
                                            <li>66 Brooklyn golden street line, NY</li>
                                            <li>lawguru@support.com</li>
                                            <li>
                                                <span className="support-phone">
                                                    <i className="ph-fill ph-phone" />
                                                    +1 (888) 423-7576
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-xl-8">
                                <div className="attorney-brife-bio cases-brife-info">
                                    <div className="case-img mb-64">
                                        <Image
                                            src="assets/img/Practices/practice-details.png"
                                            width={500}
                                            height={500}
                                            alt="practice"
                                        />
                                    </div>
                                    <div className="brife-bio-sec">
                                        <h3>Our Personal Approach</h3>
                                        <p className="mb-4">
                                            In a professional context it often happens that private or
                                            corporate clients corder a publication to be made and presented
                                            with the actual content still not being ready. Think of a news
                                            blog that’s filled with content hourly on the day of going live.
                                            However, reviewers tend to be distracted by comprehensible
                                            content, say, a random text copied from a newspaper or the
                                            internet. There are many variations of passages of Lorem Ipsum
                                            available, but the majority have suffered alteration in some
                                            form, by injected humour
                                        </p>
                                        <p className="mb-0">
                                            Morbi accumsan ipsum venec tellus a odio tincidunt auctor Sed
                                            non mauris vitae erat consequat auctor eu in elit. Class aptent
                                            taciti sociosqu ad litora torquent per conubia nostra, per
                                            inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu
                                            felispibus condimentum sit amet a augue. Sed non neque elit
                                        </p>
                                    </div>
                                    <div className="brife-bio-sec case-solution">
                                        <h3>Evaluate &amp; Improvement</h3>
                                        <p className="mb-4">
                                            Morbi accumsan ipsum venec tellus a odio tincidunt auctor Sed
                                            non mauris vitae erat consequat auctor eu in elit. Class aptent
                                            taciti sociosqu ad litora torquent per conubia nostra, per
                                            inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu
                                            felispibus condimentum sit amet a augue. Sed non neque elit
                                        </p>
                                        <ul className="case-solution-list">
                                            <li>
                                                Sed tempor magna et risus ornare, a lobortis diam vehicula.
                                            </li>
                                            <li>Vivamus tempus urna sit amet ante porttitor imperdiet.</li>
                                            <li>
                                                Mauris sit amet eros ac tellus egestas placerat tempor nec
                                                turpis.
                                            </li>
                                            <li>Aliquam at leo pretium erat mattis consectetur</li>
                                        </ul>
                                    </div>
                                    <div className="brife-bio-sec m-0">
                                        <h3>The Final Result</h3>
                                        <p className="mb-0">
                                            In a professional context it often happens that private or
                                            corporate clients corder a publication to be made and presented
                                            with the actual content still not being ready. Think of a news
                                            blog that’s filled with content hourly on the day of going live.
                                            However, reviewers tend to be distracted by comprehensible
                                            content, say, a random text copied from a newspaper or the
                                            internet. There are many variations of passages of Lorem
                                        </p>
                                        <hr />
                                    </div>
                                    <div className="brife-bio-sec m-0">
                                        <h3>Contact With Me</h3>
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
                    </div>
                </section>
                {/* practice-details section start */}
            </main>

        </>
    )
}

export default page
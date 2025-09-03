'use client';

import TitleArea from '@/components/TitleArea';
import Image from 'next/image';
import React from 'react';

const Page = () => {
  return (
    <main>
      {/* Page Title Area */}
      <TitleArea title="Practice Areas" breadcrumb="Practice Areas" link="/" />

      {/* Practice Details Section */}
      <section className="practice-details-page practice-details ptb-140 bg-light-white">
        <div className="container">
          <div className="row">
            {/* Left Sidebar */}
            <div className="col-lg-5 col-xl-4">
              <div className="practice-list me-lg-5">
                <ul>
                  {[
                    'Patent Infringement',
                    'Domestic Violence',
                    'Banking & Finance',
                    'Travel Accident',
                    'Education Law',
                    'Criminal Justice',
                    'Commercial Litigation',
                    'Property & Business',
                    'Employment Law',
                    'Personal Injury'
                  ].map((item, index) => (
                    <li key={index}>
                      <a href="#">
                        {item} <i className="fa-solid fa-angle-right" />
                      </a>
                    </li>
                  ))}
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
                        <i className="ph-fill ph-phone" /> +1 (888) 423-7576
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-lg-7 col-xl-8">
              <div className="attorney-brife-bio cases-brife-info">
                {/* Case Image */}
                <div className="case-img mb-64">
                  <Image
                    src="/assets/img/Practices/practice-details.png"
                    width={800}
                    height={500}
                    alt="Practice Details"
                    layout="responsive"
                  />
                </div>

                {/* Sections */}
                <div className="brife-bio-sec">
                  <h3>Our Personal Approach</h3>
                  <p>
                    In a professional context, it often happens that private or corporate clients order a publication to be made
                    and presented with the actual content still not being ready. Think of a news blog that’s filled with content
                    hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a
                    random text copied from a newspaper or the internet.
                  </p>
                  <p>
                    Morbi accumsan ipsum venenatis tellus a odio tincidunt auctor. Sed non mauris vitae erat consequat auctor eu
                    in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
                  </p>
                </div>

                <div className="brife-bio-sec case-solution">
                  <h3>Evaluate & Improvement</h3>
                  <p>
                    Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed
                    tempor magna et risus ornare, a lobortis diam vehicula.
                  </p>
                  <ul className="case-solution-list">
                    <li>Sed tempor magna et risus ornare, a lobortis diam vehicula.</li>
                    <li>Vivamus tempus urna sit amet ante porttitor imperdiet.</li>
                    <li>Mauris sit amet eros ac tellus egestas placerat tempor nec turpis.</li>
                    <li>Aliquam at leo pretium erat mattis consectetur</li>
                  </ul>
                </div>

                <div className="brife-bio-sec m-0">
                  <h3>The Final Result</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                    some form, by injected humour.
                  </p>
                  <hr />
                </div>

                <div className="brife-bio-sec m-0">
                  <h3>Contact With Me</h3>
                  <form className="law-cform">
                    <div className="row">
                      <div className="col-sm-6 px-2">
                        <div className="contact-field">
                          <input type="text" name="firstn" placeholder="First Name" />
                        </div>
                      </div>
                      <div className="col-sm-6 px-2">
                        <div className="contact-field">
                          <input type="text" name="lastn" placeholder="Last Name" />
                        </div>
                      </div>
                      <div className="col-sm-6 px-2">
                        <div className="contact-field">
                          <input type="email" name="email" placeholder="Email Address" />
                        </div>
                      </div>
                      <div className="col-sm-6 px-2">
                        <div className="contact-field">
                          <input type="text" name="phone" placeholder="Phone Number" />
                        </div>
                      </div>
                      <div className="col-sm-12 px-2">
                        <div className="contact-field">
                          <input type="text" name="subject" placeholder="Subject" />
                        </div>
                      </div>
                      <div className="col-sm-12 px-2">
                        <div className="contact-field mb-0">
                          <textarea
                            name="message"
                            rows={4}
                            placeholder="Date of accident and overall description"
                          />
                        </div>
                        <button type="submit" className="mt-btn mt-btn-form">
                          Request Consultation
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* End Main Content */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;

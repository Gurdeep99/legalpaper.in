import TitleArea from '@/components/TitleArea'
import React from 'react'

const page = () => {
    return (
        <>
            <main>
                {/* page title area start */}
                <TitleArea title="Terms of Service" breadcrumb="Terms of Service" link="/" />
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
                                        <h3>Reasons for Using Website Terms of Service</h3>
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
                                        <h3>Intellectual Property</h3>
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
                                    <div className="brife-bio-sec">
                                        <h3>Disclaimer</h3>
                                        <p className="mb-0">
                                            Your use of the Service is at your sole risk. The Service is
                                            provided on an “AS IS” and “AS AVAILABLE” basis. The Service is
                                            provided without warranties of any kind, whether express or
                                            implied, including, but not limited to, implied warranties of
                                            merchantability, fitness for a particular purpose,
                                            non-infringement or course of performance.
                                        </p>
                                    </div>
                                    <div className="brife-bio-sec">
                                        <h3>Termination</h3>
                                        <p className="mb-0">
                                            We may terminate or suspend access to our Service immediately,
                                            without prior notice or liability, for any reason whatsoever,
                                            including without limitation if you breach the Terms.All
                                            provisions of the Terms which by their nature should survive
                                            termination shall survive termination, including, without
                                            limitation, ownership provisions, warranty disclaimers,
                                            indemnity and limitations of liability.
                                        </p>
                                    </div>
                                    <div className="brife-bio-sec">
                                        <h3>Governing Law</h3>
                                        <p className="mb-0">
                                            These Terms shall be governed and construed in accordance with
                                            the laws of United States without regard to its conflict of law
                                            provisions. Our failure to enforce any right or provision of
                                            these Terms will not be considered a waiver of those rights. If
                                            any provision of these Terms is held to be invalid or
                                            unenforceable by a court, the remaining provisions of these
                                            Terms will remain in effect. These Terms constitute the entire
                                            agreement between us regarding our Service, and supersede and
                                            replace any prior agreements we might have between us regarding
                                            the Service.
                                        </p>
                                    </div>
                                    <div className="brife-bio-sec">
                                        <h3>Changes</h3>
                                        <p className="mb-0">
                                            We reserve the right, at our sole discretion, to modify or
                                            replace these Terms at any time. If a revision is material we
                                            will try to provide at least 30 days notice prior to any new
                                            terms taking effect. What constitutes a material change will be
                                            determined at our sole discretion.
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
import TitleArea from '@/components/TitleArea'
import React from 'react'

const page = () => {
    return (
        <>
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
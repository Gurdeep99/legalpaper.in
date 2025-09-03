import ContactForm from '@/components/contactForm'
import TitleArea from '@/components/TitleArea'
import React from 'react'

const page = () => {
    return (
        <>
            <main>
                {/* page title area start */}
                <TitleArea title="Faqs" breadcrumb="Faqs" link="/" />
                {/* page title area end */}
                {/* faq section start */}
                <section className="faq-sec ptb-140 bg-light-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                                <h3 className="sec-title text-center mb-64">
                                    Most Common Questions From Our Customers
                                </h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                                <div className="faq-accordion">
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item">
                                            {/* faq-accordion-1 */}
                                            <h2 className="accordion-header" id="headingOne">
                                                <button
                                                    className="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne"
                                                    aria-expanded="true"
                                                    aria-controls="collapseOne"
                                                >
                                                    <span>1.</span>What if I'm Not Happy With My Case?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseOne"
                                                className="accordion-collapse collapse show"
                                                aria-labelledby="headingOne"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body">
                                                    Our culture nurtures and strives to achieve innovation
                                                    expertise focused enhance our entrepreneurial environment
                                                    flexible
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            {/* faq-accordion-2 */}
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="collapseTwo"
                                                >
                                                    <span>2.</span>Are Talking About Our Case?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseTwo"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingTwo"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body">
                                                    Our culture nurtures and strives to achieve innovation
                                                    expertise focused enhance our entrepreneurial environment
                                                    flexible
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            {/* faq-accordion-3 */}
                                            <h2 className="accordion-header" id="headingThree">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="collapseThree"
                                                >
                                                    <span>3.</span> When Am I Charged for the Service?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseThree"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingThree"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body">
                                                    Our culture nurtures and strives to achieve innovation
                                                    expertise focused enhance our entrepreneurial environment
                                                    flexible
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            {/* faq-accordion-4 */}
                                            <h2 className="accordion-header" id="headingFour">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseFour"
                                                    aria-expanded="false"
                                                    aria-controls="collapseFour"
                                                >
                                                    <span>4.</span> How Can I Contact Your Office?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseFour"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingFour"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body">
                                                    Our culture nurtures and strives to achieve innovation
                                                    expertise focused enhance our entrepreneurial environment
                                                    flexible
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* faq section end */}
                {/* contact section start */}
                <ContactForm formType="left" />
                {/* contact section end */}
            </main>

        </>
    )
}

export default page
'use client'
import React from 'react'

const error = () => {
    return (
        <>
            <main>
                {/* page title area start */}
                <section className="page-title-area">
                    <div className="section-overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="page-title-wrappper text-center">
                                        <h2 className="page-title">404 Page</h2>
                                        <ul className="breadcrumb-menu">
                                            <li className="breadcrumb-menu-item">
                                                <a href="index.html">Home</a>
                                            </li>
                                            <li className="breadcrumb-menu-item">
                                                <a href="404.html">404 Page</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* page title area end */}
                {/* 404 section start */}
                <section className="page-nf-section ptb-140 bg-dark-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="nf-img text-center">
                                    <img src="assets/img/about/404.png" alt="page-not-found" />
                                </div>
                                <div className="nf-content text-center mx-lg-4">
                                    <h3 className="sec-title text-center">
                                        Oops! Somethings Went Wrong Please Try Again Later
                                    </h3>
                                    <p className="m-0">
                                        Sorry about that, but the page you looking is not available now
                                    </p>
                                    <a href="index.html" className="mt-btn">
                                        Go Back Home
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* 404 section end */}
            </main>

        </>
    )
}

export default error
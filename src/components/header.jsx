import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <>
            <header id="header-sticky" className="header-area">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-md-6 col-6 px-0">
                            <div className="logo-area">
                                <div className="logo">
                                    <a href="/">
                                    <Image width={300} height={75} src="/assets/img/main.png" alt="site-logo" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-6 d-none d-xl-block">
                            <div className="menu-area menu-padding">
                                <div className="main-menu">
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li>
                                                <Link href="/">Home</Link>
                                            </li>
                                            <li className="has-dropdown">
                                                <a href="/about">Services</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="/about">About Us</a>
                                                    </li>
                                                    <li>
                                                        <a href="/attorneys">Our Attorneys</a>
                                                    </li>
                                                    <li>
                                                        <a href="/attorney-single">Attorney Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="/practice">Practice</a>
                                                    </li>
                                                    <li>
                                                        <a href="/practice-details">Practice Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="/pricing">Pricing Page</a>
                                                    </li>
                                                    <li />
                                                    <li>
                                                        <a href="/terms-of-service">Terms of Service</a>
                                                    </li>
                                                    <li>
                                                        <a href="/faq">Faq Page</a>
                                                    </li>
                                                    <li>
                                                        <a href="/404">404 Page</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown">
                                                <a href="case-studies">Case Studies</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="case-studies">Case Studies</a>
                                                    </li>
                                                    <li>
                                                        <a href="case-single">Case Studies Details</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown">
                                                <a href="blogs-with-sidebar">Blogs</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="blogs-with-sidebar">Blogs With Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="blogs-with-sidebar2">
                                                            Blogs With Sidebar 2
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blogs-without-sidebar">
                                                            Blogs Without Sidebar
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-details">Blog Details</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="contact">Contact</Link>
                                            </li>
                                            <li>
                                                <Link href="about">About</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-xl-4 px-0">
                            <div className="header-info f-right">
                                <div className="info-item info-item-right">
                                    <h5>
                                        <i className="fa-solid fa-phone" />
                                        <a href="tel:+88096389">+1 (888) 423-7576</a>
                                    </h5>
                                </div>
                                <div className="info-item">
                                    <a href="login" className="mt-btn mt-btn-fc">
                                        Login
                                    </a>
                                </div>
                            </div>
                            {/* side-menu-icon-active */}
                            <div className="side-menu-icon text-end">
                                <Link
                                    href="javascript:void(0)"
                                    className="info-toggle-btn f-right sidebar-toggle-btn"
                                >
                                    <i className="fal fa-bars" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header
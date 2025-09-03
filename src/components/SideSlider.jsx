import Image from 'next/image'
import React from 'react'

const SideSlider = () => {
    return (
        <>
        <div className="sidebar__area">
            <div className="sidebar__wrapper">
                <div className="sidebar__close">
                    <button className="sidebar__close-btn" id="sidebar__close-btn">
                        <i className="fal fa-times" />
                    </button>
                </div>
                <div className="sidebar__content">
                    <div className="sidebar__logo mb-40">
                        <a href="index.html">
                            <Image src="assets/img/logo/logo_2.svg" width={500} height={500} alt="logo" />
                        </a>
                    </div>
                    <div className="sidebar__search">
                        <form action="#">
                            <input type="text" placeholder="What are you searching for?" />
                            <button type="submit">
                                <i className="far fa-search" />
                            </button>
                        </form>
                    </div>
                    <div className="mobile-menu fix" />
                    <div className="sidebar__contact mt-30 mb-20">
                        <h4>Contact Info</h4>
                        <ul>
                            <li className="d-flex align-items-center">
                                <div className="sidebar__contact-icon">
                                    <i className="fal fa-map-marker-alt" />
                                </div>
                                <div className="sidebar__contact-text">
                                    <a
                                        target="_blank"
                                        href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873"
                                    >
                                        12/A, Mirnada City Tower, NYC
                                    </a>
                                </div>
                            </li>
                            <li className="d-flex align-items-center">
                                <div className="sidebar__contact-icon">
                                    <i className="far fa-phone" />
                                </div>
                                <div className="sidebar__contact-text">
                                    <a href="tel:+012-345-6789">+1 (888) 423-7576</a>
                                </div>
                            </li>
                            <li className="d-flex align-items-center">
                                <div className="sidebar__contact-icon">
                                    <i className="fal fa-envelope" />
                                </div>
                                <div className="sidebar__contact-text">
                                    <a href="mailto:info@gmail.com">info@gmail.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="sidebar__social">
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/" target="_blank">
                                    <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" target="_blank">
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/" target="_blank">
                                    <i className="fab fa-youtube" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/" target="_blank">
                                    <i className="fab fa-linkedin" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="body-overlay"></div>
        </>

    )
}

export default SideSlider
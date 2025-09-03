"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const TopNav = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div className="topbar d-print-none">
      <div className="container-fluid">
        <nav className="topbar-custom d-flex justify-content-between" id="topbar-custom">
          {/* Left Side */}
          <ul className="topbar-item list-unstyled d-inline-flex align-items-center mb-0">
            <li>
              <button className="nav-link mobile-menu-btn nav-icon" id="togglemenu">
                <i className="iconoir-menu" />
              </button>
            </li>
            <li className="mx-2 welcome-text">
              <h5 className="mb-0 fw-semibold text-truncate">Good Morning, James!</h5>
            </li>
          </ul>

          {/* Right Side */}
          <ul className="topbar-item list-unstyled d-inline-flex align-items-center mb-0">
            {/* Search */}
            {/* <li className="hide-phone app-search">
              <form role="search" action="#" method="get">
                <input
                  type="search"
                  name="search"
                  className="form-control top-search mb-0"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="iconoir-search" />
                </button>
              </form>
            </li> */}

            {/* Language Selector */}
            <li className="dropdown">
              <a className="nav-link dropdown-toggle nav-icon" data-bs-toggle="dropdown" href="#" role="button">
                <Image
                  width={20}
                  height={20}
                  src="/user/assets/images/flags/english_flag.jpg"
                  alt="US Flag"
                  className="thumb-sm rounded-circle"
                />
              </a>
              <div className="dropdown-menu">
                {["english"].map((lang) => (
                  <a key={lang} className="dropdown-item" href="#">
                    <Image
                      width={15}
                      height={15}
                      src={`/user/assets/images/flags/${lang}_flag.jpg`}
                      alt={`${lang} flag`}
                      className="me-2"
                    />
                    {lang.charAt(0).toUpperCase() + lang.slice(1)}
                  </a>
                ))}
              </div>
            </li>

            {/* Theme Toggle */}
            {/* <li className="topbar-item">
              <button onClick={() => setTheme(theme == "light" ? "dark" : "light")} className="nav-link nav-icon" id="light-dark-mode">
                {theme == "light" ? <i className="iconoir-half-moon dark-mode" /> :
                <i className="iconoir-sun-light light-mode" />}
              </button>
            </li> */}

            {/* Notifications (Dummy structure, real notifications should be dynamic) */}
            {/* <li className="dropdown topbar-item">
              <a className="nav-link dropdown-toggle nav-icon" data-bs-toggle="dropdown" href="#">
                <i className="iconoir-bell" />
                <span className="alert-badge" />
              </a>
              <div className="dropdown-menu dropdown-menu-end dropdown-lg py-0">
                <h5 className="dropdown-item-text m-0 py-3 d-flex justify-content-between align-items-center">
                  Notifications
                  <a href="#" className="badge text-body-tertiary">
                    <i className="iconoir-plus-circle fs-4" />
                  </a>
                </h5>
                <div className="tab-content" style={{ maxHeight: 230 }} data-simplebar>
                  <div className="tab-pane fade show active" id="All">
                    
                    <a href="#" className="dropdown-item py-3">
                      <small className="float-end text-muted ps-2">2 min ago</small>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                          <i className="iconoir-wolf fs-4" />
                        </div>
                        <div className="flex-grow-1 ms-2 text-truncate">
                          <h6 className="my-0 fw-normal text-dark fs-13">Your order is placed</h6>
                          <small className="text-muted">Dummy text of the printing industry.</small>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <a href="/pages-notifications" className="dropdown-item text-center text-dark fs-13 py-2">
                  View All <i className="fi-arrow-right" />
                </a>
              </div>
            </li> */}

            {/* User Profile */}
            <li className="dropdown topbar-item">
              <a className="nav-link dropdown-toggle nav-icon" data-bs-toggle="dropdown" href="#">
                <Image
                  width={40}
                  height={40}
                  src="/user/assets/images/users/avatar-1.jpg"
                  alt="User"
                  className="thumb-md rounded-circle"
                />
              </a>
              <div className="dropdown-menu dropdown-menu-end py-0">
                <div className="d-flex align-items-center dropdown-item py-2 bg-secondary-subtle">
                  <div className="flex-shrink-0">
                    <Image
                      width={40}
                      height={40}
                      src="/user/assets/images/users/avatar-1.jpg"
                      alt="User"
                      className="thumb-md rounded-circle"
                    />
                  </div>
                  <div className="flex-grow-1 ms-2 text-truncate">
                    <h6 className="my-0 fw-medium text-dark fs-13">William Martin</h6>
                    <small className="text-muted">Front End Developer</small>
                  </div>
                </div>
                <div className="dropdown-divider" />
                <small className="text-muted px-2 pb-1 d-block">Account</small>
                <a className="dropdown-item" href="/profile">
                  <i className="las la-user fs-18 me-1" /> Profile
                </a>
                <a className="dropdown-item" href="/faq">
                  <i className="las la-wallet fs-18 me-1" /> Earning
                </a>
                <small className="text-muted px-2 py-1 d-block">Settings</small>
                <a className="dropdown-item" href="/settings">
                  <i className="las la-cog fs-18 me-1" /> Account Settings
                </a>
                <a className="dropdown-item" href="/security">
                  <i className="las la-lock fs-18 me-1" /> Security
                </a>
                <a className="dropdown-item" href="/help">
                  <i className="las la-question-circle fs-18 me-1" /> Help Center
                </a>
                <div className="dropdown-divider mb-0" />
                <a className="dropdown-item text-danger" href="/auth/logout">
                  <i className="las la-power-off fs-18 me-1" /> Logout
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TopNav;

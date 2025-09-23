'use client';

import { MeDataApi } from "@/store/slices/meSlice";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";


const TopNav = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { data } = useSelector((state) => state.MeDataApi);

   useEffect(() => {
      // Check if token cookie exists, if yes redirect to /dashboard
      const token = Cookies.get('token');
      if (!token) {
        window.location.href = '/login';
      }
    }, []);


  useEffect(() => {
    dispatch(MeDataApi());
  }, [dispatch]);

  const logout = () => {
    Cookies.remove('token');
    router.push('/login');
  };

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
              <h5 className="mb-0 fw-semibold text-truncate">
                Good Morning, {data?.fullName || "User"}!
              </h5>
            </li>
          </ul>

          {/* Right Side */}
          <ul className="topbar-item list-unstyled d-inline-flex align-items-center mb-0">
            {/* User Profile */}
            <li className="dropdown topbar-item">
              <a className="nav-link dropdown-toggle nav-icon" data-bs-toggle="dropdown" href="#">
                <p className="mb-0 fw-semibold text-truncate">{data?.fullName?.charAt(0)?.toUpperCase()}</p>
              </a>
              <div className="dropdown-menu dropdown-menu-end py-0">
                {/* <div className="d-flex align-items-center dropdown-item py-2 bg-secondary-subtle">
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
                    <h6 className="my-0 fw-medium text-dark fs-13">{data?.fullName || "William Martin"}</h6>
                  </div>
                </div> */}
                {/* <div className="dropdown-divider" /> */}
                <a
                  className="dropdown-item text-danger d-flex align-items-center"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    logout();
                  }}
                >
                  <i className="las la-power-off fs-18 me-2"></i>
                  <span>Logout</span>
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

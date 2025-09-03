
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SidePannel = () => {
  return (
    <>
      <div className="startbar d-print-none">
        <div className="brand">
          <Link href="/dashboard" className="logo">
            <span>
              <Image
                width={40}
                height={40}
                src="/user/assets/images/logo-sm.png"
                alt="logo-small"
                className="logo-sm"
              />
            </span>
            <span>
              <Image
                width={120}
                height={40}
                src="/user/assets/images/logo-light.png"
                alt="logo-light"
                className="logo-lg logo-light"
              />
              <Image
                width={120}
                height={40}
                src="/user/assets/images/logo-dark.png"
                alt="logo-dark"
                className="logo-lg logo-dark"
              />
            </span>
          </Link>
        </div>

        <div className="startbar-menu">
          <div className="startbar-collapse" id="startbarCollapse" data-simplebar>
            <div className="d-flex align-items-start flex-column w-100">
              <ul className="navbar-nav mb-auto w-100">
                <li className="menu-label mt-2">
                  <span>Navigation</span>
                </li>

                {/* Dashboard */}
                <li className={`nav-item`}>
                  <Link href="/dashboard" className="nav-link">
                    <i className="iconoir-report-columns menu-icon" />
                    <span>Dashboard</span>
                  </Link>
                </li>

                {/* Orders */}
                <li className={`nav-item`}>
                  <Link href="/dashboard/orders" className="nav-link">
                    <i className="iconoir-paste-clipboard menu-icon" />
                    <span>Orders</span>
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="startbar-overlay d-print-none" />
    </>
  );
};

export default SidePannel;

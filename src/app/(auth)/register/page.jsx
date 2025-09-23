'use client';
import { registerUserAuthApi } from '@/utils/apiCall';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Link from 'next/link';

const Page = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNumber: '',
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  useEffect(() => {
    // Check if token cookie exists, if yes redirect to /dashboard
    const token = Cookies.get('token');
    if (token) {
      window.location.href = '/dashboard';
    }
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await registerUserAuthApi({
        name: formData.username,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        mobileNumber: formData.mobileNumber,
      });

      console.log(response);

      if (response.status_code === 201) {
        // Store token in cookies for 1 year
        Cookies.set('token', response.token, { expires: 365 });

        // Redirect to dashboard
        window.location.href = '/dashboard';
      } else {
        alert('User registration failed');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    }
  };

  return (
    <div className="container-xxl">
      <div className="row vh-100 d-flex justify-content-center">
        <div className="col-12 align-self-center">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-4 mx-auto">
                <div className="card">
                  <div className="card-body p-0 bg-black auth-header-box rounded-top">
                    <div className="text-center p-3">
                      <a href="index.html" className="logo logo-admin">
                        <img
                          src="https://legalpaper.in/_next/image?url=%2Fassets%2Fimg%2Fmain.png&w=640&q=75"
                          height={50}
                          alt="logo"
                          className="auth-logo"
                        />
                      </a>
                      <h4 className="mt-3 mb-1 fw-semibold text-white fs-18">
                        Create an account
                      </h4>
                      <p className="text-muted fw-medium mb-0">
                        Enter your detail to Create your account today.
                      </p>
                    </div>
                  </div>
                  <div className="card-body pt-0">
                    <form className="my-4" onSubmit={(e) => e.preventDefault()}>
                      <div className="form-group mb-2">
                        <label className="form-label" htmlFor="username">Username</label>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          name="username"
                          placeholder="Enter username"
                          value={formData.username}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group mb-2">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Enter email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group mb-2">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          placeholder="Enter password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group mb-2">
                        <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="confirmPassword"
                          name="confirmPassword"
                          placeholder="Enter Confirm password"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group mb-2">
                        <label className="form-label" htmlFor="mobileNumber">Mobile Number</label>
                        <input
                          type="text"
                          className="form-control"
                          id="mobileNumber"
                          name="mobileNumber"
                          placeholder="Enter Mobile Number"
                          value={formData.mobileNumber}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group row mt-3">
                        <div className="col-12">
                          <div className="form-check form-switch form-switch-success">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="agreeTerms"
                              name="agreeTerms"
                              checked={formData.agreeTerms}
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="agreeTerms">
                              By registering you agree to the Mifty{" "}
                              <a href="#" className="text-primary">Terms of Use</a>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="form-group mb-0 row">
                        <div className="col-12">
                          <div className="d-grid mt-3">
                            <button className="btn btn-primary" type="button" onClick={handleSubmit}>
                              Register <i className="fas fa-sign-in-alt ms-1" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>

                    <div className="text-center">
                      <p className="text-muted">
                        Already have an account ?{" "}
                        <Link href="/login" className="text-primary ms-2">Log in</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

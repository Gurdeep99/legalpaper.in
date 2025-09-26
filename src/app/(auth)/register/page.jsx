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
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  useEffect(() => {
    const token = Cookies.get('token');
    const _uud = Cookies.get('_uud');
    if (token && _uud) {
      window.location.href = '/dashboard';
    }
  }, []);

  const handleSubmit = async () => {
    setErrors({}); // reset errors

    if (!formData.username) {
      setErrors((prev) => ({ ...prev, username: 'Username is required' }));
      return;
    }
    if (!formData.password || !formData.confirmPassword) {
      setErrors((prev) => ({ ...prev, password: 'Password is required' }));
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setErrors((prev) => ({ ...prev, confirmPassword: 'Passwords do not match' }));
      return;
    }

    try {
      const response = await registerUserAuthApi({
        name: formData.username,  // ✅ backend expects fullName
        email: formData.email,
        phone: formData.mobileNumber, // ✅ backend expects phone
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });

      if (response.status_code === 201) {
        Cookies.set('token', response.token, { expires: 365 });
        Cookies.set('_uud', response.id, { expires: 365 });
        window.location.href = '/dashboard';
      } else {
        alert(response.message || 'User registration failed');
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
                      <a href="/" className="logo logo-admin">
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
                      {/* Username */}
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
                        {errors.username && <p className="text-danger">{errors.username}</p>}
                      </div>

                      {/* Email */}
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
                        {errors.email && <p className="text-danger">{errors.email}</p>}
                      </div>

                      {/* Password */}
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
                        {errors.password && <p className="text-danger">{errors.password}</p>}
                      </div>

                      {/* Confirm Password */}
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
                        {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword}</p>}
                      </div>

                      {/* Mobile Number */}
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
                        {errors.mobileNumber && <p className="text-danger">{errors.mobileNumber}</p>}
                      </div>

                      {/* Terms */}
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
                          {errors.agreeTerms && <p className="text-danger">{errors.agreeTerms}</p>}
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="form-group mb-0 row">
                        <div className="col-12">
                          <div className="d-grid mt-3">
                            <button
                              className="btn btn-primary"
                              type="button"
                              onClick={handleSubmit}
                            >
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

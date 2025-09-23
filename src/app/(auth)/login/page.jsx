"use client";
import { loginUserAuthApi } from "@/utils/apiCall";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import Link from "next/link";


export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  useEffect(() => {
    const token = Cookies.get('token');
    const _uud = Cookies.get('_uud');
    if (token && _uud) {
      window.location.href = '/dashboard';
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    const response = await loginUserAuthApi({
      email: formData.email,
      password: formData.password,
    });

    if(response.status_code === 200) {
      Cookies.set('token', response.token, { expires: 365 });
      Cookies.set('_uud', response.id, { expires: 365 });
      window.location.href = '/dashboard';
    }else{
      alert('Login failed');
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
                    </div>
                  </div>

                  <div className="card-body pt-0">
                    <form className="my-4" onSubmit={(e) => e.preventDefault()}>
                      <div className="form-group mb-2">
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
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
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
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

                      <div className="form-group row mt-3">
                        <div className="col-sm-6">
                          {/* <div className="form-check form-switch form-switch-success">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="rememberMe"
                              name="rememberMe"
                              checked={formData.rememberMe}
                              onChange={handleChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="rememberMe"
                            >
                              Remember me
                            </label>
                          </div> */}
                        </div>

                        <div className="col-sm-6 text-end">
                          <a
                            href="auth-recover-pw.html"
                            className="text-muted font-13"
                          >
                            <i className="dripicons-lock" /> Forgot password?
                          </a>
                        </div>
                      </div>

                      <div className="form-group mb-0 row">
                        <div className="col-12">
                          <div className="d-grid mt-3">
                            <button
                              className="btn btn-primary"
                              type="button"
                              onClick={handleSubmit}
                            >
                              Log In <i className="fas fa-sign-in-alt ms-1" />
                            </button>
                          </div>
                        </div>
                      </div>
                     
                    </form>
                    <div className="text-center">
                      <p className="text-muted">
                        Dont! have an account ?
                        <Link href="/register" className="text-primary ms-2">Register</Link>
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
}

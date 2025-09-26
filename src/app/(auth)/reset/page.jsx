"use client";
import { resetPasswordAuthApi } from "@/utils/apiCall";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";

export default function ResetPasswordPage() {
  const [formData, setFormData] = useState({
    otp: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const email = Cookies.get("email");

  // Redirect back if missing reset context
  useEffect(() => {
    const reset = Cookies.get("reset");
    if (!email || !reset) {
      window.location.href = "/forgot-password";
    }
  }, [email]);

  const validate = () => {
    const newErrors = {};
    if (!formData.otp) {
      newErrors.otp = "OTP is required.";
    } else if (!/^[a-zA-Z0-9]{4}$/.test(formData.otp)) {
      newErrors.otp = "OTP must be 4 alphanumeric characters.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await resetPasswordAuthApi({
        email,
        otp: formData.otp,
        newPassword: formData.password,
        confirmPassword: formData.confirmPassword,
      });

      if (response.status_code === 200) {
        alert("Password reset successful. Please login.");
        Cookies.remove("reset");
        Cookies.remove("email");
        window.location.href = "/login";
      } else {
        alert(response.message || "Failed to reset password.");
      }
    } catch (error) {
      console.error("Reset error:", error);
      alert("Server error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container-xxl">
      <div className="row vh-100 d-flex justify-content-center">
        <div className="col-12 align-self-center">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-4 mx-auto">
                <div className="card shadow-lg border-0">
                  <div className="card-body p-0 bg-black auth-header-box rounded-top">
                    <div className="text-center p-3">
                      <h3 className="text-white mb-0">Reset Password</h3>
                      <p className="text-white-50 small mb-0">
                        Enter the OTP sent to your email and set a new password.
                      </p>
                    </div>
                  </div>

                  <div className="card-body pt-4">
                    <form className="my-3" onSubmit={(e) => e.preventDefault()}>
                      {/* Email (disabled) */}
                      <div className="form-group mb-3">
                        <label className="form-label fw-semibold" htmlFor="email">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          disabled
                          value={email || ""}
                          readOnly
                        />
                      </div>

                      {/* OTP */}
                      <div className="form-group mb-3">
                        <label className="form-label fw-semibold" htmlFor="otp">
                          OTP
                        </label>
                        <input
                          type="text"
                          className={`form-control ${errors.otp ? "is-invalid" : ""}`}
                          id="otp"
                          name="otp"
                          placeholder="Enter 6-digit OTP"
                          value={formData.otp}
                          onChange={handleChange}
                          aria-describedby="otpError"
                        />
                        {errors.otp && (
                          <div id="otpError" className="invalid-feedback">
                            {errors.otp}
                          </div>
                        )}
                      </div>

                      {/* Password */}
                      <div className="form-group mb-3">
                        <label className="form-label fw-semibold" htmlFor="password">
                          New Password
                        </label>
                        <input
                          type="password"
                          className={`form-control ${errors.password ? "is-invalid" : ""}`}
                          id="password"
                          name="password"
                          placeholder="Enter new password"
                          value={formData.password}
                          onChange={handleChange}
                          aria-describedby="passwordError"
                        />
                        {errors.password && (
                          <div id="passwordError" className="invalid-feedback">
                            {errors.password}
                          </div>
                        )}
                      </div>

                      {/* Confirm Password */}
                      <div className="form-group mb-3">
                        <label className="form-label fw-semibold" htmlFor="confirmPassword">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                          id="confirmPassword"
                          name="confirmPassword"
                          placeholder="Re-enter password"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          aria-describedby="confirmPasswordError"
                        />
                        {errors.confirmPassword && (
                          <div id="confirmPasswordError" className="invalid-feedback">
                            {errors.confirmPassword}
                          </div>
                        )}
                      </div>

                      {/* Submit */}
                      <div className="form-group mb-0 row">
                        <div className="col-12">
                          <div className="d-grid mt-3">
                            <button
                              className="btn btn-primary"
                              type="button"
                              onClick={handleSubmit}
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? "Processing..." : "Reset Password"}
                              {!isSubmitting && (
                                <i className="fas fa-sign-in-alt ms-2" aria-hidden="true" />
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>

                    <div className="text-center mt-3">
                      <Link href="/forgot-password" className="text-decoration-none">
                        Back to password reset
                      </Link>
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

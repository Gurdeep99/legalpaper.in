"use client";
import { resetPasswordIniciateAuthApi } from "@/utils/apiCall";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Redirect if already logged in
  useEffect(() => {
    const token = Cookies.get("token");
    const _uud = Cookies.get("_uud");
    if (token && _uud) {
      window.location.href = "/dashboard";
    }
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear errors as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await resetPasswordIniciateAuthApi({ email: formData.email });

      if (response.status_code === 200) {
        Cookies.set("reset", "1", { expires: 1 });
        Cookies.set("email", formData.email, { expires: 1 });
        alert(response.message);
        window.location.href = "/reset";
      } else {
        alert(response.message || "Something went wrong.");
      }
    } catch (error) {
      setErrors({ email: error.response?.data?.message || "Something went wrong." });
      console.error("Reset error:", error);
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
                      <h3 className="text-white mb-0">Forgot Password</h3>
                      <p className="text-white-50 small mb-0">
                        Enter your registered email to receive reset instructions.
                      </p>
                    </div>
                  </div>

                  <div className="card-body pt-4">
                    <form className="my-3" onSubmit={(e) => e.preventDefault()}>
                      {/* Email Field */}
                      <div className="form-group mb-3">
                        <label className="form-label fw-semibold" htmlFor="email">
                          Email
                        </label>
                        <input
                          type="email"
                          className={`form-control ${errors.email ? "is-invalid" : ""}`}
                          id="email"
                          name="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          aria-describedby="emailHelp emailError"
                          aria-invalid={!!errors.email}
                        />
                        {errors.email && (
                          <div id="emailError" className="invalid-feedback">
                            {errors.email}
                          </div>
                        )}
                      </div>

                      {/* Submit Button */}
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
                      <a href="/login" className="text-decoration-none">
                        Back to Login
                      </a>
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

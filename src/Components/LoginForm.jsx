import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (isRegister) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = "Full name is required";
      }
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (isRegister) {
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    setSuccess("");

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (isRegister) {
        setSuccess("Account created successfully! Welcome to our fitness community.");
      } else {
        setSuccess("Welcome back! Redirecting to your dashboard...");
      }

      // Reset form after success
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      setErrors({ submit: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const toggleForm = () => {
    setIsRegister(!isRegister);
    setErrors({});
    setSuccess("");
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  return (
    <div className={`auth-container ${isRegister ? "active" : ""}`}>
      {/* Left Image */}
      <div className="auth-image">
        <img
          src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba"
          alt="Gym"
        />
      </div>

      {/* Right Form */}
      <div className="loginform">
        <div className="form-wrapper">
          {!isRegister ? (
            <div className="form-box">
              <h2>Welcome Back</h2>
              <p>Login to continue your fitness journey and track your progress</p>
              
              {success && (
                <div className="success-message">
                  {success}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className={`input-group ${errors.email ? 'error' : ''}`}>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder=" "
                    required 
                  />
                  <label>Email</label>
                  {errors.email && (
                    <div className="error-message">
                      <span>⚠</span> {errors.email}
                    </div>
                  )}
                </div>

                <div className={`input-group ${errors.password ? 'error' : ''}`}>
                  <input 
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder=" "
                    required 
                  />
                  <label>Password</label>
                  <button 
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "🙈" : "👁"}
                  </button>
                  {errors.password && (
                    <div className="error-message">
                      <span>⚠</span> {errors.password}
                    </div>
                  )}
                </div>

                <button 
                  className={`btn-login ${loading ? 'loading' : ''}`} 
                  type="submit"
                  disabled={loading}
                >
                  {loading ? '' : 'Login'}
                </button>
              </form>

              <p className="toggle-text">
                Don't have an account?{" "}
                <span onClick={toggleForm}>Join Now</span>
              </p>
            </div>
          ) : (
            <div className="form-box">
              <h2>Create Account</h2>
              <p>Join our fitness community and start your transformation</p>

              {success && (
                <div className="success-message">
                  {success}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className={`input-group ${errors.fullName ? 'error' : ''}`}>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder=" "
                    required 
                  />
                  <label>Full Name</label>
                  {errors.fullName && (
                    <div className="error-message">
                      <span>⚠</span> {errors.fullName}
                    </div>
                  )}
                </div>

                <div className={`input-group ${errors.email ? 'error' : ''}`}>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder=" "
                    required 
                  />
                  <label>Email</label>
                  {errors.email && (
                    <div className="error-message">
                      <span>⚠</span> {errors.email}
                    </div>
                  )}
                </div>

                <div className={`input-group ${errors.password ? 'error' : ''}`}>
                  <input 
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder=" "
                    required 
                  />
                  <label>Password</label>
                  <button 
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "🙈" : "👁"}
                  </button>
                  {errors.password && (
                    <div className="error-message">
                      <span>⚠</span> {errors.password}
                    </div>
                  )}
                </div>

                <div className={`input-group ${errors.confirmPassword ? 'error' : ''}`}>
                  <input 
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder=" "
                    required 
                  />
                  <label>Confirm Password</label>
                  <button 
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? "🙈" : "👁"}
                  </button>
                  {errors.confirmPassword && (
                    <div className="error-message">
                      <span>⚠</span> {errors.confirmPassword}
                    </div>
                  )}
                </div>

                <button 
                  className={`btn-login ${loading ? 'loading' : ''}`} 
                  type="submit"
                  disabled={loading}
                >
                  {loading ? '' : 'Create Account'}
                </button>
              </form>

              <p className="toggle-text">
                Already have an account?{" "}
                <span onClick={toggleForm}>Sign In</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
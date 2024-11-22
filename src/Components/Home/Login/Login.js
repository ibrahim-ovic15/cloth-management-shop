import React from "react";
import "./Login.css"; // Add custom CSS for styling

const Login = () => {
  return (
    <div className="login-container">
      {/* Top Heading */}
      <h1 className="shop-heading">Cloth Shop Name</h1>

      {/* Main Login Section */}
      <div className="login-section">
        {/* Left Side - Shop Logo */}
        <div className="logo-container">
          <img
            src="/path-to-your-logo.png" // Replace with the actual path to your logo
            alt="Shop Logo"
            className="shop-logo"
          />
        </div>

        {/* Right Side - Login Box */}
        <div className="login-box">
          <h2 className="login-heading">Sign In</h2>

          <form className="login-form">
            {/* User ID/Email */}
            <div className="form-group">
              <label htmlFor="email">UserID or Email</label>
              <br/>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="form-input colorful-input"
                required
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <br/>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="form-input colorful-input"
                required
              />
            </div>

            {/* Options */}
            <div className="options">
              <label>
                <input type="checkbox" /> Keep me logged in
              </label>
              <a href="#" className="forgot-password">
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button type="submit" className="login-button">
              Login
            </button>

            {/* Signup Option */}
            <p className="signup-option">
              Don't have an account? <a href="#">Sign up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

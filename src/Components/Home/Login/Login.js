import React from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // Link to the above CSS

const Login = () => {
  return (
    <div
      className="login-container"
      style={{
        backgroundImage: 'url("/login.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Heading */}
      <h1 className="shop-heading">Beauty Fashion</h1>

      {/* Login Section */}
      <div className="login-section">
        {/* Logo */}
        <div className="logo-container">
          <img src="/logo.png" alt="Shop Logo" className="shop-logo" />
        </div>

        {/* Login Form */}
        <div className="login-box">
          <h2 className="login-heading">Login</h2>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                className="form-input"
                placeholder="Enter your username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="Enter your password"
              />
            </div>
            {/* <button type="submit" className="login-button"> */}
            <Link to="/dashboard" className="login-button">
               Login
        </Link>
            {/* </button> */}
          </form>
          <p className="signup-option">
            New here? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

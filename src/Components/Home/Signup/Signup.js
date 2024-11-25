import React from "react";
import "./Signup.css"; // Add custom CSS for styling
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup-container">
      {/* Top Heading */}
      <h1 className="shop-heading">Brother's Cloth Store</h1>

      {/* Main Signup Section */}
      <div className="signup-section">
        {/* Signup Box */}
        <div className="signup-box">
          <h2 className="signup-heading">Create an Account</h2>

          <form className="signup-form">
            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <br/>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="form-input colorful-input"
                required
              />
            </div>

            {/* Name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <br/>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="form-input colorful-input"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="form-group">
              <label htmlFor="number">Phone Number</label>
              <br/>
              <input
                type="tel"
                id="number"
                placeholder="Enter your phone number"
                className="form-input colorful-input"
                required
              />
            </div>

            {/* User ID */}
            <div className="form-group">
              <label htmlFor="userID">User ID</label>
              <br/>
              <input
                type="text"
                id="userID"
                placeholder="Enter your user ID"
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
                placeholder="Create a password"
                className="form-input colorful-input"
                required
              />
            </div>

            {/* Signup Button */}
            <div>
            <Link to="/" className="signup-button"> Sign up </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

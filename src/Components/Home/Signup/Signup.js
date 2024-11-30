import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    userID: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Validate and submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    const { email, name, phone, userID, password } = formData;
    if (!email || !name || !phone || !userID || !password) {
      setError("All fields are required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email address.");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      setError("Phone number must be 10 digits.");
      return;
    }

    // On successful signup
    setError("");
    alert("Signup successful!");
    navigate("/"); // Redirect to login or home page
  };

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
      <div className="signup-container">
        {/* Top Heading */}
        <h1 className="shop-heading">Beauty Fasion</h1>

        {/* Main Signup Section */}
        <div className="signup-section">
          <div className="signup-box">
            <h2 className="signup-heading">Create an Account</h2>

            {error && <p className="error-message">{error}</p>}

            <form className="signup-form" onSubmit={handleSubmit}>
              {/* Email */}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="form-input colorful-input"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Name */}
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <br />
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="form-input colorful-input"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Phone Number */}
              <div className="form-group">
  <label htmlFor="phone">Phone Number</label>
  <br />
  <input
    type="tel"
    id="phone"
    placeholder="Enter your phone number"
    className="form-input colorful-input"
    value={formData.phone}
    onChange={handleInputChange}
    maxLength={11} // Limits input to 11 characters
    required
  />
  {/* Error Message */}
  {formData.phone.length > 0 && formData.phone.length !== 11 && (
    <p className="error-message">Phone number must be 11 digits.</p>
  )}
</div>


              {/* User ID */}
              <div className="form-group">
                <label htmlFor="userID">User ID</label>
                <br />
                <input
                  type="text"
                  id="userID"
                  placeholder="Enter your user ID"
                  className="form-input colorful-input"
                  value={formData.userID}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Password */}
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <br />
                <input
                  type="password"
                  id="password"
                  placeholder="Create a password"
                  className="form-input colorful-input"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Signup Button */}
              <button type="submit" className="signup-button">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

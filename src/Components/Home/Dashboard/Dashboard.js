import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const options = [
    {
      name: "Employee",
      color: "#80d0c7",  // Light Teal
      route: "/employeepage",
    },
    {
      name: "Inventory",
      color: "#ffe0b2",  // Light Orange
      route: "/inventory",
    },
    {
      name: "Supplier",
      color: "#c5e1a5",  // Light Green
      route: "/supplierpage",
    },
    {
      name: "Customer",
      color: "#b3e5fc",  // Light Blue
      route: "/customer",
    },
    {
      name: "Sell History",
      color: "#f48fb1",  // Light Pink
      route: "/sellhistory",
    },
  ];

  return (
    <div
      className="dashboard-container"
      style={{
        backgroundImage: 'url("/login.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh", // Full screen height
        width: "100%", // Full screen width
      }}
    >
      {/* Admin Link in Top-Right Corner */}
      <div className="admin-link-container">
        <Link to="/admin" className="admin-link">
          Admin
        </Link>
      </div>

      {/* Dashboard Heading */}
      <h1
        className="dashboard-heading"
        style={{
          color: "#ffffff", // White color for the title to stand out
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Shadow for better visibility
        }}
      >
        Dashboard
      </h1>

      {/* Options Section */}
      <div className="dashboard-options">
        {options.map((option, index) => (
          <button
            type="button"
            key={index}
            className="dashboard-card btn btn-info"
            style={{
              backgroundColor: option.color,
              color: "#333", // Default text color for visibility
              borderRadius: "25px",  // Rounded buttons
              border: "none", // Remove borders
              fontSize: "1.2rem", // Adjust text size
              padding: "15px 30px", // Smaller, more compact buttons
              width: "auto",
              height: "auto",
              margin: "10px", // Space between buttons
              display: "inline-block",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Light shadow effect
              transition: "transform 0.2s ease, box-shadow 0.2s ease", // Smooth hover effect
            }}
            onClick={() => window.location.href = option.route} // Redirect on click
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)"; // Slightly scale up on hover
              e.target.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.2)"; // Darker shadow on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)"; // Reset scale
              e.target.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)"; // Reset shadow
            }}
          >
            <span
              className="card-text"
              style={{
                color: option.color === "#ffe0b2" || option.color === "#f48fb1" ? "#333" : "#fff", // Adjust text color for readability
              }}
            >
              {option.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

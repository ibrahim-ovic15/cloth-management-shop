import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const options = [
    {
      name: "Employee",
      color: "#ff6f61",
      image: "/images/employee-bg.gif", // Path to the Employee GIF
      route: "/employeepage",
    },
    {
      name: "Inventory",
      color: "#6fbf73",
      image: "/images/inventory-bg.gif",
      route: "/inventory",
    },
    {
      name: "Supplier",
      color: "#ffa726",
      image: "/images/supplier-bg.gif",
      route: "/supplierpage",
    },
    {
      name: "Customer",
      color: "#42a5f5",
      image: "/images/customer-bg.gif",
      route: "/customer",
    },
    {
      name: "Sell History",
      color: "#ab47bc",
      image: "/images/sellhistory-bg.gif",
      route: "/sellhistory",
    },
    
  ];

  return (
    <div className="dashboard-container">
      {/* Admin Link in Top-Right Corner */}
      <div className="admin-link-container">
        <Link to="/admin" className="admin-link">
          Admin
        </Link>
      </div>

      {/* Dashboard Heading */}
      <h1 className="dashboard-heading">Dashboard</h1>

      {/* Options Section */}
      <div className="dashboard-options">
        {options.map((option, index) => (
          <Link
            to={option.route}
            key={index}
            className="dashboard-card"
            style={{
              backgroundColor: option.color,
              backgroundImage: `url(${option.image})`,
            }}
          >
            <div className="card-overlay">
              <span className="card-text">{option.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

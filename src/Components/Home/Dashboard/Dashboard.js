import React from "react";
import "./Dashboard.css"; // Add custom CSS for styling

const Dashboard = () => {
  const options = [
    {
      name: "Employee",
      color: "#ff6f61",
      image: "/images/employee-bg.gif", // Replace with the path to your GIF or image
    },
    {
      name: "Inventory",
      color: "#6fbf73",
      image: "/images/inventory-bg.gif",
    },
    {
      name: "Supplier",
      color: "#ffa726",
      image: "/images/supplier-bg.gif",
    },
    {
      name: "Customer",
      color: "#42a5f5",
      image: "/images/customer-bg.gif",
    },
    {
      name: "Sell History",
      color: "#ab47bc",
      image: "/images/sellhistory-bg.gif",
    },
  ];

  return (
    <div className="dashboard-container">
      {/* Dashboard Heading */}
      <h1 className="dashboard-heading">Dashboard</h1>

      {/* Options Section */}
      <div className="dashboard-options">
        {options.map((option, index) => (
          <div
            key={index}
            className="dashboard-card"
            style={{
              backgroundColor: option.color,
              backgroundImage: `url(${option.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="card-overlay">
              <span className="card-text">{option.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

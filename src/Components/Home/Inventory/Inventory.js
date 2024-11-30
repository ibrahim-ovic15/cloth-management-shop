import React from "react";
import { Link } from "react-router-dom";
import "./InventoryPage.css";

const InventoryPage = () => {
  return (
    <div
      className="inventory-container"
      style={{
        backgroundImage: 'url("/login.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <h1 className="inventory-heading">Inventory Categories</h1>
      <div className="inventory-grid">
        {/* Men's Clothes */}
        <Link to="/mencloth" className="inventory-card mens">
          <h2 className="inventory-title">Men's Clothes</h2>
        </Link>
        {/* Women's Clothes */}
        <Link to="/womencloth" className="inventory-card womens">
          <h2 className="inventory-title">Women's Clothes</h2>
        </Link>
      </div>
    </div>
  );
};

export default InventoryPage;

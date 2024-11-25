import React from "react";
import { Link } from "react-router-dom";
import "./InventoryPage.css";

const InventoryPage = () => {
  return (
    <div className="inventory-container">
      <h1 className="inventory-heading">Inventory Categories</h1>
      <div className="inventory-grid">
        {/* Men's Clothes */}
        <Link to="/mencloth" className="inventory-card mens">
          <img
            src="/images/mens-clothes.gif" // Replace with your gif or sticker URL
            alt="Men's Clothes"
            className="inventory-icon"
          />
          <h2 className="inventory-title">Men's Clothes</h2>
        </Link>
        {/* Women's Clothes */}
        <Link to="/womencloth" className="inventory-card womens">
          <img
            src="/images/womens-clothes.gif" // Replace with your gif or sticker URL
            alt="Women's Clothes"
            className="inventory-icon"
          />
          <h2 className="inventory-title">Women's Clothes</h2>
        </Link>
      </div>
    </div>
  );
};

export default InventoryPage;

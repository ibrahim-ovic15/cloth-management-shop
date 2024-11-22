import React from "react";
import "./InventoryPage.css";

const InventoryPage = () => {
  return (
    <div className="inventory-container">
      <h1 className="inventory-heading">Inventory Categories</h1>
      <div className="inventory-grid">
        {/* Men's Clothes */}
        <div className="inventory-card">
          <img
            src="/images/mens-clothes.gif" // Replace with your gif or sticker URL
            alt="Men's Clothes"
            className="inventory-icon"
          />
          <h2 className="inventory-title">Men's Clothes</h2>
        </div>
        {/* Women's Clothes */}
        <div className="inventory-card">
          <img
            src="/images/womens-clothes.gif" // Replace with your gif or sticker URL
            alt="Women's Clothes"
            className="inventory-icon"
          />
          <h2 className="inventory-title">Women's Clothes</h2>
        </div>
      </div>
    </div>
  );
};

export default InventoryPage;

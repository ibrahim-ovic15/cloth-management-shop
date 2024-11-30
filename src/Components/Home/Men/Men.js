import React, { useState } from "react";
import "./MenClothPage.css";

const mensClothes = [
  {
    id: 1,
    name: "Jeans",
    details: {
      quantity: 50,
      colors: ["Blue", "Black", "Grey"],
      sizes: ["S", "M", "L", "XL"],
    },
  },
  {
    id: 2,
    name: "Shirts",
    details: {
      quantity: 40,
      colors: ["White", "Blue", "Red"],
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
  },
  {
    id: 3,
    name: "T-Shirts",
    details: {
      quantity: 60,
      colors: ["Black", "White", "Green"],
      sizes: ["XS", "S", "M", "L", "XL"],
    },
  },
  {
    id: 4,
    name: "Punjabi",
    details: {
      quantity: 30,
      colors: ["White", "Cream", "Black"],
      sizes: ["M", "L", "XL", "XXL"],
    },
  },
];

const MenClothPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeDetails = () => {
    setSelectedItem(null);
  };

  return (
    <div
      className="men-cloth-container"
      style={{
        backgroundImage: 'url("/login.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
      }}
    >
      <h1 className="men-cloth-heading">Men's Clothing</h1>
      <div className="men-cloth-list">
        {mensClothes.map((item) => (
          <div
            key={item.id}
            className="men-cloth-item"
            onClick={() => handleItemClick(item)}
          >
            {item.name}
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="item-details-modal">
          <div className="item-details-content">
            <h2>{selectedItem.name}</h2>
            <p>
              <strong>Quantity:</strong> {selectedItem.details.quantity}
            </p>
            <p>
              <strong>Available Colors:</strong>{" "}
              {selectedItem.details.colors.join(", ")}
            </p>
            <p>
              <strong>Available Sizes:</strong>{" "}
              {selectedItem.details.sizes.join(", ")}
            </p>
            <button className="close-button" onClick={closeDetails}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenClothPage;

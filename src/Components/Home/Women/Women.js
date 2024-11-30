import React, { useState } from "react";
import "./WomenClothPage.css";

const womensClothes = [
  {
    id: 1,
    name: "Sari",
    stock: 20,
  },
  {
    id: 2,
    name: "Three Piece",
    stock: 15,
  },
  {
    id: 3,
    name: "Round Dress",
    stock: 10,
  },
];

const WomenClothPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeDetails = () => {
    setSelectedItem(null);
  };

  return (
    <div
      className="women-cloth-container"
      style={{
        backgroundImage: 'url("/login.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
      }}
    >
      <h1 className="women-cloth-heading">Women's Clothing</h1>
      <div className="women-cloth-grid">
        {womensClothes.map((item) => (
          <div
            key={item.id}
            className="women-cloth-card"
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
              <strong>Stock Quantity:</strong> {selectedItem.stock}
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

export default WomenClothPage;

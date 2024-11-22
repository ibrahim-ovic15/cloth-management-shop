import React from "react";
import "./WomenClothPage.css";

const womensClothes = [
  { id: 1, name: "Sari", image: "/images/sari.png" },
  { id: 2, name: "Three Piece", image: "/images/three-piece.png" },
  { id: 3, name: "Round Dress", image: "/images/round-dress.png" },
  { id: 4, name: "T-Shirts", image: "/images/tshirt.png" },
  { id: 5, name: "Jeans", image: "/images/jeans.png" },
  { id: 6, name: "Skirts", image: "/images/skirt.png" },
  { id: 7, name: "Blouses", image: "/images/blouse.png" },
  { id: 8, name: "Gowns", image: "/images/gown.png" },
  { id: 9, name: "Salwar Kameez", image: "/images/salwar-kameez.png" },
];

const WomenClothPage = () => {
  return (
    <div className="women-cloth-container">
      <h1 className="women-cloth-heading">Women's Clothing</h1>
      <div className="women-cloth-grid">
        {womensClothes.map((item) => (
          <div key={item.id} className="women-cloth-card">
            <img
              src={item.image}
              alt={item.name}
              className="women-cloth-image"
            />
            <h2 className="women-cloth-name">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenClothPage;

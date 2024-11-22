import React from "react";
import "./MenClothPage.css";

const mensClothes = [
  { id: 1, name: "Jeans", image: "/images/jeans.png" },
  { id: 2, name: "Shirts", image: "/images/shirt.png" },
  { id: 3, name: "T-Shirts", image: "/images/tshirt.png" },
  { id: 4, name: "Punjabi", image: "/images/punjabi.png" },
  { id: 5, name: "Polo Shirts", image: "/images/polo-shirt.png" },
  { id: 6, name: "Jackets", image: "/images/jacket.png" },
  { id: 7, name: "Sweaters", image: "/images/sweater.png" },
  { id: 8, name: "Shorts", image: "/images/shorts.png" },
];

const MenClothPage = () => {
  return (
    <div className="men-cloth-container">
      <h1 className="men-cloth-heading">Men's Clothing</h1>
      <div className="men-cloth-grid">
        {mensClothes.map((item) => (
          <div key={item.id} className="men-cloth-card">
            <img src={item.image} alt={item.name} className="men-cloth-image" />
            <h2 className="men-cloth-name">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenClothPage;

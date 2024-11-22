import React, { useState } from "react";
import "./SupplierPage.css";

const suppliers = [
  {
    id: 1,
    name: "Alpha Textiles",
    photo: "/images/supplier1.jpg", // Replace with actual image paths
    number: "555-1234",
    address: "45 Textile Street, Fabric City",
    clothTypes: "Cotton, Silk, Denim",
  },
  {
    id: 2,
    name: "Beta Fabrics",
    photo: "/images/supplier2.jpg",
    number: "555-5678",
    address: "67 Weave Avenue, Yarn Town",
    clothTypes: "Wool, Linen, Polyester",
  },
  // Add more supplier objects here
];

const SupplierPage = () => {
  const [selectedSupplier, setSelectedSupplier] = useState(null);

  const handleSupplierClick = (supplier) => {
    setSelectedSupplier(supplier);
  };

  const handleBackToList = () => {
    setSelectedSupplier(null);
  };

  return (
    <div className="supplier-container">
      {!selectedSupplier ? (
        <>
          <h1 className="supplier-heading">Supplier List</h1>
          <div className="supplier-grid">
            {suppliers.map((supplier) => (
              <div
                key={supplier.id}
                className="supplier-card"
                onClick={() => handleSupplierClick(supplier)}
              >
                <img
                  src={supplier.photo}
                  alt={supplier.name}
                  className="supplier-photo"
                />
                <h2 className="supplier-name">{supplier.name}</h2>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="supplier-details">
          <button className="back-button" onClick={handleBackToList}>
            Back to List
          </button>
          <img
            src={selectedSupplier.photo}
            alt={selectedSupplier.name}
            className="supplier-detail-photo"
          />
          <h2 className="supplier-detail-name">{selectedSupplier.name}</h2>
          <p>
            <strong>Phone Number:</strong> {selectedSupplier.number}
          </p>
          <p>
            <strong>Address:</strong> {selectedSupplier.address}
          </p>
          <p>
            <strong>Types of Clothes Supplied:</strong> {selectedSupplier.clothTypes}
          </p>
        </div>
      )}
    </div>
  );
};

export default SupplierPage;

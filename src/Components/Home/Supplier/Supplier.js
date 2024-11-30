import React, { useState } from "react";
import "./SupplierPage.css";

const suppliers = [
  {
    id: 1,
    name: "Alpha Textiles",
    number: "555-1234",
    address: "45 Textile Street, Fabric City",
    clothTypes: "Cotton, Silk, Denim",
  },
  {
    id: 2,
    name: "Beta Fabrics",
    number: "555-5678",
    address: "67 Weave Avenue, Yarn Town",
    clothTypes: "Wool, Linen, Polyester",
  },
  {
    id: 3,
    name: "Gamma Clothings",
    number: "555-9876",
    address: "88 Thread Lane, Weave City",
    clothTypes: "Jersey, Fleece, Cotton",
  },
  {
    id: 4,
    name: "Delta Fabrics",
    number: "555-3456",
    address: "12 Loom Road, Fabric Town",
    clothTypes: "Nylon, Polyester, Linen",
  },
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
    <div className="supplier-page-container">
      {/* If no supplier is selected, show the list of suppliers */}
      {!selectedSupplier ? (
        <>
          <h1 className="supplier-heading">Supplier List</h1>
          <div className="supplier-list">
            {suppliers.map((supplier) => (
              <button
                key={supplier.id}
                className="btn btn-info supplier-name"
                onClick={() => handleSupplierClick(supplier)}
              >
                {supplier.name}
              </button>
            ))}
          </div>
        </>
      ) : null}

      {/* Show supplier details when one is clicked */}
      {selectedSupplier && (
        <div className="supplier-details">
          <button
            className="btn btn-info back-button"
            onClick={handleBackToList}
          >
            Back to List
          </button>
          <h2>{selectedSupplier.name}</h2>
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

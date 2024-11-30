import React, { useState } from "react";
import "./AdminDashboard.css";

const initialData = {
  employees: [
    { id: 1, name: "Alice Johnson", phone: "123-456-7890", address: "123 Main St", joinDate: "2024-01-01", salary: 5000 },
    { id: 2, name: "Bob Smith", phone: "987-654-3210", address: "456 Elm St", joinDate: "2024-02-15", salary: 4500 },
  ],
  suppliers: [
    { id: 1, name: "Supplier A", phone: "123-456-7890", address: "789 Oak St", type: "Clothing" },
    { id: 2, name: "Supplier B", phone: "987-654-3210", address: "101 Pine St", type: "Accessories" },
  ],
  customers: [
    { id: 1, name: "John Doe", phone: "456-789-1234", address: "321 Maple St", firstBuyDate: "2024-03-01", tier: "Gold", totalAmountBuy: 5000, discount: 20 },
    { id: 2, name: "Jane Doe", phone: "789-123-4567", address: "654 Birch St", firstBuyDate: "2024-04-10", tier: "Silver", totalAmountBuy: 3000, discount: 15 },
  ],
  inventory: [
    { id: 1, item: "Jeans", category: "Men", stock: 50 },
    { id: 2, item: "T-Shirt", category: "Women", stock: 80 },
  ],
  sales: [
    { id: 1, date: "2024-11-01", total: 150 },
    { id: 2, date: "2024-11-02", total: 200 },
  ],
};

const AdminDashboard = () => {
  const [data, setData] = useState(initialData);
  const [selectedCategory, setSelectedCategory] = useState("employees");
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({});

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setEditingItem(null);
    setFormData({});
  };

  const handleEdit = (item) => {
    setEditingItem(item.id);
    setFormData(item);
  };

  const handleDelete = (id) => {
    const updatedData = data[selectedCategory].filter((item) => item.id !== id);
    setData((prev) => ({ ...prev, [selectedCategory]: updatedData }));
  };

  const handleAddOrUpdate = () => {
    const updatedCategory = data[selectedCategory];
    if (editingItem) {
      const updatedData = updatedCategory.map((item) =>
        item.id === editingItem ? { ...formData } : item
      );
      setData((prev) => ({ ...prev, [selectedCategory]: updatedData }));
    } else {
      const newItem = { ...formData, id: Date.now() };
      setData((prev) => ({ ...prev, [selectedCategory]: [...updatedCategory, newItem] }));
    }
    setEditingItem(null);
    setFormData({});
  };

  const renderTable = () => {
    const columns = {
      employees: ["Name", "Phone", "Address", "Join Date", "Salary", "Actions"],
      suppliers: ["Name", "Phone", "Address", "Type of Supplied Cloth", "Actions"],
      customers: ["Name", "Phone", "Address", "First Buy Date", "Customer Tier", "Total Amount Buy", "Discount", "Actions"],
      inventory: ["Item", "Category", "Stock", "Actions"],
      sales: ["Date", "Total Sell", "Actions"],
    };

    return (
      <table className="admin-table">
        <thead>
          <tr>
            {columns[selectedCategory].map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data[selectedCategory].map((item) => (
            <tr key={item.id}>
              {Object.keys(item).map((key) =>
                key !== "id" && key !== "Actions" ? (
                  <td key={key}>{item[key]}</td>
                ) : null
              )}
              <td>
                <button className="edit-btn" onClick={() => handleEdit(item)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderForm = () => {
    const formFields = {
      employees: ["name", "phone", "address", "joinDate", "salary"],
      suppliers: ["name", "phone", "address", "type"],
      customers: ["name", "phone", "address", "firstBuyDate", "tier", "totalAmountBuy", "discount"],
      inventory: ["item", "category", "stock"],
      sales: ["date", "total"],
    };

    return (
      <div className="admin-form">
        {formFields[selectedCategory].map((field) => (
          <input
            key={field}
            type={field === "salary" || field === "total" ? "number" : "text"}
            placeholder={`Enter ${field.charAt(0).toUpperCase() + field.slice(1)}`}
            value={formData[field] || ""}
            onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
          />
        ))}
        <button className="save-btn" onClick={handleAddOrUpdate}>
          {editingItem ? "Update" : "Add"}
        </button>
      </div>
    );
  };

  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-heading">Admin Dashboard</h1>
      <div className="category-buttons">
        {Object.keys(data).map((category) => (
          <button
            key={category}
            className={`category-btn ${category === selectedCategory ? "active" : ""}`}
            onClick={() => handleSelectCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="dashboard-content">
        {renderTable()}
        {renderForm()}
      </div>
    </div>
  );
};

export default AdminDashboard;

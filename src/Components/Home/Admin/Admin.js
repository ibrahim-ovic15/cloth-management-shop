import React, { useState } from "react";
import "./AdminDashboard.css";

const initialData = {
  employees: [
    { id: 1, name: "Alice Johnson", role: "Manager", contact: "123-456-7890" },
    { id: 2, name: "Bob Smith", role: "Sales Associate", contact: "987-654-3210" },
  ],
  suppliers: [
    { id: 1, name: "Supplier A", contact: "123-456-7890", type: "Clothing" },
    { id: 2, name: "Supplier B", contact: "987-654-3210", type: "Accessories" },
  ],
  customers: [
    { id: 1, name: "John Doe", contact: "456-789-1234", tier: "Gold" },
    { id: 2, name: "Jane Doe", contact: "789-123-4567", tier: "Silver" },
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
    return (
      <table className="admin-table">
        <thead>
          <tr>
            {Object.keys(data[selectedCategory][0] || {}).map((key) => (
              <th key={key}>{key}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data[selectedCategory].map((item) => (
            <tr key={item.id}>
              {Object.values(item).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
              <td>
                <button className="edit-btn" onClick={() => handleEdit(item)}>
                  Edit
                </button>
                <button className="delete-btn" onClick={() => handleDelete(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderForm = () => {
    return (
      <div className="admin-form">
        {Object.keys(data[selectedCategory][0] || {}).map((key) => (
          key !== "id" && (
            <input
              key={key}
              type="text"
              placeholder={`Enter ${key}`}
              value={formData[key] || ""}
              onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
            />
          )
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

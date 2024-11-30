import React, { useState } from "react";
import "./SellHistoryPage.css";

const initialSellData = [
  { id: 1, date: "2024-11-01", totalSell: 150 },
  { id: 2, date: "2024-11-02", totalSell: 200 },
  { id: 3, date: "2024-11-03", totalSell: 300 },
  { id: 4, date: "2024-11-04", totalSell: 250 },
  { id: 5, date: "2024-11-05", totalSell: 400 },
  { id: 6, date: "2024-11-06", totalSell: 180 },
];

const SellHistoryPage = () => {
  const [sellData, setSellData] = useState(initialSellData);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [editDate, setEditDate] = useState("");
  const [editSell, setEditSell] = useState("");

  // Filter by date range
  const handleFilter = () => {
    const filtered = sellData.filter(
      (entry) =>
        new Date(entry.date) >= new Date(startDate) &&
        new Date(entry.date) <= new Date(endDate)
    );
    setFilteredData(filtered);
  };

  const totalSell = filteredData.reduce((sum, entry) => sum + entry.totalSell, 0);

  // Enable edit mode
  const handleEdit = (id) => {
    const entry = sellData.find((item) => item.id === id);
    setEditMode(id);
    setEditDate(entry.date);
    setEditSell(entry.totalSell);
  };

  // Save changes to sell data
  const handleSaveEdit = () => {
    setSellData((prevData) =>
      prevData.map((item) =>
        item.id === editMode
          ? { ...item, date: editDate, totalSell: parseFloat(editSell) }
          : item
      )
    );
    setEditMode(null);
    setEditDate("");
    setEditSell("");
  };

  return (
    <div className="sell-history-container">
      <h1 className="sell-history-heading">Sell History</h1>

      {/* Filter Section */}
      <div className="filter-section">
        <h2>Filter Total Sell</h2>
        <input
          type="date"
          className="date-input"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          className="date-input"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button className="filter-button" onClick={handleFilter}>
          Filter
        </button>
      </div>

      {/* Filter Results */}
      {filteredData.length > 0 && (
        <div className="filter-results">
          Total Sell Between {startDate} and {endDate}: ${totalSell}
        </div>
      )}

      {/* Sell Table */}
      <table className="sell-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Total Sell</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sellData.map((entry) => (
            <tr key={entry.id}>
              <td>
                {editMode === entry.id ? (
                  <input
                    type="date"
                    value={editDate}
                    onChange={(e) => setEditDate(e.target.value)}
                    className="sell-input"
                  />
                ) : (
                  entry.date
                )}
              </td>
              <td>
                {editMode === entry.id ? (
                  <input
                    type="number"
                    value={editSell}
                    onChange={(e) => setEditSell(e.target.value)}
                    className="sell-input"
                  />
                ) : (
                  `$${entry.totalSell}`
                )}
              </td>
              <td>
                {editMode === entry.id ? (
                  <button className="filter-button" onClick={handleSaveEdit}>
                    Save
                  </button>
                ) : (
                  <button
                    className="filter-button"
                    onClick={() => handleEdit(entry.id)}
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SellHistoryPage;

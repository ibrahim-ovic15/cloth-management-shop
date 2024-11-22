import React, { useState } from "react";
import "./SellHistoryPage.css";
// import { Chart } from "chart.js/auto";
// import { Bar } from "react-chartjs-2";

const sellData = [
  { date: "2024-11-01", totalSell: 150 },
  { date: "2024-11-02", totalSell: 200 },
  { date: "2024-11-03", totalSell: 300 },
  { date: "2024-11-04", totalSell: 250 },
  { date: "2024-11-05", totalSell: 400 },
  { date: "2024-11-06", totalSell: 180 },
];

const SellHistoryPage = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = () => {
    const filtered = sellData.filter(
      (entry) =>
        new Date(entry.date) >= new Date(startDate) &&
        new Date(entry.date) <= new Date(endDate)
    );
    setFilteredData(filtered);
  };

  const totalSell = filteredData.reduce((sum, entry) => sum + entry.totalSell, 0);

//   const chartData = {
//     labels: filteredData.map((entry) => entry.date),
//     datasets: [
//       {
//         label: "Total Sell",
//         data: filteredData.map((entry) => entry.totalSell),
//         backgroundColor: "#66a6ff",
//         borderColor: "#66a6ff",
//         borderWidth: 1,
//       },
//     ],
//   };

  return (
    <div className="sell-history-container">
      <h1 className="sell-history-heading">Sell History</h1>

      <div className="filter-section">
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

      <table className="sell-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Total Sell</th>
          </tr>
        </thead>
        <tbody>
          {sellData.map((entry) => (
            <tr key={entry.date}>
              <td>{entry.date}</td>
              <td>${entry.totalSell}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* {filteredData.length > 0 && (
        <div className="chart-container">
          <h2 className="total-sell-heading">
            Total Sell Between {startDate} and {endDate}: ${totalSell}
          </h2>
          <Bar data={chartData} />
        </div>
      )} */}
    </div>
  );
};

export default SellHistoryPage;

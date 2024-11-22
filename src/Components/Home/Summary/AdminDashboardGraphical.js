import React, { useState } from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./AdminDashboardGraphical.css";

const salesData = [
  { date: "2024-11-01", total: 150 },
  { date: "2024-11-02", total: 200 },
  { date: "2024-11-03", total: 300 },
  { date: "2024-11-04", total: 250 },
  { date: "2024-11-05", total: 400 },
  { date: "2024-11-06", total: 180 },
];

const employeeData = [
  { name: "Alice", role: "Manager" },
  { name: "Bob", role: "Sales Associate" },
  { name: "Charlie", role: "Technician" },
];

const inventoryData = {
  menClothing: 120,
  womenClothing: 100,
  accessories: 80,
};

const AdminDashboardGraphical = () => {
  const [chartType, setChartType] = useState("bar");

  const salesChartData = {
    labels: salesData.map((entry) => entry.date),
    datasets: [
      {
        label: "Total Sales",
        data: salesData.map((entry) => entry.total),
        backgroundColor: "#66a6ff",
        borderColor: "#66a6ff",
        borderWidth: 1,
      },
    ],
  };

  const employeeChartData = {
    labels: employeeData.map((entry) => entry.name),
    datasets: [
      {
        label: "Employees",
        data: employeeData.map((entry) => 1),
        backgroundColor: "#ff8a00",
        borderColor: "#ff8a00",
        borderWidth: 1,
      },
    ],
  };

  const inventoryChartData = {
    labels: Object.keys(inventoryData),
    datasets: [
      {
        label: "Inventory Stock",
        data: Object.values(inventoryData),
        backgroundColor: ["#ff6347", "#ffbf00", "#8bdeff"],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  const handleChartTypeChange = (type) => {
    setChartType(type);
  };

  return (
    <div className="graphical-dashboard">
      <h1 className="dashboard-heading">Graphical Representation</h1>

      <div className="chart-buttons">
        <button
          className={`chart-btn ${chartType === "bar" ? "active" : ""}`}
          onClick={() => handleChartTypeChange("bar")}
        >
          Bar Chart
        </button>
        <button
          className={`chart-btn ${chartType === "pie" ? "active" : ""}`}
          onClick={() => handleChartTypeChange("pie")}
        >
          Pie Chart
        </button>
        <button
          className={`chart-btn ${chartType === "line" ? "active" : ""}`}
          onClick={() => handleChartTypeChange("line")}
        >
          Line Chart
        </button>
      </div>

      <div className="chart-container">
        {chartType === "bar" && <Bar data={salesChartData} />}
        {chartType === "pie" && <Pie data={inventoryChartData} />}
        {chartType === "line" && <Line data={employeeChartData} />}
      </div>
    </div>
  );
};

export default AdminDashboardGraphical;

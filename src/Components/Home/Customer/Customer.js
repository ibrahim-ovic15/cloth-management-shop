import React from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Pie } from "react-chartjs-2";
import "./CustomerPage.css";

// Sample customer data
const customerData = [
  { id: 1, name: "John Doe", number: "123-456-7890", address: "123 Elm St", firstBuy: "2024-01-10", tier: "Gold", totalAmount: 1500 },
  { id: 2, name: "Jane Smith", number: "987-654-3210", address: "456 Maple Ave", firstBuy: "2024-02-15", tier: "Silver", totalAmount: 800 },
  { id: 3, name: "Emily Johnson", number: "555-123-4567", address: "789 Pine Rd", firstBuy: "2024-03-20", tier: "Bronze", totalAmount: 400 },
  { id: 4, name: "Robert Brown", number: "222-333-4444", address: "321 Oak St", firstBuy: "2024-04-10", tier: "Gold", totalAmount: 2000 },
];

// Graphical summary data
const tierSummary = {
  labels: ["Gold", "Silver", "Bronze"],
  datasets: [
    {
      data: [2, 1, 1], // Count of customers in each tier
      backgroundColor: ["#FFD700", "#C0C0C0", "#CD7F32"],
    },
  ],
};

const revenueSummary = {
  labels: customerData.map((customer) => customer.name),
  datasets: [
    {
      label: "Total Amount Bought",
      data: customerData.map((customer) => customer.totalAmount),
      backgroundColor: ["#66a6ff", "#ff8a00", "#8bdeff", "#ff6347"],
    },
  ],
};

const columns = [
  { field: "name", headerName: "Customer Name", flex: 1 },
  { field: "number", headerName: "Number", flex: 1 },
  { field: "address", headerName: "Address", flex: 1 },
  { field: "firstBuy", headerName: "First Buy", flex: 1 },
  { field: "tier", headerName: "Customer Tier", flex: 1 },
  { field: "totalAmount", headerName: "Total Amount Bought", flex: 1 },
];

const CustomerPage = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box className="customer-page">
      <h1 className="page-title">Customer Management</h1>
      <Tabs value={tabValue} onChange={handleTabChange} centered>
        <Tab label="Customer Data" />
        <Tab label="Summary" />
      </Tabs>

      {tabValue === 0 && (
        <Box className="data-grid-container">
          <DataGrid
            rows={customerData}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            style={{ height: 400, width: "100%", backgroundColor: "white" }}
          />
        </Box>
      )}

      {tabValue === 1 && (
        <Box className="summary-container">
          <h2 className="summary-title">Customer Summary</h2>
          <div className="chart-container">
            <div className="chart">
              <h3>Customer Tiers</h3>
              <Pie data={tierSummary} />
            </div>
            <div className="chart">
              <h3>Total Revenue per Customer</h3>
              <Pie data={revenueSummary} />
            </div>
          </div>
        </Box>
      )}
    </Box>
  );
};

export default CustomerPage;

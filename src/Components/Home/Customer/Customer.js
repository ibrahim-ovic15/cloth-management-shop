import React, { useState } from "react";
import "./CustomerPage.css";

const customers = [
  {
    id: 1,
    name: "Alice Johnson",
    number: "123-456-7890",
    address: "123 Elm Street",
    firstBuy: "2023-01-15",
    tier: "Gold",
    totalAmount: "$1500",
  },
  {
    id: 2,
    name: "Bob Smith",
    number: "987-654-3210",
    address: "456 Maple Avenue",
    firstBuy: "2023-05-20",
    tier: "Silver",
    totalAmount: "$800",
  },
  {
    id: 3,
    name: "Catherine Green",
    number: "456-789-0123",
    address: "789 Oak Lane",
    firstBuy: "2024-03-10",
    tier: "Platinum",
    totalAmount: "$2500",
  },
  {
    id: 4,
    name: "David Brown",
    number: "321-654-0987",
    address: "321 Pine Road",
    firstBuy: "2022-11-05",
    tier: "Bronze",
    totalAmount: "$400",
  },
];

const CustomerPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="customer-page">
      <h1 className="customer-heading">Customer Details</h1>
      <input
        type="text"
        placeholder="Search Customer by Name..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table className="customer-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Address</th>
            <th>First Buy</th>
            <th>Customer Tier</th>
            <th>Total Amount Bought</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.number}</td>
              <td>{customer.address}</td>
              <td>{customer.firstBuy}</td>
              <td>{customer.tier}</td>
              <td>{customer.totalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerPage;

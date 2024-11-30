import React, { useState } from "react";
import "./EmployeePage.css";

const initialEmployees = [
  {
    id: 1,
    name: "John Doe",
    number: "123-456-7890",
    address: "123 Main St, Cityville",
    joinDate: "2022-01-15",
    absence: "2 days",
    salary: "$50,000",
  },
  {
    id: 2,
    name: "Jane Smith",
    number: "987-654-3210",
    address: "456 Elm St, Townsville",
    joinDate: "2023-03-10",
    absence: "0 days",
    salary: "$55,000",
  },
];

const EmployeePage = () => {
  const [employees, setEmployees] = useState(initialEmployees);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleBackToList = () => {
    setSelectedEmployee(null);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: 'url("/login.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="employee-container">
        {!selectedEmployee ? (
          <>
            <h1 className="employee-heading">Employee List</h1>
            <input
              type="text"
              className="search-input"
              placeholder="Search employees..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="employee-list">
              {filteredEmployees.map((employee) => (
                <div
                  key={employee.id}
                  className="employee-name"
                  onClick={() => handleEmployeeClick(employee)}
                >
                  {employee.name}
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="employee-details">
            <button
              className="back-button"
              onClick={handleBackToList}
              aria-label="Back to Employee List"
            >
              Back to List
            </button>
            <h2 className="employee-detail-name">{selectedEmployee.name}</h2>
            <p>
              <strong>Phone Number:</strong> {selectedEmployee.number}
            </p>
            <p>
              <strong>Address:</strong> {selectedEmployee.address}
            </p>
            <p>
              <strong>Join Date:</strong> {selectedEmployee.joinDate}
            </p>
            <p>
              <strong>Absence:</strong> {selectedEmployee.absence}
            </p>
            <p>
              <strong>Salary:</strong> {selectedEmployee.salary}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeePage;

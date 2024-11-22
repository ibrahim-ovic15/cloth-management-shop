import React, { useState } from "react";
import "./EmployeePage.css";

const employees = [
  {
    id: 1,
    name: "John Doe",
    photo: "/images/john.jpg", // Replace with actual image paths
    number: "123-456-7890",
    address: "123 Main St, Cityville",
    joinDate: "2022-01-15",
    absence: "2 days",
    salary: "$50,000",
  },
  {
    id: 2,
    name: "Jane Smith",
    photo: "/images/jane.jpg",
    number: "987-654-3210",
    address: "456 Elm St, Townsville",
    joinDate: "2023-03-10",
    absence: "0 days",
    salary: "$55,000",
  },
  // Add more employee objects here
];

const EmployeePage = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleBackToList = () => {
    setSelectedEmployee(null);
  };

  return (
    <div className="employee-container">
      {/* If no employee is selected, show the list */}
      {!selectedEmployee ? (
        <>
          <h1 className="employee-heading">Employee List</h1>
          <div className="employee-grid">
            {employees.map((employee) => (
              <div
                key={employee.id}
                className="employee-card"
                onClick={() => handleEmployeeClick(employee)}
              >
                <img
                  src={employee.photo}
                  alt={employee.name}
                  className="employee-photo"
                />
                <h2 className="employee-name">{employee.name}</h2>
              </div>
            ))}
          </div>
        </>
      ) : (
        /* Show the selected employee's details */
        <div className="employee-details">
          <button className="back-button" onClick={handleBackToList}>
            Back to List
          </button>
          <img
            src={selectedEmployee.photo}
            alt={selectedEmployee.name}
            className="employee-detail-photo"
          />
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
  );
};

export default EmployeePage;

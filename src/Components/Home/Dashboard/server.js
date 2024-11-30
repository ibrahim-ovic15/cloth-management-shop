const express = require('express');
const mysql = require('mysql2');
const app = express();

// MySQL Database Connection Configuration
const db = mysql.createConnection({
  host: 'localhost',    
  user: 'root',     
  password: 'Ibrahimcsecu@15',  
  database: 'clothshopdb', 
  port: 3306
});

// Connect to MySQL Database
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to the MySQL database!');
  }
});

// API Route to Fetch Data from Products Table
app.get('/products', (req, res) => {
    console.log('Fetching products...');
  const query = 'SELECT * FROM products';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Failed to fetch data');
    } else {
      res.json(results); // Return the data as JSON
    }
  });
});

// Start the Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // allows parsing of JSON body in POST requests

// MySQL Connection Pool Setup
const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  port: process.env.DB_PORT || 3306,
  database: process.env.DB_NAME || undefined,
  ssl: process.env.DB_SSL === 'true' ? {
    rejectUnauthorized: true
  } : undefined,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
  // Connection pools automatically reconnect dropped idle connections, which is required for Serverless Functions!
});

// Connect to Database and Auto-Setup
db.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err.message);
    console.log('Are you sure the Database is reachable?');
    return;
  }
  
  console.log('Connected to MySQL Pool successfully!');

  // 1. Automagically create the database if it doesn't exist yet!
  connection.query('CREATE DATABASE IF NOT EXISTS ca_client_db', (err) => {
    if (err) { connection.release(); return; }
    
    // 2. Switch to use the database we just made or found
    connection.query('USE ca_client_db', (err) => {
      if (err) { connection.release(); return; }

      // 3. Automagically create the contacts table inside it
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS contacts (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            service VARCHAR(255),
            message TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `;
      connection.query(createTableQuery, (err) => {
        connection.release(); // release it back to the pool
        if (err) throw err;
        console.log('✅ Database and tables are perfectly verified for production!');
      });
    });
  });
});

// Contact Route Endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, service, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required fields.' });
  }

  const query = 'INSERT INTO contacts (name, email, service, message) VALUES (?, ?, ?, ?)';
  
  db.query(query, [name, email, service, message], (err, result) => {
    if (err) {
      console.error('Failed to insert contact form data:', err);
      return res.status(500).json({ error: 'Database error while saving message. Please try again later.' });
    }
    
    console.log('New message received & saved from:', name);
    res.status(201).json({ message: 'Message sent successfully!', id: result.insertId });
  });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend Server running on port ${PORT}`);
});

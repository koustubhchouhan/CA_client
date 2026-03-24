import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // allows parsing of JSON body in POST requests

// MySQL Connection Pool Setup (Crucial for Vercel Serverless Reliability)
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
});

const activeDbName = process.env.DB_NAME || 'ca_client_db';

// Connect to Database and Auto-Setup via a connection from the pool
db.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to MySQL database pool:', err.message);
    return;
  }
  console.log('Connected to MySQL Pool successfully!');

  // 1. Automagically create the database if it doesn't exist yet!
  connection.query(`CREATE DATABASE IF NOT EXISTS \`${activeDbName}\``, (err) => {
    if (err && err.code !== 'ER_DBACCESS_DENIED_ERROR' && err.code !== 'ER_ACCESS_DENIED_ERROR') {
         console.warn('DB Setup Warning:', err.message);
    }
    
    // 2. Automagically create the contacts table directly indicating the DB
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS \`${activeDbName}\`.contacts (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          service VARCHAR(255),
          message TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    connection.query(createTableQuery, (err) => {
      if (err) {
          console.error('FATAL: Could not create table:', err.message);
      } else {
          console.log(`✅ Database ${activeDbName} and contacts table validated!`);
      }
      connection.release(); // ALWAYS release the connection back to the pool in serverless
    });
  });
});

// Contact Route Endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, service, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required fields.' });
  }
  
  // Using template literal to explicitly target the database table to fix Vercel "No DB Selected" async issues
  const query = `INSERT INTO \`${activeDbName}\`.contacts (name, email, service, message) VALUES (?, ?, ?, ?)`;
  
  // The pool automatically grabs a free connection, executes, and releases it!
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

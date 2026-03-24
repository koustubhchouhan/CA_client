import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // allows parsing of JSON body in POST requests

// MySQL Connection Setup
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  port: process.env.DB_PORT || 3306,
  database: process.env.DB_NAME || undefined,
  ssl: process.env.DB_SSL === 'true' ? {
    rejectUnauthorized: true
  } : undefined
  // Using environment variables explicitly keeps credentials safe from GitHub!
});

// Connect to Database and Auto-Setup
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err.message);
    console.log('Are you sure XAMPP Apache & MySQL are running?');
    return;
  }
  
  console.log('Connected to MySQL Local Server!');

  // Detect active database from environment variable
  const activeDbName = process.env.DB_NAME || 'ca_client_db';

  // 1. Automagically create the database if it doesn't exist yet!
  db.query(`CREATE DATABASE IF NOT EXISTS \`${activeDbName}\``, (err) => {
    // Gracefully ignore creation errors on Serverless databases (like TiDB) 
    // that don't allow users to run CREATE DATABASE manually.
    if (err && err.code !== 'ER_DBACCESS_DENIED_ERROR' && err.code !== 'ER_ACCESS_DENIED_ERROR') {
         console.warn('DB Setup Warning:', err.message);
    }
    
    // 2. Switch to use the configured database
    db.query(`USE \`${activeDbName}\``, (err) => {
      if (err) {
          console.error(`FATAL: Could not select database '${activeDbName}'! Error:`, err.message);
          return;
      }

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
      db.query(createTableQuery, (err) => {
        if (err) {
            console.error('FATAL: Could not create table:', err.message);
            return;
        }
        console.log(`✅ Database ${activeDbName} and contacts table are setup and ready!`);
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

import mysql from 'mysql2';

const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  port: process.env.DB_PORT || 3306,
  database: process.env.DB_NAME || undefined,
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: true } : undefined,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const activeDbName = process.env.DB_NAME || 'ca_client_db';
const query = `INSERT INTO \`${activeDbName}\`.contacts (name, email, service, message) VALUES (?, ?, ?, ?)`;

console.log('Testing connection to:', process.env.DB_HOST, 'Database:', activeDbName);

db.query(query, ['Bot Test', 'bot@test.com', 'Testing', 'Testing connection'], (err, result) => {
  if (err) {
    console.error('❌ SQL ERROR DETECTED:');
    console.error(err);
  } else {
    console.log('✅ SUCCESS! Result:', result);
  }
  process.exit();
});

import 'dotenv/config';
import mysql from 'mysql2/promise';

async function initializeDatabase() {
  let connection;
  
  try {
   
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    });

    console.log('📡 Connected to MySQL server');

    // Create database if it doesn't exist
    await connection.query('CREATE DATABASE IF NOT EXISTS sql12794454');
    console.log('✅ Database "sql12794454" created or already exists');

    // Use the database
    await connection.query('USE sql12794454');
    console.log('🎯 Using database "sql12794454"');

    // Create schools table if it doesn't exist
    const createSchoolsTable = `
      CREATE TABLE IF NOT EXISTS schools (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        latitude FLOAT NOT NULL,
        longitude FLOAT NOT NULL
      )
    `;

    await connection.query(createSchoolsTable);
    console.log('✅ Table "schools" created or already exists');

    console.log('🎉 Database initialization completed successfully!');

  } catch (error) {
    console.error('❌ Error initializing database:', error.message);
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
      console.log('🔌 Database connection closed');
    }
  }
}


initializeDatabase();


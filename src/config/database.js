const mysql = require("mysql2");

const dbPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

dbPool.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
  } else {
    console.log("Database connected as id " + connection.threadId);
    connection.release();
  }
});

module.exports = dbPool.promise();

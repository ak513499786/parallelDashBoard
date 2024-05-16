const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "parallel_dashboard", 
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection error:", err.message);
    process.exit(1);
  }
  console.log("Database Connected");
  connection.release();
});

module.exports = pool;

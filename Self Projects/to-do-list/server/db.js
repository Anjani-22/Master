const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  port: process.env.DBPORT,
  host: process.env.HOST,
  database: "todoapp",
});

pool.on("error", (err) => {
  if (err) console.error("Unexpected error on idle client", err);
  else {
    console.log("database successs");
  }

  process.exit(-1);
});

module.exports = pool;

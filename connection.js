const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "digiDatabase",
  password: "postgres",
  port: 5432,
  idleTimeoutMillis: 200,
});

// async function check() {
//   try {
//     const data = await pool.query("select now()");
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// check();

module.exports = pool;

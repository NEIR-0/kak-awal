const fs = require("fs");
const pool = require("./connection");
const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"))
  .map((el) => {
    const { name, img, level } = el;
    return `('${name}', '${img}', '${level}')`;
  })
  .join(", \n");
// console.log(data);
const queryInsert = `INSERT INTO "Digimons" ("name", "img", "level")
values ${data} returning *`;

async function insert() {
  try {
    const data = await pool.query(queryInsert);
    console.log(data.rows);
  } catch (error) {
    console.log(error);
  }
}

insert();

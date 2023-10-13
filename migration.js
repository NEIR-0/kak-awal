const pool = require("./connection");

const dropQuery = `drop table if exists "Digimons"`;

const createQuery = `create table if not exists "Digimons"(
  "id" serial primary key,
  "name" varchar (25) not null,
  "img" varchar (255) not null,
  "level" varchar (50) not null
)`;

async function doQuery() {
  try {
    const drop = await pool.query(dropQuery);
    if (drop) console.log(`drop table success`);
    const create = await pool.query(createQuery);
    if (create) console.log(`create table success`);
  } catch (error) {
    console.log(error);
  }
}

doQuery();

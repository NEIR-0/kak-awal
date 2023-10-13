const Digimon = require("./class");
const pool = require("../connection");

class Model {
  static async getAllData() {
    try {
      const query = `SELECT * from "Digimons"`;
      const data = await pool.query(query);
      //   console.log(data.rows);
      const instanceData = data.rows.map((el) => {
        const { id, name, img, level } = el;
        return new Digimon(id, name, img, level);
      });
      return instanceData;
    } catch (error) {
      throw error;
    }
  }

  static async insertDigimon(name, img, level) {
    try {
      const query = `insert into "Digimons" ("name", "img", "level")
        values ('${name}', '${img}', '${level}')`;
      const data = await pool.query(query);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Model;

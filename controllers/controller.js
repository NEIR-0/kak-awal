const Model = require("../models/model");

class Controller {
  static async getAllDigimon(req, res) {
    try {
      const data = await Model.getAllData();
      const component = "<p>hello world</p>";
      res.render("index", {
        title: "Welcome to Digidatabase",
        data: data,
        component: component,
      });
    } catch (error) {
      res.send(error);
    }
  }
  static async showForm(req, res) {
    res.render("addForm", { title: "Add Digimon" });
  }

  static async postForm(req, res) {
    try {
      const { name, img, level } = req.body;
      const data = await Model.insertDigimon(name, img, level);
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Controller;

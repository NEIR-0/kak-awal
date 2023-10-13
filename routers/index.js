const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller");
const level = require("./level");
// getAll Data
router.get("/", Controller.getAllDigimon);

// showForm
router.get("/addDigimon", Controller.showForm);
router.post("/addDigimon", Controller.postForm);
router.use("/level", level);
router.use("/digimon", require("./digimon"));

module.exports = router;

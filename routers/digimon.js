const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller");

// getAll Data
router.get("/", Controller.getAllDigimon);

// showForm
router.get("/addDigimon", Controller.showForm);
router.post("/addDigimon", Controller.postForm);

module.exports = router;

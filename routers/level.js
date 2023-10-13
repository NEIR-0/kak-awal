const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller");

// getAll Data
router.get("/", (req, res) => {
  res.send("ini masuk ke level router");
});

// showForm
router.get("/info", (req, res) => {
  res.send(`ini msk ke level -> info`);
});
router.post("/addDigimon", Controller.postForm);

module.exports = router;

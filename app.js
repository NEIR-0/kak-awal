const express = require("express");
const app = express();
const port = 3000;
const routers = require("./routers");

app.set("view engine", "ejs"); // ini untuk setting ejs
app.use(express.urlencoded({ extended: true })); // ini gunanya untuk menerima data dari html

app.use(routers);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

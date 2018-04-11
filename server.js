const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.set("view engine", "ejs");

app.get("/api/reports", (req, res) => {
  res.send({express: "hello"});
});

app.listen(port, () => {
  console.log(`server.js is running on port ${port}`);
});
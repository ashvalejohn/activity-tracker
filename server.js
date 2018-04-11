const express = require("express"),
      app = express(),
      mongoose = require("mongoose"),
      port = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost/activities");

// Schema Setup
const reportSchema = new mongoose.Schema({
  activity: String,
  feeling: String,
  date: {type: Date, default: Date.now },
});

const Report = mongoose.model("Report", reportSchema);

Report.create({
  activity: "🍄",
  feeling: "45",
});

app.set("view engine", "ejs");

app.get("/api/reports", (req, res) => {
  Report.find({}, (err, reports) => {
    if (err) {
      console.log(err);
    } else {
      console.log("⚡️⚡️⚡️");
      res.send({reports: reports});
    }
  });
});

app.listen(port, () => {
  console.log(`server.js is running on port ${port}`);
});
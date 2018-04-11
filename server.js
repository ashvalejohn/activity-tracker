const express = require("express"),
      app = express(),
      bodyParser = require("body-parser"),
      mongoose = require("mongoose"),
      port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost/activities");

// Schema Setup
const reportSchema = new mongoose.Schema({
  activity: String,
  feeling: String,
  date: {type: Date, default: Date.now },
});

const Report = mongoose.model("Report", reportSchema);


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

app.post("/api/reports", (req, res) => {
  // get data from form
  const activity = req.body.activity;
  const feeling = req.body.feeling;
  Report.create({
    activity: activity,
    feeling: feeling,
  }, (err, newReport) => {
    if(err){
      console.log(err);
    }else {
      console.log("You made a new report using the front end!");
      res.redirect("/report");
    }
  });
  // redirect to '/reports'
});

app.listen(port, () => {
  console.log(`server.js is running on port ${port}`);
});
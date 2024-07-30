const express = require("express");
const app = express();
const personModel = require("./models/person.model.js");

// Database._connect();
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

app.get("/", function (req, res) {
  res.send("hello Schema");
});

app.listen(3000, () => {
  console.log("app is running on port 3000");
});

const Database = require("./src/database.js");
const express = require("express");
const app = express();

// Database._connect();
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

app.get("/", function (req, res) {
  Database._connect();
  res.send("database connected succecfully");
});

app.listen(3000, () => {
  console.log("app is running on port 3000");
});

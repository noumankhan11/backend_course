const mongoose = require("mongoose");

const personSchema = mongoose.Schema({
  name: String,
  age: Number,
});

module.exports = mongoose.model("person", personSchema);

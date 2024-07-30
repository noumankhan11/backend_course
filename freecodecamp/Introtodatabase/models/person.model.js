let mongoose = require("mongoose");

const server = "127.0.0.1:27017"; //
const database = "fcc-Mail"; //

mongoose
  .connect(`mongodb://${server}/${database}`)
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.error("Database connection error", err);
  });

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  favoriteFoods: [String],
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;

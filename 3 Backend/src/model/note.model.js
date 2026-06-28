const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: String,
  description: String
});

const newModel = mongoose.model("note", noteSchema);

module.exports = newModel;
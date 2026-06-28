const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  image: String,
  discription: String
});

const notesModel = mongoose.model("reacher", notesSchema);

module.exports = notesModel;
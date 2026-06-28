const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  image: String,
  caption: String
})

const postModule = mongoose.model("post", postSchema);


module.exports = postModule;
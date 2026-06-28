const mongoose = require("mongoose");


async function connectDB() {
  await mongoose.connect("mongodb+srv://yt:Nl9ChH6085hiJVFd@complete-backend.8ztqvip.mongodb.net/halley");

  console.log("Connected to DB");
}

module.exports = connectDB;
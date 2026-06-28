const mongoose = require("mongoose");


async function connectDB() {
  await mongoose.connect("mongodb+srv://yt:3wlp4bUHVd2ey9WI@yt-complete-backend.n0v8ujr.mongodb.net/halley")

  console.log("Connect DB");
}

module.exports = connectDB;
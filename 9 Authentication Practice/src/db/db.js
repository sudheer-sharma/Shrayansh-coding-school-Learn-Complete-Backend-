const mongoose = require("mongoose");


async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Database connnect successfuly");
  } catch (err) {
    console.log("Database connnection", err);
  }
}

module.exports = connectDB;
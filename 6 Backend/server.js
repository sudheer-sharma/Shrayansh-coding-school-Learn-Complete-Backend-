require("dotenv").config();
const app = require("./src/app");
const connectDb = require("./src/db/db");

connectDb();


app.listen(4000, () => {
  console.log("servert starting port 4000")
})
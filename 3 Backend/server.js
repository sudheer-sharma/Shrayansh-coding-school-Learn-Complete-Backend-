const app = require("./src/app");
const connectDB = require("./src/db/db");

connectDB();



app.listen(4000, () => {
  console.log("server is starting port 4000");
})
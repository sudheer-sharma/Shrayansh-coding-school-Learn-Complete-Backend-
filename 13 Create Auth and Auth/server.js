import app from "./src/app.js";
import connectDB from "./src/config/database.js";

connectDB();



app.listen(4000, () => {
  console.log("server star port 4000");
})
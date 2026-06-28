const express = require("express");
const authRoutes = require("./routes/auth.route");
const authPost = require("./routes/posts.route");
const cookieParser = require("cookie-parser");


const app = express();
app.use(express.json());
app.use(cookieParser());



app.use("/api/auth", authRoutes);

app.use("/api/post", authPost);




module.exports = app;
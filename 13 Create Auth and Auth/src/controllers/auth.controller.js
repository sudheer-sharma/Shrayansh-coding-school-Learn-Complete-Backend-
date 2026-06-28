import userModel from "../models/user.module.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import config from "../config/config.js";


export async function register(req, res) {
  let { username, email, password } = req.body;

  let isAlreadyRegister = await userModel.findOne({ $or: [{ username }, { email }] });

  if (isAlreadyRegister) {
    return res.status(409).json({
      message: "Username and Email Already exists..."
    })
  }

  const hashPassword = crypto.createHash("sha256").update(password).digest("hex");

  const user = await userModel.create({
    username,
    email,
    password: hashPassword
  })

  const token = jwt.sign({ id: user.id }, config.JWT_SECRET, { expiresIn: "1d" });


  res.status(201).json({
    user: {
      username: user.username,
      email: user.email,
    },
    token
  })

}



export async function getme(req, res) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "token not found" });
  }

  const decoded = jwt.verify(token, config.JWT_SECRET);

  const user = await userModel.findById(decoded.id);

  res.status(201).json({
    message: "user fetched successfuly",
    user: {
      username: user.username,
      email: user.email
    }
  })
}
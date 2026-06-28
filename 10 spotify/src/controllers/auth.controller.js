const userModel = require("../models/user.module");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs");


async function userRegister(req, res) {
  let { username, email, password, role = "user" } = req.body;

  const isUserAllresyExists = await userModel.findOne({ $or: [{ username }, { email }] });


  if (isUserAllresyExists) {
    return res.status(409).json({
      message: "User allready exist"
    });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username, email, password: hash, role
  });

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRATE);

  res.cookie("token", token);

  res.status(201).json({
    message: "Post new Data successfuly",
    user: {
      id: user._id,
      usrname: user.username,
      email: user.email,
      role: user.role
    }
  })
}


async function userLogin(req, res) {
  const { username, email, password } = req.body;

  const user = await userModel.findOne({ $or: [{ username }, { email }] })

  if (!user) {
    return res.status(200).json({
      message: "invalide creadantial",
    })
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return res.status(200).json({
      message: "invalide Password!",
    })
  }

  const token = jwt.sign(
    {
      id: user._id,
      role: user.role
    }, process.env.JWT_SECRATE);

  res.cookie("token", token);

  res.status(200).json({
    message: "user Login successfuly",
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
    }
  })

}


async function logoutUser(req, res) {
  res.clearCookie("token");

  res.status(200).json({
    message: "user logOut successfuly",
  })
}

module.exports = { userRegister, userLogin, logoutUser };
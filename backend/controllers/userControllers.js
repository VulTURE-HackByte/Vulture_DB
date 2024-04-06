const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc register user
// @route POST /api/user/
// @access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // CHECK ALL FIELDS
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please add all fields!");
  }

  // CHECK IF ALREADY REGISTERED
  const prevUser = await User.findOne({ email });
  if (prevUser) {
    res.status(400);
    throw new Error("user already exists!");
  }

  //   HASH PASSWORD
  let user = await new User({ name, email, password });
  user = await user.save();

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("invalid user data");
  }
});

// @desc login user
// @route POST /api/user/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials!");
  }
});

// Generate jwt token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
};

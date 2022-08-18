import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/jsonwebtokens.js";

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user && (await user.password) === password) {
    console.log('works');
    res.json({
      _id: user._id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      isBuyer: user.buyer,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { first_name, last_name, email, password, buyer } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({
    first_name,
    last_name,
    email,
    password,
    buyer,
  });
  if (user) {
    res.status(200).json({
      _id: user._id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      isBuyer: user.buyer,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user_id,
      first_name: user.first_name,
      email: user.email,
      isBuyer: user.buyer,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export { authUser, getUserProfile, registerUser };

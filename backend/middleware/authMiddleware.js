import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

const secure = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startswith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-ppassword");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("token failed");
    }
  }
  if (!token) {
    res.status(401)
    res.status(401)
    throw new Error("token not found");
  }
});

export { secure };

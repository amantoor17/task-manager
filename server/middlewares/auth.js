// middleware/auth.js

const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req, res, next) => {
  try {
    // Extract JWT token from body, cookie, or Authorization header
    const token =
      req.body.token ||
      req.cookies.token ||
      (req.header("Authorization") &&
        req.header("Authorization").replace("Bearer ", ""));

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }

    try {
      // Verify the token
      const payload = jwt.verify(token, process.env.JWT_SECRET);

      // Attach userId to req.user (only need this for task ownership)
      req.user = { id: payload._id };

      next();
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Invalid or expired token",
      });
    }
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Something went wrong while verifying token",
    });
  }
};

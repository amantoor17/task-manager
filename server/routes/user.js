const express = require("express");
const router = express.Router();

const { 
  login, 
  signup, 
  getAllUsers, 
  getUser, 
  deleteUser, 
  updateUser 
} = require("../controllers/Auth");

const { auth } = require("../middlewares/auth");

// ---------------- AUTH ROUTES ----------------
router.post("/signup", signup);
router.post("/login", login);

// ---------------- USER ROUTES ----------------
// // All below routes should be protected with auth middleware
// router.get("/users", auth, getAllUsers);        // Get all users (for now)
// router.get("/users/:id", auth, getUser);        // Get logged-in user (by ID)
// router.put("/users/:id", auth, updateUser);     // Update user (name/email)
// router.delete("/users/:id", auth, deleteUser);  // Delete user by ID

// // ---------------- TEST ROUTE ----------------
// router.get("/test", auth, (req, res) => {
//   res.json({
//     success: true,
//     message: "Welcome to the protected TEST route.",
//   });
// });

module.exports = router;

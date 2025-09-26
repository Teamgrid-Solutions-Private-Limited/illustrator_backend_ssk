const express = require("express");
const AuthController = require("../controllers/authController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", AuthController.registerUser);
router.post("/login", AuthController.loginUser);
router.get("/users", protect, AuthController.getAllUsers);


module.exports = router;

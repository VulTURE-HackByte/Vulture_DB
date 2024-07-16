const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const{loginUser, registerUser} = require("../controllers/userControllers");

router.route("/login").post(loginUser)
router.route("/register").post(registerUser)

module.exports = router;

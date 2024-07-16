const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const{getGenerateText, getHistory} = require("../controllers/miscelleanousControllers");

router.route("/generate").get(protect, getGenerateText)
router.route("/history").get(protect, getHistory)

module.exports = router;

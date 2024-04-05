const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const{getScans} = require("../controllers/scanController");

router.route("/spyder").get(getSypderScans)

module.exports = router;

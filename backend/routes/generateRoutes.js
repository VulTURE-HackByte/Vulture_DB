const express = require("express");
const router = express.Router();
//const { protect } = require("../middleware/authMiddleware");
const{getGenerateText} = require("../controllers/generateControllers");

router.route("/").get(getGenerateText)

module.exports = router;

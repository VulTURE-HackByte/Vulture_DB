const express = require("express");
const router = express.Router();
//const { protect } = require("../middleware/authMiddleware");
const{getSpyderScans, getPassiveScans} = require("../controllers/scanControllers");

router.route("/spyder").get(getSpyderScans)
router.route("/passive").get(getPassiveScans)

module.exports = router;

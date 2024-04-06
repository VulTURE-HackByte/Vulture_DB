const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const{getSpyderScans, getPassiveScans} = require("../controllers/scanControllers");

router.route("/spyder").post( protect, getSpyderScans)
router.route("/passive").post(protect, getPassiveScans)

module.exports = router;

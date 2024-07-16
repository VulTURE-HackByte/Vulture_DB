const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const{getSpiderScans, getPassiveScans} = require("../controllers/scanControllers");

router.route("/spider").post( protect, getSpiderScans)
router.route("/passive").post(protect, getPassiveScans)

module.exports = router;
 
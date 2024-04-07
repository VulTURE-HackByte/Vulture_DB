const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const Scans = require("../models/scanModel");
const User = require("../models/userModel");
const axios = require("axios");

// get sypder scan
// route /api/scan/spyder
// public
const getSpiderScans = asyncHandler(async (req, res) => {
  let targetBody = req.body;
  const zapSpiderURL = `3.110.105.48/spider?target=${targetBody.target}`; // use zap spyder urls

  axios
    .get(zapSpiderURL)
    .then(async (response) => {
      const scanSpiderRes = response.data;

      const spider = await Scans.create({
        user: req.user._id,
        spiderRes: scanSpiderRes.result,
      });

      res.json(spider).status(200);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});

// get passive scan
// route /api/scan/passive
// public
const getPassiveScans = asyncHandler(async (req, res) => {
  let targetBody = req.body.target;
  const zapPassiveURL = `h3.110.105.48/passive?target=${targetBody}/`; // use zap passive url

  axios
    .get(zapPassiveURL)
    .then(async (response) => {
      const scanPassiveRes = response.data;

      const passive = await Scans.create({
        user: req.user._id,
        passiveRes: scanPassiveRes,
      });

      res.json(passive).status(200);

    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});

module.exports={getSpiderScans, getPassiveScans}
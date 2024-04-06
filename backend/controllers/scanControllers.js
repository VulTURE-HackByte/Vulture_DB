const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const Scans = require("../models/scanModel");
const User = require("../models/userModel");
const axios = require("axios");

// get sypder scan
// route /api/scan/spyder
// public
const getSpiderScans = asyncHandler(async (req, res) => {
  const zapSpiderURL = ""; // use zap spyder urls

  axios
    .get(zapSpiderURL)
    .then(async (response) => {
      const scanSpiderRes = response.data;

      const spyder = await Scans.create({
        user: req.user._id,
        spyderRes: scanSpiderRes.result,
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
  const zapPassiveURL = ""; // use zap passive url

  axios
    .get(zapPassiveURL)
    .then(async (response) => {
      const scanPassiveRes = [];
    
      const filterResponse = () => {
        response.data.alerts.forEach((element) => {
          let obj = {
            name: element.name,
            risk: element.risk,
            confidence: element.confidence,
          };

          scanPassiveRes.push(obj);
        });

        return scanPassiveRes;
      };

      filterResponse();

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
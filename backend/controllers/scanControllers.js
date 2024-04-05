const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const Scans = require("../models/scanModel");
const User = require("../models/userModel");
const axios = require("axios");

// get sypder scan
// route /api/scan/spyder
// public
const getSpyderScans = asyncHandler(async (req, res) => {
  const zapSpyderURL = ""; // use zap url

  axios
    .get(zapSpyderURL)
    .then((response) => {
      const scanSypderRes = response.data;
      console.log("Data:", response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});




// get passive scan
// route /api/scan/passive
// public
const getPassiveScans = asyncHandler(async (req, res) => {
    const zapPassiveURL = ""; // use zap url
  
    axios
      .get(zapPassiveURL)
      .then((response) => {
        const scanPassiveRes = response.data;
        console.log("Data:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });
  
const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const Scans = require("../models/scanModel");
const User = require("../models/userModel");
const axios = require("axios");
const { GoogleGenerativeAI } = require("@google/generative-ai");

// get user history
// route /api/history/
// private

const getHistory = asyncHandler(async (req, res) => {
  const scans=await Scans.find({user:req.user._id});
  res.json(scans).status(200);
});

// get generate text
// route /api/generate/
// public
const getGenerateText = asyncHandler(async (req, res) => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = "Write a story about a magic backpack.";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  res.json(text).status(200);
});

module.exports = { getGenerateText, getHistory };

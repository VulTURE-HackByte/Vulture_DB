const mongoose = require("mongoose");

const passiveScanSubSchema = mongoose.Schema({
    name: String,
    risk: String,
    confidence: String,
  });
const scanSchema = mongoose.Schema(
  {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    spyderRes: {
      type: [String],
    },
    passiveRes: {
        type: [passiveScanSubSchema],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Scan", scanSchema); 

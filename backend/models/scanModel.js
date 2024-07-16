const mongoose = require("mongoose");

const passiveScanSubSchema = mongoose.Schema({
    alert: String,
    confidence: String,
    risk: String,
  });
const scanSchema = mongoose.Schema(
  {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    spiderRes: {
      type: [String],
      default: null,
    },
    passiveRes: {
        type: [passiveScanSubSchema],
        default: null,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Scan", scanSchema); 

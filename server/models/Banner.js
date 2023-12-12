const mongoose = require("mongoose");

const BannerSchema = new mongoose.Schema({
  bannerUrl: { type: String, required: true },
  description: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  topBanner: { type: Boolean, default: false },
});

module.exports = mongoose.model("Banner", BannerSchema);

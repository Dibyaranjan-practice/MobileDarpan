const mongoose = require("mongoose");

const BannerSchema = new mongoose.Schema({
  bannerUrl: { type: String, required: true },
  MobBannerUrl: { type: String, required: true },
  description: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  sequence: { type: String },
});

module.exports = mongoose.model("Banner", BannerSchema);
//1 2 3 4 5
1;

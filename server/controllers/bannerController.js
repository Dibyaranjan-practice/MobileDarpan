const BannerModel = require("../models/Banner");

exports.getAddBanner = (req, res) => {
  res.render("Banners/addBanner");
};

exports.postAddBanner = (req, res) => {
  BannerModel.create({ ...req.body, bannerUrl: req.file.filename })
    .then(() => console.log("success"))
    .catch((error) => console.log("Failed to save", error));
  console.log(req.body);
  console.log(req.file.filename);
  res.render("Banners/addBanner");
};

exports.getFindAllBanners = async (req, res) => {
  const banners = await BannerModel.find({}).sort({ createdAt: -1 }).limit(5);
  res.json(banners);
};

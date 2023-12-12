const BannerModel = require("../models/Banner");

exports.getAddBanner = (req, res) => {
  res.render("Banners/addBanner");
};

exports.postAddBanner = async (req, res) => {
  req.body.topBanner = req.body.topBanner == "on";
  if (req.body.topBanner) {
    await BannerModel.findOneAndUpdate(
      { topBanner: req.body.topBanner },
      { ...req.body, bannerUrl: req.file.filename }
    );
  } else {
    await BannerModel.create({ ...req.body, bannerUrl: req.file.filename })
      .then(() => console.log("success"))
      .catch((error) => console.log("Failed to save", error));
  }
  res.render("Banners/addBanner");
};

exports.getFindAllBanners = async (req, res) => {
  const banners = await BannerModel.find({}).sort({ createdAt: -1 }).limit(5);
  res.json(banners);
};

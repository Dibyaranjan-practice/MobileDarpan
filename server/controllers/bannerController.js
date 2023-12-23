const BannerModel = require("../models/Banner");

exports.getAddBanner = (req, res) => {
  res.render("Banners/addBanner");
};

exports.postAddBanner = async (req, res) => {
  const sequence = req.body.sequence;
  const banner = await BannerModel.findOne({ sequence });
  if (banner) {
    await BannerModel.findOneAndUpdate(
      { sequence },
      {
        ...req.body,
        bannerUrl: req.files["bannerUrl"][0].filename,
        MobBannerUrl: req.files["MobBannerUrl"][0].filename,
      }
    );
  } else {
    await BannerModel.create({
      ...req.body,
      bannerUrl: req.files["bannerUrl"][0].filename,
      MobBannerUrl: req.files["MobBannerUrl"][0].filename,
    })
      .then(() => console.log("success"))
      .catch((error) => console.log("Failed to save", error.message));
  }
  res.render("Banners/addBanner");
};

exports.getFindAllBanners = async (req, res) => {
  const banners = await BannerModel.find({});
  res.json(banners);
};

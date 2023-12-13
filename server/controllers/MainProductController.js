const MainProductModel = require("./../models/MainProduct");

exports.getAddMainProduct = (req, res) => {
  res.render("MainProducts/addMainProduct");
};

exports.postAddMainProduct = (req, res) => {
  req.body.imageUrl = req.file.filename;
  return MainProductModel.create({ ...req.body })
    .then(() => {
      res.render("MainProducts/addMainProduct");
    })
    .catch((error) => res.json("error occured" + error.message));
};

const BrandModel = require("./../models/Brand");

exports.getAddBrand = (req, res) => {
  return res.render("Brand/addBrand");
};

exports.postAddBrand = (req, res) => {
  console.log(req.body);
  const brand = {
    name: req.body.name,
    release_year: parseInt(req.body.release),
  };
  BrandModel.create(brand)
    .then(() => res.status(200).json("Brand Added successfully"))
    .catch((error) => {
      return res.status(401).json("Failed");
    });
};

exports.getAll = (req, res) => {
  BrandModel.find({})
    .sort({ title: 1 })
    .then((result) => res.status(200).json(result))
    .catch((error) =>
      res.status(500).json({ status: "failed", msg: "some error occured" })
    );
};

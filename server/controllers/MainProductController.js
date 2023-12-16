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

exports.getFindAll = async (req, res) => {
  const products = await MainProductModel.find({});
  if (products) return res.status(200).json(products);
  res.status(500).json({ status: "failed", msg: "something went wrong" });
};

exports.getFindByCategory = (req, res) => {
  const category = req.params.type;
  MainProductModel.find({ category })
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((error) => res.status(500).json({ msg: "some error occured" }));
};

exports.getFindById = (req, res) => {
  const id = req.params.id;
  MainProductModel.findById(id)
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((error) => res.status(500).json({ msg: "some error occured" }));
};

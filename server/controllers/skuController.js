const SKUModel = require("./../models/Sku");
const ProductModel = require("../models/Product");

exports.getAdd = (req, res) => {
  return res.render("Sku/addSku");
};
exports.postAdd = async (req, res) => {
  const ProductId = await ProductModel.findOne({
    title: req.body.product,
  }).select("_id");
  delete req.body.product;
  SKUModel.create({ fields: { ...req.body }, product: ProductId })
    .then(() => res.status(201).json("created successfully"))
    .catch((error) => {
      console.log(error.message);
      res.status(500).json("failed");
    });
};

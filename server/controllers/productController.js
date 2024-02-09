const ProductModel = require("./../models/Product");
const BrandModel = require("./../models/Brand");
const CategoryModel = require("./../models/Category");

exports.getAddProduct = (req, res) => {
  return res.render("Product/addProduct");
};

exports.postAddProduct = async (req, res) => {
  req.body.brand = await BrandModel.findOne({ name: req.body.brand }).select(
    "_id"
  );
  req.body.category = await CategoryModel.findOne({
    title: req.body.category,
  }).select("_id");
  let props = { ...req.body };
  const fields = {};
  let i = 1;
  while (true) {
    let fieldName = "field" + i,
      typeName = "type" + i;
    if (props.hasOwnProperty(fieldName)) {
      fields[props[fieldName]] = props[typeName];
    } else {
      break;
    }
    i += 1;
  }
  return ProductModel.create({
    ...req.body,
    fields,
  })
    .then(() => {
      res.render("Product/addProduct");
    })
    .catch((error) => {
      console.log(error);
      return res.json("error occured" + error.message);
    });
};

exports.getAll = async (req, res) => {
  const products = await ProductModel.find({}).populate("category");
  if (products) return res.status(200).json(products);
  res.status(500).json({ status: "failed", msg: "something went wrong" });
};

exports.getFindByCategory = (req, res) => {
  const category = req.params.type;
  ProductModel.find({ category })
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((error) => res.status(500).json({ msg: "some error occured" }));
};

exports.getFindById = (req, res) => {
  const id = req.params.id;
  ProductModel.findById(id)
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((error) => res.status(500).json({ msg: "some error occured" }));
};

exports.getFindByTag = (req, res) => {
  const tag = req.params.tag;
  ProductModel.find({ tag })
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((error) => res.status(500).json({ msg: "some error occured" }));
};

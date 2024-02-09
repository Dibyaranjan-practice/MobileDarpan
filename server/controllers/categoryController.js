const CategoryModel = require("./../models/Category");

exports.getAddCategory = (req, res) => {
  res.status(200).render("Category/addCategory");
};
exports.postAddCategory = (req, res) => {
  req.body.imageUrl = req.file.filename;

  CategoryModel.create({ ...req.body, fields })
    .then(() => {
      res.status(200).render("Category/addCategory");
    })
    .catch((error) => {
      res.status(500).json({ status: "failed", msg: error.message });
    });
};
exports.getAll = (req, res) => {
  CategoryModel.find({})
    .sort({ title: 1 })
    .then((result) => res.status(200).json(result))
    .catch((error) =>
      res.status(500).json({ status: "failed", msg: "some error occured" })
    );
};

const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  brand: { type: mongoose.Types.ObjectId, require: true, ref: "Brand" },
  category: { type: String, require: true },
  title: { type: String, require: true, unique: true },
  description: { type: String, require: true },
  fields: { type: Object },
  extraCategories: [{ type: String }],
  tag: [{ type: String }],
});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;

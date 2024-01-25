const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  brand: { type: mongoose.Types.ObjectId, require: true, ref: "Brand" },
  category: { type: mongoose.Types.ObjectId, require: true, ref: "Category" },
  title: { type: String, require: true, unique: true },
  description: { type: String, require: true },
});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;

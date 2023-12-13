const mongoose = require("mongoose");

const MainProduct = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
});

module.exports = mongoose.model("MainProduct", MainProduct);

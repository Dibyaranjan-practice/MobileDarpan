const mongoose = require("mongoose");

const SKUSchema = new mongoose.Schema({
  product: { type: mongoose.Types.ObjectId, require: true, ref: "Product" },
  fields: { type: Object },
});

const SKUModel = mongoose.model("SKU", SKUSchema);

module.exports = SKUModel;

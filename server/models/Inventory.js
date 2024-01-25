const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema({
  sku: { type: mongoose.Schema.ObjectId, require: true, ref: "SKU" },
  stock: { type: Number, require: true, min: 0 },
  discount: { type: Number, default: 0 },
});

const InventoryModel = mongoose.model("Inventory", InventorySchema);

module.exports = InventoryModel;

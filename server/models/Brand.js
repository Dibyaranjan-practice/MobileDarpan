const mongoose = require("mongoose");

const BrandSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  release_year: { type: Number, required: true },
});

const BrandModel = mongoose.model("Brand", BrandSchema);
module.exports = BrandModel;

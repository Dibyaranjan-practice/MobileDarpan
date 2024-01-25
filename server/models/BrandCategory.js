const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  brand: { type: mongoose.Schema.ObjectId, required: true, ref: "Brand" },
  name: { type: String, required: true },
  fields: [
    {
      name: { type: String, required: true },
      type: { type: String, required: true },
    },
  ],
});

const CategoryModel = mongoose.model("BrandCategory", CategorySchema);

module.exports = CategoryModel;

const mongoose = require("mongoose");

// const CategorySchema = new mongoose.Schema({
//   imageUrl: { type: String, required: true },
//   title: { type: String, requried: true, unique: true },
// });

const CategorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, require: true },
  imageUrl: { type: String, require: true },
});

const CategoryModel = mongoose.model("Category", CategorySchema);

module.exports = CategoryModel;

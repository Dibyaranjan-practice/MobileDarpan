const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  title: { type: String, requried: true, unique: true },
});

module.exports = mongoose.model("Category", CategorySchema);

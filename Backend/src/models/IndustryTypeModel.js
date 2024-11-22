// type of industry

const mongoose = require("mongoose");

const industryTypeSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
});
module.exports = mongoose.model("IndustryType", industryTypeSchema);

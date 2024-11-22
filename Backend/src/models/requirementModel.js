// // type ,waste description , quantity, location , contact number

const mongoose = require("mongoose");

const requirementSchema = new mongoose.Schema({
  type: String,
  wasteDescription: String,
  quantity: Number,
  location: String,
  contactNumber: Number,
});
module.exports = mongoose.model("Requirement", requirementSchema);

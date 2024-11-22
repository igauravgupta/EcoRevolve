// type ,waste description , quantity, location , contact number, image
const mongoose = require("mongoose");

const sellWasteSchema = new mongoose.Schema({
  type: String,
  wasteDescription: String,
  quantity: Number,
  location: String,
  contactNumber: Number,
  image: String,
});

module.exports = mongoose.model("SellWaste", sellWasteSchema);

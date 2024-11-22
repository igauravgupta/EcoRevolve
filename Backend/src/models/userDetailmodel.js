// email, contact no, address, location, comoany anme. owner name, type of industry

const mongoose = require("mongoose");

const userDetailSchema = new mongoose.Schema({
  email: String,
  contactNumber: Number,
  address: String,
  location: String,
  companyName: String,
  ownerName: String,
  typeOfIndustry: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("UserDetail", userDetailSchema);

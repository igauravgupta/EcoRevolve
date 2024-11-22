// seller id , buyer id, price , quantity , waste description,contact number of buyer, contact number of seller, status[pending, accepted, rejected]
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  sellerId: mongoose.Schema.Types.ObjectId,
  buyerId: mongoose.Schema.Types.ObjectId,
  price: Number,
  quantity: Number,
  contactNumberBuyer: Number,
  contactNumberSeller: Number,
  status: String,
  wasteDescription: mongoose.Schema.Types.ObjectId,
});
module.exports = mongoose.model("Contact", contactSchema);

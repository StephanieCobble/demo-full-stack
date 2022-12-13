const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DestinationSchema = new Schema({
  title: String,
  location: String,
  description: String,
  imageUrl: String,
});

module.exports = mongoose.model("Destination", DestinationSchema);

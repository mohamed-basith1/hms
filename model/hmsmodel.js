const mongoose = require("mongoose");

const AddproductSchema = mongoose.Schema({
  PackageUOM: String,
  UnitUOM: String,
  PkgUOM: Number,
  IntegrationId: String,
});

module.exports = mongoose.model("addproducts", AddproductSchema);

require("../config/database")
const mongoose = require("mongoose");

const Website = mongoose.Schema({
  left : Array,
  done : Array
})
module.exports = mongoose.model("website", Website);
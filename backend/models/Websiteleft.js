require("../config/database")
const mongoose = require("mongoose");

const Website = mongoose.Schema({
name : String,
url : String,
link : String,
index : {
  default : "",
  type : String
}
})
module.exports = mongoose.model("website_left", Website);
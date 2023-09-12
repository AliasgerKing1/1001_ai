require("../config/database")
const mongoose = require("mongoose");

const Projects = mongoose.Schema({
    theme_name : String,
   step_2 : Object
})
module.exports = mongoose.model("project", Projects);
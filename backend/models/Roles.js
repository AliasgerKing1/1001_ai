require("../config/database")
const mongoose = require("mongoose");

const Roles = mongoose.Schema({
    admin : Array,
    CEO : Array, 
    CTO : Array, 
    CIO : Array, 
    head_of_product  : Array,
    product_manager : Array, 
    digital_marketer : Array,
    technical_Lead : Array,
    team_lead : Array, 
    principal_developer : Array,
    senior_frontend_developer : Array,
    senior_backend_developer : Array, 
    senior_python_developer : Array,
    junior_frontend_developer : Array, 
    junior_backend_developer : Array, 
    junior_python_developer : Array,
    intern_frontend_developer : Array,
    intern_backend_developer : Array, 
    intern_python_developer : Array,
    social_media_manager : Array,
})

module.exports = mongoose.model("role", Roles)
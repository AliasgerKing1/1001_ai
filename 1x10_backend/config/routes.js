const routes = require("express").Router();

routes.use("/api/user", require("../controller/User/UserController"));
module.exports = routes;
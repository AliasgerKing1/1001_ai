const routes = require("express").Router();

routes.use("/api/user", require("../controller/UserController"));
module.exports = routes;
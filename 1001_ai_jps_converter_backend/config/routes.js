const routes = require("express").Router();

// routes.use("/api/user", require("../controller/User/UserController"));
routes.use("/api/image", require("../controller/ImageController"));
module.exports = routes;
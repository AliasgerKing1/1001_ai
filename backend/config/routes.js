const routes = require("express").Router();

routes.use("/api/user", require("../controller/User/UserController"));
routes.use("/api/website", require("../controller/Website/WebsiteController"));
module.exports = routes;
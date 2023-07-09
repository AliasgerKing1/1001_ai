const routes = require("express").Router();

routes.use("/api/user", require("../controller/User/UserController"));
routes.use("/api/website", require("../controller/Website/WebsiteController"));
routes.use("/api/password", require("../controller/password/MemberDeleteController"));
module.exports = routes;
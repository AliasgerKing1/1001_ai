const routes = require("express").Router();

routes.use("/api/user", require("../controller/User/UserController"));
routes.use("/api/feature", require("../controller/Data/FeatureController"));
module.exports = routes;
const routes = require("express").Router();

routes.use("/api/admin", require("../controller/AdminController"));
routes.use("/api/project", require("../controller/ProjectController"));

module.exports = routes;
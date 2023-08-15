const routes = require("express").Router();

routes.use("/api/user", require("../controller/UserController"));
routes.use("/api/otp", require("../controller/OtpController"));

module.exports = routes;
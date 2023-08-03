const routes = require("express").Router();

routes.use("/api/user", require("../controller/User/UserController"));
routes.use("/api/otp", require("../controller/Otp/OtpController"));
routes.use("/api/admin", require("../controller/Admin/AdminController"));
routes.use("/api/roles", require("../controller/Roles/RolesController"));
routes.use("/api/website", require("../controller/Website/WebsiteController"));
routes.use("/api/lockscreen", require("../controller/LockScreen/LockScreenController"));
routes.use("/api/password", require("../controller/password/MemberDeleteController"));
routes.use("/api/generation", require("../controller/Generation/ImageGenerationController"));
module.exports = routes;
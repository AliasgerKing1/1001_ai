const routes = require("express").Router();

routes.use("/api/user", require("../controller/User/UserController"));
routes.use("/api/image/generate", require("../controller/ImageGeneration/ImageGenerationController"));
module.exports = routes;
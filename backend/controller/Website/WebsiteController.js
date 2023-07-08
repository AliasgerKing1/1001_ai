
const routes = require("express").Router();
const Website = require("../../models/Website");
// const readExcelFile  = require("../../functions/functions");

// readExcelFile()
routes.get("/name", async (req, res) => {
    const website = await Website.find({});
    res.send(website);

})
module.exports = routes;
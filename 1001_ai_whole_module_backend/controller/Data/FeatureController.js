const routes = require("express").Router();
const Features = require('../../models/Features');

routes.get('/list', async (req, res) => {
    let result = await Features.find({})
    res.send(result)
})

module.exports = routes;

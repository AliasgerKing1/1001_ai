require("../config/database");
const routes = require("express").Router();
const Projects = require("../models/Projects");

routes.post("/", async (req, res)=> {
    let result = await Projects.create(req.body);
    res.send({status : 200, success : true, p_id : result._id});
})
routes.put("/:id", async (req, res)=> {
    let id = req.params.id;
    req.body.step_2.p_link = `http://localhost:3000/auth/project/${id}`
    await Projects.updateMany({_id : id} ,req.body);
    res.send({status : 200, success : true});
})
module.exports = routes;
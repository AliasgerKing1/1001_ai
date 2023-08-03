const routes = require("express").Router();
const Roles = require("../../models/Roles")
routes.post("/", async (req,res)=> {
await Roles.create(req.body)
res.send({status: 200, success : true})
})
routes.get("/", async (req,res)=> {
let result = await Roles.find({})
res.send(result)
})
// routes.delete("/", async (req,res)=> {
// await Roles.delete({})
// })
routes.put("/:id", async (req,res)=> {
    let id = req.params.id
    console.log(id)
    console.log(req.body)
    return
let result = await Roles.updateMany({_id : id}, req.body)
res.send(result)
})

module.exports = routes;
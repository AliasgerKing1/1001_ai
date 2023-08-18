import axois from "axios";

let apiurl = "http://localhost:4002/api/roles/"
let postRoles = async (data) => {
return await axois.post(apiurl, data)
}
let updateRoles = async (id, data) => {
return await axois.put(`${apiurl}/${id}`, data)
}
let getRoles = async () => {
return await axois.get(apiurl)
}

export {postRoles, updateRoles, getRoles}
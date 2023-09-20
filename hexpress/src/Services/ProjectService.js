import axios from 'axios'

let apiUrl = 'http://localhost:4007/api/project/'

// let getAdmin = async (token) => {
//     return await axios.get(apiUrl, {headers : {token}});
// }
let addProject = async (data) => {
    return await axios.post(apiUrl, data);
}
let updateProject = async (id, data) => {
    return await axios.put(`${apiUrl}${id}`, data);
}

export {addProject, updateProject}
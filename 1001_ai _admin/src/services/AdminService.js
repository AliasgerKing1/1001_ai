import axios from "axios"

let apiUrl = "http://localhost:4000/api/admin/"

let loginAdmin = async (data) => {
    return await axios.post(`${apiUrl}`, data)
}
let getAdmin = async (admin_token) => {
    return await axios.get(`${apiUrl}`,  { headers: { admin_token } })
}

export {loginAdmin, getAdmin}
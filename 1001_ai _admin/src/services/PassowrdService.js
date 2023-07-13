import axios from "axios"

let apiUrl = "http://localhost:4000/api/password/"

let getCode = async (admin_token) => {
    return await axios.get(`${apiUrl}member`, { headers: { admin_token } })
}
let addMember = async (member) => {
    return await axios.post(`${apiUrl}member`, member)
}
let checkCode = async (admin_token, code) => {
    return await axios.put(`${apiUrl}checkPass`, code, { headers: { admin_token } })
}

export { getCode, checkCode, addMember }
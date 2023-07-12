import axios from "axios"

let apiUrl = "http://localhost:4000/api/password/"

let getCode = async (admin_token) => {
    return await axios.get(`${apiUrl}member`, { headers: { admin_token } })
}

export { getCode }
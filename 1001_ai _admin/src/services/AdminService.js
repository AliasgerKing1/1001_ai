import axios from "axios"

let apiUrl = "http://localhost:4000/api/admin/"

let loginAdmin = async (data) => {
    return await axios.post(`${apiUrl}`, data)
}

export {loginAdmin}
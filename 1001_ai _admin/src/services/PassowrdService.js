import axios from "axios"

let apiUrl = "http://localhost:4000/api/password/"

let getCode = async (token) => {
    return await axios.get(`${apiUrl}member`, { headers: { token } })
}

export {getCode}
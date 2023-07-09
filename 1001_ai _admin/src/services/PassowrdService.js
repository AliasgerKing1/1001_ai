import axios from "axios"

let apiUrl = "http://localhost:4000/api/password/"

let getCode = async () => {
    return await axios.get(`${apiUrl}member`)
}

export {getCode}
import axios from "axios"
let apiUrl = "http://localhost:4002/api/generation/"
let getImage = async () => {
return await axios.post(`${apiUrl}image`)
}

export {getImage}
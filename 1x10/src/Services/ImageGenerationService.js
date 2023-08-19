import axios from "axios"

// let apiUrl = "http://localhost:4001/api/image/generate/";
let apiUrl = "https://onex10.onrender.com/api/image/generate/";

let generateImage = async (token, data) => {
return await axios.post(apiUrl, data, {headers : {token}})
}

export {generateImage}
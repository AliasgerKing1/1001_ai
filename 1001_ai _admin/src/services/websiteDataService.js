import axios from "axios"

let apiUrl = "http://localhost:4000/api/website/"
let getWebsiteName = async () => {
return await axios.get(`${apiUrl}name`)
}

export { getWebsiteName }
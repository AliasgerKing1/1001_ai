import axios from "axios"

let apiUrl = "http://localhost:4000/api/website/"
let getWebsiteName = async () => {
return await axios.get(`${apiUrl}name`)
}
let postWebsite = async (data) => {
return await axios.post(`${apiUrl}add`, data)
}

export { getWebsiteName, postWebsite }
import axios from "axios"

let apiUrl = "http://localhost:4002/api/website/"
let getWebsiteleft = async () => {
return await axios.get(`${apiUrl}left`)
}
let postWebsiteLeft = async (data) => {
return await axios.post(`${apiUrl}addleft`, data)
}
let getWebsiteDone = async () => {
return await axios.get(`${apiUrl}done`)
}
let postWebsiteDone = async (data) => {
return await axios.post(`${apiUrl}adddone`, data)
}

export { getWebsiteDone, postWebsiteDone, postWebsiteLeft, getWebsiteleft }
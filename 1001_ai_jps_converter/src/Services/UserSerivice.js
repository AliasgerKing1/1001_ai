import axios from 'axios'

let apiUrl = 'http://localhost:4006/api/user/'

let addUser = async (data) => {
    return await axios.post(apiUrl, data);
}
let getUser = async (token) => {
    return await axios.get(apiUrl, {headers : {token}});
}
let loginUser = async (data) => {
    return await axios.post(`${apiUrl}loginauth`, data);
}

export {addUser, loginUser, getUser}
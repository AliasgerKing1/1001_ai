import axios from 'axios'

let apiUrl = 'http://localhost:4007/api/admin/'

let getAdmin = async (token) => {
    return await axios.get(apiUrl, {headers : {token}});
}
let updateAdmin = async (token, data) => {
    return await axios.put(apiUrl, data, {headers : {token}});
}
let loginAdmin = async (data) => {
    return await axios.post(`${apiUrl}loginauth`, data);
}

export {loginAdmin, getAdmin, updateAdmin}
import axios from 'axios'

let apiUrl = 'http://localhost:4008/api/user/'

let signupGoogle = async (data) => {
    return await axios.post(`${apiUrl}google`, data);
}
let signup = async (data) => {
    return await axios.post(`${apiUrl}`, data);
}
let login = async (data) => {
    return await axios.post(`${apiUrl}loginauth`, data);
}
let getUserData = async (token) => {
    return await axios.get(`${apiUrl}`, {headers : {token}});
}

export {signupGoogle, signup, login, getUserData}
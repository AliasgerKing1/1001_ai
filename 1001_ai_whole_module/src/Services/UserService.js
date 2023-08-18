import axios from 'axios'

let apiUrl = 'http://localhost:4000/api/user/'

let SignupUser = async(data) => {
    return await axios.post(apiUrl, data)
}
let SigninUser = async(data) => {
    return await axios.post(`${apiUrl}loginauth`, data)
}
let getUser = async(token) => {
    return await axios.get(apiUrl, {headers : {token}})
}

export {SignupUser, SigninUser, getUser}
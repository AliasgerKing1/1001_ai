import axios from "axios"

// let apiurl = "http://localhost:4001/api/user/";
let apiurl = "https://onex10.onrender.com/api/user/";

let adduser = async (data) => {
    return await axios.post(apiurl, data);
}
let loginUser = async (data) => {
    return await axios.post(`${apiurl}loginauth`, data);
}
let fetchUser = async (token) => {
    return await axios.get(`${apiurl}`, {headers : {token}});
}

export {adduser, loginUser, fetchUser}
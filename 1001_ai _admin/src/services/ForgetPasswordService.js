import axios from "axios"

let apiUrl = "http://localhost:4000/api/otp/"
let genOtp = async (admin_token) => {
    return await axios.get(apiUrl, {headers : {admin_token}})
}
let checkOtp = async (admin_token, otp) => {
    return await axios.post(apiUrl, otp, {headers : {admin_token}})
}
let createNewPass = async (admin_token, pass) => {
    return await axios.post(`${apiUrl}create/pass`, pass, {headers : {admin_token}})
}

export {genOtp, checkOtp, createNewPass}
import axios from "axios"

const apiurl = "http://localhost:4000/api/lockscreen/";

let checkPassword = async (user_token, pass) => {
    return await axios.post(`${apiurl}`, pass, {headers : {user_token}});
}

export {checkPassword}
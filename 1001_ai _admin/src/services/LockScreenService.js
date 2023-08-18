import axios from "axios"

const apiurl = "http://localhost:4002/api/lockscreen/";

let checkPassword = async (admin_token, pass) => {
    return await axios.post(`${apiurl}`, pass, {headers : {admin_token}});
}

export {checkPassword}
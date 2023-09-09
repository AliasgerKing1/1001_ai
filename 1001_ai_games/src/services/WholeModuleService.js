import axios from 'axios'

let apiUrl = 'http://localhost:4000/api/user/loginauth'

let checkUser = async (data) => {
    return await axios.post(apiUrl, data);
}

export{checkUser}
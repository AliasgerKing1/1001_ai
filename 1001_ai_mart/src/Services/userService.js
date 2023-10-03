import axios from 'axios'

let apiUrl = 'http://localhost:4008/api/user/'

let signupGoogle = async (data) => {
    return await axios.post(`${apiUrl}google`, data);
}

export {signupGoogle}
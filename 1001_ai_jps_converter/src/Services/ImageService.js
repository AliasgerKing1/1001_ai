import axios from 'axios'

let apiUrl = 'http://localhost:4006/api/image/';

let addImage = async (data) => {
return await axios.post(apiUrl, data);
}
let DeleteAllImage = async (data) => {
return await axios.delete(apiUrl);
}

export {addImage, DeleteAllImage}
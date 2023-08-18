import axios from 'axios'

let apiUrl = "http://localhost:4000/api/feature/list/"

let getFeatureList = async () => {
    return await axios.get(apiUrl) 
}

export {getFeatureList}
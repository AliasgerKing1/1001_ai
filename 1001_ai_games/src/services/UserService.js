/*eslint-disable */
import axios from "axios"

const apiUrl = "http://localhost:4000/api/user";
// const apiUrl = "https://sabka-app.onrender.com/api/user";
const apiOtpUrl = "http://localhost:4000/api/otp";
// const apiOtpUrl = "https://sabka-app.onrender.com/api/otp";

let addUser = async (data) => {
    return await axios.post(apiUrl, data);
}
// let token = localStorage.getItem("token");
// const header = token;

let getUser = async () => {
    return await axios.get("http://localhost:4000/api/user/?limit=8&page=0");
}

// let getUser = async () => {
//     return await axios.get(apiUrl,{ headers: { header } });
// }

let getUserById = async (token) => {
  return await axios.get(`${apiUrl}/${token}`);
}
let getUserByOtpId = async (id) => {
  return await axios.get(`${apiUrl}/otpid/${id}`);
}

let getUserByDirectId = async (id) => {
  return await axios.get(`${apiUrl}/directid/${id}`);
}
let updateUserById = async (id, obj) => {
  return await axios.put(`${apiUrl}/${id}`, obj);
}
let updateOtherUserById = async (id, obj) => {
  return await axios.put(`${apiUrl}/other/${id}`, obj);
}
let unFriendUser = async (obj) => {
  return await axios.post(`${apiUrl}/unfollow`, obj);
}
let unFriendOtherUser = async (obj) => {
  return await axios.post(`${apiUrl}/other/unfollow`, obj);
}
let getFollwingsList = async (id) => {
  return await axios.get(`${apiUrl}/fetchfollowings/${id}`);
}
let getFollwersList = async (id) => {
  return await axios.get(`${apiUrl}/fetchfollowers/${id}`);
}

let getFollowersByDirect = async (ids) => {
return await axios.post(`${apiUrl}/fetchfollowersDirect`, ids)
}
let getFollowingsByDirect = async (ids) => {
return await axios.post(`${apiUrl}/fetchfollowersDirect`, ids)
}
//Signin area
let Logout = () => {
    localStorage.clear();
  }
  let DoLogin = (obj) => {
    return axios.post(
        'http://localhost:4000/api/user/loginauth',
        // 'https://sabka-app.onrender.com/api/user/loginauth',
        obj
      );
    }
  
    let IsSignin = () => {
      if (localStorage.getItem("token")) {
        return true;
      } else {
        return false;
      }
    }
    
    let checkUser = async (obj) => {
      return await axios.post(`${apiUrl}/checkuser`, obj)
    }


    //otp area
    let signupOtp = async (id) => {
      return await axios.get(`${apiOtpUrl}/${id}`)
    }

    let otpIn = async (id) => {
return await axios.get(`${apiOtpUrl}/otpin/${id}`)
    }

    let checkOtp = async (otp)=> {
      return await axios.post(`${apiOtpUrl}/checkotp`, otp)
    }

    let otpVerfied = async (id) => {
      return await axios.get(`${apiOtpUrl}/otpverified/${id}`)
    }

    //search area

    let searchQuery = async (searchquery) => {
return await axios.get(`${apiUrl}/search/${searchquery}`)
    }
export { addUser, getUser , getUserById, getUserByDirectId, updateUserById, updateOtherUserById , unFriendUser, unFriendOtherUser, getFollwingsList, getFollwersList, getFollowersByDirect, getFollowingsByDirect, DoLogin, IsSignin , Logout,  checkUser,  signupOtp,  otpIn,  checkOtp,  otpVerfied,  getUserByOtpId, searchQuery }
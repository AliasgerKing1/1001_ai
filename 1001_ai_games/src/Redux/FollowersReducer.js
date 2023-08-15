import {createSlice} from "@reduxjs/toolkit";

let initialState = [];

let followersReducer = createSlice({
    name : "Follower",
    initialState,
    reducers : {
        getFollowersRedux(state, action) {
return action.payload;
        }
    }
})

export default followersReducer.reducer;
export const {getFollowersRedux} = followersReducer.actions;
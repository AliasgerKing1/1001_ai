import {createSlice} from "@reduxjs/toolkit";

let initialState = [];

let followingsReducer = createSlice({
    name : "Followings",
    initialState,
    reducers : {
        getFollowingsRedux(state, action) {
return action.payload;
        }
    }
})

export default followingsReducer.reducer;
export const {getFollowingsRedux} = followingsReducer.actions;
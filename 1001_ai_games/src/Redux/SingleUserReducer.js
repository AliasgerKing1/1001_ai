import {createSlice} from "@reduxjs/toolkit";

let initialState = [];

let userReducer = createSlice({
    name : "single user",
    initialState,
    reducers : {
        getSingleUserRedux(state, action) {
return action.payload;
        }
    }
})

export default userReducer.reducer;
export const {getSingleUserRedux} = userReducer.actions;
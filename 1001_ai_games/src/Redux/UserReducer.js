import {createSlice} from "@reduxjs/toolkit";

let initialState = [];

let userReducer = createSlice({
    name : "user",
    initialState,
    reducers : {
        getUserRedux(state, action) {
return [...state, ...action.payload];
        }
    }
})

export default userReducer.reducer;
export const {getUserRedux} = userReducer.actions;
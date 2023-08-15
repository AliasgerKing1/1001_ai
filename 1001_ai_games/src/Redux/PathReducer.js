import {createSlice} from "@reduxjs/toolkit";

let initialState = [];

let userReducer = createSlice({
    name : "path",
    initialState,
    reducers : {
        getPath(state, action) {
return action.payload;
        }
    }
})

export default userReducer.reducer;
export const {getPath} = userReducer.actions;
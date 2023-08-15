import {createSlice} from "@reduxjs/toolkit";

let initialState = [];

let otherUserReducer = createSlice({
    name : "other user profile",
    initialState,
    reducers : {
        getOtherUserRedux(state, action) {
return action.payload;
        }
    }
})

export default otherUserReducer.reducer;
export const {getOtherUserRedux} = otherUserReducer.actions;
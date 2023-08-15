import {createSlice} from "@reduxjs/toolkit";

let initialState = [];

let TypeOtpReducer = createSlice({
    name : "Typeotpornot",
    initialState,
    reducers : {
        getTypeOtpRedux(state, action) {
return action.payload;
        }
    }
})

export default TypeOtpReducer.reducer;
export const {getTypeOtpRedux} = TypeOtpReducer.actions;
import {createSlice} from "@reduxjs/toolkit";

let initialState = [];

let otpReducer = createSlice({
    name : "otp",
    initialState,
    reducers : {
        getOtpRedux(state, action) {
return action.payload;
        }
    }
})

export default otpReducer.reducer;
export const {getOtpRedux} = otpReducer.actions;
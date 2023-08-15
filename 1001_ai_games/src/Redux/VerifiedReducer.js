import {createSlice} from "@reduxjs/toolkit";

let initialState = [];

let verificationReducer = createSlice({
    name : "verification",
    initialState,
    reducers : {
        getVerificationRedux(state, action) {
return action.payload;
        },
        getUrlLocationRedux(state, action) {
return action.payload;
        }
    }
})

export default verificationReducer.reducer;
export const {getVerificationRedux, getUrlLocationRedux} = verificationReducer.actions;
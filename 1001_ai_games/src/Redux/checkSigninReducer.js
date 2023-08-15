import {createSlice} from "@reduxjs/toolkit";

let initialState = [false];

let checkSigniReducer = createSlice({
    name : "checkSignIn",
    initialState,
    reducers : {
        gecheckSigninRedux(state, action) {
return action.payload;
        }
    }
})

export default checkSigniReducer.reducer;
export const {gecheckSigninRedux} = checkSigniReducer.actions;
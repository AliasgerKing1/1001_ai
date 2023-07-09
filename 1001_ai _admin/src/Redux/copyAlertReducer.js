import {createSlice} from "@reduxjs/toolkit"

let initialState = {
    success : false,
    error : false,
    successMsg : "",
    errorMsg: ""
}

let copyAlertReducer = createSlice({
    name : "copy reducer",
    initialState,
    reducers : {
        successRedFun : (state, action) => {
            state.success = action.payload
        },
        errorRedFun : (state, action) => {
            state.error = action.payload
        },
        successMsgRedFun : (state, action) => {
            state.successMsg = action.payload
        },
        errorMsgRedFun : (state, action) => {
            state.errorMsg = action.payload
        }
    }

})

export default copyAlertReducer.reducer
export const {successRedFun, errorRedFun, successMsgRedFun, errorMsgRedFun} = copyAlertReducer.actions
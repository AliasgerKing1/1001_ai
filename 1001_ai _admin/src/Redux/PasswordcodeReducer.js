import {createSlice} from "@reduxjs/toolkit"

let initialState = ""

let copyAlertReducer = createSlice({
    name : "password reducer",
    initialState,
    reducers : {
        codeRed(state, action) {
            return action.payload
        }

    }

})

export default copyAlertReducer.reducer
export const {codeRed} = copyAlertReducer.actions
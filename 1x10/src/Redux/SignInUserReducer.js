import {createSlice} from "@reduxjs/toolkit"

let initialState = {}

let DetailsReducer = createSlice({
    name : "sign in user",
    initialState,
    reducers : {
        SignInUserRed(state, action) {
            return action.payload
        },
    }
})

export default DetailsReducer.reducer
export const {SignInUserRed} = DetailsReducer.actions
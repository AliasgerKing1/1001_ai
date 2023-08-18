import {createSlice} from '@reduxjs/toolkit'

let initialState = {
    status : false,
    msg : ''
}

let SignupToastReducer = createSlice({
    name : 'signup toast',
    initialState,
    reducers : {
        signupToastStatusRed :(state, action) => {
            state.status = action.payload
        },
        signupToastMsgRed :(state, action) => {
            state.msg = action.payload
        },
    }
})

export default SignupToastReducer.reducer

export const {signupToastStatusRed, signupToastMsgRed} = SignupToastReducer.actions
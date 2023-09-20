import {createSlice} from '@reduxjs/toolkit'

let initialState = []

let userReducer = createSlice({
    name : 'user data',
    initialState,
    reducers : {
        userDataRed(state, action) {
            return action.payload
        }
    }
})

export default userReducer.reducer

export const {userDataRed} = userReducer.actions
import {createSlice} from '@reduxjs/toolkit'

let initialState = []

let UserReducer = createSlice({
    name : 'user data',
    initialState,
    reducers : {
        UserDataRed(state, action) {
            return action.payload
        }
    }
})

export default UserReducer.reducer

export const {UserDataRed} = UserReducer.actions
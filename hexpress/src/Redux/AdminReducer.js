import {createSlice} from '@reduxjs/toolkit'

let initialState = []

let adminReducer = createSlice({
    name : 'admin data',
    initialState,
    reducers : {
        adminDataRed(state, action) {
            return action.payload
        }
    }
})

export default adminReducer.reducer

export const {adminDataRed} = adminReducer.actions
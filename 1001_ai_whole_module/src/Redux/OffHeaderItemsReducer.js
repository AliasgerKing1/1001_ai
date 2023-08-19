import {createSlice} from '@reduxjs/toolkit'

let initialState = {
    language : false,
    notifications : false,
    profile : false
}

let HeaderItemOffReducer = createSlice({
    name : 'header items off',
    initialState,
    reducers : {
        LanguageRed :(state, action) => {
            state.language = action.payload
        },
        NotificationsRed :(state, action) => {
            state.notifications = action.payload
        },
        ProfileRed :(state, action) => {
            state.profile = action.payload
        },
    }
})

export default HeaderItemOffReducer.reducer

export const {LanguageRed, NotificationsRed, ProfileRed} = HeaderItemOffReducer.actions
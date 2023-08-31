import {createSlice} from '@reduxjs/toolkit'

let initialState = false

let selectToggleReducer = createSlice({
    name : 'select toggle',
    initialState,
    reducers : {
        selectToggleRed(state, action) {
            return action.payload
        }
    }
})

export default selectToggleReducer.reducer

export const {selectToggleRed} = selectToggleReducer.actions
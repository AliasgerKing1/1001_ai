import {createSlice} from "@reduxjs/toolkit"

let initialState = []

let AdminReducer = createSlice({
    name : "Admin Data",
    initialState,
    reducers : {
        AdminRed(state, action) {
            return action.payload
        }
    }

})

export default AdminReducer.reducer
export const {AdminRed} = AdminReducer.actions
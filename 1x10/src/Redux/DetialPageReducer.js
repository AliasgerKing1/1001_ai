import {createSlice} from "@reduxjs/toolkit"

let initialState = 
{
    page : false,
    id : ""
}

let DetailsReducer = createSlice({
    name : "image details",
    initialState,
    reducers : {
        DetailsRed : (state, action) => {
            state.page = action.payload
        },
        DetailsIdRed : (state, action) => {
            state.id = action.payload
        },
    }
})

export default DetailsReducer.reducer
export const {DetailsRed, DetailsIdRed} = DetailsReducer.actions
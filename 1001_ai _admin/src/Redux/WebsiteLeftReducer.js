import {createSlice} from "@reduxjs/toolkit"

let initialState = {
    web_left : []
}

let websiteLeftReducer = createSlice({
    name : "website left reducer",
    initialState,
    reducers : {
        webLeftRedFun : (state, action) => {
            state.web_left = action.payload
        },

    }

})

export default websiteLeftReducer.reducer
export const {webLeftRedFun} = websiteLeftReducer.actions
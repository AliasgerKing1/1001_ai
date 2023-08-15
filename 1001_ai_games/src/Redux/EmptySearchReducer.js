import {createSlice} from "@reduxjs/toolkit";

let initialState = false;

let emptySearchReducer = createSlice({
    name : "empty search",
    initialState,
    reducers : {
        getEmptySearchRedux(state, action) {
return action.payload;
        },
    }
})

export default emptySearchReducer.reducer;
export const {getEmptySearchRedux} = emptySearchReducer.actions;
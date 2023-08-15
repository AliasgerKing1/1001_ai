
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
};

const redirectFollowerReducer = createSlice({
    name : "redirect follow user",
    initialState,
    reducers : {
        getRedirectFollowerRedux(state, action) {
return action.payload;
        }
    }
});

export const { getRedirectFollowerRedux } = redirectFollowerReducer.actions;

export default redirectFollowerReducer.reducer;



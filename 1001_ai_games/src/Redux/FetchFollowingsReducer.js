
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const followingsReducer = createSlice({
    name : "fetch followings user",
    initialState,
    reducers : {
        getFollowingsRedux(state, action) {
return action.payload;
        }
    }
});

export const { getFollowingsRedux } = followingsReducer.actions;

export default followingsReducer.reducer;



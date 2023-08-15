
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const followersReducer = createSlice({
    name : "fetch follower user",
    initialState,
    reducers : {
        getFollowersRedux(state, action) {
return action.payload;
        }
    }
});

export const { getFollowersRedux } = followersReducer.actions;

export default followersReducer.reducer;



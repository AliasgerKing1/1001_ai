
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme_name : ''
};

const createAppReducer = createSlice({
  name: 'create app',
  initialState,
  reducers: {
    step_1(state, action) {
      state.theme_name = action.payload;
    },
  }
});

export const { step_1 } = createAppReducer.actions;

export default createAppReducer.reducer;



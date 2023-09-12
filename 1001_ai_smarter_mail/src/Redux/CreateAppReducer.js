
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme_name : 'Vuexy',
    step_2 : {
      p_link : "",
      p_name : "",
      p_cateogry : "",
      p_member : [],
      p_description : "",
      p_git : true,
    }
};

const createAppReducer = createSlice({
  name: 'create app',
  initialState,
  reducers: {
    step_1(state, action) {
      state.theme_name = action.payload;
    },
    step_2(state, action) {
      state.step_2 = action.payload;
    },
  }
});

export const { step_1, step_2 } = createAppReducer.actions;

export default createAppReducer.reducer;



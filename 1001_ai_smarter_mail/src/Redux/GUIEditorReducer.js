
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    move : false,
    mouse : false,
    frame : false,
};

const GUIEditorReducer = createSlice({
  name: 'create app',
  initialState,
  reducers: {
    step_1(state, action) {
      state.move = action.payload;
    },
    step_2(state, action) {
      state.mouse = action.payload;
    },
    step_3(state, action) {
      state.frame = action.payload;
    },
  }
});

export const { step_1, step_2, step_3 } = GUIEditorReducer.actions;

export default GUIEditorReducer.reducer;



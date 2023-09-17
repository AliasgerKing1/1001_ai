
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    move : false,
    mouse : false,
    frame : false,
    allFrames : [],
    shape : false,
    drawShape : false,
    selectedShape : "rectangle",
    shapes : []
};

const GUIEditorReducer = createSlice({
  name: 'create app',
  initialState,
  reducers: {
    Frames(state, action) {
      state.allFrames = action.payload;
    },
    step_1(state, action) {
      state.move = action.payload;
    },
    step_2(state, action) {
      state.mouse = action.payload;
    },
    step_3(state, action) {
      state.frame = action.payload;
    },
    step_4(state, action) {
      state.shape = action.payload;
    },
    step_5(state, action) {
      state.selectedShape = action.payload;
    },
    step_6(state, action) {
      state.drawShape = action.payload;
    },
  }
});

export const { step_1, step_2, step_3, Frames, step_4, step_5, step_6 } = GUIEditorReducer.actions;

export default GUIEditorReducer.reducer;
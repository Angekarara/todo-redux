import { createSlice } from "@reduxjs/toolkit";

const initialTask = {text:""};
export const toDoSlice = createSlice({
  name: "task",
  initialState: { value: initialTask },
  reducers: {
    addTask: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {addTask} = toDoSlice.actions;

export default toDoSlice.reducer;

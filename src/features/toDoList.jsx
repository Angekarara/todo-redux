import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] };
export const toDoSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.value.push(action.payload);
    },
    deleteTask: (state, action) =>{
        state.value = state.value.filter((_, index) => index !== action.payload)
    }
  },
});

export const { addTask, deleteTask } = toDoSlice.actions;

export default toDoSlice.reducer;

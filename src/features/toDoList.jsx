import { createSlice } from "@reduxjs/toolkit";
 
const initialTask = ""
const toDoSlice = createSlice({
    name: "task",
    initialState: {value: initialTask},
    reducers:{
        addTask: (state, action) =>{
            state.value = action.payload
        }
    }
})
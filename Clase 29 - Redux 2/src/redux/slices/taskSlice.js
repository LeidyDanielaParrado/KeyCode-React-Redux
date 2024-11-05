import { createSlice } from "@reduxjs/toolkit";

const initialTask = [];

export const taskSlice = createSlice({
  name: "task",
  initialState: initialTask,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }

        return task;
      });
    },
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
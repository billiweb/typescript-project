import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { todosProps } from "../../type/todo";

const initialState = [
  {
    id: nanoid(),
    title: "제목 1",
    contents: "내용 1",
    isDone: false,
  },
  {
    id: nanoid(),
    title: "제목 2",
    contents: "내용 2",
    isDone: false,
  },
  {
    id: nanoid(),
    title: "제목 3",
    contents: "내용 3",
    isDone: true,
  },
];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return state;
    },
  },
});
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;

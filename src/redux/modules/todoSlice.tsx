import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { TodosProps } from "../../type/todo";

const initialState: TodosProps[] = [
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
      console.log(action.payload);
      // return [...state, action.payload];
      state.push(action.payload);
    },
  },
});
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;

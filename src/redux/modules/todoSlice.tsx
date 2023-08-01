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
      return [...state, action.payload];
      // state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
    switchTodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });
    },
  },
});
export const { addTodo, deleteTodo, switchTodo } = todoSlice.actions;
export default todoSlice.reducer;

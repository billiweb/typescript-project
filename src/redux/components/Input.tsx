import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { inputProps, TodosProps } from "../../type/todo";
import { useDispatch } from "react-redux";
import { addTodo } from "../modules/todoSlice";

const Input: React.FC<inputProps> = ({ todos }) => {
  const [title, setTitle] = useState<string>();
  const [contents, setContents] = useState<string>();

  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const newTodo: TodosProps = {
          id: nanoid(),
          title,
          contents,
          isDone: false,
        };
        dispatch(addTodo(newTodo));
        // setTodos([...todos, newTodo]);
      }}
    >
      <input
        placeholder="제목"
        type="text"
        value={title}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setTitle(event.target.value);
        }}
      />
      <input
        placeholder="내용"
        type="text"
        value={contents}
        onChange={(event) => {
          setContents(event.target.value);
        }}
      />
      <button>입력하기</button>
    </form>
  );
};

export default Input;

import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { inputProps } from "../../type/todo";

const Input: React.FC<inputProps> = ({ todos, setTodos }) => {
  const [title, setTitle] = useState<string>();
  const [contents, setContents] = useState<string>();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const newTodo = {
          id: nanoid(),
          title,
          contents,
          isDone: false,
        };
        setTodos([...todos, newTodo]);
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

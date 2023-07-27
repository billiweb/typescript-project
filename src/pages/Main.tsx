import { useState } from "react";
import { styled } from "styled-components";
import { nanoid } from "@reduxjs/toolkit";
import todosProps from "../type/todo";
// import Input from "../redux/components/Input";

const Main: React.FC = () => {
  const [title, setTitle] = useState<string>();
  const [contents, setContents] = useState<string>();

  const initialTodo = [
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

  const [todos, setTodos] = useState<todosProps[]>(initialTodo);

  return (
    <div>
      <header>My Todo List</header>
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
      <div>
        <h2>진행중 👩‍💻</h2>
        {todos
          .filter((todo) => todo.isDone === false)
          .map((todo) => {
            return (
              <StList key={todo.id}>
                <p>{todo.id}</p>
                <p>{todo.title}</p>
                <p>{todo.contents}</p>
                <p>{todo.isDone.toString()}</p>
                <button
                  onClick={() => {
                    const deleteTodos = todos.filter((item) => {
                      return item.id !== todo.id;
                    });
                    setTodos(deleteTodos);
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    const switchTodos = todos.map((item) => {
                      if (item.id === todo.id) {
                        return { ...item, isDone: !item.isDone };
                      } else {
                        return item;
                      }
                    });
                    setTodos(switchTodos);
                  }}
                >
                  완료
                </button>
              </StList>
            );
          })}
      </div>
      <div>
        <h2>완료 🎉</h2>
        {todos
          .filter((todo) => todo.isDone === true)
          .map((todo) => {
            return (
              <StList key={todo.id}>
                <p>{todo.id}</p>
                <p>{todo.title}</p>
                <p>{todo.contents}</p>
                <p>{todo.isDone.toString()}</p>
                <button
                  onClick={() => {
                    const deleteTodos = todos.filter((item) => {
                      return item.id !== todo.id;
                    });
                    setTodos(deleteTodos);
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    const switchTodos = todos.map((item) => {
                      if (item.id === todo.id) {
                        return { ...item, isDone: !item.isDone };
                      } else {
                        return item;
                      }
                    });
                    setTodos(switchTodos);
                  }}
                >
                  취소
                </button>
              </StList>
            );
          })}
      </div>
    </div>
  );
};

export default Main;

const StList = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 300px;
`;

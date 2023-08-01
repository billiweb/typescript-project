import { useState } from "react";
import { todosProps } from "../type/todo";
import Input from "../redux/components/Input";
import List from "../redux/components/List";
import { useSelector } from "react-redux";
import { RootState } from "../redux/modules";

const Main = () => {
  const initialTodo = useSelector((state: RootState) => state.todoSlice);
  const [todos, setTodos] = useState<todosProps[]>(initialTodo);

  return (
    <div>
      <header>My Todo List</header>
      <Input todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Main;

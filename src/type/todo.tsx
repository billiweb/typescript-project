import { SetStateAction } from "react";

export type TodosProps = {
  id: string | undefined;
  title: string | undefined;
  contents: string | undefined;
  isDone: boolean;
};

export interface InputProps {
  todos: TodosProps[];
  isDone?: boolean;
  // setTodos: React.Dispatch<SetStateAction<TodosProps[]>>;
}

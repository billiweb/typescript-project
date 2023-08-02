import { SetStateAction } from "react";

export interface TodosProps {
  id: string;
  title: string | undefined;
  contents: string | undefined;
  isDone: boolean;
}

export interface InputProps {
  todos: TodosProps[];
  isDone?: boolean;
  // setTodos: React.Dispatch<SetStateAction<TodosProps[]>>;
}

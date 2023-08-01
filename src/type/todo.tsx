import { SetStateAction } from "react";

export interface TodosProps {
  id: string;
  title: string | undefined;
  contents: string | undefined;
  isDone: boolean;
}

export interface inputProps {
  todos: TodosProps[];
  // setTodos: React.Dispatch<SetStateAction<TodosProps[]>>;
}

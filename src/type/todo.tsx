import { SetStateAction } from "react";

export interface todosProps {
  id: string;
  title: string | undefined;
  contents: string | undefined;
  isDone: boolean;
}

export interface inputProps {
  todos: todosProps[];
  setTodos: React.Dispatch<SetStateAction<todosProps[]>>;
}

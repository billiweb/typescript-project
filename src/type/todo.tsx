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

// const chiledProps: React.FC<todosProps> = ({ id, title, contents, isDone }) => {
//   return (
//     <div>
//       <p>{id}</p>
//       <p>{title}</p>
//       <p>{contents}</p>
//       <p>{isDone}</p>
//     </div>
//   );
// };

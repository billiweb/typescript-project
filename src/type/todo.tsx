interface todosProps {
  id: string;
  title: string | undefined;
  contents: string | undefined;
  isDone: boolean;
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

export default todosProps;

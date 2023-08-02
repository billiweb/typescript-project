import Input from "../redux/components/Input";
import List from "../redux/components/List";
import { useSelector } from "react-redux";
import { RootState } from "../redux/config/configStore";

const Main = () => {
  const todos = useSelector((state: RootState) => state.todoSlice);

  return (
    <div>
      <header>My Todo List</header>
      <Input todos={todos} />
      <List isDone={false} todos={todos} />
      <List isDone={true} todos={todos} />
    </div>
  );
};

export default Main;

import { useState } from "react";
import { RootState } from "../redux/config/configStore";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editTodo } from "../redux/modules/todoSlice";
import { TodosProps } from "../type/todo";

const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todoSlice);
  const { id } = useParams();

  const filterTodos = todos.find((todo) => {
    return todo.id === id;
  });

  const [editTitle, setEditTitle] = useState<string>(filterTodos?.title || "");
  const [editContents, setEditContents] = useState<string>(
    filterTodos?.contents || ""
  );

  // type TodoWithoutIsDone = Omit<TodosProps, "isDone">;

  // console.log(">>", filterTodos);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (editTitle === "" || editContents === "") {
            alert("내용을 입력해라!");
            return false;
          }
          const updateTodo: TodosProps = {
            id,
            title: editTitle,
            contents: editContents,
            isDone: false,
          };
          dispatch(editTodo(updateTodo));
          navigate("/");
        }}
      >
        <input
          type="text"
          value={editTitle}
          onChange={(e) => {
            setEditTitle(e.target.value);
          }}
        />
        <input
          type="text"
          value={editContents}
          onChange={(e) => {
            setEditContents(e.target.value);
          }}
        />
        <button type="submit">수정완료</button>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          취소
        </button>
      </form>
    </div>
  );
};

export default Detail;

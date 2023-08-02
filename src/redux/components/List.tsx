import { styled } from "styled-components";
import { InputProps, TodosProps } from "../../type/todo";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTodo, switchTodo } from "../modules/todoSlice";

const List = ({ todos, isDone }: InputProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h2>{isDone ? "완료" : "진행중 👩‍💻"}</h2>
        {todos
          .filter((todo) => todo.isDone === isDone)
          .map((todo) => {
            return (
              <StList key={todo.id}>
                <p>{todo.id}</p>
                <p>{todo.title}</p>
                <p>{todo.contents}</p>
                <p>{todo.isDone.toString()}</p>
                <button
                  onClick={() => {
                    dispatch(deleteTodo(todo.id));
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    dispatch(switchTodo(todo.id));
                  }}
                >
                  완료
                </button>
                <button
                  onClick={() => {
                    navigate(`/:${todo.id}`);
                  }}
                >
                  수정
                </button>
              </StList>
            );
          })}
      </div>
      {/* <div>
        <h2>완료 🎉</h2>
        {todos
          .filter((todo) => todo.isDone === true)
          .map((todo) => {
            return (
              <StList key={todo.id}>
                <p>{todo.id}</p>
                <p>{todo.title}</p>
                <p>{todo.contents}</p>b<p>{todo.isDone.toString()}</p>
                <button
                  onClick={() => {
                    dispatch(deleteTodo(todo.id));
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    dispatch(switchTodo(todo.id));
                  }}
                >
                  취소
                </button>
                <button
                  onClick={() => {
                    navigate(`/:${todo.id}`, {
                      state: { todos },
                    });
                  }}
                >
                  수정
                </button>
              </StList>
            );
          })}
      </div> */}
    </>
  );
};

export default List;

const StList = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 300px;
`;

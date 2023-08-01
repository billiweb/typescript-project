import { styled } from "styled-components";
import { inputProps } from "../../type/todo";
import { useNavigate } from "react-router-dom";

const List: React.FC<inputProps> = ({ todos }) => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h2>진행중 👩‍💻</h2>
        {todos
          .filter((todo) => todo.isDone === false)
          .map((todo) => {
            return (
              <StList key={todo.id}>
                <p>{todo.id}</p>
                <p>{todo.title}</p>
                <p>{todo.contents}</p>
                <p>{todo.isDone.toString()}</p>
                <button
                  onClick={() => {
                    const deleteTodos = todos.filter((item) => {
                      return item.id !== todo.id;
                    });
                    // setTodos(deleteTodos);
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    const switchTodos = todos.map((item) => {
                      if (item.id === todo.id) {
                        return { ...item, isDone: !item.isDone };
                      } else {
                        return item;
                      }
                    });
                    // setTodos(switchTodos);
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
      <div>
        <h2>완료 🎉</h2>
        {todos
          .filter((todo) => todo.isDone === true)
          .map((todo) => {
            return (
              <StList key={todo.id}>
                <p>{todo.id}</p>
                <p>{todo.title}</p>
                <p>{todo.contents}</p>
                <p>{todo.isDone.toString()}</p>
                <button
                  onClick={() => {
                    const deleteTodos = todos.filter((item) => {
                      return item.id !== todo.id;
                    });
                    // setTodos(deleteTodos);
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    const switchTodos = todos.map((item) => {
                      if (item.id === todo.id) {
                        return { ...item, isDone: !item.isDone };
                      } else {
                        return item;
                      }
                    });
                    // setTodos(switchTodos);
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
      </div>
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

import React from "react";
import { inputProps } from "../type/todo";
import { useLocation } from "react-router-dom";

const Detail: React.FC = () => {
  const location = useLocation();
  const item = location.state.todos;

  console.log(item);

  return (
    <div>
      <p>Detail</p>
    </div>
  );
};

export default Detail;

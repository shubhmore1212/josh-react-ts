import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import DisplayTaskComponent from "./components";
import { useFetch } from "../../CustomHooks/useFetch";

import { TODO_URL } from "../DisplayTodo/constant";

const DisplayTaskContainer = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(TODO_URL + `/${id}`);
  const navigate = useNavigate();

  const deleteTodo = (todoId: any) => {
    fetch(`${TODO_URL}/${todoId}`, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
    navigate("/");
  };

  const markTodoCompleted = (completed: string) => {
    let tempObj = {
      ...data,
      completed: completed === "Completed" ? true : false,
    };
    fetch(`${TODO_URL}/${id}`, {
      method: "PATCH",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tempObj),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };

  return <DisplayTaskComponent 
  data={data}
  loading={loading}
  error={error}
  markTodoCompleted={markTodoCompleted}
  deleteTodo={deleteTodo}
  />;
};

export default React.memo(DisplayTaskContainer);

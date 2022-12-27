import React, { ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";

import DisplayTaskComponent from "./components";
import { useFetch } from "../../CustomHooks/useFetch";

import { ROUTES } from "../../appContants";
import { TASK_STATE } from "../../constant";

const DisplayTaskContainer = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    process.env.REACT_APP_TODO_URL +`/${id}`
  );
  const navigate = useNavigate();

  const deleteTodo = (todoId: number) => {
    fetch(`${process.env.REACT_APP_TODO_URL}/${todoId}`, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
    navigate(ROUTES.HOME);
  };

  const markTodoCompleted = (e: ChangeEvent<HTMLSelectElement>) => {
    let tempObj = {
      ...data,
      completed: e.target.value === TASK_STATE.COMPLETED ? true : false,
    };
    fetch(`${process.env.REACT_APP_TODO_URL}/${id}`, {
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

  return (
    <DisplayTaskComponent
      data={data}
      loading={loading}
      error={error}
      markTodoCompleted={markTodoCompleted}
      deleteTodo={deleteTodo}
    />
  );
};

export default React.memo(DisplayTaskContainer);

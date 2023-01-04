import React, { ReactElement, useEffect } from "react";
import { useState } from "react";

import ToDoComponent from "./components";
import { useFetch } from "../../CustomHooks/useFetch";

import { ToDoData } from "../../data/types/types";
import { TODO_URL } from "../../utils/constant";

const TodoContainer = (): ReactElement => {
  const [todos, setTodos] = useState<ToDoData[]>([]);
  const [showCompleted, setShowCompleted] = useState<boolean>(false);
  const { data, loading, error } = useFetch();

  useEffect(() => {
    if (!!data) setTodos(data);
  }, [data]);

  const displayTodos = showCompleted
    ? todos.filter((todo) => todo.completed)
    : todos;

  const markTodoCompleted = (id: number, completed: boolean) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          let tempObj = { ...todo, completed: completed };
          fetch(`${TODO_URL}/${id}`, {
            method: "PATCH",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(tempObj),
          })
            .then((res) => res.json())
            .catch((err) => err);
          return tempObj;
        } else {
          return todo;
        }
      })
    );
  };

  const statusHandler = () => {
    setShowCompleted(!showCompleted);
  };

  return (
    <ToDoComponent
      showCompleted={showCompleted}
      statusHandler={statusHandler}
      todos={displayTodos}
      markTodoCompleted={markTodoCompleted}
      loading={loading}
      error={error}
    />
  );
};

export default React.memo(TodoContainer);

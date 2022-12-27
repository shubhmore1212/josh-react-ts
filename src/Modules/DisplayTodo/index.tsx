import React, { useEffect } from "react";
import { useState } from "react";

import ToDoComponent from "./components";
import { useFetch } from "../../CustomHooks/useFetch";

import { ToDoData } from "../../data/types/types";

const TodoContainer = () => {
  const [todos, setTodos] = useState<ToDoData[]>([]);
  const [showCompleted, setShowCompleted] = useState<boolean>(false);
  const { data, loading, error } = useFetch(process.env.REACT_APP_TODO_URL);

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

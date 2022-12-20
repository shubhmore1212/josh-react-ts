import React, { useEffect } from "react";
import { useState } from "react";

import ToDoComponent from "./components";
import { useFetch } from "../CustomHooks/useFetch";

import { ToDoData } from "../data/types/types";

import { TODO_URL } from "./constant";

const TodoContainer = () => {
  const [todos,setTodos]=useState<ToDoData[]>([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const { data, loading, error } = useFetch(TODO_URL);

  useEffect(()=>{
    if(data!==null)
    setTodos(data);
  },[data]);

  const addTodo = (title: string) => {
    if (title.trim() === "") return;
    else {
      setTodos([...todos, { id: todos.length + 1, title, completed: false }]);
    }
  };

  const displayTodos = showCompleted
    ? todos.filter((todo) => todo.completed === true)
    : todos;

  const markTodoCompleted = (id: number, completed: boolean) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: completed };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <ToDoComponent
      addTodo={addTodo}
      showCompleted={showCompleted}
      setShowCompleted={setShowCompleted}
      todos={displayTodos}
      markTodoCompleted={markTodoCompleted}
      loading={loading}
      error={error}
    />
  );
};

export default React.memo(TodoContainer);

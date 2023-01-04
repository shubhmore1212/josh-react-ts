import React from "react";

import AddTodoButton from "./AddTodoButton";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";
import Loader from "../../../Shared/components/Loader";

import { ToDoData } from "../../../data/types/types";

interface IProps {
  showCompleted: boolean;
  statusHandler: () => void;
  todos: ToDoData[];
  markTodoCompleted: (id: number, showCompleted: boolean) => void;
  loading: boolean;
  error: string;
}

const ToDoComponent: React.FC<IProps> = (props) => {
  const {
    showCompleted,
    statusHandler,
    todos,
    markTodoCompleted,
    loading,
    error,
  } = props;

  if (loading) return <Loader />;

  return (
    <div>
      <h1>To Do</h1>
      <AddTodoButton />
      <TodoFilter showCompleted={showCompleted} statusHandler={statusHandler} />
      {!error ? (
        <TodoList todos={todos} markTodoCompleted={markTodoCompleted} />
      ) : (
        <div className="error-msg">{error}</div>
      )}
    </div>
  );
};

export default React.memo(ToDoComponent);

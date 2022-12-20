import React from "react";
import { InfinitySpin } from "react-loader-spinner";

import AddTodoForm from "./AddTodoForm";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";

import { ToDoData } from "../../data/types/types";

const ToDoComponent = ({
  addTodo,
  showCompleted,
  setShowCompleted,
  todos,
  markTodoCompleted,
  loading,
  error,
}: {
  addTodo: (title: string) => void;
  showCompleted: boolean;
  setShowCompleted: (showCompleted: boolean) => void;
  todos: ToDoData[];
  markTodoCompleted: (id: number, showCompleted: boolean) => void;
  loading: boolean;
  error: string;
}) => {
  return (
    <>
      <h1>To Do</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoFilter
        showCompleted={showCompleted}
        setShowCompleted={setShowCompleted}
      />
      {loading ? (
        <div className="loading-spinner">
          <InfinitySpin color="rgb(246, 162, 67)" width="200"   />
        </div>
      ) : (
        <>
          {error === "" ? (
            <TodoList todos={todos} markTodoCompleted={markTodoCompleted} />
          ) : (
            <div className="error-msg">{error}</div>
          )}
        </>
      )}
    </>
  );
};

export default React.memo(ToDoComponent);

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
  return (
    <>
      <h1>To Do</h1>
      <AddTodoButton />
      <TodoFilter
        showCompleted={props.showCompleted}
        statusHandler={props.statusHandler}
      />
      {props.loading ? (
        <Loader />
      ) : (
        <>
          {!props.error ? (
            <TodoList
              todos={props.todos}
              markTodoCompleted={props.markTodoCompleted}
            />
          ) : (
            <div className="error-msg">{props.error}</div>
          )}
        </>
      )}
    </>
  );
};

export default React.memo(ToDoComponent);

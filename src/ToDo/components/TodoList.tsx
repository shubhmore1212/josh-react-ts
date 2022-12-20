import React from "react";

import TodoListItem from "./TodoListItem";

import { ToDoData } from "../../data/types/types";

const TodoList = (props: {
  todos: ToDoData[];
  markTodoCompleted: (id: number, completed: boolean) => void;
}) => {
  return (
    <div className="list">
      <ul>
        {props.todos.map((todo, index) => (
          <TodoListItem
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            markTodoCompleted={props.markTodoCompleted}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default React.memo(TodoList);

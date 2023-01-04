import React from "react";

import TodoListItem from "./TodoListItem";

import { ToDoData } from "../../../data/types/types";

interface IProps {
  todos: ToDoData[];
  markTodoCompleted: (id: number, completed: boolean) => void;
}

const TodoList: React.FC<IProps> = (props) => {
  const {todos,markTodoCompleted}=props;
  
  return (
    <div className="list">
      <ul>
        {todos.map((todo, index) => (
          <TodoListItem
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            markTodoCompleted={markTodoCompleted}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default React.memo(TodoList);

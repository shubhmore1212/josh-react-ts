import React, { ReactElement } from "react";

import TodoListItem from "./TodoListItem";

import { ToDoData } from "../../../data/types/types";

interface IProps {
  todos: ToDoData[];
  markTodoCompleted: (id: number, completed: boolean) => void;
}

const TodoList: React.FC<IProps> = (props): ReactElement => {
  const { todos, markTodoCompleted } = props;
  console.log("Todo List");
  
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

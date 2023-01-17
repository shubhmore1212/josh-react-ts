import React, { ReactElement } from "react";

import TodoListItem from "./TodoListItem";

import { ToDoData } from "../../../data/types/types";

interface IProps {
  todos?: ToDoData[];
  markTodoCompleted: (id: number, completed: boolean) => void;
  pageNumber: number;
  pageNumberHandler: (pageNumber: number) => void;
}

const TodoList: React.FC<IProps> = (props): ReactElement => {
  const { todos, pageNumber, pageNumberHandler, markTodoCompleted } = props;

  return (
    <div className="list">
      <ul>
        {todos?.map((todo, index) => (
          <TodoListItem
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            markTodoCompleted={markTodoCompleted}
            key={todo.id}
          />
        ))}
      </ul>
      <button
        onClick={() => pageNumberHandler(pageNumber - 1)}
        disabled={pageNumber === 1}
      >
        Prev
      </button>
      {pageNumber}
      <button
        onClick={() =>
          pageNumberHandler(todos?.length !== 0 ? pageNumber + 1 : 1)
        }
      >
        Next
      </button>
    </div>
  );
};

export default React.memo(TodoList);

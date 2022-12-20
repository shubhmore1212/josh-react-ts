import React from "react";

const TodoListItem = ({
  id,
  title,
  completed,
  markTodoCompleted,
}: {
  id: number;
  title: string;
  completed: boolean;
  markTodoCompleted: (id: number, completed: boolean) => void;
}) => {
  return (
    <div className="show-list">
      <li>
        <input
          type="checkbox"
          className="check-box"
          checked={completed}
          onChange={(e) => markTodoCompleted(id, e.target.checked)}
        />
        <label htmlFor="task-title" className="task-title">
          {title}
        </label>
      </li>
    </div>
  );
};

export default React.memo(TodoListItem);

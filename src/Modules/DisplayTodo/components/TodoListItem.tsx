import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  id: number;
  title: string;
  completed: boolean;
  markTodoCompleted: (id: number, completed: boolean) => void;
}

const TodoListItem: React.FC<IProps> = (props) => {
  const {id,title,completed,markTodoCompleted}=props;
  
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
          <Link to={`display/${id}`}>{title}</Link>
        </label>
      </li>
    </div>
  );
};

export default React.memo(TodoListItem);

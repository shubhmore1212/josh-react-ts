import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  id: number;
  title: string;
  completed: boolean;
  markTodoCompleted: (id: number, completed: boolean) => void;
}

const TodoListItem: React.FC<IProps> = (props) => {
  return (
    <div className="show-list">
      <li>
        <input
          type="checkbox"
          className="check-box"
          checked={props.completed}
          onChange={(e) => props.markTodoCompleted(props.id, e.target.checked)}
        />
        <label htmlFor="task-title" className="task-title">
          <Link to={`display/${props.id}`}>{props.title}</Link>
        </label>
      </li>
    </div>
  );
};

export default React.memo(TodoListItem);
